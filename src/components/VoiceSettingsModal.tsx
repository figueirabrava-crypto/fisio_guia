import React, { useState, useEffect } from "react";
import {
  X,
  Volume2,
  Sparkles,
  Sliders,
  Check,
  Play,
  RotateCcw,
  Bot,
  Laptop,
  Activity,
  HeartHandshake
} from "lucide-react";
import {
  speechService,
  AI_VOICES,
  AiVoiceId,
  TtsEngine,
  VoiceSettings
} from "../utils/speech";

interface VoiceSettingsModalProps {
  onClose: () => void;
}

export const VoiceSettingsModal: React.FC<VoiceSettingsModalProps> = ({ onClose }) => {
  const [settings, setSettings] = useState<VoiceSettings>(() => speechService.getSettings());
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isPlayingPreview, setIsPlayingPreview] = useState<boolean>(false);
  const [activePreviewId, setActivePreviewId] = useState<string | null>(null);

  useEffect(() => {
    // Carrega vozes locais
    const loadLocal = () => {
      const voices = speechService.getAvailableBrowserVoices();
      setBrowserVoices(voices);
    };

    loadLocal();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = loadLocal;
    }
  }, []);

  const handleUpdate = (updated: Partial<VoiceSettings>) => {
    const next = { ...settings, ...updated };
    setSettings(next);
    speechService.saveSettings(next);
  };

  const handleTestAiVoice = (voiceId: AiVoiceId, sampleText: string) => {
    speechService.stop();
    setActivePreviewId(voiceId);
    setIsPlayingPreview(true);

    // Salva temporariamente a voz selecionada
    handleUpdate({ engine: "ai", aiVoice: voiceId });

    speechService.speak(sampleText, {
      onEnd: () => {
        setIsPlayingPreview(false);
        setActivePreviewId(null);
      },
      onError: () => {
        setIsPlayingPreview(false);
        setActivePreviewId(null);
      },
    });
  };

  const handleTestBrowserVoice = (voiceURI: string, voiceName: string) => {
    speechService.stop();
    setActivePreviewId(voiceURI);
    setIsPlayingPreview(true);

    handleUpdate({ engine: "browser", browserVoiceURI: voiceURI });

    speechService.speak(
      `Olá! Esta é a voz ${voiceName} do seu navegador. Pronta para os seus estudos de fisiologia.`,
      {
        onEnd: () => {
          setIsPlayingPreview(false);
          setActivePreviewId(null);
        },
        onError: () => {
          setIsPlayingPreview(false);
          setActivePreviewId(null);
        },
      }
    );
  };

  const handleResetDefaults = () => {
    speechService.stop();
    const defaults: VoiceSettings = {
      engine: "ai",
      aiVoice: "Kore",
      browserVoiceURI: "",
      rate: 1.0,
      pitch: 1.0,
      humanizeMedicalTerms: true,
    };
    setSettings(defaults);
    speechService.saveSettings(defaults);
    speechService.testCurrentVoice("Configurações de voz restauradas com sucesso.");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in duration-300">
      {/* Header */}
      <div className="p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight flex items-center space-x-2">
              <span>Personalização da Narração em Voz</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30">
                Humanizada
              </span>
            </h2>
            <p className="text-xs text-slate-300">
              Escolha entre vozes de IA ultra-realistas ou vozes instaladas no seu dispositivo
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            speechService.stop();
            onClose();
          }}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Engine Selector Tabs */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center space-x-2">
        <button
          onClick={() => handleUpdate({ engine: "ai" })}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 border ${
            settings.engine === "ai"
              ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
              : "bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Vozes de IA Studio (Ultra-Humanizadas)</span>
        </button>

        <button
          onClick={() => handleUpdate({ engine: "browser" })}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 border ${
            settings.engine === "browser"
              ? "bg-slate-900 text-white border-slate-900 shadow-xs"
              : "bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
          }`}
        >
          <Laptop className="w-4 h-4 text-blue-400" />
          <span>Vozes do Seu Aparelho ({browserVoices.length})</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {/* SECTION 1: AI VOICES */}
        {settings.engine === "ai" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Locutores Disponíveis em Português do Brasil:
              </span>
              <span className="text-[11px] text-indigo-600 font-semibold flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Entonação e Dicção Natural</span>
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {AI_VOICES.map((v) => {
                const isSelected = settings.aiVoice === v.id;
                const isPlayingThis = isPlayingPreview && activePreviewId === v.id;

                return (
                  <div
                    key={v.id}
                    onClick={() => handleUpdate({ engine: "ai", aiVoice: v.id })}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? "bg-indigo-50/70 border-indigo-500 shadow-2xs"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-slate-900">
                          {v.name}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">
                          • {v.role} ({v.gender})
                        </span>
                        {v.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                            {v.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {v.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0 pt-0.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTestAiVoice(v.id, v.sampleText);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all ${
                          isPlayingThis
                            ? "bg-rose-500 text-white animate-pulse"
                            : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs"
                        }`}
                        title="Ouvir demonstração desta voz"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{isPlayingThis ? "Ouvindo..." : "Testar"}</span>
                      </button>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 2: BROWSER / SYSTEM VOICES */}
        {settings.engine === "browser" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Vozes Instaladas no seu Navegador / Sistema:
              </span>
            </div>

            {browserVoices.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                Nenhuma voz local encontrada no momento. Recomendamos utilizar as <strong>Vozes de IA Studio</strong> para a melhor experiência.
              </div>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {browserVoices.map((v) => {
                  const isSelected =
                    settings.browserVoiceURI === v.voiceURI ||
                    (!settings.browserVoiceURI && v.name.includes("Google"));
                  const isPlayingThis = isPlayingPreview && activePreviewId === v.voiceURI;
                  const isNatural =
                    v.name.toLowerCase().includes("natural") ||
                    v.name.toLowerCase().includes("google") ||
                    v.name.toLowerCase().includes("online");

                  return (
                    <div
                      key={v.voiceURI || v.name}
                      onClick={() =>
                        handleUpdate({
                          engine: "browser",
                          browserVoiceURI: v.voiceURI || v.name,
                        })
                      }
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-blue-50/80 border-blue-500 shadow-2xs"
                          : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="truncate flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-slate-800 truncate">
                            {v.name}
                          </span>
                          {isNatural && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              Neural / Online
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400">
                          Idioma: {v.lang}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTestBrowserVoice(v.voiceURI || v.name, v.name);
                          }}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all ${
                            isPlayingThis
                              ? "bg-rose-500 text-white animate-pulse"
                              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                          }`}
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{isPlayingThis ? "Tocando" : "Ouvir"}</span>
                        </button>

                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* SECTION 3: FINE-TUNING SLIDERS */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs">
            <Sliders className="w-4 h-4 text-indigo-600" />
            <span>Ajustes de Ritmo e Dicção</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Speed / Rate */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600">Velocidade da Narração:</span>
                <span className="font-bold text-slate-900">{settings.rate}x</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="1.3"
                step="0.05"
                value={settings.rate}
                onChange={(e) => handleUpdate({ rate: parseFloat(e.target.value) })}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>0.8x (Mais pausado)</span>
                <span>1.0x (Padrão)</span>
                <span>1.3x (Mais rápido)</span>
              </div>
            </div>

            {/* Pitch / Tone */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600">Tom Vocal (Agudo / Grave):</span>
                <span className="font-bold text-slate-900">{settings.pitch}x</span>
              </div>
              <input
                type="range"
                min="0.85"
                max="1.15"
                step="0.05"
                value={settings.pitch}
                onChange={(e) => handleUpdate({ pitch: parseFloat(e.target.value) })}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Mais encorpado</span>
                <span>Neutro</span>
                <span>Mais agudo</span>
              </div>
            </div>
          </div>

          {/* Medical Pronunciation Toggle */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-xs font-semibold text-slate-800">
                Humanizar pronúncia de termos médicos e fisiológicos
              </p>
              <p className="text-[11px] text-slate-500">
                Converte siglas e fórmulas (como <em>Na+/K+ ATPase</em>, <em>TFG</em>, <em>SRAA</em>, <em>PaO2</em>) em pronúncia falada fluida em português.
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.humanizeMedicalTerms}
              onChange={(e) => handleUpdate({ humanizeMedicalTerms: e.target.checked })}
              className="w-4 h-4 accent-indigo-600 rounded cursor-pointer shrink-0 ml-3"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
        <button
          onClick={handleResetDefaults}
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center space-x-1.5 font-medium transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restaurar Padrão</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => speechService.testCurrentVoice()}
            className="px-3.5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors flex items-center space-x-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Ouvir Teste</span>
          </button>
          <button
            onClick={() => {
              speechService.stop();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-colors"
          >
            Concluído
          </button>
        </div>
      </div>
    </div>
  );
};
