import React, { useState, useMemo } from "react";
import { ALL_QUESTIONS } from "../data/questions";
import { SUBJECTS } from "../data/subjects";
import { SubjectId, Question } from "../types";
import {
  Search,
  Volume2,
  Filter,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  X,
  Sparkles,
  Layers
} from "lucide-react";
import { speechService } from "../utils/speech";

interface QuestionBankViewProps {
  onClose: () => void;
  voiceAudioEnabled: boolean;
  initialSubtopicFilter?: string;
  onSwitchToTheory?: (subjectId?: SubjectId) => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  onClose,
  voiceAudioEnabled,
  initialSubtopicFilter,
  onSwitchToTheory,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | "todos">("todos");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"todos" | "Fácil" | "Médio" | "Difícil">("todos");
  const [searchTerm, setSearchTerm] = useState<string>(initialSubtopicFilter || "");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      if (selectedSubject !== "todos" && q.subjectId !== selectedSubject) return false;
      if (selectedDifficulty !== "todos" && q.difficulty !== selectedDifficulty) return false;
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchQuestion = q.question.toLowerCase().includes(term);
        const matchSubtopic = q.subtopic.toLowerCase().includes(term);
        const matchExpl = q.explanation.toLowerCase().includes(term);
        if (!matchQuestion && !matchSubtopic && !matchExpl) return false;
      }
      return true;
    });
  }, [selectedSubject, selectedDifficulty, searchTerm]);

  const handleSpeakQuestion = (q: Question) => {
    const text = `Questão sobre ${q.subtopic}. ${q.question}. Resposta correta: ${q.options[q.correctIndex]}. Explicação: ${q.explanation}. Referência: ${q.officialReference}.`;
    speechService.speak(text);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col max-h-[88vh] animate-in fade-in duration-300">
      {/* Header */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold tracking-tight">
              Banco Geral de Questões Didáticas
            </h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Total de 312 questões checadas em tratados oficiais (52 por assunto).
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {onSwitchToTheory && (
            <button
              onClick={() => {
                onSwitchToTheory(selectedSubject !== "todos" ? selectedSubject : undefined);
                onClose();
              }}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Apostila Teórica Completa</span>
              <span className="sm:hidden">Teoria</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="question-bank-search-input"
            type="text"
            placeholder="Buscar por termo fisiológico (ex: sinapse, potássio, TFG, bile, alvéolos)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedSubject("todos")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedSubject === "todos"
                ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                : "bg-white text-slate-600 hover:bg-slate-100 border-slate-200"
            }`}
          >
            Todos ({ALL_QUESTIONS.length})
          </button>
          {SUBJECTS.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelectedSubject(sub.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border flex items-center space-x-1.5 ${
                selectedSubject === sub.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border-slate-200"
              }`}
            >
              <span>{sub.icon}</span>
              <span>{sub.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-slate-700">Dificuldade:</span>
            {(["todos", "Fácil", "Médio", "Difícil"] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                  selectedDifficulty === diff
                    ? "bg-slate-200 text-slate-900 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {diff === "todos" ? "Todas" : diff}
              </button>
            ))}
          </div>
          <div>
            Encontradas: <strong className="text-slate-800">{filteredQuestions.length}</strong> questões
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <Layers className="w-12 h-12 mx-auto mb-2 text-slate-300" />
            <p className="text-sm">Nenhuma questão encontrada para este filtro de busca.</p>
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const isExpanded = expandedId === q.id;

            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 hover:border-slate-300 bg-white transition-all shadow-2xs"
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="p-4 cursor-pointer flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        #{idx + 1} • {q.subtopic}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          q.difficulty === "Fácil"
                            ? "bg-emerald-50 text-emerald-700"
                            : q.difficulty === "Médio"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {q.difficulty}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 pt-1 leading-snug">
                      {q.question}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeakQuestion(q);
                      }}
                      title="Ouvir questão em voz alta"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-2 border-t border-slate-100 bg-slate-50/50 rounded-b-xl space-y-3">
                    {/* Options list */}
                    <div className="space-y-1.5">
                      {q.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === q.correctIndex;
                        return (
                          <div
                            key={oIdx}
                            className={`p-2.5 rounded-lg text-xs flex items-start space-x-2 ${
                              isCorrect
                                ? "bg-emerald-50 text-emerald-950 border border-emerald-300 font-semibold"
                                : "bg-white text-slate-600 border border-slate-200"
                            }`}
                          >
                            <span className="font-bold shrink-0">
                              {["A", "B", "C", "D"][oIdx]})
                            </span>
                            <span className="flex-1">{opt}</span>
                            {isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Didactic explanation */}
                    <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 text-xs text-blue-950 space-y-1">
                      <p className="font-bold flex items-center space-x-1 text-blue-900">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>Explicação Didática Oficial:</span>
                      </p>
                      <p className="leading-relaxed text-slate-800">{q.explanation}</p>
                      <div className="pt-1 text-[11px] text-slate-500 border-t border-blue-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="font-semibold text-indigo-700">
                          {q.keyTakeaway}
                        </span>
                        <span className="italic">{q.officialReference}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
