import React, { useState, useMemo } from "react";
import { Subject, SubjectId } from "../types";
import { THEORY_DATABASE, TheorySubtopic } from "../data/theoryData";
import { speechService } from "../utils/speech";
import {
  BookOpen,
  Volume2,
  HelpCircle,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Search,
  CheckCircle2,
  Stethoscope,
  GraduationCap,
  Calculator,
  Table,
  ArrowRight,
  Lightbulb,
  FileText,
  VolumeX,
  Share2,
  Printer,
  Check,
} from "lucide-react";

interface StudyGuideViewProps {
  subject: Subject;
  voiceAudioEnabled: boolean;
  onOpenQuestionBank: (subtopicFilter?: string) => void;
  onStartSubjectQuiz: () => void;
}

export const StudyGuideView: React.FC<StudyGuideViewProps> = ({
  subject,
  voiceAudioEnabled,
  onOpenQuestionBank,
  onStartSubjectQuiz,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>("");
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Normalize subjectId to match theory database keys
  const theoryKey = useMemo(() => {
    if (subject.id === "cardiorrespiratoria") return "cardiorrespiratorio";
    if (subject.id === "digestoria") return "digestorio";
    if (subject.id === "excretora") return "excretor";
    return subject.id;
  }, [subject.id]);

  const theory = THEORY_DATABASE[theoryKey] || THEORY_DATABASE["fisiologia-celular"];

  // Filter subtopics based on search
  const filteredSubtopics = useMemo(() => {
    if (!searchQuery.trim()) return theory.subtopics;
    const q = searchQuery.toLowerCase();
    return theory.subtopics.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.fullExplanation.toLowerCase().includes(q) ||
        s.clinicalPearl.toLowerCase().includes(q) ||
        s.examTip.toLowerCase().includes(q)
    );
  }, [theory, searchQuery]);

  const activeSubtopic: TheorySubtopic = useMemo(() => {
    if (selectedSubtopicId) {
      const found = theory.subtopics.find((s) => s.id === selectedSubtopicId);
      if (found) return found;
    }
    return filteredSubtopics[0] || theory.subtopics[0];
  }, [selectedSubtopicId, theory, filteredSubtopics]);

  // Index of active subtopic for previous / next navigation
  const activeSubtopicIndex = useMemo(() => {
    return theory.subtopics.findIndex((s) => s.id === activeSubtopic.id);
  }, [theory, activeSubtopic]);

  const prevSubtopic = activeSubtopicIndex > 0 ? theory.subtopics[activeSubtopicIndex - 1] : null;
  const nextSubtopic = activeSubtopicIndex < theory.subtopics.length - 1 ? theory.subtopics[activeSubtopicIndex + 1] : null;

  const handleListenFullModule = () => {
    if (!voiceAudioEnabled) return;
    const text = `${theory.mainIntroduction}. Objetivos de aprendizado: ${theory.learningObjectives.join(". ")}`;
    setIsReadingAloud(true);
    speechService.speak(text);
  };

  const handleListenSubtopic = (sub: TheorySubtopic) => {
    if (!voiceAudioEnabled) return;
    const text = `${sub.title}. ${sub.summary}. Explicação detalhada: ${sub.fullExplanation}. Aplicação clínica: ${sub.clinicalPearl}. Dica de prova: ${sub.examTip}`;
    setIsReadingAloud(true);
    speechService.speak(text);
  };

  const handleStopAudio = () => {
    speechService.stop();
    setIsReadingAloud(false);
  };

  const handleShareApostilaLink = async () => {
    const defaultUrl = "https://ais-pre-4bhwfcqcexjuwf4awus652-331443853501.us-east1.run.app";
    let origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : defaultUrl;
    if (origin.includes("ais-dev-")) {
      origin = origin.replace("ais-dev-", "ais-pre-");
    } else if (origin.includes("localhost")) {
      origin = defaultUrl;
    }
    const directUrl = `${origin}/?tab=teoria&tema=${subject.id}`;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(directUrl);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const theme = subject.themeColor || "#3b82f6";

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Module Header Card */}
      <div
        className="rounded-3xl p-6 sm:p-8 bg-white border shadow-sm space-y-6 relative overflow-hidden"
        style={{ borderColor: `${theme}40` }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ backgroundColor: theme }}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center space-x-3.5">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xs shrink-0 border"
              style={{ backgroundColor: `${theme}15`, borderColor: `${theme}30` }}
            >
              {subject.icon}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono-data font-bold tracking-wider uppercase border"
                  style={{ backgroundColor: `${theme}15`, color: theme, borderColor: `${theme}30` }}
                >
                  APOSTILA DIDÁTICA OFICIAL
                </span>
                <span className="text-xs text-slate-400">• Guyton & Silverthorn</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display mt-0.5">
                Teoria Completa: {subject.title}
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={handleShareApostilaLink}
              title="Copiar link público direto desta apostila"
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Link Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Compartilhar Apostila</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              title="Imprimir ou Salvar em PDF"
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={handleListenFullModule}
              className="px-3.5 py-2 rounded-xl text-white font-bold text-xs shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer hover:brightness-105 active:scale-95"
              style={{ backgroundColor: theme }}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Ouvir Introdução</span>
            </button>
            <button
              onClick={handleStopAudio}
              title="Parar áudio"
              className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <VolumeX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Introduction Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {theory.mainIntroduction}
            </p>

            {/* Learning Objectives Checklist */}
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/80 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Objetivos de Aprendizagem do Módulo:</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {theory.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3.5 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] font-mono-data font-bold text-slate-400 uppercase tracking-wider">
                Conteúdo do Módulo
              </span>
              <span className="text-xs font-bold text-emerald-400">100% Validado</span>
            </div>

            <div className="space-y-2 text-xs font-mono-data">
              <div className="flex justify-between items-center text-slate-300">
                <span>Capítulos Teóricos:</span>
                <span className="font-bold text-white">{theory.subtopics.length} tópicos aprofundados</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Questões Práticas:</span>
                <span className="font-bold text-amber-400">52 questões deste tema</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Leitura em Voz Alta:</span>
                <span className="font-bold text-indigo-400">Disponível em cada seção</span>
              </div>
            </div>

            <button
              onClick={onStartSubjectQuiz}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2"
            >
              <span>Testar Conhecimento no Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Search within Theory */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar mecanismo, conceito ou fórmula nesta apostila (ex: Nernst, Bomba Na+/K+, ECG, Starling, SRAA)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:bg-white focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Subtopic Selector Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {filteredSubtopics.map((sub) => {
          const isSelected = activeSubtopic.id === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => setSelectedSubtopicId(sub.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center space-x-2 cursor-pointer border ${
                isSelected
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm scale-102"
                  : "bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span>{sub.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-mono-data uppercase ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {sub.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Subtopic Active Study Area */}
      {activeSubtopic && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in duration-200">
          {/* Subtopic Title and Audio Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center space-x-2">
                <span
                  className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-data font-bold tracking-wider uppercase"
                  style={{ backgroundColor: `${theme}20`, color: theme }}
                >
                  {activeSubtopic.badge}
                </span>
                <span className="text-xs text-slate-400">Guia Passo a Passo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
                {activeSubtopic.title}
              </h3>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleListenSubtopic(activeSubtopic)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-bold text-xs border border-slate-200 transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
              >
                <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Ouvir Este Tópico</span>
              </button>

              {activeSubtopic.relatedQuestionSubtopic && (
                <button
                  onClick={() => onOpenQuestionBank(activeSubtopic.relatedQuestionSubtopic)}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ver Questões Deste Tema</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Summary Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            <span className="font-bold text-slate-900 block mb-1">Síntese Fisiológica:</span>
            {activeSubtopic.summary}
          </div>

          {/* Detailed Full Textbook Explanation */}
          <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed space-y-4">
            {activeSubtopic.fullExplanation.split("\n\n").map((paragraph, pIdx) => {
              return (
                <p key={pIdx} className="leading-relaxed whitespace-pre-line">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Step-by-step Flowchart (if available) */}
          {activeSubtopic.steps && activeSubtopic.steps.length > 0 && (
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/40 rounded-2xl p-5 border border-slate-200 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Mecanismo Molecular Passo a Passo:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeSubtopic.steps.map((st) => (
                  <div
                    key={st.step}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[11px] flex items-center justify-center">
                          {st.step}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 font-display">
                          {st.title}
                        </h5>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                    {st.molecularDetail && (
                      <div className="pt-2 border-t border-slate-100 text-[10px] text-indigo-600 font-mono-data font-semibold">
                        {st.molecularDetail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Formula Section (if available) */}
          {activeSubtopic.keyFormula && (
            <div className="bg-slate-950 text-white rounded-2xl p-5 border border-slate-800 space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Calculator className="w-4 h-4" />
                  <span>Fórmula & Equação Prática</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono-data">Cálculo Clínico</span>
              </div>

              <div className="text-center py-2">
                <div className="text-xl sm:text-2xl font-mono-data font-extrabold text-amber-300 tracking-wider">
                  {activeSubtopic.keyFormula.formula}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  {activeSubtopic.keyFormula.meaning}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-[11px]">
                {activeSubtopic.keyFormula.variables.map((v, i) => (
                  <div key={i} className="flex items-baseline space-x-2 bg-white/5 p-2 rounded-lg">
                    <span className="font-mono-data font-bold text-amber-400 shrink-0">
                      {v.symbol}:
                    </span>
                    <span className="text-slate-300">{v.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Table (if available) */}
          {activeSubtopic.comparisonTable && (
            <div className="rounded-2xl border border-slate-200 overflow-hidden space-y-2">
              <div className="bg-slate-100/80 px-4 py-2.5 border-b border-slate-200 flex items-center space-x-2">
                <Table className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Tabela Comparativa de Estudo
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {activeSubtopic.comparisonTable.headers.map((h, i) => (
                        <th key={i} className="px-4 py-2 font-bold text-slate-700">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activeSubtopic.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/60">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`px-4 py-2.5 text-slate-600 ${
                              cIdx === 0 ? "font-semibold text-slate-900" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Clinical Pearl & Exam Tip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Clinical Pearl Card */}
            <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-4 space-y-2">
              <div className="flex items-center space-x-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
                <Stethoscope className="w-4 h-4 text-rose-600" />
                <span>Pérola Clínica & Farmacologia:</span>
              </div>
              <p className="text-xs text-rose-950 leading-relaxed">
                {activeSubtopic.clinicalPearl}
              </p>
            </div>

            {/* Exam Tip Card */}
            <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 space-y-2">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>O Que Mais Cai em Provas:</span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed">
                {activeSubtopic.examTip}
              </p>
            </div>
          </div>

          {/* Subtopic Linear Navigation Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-100 text-xs">
            {prevSubtopic ? (
              <button
                onClick={() => setSelectedSubtopicId(prevSubtopic.id)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold flex items-center justify-center space-x-2 cursor-pointer transition-colors active:scale-98"
              >
                <ChevronLeft className="w-4 h-4 text-slate-500" />
                <span>Anterior: {prevSubtopic.title}</span>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextSubtopic ? (
              <button
                onClick={() => setSelectedSubtopicId(nextSubtopic.id)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold flex items-center justify-center space-x-2 cursor-pointer transition-colors shadow-xs active:scale-98"
              >
                <span>Próximo: {nextSubtopic.title}</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
            ) : (
              <button
                onClick={onStartSubjectQuiz}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold flex items-center justify-center space-x-2 cursor-pointer transition-all shadow-md active:scale-98"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Concluir Apostila & Fazer Quiz Oficial</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Quick Summary Master Table at the Bottom of Module */}
      {theory.quickSummaryTable && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>{theory.quickSummaryTable.title}</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {theory.quickSummaryTable.headers.map((th, i) => (
                    <th key={i} className="px-4 py-3 font-bold">
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {theory.quickSummaryTable.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50">
                    {row.map((val, vIdx) => (
                      <td
                        key={vIdx}
                        className={`px-4 py-2.5 text-slate-700 ${
                          vIdx === 0 ? "font-bold text-slate-900" : ""
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
