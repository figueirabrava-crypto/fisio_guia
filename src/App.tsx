import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SubjectHero } from "./components/SubjectHero";
import { InteractiveDiagram } from "./components/InteractiveDiagram";
import { AudioPlayerBar } from "./components/AudioPlayerBar";
import { SubjectOverview } from "./components/SubjectOverview";
import { StudyGuideView } from "./components/StudyGuideView";
import { QuizView } from "./components/QuizView";
import { QuestionBankView } from "./components/QuestionBankView";
import { AITutorModal } from "./components/AITutorModal";
import { VoiceSettingsModal } from "./components/VoiceSettingsModal";
import { ShareAppModal } from "./components/ShareAppModal";
import { OfflineIndicator } from "./components/OfflineIndicator";
import { UpdatesModal } from "./components/UpdatesModal";
import { PhysiologyCalculatorsModal } from "./components/PhysiologyCalculatorsModal";
import { AuthorStatsModal } from "./components/AuthorStatsModal";
import { syncManager } from "./utils/syncManager";
import { SUBJECTS } from "./data/subjects";
import { SubjectId, Hotspot, UserProgress } from "./types";
import { speechService } from "./utils/speech";
import { exportStandaloneHTML } from "./utils/htmlExporter";
import {
  Brain,
  HelpCircle,
  BookOpen,
  Sparkles,
  Headphones,
  CheckCircle2,
  Share2,
  Award,
  Download,
  FileCode,
  Layers,
  FileText,
} from "lucide-react";

