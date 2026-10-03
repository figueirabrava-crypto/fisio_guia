import React from "react";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { WifiOff, CheckCircle2 } from "lucide-react";

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <aside 
      aria-label="Aviso de conexão offline"
      className="fixed bottom-4 left-4 z-50 flex items-center space-x-2.5 rounded-2xl bg-slate-900/95 backdrop-blur-md px-4 py-2.5 text-xs font-semibold text-white shadow-xl border border-slate-700/80 animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
        <WifiOff className="w-3.5 h-3.5" />
      </div>
      <div>
        <div className="flex items-center space-x-1.5">
          <span className="font-bold text-amber-400">Modo Offline Ativo</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <p className="text-[11px] text-slate-300 font-normal">
          Todo o banco de 312 questões, atlas e simulação funcionam normalmente sem internet.
        </p>
      </div>
    </aside>
  );
};
