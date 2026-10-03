import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Square, Gauge, Mic, Sliders } from "lucide-react";
import { speechService, AI_VOICES, VoiceSettings } from "../utils/speech";

interface AudioPlayerBarProps {
  currentText: string;
  title: string;
  voiceAudioEnabled: boolean;
  themeColor?: string;
  onOpenVoiceSettings?: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentText,
  title,
  voiceAudioEnabled,
  themeColor = "#3b82f6",
  onOpenVoiceSettings,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(1.0);
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(() =>
    speechService.getSettings()
  );

  useEffect(() => {
    return speechService.subscribeSettings((s) => {
      setVoiceSettings(s);
      setRate(s.rate);
    });
  }, []);

  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  const getVoiceShortLabel = () => {
    if (voiceSettings.engine === "ai") {
      const v = AI_VOICES.find((item) => item.id === voiceSettings.aiVoice);
      return v ? v.name : "Voz IA";
    }
    return "Voz Local";
  };

  const handlePlay = () => {
    if (!currentText) return;
    setIsPlaying(true);
    speechService.speak(currentText, {
      rate: rate,
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  const handleStop = () => {
    speechService.stop();
    setIsPlaying(false);
  };

  const cycleRate = () => {
    const nextRate = rate === 1.0 ? 1.25 : rate === 1.25 ? 0.85 : 1.0;
    setRate(nextRate);
    if (isPlaying) {
      speechService.stop();
      speechService.speak(currentText, {
        rate: nextRate,
        onEnd: () => setIsPlaying(false),
        onError: () => setIsPlaying(false),
      });
    }
  };

  return (
    <div 
      className="bg-slate-950 text-white rounded-2xl p-3 sm:p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 border transition-all duration-300 backdrop-blur-md"
      style={{
        borderColor: `${themeColor}40`,
        boxShadow: `0 4px 20px -2px ${themeColor}20`,
      }}
    >
      {/* Label and Medical Soundwave / Equalizer animation */}
      <div className="flex items-center space-x-3.5 w-full sm:w-auto min-w-0">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors shadow-inner"
          style={{
            backgroundColor: `${themeColor}20`,
            borderColor: `${themeColor}50`,
            color: themeColor,
          }}
        >
          <Volume2 className="w-5 h-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center space-x-2">
            <span 
              className="text-[11px] font-mono-data font-bold uppercase tracking-wider"
              style={{ color: themeColor }}
            >
              Audiodescrição Fisiológica
            </span>

            {/* Medical Equalizer Bars */}
            {isPlaying ? (
              <span className="flex items-end space-x-0.5 h-3.5 px-1 py-0.5 bg-white/5 rounded">
                <span className="w-0.5 h-full rounded-full animate-pulse" style={{ backgroundColor: themeColor }} />
                <span className="w-0.5 h-2 rounded-full animate-pulse delay-75" style={{ backgroundColor: themeColor }} />
                <span className="w-0.5 h-full rounded-full animate-pulse delay-150" style={{ backgroundColor: themeColor }} />
                <span className="w-0.5 h-2.5 rounded-full animate-pulse delay-100" style={{ backgroundColor: themeColor }} />
                <span className="w-0.5 h-1.5 rounded-full animate-pulse delay-200" style={{ backgroundColor: themeColor }} />
              </span>
            ) : (
              <span className="text-[10px] text-slate-500 font-mono-data">● Pronto</span>
            )}
          </div>
          <p className="text-sm font-semibold text-slate-200 truncate mt-0.5">
            {title || "Explicação Didática"}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-2 w-full sm:w-auto justify-end shrink-0">
        {/* Voice Selector button */}
        {onOpenVoiceSettings && (
          <button
            onClick={onOpenVoiceSettings}
            className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 border border-white/10 transition-colors shadow-2xs"
            title="Trocar voz da narração (Dra. Sofia, Dr. Lucas, etc.)"
          >
            <Mic className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline text-slate-400 font-normal">Voz:</span>
            <span className="font-bold text-white truncate max-w-[100px]">{getVoiceShortLabel()}</span>
            <Sliders className="w-3 h-3 text-slate-400" />
          </button>
        )}

        {/* Speed button */}
        <button
          onClick={cycleRate}
          className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono-data font-semibold flex items-center space-x-1 border border-white/10 transition-colors"
          title="Velocidade da voz"
        >
          <Gauge className="w-3.5 h-3.5 text-slate-400" />
          <span>{rate}x</span>
        </button>

        {/* Play/Pause */}
        {isPlaying ? (
          <button
            id="audio-pause-btn"
            onClick={handleStop}
            className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-all active:scale-95"
          >
            <Pause className="w-4 h-4 fill-slate-950" />
            <span>Pausar</span>
          </button>
        ) : (
          <button
            id="audio-play-btn"
            onClick={handlePlay}
            className="px-4 py-1.5 rounded-xl text-white text-xs font-bold flex items-center space-x-1.5 shadow-md transition-all hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: themeColor,
              boxShadow: `0 2px 10px ${themeColor}60`,
            }}
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Ouvir</span>
          </button>
        )}

        {/* Stop */}
        {isPlaying && (
          <button
            id="audio-stop-btn"
            onClick={handleStop}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
            title="Parar"
          >
            <Square className="w-4 h-4 fill-current" />
          </button>
        )}
      </div>
    </div>
  );
};
