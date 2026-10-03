import React, { useState, useEffect } from "react";
import { X, RefreshCw, Sparkles, Volume2, CheckCircle2, BookOpen, Clock, AlertCircle } from "lucide-react";
import { SystemUpdateItem } from "../data/updatesData";
import { syncManager } from "../utils/syncManager";
import { speechService } from "../utils/speech";

interface UpdatesModalProps {
  onClose: () => void;
  voiceAudioEnabled: boolean;
}

export const UpdatesModal: React.FC<UpdatesModalProps> = ({ onClose, voiceAudioEnabled }) => {
  const [updates, setUpdates] = useState<SystemUpdateItem[]>(() => syncManager.getStoredUpdates());
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [lastSync, setLastSync] = useState<string | null>(() => syncManager.getLastSyncTime());
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>("all");

  const handleManualCheck = async () => {
    setIsChecking(true);
    setStatusMessage("Conectando ao servidor para buscar novos dados dos 6 sistemas...");

    const res = await syncManager.checkUpdates();
    setIsChecking(false);

    if (res.success) {
      setUpdates(res.updates);
      setLastSync(new Date().toISOString());
      setStatusMessage("✅ Sincronização concluída com sucesso! Todos os 6 sistemas atualizados.");
    } else {
      setStatusMessage("ℹ️ Modo Offline: Exibindo atualizações salvas localmente no dispositivo.");
    }

    setTimeout(() => {
      setStatusMessage(null);
    }, 4500);
  };

  const filteredUpdates = selectedSubjectFilter === "all"
    ? updates
    : updates.filter((u) => u.subjectId === selectedSubjectFilter);

  const subjectsList = [
    { id: "all", label: "Todos os 6 Sistemas" },
    { id: "neurofisiologia", label: "Neurofisiologia" },
    { id: "fisiologia-celular", label: "Fisiologia Celular" },
    { id: "sensorial", label: "Sensorial" },
    { id: "digestorio", label: "Digestório" },
    { id: "cardiorrespiratorio", label: "Cardiorrespiratório" },
    { id: "excretor", label: "Renal & Excretor" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-5 sm:p-6 text-white flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <RefreshCw className={`w-5 h-5 ${isChecking ? "animate-spin" : ""}`} />
              </span>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono-data uppercase tracking-wider text-amber-300 font-bold">
                    Sincronização Automática ao Conectar
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 font-bold">
                    Autor: Figueirabrava
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-display">
                  Atualizações Médicas dos 6 Sistemas
                </h2>
              </div>
            </div>
            <p className="text-xs text-blue-200/80 max-w-2xl">
              Toda vez que seu aparelho fica online, o FisioGuia busca automaticamente novas descobertas, diretrizes e notas clínicas sobre os 6 módulos de Fisiologia e salva para uso offline.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sync Controls Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>Última checagem:</span>
            <strong className="text-slate-700">
              {lastSync ? new Date(lastSync).toLocaleString("pt-BR") : "Agora mesmo"}
            </strong>
          </div>

          <button
            onClick={handleManualCheck}
            disabled={isChecking}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? "animate-spin" : ""}`} />
            <span>{isChecking ? "Buscando..." : "Buscar Atualizações Agora"}</span>
          </button>
        </div>

        {statusMessage && (
          <div className="bg-amber-50 border-b border-amber-200 px-6 py-2.5 text-xs text-amber-900 flex items-center space-x-2 font-medium">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2 shrink-0 border-b border-slate-100">
          {subjectsList.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedSubjectFilter(item.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedSubjectFilter === item.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Scrollable Updates Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredUpdates.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {item.subjectTitle}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {item.title}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    speechService.speak(
                      `${item.title}. ${item.summary}. Aplicação clínica: ${item.clinicalImpact}`
                    );
                  }}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors shrink-0 cursor-pointer self-start sm:self-auto"
                >
                  <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Ouvir</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.summary}
              </p>

              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 space-y-1">
                <div className="font-bold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Impacto Clínico & Aplicação em Provas:</span>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  {item.clinicalImpact}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-slate-500 border-t border-slate-100">
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>Fonte: <strong>{item.officialReference}</strong></span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.keyConcepts.map((kc, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono-data text-[10px]"
                    >
                      {kc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            Modo offline ativo: as notas já baixadas permanecem armazenadas no seu aparelho.
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
