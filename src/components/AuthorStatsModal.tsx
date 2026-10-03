import React, { useState, useEffect } from "react";
import { X, ShieldCheck, Users, Wifi, WifiOff, BarChart3, RefreshCw, Eye, Smartphone } from "lucide-react";
import { syncManager } from "../utils/syncManager";

interface AuthorStatsModalProps {
  onClose: () => void;
}

export const AuthorStatsModal: React.FC<AuthorStatsModalProps> = ({ onClose }) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadStats = async () => {
    setLoading(true);
    const data = await syncManager.fetchAuthorStats();
    setStats(data);
    setLoading(false);
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-slate-900 p-5 sm:p-6 text-white flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-xl bg-white/20 text-white border border-white/30">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono-data uppercase tracking-wider text-amber-200 font-bold">
                    Painel Exclusivo do Autor
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-display">
                  Telemetria & Notificações de Acesso
                </h2>
              </div>
            </div>
            <p className="text-xs text-amber-100/90 max-w-xl">
              Acompanhamento de aberturas do FisioGuia e do arquivo HTML offline, sincronizadas automaticamente assim que os dispositivos se conectam.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-600">
            Autor Registrado: <strong className="text-amber-900 font-bold">Figueirabrava</strong> (figueirabrava@gmail.com)
          </div>

          <button
            onClick={loadStats}
            disabled={loading}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold cursor-pointer shadow-2xs"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} />
            <span>Atualizar</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {loading ? (
            <div className="py-16 text-center text-slate-400 text-xs">
              Carregando registros de acesso do servidor...
            </div>
          ) : stats ? (
            <>
              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
                  <div className="text-xs text-amber-800 font-bold flex items-center space-x-1.5">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span>Total de Acessos Registrados</span>
                  </div>
                  <div className="text-2xl font-black text-amber-950 font-mono-data">
                    {stats.totalOpens || 0}
                  </div>
                  <p className="text-[11px] text-amber-700">Aberturas registradas no app e arquivo HTML</p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-1">
                  <div className="text-xs text-indigo-800 font-bold flex items-center space-x-1.5">
                    <WifiOff className="w-4 h-4 text-indigo-600" />
                    <span>Recuperados da Fila Offline</span>
                  </div>
                  <div className="text-2xl font-black text-indigo-950 font-mono-data">
                    {stats.offlineRecovered || 0}
                  </div>
                  <p className="text-[11px] text-indigo-700">Abertos offline e notificados ao voltar o sinal</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                  <div className="text-xs text-emerald-800 font-bold flex items-center space-x-1.5">
                    <Wifi className="w-4 h-4 text-emerald-600" />
                    <span>Acessos Online Diretos</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-950 font-mono-data">
                    {stats.directOnline || 0}
                  </div>
                  <p className="text-[11px] text-emerald-700">Dispositivos conectados em tempo real</p>
                </div>
              </div>

              {/* Recent Accesses Log */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span>Últimas Notificações de Abertura (Store & Forward):</span>
                  </h3>
                  <span className="text-xs text-slate-500">Mostrando até 30 registros</span>
                </div>

                {stats.recentLogs && stats.recentLogs.length > 0 ? (
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                        <tr>
                          <th className="p-3">Data e Hora</th>
                          <th className="p-3">Origem / Modo</th>
                          <th className="p-3">Tema Estudado</th>
                          <th className="p-3">Dispositivo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {stats.recentLogs.map((log: any, idx: number) => (
                          <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3 font-mono-data text-slate-700">
                              {new Date(log.clientTimestamp).toLocaleString("pt-BR")}
                            </td>
                            <td className="p-3">
                              {log.offlineRecovered ? (
                                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold text-[10px] inline-flex items-center space-x-1">
                                  <WifiOff className="w-3 h-3" />
                                  <span>Fila Offline (Sincronizado)</span>
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] inline-flex items-center space-x-1">
                                  <Wifi className="w-3 h-3" />
                                  <span>Online Imediato</span>
                                </span>
                              )}
                            </td>
                            <td className="p-3 capitalize font-medium text-slate-800">
                              {log.subjectId}
                            </td>
                            <td className="p-3 text-slate-500 text-[11px]">
                              {log.device || "Navegador Web"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-400 text-xs bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    Nenhum registro ainda. Conforme as pessoas abrirem o app ou o arquivo offline, os eventos aparecerão aqui automaticamente.
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-500 text-xs">
              Não foi possível obter os dados de telemetria no momento.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Respeito à privacidade: telemetria estritamente educacional sem coleta de senhas ou dados pessoais.
          </span>
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
