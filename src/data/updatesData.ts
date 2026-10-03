export interface SystemUpdateItem {
  id: string;
  subjectId: string;
  subjectTitle: string;
  title: string;
  badge: string;
  date: string;
  summary: string;
  clinicalImpact: string;
  officialReference: string;
  keyConcepts: string[];
}

export const INITIAL_UPDATES_REGISTRY: SystemUpdateItem[] = [
  {
    id: "up-neuro-1",
    subjectId: "neurofisiologia",
    subjectTitle: "Neurofisiologia",
    title: "Neuroplasticidade Sináptica e Modulação por Células Gliais",
    badge: "Atualização Guyton & Kandel",
    date: "2026-09",
    summary:
      "Avanços demonstram que astrócitos e micróglia não atuam apenas como sustentação passiva, mas realizam a 'sinapse tripartite', captando ativamente glutamato por transportadores GLT-1 e modulando a densidade de receptores AMPA pós-sinápticos durante a Potenciação de Longa Duração (LTP).",
    clinicalImpact:
      "Explica a fisiopatologia da hiperexcitabilidade no estado de mal epiléptico e novas abordagens terapêuticas na Esclerose Múltipla e Miastenia Gravis.",
    officialReference: "Kandel - Principles of Neural Science 6th Ed. & Guyton Cap. 46",
    keyConcepts: ["Sinapse Tripartite", "LTP (Long-Term Potentiation)", "Transportador GLT-1", "Plasticidade Dendrítica"],
  },
  {
    id: "up-celular-1",
    subjectId: "fisiologia-celular",
    subjectTitle: "Fisiologia Celular",
    title: "Canais Mecanossensíveis Piezo1/2 e Sinalização por Cálcio",
    badge: "Biofísica de Membrana",
    date: "2026-09",
    summary:
      "Identificação do papel central dos canais de íons ativados por estiramento mecânico (Piezo1 e Piezo2). Ao sofrerem deformação na bicamada lipídica, promovem influxo imediato de Ca2+ e Na+, convertendo forças de cisalhamento em cascatas bioquímicas intracelulares.",
    clinicalImpact:
      "Regulação da pressão hidrostática endotelial, tônus vascular e barorrecepção aórtica.",
    officialReference: "Alberts - Molecular Biology of the Cell 7th Ed. & Guyton Cap. 4",
    keyConcepts: ["Canais Piezo", "Mecanotransdução", "Influxo de Ca2+", "Bicamada Lipídica"],
  },
  {
    id: "up-sensorial-1",
    subjectId: "sensorial",
    subjectTitle: "Fisiologia Sensorial",
    title: "Transdução Visual Fóvea-Específica e Vias Parvocelular vs. Magnocelular",
    badge: "Neurofisiologia da Percepção",
    date: "2026-09",
    summary:
      "A fotorrecepção nos cones foveais apresenta proporção de quase 1:1 com células bipolares e ganglionares anãs da via Parvocelular (P), proporcionando máxima acuidade visual e percepção de cores, em contraste com a via Magnocelular (M) periférica com alta convergência para detecção de movimento.",
    clinicalImpact:
      "Compreensão das perdas de campo visual no glaucoma e degeneração macular relacionada à idade (DMRI).",
    officialReference: "Silverthorn Cap. 10 & Guyton Cap. 51",
    keyConcepts: ["Via Parvocelular", "Razão 1:1 Foveal", "Fechamento de Canais cGMP", "Rodopsina e Iodopsinas"],
  },
  {
    id: "up-digestorio-1",
    subjectId: "digestorio",
    subjectTitle: "Fisiologia Digestória",
    title: "Eixo Entero-Insular, Hormônios Incretinas (GLP-1/GIP) e Barreira Mucosa",
    badge: "Endocrinologia Gastrintestinal",
    date: "2026-09",
    summary:
      "As células L ileais secretam GLP-1 em resposta à presença intraluminal de glicose e ácidos graxos. O GLP-1 estimula a secreção de insulina glicose-dependente, inibe o glucagon pelas células alfa, retarda o esvaziamento gástrico e atua no centro hipotalâmico da saciedade.",
    clinicalImpact:
      "Fundamento dos análogos de GLP-1 e inibidores de DPP-4 no tratamento do Diabetes Mellitus tipo 2 e obesidade.",
    officialReference: "Guyton & Hall Cap. 65 & Silverthorn Cap. 21",
    keyConcepts: ["Células L e GLP-1", "Efeito Incretina", "Esvaziamento Gástrico", "Células Parietais H+/K+ ATPase"],
  },
  {
    id: "up-cardio-1",
    subjectId: "cardiorrespiratorio",
    subjectTitle: "Fisiologia Cardiorrespiratória",
    title: "Acoplamento Ventrículo-Arterial e Fisiologia do Peptídeo Natriurético (BNP)",
    badge: "Hemodinâmica & Trocas Gasosas",
    date: "2026-09",
    summary:
      "O estiramento parietal dos cardiomiócitos ventriculares induz liberação de BNP (Brain Natriuretic Peptide), que atua via receptor acoplado a guanilil ciclase (NPR-A), aumentando cGMP e promovendo vasodilatação e natriurese. Paralelamente, na mecânica alveolar, a tensão superficial é atenuada por dipalmitoilfosfatidilcolina (surfactante), evitando colapso tele-expiratório.",
    clinicalImpact:
      "Biomarcador cardinal na diferenciação de dispneia cardíaca vs. pulmonar e mecanismo dos inibidores de neprilisina.",
    officialReference: "West - Fisiologia Respiratória 10ª Ed. & Guyton Cap. 9, 22 e 40",
    keyConcepts: ["BNP e cGMP", "Complacência e Elastância", "Lei de Laplace Alveolar", "Gradiente P(A-a)O2"],
  },
  {
    id: "up-renal-1",
    subjectId: "excretor",
    subjectTitle: "Fisiologia Renal & Excretora",
    title: "Feedback Túbulo-Glomerular da Mácula Densa e Cotransporte SGLT2",
    badge: "Fisiologia do Néfron",
    date: "2026-09",
    summary:
      "A mácula densa detecta a entrega de NaCl no início do túbulo distal via cotransportador NKCC2. O aumento de NaCl desencadeia liberação paracrina de adenosina, contraindo a arteríola aferente para preservar a TFG. No túbulo contorcido proximal (TCP), o SGLT2 reabsorve 90% da glicose filtrada acoplado a Na+.",
    clinicalImpact:
      "Mecanismo de nefroproteção dos glifozinas (inibidores de SGLT2) pela restauração do feedback túbulo-glomerular.",
    officialReference: "Guyton & Hall Cap. 26-28 & Eaton & Pooler - Vander Fisiologia Renal",
    keyConcepts: ["Feedback Túbulo-Glomerular", "Mácula Densa & Adenosina", "Cotransporte SGLT2", "SRAA e Aldosterona"],
  },
];
