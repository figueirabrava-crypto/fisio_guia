import { INITIAL_UPDATES_REGISTRY, SystemUpdateItem } from "../data/updatesData";

const TELEMETRY_QUEUE_KEY = "fisioguia_telemetry_queue";
const SYNCED_UPDATES_KEY = "fisioguia_synced_updates";
const LAST_SYNC_TIME_KEY = "fisioguia_last_sync_timestamp";

export interface TelemetryEvent {
  id: string;
  timestamp: string;
  subjectId?: string;
  eventType: "open" | "quiz_complete" | "topic_study";
  details?: Record<string, any>;
  offlineRecovered?: boolean;
}

class SyncManager {
  private isOnline: boolean = typeof navigator !== "undefined" ? navigator.onLine : true;
  private listeners: ((online: boolean) => void)[] = [];
  private updateCallbacks: ((updates: SystemUpdateItem[]) => void)[] = [];

  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("online", () => this.handleNetworkChange(true));
      window.addEventListener("offline", () => this.handleNetworkChange(false));
    }
  }

  public init() {
    this.recordAppOpen();
    if (this.isOnline) {
      this.flushTelemetryQueue();
      this.checkUpdates();
    }
  }

  private handleNetworkChange(online: boolean) {
    this.isOnline = online;
    this.listeners.forEach((cb) => cb(online));

    if (online) {
      console.log("[FisioGuia Sync] Dispositivo online detectado. Sincronizando fila offline e buscando atualizações dos 6 temas...");
      this.flushTelemetryQueue();
      this.checkUpdates();
    }
  }

  public onNetworkChange(callback: (online: boolean) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  public onUpdatesSynced(callback: (updates: SystemUpdateItem[]) => void): () => void {
    this.updateCallbacks.push(callback);
    return () => {
      this.updateCallbacks = this.updateCallbacks.filter((cb) => cb !== callback);
    };
  }

  public getOnlineStatus(): boolean {
    return this.isOnline;
  }

  public recordAppOpen(subjectId?: string) {
    const event: TelemetryEvent = {
      id: "ev_" + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString(),
      subjectId: subjectId || "geral",
      eventType: "open",
    };

    if (this.isOnline) {
      this.sendTelemetry([event]);
    } else {
      this.enqueueTelemetry(event);
    }
  }

  public recordStudyActivity(subjectId: string, type: "quiz_complete" | "topic_study", details?: Record<string, any>) {
    const event: TelemetryEvent = {
      id: "ev_" + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString(),
      subjectId,
      eventType: type,
      details,
    };

    if (this.isOnline) {
      this.sendTelemetry([event]);
    } else {
      this.enqueueTelemetry(event);
    }
  }

  private enqueueTelemetry(event: TelemetryEvent) {
    try {
      const raw = localStorage.getItem(TELEMETRY_QUEUE_KEY);
      const queue: TelemetryEvent[] = raw ? JSON.parse(raw) : [];
      queue.push(event);
      localStorage.setItem(TELEMETRY_QUEUE_KEY, JSON.stringify(queue));
    } catch {
      // safe fallback
    }
  }

  private async flushTelemetryQueue() {
    try {
      const raw = localStorage.getItem(TELEMETRY_QUEUE_KEY);
      if (!raw) return;
      const queue: TelemetryEvent[] = JSON.parse(raw);
      if (!queue || queue.length === 0) return;

      const eventsToSend = queue.map((ev) => ({ ...ev, offlineRecovered: true }));
      const success = await this.sendTelemetry(eventsToSend);

      if (success) {
        localStorage.removeItem(TELEMETRY_QUEUE_KEY);
        console.log(`[FisioGuia Sync] ${queue.length} evento(s) offline foram sincronizados com sucesso com o servidor.`);
      }
    } catch (e) {
      console.warn("Aviso ao liberar fila de telemetria:", e);
    }
  }

  private async sendTelemetry(events: TelemetryEvent[]): Promise<boolean> {
    try {
      const res = await fetch("/api/telemetry/ping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          events,
          deviceInfo: {
            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
            platform: typeof navigator !== "undefined" ? (navigator as any).userAgentData?.platform || navigator.platform : "",
            language: typeof navigator !== "undefined" ? navigator.language : "",
          },
        }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  public async checkUpdates(): Promise<{ success: boolean; count: number; updates: SystemUpdateItem[] }> {
    try {
      const res = await fetch("/api/updates/check");
      if (!res.ok) throw new Error("Erro na rede");
      const data = await res.json();

      const newUpdates: SystemUpdateItem[] = data.systemUpdates || INITIAL_UPDATES_REGISTRY;
      this.saveStoredUpdates(newUpdates);
      localStorage.setItem(LAST_SYNC_TIME_KEY, new Date().toISOString());

      this.updateCallbacks.forEach((cb) => cb(newUpdates));
      return { success: true, count: newUpdates.length, updates: newUpdates };
    } catch {
      const local = this.getStoredUpdates();
      return { success: false, count: local.length, updates: local };
    }
  }

  public getStoredUpdates(): SystemUpdateItem[] {
    try {
      const raw = localStorage.getItem(SYNCED_UPDATES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_UPDATES_REGISTRY;
  }

  public saveStoredUpdates(updates: SystemUpdateItem[]) {
    try {
      localStorage.setItem(SYNCED_UPDATES_KEY, JSON.stringify(updates));
    } catch {
      // ignore
    }
  }

  public getLastSyncTime(): string | null {
    return localStorage.getItem(LAST_SYNC_TIME_KEY);
  }

  public async fetchAuthorStats(): Promise<any> {
    try {
      const res = await fetch("/api/telemetry/stats");
      if (!res.ok) throw new Error("Falha ao carregar estatísticas");
      return await res.json();
    } catch {
      return null;
    }
  }
}

export const syncManager = new SyncManager();
