import React, { useState, useEffect, useRef } from "react";
import { Question, SubjectId } from "../types";
import { getRandomQuestions } from "../data/questions";
import { SUBJECTS } from "../data/subjects";
import { speechService, startVoiceRecognition, AI_VOICES, VoiceSettings } from "../utils/speech";
import {
  Volume2,
  Mic,
  MicOff,
  CheckCircle,
  XCircle,
  Award,
  RotateCcw,
  ArrowRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  Timer,
  ChevronRight,
  ListOrdered,
  Sliders
} from "lucide-react";
import confetti from "canvas-confetti";

interface QuizViewProps {
  initialSubjectId?: SubjectId | "todos";
  onClose: () => void;
  voiceAudioEnabled: boolean;
  onRecordAnswer: (correct: boolean) => void;
  onOpenVoiceSettings?: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  initialSubjectId = "todos",
  onClose,
  voiceAudioEnabled,
  onRecordAnswer,
  onOpenVoiceSettings,
}) => {
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(() =>
    speechService.getSettings()
  );

  useEffect(() => {
    return speechService.subscribeSettings((s) => setVoiceSettings(s));
  }, []);

  const getVoiceName = () => {
    if (voiceSettings.engine === "ai") {
      const v = AI_VOICES.find((item) => item.id === voiceSettings.aiVoice);
      return v ? v.name : "Voz IA";
    }
    return "Voz Local";
  };
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | "todos">(initialSubjectId);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [difficultyFilter, setDifficultyFilter] = useState<"todos" | "Fácil" | "Médio" | "Difícil">("todos");
  
  // Quiz State
  const [gameState, setGameState] = useState<"setup" | "playing" | "finished">("setup");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [tentativeOption, setTentativeOption] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ question: Question; selected: number; isCorrect: boolean }[]>([]);

  // Voice recognition state
  const [isListening, setIsListening] = useState<boolean>(false);
  const [voiceTranscript, setVoiceTranscript] = useState<string>("");
  const recognitionRef = useRef<{ stop: () => void } | null>(null);

  // Timer
  const [secondsLeft, setSecondsLeft] = useState<number>(30);
  const timerRef = useRef<any>(null);

  const currentQuestion = questions[currentIndex];

  // Start Quiz
  const handleStartQuiz = () => {
    const pool = getRandomQuestions(
      selectedSubject,
      questionCount,
      difficultyFilter === "todos" ? undefined : difficultyFilter
    );
    if (pool.length === 0) return;

    setQuestions(pool);
    setCurrentIndex(0);
    setTentativeOption(null);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setGameState("playing");
  };

  // When question changes, speak question if voice is enabled and start timer
  useEffect(() => {
    if (gameState === "playing" && currentQuestion) {
      setTentativeOption(null);
      setSelectedOption(null);
      setIsAnswered(false);
      setSecondsLeft(45);
      setVoiceTranscript("");

      // Speak Question
      if (voiceAudioEnabled) {
        const textToRead = `Pergunta ${currentIndex + 1}. ${currentQuestion.question}. Opção A: ${currentQuestion.options[0]}. Opção B: ${currentQuestion.options[1]}. Opção C: ${currentQuestion.options[2]}. Opção D: ${currentQuestion.options[3]}. Selecione a alternativa e confirme.`;
        speechService.speak(textToRead);
      }

      // Reset & start timer
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            // Time ran out: confirm tentative or mark expired
            handleTimeOut();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      speechService.stop();
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [currentIndex, gameState]);

  // Handle timeout
  const handleTimeOut = () => {
    setTentativeOption((currentTentative) => {
      if (currentTentative !== null) {
        handleConfirmAnswer(currentTentative);
      } else {
        handleConfirmAnswer(-1);
      }
      return currentTentative;
    });
  };

  // Keyboard controls for quiz
  useEffect(() => {
    if (gameState !== "playing") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (!isAnswered) {
        if (e.key === "1" || e.key.toLowerCase() === "a") {
          setTentativeOption(0);
        } else if (e.key === "2" || e.key.toLowerCase() === "b") {
          setTentativeOption(1);
        } else if (e.key === "3" || e.key.toLowerCase() === "c") {
          setTentativeOption(2);
        } else if (e.key === "4" || e.key.toLowerCase() === "d") {
          setTentativeOption(3);
        } else if (e.key === "Enter" && tentativeOption !== null) {
          e.preventDefault();
          handleConfirmAnswer();
        }
      } else {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, isAnswered, tentativeOption, currentIndex, questions.length]);

  // Select Tentative Option (Allows interval & changing choice before confirming)
  const handleSelectTentative = (idx: number) => {
    if (isAnswered || !currentQuestion) return;
    setTentativeOption(idx);
    const letter = ["A", "B", "C", "D"][idx];
    setVoiceTranscript(`Opção ${letter} marcada. Clique em 'Confirmar Resposta' ou pressione Enter.`);
  };

  // Definitively Confirm the chosen answer
  const handleConfirmAnswer = (forcedIdx?: number) => {
    const idx = forcedIdx !== undefined ? forcedIdx : tentativeOption;
    if (isAnswered || !currentQuestion || idx === null) return;

    if (timerRef.current) clearInterval(timerRef.current);
    if (recognitionRef.current) recognitionRef.current.stop();
    setIsListening(false);

    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
      onRecordAnswer(true);
      if (voiceAudioEnabled) {
        speechService.speak(`Resposta Correta! ${currentQuestion.keyTakeaway}`);
      }
    } else {
      onRecordAnswer(false);
      if (voiceAudioEnabled) {
        const correctLetter = ["A", "B", "C", "D"][currentQuestion.correctIndex];
        speechService.speak(
          `Resposta incorreta. A alternativa correta é a letra ${correctLetter}. ${currentQuestion.keyTakeaway}`
        );
      }
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion,
        selected: idx,
        isCorrect,
      },
    ]);
  };

  // Next Question or Finish
  const handleNext = () => {
    speechService.stop();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setGameState("finished");
      if (score >= questions.length * 0.7) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (e) {
          // ignore
        }
      }
    }
  };

  // Voice Answering (Speech Recognition)
  const toggleVoiceAnswering = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    setIsListening(true);
    setVoiceTranscript("Ouvindo sua resposta...");

    recognitionRef.current = startVoiceRecognition(
      (transcript, isFinal) => {
        setVoiceTranscript(transcript);

        if (isFinal) {
          setIsListening(false);
          const lower = transcript.toLowerCase();

          // Check if user said "confirmar"
          if (
            lower.includes("confirmar") ||
            lower.includes("confirma") ||
            lower.includes("confirmado") ||
            lower.includes("pode confirmar")
          ) {
            handleConfirmAnswer();
            return;
          }

          // Check if already answered and user wants next question
          if (isAnswered && (lower.includes("próxima") || lower.includes("avançar") || lower.includes("continuar"))) {
            handleNext();
            return;
          }

          // Check for letters
          if (lower.includes("letra a") || lower.includes("opção a") || lower.trim() === "a") {
            handleSelectTentative(0);
          } else if (lower.includes("letra b") || lower.includes("opção b") || lower.trim() === "b") {
            handleSelectTentative(1);
          } else if (lower.includes("letra c") || lower.includes("opção c") || lower.trim() === "c") {
            handleSelectTentative(2);
          } else if (lower.includes("letra d") || lower.includes("opção d") || lower.trim() === "d") {
            handleSelectTentative(3);
          } else {
            // Attempt to match with option text keywords
            let matched = -1;
            currentQuestion.options.forEach((opt, i) => {
              const optWords = opt.toLowerCase().split(" ").filter((w) => w.length > 4);
              const matches = optWords.filter((w) => lower.includes(w));
              if (matches.length >= 2 || (optWords.length === 1 && matches.length === 1)) {
                matched = i;
              }
            });

            if (matched !== -1) {
              handleSelectTentative(matched);
            } else {
              setVoiceTranscript(`Reconhecido: "${transcript}". Diga "Opção A", "B", "C", "D" ou "Confirmar".`);
            }
          }
        }
      },
      () => setIsListening(false),
      () => {
        setIsListening(false);
        setVoiceTranscript("Microfone não disponível ou erro de captura.");
      }
    );
  };

  // --- RENDER SETUP SCREEN ---
  if (gameState === "setup") {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 animate-in fade-in duration-300">
        <div className="text-center max-w-lg mx-auto mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-blue-500/25">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Simulado & Quiz Interativo por Voz
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Pratique com questões didáticas verificadas e responda por voz ou clique com feedback em tempo real.
          </p>
          {onOpenVoiceSettings && (
            <div className="mt-3.5 flex items-center justify-center">
              <button
                type="button"
                onClick={onOpenVoiceSettings}
                className="px-3.5 py-1.5 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold border border-indigo-200 flex items-center space-x-1.5 transition-colors shadow-2xs"
                title="Configurar voz e dicção para este simulado"
              >
                <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Voz da Narração:</span>
                <span className="font-bold text-indigo-900">{getVoiceName()}</span>
                <Sliders className="w-3 h-3 text-indigo-400" />
              </button>
            </div>
          )}
        </div>

        {/* Configuration Options */}
        <div className="space-y-6">
          {/* Subject Select */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Assunto da Prova:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedSubject("todos")}
                className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                  selectedSubject === "todos"
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                <div className="font-bold text-sm">🌐 Todos os 6</div>
                <div className="text-[11px] opacity-80 mt-0.5">312 questões no total</div>
              </button>
              {SUBJECTS.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    selectedSubject === sub.id
                      ? "bg-blue-50 text-blue-900 border-blue-400 shadow-sm ring-1 ring-blue-300"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                  }`}
                >
                  <div className="font-bold text-sm flex items-center space-x-1.5">
                    <span>{sub.icon}</span>
                    <span className="truncate">{sub.shortTitle}</span>
                  </div>
                  <div className="text-[11px] opacity-75 mt-0.5">52 questões</div>
                </button>
              ))}
            </div>
          </div>

          {/* Number of Questions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Quantidade de Questões:
              </label>
              <div className="flex items-center space-x-2">
                {[5, 10, 15, 20].map((num) => (
                  <button
                    key={num}
                    onClick={() => setQuestionCount(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                      questionCount === num
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    {num} Qs
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Nível de Dificuldade:
              </label>
              <div className="flex items-center space-x-2">
                {(["todos", "Fácil", "Médio", "Difícil"] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setDifficultyFilter(diff)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                      difficultyFilter === diff
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    {diff === "todos" ? "Misto" : diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Voice Mode Feature Highlight */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs text-indigo-950 space-y-1">
              <p className="font-bold">Modo Oral / Perguntas por Voz Ativo</p>
              <p className="text-slate-600 leading-relaxed">
                O aplicativo lê o enunciado e as 4 alternativas em áudio. Você pode responder falando no microfone (ex: <em>"Opção B"</em> ou <em>"Letra C"</em>) ou clicando nas alternativas!
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Voltar ao Estudo
            </button>
            <button
              id="start-quiz-now-btn"
              onClick={handleStartQuiz}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md transition-all flex items-center space-x-2"
            >
              <span>Começar Simulado</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER FINISHED SCREEN ---
  if (gameState === "finished") {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 animate-in fade-in duration-300">
        <div className="text-center max-w-md mx-auto mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-amber-500/25">
            <Award className="w-9 h-9" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Simulado Concluído!
          </h2>
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 inline-block">
            <div className="text-4xl font-extrabold text-indigo-600">
              {score} / {questions.length}
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
              {percentage}% de Aproveitamento
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-3">
            {percentage >= 80
              ? "Excelente domínio fisiológico! Pronto para a prova!"
              : percentage >= 60
              ? "Bom desempenho! Revise os pontos incorretos abaixo."
              : "Continue praticando os diagramas e explicações em áudio."}
          </p>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Revisão das Questões:
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {userAnswers.map((item, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                  item.isCorrect
                    ? "bg-emerald-50/60 border-emerald-200 text-emerald-950"
                    : "bg-rose-50/60 border-rose-200 text-rose-950"
                }`}
              >
                <div className="flex items-start justify-between gap-2 font-semibold">
                  <div className="flex items-center space-x-1.5">
                    {item.isCorrect ? (
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                    <span>{idx + 1}. {item.question.question}</span>
                  </div>
                  <span className="shrink-0 px-2 py-0.5 rounded-md bg-white/80 border border-slate-200 text-[10px] text-slate-700">
                    {item.question.difficulty}
                  </span>
                </div>
                {!item.isCorrect && (
                  <div className="mt-2 pt-2 border-t border-rose-200/60 text-slate-700">
                    <p>
                      <strong className="text-rose-700">Sua resposta: </strong>
                      {item.selected === -1 ? "Tempo esgotado" : item.question.options[item.selected]}
                    </p>
                    <p className="mt-1">
                      <strong className="text-emerald-700">Gabarito Oficial: </strong>
                      {item.question.options[item.question.correctIndex]}
                    </p>
                    <p className="mt-1 text-slate-600 italic">
                      {item.question.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Fechar Simulado
          </button>
          <button
            onClick={() => setGameState("setup")}
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Novo Simulado</span>
          </button>
        </div>
      </div>
    );
  }

  // --- RENDER PLAYING ACTIVE QUIZ ---
  if (!currentQuestion) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl p-5 sm:p-7 animate-in fade-in duration-300">
      {/* Quiz Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
            Questão {currentIndex + 1} de {questions.length}
          </span>
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
            {currentQuestion.subtopic}
          </span>
        </div>

        {/* Timer, Voice & Score */}
        <div className="flex items-center space-x-2.5">
          {onOpenVoiceSettings && (
            <button
              onClick={onOpenVoiceSettings}
              title="Trocar voz da narração"
              className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold border border-indigo-200 hidden sm:flex items-center space-x-1 transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>{getVoiceName()}</span>
            </button>
          )}

          <div className={`flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-lg border ${
            secondsLeft <= 10
              ? "bg-rose-50 text-rose-600 border-rose-200 animate-pulse"
              : "bg-slate-50 text-slate-700 border-slate-200"
          }`}>
            <Timer className="w-3.5 h-3.5" />
            <span>{secondsLeft}s</span>
          </div>
          <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
            Score: {score}
          </div>
        </div>
      </div>

      {/* Question Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full my-4 overflow-hidden">
        <div
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Text & Audio Read Button */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {currentQuestion.question}
          </h3>

          <button
            id="speak-current-question-btn"
            onClick={() => {
              speechService.speak(
                `${currentQuestion.question}. Opção A: ${currentQuestion.options[0]}. Opção B: ${currentQuestion.options[1]}. Opção C: ${currentQuestion.options[2]}. Opção D: ${currentQuestion.options[3]}.`
              );
            }}
            title="Ouvir pergunta novamente"
            className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 shrink-0 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-2 flex items-center space-x-2 text-[11px] text-slate-400">
          <span className="font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
            {currentQuestion.difficulty}
          </span>
          <span>•</span>
          <span>{currentQuestion.officialReference}</span>
        </div>
      </div>

      {/* Answer Options */}
      <div className="space-y-2.5 mb-5">
        {currentQuestion.options.map((option, idx) => {
          const letter = ["A", "B", "C", "D"][idx];
          const isTentative = tentativeOption === idx;
          const isSelected = selectedOption === idx;
          const isCorrectAnswer = idx === currentQuestion.correctIndex;

          let btnStyle = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300";

          if (isAnswered) {
            if (isCorrectAnswer) {
              btnStyle = "bg-emerald-500 text-white border-emerald-600 font-bold shadow-sm";
            } else if (isSelected && !isCorrectAnswer) {
              btnStyle = "bg-rose-500 text-white border-rose-600 font-bold shadow-sm";
            } else {
              btnStyle = "bg-slate-100 text-slate-400 border-slate-200 opacity-60";
            }
          } else if (isTentative) {
            btnStyle = "bg-indigo-50/90 border-indigo-600 text-indigo-950 font-bold shadow-sm ring-2 ring-indigo-500/30 scale-[1.01]";
          }

          return (
            <button
              key={idx}
              id={`quiz-option-${letter.toLowerCase()}`}
              disabled={isAnswered}
              onClick={() => handleSelectTentative(idx)}
              className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start space-x-3 cursor-pointer ${btnStyle}`}
            >
              <span
                className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                  isAnswered && (isCorrectAnswer || isSelected)
                    ? "bg-white/20 text-white"
                    : isTentative && !isAnswered
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 shadow-2xs"
                }`}
              >
                {letter}
              </span>
              <span className="flex-1 mt-0.5">{option}</span>
              {!isAnswered && isTentative && (
                <span className="px-2 py-0.5 rounded-md bg-indigo-200/80 text-indigo-900 text-[10px] uppercase font-bold tracking-wider shrink-0 mt-0.5">
                  Marcada
                </span>
              )}
              {isAnswered && isCorrectAnswer && (
                <CheckCircle className="w-5 h-5 text-white shrink-0" />
              )}
              {isAnswered && isSelected && !isCorrectAnswer && (
                <XCircle className="w-5 h-5 text-white shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Interval / Definitive Confirmation Box */}
      {!isAnswered && (
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-blue-50/70 to-slate-50 border border-indigo-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex items-center space-x-3 text-xs w-full sm:w-auto">
            <div
              className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-sm shadow-xs shrink-0 ${
                tentativeOption !== null
                  ? "bg-indigo-600 text-white shadow-indigo-600/30"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              {tentativeOption !== null ? ["A", "B", "C", "D"][tentativeOption] : "?"}
            </div>
            <div>
              <div className="font-bold text-slate-900">
                {tentativeOption !== null
                  ? `Opção ${["A", "B", "C", "D"][tentativeOption]} marcada para conferência`
                  : "Escolha uma alternativa acima"}
              </div>
              <p className="text-[11px] text-slate-500">
                {tentativeOption !== null
                  ? "Você pode mudar sua escolha à vontade antes de confirmar definitivamente."
                  : "Clique em uma opção (ou fale por voz) e depois confirme."}
              </p>
            </div>
          </div>

          <button
            id="quiz-confirm-answer-btn"
            disabled={tentativeOption === null}
            onClick={() => handleConfirmAnswer()}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md shrink-0 cursor-pointer ${
              tentativeOption !== null
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-600/20 active:scale-95"
                : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>
              {tentativeOption !== null
                ? `Confirmar Resposta (${["A", "B", "C", "D"][tentativeOption]})`
                : "Aguardando Seleção"}
            </span>
            {tentativeOption !== null && (
              <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono">
                ↵ Enter
              </kbd>
            )}
          </button>
        </div>
      )}

      {/* Voice Answering Interaction Panel */}
      <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-xs text-slate-600">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>
            {voiceTranscript || "Fale ao microfone ou clique na alternativa para responder."}
          </span>
        </div>

        <button
          id="toggle-mic-answer-btn"
          disabled={isAnswered}
          onClick={toggleVoiceAnswering}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all border shrink-0 ${
            isListening
              ? "bg-rose-600 text-white border-rose-700 animate-pulse shadow-xs"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 shadow-2xs"
          } ${isAnswered ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isListening ? (
            <>
              <Mic className="w-4 h-4 text-white" />
              <span>Ouvindo...</span>
            </>
          ) : (
            <>
              <Mic className="w-4 h-4 text-blue-600" />
              <span>Responder por Voz</span>
            </>
          )}
        </button>
      </div>

      {/* Didactic Explanation Box (Revealed after answering) */}
      {isAnswered && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-200 space-y-2 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Explicação Didática Baseada em Literatura Oficial
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            {currentQuestion.explanation}
          </p>
          <div className="pt-1 flex items-center justify-between text-xs text-slate-500 border-t border-blue-200/60">
            <span className="font-semibold text-indigo-700">
              {currentQuestion.keyTakeaway}
            </span>
            <span className="italic">{currentQuestion.officialReference}</span>
          </div>
        </div>
      )}

      {/* Bottom Bar: Back & Next */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          Sair do Simulado
        </button>

        {isAnswered ? (
          <button
            id="quiz-next-question-btn"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all flex items-center space-x-2 cursor-pointer active:scale-95"
          >
            <span>
              {currentIndex + 1 < questions.length ? "Próxima Questão" : "Ver Resultado Final"}
            </span>
            <ChevronRight className="w-4 h-4" />
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono">
              ↵ Enter
            </kbd>
          </button>
        ) : tentativeOption !== null ? (
          <button
            id="quiz-bottom-confirm-btn"
            onClick={() => handleConfirmAnswer()}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center space-x-1.5 cursor-pointer active:scale-95"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Confirmar ({["A", "B", "C", "D"][tentativeOption]})</span>
          </button>
        ) : (
          <span className="text-xs text-slate-400">
            Selecione uma alternativa acima para habilitar confirmação
          </span>
        )}
      </div>
    </div>
  );
};
