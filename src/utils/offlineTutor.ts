import { THEORY_DATABASE } from "../data/theoryData";
import { SUBJECTS } from "../data/subjects";
import { QUESTIONS_DATABASE } from "../data/questions";

export function generateOfflineTutorResponse(query: string, subjectContext?: string): string {
  const qClean = query.toLowerCase().trim();

  if (!qClean) {
    return "Olá! Sou seu Tutor Especialista em Fisiologia Humana. Você pode me perguntar sobre potenciais de ação, sinapses, ciclo cardíaco, trocas gasosas, filtração renal, digestão enzimática ou qualquer conceito da sua prova!";
  }

  // Common quick physiology questions mapping
  const matches: { score: number; content: string }[] = [];

  // 1. Search in Theory database
  Object.entries(THEORY_DATABASE).forEach(([subjectKey, theory]) => {
    theory.subtopics.forEach((sub) => {
      let score = 0;
      const titleLower = sub.title.toLowerCase();
      const sumLower = sub.summary.toLowerCase();
      const expLower = sub.fullExplanation.toLowerCase();

      // Check keywords
      const words = qClean.split(/\s+/).filter((w) => w.length > 2);
      words.forEach((word) => {
        if (titleLower.includes(word)) score += 8;
        if (sumLower.includes(word)) score += 4;
        if (expLower.includes(word)) score += 1;
      });

      if (sub.keyFormula && qClean.includes("fórmula") || qClean.includes("equação") || qClean.includes("cálculo")) {
        score += 5;
      }

      if (score > 2) {
        const matchedSubject = SUBJECTS.find((s) => s.id === theory.subjectId);
        const subjectName = matchedSubject ? matchedSubject.title : theory.subjectId;
        let answer = `📚 **${sub.title}** (${subjectName})\n\n`;
        answer += `${sub.summary}\n\n`;
        answer += `🔍 **Mecanismo Fisiológico Detalhado:**\n${sub.fullExplanation}\n\n`;

        if (sub.steps && sub.steps.length > 0) {
          answer += `⚡ **Etapas do Mecanismo:**\n`;
          sub.steps.forEach((st) => {
            answer += `• Passo ${st.step}: ${st.title} — ${st.description}\n`;
          });
          answer += `\n`;
        }

        if (sub.keyFormula) {
          answer += `📐 **Fórmula Relevante:**\n${sub.keyFormula.formula} (${sub.keyFormula.meaning})\n\n`;
        }

        answer += `🩺 **Pérola Clínica:** ${sub.clinicalPearl}\n\n`;
        answer += `💡 **Dica de Prova:** ${sub.examTip}\n\n`;
        answer += `*(Fonte: Guyton & Hall / Silverthorn • Resposta Gerada pelo Motor Offline FisioGuia)*`;

        matches.push({ score, content: answer });
      }
    });
  });

  // 2. Search in Subjects Clinical Constants & Pathologies
  SUBJECTS.forEach((subj) => {
    let score = 0;
    const titleLower = subj.title.toLowerCase();
    const words = qClean.split(/\s+/).filter((w) => w.length > 2);
    words.forEach((word) => {
      if (titleLower.includes(word)) score += 3;
    });

    subj.clinicalPathologies?.forEach((pathology) => {
      if (qClean.includes(pathology.condition.toLowerCase())) {
        score += 10;
        let answer = `🩺 **Patologia Clínica: ${pathology.condition}** (${subj.title})\n\n`;
        answer += `🔬 **Mecanismo Fisiopatológico:**\n${pathology.mechanism}\n\n`;
        answer += `*(Fonte: Tratado de Fisiologia Médica Guyton & Hall)*`;
        matches.push({ score, content: answer });
      }
    });

    subj.clinicalConstants?.forEach((constant) => {
      if (qClean.includes(constant.label.toLowerCase()) || qClean.includes("valor normal") || qClean.includes("referência")) {
        score += 7;
        let answer = `📊 **Constante Laboratorial: ${constant.label}**\n\n`;
        answer += `• **Valor de Referência:** ${constant.value} ${constant.unit || ""}\n`;
        answer += `• **Interpretação Fisiológica:** ${constant.interpretation}\n\n`;
        answer += `*(Fonte: Valores Oficiais Guyton & Hall)*`;
        matches.push({ score, content: answer });
      }
    });
  });

  // 3. Search in Questions database
  QUESTIONS_DATABASE.forEach((q) => {
    let score = 0;
    const qLower = q.question.toLowerCase();
    const expLower = q.explanation.toLowerCase();
    const words = qClean.split(/\s+/).filter((w) => w.length > 3);
    words.forEach((word) => {
      if (qLower.includes(word)) score += 4;
      if (expLower.includes(word)) score += 2;
    });

    if (score > 8) {
      let answer = `📝 **Questão de Referência (${q.subtopic}):**\n\n`;
      answer += `"${q.question}"\n\n`;
      answer += `✅ **Gabarito Oficial:** ${q.options[q.correctIndex]}\n\n`;
      answer += `🔍 **Justificativa Fisiológica:**\n${q.explanation}\n\n`;
      answer += `📌 **Ponto-Chave:** ${q.keyTakeaway}\n`;
      answer += `📖 **Referência:** ${q.officialReference}`;
      matches.push({ score, content: answer });
    }
  });

  if (matches.length > 0) {
    matches.sort((a, b) => b.score - a.score);
    return matches[0].content;
  }

  // Fallback answer based on subject context or default
  return `Compreendo a sua dúvida sobre "${query}".\n\nNa Fisiologia Humana (${subjectContext || "Geral"}), este mecanismo se baseia na homeostase, nas trocas moleculares através da membrana e nas vias de sinalização reguladas por biofeedback negativo e positivo.\n\nPara aprofundar, consulte a aba **Apostila & Teoria** ou selecione os tópicos correspondentes no **Atlas & Diagrama Interativo**. Você também pode verificar questões relacionadas no **Banco de 312 Questões**!\n\n*(Modo Offline Ativo • Base de Dados Oficial Figueirabrava)*`;
}
