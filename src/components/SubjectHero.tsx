import React from "react";
import { Subject } from "../types";
import { 
  Play, 
  Volume2, 
  BookOpen, 
  HelpCircle, 
  Activity, 
  Sparkles,
  Award,
  ChevronRight
} from "lucide-react";
import { speechService } from "../utils/speech";

interface SubjectHeroProps {
  subject: Subject;
  voiceAudioEnabled: boolean;
  onStartSubjectQuiz: () => void;
  onOpenQuestionBank: () => void;
  onOpenAITutor: () => void;
  onOpenTheory?: () => void;
}

export const SubjectHero: React.FC<SubjectHeroProps> = ({
  subject,
  voiceAudioEnabled,
  onStartSubjectQuiz,
  onOpenQuestionBank,
  onOpenAITutor,
  onOpenTheory,
}) => {
  const styles = subject.themeStyles || {
    gradientHero: "from-slate-950 via-slate-900 to-slate-950",
    gradientBadge: "from-blue-600 to-indigo-600",
    borderAccent: "border-blue-500/40",
    textAccent: "text-blue-400",
    badgeBg: "bg-blue-500/10",
    badgeText: "text-blue-300",
    badgeBorder: "border-blue-500/30",
    lightBg: "bg-blue-50",
    radarColor: "#3b82f6",
    cardHighlight: "border-blue-200",
    tabActiveClass: "bg-blue-900",
    codeBadge: "bg-blue-100 text-blue-800",
  };

  const handlePlayHeroAudio = () => {
    if (!voiceAudioEnabled) return;
    const textToSpeak = `${subject.title}. ${subject.subtitle}. ${subject.audioSummaryScript}`;
    speechService.speak(textToSpeak);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br border shadow-xl transition-all duration-500 text-white p-6 sm:p-8 space-y-6"
      style={{
        backgroundImage: `radial-gradient(ellipse at 85% 15%, ${subject.themeColor}33 0%, transparent 65%), linear-gradient(135deg, #090d16 0%, #0f172a 60%, #090d16 100%)`,
        borderColor: `${subject.themeColor}44`,
      }}
    >
      {/* Background Decorative Mesh & Accent Lines */}
      <div className="absolute inset-0 bg-medical-grid opacity-30 pointer-events-none" />
      <div 
        className="absolute -right-16 -top-16 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-25"
        style={{ backgroundColor: subject.themeColor }}
      />

      {/* Top Meta Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center space-x-3">
          {/* Scientific Code Badge */}
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono-data font-bold tracking-wider uppercase bg-white/10 border border-white/15 text-white/90 shadow-2xs backdrop-blur-xs flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: subject.themeColor }} />
            <span>{subject.code || "FISIO-01"}</span>
          </span>

          <span className="hidden sm:inline text-white/30 text-xs">•</span>

          {/* Specialty Classification */}
          <span className="text-xs font-semibold text-white/80 tracking-wide flex items-center space-x-1.5">
            <Activity className="w-3.5 h-3.5" style={{ color: subject.themeColor }} />
            <span>{subject.specialtyPill || "Tratado Didático Oficial"}</span>
          </span>
        </div>

        {/* Official References Badge & Author */}
        <div className="flex items-center space-x-2 text-[11px] text-white/70">
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold shadow-2xs backdrop-blur-xs">
            <span>✨ Autor:</span>
            <span className="text-white font-extrabold">Figueirabrava</span>
          </span>
          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="hidden md:inline font-medium">Fontes Primárias:</span>
          <span className="font-semibold text-white/90 bg-white/10 px-2 py-0.5 rounded border border-white/15">
            {subject.officialReferences[0]}
          </span>
        </div>
      </div>

      {/* Main Title & Audio Pitch */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center space-x-3">
            <span className="text-4xl sm:text-5xl drop-shadow-md select-none">{subject.icon}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
                {subject.title}
              </h1>
              <p className="text-sm sm:text-base font-medium text-slate-300 mt-1">
                {subject.subtitle}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl pt-1">
            {subject.audioSummaryScript.slice(0, 220)}...
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {onOpenTheory && (
              <button
                onClick={onOpenTheory}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition-all flex items-center space-x-2 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>Estudar Teoria (Apostila)</span>
              </button>
            )}

            <button
              onClick={handlePlayHeroAudio}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-all flex items-center space-x-2 hover:scale-102 active:scale-98"
              style={{
                backgroundColor: subject.themeColor,
                boxShadow: `0 4px 14px ${subject.themeColor}55`,
              }}
            >
              <Volume2 className="w-4 h-4" />
              <span>Ouvir Síntese do Módulo</span>
            </button>

            <button
              onClick={onStartSubjectQuiz}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center space-x-2 backdrop-blur-xs"
            >
              <HelpCircle className="w-4 h-4 text-amber-300" />
              <span>Fazer Quiz (52 Qs)</span>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            </button>

            <button
              onClick={onOpenAITutor}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900/60 hover:bg-slate-900 text-slate-200 border border-slate-700/60 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tutor IA do Tema</span>
            </button>
          </div>
        </div>

        {/* Right Side: Key Physiological Lab Parameters Bar */}
        {subject.clinicalConstants && subject.clinicalConstants.length > 0 && (
          <div className="lg:col-span-4 bg-slate-950/70 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-3 shadow-inner">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[11px] font-mono-data uppercase tracking-wider font-bold text-slate-400 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: subject.themeColor }} />
                <span>Constantes Fisiológicas</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium">Guyton & Hall</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {subject.clinicalConstants.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 transition-colors p-2.5 rounded-xl border border-white/5 space-y-1"
                  title={item.interpretation}
                >
                  <div className="text-[10px] text-slate-400 font-medium truncate">
                    {item.label}
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-base font-extrabold font-mono-data tracking-tight text-white">
                      {item.value}
                    </span>
                    {item.unit && (
                      <span className="text-[10px] font-mono-data text-slate-400 font-semibold">
                        {item.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[10px] text-slate-400/90 italic flex items-center space-x-1 pt-1">
              <span>💡 Dica:</span>
              <span className="truncate">{subject.clinicalConstants[0]?.interpretation}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
