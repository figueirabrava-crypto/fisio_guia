export type SubjectId =
  | "neurofisiologia"
  | "fisiologia-celular"
  | "sensorial"
  | "digestoria"
  | "cardiorrespiratoria"
  | "excretora"
  | "digestorio"
  | "cardiorrespiratorio"
  | "excretor";

export type Difficulty = "Fácil" | "Médio" | "Difícil";

export interface Question {
  id: string;
  subjectId: SubjectId;
  subtopic: string;
  difficulty: Difficulty;
  question: string;
  options: [string, string, string, string];
  correctIndex: number; // 0, 1, 2, 3
  explanation: string;
  officialReference: string; // e.g. "Guyton & Hall, Cap. 45" ou "Silverthorn, Cap. 8"
  keyTakeaway: string;
}

export interface Hotspot {
  id: string;
  title: string;
  subtitle?: string;
  x: number; // 0 to 100 (% of diagram width)
  y: number; // 0 to 100 (% of diagram height)
  xPercent?: number;
  yPercent?: number;
  description: string;
  clinicalPearl: string;
  functionSummary?: string;
  audioScript?: string;
  color?: string;
}

export interface HotspotPin extends Hotspot {}

export interface ClinicalConstant {
  label: string;
  value: string;
  unit?: string;
  interpretation: string;
}

export interface ClinicalPathology {
  condition: string;
  mechanism: string;
}

export interface SubjectThemeStyles {
  gradientHero: string;
  gradientBadge: string;
  borderAccent: string;
  textAccent: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  lightBg: string;
  radarColor: string;
  cardHighlight: string;
  tabActiveClass: string;
  codeBadge: string;
}

export interface Subject {
  id: SubjectId;
  title: string;
  shortTitle: string;
  subtitle: string;
  motto?: string;
  code?: string;
  specialtyPill?: string;
  icon: string;
  themeColor: string; // hex or color name
  primaryColor?: string;
  bgColor?: string;
  badgeColor?: string;
  borderColor?: string;
  audioSummaryScript: string;
  summaryAudio?: string;
  keyPrinciples: string[];
  officialReferences: string[];
  clinicalConstants?: ClinicalConstant[];
  clinicalPathologies?: ClinicalPathology[];
  themeStyles?: SubjectThemeStyles;
  keyConcepts?: { title: string; desc: string; iconName?: string }[];
  structures?: string[];
  processes?: string[];
  hotspots: Hotspot[];
}

export interface SubjectModule extends Subject {}

export interface QuizAttempt {
  questionId: string;
  selectedOption: number;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface QuizResultSummary {
  subjectId: SubjectId | "todos";
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  completedAt: string;
  attempts: QuizAttempt[];
}

export interface UserProgress {
  completedSubjects: SubjectId[];
  quizScores: Record<string, number>;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  streakDays: number;
}

export interface UserStats {
  totalAnswered: number;
  totalCorrect: number;
  subjectStats: Record<SubjectId, { answered: number; correct: number }>;
  streakDays: number;
  completedQuizzes: number;
}
