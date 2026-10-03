import { Question, SubjectId } from "../../types";
import { NEUROFISIOLOGIA_QUESTIONS } from "./neurofisiologia";
import { FISIOLOGIA_CELULAR_QUESTIONS } from "./fisiologiaCelular";
import { SENSORIAL_QUESTIONS } from "./sensorial";
import { DIGESTORIO_QUESTIONS } from "./digestorio";
import { CARDIORRESPIRATORIO_QUESTIONS } from "./cardiorrespiratorio";
import { EXCRETOR_QUESTIONS } from "./excretor";

export const ALL_QUESTIONS_BY_SUBJECT: Record<SubjectId, Question[]> = {
  "neurofisiologia": NEUROFISIOLOGIA_QUESTIONS,
  "fisiologia-celular": FISIOLOGIA_CELULAR_QUESTIONS,
  "sensorial": SENSORIAL_QUESTIONS,
  "digestoria": DIGESTORIO_QUESTIONS,
  "digestorio": DIGESTORIO_QUESTIONS,
  "cardiorrespiratoria": CARDIORRESPIRATORIO_QUESTIONS,
  "cardiorrespiratorio": CARDIORRESPIRATORIO_QUESTIONS,
  "excretora": EXCRETOR_QUESTIONS,
  "excretor": EXCRETOR_QUESTIONS,
};

export const ALL_QUESTIONS: Question[] = [
  ...NEUROFISIOLOGIA_QUESTIONS,
  ...FISIOLOGIA_CELULAR_QUESTIONS,
  ...SENSORIAL_QUESTIONS,
  ...DIGESTORIO_QUESTIONS,
  ...CARDIORRESPIRATORIO_QUESTIONS,
  ...EXCRETOR_QUESTIONS,
];

export const QUESTIONS_DATABASE = ALL_QUESTIONS;

export function getQuestionsBySubject(subjectId: SubjectId): Question[] {
  return ALL_QUESTIONS_BY_SUBJECT[subjectId] || [];
}

export function getRandomQuestions(
  subjectId: SubjectId | "todos",
  count: number = 10,
  difficulty?: "Fácil" | "Médio" | "Difícil"
): Question[] {
  let pool = subjectId === "todos" ? ALL_QUESTIONS : getQuestionsBySubject(subjectId);
  
  if (difficulty) {
    pool = pool.filter((q) => q.difficulty === difficulty);
  }

  // Shuffle array using Fisher-Yates
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

export function searchQuestions(term: string): Question[] {
  const cleanTerm = term.toLowerCase().trim();
  if (!cleanTerm) return ALL_QUESTIONS;
  
  return ALL_QUESTIONS.filter(
    (q) =>
      q.question.toLowerCase().includes(cleanTerm) ||
      q.subtopic.toLowerCase().includes(cleanTerm) ||
      q.explanation.toLowerCase().includes(cleanTerm) ||
      q.keyTakeaway.toLowerCase().includes(cleanTerm)
  );
}
