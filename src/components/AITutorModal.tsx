import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Send,
  Volume2,
  Mic,
  MicOff,
  X,
  Bot,
  User,
  Loader2,
  BookOpen,
  Sliders,
  WifiOff
} from "lucide-react";
import { speechService, startVoiceRecognition, AI_VOICES, VoiceSettings } from "../utils/speech";
import { generateOfflineTutorResponse } from "../utils/offlineTutor";

interface AITutorModalProps {
  onClose: () => void;
  voiceAudioEnabled: boolean;
  currentSubjectTitle?: string;
  onOpenVoiceSettings?: () => void;
}

interface Message {
  role: "user" | "assistant";
  text: string;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  onClose,
  voiceAudioEnabled,
  currentSubjectTitle,
  onOpenVoiceSettings,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `Olá! Sou o seu Tutor Especialista em Fisiologia Humana. Você pode me fazer perguntas conceituais, tirar dúvidas sobre os 6 assuntos da sua prova, ou pedir que eu explique qualquer mecanismo fisiológico em detalhes! Pode falar por voz no microfone ou digitar.`,
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(() =>
    speechService.getSettings()
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    return speechService.subscribeSettings((s) => {
      setVoiceSettings(s);
    });
  }, []);

  const getVoiceName = () => {
    if (voiceSettings.engine === "ai") {
      const v = AI_VOICES.find((item) => item.id === voiceSettings.aiVoice);
      return v ? v.name : "Voz IA";
    }
    return "Voz Local";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (queryText?: string) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: textToSend }]);
    setIsLoading(true);

    try {
      if (!navigator.onLine) {
        throw new Error("offline");
      }

      const response = await fetch("/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: textToSend,
          subjectContext: currentSubjectTitle || "Fisiologia Humana Geral",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro na resposta do servidor.");
      }

      const data = await response.json();
      const reply = data.answer || "Desculpe, não consegui obter a resposta no momento.";

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);

      if (voiceAudioEnabled) {
        speechService.speak(reply);
      }
    } catch {
      // Offline fallback: Use comprehensive local medical physiology engine
      const offlineReply = generateOfflineTutorResponse(textToSend, currentSubjectTitle);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: offlineReply,
        },
      ]);

      if (voiceAudioEnabled) {
        speechService.speak(offlineReply);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    setIsListening(true);
    recognitionRef.current = startVoiceRecognition(
      (transcript, isFinal) => {
        setInput(transcript);
        if (isFinal) {
          setIsListening(false);
          handleSend(transcript);
        }
      },
      () => setIsListening(false),
      () => setIsListening(false)
    );
  };

  const quickPrompts = [
    "Explique como a bomba de Na+/K+ ATPase gera o potencial de repouso",
    "Como funciona o Sistema Renina-Angiotensina-Aldosterona (SRAA)?",
    "Qual a diferença eletrofisiológica entre o potencial do Nó SA e do Miocárdio?",
    "Como os receptores olfatórios enviam sinais diretamente sem passar pelo tálamo?",
    "Qual o papel do HCl e do Pepsinogênio na digestão gástrica?",
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[85vh] animate-in fade-in duration-300">
      {/* Header */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/30 border border-indigo-300/30 flex items-center justify-center text-indigo-200">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold">
              Tutor IA • Dr. Fisiólogo
            </h2>
            <p className="text-xs text-indigo-200">
              Respostas baseadas em Guyton & Hall, Silverthorn e Kandel
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {onOpenVoiceSettings && (
            <button
              onClick={onOpenVoiceSettings}
              title="Trocar e personalizar voz do tutor"
              className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-white/20 shadow-2xs"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Voz:</span>
              <span className="font-bold text-amber-200">{getVoiceName()}</span>
              <Sliders className="w-3 h-3 text-indigo-200" />
            </button>
          )}

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start space-x-2.5 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white rounded-br-none shadow-xs"
                  : "bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-2xs"
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>

              {msg.role === "assistant" && (
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => speechService.speak(msg.text)}
                    className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 font-medium"
                    title="Ouvir resposta em áudio"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Ouvir em Voz</span>
                  </button>
                </div>
              )}
            </div>

            {msg.role === "user" && (
              <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center space-x-2 text-indigo-600 text-xs font-semibold p-3 bg-indigo-50/70 rounded-xl max-w-xs">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Consultando tratados de fisiologia...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="p-2.5 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center space-x-2">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">
          Sugestões:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200 shrink-0"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-white border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center space-x-2"
        >
          <button
            type="button"
            onClick={handleVoiceInput}
            title={isListening ? "Parar de ouvir" : "Falar por microfone"}
            className={`p-2.5 rounded-xl border transition-all ${
              isListening
                ? "bg-rose-600 text-white border-rose-700 animate-pulse"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
            }`}
          >
            {isListening ? <Mic className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          <input
            type="text"
            placeholder={
              isListening
                ? "Ouvindo sua voz..."
                : "Pergunte algo sobre a matéria ou digite uma dúvida..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
          />

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white shadow-sm transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
