import React from "react";
import { Subject } from "../types";
import { 
  BookOpen, 
  CheckCircle, 
  Volume2, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  Stethoscope,
  Microscope,
  ShieldCheck,
  FileText
} from "lucide-react";
import { speechService } from "../utils/speech";

interface SubjectOverviewProps {
  subject: Subject;
  onStartSubjectQuiz: () => void;
  voiceAudioEnabled: boolean;
}

export const SubjectOverview: React.FC<SubjectOverviewProps> = ({
  subject,
  onStartSubjectQuiz,
  voiceAudioEnabled,
}) => {
  const handleListenCard = (text: string) => {
    speechService.speak(text);
  };

  const theme = subject.themeColor || "#3b82f6";

  return (
    <div className="space-y-6">
      {/* Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Fundamentos & Mecanismos Fisiológicos */}
        <div 
          className="bg-white p-5 rounded-2xl border shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md"
          style={{ borderColor: "#e2e8f0" }}
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                style={{ backgroundColor: `${theme}15`, borderColor: `${theme}30`, color: theme }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-data font-bold uppercase tracking-wider text-slate-400">
                  {subject.code || "MÓDULO"}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Mecanismos Chave
                </h3>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-700">
              {subject.keyPrinciples.slice(0, 4).map((kp, idx) => (
                <li key={idx} className="flex items-start space-x-2 group">
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: theme }}
                  />
                  <span className="leading-relaxed flex-1 text-slate-600">{kp}</span>
                  <button
                    onClick={() => handleListenCard(kp)}
                    title="Ouvir mecanismo"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 text-slate-400 hover:text-indigo-600"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Base Bioquímica & Biofísica</span>
            <span className="font-semibold text-slate-700 font-mono-data">4 Tópicos</span>
          </div>
        </div>

        {/* Card 2: Fisiopatologia & Relevância Clínica */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 text-rose-600">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-data font-bold uppercase tracking-wider text-slate-400">
                  CASOS CLÍNICOS
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Fisiopatologia Prática
                </h3>
              </div>
            </div>

            <div className="space-y-2.5">
              {subject.clinicalPathologies && subject.clinicalPathologies.length > 0 ? (
                subject.clinicalPathologies.slice(0, 3).map((patho, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-rose-50/40 hover:border-rose-100 transition-colors group cursor-pointer"
                    onClick={() => handleListenCard(`${patho.condition}. ${patho.mechanism}`)}
                    title="Clique para ouvir a correlação clínica"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span>{patho.condition}</span>
                      </span>
                      <Volume2 className="w-3 h-3 text-slate-400 group-hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {patho.mechanism}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500">
                  Correlações clínicas integradas nas 52 questões deste módulo.
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Diagnósticos Diferenciais</span>
            <span className="font-semibold text-rose-600">Alta Cobrança</span>
          </div>
        </div>

        {/* Card 3: Literatura e Tratados Oficiais */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-blue-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-data font-bold uppercase tracking-wider text-slate-400">
                  FONTES ACADÊMICAS
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  Tratados Oficiais
                </h3>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              Questões e gabaritos fundamentados estritamente na literatura médica universitária:
            </p>

            <div className="space-y-1.5">
              {subject.officialReferences.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 flex items-center space-x-2"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[11px] truncate">{ref}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-[11px] text-emerald-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Conteúdo 100% Validado</span>
          </div>
        </div>

        {/* Card 4: Quiz do Módulo CTA (Themed) */}
        <div 
          className="rounded-2xl p-5 shadow-md flex flex-col justify-between text-white relative overflow-hidden transition-all duration-300"
          style={{
            backgroundImage: `linear-gradient(145deg, #090d16 0%, #111827 50%, #090d16 100%)`,
            border: `1px solid ${theme}55`,
          }}
        >
          {/* Subtle colored ambient glow */}
          <div 
            className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-40"
            style={{ backgroundColor: theme }}
          />

          <div className="relative z-10 space-y-3">
            <div className="flex items-center space-x-2">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                style={{ backgroundColor: `${theme}30`, borderColor: `${theme}60`, color: theme }}
              >
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <span 
                  className="text-[10px] font-mono-data font-bold uppercase tracking-wider"
                  style={{ color: theme }}
                >
                  AVALIAÇÃO
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white font-display">
                  Simulado {subject.shortTitle}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Teste seu domínio com <strong>52 questões</strong> oficiais com narração em voz alta e escuta de voz.
            </p>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5 font-mono-data text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-[11px]">Banco do Tema:</span>
                <span className="font-bold text-white">52 Questões</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-[11px]">Voz Ativa:</span>
                <span className="font-bold text-emerald-400">Oral & Escrito</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4">
            <button
              id={`start-subject-quiz-cta-${subject.id}`}
              onClick={onStartSubjectQuiz}
              className="w-full py-2.5 px-4 rounded-xl text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 hover:brightness-110 active:scale-98 cursor-pointer"
              style={{
                backgroundColor: theme,
                boxShadow: `0 4px 14px ${theme}60`,
              }}
            >
              <span>Iniciar Quiz de {subject.shortTitle}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