export default function App() {
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>("neurofisiologia");
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [voiceAudioEnabled, setVoiceAudioEnabled] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"teoria" | "diagrama" | "resumo">("teoria");
  const [questionBankFilter, setQuestionBankFilter] = useState<string>("");

  // Modals
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [quizSubjectTarget, setQuizSubjectTarget] = useState<SubjectId | "todos">("todos");
  const [isQuestionBankOpen, setIsQuestionBankOpen] = useState<boolean>(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState<boolean>(false);
  const [isVoiceSettingsOpen, setIsVoiceSettingsOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isUpdatesModalOpen, setIsUpdatesModalOpen] = useState<boolean>(false);
  const [isCalculatorsModalOpen, setIsCalculatorsModalOpen] = useState<boolean>(false);
  const [isAuthorStatsModalOpen, setIsAuthorStatsModalOpen] = useState<boolean>(false);
  const [syncToast, setSyncToast] = useState<string | null>(null);

  // Initialize offline-to-online auto-sync
  useEffect(() => {
    syncManager.init();
    const unsub = syncManager.onUpdatesSynced((updates) => {
      setSyncToast(`🔄 Sincronização automática concluída: ${updates.length} atualizações dos 6 sistemas de Fisiologia prontas para estudo!`);
      setTimeout(() => setSyncToast(null), 6000);
    });
    return () => unsub();
  }, []);

  // Deep-linking: Read URL query params & hash on mount
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const urlParams = new URLSearchParams(window.location.search);
      const hash = window.location.hash.toLowerCase();

      // Tab parameter
      const tabParam = urlParams.get("tab") || (hash.includes("teoria") || hash.includes("apostila") ? "teoria" : hash.includes("diagrama") || hash.includes("atlas") ? "diagrama" : hash.includes("resumo") ? "resumo" : null);
      if (tabParam === "teoria" || tabParam === "diagrama" || tabParam === "resumo") {
        setActiveTab(tabParam);
      }

      // Subject parameter
      const subjectParam = urlParams.get("tema") || urlParams.get("subject") || urlParams.get("materia");
      if (subjectParam) {
        let normalized = subjectParam.toLowerCase();
        if (normalized === "digestorio") normalized = "digestoria";
        if (normalized === "cardiorrespiratorio") normalized = "cardiorrespiratoria";
        if (normalized === "excretor") normalized = "excretora";
        const found = SUBJECTS.find((s) => s.id === normalized);
        if (found) setActiveSubjectId(found.id as SubjectId);
      }

      // Quiz parameter
      if (urlParams.get("quiz") === "true" || hash.includes("quiz") || hash.includes("simulado")) {
        setIsQuizOpen(true);
      }

      // Banco parameter
      if (urlParams.get("banco") === "true" || hash.includes("banco")) {
        setIsQuestionBankOpen(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Keep browser address bar in sync with active tab & subject without page reload
  useEffect(() => {
    try {
      if (typeof window === "undefined" || !window.history?.replaceState) return;
      const params = new URLSearchParams(window.location.search);
      params.set("tab", activeTab);
      params.set("tema", activeSubjectId);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, "", newUrl);
    } catch {
      // ignore
    }
  }, [activeTab, activeSubjectId]);

  // User Progress Persistence
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem("fisioguia_progress");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return {
      completedSubjects: [],
      quizScores: {},
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      streakDays: 3,
    };
  });

  const activeSubject = SUBJECTS.find((s) => s.id === activeSubjectId) || SUBJECTS[0];

  // Auto-select first hotspot when subject changes
  useEffect(() => {
    if (activeSubject.hotspots.length > 0) {
      setSelectedHotspot(activeSubject.hotspots[0]);
    } else {
      setSelectedHotspot(null);
    }
  }, [activeSubjectId]);

  const handleRecordAnswer = (isCorrect: boolean) => {
    setUserProgress((prev) => {
      const updated = {
        ...prev,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
        totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
      };
      try {
        localStorage.setItem("fisioguia_progress", JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  const handleToggleVoiceAudio = () => {
    const nextVal = !voiceAudioEnabled;
    setVoiceAudioEnabled(nextVal);
    if (!nextVal) {
      speechService.stop();
    } else {
      speechService.speak("Narração por voz ativada.");
    }
  };

  const handleOpenQuiz = (subjectId?: SubjectId | "todos") => {
    setQuizSubjectTarget(subjectId || activeSubjectId);
    setIsQuizOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation */}
      <Header
        activeSubjectId={activeSubjectId}
        onSelectSubject={(id) => {
          setActiveSubjectId(id);
          speechService.stop();
        }}
        voiceAudioEnabled={voiceAudioEnabled}
        onToggleVoiceAudio={handleToggleVoiceAudio}
        onOpenVoiceSettings={() => setIsVoiceSettingsOpen(true)}
        onOpenQuestionBank={() => {
          setQuestionBankFilter("");
          setIsQuestionBankOpen(true);
        }}
        onOpenAITutor={() => setIsAITutorOpen(true)}
        onStartQuiz={() => handleOpenQuiz("todos")}
        onOpenShareModal={() => setIsShareModalOpen(true)}
        onOpenTheory={() => setActiveTab("teoria")}
        onOpenUpdates={() => setIsUpdatesModalOpen(true)}
        onOpenCalculators={() => setIsCalculatorsModalOpen(true)}
        onOpenAuthorStats={() => setIsAuthorStatsModalOpen(true)}
        userProgress={userProgress}
      />

      {/* Sync Toast Notification */}
      {syncToast && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 text-white p-3 rounded-2xl shadow-md flex items-center justify-between text-xs animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center space-x-2 font-medium">
              <span className="text-base">✨</span>
              <span>{syncToast}</span>
            </div>
            <button
              onClick={() => setIsUpdatesModalOpen(true)}
              className="px-3 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-[11px] cursor-pointer"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Quick Distribution & Zero-Login Helper Banner */}
        <div className="bg-gradient-to-r from-amber-50 via-orange-50/60 to-amber-50 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2.5 text-amber-950">
            <span className="text-xl">📁</span>
            <div>
              <span className="font-bold text-amber-900 block sm:inline">
                Compartilhe com alunos sem exigir conta Google:
              </span>
              <span className="text-amber-800/90 sm:ml-1 text-[11px] block sm:inline">
                Baixe em 1 arquivo HTML que roda em qualquer PC/celular sem internet e sem login.
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={exportStandaloneHTML}
              className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Arquivo HTML</span>
            </button>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-white border border-amber-300 text-amber-900 hover:bg-amber-100/60 font-semibold text-xs transition-colors cursor-pointer"
            >
              Opções de Compartilhamento
            </button>
          </div>
        </div>

        {/* Modern Medical Subject Hero Banner */}
        <SubjectHero
          subject={activeSubject}
          voiceAudioEnabled={voiceAudioEnabled}
          onStartSubjectQuiz={() => handleOpenQuiz(activeSubject.id)}
          onOpenQuestionBank={() => {
            setQuestionBankFilter("");
            setIsQuestionBankOpen(true);
          }}
          onOpenAITutor={() => setIsAITutorOpen(true)}
          onOpenTheory={() => setActiveTab("teoria")}
        />

        {/* Audio Narration Bar with ECG / Theme styling */}
        <AudioPlayerBar
          title={`${activeSubject.title}: ${selectedHotspot ? selectedHotspot.title : activeSubject.subtitle}`}
          currentText={
            selectedHotspot
              ? `${selectedHotspot.title}. ${selectedHotspot.description}. Destaque clínico: ${selectedHotspot.clinicalPearl}`
              : `${activeSubject.title}. ${activeSubject.subtitle}. ${activeSubject.audioSummaryScript}`
          }
          voiceAudioEnabled={voiceAudioEnabled}
          onOpenVoiceSettings={() => setIsVoiceSettingsOpen(true)}
          themeColor={activeSubject.themeColor}
        />

        {/* Mode Navigation Bar: Teoria vs Atlas vs Resumo */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveTab("teoria")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === "teoria"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>📖 Apostila & Teoria Passo a Passo</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono-data uppercase ${
                activeTab === "teoria" ? "bg-white/20 text-white" : "bg-indigo-100 text-indigo-700"
              }`}>
                Essencial
              </span>
            </button>

            <button
              onClick={() => setActiveTab("diagrama")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === "diagrama"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>🔬 Atlas & Diagrama Interativo</span>
            </button>

            <button
              onClick={() => setActiveTab("resumo")}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                activeTab === "resumo"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>📊 Resumo Rápido & Fontes</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => {
                setQuestionBankFilter("");
                setIsQuestionBankOpen(true);
              }}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center space-x-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>Banco (312 Qs)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Main View according to activeTab */}
        {activeTab === "teoria" && (
          <StudyGuideView
            subject={activeSubject}
            voiceAudioEnabled={voiceAudioEnabled}
            onOpenQuestionBank={(subtopic) => {
              setQuestionBankFilter(subtopic || "");
              setIsQuestionBankOpen(true);
            }}
            onStartSubjectQuiz={() => handleOpenQuiz(activeSubject.id)}
          />
        )}

        {activeTab === "diagrama" && (
          <div className="space-y-6">
            <InteractiveDiagram
              subject={activeSubject}
              selectedHotspot={selectedHotspot}
              onSelectHotspot={(h) => setSelectedHotspot(h)}
              voiceAudioEnabled={voiceAudioEnabled}
            />
            {/* Direct jump to study guide */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 flex items-center justify-between">
              <div className="text-xs text-indigo-900">
                <span className="font-bold block">Quer entender os mecanismos moleculares deste diagrama?</span>
                Abra a apostila completa para ver fórmulas, passos sequenciais e tabelas comparativas.
              </div>
              <button
                onClick={() => setActiveTab("teoria")}
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
              >
                Abrir Apostila Teórica
              </button>
            </div>
          </div>
        )}

        {activeTab === "resumo" && (
          <div className="space-y-6">
            <SubjectOverview
              subject={activeSubject}
              onStartSubjectQuiz={() => handleOpenQuiz(activeSubject.id)}
              voiceAudioEnabled={voiceAudioEnabled}
            />
          </div>
        )}

        {/* Bottom Banner with Quick Learning Actions */}
        <div 
          className="bg-white rounded-3xl border p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 transition-all"
          style={{ borderColor: `${activeSubject.themeColor}30` }}
        >
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="text-base">{activeSubject.icon}</span>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Pronto para testar seu domínio em {activeSubject.shortTitle}?
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              O banco de dados contém 52 questões checadas deste módulo e 312 no total geral.
            </p>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-center">
            <button
              onClick={() => setIsQuestionBankOpen(true)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center space-x-1.5 cursor-pointer shadow-2xs"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Ver Banco (312 Qs)</span>
            </button>
            <button
              onClick={() => handleOpenQuiz(activeSubject.id)}
              className="px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-md transition-all flex items-center space-x-1.5 cursor-pointer hover:brightness-110 active:scale-98"
              style={{
                backgroundColor: activeSubject.themeColor,
                boxShadow: `0 4px 14px ${activeSubject.themeColor}50`,
              }}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Simulado Oral / Escrito</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          {/* Prominent Author Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-300 shadow-xs text-slate-800">
            <span className="text-base">👨‍⚕️</span>
            <span className="text-xs text-amber-900 font-semibold">Autoria & Coordenação do Projeto:</span>
            <span className="text-sm font-black text-amber-950 px-2.5 py-0.5 rounded-lg bg-amber-400/30 border border-amber-400/60 shadow-2xs">
              Figueirabrava
            </span>
            <span className="text-[11px] text-amber-800/80 font-mono-data">(figueirabrava@gmail.com)</span>
          </div>

          <div className="flex items-center justify-center space-x-2 font-semibold text-slate-700">
            <Brain className="w-4 h-4 text-blue-600" />
            <span>FisioGuia • Plataforma de Fisiologia Humana por Figueirabrava</span>
          </div>
          <p className="text-slate-400 text-[11px]">
            Baseado nos tratados de Guyton & Hall, Silverthorn, Kandel, West, Alberts e Junqueira & Carneiro.
          </p>
          <div className="pt-2 flex flex-wrap justify-center items-center gap-3 text-xs">
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center space-x-1 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Compartilhar com colegas / QR Code</span>
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="text-amber-600 hover:text-amber-800 font-semibold inline-flex items-center space-x-1 cursor-pointer"
            >
              <span>Baixar em 1 Arquivo HTML Standalone (Offline)</span>
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL: QUIZ INTERATIVO POR VOZ */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-3xl my-auto">
            <QuizView
              initialSubjectId={quizSubjectTarget}
              onClose={() => setIsQuizOpen(false)}
              voiceAudioEnabled={voiceAudioEnabled}
              onRecordAnswer={handleRecordAnswer}
              onOpenVoiceSettings={() => setIsVoiceSettingsOpen(true)}
            />
          </div>
        </div>
      )}

      {/* MODAL: BANCO GERAL DE QUESTÕES */}
      {isQuestionBankOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-5xl my-auto">
            <QuestionBankView
              onClose={() => setIsQuestionBankOpen(false)}
              voiceAudioEnabled={voiceAudioEnabled}
              initialSubtopicFilter={questionBankFilter}
              onSwitchToTheory={(subjId) => {
                if (subjId) setActiveSubjectId(subjId);
                setActiveTab("teoria");
              }}
            />
          </div>
        </div>
      )}

      {/* MODAL: TUTOR IA COM GEMINI & VOZ */}
      {isAITutorOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-3xl my-auto">
            <AITutorModal
              onClose={() => setIsAITutorOpen(false)}
              voiceAudioEnabled={voiceAudioEnabled}
              currentSubjectTitle={activeSubject.title}
              onOpenVoiceSettings={() => setIsVoiceSettingsOpen(true)}
            />
          </div>
        </div>
      )}

      {/* MODAL: PERSONALIZAÇÃO DE VOZES HUMANIZADAS */}
      {isVoiceSettingsOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-2xl my-auto">
            <VoiceSettingsModal onClose={() => setIsVoiceSettingsOpen(false)} />
          </div>
        </div>
      )}

      {/* MODAL: COMPARTILHAR, QR CODE & INSTALAÇÃO PWA / HTML OFFLINE */}
      <ShareAppModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* MODAL: ATUALIZAÇÕES AUTOMÁTICAS DOS 6 SISTEMAS */}
      {isUpdatesModalOpen && (
        <UpdatesModal
          onClose={() => setIsUpdatesModalOpen(false)}
          voiceAudioEnabled={voiceAudioEnabled}
        />
      )}

      {/* MODAL: CALCULADORAS FISIOLÓGICAS INTERATIVAS */}
      {isCalculatorsModalOpen && (
        <PhysiologyCalculatorsModal
          onClose={() => setIsCalculatorsModalOpen(false)}
          voiceAudioEnabled={voiceAudioEnabled}
        />
      )}

      {/* MODAL: PAINEL DO AUTOR FIGUEIRABRAVA */}
      {isAuthorStatsModalOpen && (
        <AuthorStatsModal onClose={() => setIsAuthorStatsModalOpen(false)} />
      )}

      {/* INDICADOR DE MODO OFFLINE AUTOMÁTICO */}
      <OfflineIndicator />
    </div>
  );
}
