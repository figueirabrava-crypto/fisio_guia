import React, { useState, useEffect } from "react";
import {
  Brain,
  Volume2,
  VolumeX,
  Sparkles,
  HelpCircle,
  BookOpen,
  Award,
  Flame,
  Mic,
  Sliders,
  Share2,
  Download,
  RefreshCw,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import { SubjectId, UserProgress } from "../types";
import { SUBJECTS } from "../data/subjects";
import { speechService, AI_VOICES, VoiceSettings } from "../utils/speech";
import { PWAInstallButton } from "./PWAInstallButton";
import { exportStandaloneHTML } from "../utils/htmlExporter";

interface HeaderProps {
  activeSubjectId: SubjectId;
  onSelectSubject: (id: SubjectId) => void;
  voiceAudioEnabled: boolean;
  onToggleVoiceAudio: () => void;
  onOpenVoiceSettings: () => void;
  onOpenQuestionBank: () => void;
  onOpenAITutor: () => void;
  onStartQuiz: () => void;
  onOpenShareModal: () => void;
  onOpenTheory?: () => void;
  onOpenUpdates?: () => void;
  onOpenCalculators?: () => void;
  onOpenAuthorStats?: () => void;
  userProgress: UserProgress;
}

export const Header: React.FC<HeaderProps> = ({
  activeSubjectId,
  onSelectSubject,
  voiceAudioEnabled,
  onToggleVoiceAudio,
  onOpenVoiceSettings,
  onOpenQuestionBank,
  onOpenAITutor,
  onStartQuiz,
  onOpenShareModal,
  onOpenTheory,
  onOpenUpdates,
  onOpenCalculators,
  onOpenAuthorStats,
  userProgress,
}) => {
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(() =>
    speechService.getSettings()
  );

  useEffect(() => {
    return speechService.subscribeSettings((newSettings) => {
      setVoiceSettings(newSettings);
    });
  }, []);

  const getVoiceDisplayName = () => {
    if (voiceSettings.engine === "ai") {
      const v = AI_VOICES.find((item) => item.id === voiceSettings.aiVoice);
      return v ? `${v.name} (IA)` : "Voz IA";
    }
    return "Voz Local";
  };
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-100">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 bg-clip-text text-transparent">
                  FisioGuia
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Fisiologia Humana
                </span>
                <span className="inline-flex items-center space-x-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/15 via-amber-400/25 to-orange-500/15 text-amber-950 border border-amber-300 shadow-2xs">
                  <span>✨ Autor:</span>
                  <span className="underline decoration-amber-500 underline-offset-2">Figueirabrava</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Plataforma com 6 Sistemas • 312 Questões Didáticas • Por <strong className="text-slate-800 font-semibold">Figueirabrava</strong>
              </p>
            </div>
          </div>

          {/* Quick Actions & Stats */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Streak & Score pill */}
            <div className="hidden md:flex items-center space-x-3 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700">
              <div className="flex items-center space-x-1 font-semibold text-amber-600">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
                <span>{userProgress.streakDays}d ofensiva</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center space-x-1 font-semibold text-teal-700">
                <Award className="w-4 h-4 text-teal-600" />
                <span>{userProgress.totalCorrect}/{userProgress.totalQuestionsAnswered} acertos</span>
              </div>
            </div>

            {/* Voice Narration Audio Toggle */}
            <button
              id="header-toggle-audio-btn"
              onClick={onToggleVoiceAudio}
              title={voiceAudioEnabled ? "Áudio e narração por voz ativados" : "Áudio desativado"}
              className={`p-2 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 border ${
                voiceAudioEnabled
                  ? "bg-emerald-50 text-emerald-700 border-emerald-300 shadow-xs"
                  : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {voiceAudioEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">Voz Ativa</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline">Mudo</span>
                </>
              )}
            </button>

            {/* Voice Settings / Selector */}
            <button
              id="header-voice-settings-btn"
              onClick={onOpenVoiceSettings}
              title="Personalizar a voz da narração (Dra. Sofia, Dr. Lucas, Profa. Camila...)"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 bg-indigo-50/80 hover:bg-indigo-100 border border-indigo-200 transition-colors flex items-center space-x-1.5 shadow-2xs"
            >
              <Mic className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden lg:inline">Voz:</span>
              <span className="font-bold text-indigo-900">{getVoiceDisplayName()}</span>
              <Sliders className="w-3 h-3 text-indigo-400" />
            </button>

            {/* PWA Install Button (Automatic Android/Chrome/Desktop prompt, or iOS guidance) */}
            <PWAInstallButton onOpenShareModal={onOpenShareModal} />

            {/* Share / Universal Access / Offline Exporter */}
            <button
              id="header-export-html-btn"
              onClick={exportStandaloneHTML}
              title="Baixar aplicativo em 1 arquivo HTML para enviar a alunos por WhatsApp/email (funciona sem login Google e sem internet)"
              className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 border border-amber-400 transition-all flex items-center space-x-1.5 shadow-xs cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-amber-900" />
              <span className="hidden md:inline">Baixar HTML (Sem Conta)</span>
              <span className="md:hidden">HTML Offline</span>
            </button>

            <button
              id="header-share-btn"
              onClick={onOpenShareModal}
              title="Compartilhar com colegas, ver QR Code ou instruções de instalação"
              className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all flex items-center space-x-1.5 shadow-2xs cursor-pointer active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-700" />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>

            {/* Apostila Teórica & Guia de Estudo */}
            {onOpenTheory && (
              <button
                id="header-theory-btn"
                onClick={onOpenTheory}
                title="Abrir Apostila Completa de Teoria, Mecanismos Fisiológicos e Fórmulas"
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-all flex items-center space-x-1.5 shadow-2xs cursor-pointer active:scale-95"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>Apostila Teórica</span>
              </button>
            )}

            {/* Atualizações Automáticas dos 6 Sistemas */}
            {onOpenUpdates && (
              <button
                id="header-updates-btn"
                onClick={onOpenUpdates}
                title="Ver atualizações dos 6 sistemas (sincronizadas automaticamente ao conectar à internet)"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all flex items-center space-x-1.5 shadow-2xs cursor-pointer active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden lg:inline">Atualizações (6)</span>
              </button>
            )}

            {/* Calculadoras Fisiológicas Interativas */}
            {onOpenCalculators && (
              <button
                id="header-calculators-btn"
                onClick={onOpenCalculators}
                title="Calculadoras Fisiológicas Clínicas (TFG, Nernst, Débito Cardíaco, Osmolaridade, Gradiente A-a)"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center space-x-1.5 shadow-2xs cursor-pointer active:scale-95"
              >
                <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden lg:inline">Calculadoras</span>
              </button>
            )}

            {/* Painel do Autor Figueirabrava */}
            {onOpenAuthorStats && (
              <button
                id="header-author-stats-btn"
                onClick={onOpenAuthorStats}
                title="Painel de Notificações de Acesso e Telemetria para o Autor Figueirabrava"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-all flex items-center space-x-1.5 shadow-2xs cursor-pointer active:scale-95"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span className="hidden xl:inline">Painel Autor</span>
              </button>
            )}

            {/* Question Bank Explorer */}
            <button
              id="header-question-bank-btn"
              onClick={onOpenQuestionBank}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center space-x-1.5"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline">Banco (312)</span>
            </button>

            {/* AI Tutor Button */}
            <button
              id="header-ai-tutor-btn"
              onClick={onOpenAITutor}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors flex items-center space-x-1.5 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Tutor IA</span>
            </button>

            {/* Launch Quiz Button */}
            <button
              id="header-start-quiz-btn"
              onClick={onStartQuiz}
              className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm transition-all flex items-center space-x-1.5"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Iniciar Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 Subject Tabs Navigation */}
      <div className="bg-slate-50/95 border-t border-slate-200/80 px-4 sm:px-6 lg:px-8 py-2 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 min-w-max">
          {SUBJECTS.map((sub, idx) => {
            const isSelected = sub.id === activeSubjectId;
            return (
              <button
                key={sub.id}
                id={`subject-tab-${sub.id}`}
                onClick={() => onSelectSubject(sub.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-2 border cursor-pointer ${
                  isSelected
                    ? "bg-white text-slate-900 shadow-sm font-bold ring-1"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/80 border-transparent"
                }`}
                style={{
                  borderColor: isSelected ? sub.themeColor : "transparent",
                  boxShadow: isSelected ? `0 2px 8px -1px ${sub.themeColor}30` : undefined,
                }}
              >
                <span className="text-base leading-none">{sub.icon}</span>
                <span className="text-[10px] font-mono-data opacity-60 font-bold">0{idx + 1}</span>
                <span>{sub.shortTitle}</span>
                {isSelected && (
                  <span
                    className="w-2 h-2 rounded-full ring-2 ring-white"
                    style={{ backgroundColor: sub.themeColor }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
