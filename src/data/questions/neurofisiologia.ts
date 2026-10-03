import { Question } from "../../types";

export const NEUROFISIOLOGIA_QUESTIONS: Question[] = [
  {
    id: "neuro-01",
    subjectId: "neurofisiologia",
    subtopic: "Potencial de Repouso",
    difficulty: "Fácil",
    question: "Qual íon possui a maior permeabilidade na membrana celular do neurônio em repouso, sendo o principal determinante do potencial de repouso (~ -70 mV)?",
    options: [
      "Potássio (K+)",
      "Sódio (Na+)",
      "Cálcio (Ca2+)",
      "Cloreto (Cl-)"
    ],
    correctIndex: 0,
    explanation: "Em repouso, a membrana plasmática neuronal possui uma permeabilidade ao K+ de 50 a 100 vezes maior do que ao Na+, devido à abundância de canais de vazamento de K+ constitutivamente abertos. O efluxo de K+ a favor de seu gradiente químico deixa cargas negativas não difusíveis no interior celular.",
    officialReference: "Guyton & Hall - Tratado de Fisiologia Médica, Cap. 5; Silverthorn, Cap. 8",
    keyTakeaway: "O K+ dita o potencial de repouso devido aos canais de vazamento abertos."
  },
  {
    id: "neuro-02",
    subjectId: "neurofisiologia",
    subtopic: "Potencial de Ação",
    difficulty: "Fácil",
    question: "A fase de despolarização rápida do potencial de ação neuronal ocorre devido a:",
    options: [
      "Abertura em cascata de canais de Na+ dependentes de voltagem e influxo massivo de Na+",
      "Fechamento de todos os canais de K+ e bombeamento passivo de Ca2+",
      "Abertura de canais de Cl- com hiperpolarização imediata",
      "Parada total do funcionamento da bomba de Na+/K+ ATPase"
    ],
    correctIndex: 0,
    explanation: "Quando o potencial de membrana atinge o limiar de disparo (~ -55 mV), os portões de ativação dos canais de Na+ dependentes de voltagem abrem-se rapidamente, permitindo um influxo abrupto de Na+ impulsionado por gradientes elétrico e químico, despolarizando a célula até cerca de +30 mV.",
    officialReference: "Guyton & Hall, Cap. 5; Berne & Levy - Fisiologia, Cap. 2",
    keyTakeaway: "Despolarização rápida = abertura de canais de Na+ voltagem-dependentes."
  },
  {
    id: "neuro-03",
    subjectId: "neurofisiologia",
    subtopic: "Repolarização",
    difficulty: "Fácil",
    question: "A repolarização da membrana durante o potencial de ação é mediada principalmente por:",
    options: [
      "Inativação dos canais de Na+ e abertura mais lenta de canais de K+ dependentes de voltagem",
      "Ativação de canais de cálcio que promovem a saída rápida de Ca2+",
      "Fechamento imediato da bomba de sódio e potássio",
      "Entrada ativa de moléculas de glicose e neurotransmissores"
    ],
    correctIndex: 0,
    explanation: "No pico do potencial de ação (+30 mV), os portões de inativação dos canais de Na+ fecham-se espontaneamente e os canais de K+ dependentes de voltagem atingem abertura máxima, permitindo a saída de K+ e restaurando a eletronegatividade interna.",
    officialReference: "Silverthorn - Fisiologia Humana, Cap. 8; Guyton & Hall, Cap. 5",
    keyTakeaway: "Repolarização = inativação de Na+ + abertura de canais de K+ voltagem-dependentes."
  },
  {
    id: "neuro-04",
    subjectId: "neurofisiologia",
    subtopic: "Sinapse Química",
    difficulty: "Médio",
    question: "Qual íon é essencial no terminal pré-sináptico para desencadear a exocitose das vesículas de neurotransmissores?",
    options: [
      "Cálcio (Ca2+)",
      "Sódio (Na+)",
      "Magnésio (Mg2+)",
      "Potássio (K+)"
    ],
    correctIndex: 0,
    explanation: "A despolarização que alcança o botão pré-sináptico abre canais de Ca2+ dependentes de voltagem. O influxo de Ca2+ interage com proteínas SNARE (sinaptotagmina), provocando a fusão das vesículas sinápticas com a membrana pré-sináptica e liberação por exocitose.",
    officialReference: "Guyton & Hall, Cap. 46; Kandel - Princípios da Neurociência, Cap. 12",
    keyTakeaway: "Influxo de Ca2+ no botão terminal = gatilho obrigatório da exocitose sináptica."
  },
  {
    id: "neuro-05",
    subjectId: "neurofisiologia",
    subtopic: "Morfologia Neuronal",
    difficulty: "Fácil",
    question: "Qual parte do neurônio é especializada na recepção de sinais provenientes de outros neurônios ou receptores sensoriais?",
    options: [
      "Dendritos",
      "Axônio",
      "Botão terminal sináptico",
      "Bainha de mielina"
    ],
    correctIndex: 0,
    explanation: "Conforme ilustrado no infográfico oficial: Dendritos (recebem), Corpo celular (processa), Axônio (transmite) e Terminal sináptico (comunica). Os dendritos possuem grande área de superfície com espinhas dendríticas ricas em receptores pós-sinápticos.",
    officialReference: "Silverthorn, Cap. 8; Guyton & Hall, Cap. 46",
    keyTakeaway: "Dendritos recebem; Corpo celular processa; Axônio conduz; Terminal comunica."
  },
  {
    id: "neuro-06",
    subjectId: "neurofisiologia",
    subtopic: "Neurotransmissores",
    difficulty: "Fácil",
    question: "Qual é o principal neurotransmissor inibitório do encéfalo humano adulto?",
    options: [
      "GABA (Ácido Gama-Aminobutírico)",
      "Glutamato",
      "Acetilcolina",
      "Dopamina"
    ],
    correctIndex: 0,
    explanation: "O GABA é o principal neurotransmissor inibitório no SNC. Ao ligar-se aos receptores GABA-A, abre canais de Cl-, causando influxo de cloreto e hiperpolarização da membrana (potencial pós-sináptico inibitório - PPSI), reduzindo a excitabilidade neuronal.",
    officialReference: "Guyton & Hall, Cap. 46; Berne & Levy, Cap. 3",
    keyTakeaway: "GABA = principal inibitório cerebral (abre canais de Cl-)."
  },
  {
    id: "neuro-07",
    subjectId: "neurofisiologia",
    subtopic: "Neurotransmissores",
    difficulty: "Fácil",
    question: "Qual é o principal neurotransmissor excitatório no sistema nervoso central de mamíferos?",
    options: [
      "Glutamato",
      "Glicina",
      "Serotonina",
      "Acetilcolina"
    ],
    correctIndex: 0,
    explanation: "O glutamato atua em receptores ionotrópicos (AMPA, NMDA e cainato), promovendo a entrada maciça de Na+ e Ca2+, o que gera potenciais pós-sinápticos excitatórios (PPSE) essenciais para aprendizado e memória (LTP).",
    officialReference: "Guyton & Hall, Cap. 46; Silverthorn, Cap. 8",
    keyTakeaway: "Glutamato = principal excitatório do SNC (receptores NMDA e AMPA)."
  },
  {
    id: "neuro-08",
    subjectId: "neurofisiologia",
    subtopic: "Condução Saltatória",
    difficulty: "Médio",
    question: "A alta velocidade de condução do impulso nervoso em axônios mielinizados decorre de:",
    options: [
      "Condução saltatória de nódulo de Ranvier em nódulo de Ranvier",
      "Difusão livre de neurotransmissores por dentro do axoplasma",
      "Maior produção de ATP pelo corpo celular",
      "Abertura contínua de canais em toda a extensão da membrana coberta por lipídios"
    ],
    correctIndex: 0,
    explanation: "A bainha de mielina atua como excelente isolante elétrico de alta resistência e baixa capacitância. A corrente elétrica despolarizante flui por circuitos locais intracelulares e 'salta' gerando potenciais de ação unicamente nos nódulos de Ranvier, onde há densa concentração de canais de Na+.",
    officialReference: "Guyton & Hall, Cap. 5; Berne & Levy, Cap. 2",
    keyTakeaway: "Mielina isola; a despolarização salta entre os nós de Ranvier."
  },
  {
    id: "neuro-09",
    subjectId: "neurofisiologia",
    subtopic: "Células Gliais",
    difficulty: "Médio",
    question: "Quais células são responsáveis por produzir a bainha de mielina no Sistema Nervoso Central (SNC) e no Sistema Nervoso Periférico (SNP), respectivamente?",
    options: [
      "Oligodendrócitos no SNC e Células de Schwann no SNP",
      "Células de Schwann no SNC e Astrócitos no SNP",
      "Microgliócitos no SNC e Células ependimárias no SNP",
      "Astrócitos no SNC e Oligodendrócitos no SNP"
    ],
    correctIndex: 0,
    explanation: "No SNC, um único oligodendrócito pode emitir prolongamentos e mielinizar dezenas de segmentos axonais. No SNP, cada célula de Schwann envolve exclusivamente um único segmento internodal de um axônio.",
    officialReference: "Junqueira & Carneiro - Histologia Básica, Cap. 9; Silverthorn, Cap. 8",
    keyTakeaway: "SNC = Oligodendrócito; SNP = Célula de Schwann."
  },
  {
    id: "neuro-10",
    subjectId: "neurofisiologia",
    subtopic: "Tronco Encefálico",
    difficulty: "Fácil",
    question: "Qual estrutura do tronco encefálico abriga os centros reflexos vitais de controle respiratório e regulação vasomotora da frequência cardíaca e pressão arterial?",
    options: [
      "Bulbo (medula oblonga)",
      "Cerebelo",
      "Corpo caloso",
      "Substância negra"
    ],
    correctIndex: 0,
    explanation: "O bulbo contém núcleos autonômicos indispensáveis à sobrevivência: o centro respiratório bulbar (gerador do ritmo básico) e o centro vasomotor cardiovascular, que modula batimentos cardíacos e tônus vascular.",
    officialReference: "Guyton & Hall, Cap. 42 e 62",
    keyTakeaway: "Bulbo = centros vitais cardiorrespiratórios involuntários."
  },
  {
    id: "neuro-11",
    subjectId: "neurofisiologia",
    subtopic: "Cerebelo",
    difficulty: "Médio",
    question: "Um paciente com lesão cerebelar clássica apresentará predominantemente:",
    options: [
      "Ataxia (incoordenação motora), dismetria e tremor de intenção",
      "Paralisia flácida com perda completa da sensibilidade tátil",
      "Hipertonia em roda denteada e tremor de repouso",
      "Afasia de expressão motora (afasia de Broca)"
    ],
    correctIndex: 0,
    explanation: "O cerebelo não inicia o movimento voluntário, mas coordena a precisão temporal, tônus postural e compara o comando motor córtico-espinhal com o feedback proprioceptivo. Lesões geram ataxia, dismetria e tremor que piora ao se aproximar do alvo (tremor intencional).",
    officialReference: "Guyton & Hall, Cap. 57; Silverthorn, Cap. 10",
    keyTakeaway: "Lesão cerebelar = incoordenação (ataxia), dismetria e tremor de intenção."
  },
  {
    id: "neuro-12",
    subjectId: "neurofisiologia",
    subtopic: "Junção Neuromuscular",
    difficulty: "Fácil",
    question: "Na placa motora (junção neuromuscular esquelética), o neurotransmissor liberado e seu respectivo receptor pós-sináptico são:",
    options: [
      "Acetilcolina e receptor nicotínico ionotrópico",
      "Noradrenalina e receptor beta-1 adrenérgico",
      "Dopamina e receptor D2 metabotrópico",
      "GABA e receptor muscarínico M1"
    ],
    correctIndex: 0,
    explanation: "O neurônio motor alfa libera acetilcolina (ACh), que se liga a receptores colinérgicos nicotínicos (nAChR) na placa terminal da fibra muscular. A abertura do receptor permite influxo de Na+, despolarizando a placa e gerando o potencial de ação muscular.",
    officialReference: "Guyton & Hall, Cap. 7; Silverthorn, Cap. 11",
    keyTakeaway: "Junção neuromuscular = Acetilcolina em receptor nicotínico."
  },
  {
    id: "neuro-13",
    subjectId: "neurofisiologia",
    subtopic: "Acetilcolinesterase",
    difficulty: "Médio",
    question: "Qual é a função da enzima acetilcolinesterase localizada na lâmina basal da fenda sináptica colinérgica?",
    options: [
      "Hidrolisar a acetilcolina em acetato e colina, encerrando rapidamente a estimulação pós-sináptica",
      "Sintetizar nova acetilcolina a partir de aminoácidos circulantes",
      "Bombear acetilcolina de volta para dentro das vesículas axonais",
      "Inibir a abertura dos canais de sódio na membrana pré-sináptica"
    ],
    correctIndex: 0,
    explanation: "A acetilcolinesterase cliva a acetilcolina em frações de milissegundo em colina e acetato. A colina é recaptada pelo transportador de alta afinidade no neurônio para ressíntese. Sem essa enzima, ocorreria despolarização persistente e paralisia espástica.",
    officialReference: "Guyton & Hall, Cap. 7; Silverthorn, Cap. 8",
    keyTakeaway: "Acetilcolinesterase encerra o sinal da acetilcolina degradando-a na fenda."
  },
  {
    id: "neuro-14",
    subjectId: "neurofisiologia",
    subtopic: "Sistema Nervoso Autônomo",
    difficulty: "Médio",
    question: "Sobre o Sistema Nervoso Autônomo (SNA), as fibras pós-ganglionares simpáticas e parassimpáticas liberam classicamente, na maioria dos órgãos efetores:",
    options: [
      "Noradrenalina no simpático e Acetilcolina no parassimpático",
      "Acetilcolina no simpático e Noradrenalina no parassimpático",
      "Dopamina no simpático e Serotonina no parassimpático",
      "Glutamato no simpático e GABA no parassimpático"
    ],
    correctIndex: 0,
    explanation: "O sistema simpático (luta ou fuga) utiliza noradrenalina em receptores adrenérgicos (alfa e beta) nos órgãos-alvo (exceto glândulas sudoríparas que usam ACh). O parassimpático (repouso e digestão) libera acetilcolina em receptores muscarínicos nos órgãos efetores.",
    officialReference: "Guyton & Hall, Cap. 61; Silverthorn, Cap. 11",
    keyTakeaway: "Pós-ganglionar simpático = Noradrenalina; Parassimpático = Acetilcolina."
  },
  {
    id: "neuro-15",
    subjectId: "neurofisiologia",
    subtopic: "Período Refratário",
    difficulty: "Médio",
    question: "O período refratário absoluto do neurônio garante que:",
    options: [
      "O potencial de ação se propague de forma unidirecional e impede a sobreposição de disparos",
      "A célula pare de produzir energia e ative a via de apoptose",
      "Novos potenciais só aconteçam com estímulos de baixa intensidade",
      "A bomba de sódio-potássio funcione em sentido reverso"
    ],
    correctIndex: 0,
    explanation: "No período refratário absoluto, os portões de inativação dos canais de Na+ voltagem-dependentes estão fechados e inalteráveis por voltagem, tornando impossível deflagrar novo potencial. Isso estabelece um teto de frequência de disparo e impede que o impulso retorne no sentido oposto.",
    officialReference: "Silverthorn, Cap. 8; Guyton & Hall, Cap. 5",
    keyTakeaway: "Período refratário absoluto = canais de Na+ inativados = unidirecionalidade."
  },
  {
    id: "neuro-16",
    subjectId: "neurofisiologia",
    subtopic: "Período Refratário Relativo",
    difficulty: "Médio",
    question: "Durante o período refratário relativo, é possível disparar um novo potencial de ação apenas se:",
    options: [
      "For aplicado um estímulo supra-limiar (mais forte que o normal)",
      "A célula for previamente despolarizada por íons cálcio",
      "Ocorrência de inibição completa dos canais de potássio",
      "Houver remoção total de cloreto do líquido extracelular"
    ],
    correctIndex: 0,
    explanation: "No período refratário relativo, parte dos canais de Na+ já retornou ao estado de repouso fechado (recuperados), mas os canais de K+ ainda permanecem abertos causando pós-hiperpolarização. Assim, um estímulo mais intenso que o limiar habitual consegue superar a condutância ao K+ e atingir o limiar.",
    officialReference: "Guyton & Hall, Cap. 5; Berne & Levy, Cap. 2",
    keyTakeaway: "Refratário relativo = requer estímulo supra-limiar mais intenso."
  },
  {
    id: "neuro-17",
    subjectId: "neurofisiologia",
    subtopic: "Neurotransmissores",
    difficulty: "Fácil",
    question: "A degeneração dos neurônios dopaminérgicos na substância negra compacta do mesencéfalo está associada à fisiopatologia de qual condição clínica?",
    options: [
      "Doença de Parkinson",
      "Doença de Alzheimer",
      "Esclerose Múltipla",
      "Miastenia Gravis"
    ],
    correctIndex: 0,
    explanation: "A Doença de Parkinson é caracterizada pela perda progressiva dos neurônios dopaminérgicos da pars compacta da substância negra, reduzindo a via dopaminérgica nigroestriatal e provocando bradicinesia, rigidez muscular e tremor de repouso.",
    officialReference: "Guyton & Hall, Cap. 57; Kandel, Cap. 43",
    keyTakeaway: "Dopamina na substância negra reduzida = Doença de Parkinson."
  },
  {
    id: "neuro-18",
    subjectId: "neurofisiologia",
    subtopic: "Neurotransmissores",
    difficulty: "Fácil",
    question: "A serotonina (5-HT) é sintetizada a partir de qual aminoácido precursor e está envolvida na modulação de:",
    options: [
      "Triptofano; modulação de humor, sono, apetite e ritmos circadianos",
      "Tirosina; contração de músculos esqueléticos rápidos",
      "Glicina; secreção de ácido gástrico no estômago",
      "Histidina; produção de mielina nos nervos periféricos"
    ],
    correctIndex: 0,
    explanation: "A serotonina é produzida pelos núcleos da rafe no tronco encefálico a partir do triptofano. Ela atua em múltiplos receptores (5-HT1 a 5-HT7) modulando o humor, sono REM, sensação de saciedade e percepção da dor.",
    officialReference: "Guyton & Hall, Cap. 60; Silverthorn, Cap. 8",
    keyTakeaway: "Serotonina provém do triptofano e regula humor, sono e bem-estar."
  },
  {
    id: "neuro-19",
    subjectId: "neurofisiologia",
    subtopic: "Barreira Hematoencefálica",
    difficulty: "Médio",
    question: "A barreira hematoencefálica (BHE) é formada anatomicamente por:",
    options: [
      "Células endoteliais com junções oclusivas estreitas (tight junctions) e pés terminais de astrócitos",
      "Camadas concêntricas de mielina de oligodendrócitos e axônios",
      "Macrófagos e microgliócitos circulantes livres no líquor",
      "Fibras colágenas densas sem presença de vasos capilares"
    ],
    correctIndex: 0,
    explanation: "A BHE protege o microambiente neural contra flutuações e toxinas sanguíneas. É constituída por endotélio capilar contínuo com tight junctions (zonula occludens), membrana basal espessa e pés vasculares perivasculares de astrócitos.",
    officialReference: "Silverthorn, Cap. 9; Guyton & Hall, Cap. 62",
    keyTakeaway: "BHE = endotélio com junções oclusivas + pés vasculares de astrócitos."
  },
  {
    id: "neuro-20",
    subjectId: "neurofisiologia",
    subtopic: "Líquido Cefalorraquidiano",
    difficulty: "Fácil",
    question: "Onde o líquido cefalorraquidiano (LCR ou líquor) é produzido e reabsorvido, respectivamente?",
    options: [
      "Plexos corióideos nos ventrículos cerebrais e vilosidades aracnóideas no seio sagital",
      "Células de Schwann na medula e capilares arteriais sistêmicos",
      "Corpo caloso e glândula hipófise anterior",
      "Cerebelo e medula óssea vermelha"
    ],
    correctIndex: 0,
    explanation: "O LCR é secretado ativamente pelos plexos corióideos nos ventrículos laterais, terceiro e quarto ventrículos (~500 mL/dia), circula pelo espaço subaracnóideo e é reabsorvido para a circulação venosa nas granulações (vilosidades) aracnóideas.",
    officialReference: "Guyton & Hall, Cap. 62",
    keyTakeaway: "Produção de LCR = Plexos corióideos; Reabsorção = Vilosidades aracnóideas."
  },
  {
    id: "neuro-21",
    subjectId: "neurofisiologia",
    subtopic: "Potencial Pós-Sináptico",
    difficulty: "Médio",
    question: "Um Potencial Pós-Sináptico Excitatório (PPSE) diferencia-se de um potencial de ação porque o PPSE:",
    options: [
      "É uma resposta graduada, passiva, local e não segue a lei do 'tudo ou nada'",
      "Propaga-se indefinidamente por toda a extensão do axônio sem atenuação",
      "É causado exclusivamente pela saída rápida de ânions cloreto",
      "Só pode ser gerado no terminal pré-sináptico de neurônios motores"
    ],
    correctIndex: 0,
    explanation: "Os potenciais pós-sinápticos (PPSE e PPSI) são potenciais graduados: sua amplitude varia com a quantidade de neurotransmissor liberado, decaem com a distância e o tempo, e sofrem soma espacial e temporal no cone de implantação axônica.",
    officialReference: "Silverthorn, Cap. 8; Berne & Levy, Cap. 3",
    keyTakeaway: "Potencial graduado (PPSE) varia em amplitude; Potencial de ação é tudo-ou-nada."
  },
  {
    id: "neuro-22",
    subjectId: "neurofisiologia",
    subtopic: "Somação Neuronal",
    difficulty: "Médio",
    question: "A somação temporal em um neurônio pós-sináptico refere-se a:",
    options: [
      "Descargas repetidas de alta frequência originadas de um mesmo botão pré-sináptico que se somam antes que o potencial graduado anterior decaia",
      "Disparos simultâneos vindos de múltiplos terminais sinápticos distintos distribuídos pelos dendritos",
      "Fusão de dois axônios em um único terminal funcional",
      "Bloqueio de canais iônicos pelo aumento de temperatura corporal"
    ],
    correctIndex: 0,
    explanation: "Somação temporal ocorre quando um único neurônio pré-sináptico dispara estímulos sucessivos em ritmo tão rápido que os potenciais pós-sinápticos se sobrepõem no tempo, podendo atingir o limiar de disparo. Somação espacial envolve múltiplos terminais diferentes disparando juntos.",
    officialReference: "Guyton & Hall, Cap. 46; Silverthorn, Cap. 8",
    keyTakeaway: "Somação temporal = mesmo terminal disparando em rápida sucessão."
  },
  {
    id: "neuro-23",
    subjectId: "neurofisiologia",
    subtopic: "Reflexo Miotático",
    difficulty: "Médio",
    question: "O reflexo patelar clássico é um exemplo de reflexo:",
    options: [
      "Monossináptico de estiramento mediado pelo fuso muscular",
      "Polissináptico flexor de retirada com inibição ipsilateral",
      "Autonômico simpático mediado pelo órgão tendinoso de Golgi",
      "Cortical voluntário dependente de aprendizado prévio"
    ],
    correctIndex: 0,
    explanation: "A percussão no tendão patelar estira o músculo quadríceps, ativando as fibras sensitivas Ia do fuso muscular. Estas entram na medula pela raiz dorsal e fazem sinapse direta (monossináptica) com o motoneurônio alfa extensor no corno ventral.",
    officialReference: "Guyton & Hall, Cap. 55; Silverthorn, Cap. 13",
    keyTakeaway: "Reflexo patelar = monossináptico de estiramento do fuso muscular."
  },
  {
    id: "neuro-24",
    subjectId: "neurofisiologia",
    subtopic: "Órgão Tendinoso de Golgi",
    difficulty: "Médio",
    question: "Enquanto o fuso muscular monitora o comprimento muscular, o Órgão Tendinoso de Golgi (OTG) é sensível primariamente a:",
    options: [
      "Tensão e força de contração desenvolvidas no tendão",
      "Velocidade passiva de alongamento sem carga",
      "Concentração de ácido lático no meio extracelular",
      "Temperatura interna do ventre muscular"
    ],
    correctIndex: 0,
    explanation: "Dispostos em série com as fibras musculares na junção miotendínea, os OTGs são inervados por fibras Ib e disparam proporcionalmente à tensão muscular. O reflexo tendinoso inverso inibe o músculo contraído para protegê-lo contra ruptura por sobrecarga.",
    officialReference: "Guyton & Hall, Cap. 55; Silverthorn, Cap. 13",
    keyTakeaway: "Fuso = comprimento muscular; OTG = tensão / força muscular."
  },
  {
    id: "neuro-25",
    subjectId: "neurofisiologia",
    subtopic: "Medula Espinhal",
    difficulty: "Fácil",
    question: "Na medula espinhal, a raiz dorsal contém exclusivamente fibras ______________, enquanto a raiz ventral contém fibras ______________:",
    options: [
      "Sensitivas (aferentes); motoras (eferentes)",
      "Motoras; sensitivas",
      "Parassimpáticas; simpáticas",
      "Somáticas voluntárias; sensoriais visuais"
    ],
    correctIndex: 0,
    explanation: "Pela Lei de Bell-Magendie, as raízes dorsais da medula espinhal transmitem informações sensoriais aferentes cujos corpos celulares ficam no gânglio da raiz dorsal; as raízes ventrais conduzem impulsos motores eferentes para músculos e glândulas.",
    officialReference: "Guyton & Hall, Cap. 46; Silverthorn, Cap. 9",
    keyTakeaway: "Dorsal = sensitivo (entrada); Ventral = motor (saída)."
  },
  {
    id: "neuro-26",
    subjectId: "neurofisiologia",
    subtopic: "Hipotálamo",
    difficulty: "Fácil",
    question: "Qual região diencefálica é o principal centro de integração da homeostase corporal, regulando temperatura, sede, fome e o sistema endócrino via hipófise?",
    options: [
      "Hipotálamo",
      "Tálamo",
      "Epífise",
      "Corpo estriado"
    ],
    correctIndex: 0,
    explanation: "O hipotálamo comanda o sistema neuroendócrino por meio da liberação de fatores tróficos hipofisários, além de abrigar centros osmorreceptores para a sede, centro de saciedade e fome, e o termostato corporal na área pré-óptica.",
    officialReference: "Guyton & Hall, Cap. 59; Silverthorn, Cap. 9",
    keyTakeaway: "Hipotálamo = maestro da homeostase, temperatura, sede, fome e hormônios."
  },
  {
    id: "neuro-27",
    subjectId: "neurofisiologia",
    subtopic: "Tálamo",
    difficulty: "Médio",
    question: "Com exceção de qual sentido, todas as vias sensoriais conscientes fazem sinapse obrigatória nos núcleos de relé do tálamo antes de alcançar o córtex cerebral?",
    options: [
      "Olfato",
      "Visão",
      "Audição",
      "Tato epicrítico"
    ],
    correctIndex: 0,
    explanation: "O olfato é filogeneticamente o sistema sensorial mais antigo e projeta seus axônios diretamente do bulbo olfatório para o córtex olfatório piriforme e amígdala no sistema límbico, sem sinapse obrigatória inicial no tálamo.",
    officialReference: "Guyton & Hall, Cap. 48 e 54; Silverthorn, Cap. 10",
    keyTakeaway: "O olfato atinge o córtex sem passar obrigatoriamente pelo tálamo."
  },
  {
    id: "neuro-28",
    subjectId: "neurofisiologia",
    subtopic: "Sistema Límbico",
    difficulty: "Fácil",
    question: "Estrutura do sistema límbico com papel central na formação, consolidação e evocação de memórias declarativas (episódicas e semânticas):",
    options: [
      "Hipocampo",
      "Bulbo olfatório",
      "Ponte de Varólio",
      "Plexo lombar"
    ],
    correctIndex: 0,
    explanation: "O hipocampo é indispensável para a consolidação da memória de curto prazo em memória de longo prazo no córtex cerebral. Lesões bilaterais do hipocampo causam amnésia anterógrada severa (incapacidade de criar novas memórias de fatos).",
    officialReference: "Guyton & Hall, Cap. 58; Silverthorn, Cap. 9",
    keyTakeaway: "Hipocampo = consolidação de memórias declarativas."
  },
  {
    id: "neuro-29",
    subjectId: "neurofisiologia",
    subtopic: "Amígdala",
    difficulty: "Fácil",
    question: "A amígdala cerebral, componente do sistema límbico, destaca-se funcionalmente pelo processamento de:",
    options: [
      "Respostas emocionais, especialmente medo, agressão e detecção de perigo",
      "Controle glicêmico pancreático através da liberação de glucagon",
      "Coordenação de movimentos sacádicos oculares rápidos",
      "Filtração de escórias metabólicas no líquor"
    ],
    correctIndex: 0,
    explanation: "A amígdala basolateral e central é o núcleo do circuito do medo condicionado. Ela avalia ameaças e ativa respostas de luta ou fuga conectando-se ao hipotálamo e substância cinzenta periaquedutal.",
    officialReference: "Guyton & Hall, Cap. 59; Silverthorn, Cap. 9",
    keyTakeaway: "Amígdala = processamento de emoções, medo e alerta a perigos."
  },
  {
    id: "neuro-30",
    subjectId: "neurofisiologia",
    subtopic: "Córtex Motor",
    difficulty: "Médio",
    question: "O córtex motor primário (giro pré-central, área 4 de Brodmann) dá origem à via eferente voluntária principal denominada:",
    options: [
      "Trato Córtico-Espinhal (ou Piramidal)",
      "Trato Espinotalâmico lateral",
      "Trato Vestíbulo-espinhal medial",
      "Cordão posterior dos fascículos grácil e cuneiforme"
    ],
    correctIndex: 0,
    explanation: "O trato córtico-espinhal descende do córtex motor, sofre decussação das pirâmides no bulbo (cerca de 85-90% das fibras) e inerva os motoneurônios alfa da medula espinhal contralateral, comandando a motricidade voluntária fina distal.",
    officialReference: "Guyton & Hall, Cap. 56; Silverthorn, Cap. 10",
    keyTakeaway: "Giro pré-central = trato córtico-espinhal piramidal do movimento voluntário."
  },
  {
    id: "neuro-31",
    subjectId: "neurofisiologia",
    subtopic: "Córtex Somatossensorial",
    difficulty: "Fácil",
    question: "O giro pós-central do lobo parietal corresponde funcionalmente a:",
    options: [
      "Córtex Somatossensorial Primário (S1)",
      "Córtex Visual Primário (V1)",
      "Área de Wernicke para compreensão da linguagem",
      "Córtex Auditivo Primário (A1)"
    ],
    correctIndex: 0,
    explanation: "O giro pós-central abriga o córtex somatossensorial primário (áreas 3, 1 e 2 de Brodmann), contendo o homúnculo sensorial de Penfield com representações desproporcionais para lábios, mãos e dedos devido à alta densidade de receptores táteis.",
    officialReference: "Guyton & Hall, Cap. 48; Silverthorn, Cap. 10",
    keyTakeaway: "Giro pós-central = córtex somatossensorial primário (S1)."
  },
  {
    id: "neuro-32",
    subjectId: "neurofisiologia",
    subtopic: "Linguagem",
    difficulty: "Médio",
    question: "A área de Broca e a área de Wernicke estão localizadas, na maioria das pessoas destras, no hemisfério esquerdo e são responsáveis por:",
    options: [
      "Expressão motora da fala (Broca) e compreensão da linguagem (Wernicke)",
      "Visão tridimensional (Broca) e audição estéreo (Wernicke)",
      "Movimentos mastigatórios (Broca) e deglutição (Wernicke)",
      "Memória olfatória (Broca) e equilíbrio estático (Wernicke)"
    ],
    correctIndex: 0,
    explanation: "A área de Broca (giro frontal inferior) programa os padrões motores para vocalização. A área de Wernicke (giro temporal superior posterior) é crucial para a compreensão e decodificação do significado das palavras.",
    officialReference: "Guyton & Hall, Cap. 58; Silverthorn, Cap. 9",
    keyTakeaway: "Broca = produção e articulação da fala; Wernicke = compreensão da linguagem."
  },
  {
    id: "neuro-33",
    subjectId: "neurofisiologia",
    subtopic: "Receptores Colinérgicos",
    difficulty: "Médio",
    question: "Os receptores de acetilcolina são divididos em nicotínicos e muscarínicos. A diferença mecanística fundamental entre eles é que:",
    options: [
      "Nicotínicos são canais iônicos dependentes de ligante (ionotrópicos), enquanto muscarínicos são acoplados à proteína G (metabotrópicos)",
      "Nicotínicos respondem apenas a peptídeos, e muscarínicos respondem a gases",
      "Nicotínicos encontram-se apenas no miocárdio, e muscarínicos apenas nos ossos",
      "Nicotínicos são sempre inibitórios hiperpolarizantes, e muscarínicos são imutáveis"
    ],
    correctIndex: 0,
    explanation: "Receptores nicotínicos são pentâmeros que funcionam diretamente como canais iônicos permeáveis a Na+ e K+. Receptores muscarínicos (M1 a M5) agem via proteínas G (Gq ou Gi), ativando fosfolipase C ou inibindo adenilil ciclase.",
    officialReference: "Silverthorn, Cap. 8 e 11; Guyton & Hall, Cap. 61",
    keyTakeaway: "Nicotínico = canal ionotrópico direto; Muscarínico = metabotrópico (proteína G)."
  },
  {
    id: "neuro-34",
    subjectId: "neurofisiologia",
    subtopic: "Bomba de Na+/K+",
    difficulty: "Fácil",
    question: "Qual é a estequiometria exata de íons transportados pela bomba de Na+/K+ ATPase para cada molécula de ATP hidrolisada?",
    options: [
      "3 íons Na+ bombeados para fora e 2 íons K+ bombeados para dentro",
      "2 íons Na+ para fora e 3 íons K+ para dentro",
      "1 íon Na+ para fora e 1 íon K+ para dentro",
      "3 íons K+ para fora e 2 íons Na+ para dentro"
    ],
    correctIndex: 0,
    explanation: "A bomba é eletrogênica primária: expele 3 Na+ para o meio extracelular e internaliza 2 K+ no intracelular contra seus gradientes de concentração, mantendo o interior celular com déficit de cargas positivas.",
    officialReference: "Guyton & Hall, Cap. 4; Silverthorn, Cap. 5",
    keyTakeaway: "Bomba Na+/K+ = 3 Na+ saem, 2 K+ entram por 1 ATP."
  },
  {
    id: "neuro-35",
    subjectId: "neurofisiologia",
    subtopic: "Potencial de Ação",
    difficulty: "Fácil",
    question: "O princípio do 'Tudo ou Nada' do potencial de ação estabelece que:",
    options: [
      "Uma vez atingido o limiar de excitação, o potencial é disparado com amplitude máxima constante, independentemente da intensidade extra do estímulo",
      "Estímulos mais intensos produzem potenciais de ação maiores em voltagem",
      "O neurônio despolariza em metade do axônio e para se faltar oxigênio",
      "Todas as sinapses do cérebro disparam ao mesmo tempo durante o pensamento"
    ],
    correctIndex: 0,
    explanation: "O potencial de ação não é graduado em amplitude: ou o estímulo atinge o limiar e deflagra a despolarização autorregenerativa completa com pico padronizado, ou não há potencial de ação. A intensidade do estímulo é codificada na frequência de disparos.",
    officialReference: "Guyton & Hall, Cap. 5; Silverthorn, Cap. 8",
    keyTakeaway: "Tudo ou Nada = amplitude fixa; intensidade é codificada pela frequência de disparos."
  },
  {
    id: "neuro-36",
    subjectId: "neurofisiologia",
    subtopic: "Células Gliais",
    difficulty: "Fácil",
    question: "Quais células gliais atuam como os macrófagos residentes do sistema nervoso central, realizando fagocitose de restos celulares e resposta imune local?",
    options: [
      "Microglia",
      "Astrócitos fibrosos",
      "Células ependimárias",
      "Oligodendrócitos"
    ],
    correctIndex: 0,
    explanation: "A micróglia tem origem embriológica mesodérmica (linhagem monocítica/mielóide) e atua na vigilância imunológica, poda sináptica durante o desenvolvimento e fagocitose de detritos após lesões no SNC.",
    officialReference: "Junqueira & Carneiro, Cap. 9; Silverthorn, Cap. 8",
    keyTakeaway: "Micróglia = células imunológicas fagocíticas do SNC."
  },
  {
    id: "neuro-37",
    subjectId: "neurofisiologia",
    subtopic: "Astrócitos",
    difficulty: "Médio",
    question: "Além de sustentarem a barreira hematoencefálica, os astrócitos desempenham papel crítico na homeostase sináptica ao:",
    options: [
      "Tamponar o excesso de K+ extracelular e recaptar glutamato da fenda sináptica",
      "Conduzir potenciais de ação de alta velocidade através de axônios motores",
      "Secretar dopamina diretamente nas junções neuromusculares",
      "Produzir os glóbulos vermelhos presentes nos capilares cerebrais"
    ],
    correctIndex: 0,
    explanation: "Os astrócitos possuem transportadores de glutamato (GLT-1) que convertem glutamato em glutamina, evitando a excitotoxicidade neuronal, e expressam canais Kir4.1 para tamponamento espacial de K+ expelido durante intensa atividade neural.",
    officialReference: "Silverthorn, Cap. 8; Berne & Levy, Cap. 4",
    keyTakeaway: "Astrócitos tamponam K+ extracelular e retiram glutamato da fenda."
  },
  {
    id: "neuro-38",
    subjectId: "neurofisiologia",
    subtopic: "Sinapse Elétrica",
    difficulty: "Médio",
    question: "Em contraste com as sinapses químicas, as sinapses elétricas caracterizam-se por:",
    options: [
      "Transmissão bidirecional ultrarrápida através de junções comunicantes (gap junctions formadas por conexinas)",
      "Retardo sináptico de vários milissegundos dependente de difusão de vesículas",
      "Necessidade obrigatória de receptores acoplados à proteína G",
      "Presença exclusiva na junção entre neurônios e músculos estriados esqueléticos"
    ],
    correctIndex: 0,
    explanation: "Sinapses elétricas conectam o citoplasma de células vizinhas via conexons. Os íons fluem diretamente sem necessidade de neurotransmissor nem atraso sináptico, permitindo sincronização elétrica de populações celulares (como no miocárdio e circuitos defensivos).",
    officialReference: "Guyton & Hall, Cap. 46; Kandel, Cap. 10",
    keyTakeaway: "Sinapse elétrica = junções comunicantes, fluxo iônico direto e sem retardo."
  },
  {
    id: "neuro-39",
    subjectId: "neurofisiologia",
    subtopic: "Dor e Nocicepção",
    difficulty: "Médio",
    question: "A dor rápida, aguda e localizada versus a dor lenta, em queimação e difusa são conduzidas pelas fibras nervosas:",
    options: [
      "Fibras A-delta mielinizadas (dor rápida) e Fibras C amielínicas (dor lenta)",
      "Fibras C (dor rápida) e Fibras A-alfa (dor lenta)",
      "Fibras B pré-ganglionares em ambos os tipos",
      "Fibras proprioceptivas Ia exclusivamente"
    ],
    correctIndex: 0,
    explanation: "As fibras A-delta, dotadas de fina capa de mielina, conduzem a 6-30 m/s sinais de dor mecânica ou térmica aguda inicial. As fibras C, desprovidas de mielina (0,5-2 m/s), conduzem a dor crônica tardia em queimação sustentada.",
    officialReference: "Guyton & Hall, Cap. 49; Silverthorn, Cap. 10",
    keyTakeaway: "Dor rápida = fibras A-delta; Dor lenta em queimação = fibras C amielínicas."
  },
  {
    id: "neuro-40",
    subjectId: "neurofisiologia",
    subtopic: "Modulação da Dor",
    difficulty: "Difícil",
    question: "A teoria do portão da dor (Gate Control Theory) de Melzack e Wall propõe que o estímulo tátil não doloroso alivia a dor porque:",
    options: [
      "Fibras táteis A-beta ativam interneurônios inibitórios na substância gelatinosa da medula, bloqueando a transmissão das fibras nociceptivas",
      "Estimula a vasoconstrição total dos vasos sanguíneos que irrigam o cérebro",
      "Destrói os receptores de substância P na periferia",
      "Impede a síntese de mielina nos nervos cranianos"
    ],
    correctIndex: 0,
    explanation: "Ao esfregar ou massagear uma região contundida, as fibras grossas mecanorreceptoras A-beta ativam interneurônios inibitórios na medula espinhal que liberam encefalinas/GABA, inibindo pré e pós-sinapticamente as vias de dor secundárias ascendentes.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 49",
    keyTakeaway: "Portão da dor: fibras A-beta (tato) ativam interneurônios que fecham a passagem da dor."
  },
  {
    id: "neuro-41",
    subjectId: "neurofisiologia",
    subtopic: "Epinefrina e Noradrenalina",
    difficulty: "Fácil",
    question: "A medula da glândula suprarrenal é considerada um gânglio simpático modificado que secreta na circulação sistêmica predominantemente:",
    options: [
      "Adrenalina (Epinefrina - cerca de 80%) e Noradrenalina (20%)",
      "Acetilcolina e GABA",
      "Insulina e glucagon",
      "Dopamina pura e serotonina"
    ],
    correctIndex: 0,
    explanation: "As células cromafins da medula adrenal são inervadas diretamente por fibras pré-ganglionares simpáticas colinérgicas. Quando estimuladas pela ACh, expelem adrenalina (~80%) e noradrenalina (~20%) na corrente sanguínea para a resposta de alarme.",
    officialReference: "Guyton & Hall, Cap. 61; Silverthorn, Cap. 11",
    keyTakeaway: "Medula adrenal = gânglio simpático modificado secretor de adrenalina."
  },
  {
    id: "neuro-42",
    subjectId: "neurofisiologia",
    subtopic: "Receptores Adrenérgicos",
    difficulty: "Médio",
    question: "A ativação dos receptores adrenérgicos Beta-1 no coração resulta em:",
    options: [
      "Aumento da frequência cardíaca (cronotropismo positivo) e da força contrátil (inotropismo positivo)",
      "Redução acentuada da velocidade de condução atrioventricular",
      "Constrição imediata das artérias coronárias e bradicardia",
      "Bloqueio da liberação de renina pelas células renais"
    ],
    correctIndex: 0,
    explanation: "Receptores Beta-1 cardíacos são acoplados à proteína Gs, ativando adenilil ciclase e elevando o AMPc intracelular. A fosforilação de canais de Ca2+ do tipo L e do fosfolambano aumenta a entrada e captação de cálcio, elevando batimentos e contratilidade.",
    officialReference: "Guyton & Hall, Cap. 9 e 61; Silverthorn, Cap. 14",
    keyTakeaway: "Beta-1 no coração = aumenta força contrátil e frequência cardíaca."
  },
  {
    id: "neuro-43",
    subjectId: "neurofisiologia",
    subtopic: "Receptores Adrenérgicos",
    difficulty: "Médio",
    question: "Qual receptor adrenérgico é o alvo terapêutico preferencial de broncodilatadores (como salbutamol) para relaxar o músculo liso bronquial em crises de asma?",
    options: [
      "Receptores Beta-2",
      "Receptores Alfa-1",
      "Receptores Alfa-2",
      "Receptores Muscarínicos M2"
    ],
    correctIndex: 0,
    explanation: "A musculatura lisa dos brônquios possui densa população de receptores Beta-2 acoplados a Gs. O aumento de AMPc inativa a quinase de cadeia leve da miosina (MLCK), promovendo o relaxamento do músculo liso e consequente broncodilatação.",
    officialReference: "Silverthorn, Cap. 11; Guyton & Hall, Cap. 61",
    keyTakeaway: "Beta-2 nos brônquios = relaxamento do músculo liso e broncodilatação."
  },
  {
    id: "neuro-44",
    subjectId: "neurofisiologia",
    subtopic: "Plasticidade Sináptica",
    difficulty: "Difícil",
    question: "O fenômeno de Potenciação de Longa Duração (LTP - Long-Term Potentiation), base celular do aprendizado e da memória, requer a ativação de receptores NMDA com a expulsão de qual íon bloqueador?",
    options: [
      "Magnésio (Mg2+)",
      "Chumbo (Pb2+)",
      "Potássio (K+)",
      "Ferro (Fe2+)"
    ],
    correctIndex: 0,
    explanation: "Em potenciais normais de repouso, o poro do receptor NMDA é bloqueado por íons Mg2+. Quando a membrana é previamente despolarizada por receptores AMPA, o Mg2+ é repelido eletrostaticamente, permitindo a entrada maciça de Ca2+ que aciona as quinases da LTP.",
    officialReference: "Kandel, Cap. 67; Guyton & Hall, Cap. 58",
    keyTakeaway: "Receptor NMDA = bloqueado por Mg2+ em repouso; despolarização expulsa Mg2+."
  },
  {
    id: "neuro-45",
    subjectId: "neurofisiologia",
    subtopic: "Equação de Nernst",
    difficulty: "Difícil",
    question: "A equação de Nernst permite calcular:",
    options: [
      "O potencial de equilíbrio eletroquímico para um íon específico individual através da membrana",
      "A velocidade de esvaziamento do estômago após a refeição",
      "A concentração total de proteínas na linfa intestinal",
      "O volume minuto de filtração dos glomérulos renais"
    ],
    correctIndex: 0,
    explanation: "A equação de Nernst calcula a diferença de potencial elétrico através da membrana que equilibra exatamente a tendência de difusão química de um determinado íon móvel (ex: ~ -90 mV para o K+ e +60 mV para o Na+).",
    officialReference: "Guyton & Hall, Cap. 5; Silverthorn, Cap. 5",
    keyTakeaway: "Nernst = potencial de equilíbrio para 1 íon específico."
  },
  {
    id: "neuro-46",
    subjectId: "neurofisiologia",
    subtopic: "Cone de Implantação",
    difficulty: "Fácil",
    question: "Por que o cone de implantação do axônio (zona de gatilho) é o local onde normalmente tem origem o potencial de ação?",
    options: [
      "Por apresentar a maior densidade de canais de Na+ dependentes de voltagem e o menor limiar de disparo",
      "Por ser o local onde ocorrem todas as reações mitocondriais de digestão celular",
      "Por não possuir membrana plasmática nem fosfolipídios",
      "Por estar em contato direto com a luz externa e oxigênio"
    ],
    correctIndex: 0,
    explanation: "O cone de implantação (axon hillock) concentra uma densidade extraordinária de canais de Na+ voltagem-dependentes (Nav1.6). Por isso, seu limiar elétrico para despolarização é mais baixo do que no soma ou dendritos, atuando como o integrador final que deflagra o potencial.",
    officialReference: "Silverthorn, Cap. 8; Guyton & Hall, Cap. 46",
    keyTakeaway: "Cone de implantação = altíssima densidade de canais de Na+ = menor limiar."
  },
  {
    id: "neuro-47",
    subjectId: "neurofisiologia",
    subtopic: "Transmissão Colinérgica",
    difficulty: "Médio",
    question: "A toxina botulínica (Botox) causa paralisia flácida ao:",
    options: [
      "Clivar as proteínas do complexo SNARE, bloqueando a exocitose de acetilcolina nas junções neuromusculares",
      "Bloquear irreversivelmente os receptores nicotínicos pós-sinápticos",
      "Inibir a enzima acetilcolinesterase na fenda sináptica",
      "Hiperativar os canais de cálcio voltagem-dependentes"
    ],
    correctIndex: 0,
    explanation: "A toxina botulínica entra no terminal axonal por endocitose e sua cadeia leve cliva enzimas SNARE (como SNAP-25 e sinaptobrevina). Sem o complexo SNARE intacto, as vesículas de ACh não conseguem fundir-se à membrana para liberar acetilcolina.",
    officialReference: "Guyton & Hall, Cap. 7; Silverthorn, Cap. 11",
    keyTakeaway: "Toxina botulínica destrói proteínas SNARE = impede liberação de acetilcolina."
  },
  {
    id: "neuro-48",
    subjectId: "neurofisiologia",
    subtopic: "Miastenia Gravis",
    difficulty: "Médio",
    question: "A Miastenia Gravis é uma doença autoimune caracterizada por fadiga e fraqueza muscular flutuante decorrente de:",
    options: [
      "Produção de autoanticorpos contra os receptores nicotínicos de acetilcolina na placa motora",
      "Destruição autoimune dos corpos celulares dos neurônios do córtex motor",
      "Falta crônica de síntese de acetilcolina no núcleo basal de Meynert",
      "Inflamação das meninges e excesso de líquido cefalorraquidiano"
    ],
    correctIndex: 0,
    explanation: "Na Miastenia Gravis, anticorpos IgG ligam-se aos receptores nicotínicos musculares pós-sinápticos, acelerando sua degradação e destruindo as pregas juncionais da placa motora. O tratamento inclui inibidores da acetilcolinesterase (como piridostigmina).",
    officialReference: "Guyton & Hall, Cap. 7; Silverthorn, Cap. 11",
    keyTakeaway: "Miastenia Gravis = anticorpos destroem receptores nicotínicos da placa motora."
  },
  {
    id: "neuro-49",
    subjectId: "neurofisiologia",
    subtopic: "Inibição Recíproca",
    difficulty: "Médio",
    question: "No arco reflexo miotático, a inibição recíproca garante que:",
    options: [
      "Enquanto o músculo agonista é excitado para contrair, os motoneurônios do músculo antagonista são simultaneamente inibidos",
      "Os dois membros inferiores realizem contração máxima simultânea",
      "A sensibilidade tátil seja suspensa durante o movimento",
      "O coração diminua seus batimentos a cada passo"
    ],
    correctIndex: 0,
    explanation: "Fibras colaterais da aferência sensorial Ia ativam interneurônios inibitórios glicinérgicos/gabaérgicos que hiperpolarizam os motoneurônios do músculo antagonista. Isso impede que o antagonista resista ao movimento reflexo pretendido.",
    officialReference: "Guyton & Hall, Cap. 55; Silverthorn, Cap. 13",
    keyTakeaway: "Inibição recíproca = contrai o agonista e relaxa o antagonista."
  },
  {
    id: "neuro-50",
    subjectId: "neurofisiologia",
    subtopic: "Fluxo Axoplasmático",
    difficulty: "Difícil",
    question: "O transporte axoplasmático anterógrado rápido (do corpo celular para o terminal sináptico) é motorizado principalmente por qual proteína motora?",
    options: [
      "Cinesina",
      "Dineína",
      "Miosina II",
      "Actina F"
    ],
    correctIndex: 0,
    explanation: "O transporte anterógrado rápido de vesículas e organelas ao longo dos microtúbulos no axônio é mediado pela cinesina (movendo-se em direção à extremidade positiva). O transporte retrógrado (do terminal para o soma) é mediado pela dineína.",
    officialReference: "Junqueira & Carneiro, Cap. 9; Silverthorn, Cap. 8",
    keyTakeaway: "Anterógrado = Cinesina; Retrógrado = Dineína."
  },
  {
    id: "neuro-51",
    subjectId: "neurofisiologia",
    subtopic: "Reflexo Pupilar",
    difficulty: "Médio",
    question: "A constrição pupilar (miose) em resposta à incidência direta de luz nos olhos é mediada por qual divisão do sistema nervoso e qual nervo craniano?",
    options: [
      "Parassimpático, através do Nervo Oculomotor (NC III)",
      "Simpático, através do Nervo Trigêmeo (NC V)",
      "Somático motor, através do Nervo Troclear (NC IV)",
      "Sensorial puro, através do Nervo Vestibulococlear (NC VIII)"
    ],
    correctIndex: 0,
    explanation: "A via aferente viaja pelo nervo óptico (NC II) até os núcleos pré-tectais e núcleo de Edinger-Westphal. A eferência parassimpática trafega pelo nervo oculomotor (NC III) até o gânglio ciliar e músculo esfíncter da pupila, contraindo-a.",
    officialReference: "Guyton & Hall, Cap. 52; Silverthorn, Cap. 10",
    keyTakeaway: "Miose pupilar = eferência parassimpática do nervo oculomotor (NC III)."
  },
  {
    id: "neuro-52",
    subjectId: "neurofisiologia",
    subtopic: "Sistema Nervoso Entérico",
    difficulty: "Médio",
    question: "O 'segundo cérebro' que regula a motilidade e a secreção gastrintestinal de forma intrínseca e autônoma é composto por quais dois plexos nervosos?",
    options: [
      "Plexo mioentérico (de Auerbach) e Plexo submucoso (de Meissner)",
      "Plexo celíaco e Plexo braquial",
      "Plexo solar e Plexo corióideo",
      "Plexo carotídeo e Plexo sacral"
    ],
    correctIndex: 0,
    explanation: "O Sistema Nervoso Entérico (SNE) possui mais de 100 milhões de neurônios divididos no plexo mioentérico de Auerbach (localizado entre as camadas musculares para controlar a motilidade e peristaltismo) e o plexo de Meissner (submucosa, controlando secreção e fluxo sanguíneo local).",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Auerbach = motilidade e contração muscular; Meissner = secreção e fluxo local."
  },
  {
    id: "neuro-53",
    subjectId: "neurofisiologia",
    subtopic: "Plasticidade Sináptica",
    difficulty: "Difícil",
    question: "A Potenciação de Longa Duração (LTP) no hipocampo, essencial para a consolidação da memória, depende criticamente de qual mecanismo molecular inicial?",
    options: [
      "Despolarização pós-sináptica que remove o bloqueio de Mg2+ dos receptores NMDA, permitindo o influxo maciço de Ca2+",
      "Fechamento irreversível dos receptores AMPA com retenção intracelular de sódio",
      "Bloqueio da liberação pré-sináptica de glutamato por retroalimentação de GABA",
      "Inibição completa da enzima CaMKII com degradação de receptores pós-sinápticos"
    ],
    correctIndex: 0,
    explanation: "Em repouso, os receptores NMDA estão ocluídos por íons Mg2+. A ativação repetitiva dos receptores AMPA despolariza a membrana pós-sináptica, repelindo eletrostaticamente o Mg2+. Isso permite a entrada de Ca2+ pelo canal NMDA, ativando a CaMKII e inserindo novos receptores AMPA na densidade pós-sináptica (LTP).",
    officialReference: "Kandel - Principles of Neural Science 6th Ed., Cap. 55; Guyton & Hall, Cap. 58",
    keyTakeaway: "LTP requer despolarização para expulsar o Mg2+ do receptor NMDA e influxo de Ca2+."
  },
  {
    id: "neuro-54",
    subjectId: "neurofisiologia",
    subtopic: "Junção Neuromuscular",
    difficulty: "Médio",
    question: "Na miastenia gravis, a fadiga muscular flutuante decorre da produção de autoanticorpos contra:",
    options: [
      "Receptores nicotínicos de acetilcolina (AChR) na placa motora terminal pós-sináptica",
      "Canais de cálcio voltagem-dependentes pré-sinápticos (VGCC tipo P/Q)",
      "Enzima acetilcolinesterase na fenda sináptica",
      "Canais de sódio voltagem-dependentes do sarcolema"
    ],
    correctIndex: 0,
    explanation: "A miastenia gravis é uma doença autoimune em que anticorpos IgG atacam os receptores nicotínicos pós-sinápticos de acetilcolina na membrana muscular, promovendo sua endocitose e destruição mediada pelo complemento, reduzindo a amplitude do potencial de placa terminal.",
    officialReference: "Silverthorn, Cap. 11; Guyton & Hall, Cap. 7",
    keyTakeaway: "Miastenia gravis = anticorpos contra receptor nicotínico de ACh pós-sináptico."
  },
  {
    id: "neuro-55",
    subjectId: "neurofisiologia",
    subtopic: "Neurotoxinas e Exocitose",
    difficulty: "Difícil",
    question: "A toxina botulínica impede a contração muscular e causa paralisia flácida porque cliva enzimaticamente:",
    options: [
      "Proteínas do complexo SNARE (como SNAP-25 e sinaptobrevina), impedindo a fusão vesicular e exocitose de acetilcolina",
      "Receptores muscarínicos M1 nos neurônios motores superiores",
      "Canais de potássio retificadores anômalos no corpo celular",
      "Moléculas de mielina ao longo do axônio motor"
    ],
    correctIndex: 0,
    explanation: "As neurotoxinas botulínicas são endopeptidases de zinco que clivam seletivamente proteínas do complexo SNARE (sinaptobrevina/VAMP, SNAP-25 ou sintaxina) no terminal axônico colinérgico, impossibilitando a ancoragem das vesículas sinápticas e bloqueando a liberação de acetilcolina.",
    officialReference: "Kandel, Cap. 12; Berne & Levy, Cap. 6",
    keyTakeaway: "Toxina botulínica cliva proteínas SNARE e bloqueia a liberação de ACh."
  },
  {
    id: "neuro-56",
    subjectId: "neurofisiologia",
    subtopic: "Barreira Hematoencefálica",
    difficulty: "Médio",
    question: "Qual estrutura anatômica e celular é primariamente responsável pela alta seletividade da Barreira Hematoencefálica (BHE)?",
    options: [
      "Junções oclusivas (tight junctions) entre células endoteliais dos capilares cerebrais apoiadas pelos pés vasculares dos astrócitos",
      "Membrana basal espessada dos oligodendrócitos",
      "Cílios móveis das células ependimárias do terceiro ventrículo",
      "Células de Schwann dispostas em multicamadas perivasculares"
    ],
    correctIndex: 0,
    explanation: "A BHE é formada por endotélio capilar cerebral contínuo com zônulas de oclusão (tight junctions) herméticas contendo claudinas e ocludinas, sem fenestrações. Os podócitos ou prolongamentos pediosos dos astrócitos envolvem os capilares e sinalizam para a manutenção dessa barreira estrita.",
    officialReference: "Guyton & Hall, Cap. 62; Silverthorn, Cap. 9",
    keyTakeaway: "BHE = tight junctions endoteliais capilares + pés vasculares astrocitários."
  },
  {
    id: "neuro-57",
    subjectId: "neurofisiologia",
    subtopic: "Dinâmica do Líquor",
    difficulty: "Médio",
    question: "O Líquido Cefalorraquidiano (LCR) é produzido ativamente e reabsorvido de volta à circulação venosa sistêmica em quais estruturas, respectivamente?",
    options: [
      "Plexos corióideos nos ventrículos cerebrais e Granulações Aracnóideas (de Pacchioni) no seio sagital superior",
      "Substância negra e Forame magno",
      "Células da glia na medula espinhal e Cisterna magna",
      "Corpo caloso e Glândula pineal"
    ],
    correctIndex: 0,
    explanation: "O LCR é secretado ativamente pelos plexos corióideos dos ventrículos laterais, 3º e 4º ventrículos a uma taxa de ~500 mL/dia. Ele circula pelo espaço subaracnóideo e é reabsorvido unidirecionalmente para o sangue venoso através das vilosidades e granulações aracnóideas de Pacchioni.",
    officialReference: "Guyton & Hall, Cap. 62; Berne & Levy, Cap. 5",
    keyTakeaway: "Produção de LCR = plexos corióideos; Reabsorção = granulações aracnóideas."
  },
  {
    id: "neuro-58",
    subjectId: "neurofisiologia",
    subtopic: "Condução Saltatória",
    difficulty: "Fácil",
    question: "Nos axônios mielinizados, a condução saltatória do potencial de ação proporciona alta velocidade de condução porque:",
    options: [
      "Os canais de Na+ voltagem-dependentes concentram-se densamente nos nós de Ranvier, permitindo que a corrente flua rapidamente sob a bainha de mielina isolante",
      "A mielina armazena neurotransmissores ao longo de todo o axônio",
      "A velocidade da luz é conduzida através das mitocôndrias axonais",
      "Não há necessidade de despolarização da membrana plasmática"
    ],
    correctIndex: 0,
    explanation: "A bainha de mielina atua como excelente isolante elétrico de alta resistência e baixa capacitância. A despolarização e regeneração do potencial de ação ocorrem exclusivamente nas lacunas amielínicas, denominadas nós de Ranvier, onde a densidade de canais de Na+ é extremamente elevada (~10.000 por micrômetro quadrado).",
    officialReference: "Silverthorn, Cap. 8; Guyton & Hall, Cap. 5",
    keyTakeaway: "Condução saltatória: corrente despolariza apenas os nós de Ranvier, economizando íons e ATP."
  },
  {
    id: "neuro-59",
    subjectId: "neurofisiologia",
    subtopic: "Reflexos Medulares",
    difficulty: "Médio",
    question: "O reflexo miotático clássico (como o patelar) é disparado por estiramento mecânico de qual receptor intrafusal e qual a sua resposta motora?",
    options: [
      "Fuso neuromuscular (fibras Ia aferentes), promovendo contração monossináptica do músculo estirado e relaxamento recíproco do antagonista",
      "Órgão tendinoso de Golgi, gerando inibição do músculo agonista",
      "Corpúsculo de Pacini, promovendo tremor postural",
      "Receptores articulares de Ruffini, causando atrofia muscular reflexa"
    ],
    correctIndex: 0,
    explanation: "O reflexo patelar ou miotático é um reflexo monossináptico de estiramento: o estímulo de alongamento ativa as terminações anuloespirais (fibras Ia) dos fusos musculares, que sinapsam diretamente na medula espinhal com motoneurônios alfa, contraindo o próprio músculo estirado para manter o comprimento muscular estável.",
    officialReference: "Guyton & Hall, Cap. 55; Kandel, Cap. 35",
    keyTakeaway: "Fuso neuromuscular detecta comprimento/estiramento e causa contração reflexa monossináptica."
  },
  {
    id: "neuro-60",
    subjectId: "neurofisiologia",
    subtopic: "Reflexo Miotático Inverso",
    difficulty: "Médio",
    question: "Qual o papel do Órgão Tendinoso de Golgi (OTG) e das fibras aferentes Ib na regulação do tônus e proteção muscular?",
    options: [
      "Detectar a tensão mecânica desenvolvida e inibir o motoneurônio alfa do músculo agonista (reflexo miotático inverso) via interneurônio inibitório",
      "Aumentar ao máximo a força muscular durante contrações voluntárias máximas",
      "Estimular a liberação de adrenalina diretamente nas fibras extrafusais",
      "Monitorar exclusivamente a temperatura articular"
    ],
    correctIndex: 0,
    explanation: "O OTG localiza-se na junção musculotendinosa em série com as fibras musculares. Quando a tensão muscular atinge níveis excessivos, as fibras aferentes Ib estimulam interneurônios inibitórios glicinérgicos na medula, relaxando o músculo contraído (inibição autógena/miotático inverso) para evitar ruptura tendínea.",
    officialReference: "Guyton & Hall, Cap. 55; Silverthorn, Cap. 13",
    keyTakeaway: "OTG monitora tensão muscular e inibe o agonista (proteção contra rotura)."
  },
  {
    id: "neuro-61",
    subjectId: "neurofisiologia",
    subtopic: "Neurotransmissão Inibitória",
    difficulty: "Difícil",
    question: "Os fármacos benzodiazepínicos (ex: diazepam, clonazepam) potencializam a inibição no sistema nervoso central por qual mecanismo molecular?",
    options: [
      "Ligam-se a um sítio alostérico no receptor GABA-A, aumentando a frequência de abertura do canal de Cl- na presença de GABA",
      "Agem como agonistas diretos dos canais de Na+ voltagem-dependentes",
      "Inibem a síntese pré-sináptica de glutamato e dopamina",
      "Bloqueiam a recaptação de noradrenalina no locus coeruleus"
    ],
    correctIndex: 0,
    explanation: "O receptor GABA-A é um canal iônico pentamérico permeável a cloreto. Os benzodiazepínicos ligam-se alostericamente entre as subunidades alfa e gama, aumentando a afinidade pelo GABA e a frequência de aberturas do poro de Cl-, hiperpolarizando o neurônio e tornando-o menos excitável.",
    officialReference: "Goodman & Gilman - As Bases Farmacológicas da Terapêutica; Kandel, Cap. 13",
    keyTakeaway: "Benzodiazepínicos aumentam a frequência de abertura do canal de Cl- do receptor GABA-A."
  },
  {
    id: "neuro-62",
    subjectId: "neurofisiologia",
    subtopic: "Vias Motoras Descendentes",
    difficulty: "Médio",
    question: "O Trato Corticoespinhal Lateral (via piramidal) é a principal via responsável por:",
    options: [
      "Movimentos voluntários finos e fracionados, especialmente da musculatura distal das mãos e dedos",
      "Controle postural inconsciente e reflexos vestibulo-oculares",
      "Transmissão de dor crônica visceral",
      "Regulação exclusiva da peristaltismo gastrintestinal"
    ],
    correctIndex: 0,
    explanation: "O trato corticoespinhal lateral origina-se no córtex motor primário e pré-motor, decussa 85-90% de suas fibras nas pirâmides bulbares e desce pelo funículo lateral da medula, inervando motoneurônios que controlam movimentos voluntários finos e de alta destreza dos membros distais.",
    officialReference: "Guyton & Hall, Cap. 56; Kandel, Cap. 37",
    keyTakeaway: "Trato corticoespinhal lateral = motricidade voluntária fina e destreza distal."
  },
  {
    id: "neuro-63",
    subjectId: "neurofisiologia",
    subtopic: "Vias Sensoriais Somáticas",
    difficulty: "Médio",
    question: "A sensibilidade proprioceptiva consciente, a discriminação tátil fina (entre dois pontos) e a vibração são conduzidas para o córtex por qual via medular?",
    options: [
      "Coluna Dorsal - Lemnisco Medial (fascículos grácil e cuneiforme)",
      "Trato Espinotalâmico Lateral",
      "Trato Espinotalâmico Anterior",
      "Trato Rubroespinal"
    ],
    correctIndex: 0,
    explanation: "O sistema da coluna dorsal-lemnisco medial conduz estímulos de mecanorreceptores táteis de alta resolução (Meissner, Merkel, Pacini) e proprioceptores através dos fascículos grácil (membros inferiores) e cuneiforme (membros superiores), decussando apenas no bulbo (lemnisco medial).",
    officialReference: "Guyton & Hall, Cap. 48; Silverthorn, Cap. 10",
    keyTakeaway: "Coluna dorsal-lemnisco medial = tato discriminativo, vibração e propriocepção consciente."
  },
  {
    id: "neuro-64",
    subjectId: "neurofisiologia",
    subtopic: "Termorregulação Hipotalâmica",
    difficulty: "Médio",
    question: "Qual núcleo hipotalâmico atua como 'termostato biológico' disparando respostas de perda de calor (vasodilatação cutânea e sudorese) quando a temperatura sobe?",
    options: [
      "Área Pré-óptica do Hipotálamo Anterior",
      "Hipotálamo Posterior",
      "Núcleo Arqueado",
      "Núcleo Ventromedial"
    ],
    correctIndex: 0,
    explanation: "A área pré-óptica anterior do hipotálamo contém neurônios sensíveis ao calor que monitoram a temperatura do sangue. Quando aquecidos, disparam mecanismos de dissipação de calor (sudorese e inibição do tônus vasoconstritor cutâneo simpático). Já o hipotálamo posterior ativa mecanismos de conservação/produção de calor (calafrios e vasoconstrição).",
    officialReference: "Guyton & Hall, Cap. 74; Silverthorn, Cap. 22",
    keyTakeaway: "Hipotálamo anterior/pré-óptico = dissipação de calor; Hipotálamo posterior = conservação/calafrios."
  },
  {
    id: "neuro-65",
    subjectId: "neurofisiologia",
    subtopic: "Ritmo Circadiano",
    difficulty: "Fácil",
    question: "O marcapasso circadiano central do organismo, sincronizado pelo ciclo de luz e escuridão através do trato retinohipotalâmico, reside no:",
    options: [
      "Núcleo Supraquiasmático do Hipotálamo",
      "Lóbulo parietal superior",
      "Bulbo olfatório",
      "Núcleo rubro mesencefálico"
    ],
    correctIndex: 0,
    explanation: "O Núcleo Supraquiasmático (NSQ) do hipotálamo é o relógio mestre circadiano. Células ganglionares da retina intrinsicamente fotossensíveis contendo melanopsina projetam diretamente ao NSQ, que sincroniza ritmos de temperatura, cortisol e secreção de melatonina pela glândula pineal.",
    officialReference: "Silverthorn, Cap. 9; Guyton & Hall, Cap. 60",
    keyTakeaway: "Núcleo supraquiasmático = marcapasso mestre do ritmo circadiano de 24 horas."
  },
  {
    id: "neuro-66",
    subjectId: "neurofisiologia",
    subtopic: "Fisiologia do Sono",
    difficulty: "Médio",
    question: "A fase do sono caracterizada por atonia muscular quase total, movimentos oculares rápidos, sonhos vívidos e eletroencefalograma dessincronizado de alta frequência é o:",
    options: [
      "Sono REM (Rapid Eye Movement) ou sono paradoxal",
      "Sono de Ondas Lentas (Estágio N3)",
      "Estágio N1 de transição",
      "Coma barbitúrico induzido"
    ],
    correctIndex: 0,
    explanation: "No sono REM, a atividade cortical assemelha-se ao estado de vigília ativa (EEG dessincronizado, daí o nome paradoxal), enquanto os motoneurônios espinhais são fortemente inibidos por vias glicinérgicas originadas na ponte, causando paralisia muscular flácida protetora.",
    officialReference: "Guyton & Hall, Cap. 60; Kandel, Cap. 51",
    keyTakeaway: "Sono REM = sonhos vívidos + EEG ativado + atonia muscular motora periférica."
  },
  {
    id: "neuro-67",
    subjectId: "neurofisiologia",
    subtopic: "Sistema Dopaminérgico",
    difficulty: "Médio",
    question: "A degeneração progressiva dos neurônios dopaminérgicos da substância negra parte compacta que projetam para o estriado (via nigroestriatal) é a base fisiopatológica de qual doença?",
    options: [
      "Doença de Parkinson",
      "Esclerose Lateral Amiotrófica (ELA)",
      "Doença de Alzheimer",
      "Coreia de Sydenham"
    ],
    correctIndex: 0,
    explanation: "Na Doença de Parkinson, a perda de >70% dos neurônios dopaminérgicos pigmentados da substância negra desequilibra os circuitos dos núcleos da base (vias direta e indireta), resultando em hiperatividade da via inibitória e manifestando-se por bradicinesia, rigidez plástica e tremor de repouso.",
    officialReference: "Guyton & Hall, Cap. 57; Kandel, Cap. 43",
    keyTakeaway: "Doença de Parkinson = depleção de dopamina na via nigroestriatal (substância negra)."
  },
  {
    id: "neuro-68",
    subjectId: "neurofisiologia",
    subtopic: "Somação Sináptica",
    difficulty: "Fácil",
    question: "A diferença funcional entre somação temporal e somação espacial no neurônio pós-sináptico reside em:",
    options: [
      "Somação temporal ocorre por disparos repetidos de um único terminal sináptico em rápida sucessão; somação espacial ocorre pelo disparo quase simultâneo de múltiplos terminais diferentes",
      "Somação temporal só ocorre na glia; somação espacial só nos músculos",
      "Somação temporal depende de canais mecânicos e espacial de canais térmicos",
      "Não há diferença funcional, ambos exigem destruição do cone axônico"
    ],
    correctIndex: 0,
    explanation: "Somação temporal é a adição de potenciais pós-sinápticos que se sobrepõem no tempo devido à frequência elevada de disparos de um único axônio pré-sináptico. Somação espacial é a convergência e integração simultânea de múltiplos botões sinápticos separados distribuídos pela árvore dendrítica.",
    officialReference: "Guyton & Hall, Cap. 46; Silverthorn, Cap. 8",
    keyTakeaway: "Temporal = 1 sinapse com alta frequência; Espacial = várias sinapses disparando juntas."
  },
  {
    id: "neuro-69",
    subjectId: "neurofisiologia",
    subtopic: "Sistema Límbico",
    difficulty: "Médio",
    question: "A estrutura subcortical fundamental para a avaliação do perigo, condicionamento do medo e respostas autonômicas de sobrevivência é a:",
    options: [
      "Amígdala (complexo amigdaloide)",
      "Giro denteado do cerebelo",
      "Substância gelatinosa de Rolando",
      "Cabeça do núcleo caudado"
    ],
    correctIndex: 0,
    explanation: "O complexo amigdaloide no lobo temporal anterior processa informações sensoriais com valência emocional rápida, conectando-se ao hipotálamo (para disparar resposta simpática de luta ou fuga) e substância cinzenta periaquedutal (congelamento motor ou fuga).",
    officialReference: "Guyton & Hall, Cap. 59; Kandel, Cap. 48",
    keyTakeaway: "Amígdala = centro integrador do medo, alarme e valência emocional rápida."
  },
  {
    id: "neuro-70",
    subjectId: "neurofisiologia",
    subtopic: "Córtex Cerebral",
    difficulty: "Fácil",
    question: "O 'Homúnculo Motor de Penfield' no giro pré-central reflete uma organização somatotópica onde:",
    options: [
      "A área de representação cortical é proporcional à precisão, complexidade e riqueza de inervação motora da região (como mãos, polegar, língua e lábios), e não ao seu tamanho físico",
      "Todas as partes do corpo recebem exatamente o mesmo número de milímetros de córtex",
      "Os pés ocupam 90% do córtex motor lateral",
      "Não existe representação para a musculatura orofacial"
    ],
    correctIndex: 0,
    explanation: "A representação cortical motora (giro pré-central, área 4 de Brodmann) é distorcida: partes corporais que executam movimentos finos e destros (mãos, polegar, língua, lábios e fonação) demandam centenas de milhares de neurônios motores e ocupam áreas proporcionalmente gigantescas em comparação ao tronco ou membros inferiores.",
    officialReference: "Guyton & Hall, Cap. 56; Silverthorn, Cap. 9",
    keyTakeaway: "Homúnculo de Penfield: o tamanho cortical reflete a destreza motora (mãos e boca gigantes)."
  },
  {
    id: "neuro-71",
    subjectId: "neurofisiologia",
    subtopic: "Plasticidade Sináptica - LTP",
    difficulty: "Difícil",
    question: "O mecanismo molecular clássico da Potenciação de Longa Duração (LTP) na sinapse CA3-CA1 do hipocampo depende crucialmente do receptor de NMDA atuar como um 'detector de coincidência'. Isso significa que:",
    options: [
      "O canal do receptor NMDA requer simultaneamente a ligação do neurotransmissor glutamato e uma despolarização pós-sináptica prévia (mediada por receptores AMPA) para repelir eletrostaticamente o íon Mg2+ que bloqueia seu poro, permitindo o influxo maciço de Ca2+",
      "O receptor NMDA necessita de influxo passivo de cloro para abrir canais de sódio no cone axônico",
      "O magnésio intracelular precisa sair da mitocôndria para ativar a transcrição gênica nuclear imediata",
      "O receptor NMDA só funciona se a acetilcolina estiver ausente de toda a fenda sináptica"
    ],
    correctIndex: 0,
    explanation: "Em potencial de repouso (-70 mV), o poro do receptor ionotrópico NMDA está bloqueado por íons Mg2+ extracelulares. Quando estímulos repetidos ativam receptores AMPA vizinhos, o influxo de Na+ despolariza a membrana dendrítica pós-sináptica até cerca de -30 mV, repelindo o Mg2+. Com o glutamato já ligado, o canal NMDA abre-se e permite entrada maciça de Ca2+, ativando a CaMKII e inserindo novos receptores AMPA na membrana pós-sináptica.",
    officialReference: "Kandel - Princípios da Neurociência, Cap. 67; Bear - Neurociências, Cap. 25",
    keyTakeaway: "LTP: despolarização via AMPA expele o Mg2+ do NMDA -> influxo de Ca2+ ativa CaMKII -> consolidação da memória."
  },
  {
    id: "neuro-72",
    subjectId: "neurofisiologia",
    subtopic: "Barreira Hematoencefálica (BHE)",
    difficulty: "Médio",
    question: "A barreira hematoencefálica (BHE) preserva a homeostase iônica e química estrita do parênquima cerebral. Sua integridade morfológica primária baseia-se em:",
    options: [
      "Zônulas de oclusão (tight junctions com claudina-5 e ocludina) altamente desenvolvidas entre as células endoteliais dos capilares cerebrais contínuos, reforçadas pelos podócitos dos astrócitos",
      "Filtração fenestrada livre nos capilares de todos os lobos corticais",
      "Camada contínua de mielina que envolve o lúmen de todas as arteríolas meníngeas",
      "Fagocitose indiscriminada de todos os íons sódio e potássio pela micróglia perivascular"
    ],
    correctIndex: 0,
    explanation: "Diferente dos capilares fenestrados da maioria dos tecidos periféricos, o endotélio capilar cerebral possui junções oclusivas estreitas contínuas que vedam o espaço intercelular, limitando o transporte paracelular. Moléculas lipossolúveis (O2, CO2, anestésicos) passam por difusão livre, enquanto nutrientes vitais (glicose via GLUT-1, aminoácidos neutros) necessitam de transportadores específicos na membrana endotelial.",
    officialReference: "Guyton & Hall, Cap. 62; Kandel, Cap. 61",
    keyTakeaway: "BHE: junções oclusivas contínuas endoteliais (claudina/ocludina) + pés astrocitários selam o encéfalo."
  },
  {
    id: "neuro-73",
    subjectId: "neurofisiologia",
    subtopic: "Ciclo Glutamato-Glutamina",
    difficulty: "Difícil",
    question: "O glutamato é o principal neurotransmissor excitatório do SNC, mas seu acúmulo excessivo na fenda sináptica causa excitotoxicidade neuronal. Como os astrócitos reciclam o glutamato?",
    options: [
      "Captam o glutamato da fenda via transportadores GLT-1 (EAAT2) acoplados a Na+, convertem-no em glutamina atóxica pela enzima glutamina sintetase e o liberam para os neurônios pré-sinápticos",
      "Degradam o glutamato em ureia e creatinina para excreção no plexo coróide",
      "Fosforilam o glutamato em ATP na matriz mitocondrial astrocitária",
      "Convertem o glutamato em dopamina através da tirosina hidroxilase glial"
    ],
    correctIndex: 0,
    explanation: "Os astrócitos possuem alta densidade de transportadores de glutamato de alta afinidade (EAAT2/GLT-1). Ao captar o glutamato pós-disparo, a enzima glial glutamina sintetase gasta ATP para transformar o glutamato em glutamina (que não possui efeito excitatório). A glutamina é secretada no espaço extracelular, recaptada pelos terminais neuronais pré-sinápticos e reconvertida em glutamato pela enzima glutaminase mitocondrial.",
    officialReference: "Kandel, Cap. 13; Bear, Cap. 6",
    keyTakeaway: "Ciclo Glutamato-Glutamina: astrócitos captam glutamato (EAAT2) -> sintetizam glutamina atóxica -> devolvem ao neurônio."
  },
  {
    id: "neuro-74",
    subjectId: "neurofisiologia",
    subtopic: "Circuito dos Gânglios da Base",
    difficulty: "Difícil",
    question: "Nos gânglios da base, a modulação dopaminérgica originada da substância negra pars compacta (SNpc) atua promovendo facilitação motora através de qual combinação de receptores no estriado?",
    options: [
      "Ativa a Via Direta através de receptores excitatórios D1 (aumentando a inibição talâmica do GPi) e inibe a Via Indireta através de receptores inibitórios D2, convergindo na desinibição do tálamo motor",
      "Bloqueia simultaneamente todos os receptores D1 e D2 provocando tremor de repouso involuntário",
      "Estimula o núcleo subtalâmico de Luys a secretar GABA diretamente no córtex motor primário",
      "Ativa os receptores D2 para frear totalmente a atividade do giro pré-central"
    ],
    correctIndex: 0,
    explanation: "A dopamina liberada pela SNpc exerce efeitos opostos em duas subpopulações de neurônios estriatais: 1) Excita neurônios da Via Direta (expressam receptores D1 acoplados a Gs/Golf), aumentando o sinal inibitório sobre o Globo Pálido Interno (GPi/SNpr), o que 'desinibe' o tálamo e libera o movimento; 2) Inibe neurônios da Via Indireta (expressam receptores D2 acoplados a Gi), silenciando a alça inibitória motora. O efeito líquido da dopamina é sempre pró-cinético.",
    officialReference: "Guyton & Hall, Cap. 57; Kandel, Cap. 43",
    keyTakeaway: "Dopamina nigroestriatal: ativa D1 (via direta) e inibe D2 (via indireta) -> desinibe o tálamo e facilita o movimento."
  },
  {
    id: "neuro-75",
    subjectId: "neurofisiologia",
    subtopic: "Fisiopatologia do Parkinson",
    difficulty: "Médio",
    question: "Na Doença de Parkinson, a morte progressiva dos neurônios dopaminérgicos da substância negra pars compacta (SNpc) altera o balanço das vias dos gânglios da base, culminando em:",
    options: [
      "Hiperatividade do Núcleo Subtalâmico e do Globo Pálido Interno (GPi), resultando em hiperinibição gabaérgica sustentada sobre o tálamo ventrolateral e bradicinesia/rigidez",
      "Hiperatividade talâmica descontrolada com espasmos coreicos difusos contínuos",
      "Perda do tônus muscular com flacidez e arreflexia miotática generalizada",
      "Aumento seletivo da velocidade dos movimentos voluntários balísticos"
    ],
    correctIndex: 0,
    explanation: "Sem o estímulo dopaminérgico estriatal (perda de D1 e desinibição de D2), a via indireta torna-se hiperativa, liberando o núcleo subtalâmico (glutamatérgico) para excitar intensamente o Globo Pálido Interno (GPi). O GPi dispara rajadas contínuas de GABA no tálamo anterior/ventrolateral, impedindo a retroalimentação excitatória para o córtex pré-motor, manifestando-se clinicamente como bradicinesia, rigidez plástica 'em roda dentada' e instabilidade postural.",
    officialReference: "Guyton & Hall, Cap. 57; Harrison - Medicina Interna, Cap. 427",
    keyTakeaway: "Parkinson: perda de dopamina -> GPi hiperativo inibe o tálamo -> bradicinesia e rigidez motora."
  },
  {
    id: "neuro-76",
    subjectId: "neurofisiologia",
    subtopic: "Tríade de Cushing e PIC",
    difficulty: "Difícil",
    question: "A clássica Tríade de Cushing, sinal neurofisiológico tardio e iminente de herniação encefálica por hipertensão intracraniana grave, consiste em:",
    options: [
      "Hipertensão arterial sistêmica com aumento da pressão de pulso, bradicardia reflexa e padrão respiratório irregular (depressão respiratória)",
      "Hipotensão arterial profunda, taquicardia sinusal extrema e respiração rápida eupneica",
      "Hipertermia maligna, tremores involuntários e paralisia facial periférica bilateral",
      "Ptose palpebral, anidrose unilateral e miose pupilar espástica"
    ],
    correctIndex: 0,
    explanation: "Quando a pressão intracraniana (PIC) se aproxima da pressão arterial média (PAM), os capilares cerebrais bulbares colapsam, causando isquemia grave do tronco encefálico. O centro vasomotor responde disparando uma descarga simpática colossal para elevar a PAM e restaurar a pressão de perfusão cerebral (PPC = PAM - PIC). A súbita elevação tensional estira os barorreceptores carotídeos, que geram bradicardia reflexa via vago. A compressão mecânica dos centros respiratórios bulbares acarreta respiração atáxica ou de Cheyne-Stokes.",
    officialReference: "Guyton & Hall, Cap. 18; Greenberg - Handbook of Neurosurgery",
    keyTakeaway: "Tríade de Cushing: Hipertensão com pressão de pulso divergente + Bradicardia + Respiração irregular na HIC grave."
  },
  {
    id: "neuro-77",
    subjectId: "neurofisiologia",
    subtopic: "Fisiologia Cerebelar",
    difficulty: "Difícil",
    question: "No córtex cerebelar, qual é o papel funcional único desempenhado pelas Fibras Trepadeiras oriundas da Oliva Bulbar Inferior?",
    options: [
      "Geram 'espículas complexas' de despolarização de alta voltagem nas células de Purkinje, codificando 'sinais de erro motor' indispensáveis para o aprendizado e correção de movimentos",
      "Inibem diretamente os motoneurônios alfa da medula espinhal sem sinapse intermediária",
      "Liberam dopamina nos núcleos profundos vestibulares para induzir nistagmo fisiológico",
      "Fornecem a sensibilidade tátil epicrítica da ponta dos dedos"
    ],
    correctIndex: 0,
    explanation: "Cada célula de Purkinje é abraçada intimamente por uma única fibra trepadeira proveniente do complexo olivar inferior. Cada potencial de ação na fibra trepadeira deflagra uma 'espícula complexa' maciça dependente de Ca2+ na célula de Purkinje. Esse sinal de despolarização sinaliza um 'erro de cálculo' entre o movimento pretendido pelo córtex e o executado perifericamente, modificando a força sináptica das fibras paralelas vizinhas (plasticidade cerebelar / LTD).",
    officialReference: "Kandel - Princípios da Neurociência, Cap. 42; Guyton & Hall, Cap. 57",
    keyTakeaway: "Fibras trepadeiras (da oliva inferior) disparam espículas complexas nas células de Purkinje sinalizando erro motor."
  },
  {
    id: "neuro-78",
    subjectId: "neurofisiologia",
    subtopic: "Reflexos Medulares e Propriocepção",
    difficulty: "Médio",
    question: "Qual é a distinção neurofisiológica fundamental entre o Fuso Neuromuscular e o Órgão Tendinoso de Golgi (OTG)?",
    options: [
      "O fuso neuromuscular está disposto em paralelo às fibras extrafusais e detecta comprimento e velocidade de estiramento muscular (fibras Ia/II), enquanto o OTG está em série no tendão e detecta força/tensão contrátil (fibras Ib)",
      "O fuso monitora exclusivamente a temperatura muscular, enquanto o OTG monitora o pH lático",
      "O fuso é um efetor parassimpático e o OTG é uma glândula endócrina secretora de endorfinas",
      "O OTG é responsável pelo reflexo miotático de estiramento monossináptico clássico"
    ],
    correctIndex: 0,
    explanation: "Os fusos neuromusculares ficam em paralelo com as fibras musculares esqueléticas extrafusais; quando o músculo é estirado passivamente, o fuso é tracionado, disparando fibras sensoriais Ia que ativam o reflexo miotático monossináptico (contração do agonista). O OTG fica disposto em série na junção miotendínea e é tracionado quando o músculo se contrai com força, disparando fibras Ib que inibem o motoneurônio agonista (reflexo miotático inverso de proteção contra ruptura).",
    officialReference: "Guyton & Hall, Cap. 55; Silverthorn, Cap. 13",
    keyTakeaway: "Fuso muscular = em paralelo, mede comprimento/estiramento (Ia); OTG = em série, mede tensão contrátil (Ib)."
  },
  {
    id: "neuro-79",
    subjectId: "neurofisiologia",
    subtopic: "Síndromes Motoras Piramidais",
    difficulty: "Médio",
    question: "Um paciente com lesão do Neurônio Motor Superior (córtex motor primário ou trato corticoespinhal lateral) apresenta semiologicamente:",
    options: [
      "Espasticidade 'em canivete', hiperreflexia tendínea profunda, clônus e Sinal de Babinski presente (resposta plantar em extensão)",
      "Flacidez muscular hipotônica, arreflexia miotática precoce e fasciculações visíveis",
      "Rigidez extrapiramidal plástica 'em cano de chumbo' e marcha festinante",
      "Anestesia em luva e bota com preservação total da força muscular"
    ],
    correctIndex: 0,
    explanation: "A lesão do 1º neurônio motor (neurônio motor superior) remove a inibição cortical tônica descendente sobre os arcos reflexos medulares, gerando a clássica síndrome piramidal: paresia/plegia espástica (hipertonia elástica em canivete), hiperreflexia miotática (exacerbação dos reflexos osteotendíneos), clônus inesgotável e sinal de Babinski (extensão do hálux com abertura em leque dos demais dedos). Já lesões do 2º neurônio motor cursam com hipotonia, arreflexia, atrofia e fasciculações.",
    officialReference: "Campbell - DeJong's The Neurological Examination; Guyton & Hall, Cap. 56",
    keyTakeaway: "Lesão de Neurônio Motor Superior: espasticidade em canivete, hiperreflexia tendínea e Sinal de Babinski presente."
  },
  {
    id: "neuro-80",
    subjectId: "neurofisiologia",
    subtopic: "Ritmo Circadiano e Pineal",
    difficulty: "Fácil",
    question: "O relógio circadiano mestre dos mamíferos, responsável por sincronizar os ciclos vigília-sono com o fotoperíodo ambiental de 24 horas, localiza-se no:",
    options: [
      "Núcleo Supraquiasmático (NSQ) do hipotálamo anterior, que recebe aferências retinianas monossinápticas pelo trato retinohipotalâmico e comanda a síntese noturna de melatonina na glândula pineal",
      "Núcleo rubro do mesencéfalo",
      "Corpo geniculado medial do tálamo auditivo",
      "Únculo do hipocampo límbico"
    ],
    correctIndex: 0,
    explanation: "O NSQ expressa genes de relógio (como CLOCK e BMAL1) que geram oscilações autônomas de ~24 horas. Células ganglionares intrinsecamente fotossensíveis da retina (contendo melanopsina) projetam diretamente ao NSQ pelo trato retinohipotalâmico. O NSQ controla as vias simpáticas pré-ganglionares na medula torácica que inervam a glândula pineal, suprimindo a produção de melatonina na presença de luz e liberando-a na escuridão.",
    officialReference: "Bear - Neurociências, Cap. 19; Guyton & Hall, Cap. 60",
    keyTakeaway: "Núcleo Supraquiasmático = marca-passo circadiano mestre; comanda secreção noturna de melatonina pela pineal."
  },
  {
    id: "neuro-81",
    subjectId: "neurofisiologia",
    subtopic: "Fisiologia do Sono REM",
    difficulty: "Difícil",
    question: "Durante a fase de Sono de Movimentos Oculares Rápidos (Sono REM), o traçado eletroencefalográfico (EEG) e o tônus muscular esquelético caracterizam-se respectivamente por:",
    options: [
      "Atividade eletroencefalográfica de baixa voltagem e alta frequência similar ao estado de vigília desperta ('sono paradoxal'), associada a atonia muscular postural quase completa mediada pela ponte",
      "Ondas delta lentas sincronizadas de grande amplitude com contração muscular voluntária contínua",
      "Silêncio elétrico cerebral cortical absoluto com preservação do reflexo patelar",
      "Fuso de sono clássico associado a complexos K a cada 3 segundos"
    ],
    correctIndex: 0,
    explanation: "O sono REM é denominado 'paradoxal' porque o córtex está altamente ativo metabolicamente (EEG dessincronizado com ondas rápidas beta e dente de serra, como se o sujeito estivesse acordado), enquanto o tônus muscular somático é ativamente abolido (atonia motora gerada por neurônios colinérgicos pontinos que ativam interneurônios gabaérgicos e glicinérgicos inibitórios sobre os motoneurônios alfa espinhais), protegendo o indivíduo de atuar fisicamente seus sonhos.",
    officialReference: "Kandel, Cap. 51; Guyton & Hall, Cap. 60",
    keyTakeaway: "Sono REM = EEG ativado/dessincronizado ('paradoxal') + atonia muscular somática motora profunda."
  },
  {
    id: "neuro-82",
    subjectId: "neurofisiologia",
    subtopic: "Modulação Descendente da Dor",
    difficulty: "Difícil",
    question: "O sistema analgésico endógeno de modulação descendente da dor no tronco encefálico opera primariamente através da seguinte via neuronal:",
    options: [
      "A Substância Cinzenta Periaquedutal (PAG) projeta-se para os Núcleos da Rafe (serotonina) e Locus Coeruleus (noradrenalina), que enviam axônios descendentes ao corno dorsal da medula para inibir a liberação de substância P via interneurônios encefalinérgicos",
      "Bloqueio permanente de todos os potenciais de ação no nervo ciático por secreção de acetilcolina periférica",
      "Ativação exclusiva do trato espinotalâmico lateral para intensificar os disparos nociceptivos",
      "Destruição das fibras C desmielinizadas no gânglio da raiz dorsal"
    ],
    correctIndex: 0,
    explanation: "A PAG mesencefálica possui densa concentração de receptores opioides mu. Ao ser ativada por opioides ou estresse, a PAG envia projeções excitatórias ao núcleo magno da rafe e locus coeruleus. Os axônios descendentes desses núcleos liberam serotonina e noradrenalina no corno posterior da medula (lâminas I e II de Rexed), estimulando interneurônios inibitórios locais a liberarem encefalina, que pré-sinapticamente bloqueia canais de Ca2+ e pós-sinapticamente abre canais de K+, abortando a transmissão dolorosa.",
    officialReference: "Guyton & Hall, Cap. 49; Bear, Cap. 12",
    keyTakeaway: "Analgesia descendente: PAG -> Rafe/Locus Coeruleus -> medula dorsal: encefalinas inibem substância P e bloqueiam dor."
  },
  {
    id: "neuro-83",
    subjectId: "neurofisiologia",
    subtopic: "Linguagem e Afasias",
    difficulty: "Médio",
    question: "Um paciente pós-AVC isquêmico compreende com perfeição o que lhe é dito, mas sua fala é extremamente laboriosa, não fluente, telegráfica e desprovida de gramática funcional. Essa apresentação clínica é típica de:",
    options: [
      "Afasia de Broca (motora/não-fluente), decorrente de lesão no giro frontal inferior esquerdo (áreas 44 e 45 de Brodmann)",
      "Afasia de Wernicke (sensorial/fluente) no lobo temporal superior",
      "Afasia de Condução com preservação absoluta da repetição verbal",
      "Agrafia pura de Gerstmann sem envolvimento da fonação"
    ],
    correctIndex: 0,
    explanation: "A Área de Broca situa-se na porção opercular e triangular do giro frontal inferior do hemisfério dominante (quase sempre esquerdo). Lesões nessa área preservam a compreensão auditiva verbal e a leitura silenciosa (função de Wernicke), mas destroem os programas motores de planejamento da fonação articulada, gerando fala truncada, anomia, esforço motor hercúleo para vocalizar e frustração perceptível do paciente com seus próprios déficits.",
    officialReference: "Kandel, Cap. 60; Guyton & Hall, Cap. 58",
    keyTakeaway: "Afasia de Broca (lobo frontal): compreensão preservada, mas fala não fluente, lenta e telegráfica."
  },
  {
    id: "neuro-84",
    subjectId: "neurofisiologia",
    subtopic: "Dinâmica do Líquor (LCR)",
    difficulty: "Médio",
    question: "O Líquido Cefalorraquidiano (LCR) é produzido a uma taxa de aproximadamente 500 mL/dia nos plexos corióideos. O trajeto normal de fluxo do LCR até sua reabsorção no sangue venoso venoso dos seios durais percorre sequencialmente:",
    options: [
      "Ventrículos Laterais -> Forames de Monro -> Terceiro Ventrículo -> Aqueduto Cerebral de Sylvius -> Quarto Ventrículo -> Aberturas de Luschka e Magendie -> Espaço Subaracnóideo -> Granulações Aracnóideas de Pacchioni",
      "Terceiro Ventrículo -> Canal ependimário lombar -> Plexo mesentérico -> Veia porta",
      "Aqueduto de Sylvius -> Bulbo olfatório -> Seio cavernoso exclusivamente",
      "Espaço subdural -> Cápsula interna -> Veia jugular externa"
    ],
    correctIndex: 0,
    explanation: "O LCR flui dos ventrículos laterais ao terceiro ventrículo pelos forames interventriculares (Monro), desce pelo aqueduto mesencefálico de Sylvius até o quarto ventrículo, sai para o espaço subaracnóideo e cisternas da base através dos forames laterais de Luschka e forame mediano de Magendie, banha o encéfalo e medula, e é reabsorvido passivamente por gradiente pressórico nas vilosidades/granulações aracnóideas para o seio sagital superior.",
    officialReference: "Guyton & Hall, Cap. 62; Kandel, Apêndice E",
    keyTakeaway: "Circulação liquórica: Monro -> III Ventrículo -> Aqueduto de Sylvius -> IV Ventrículo -> Luschka/Magendie -> Granulações Aracnóideas."
  },
  {
    id: "neuro-85",
    subjectId: "neurofisiologia",
    subtopic: "Transmissão Colinérgica e Junção Neuromuscular",
    difficulty: "Difícil",
    question: "Na placa motora terminal, a ligação de duas moléculas de acetilcolina às subunidades alfa do receptor nicotínico muscular (nAChR) desencadeia:",
    options: [
      "Abertura de canal catiônico não seletivo com influxo acentuado de Na+ superando o efluxo de K+, gerando o Potencial de Placa Terminal (PPT) despolarizante",
      "Ativação de proteína G inibitória (Gi) que hiperpolariza o sarcolema até -100 mV",
      "Fechamento irreversível dos canais de sódio dependentes de voltagem adjacentes",
      "Ativação de corrente pura de ânions cloreto que inibe a contração"
    ],
    correctIndex: 0,
    explanation: "O receptor nicotínico da junção neuromuscular é um canal iônico pentamérico ligante-dependente (duas subunidades alfa, uma beta, uma gama/épsilon e uma delta). Ao ligar duas moléculas de acetilcolina, o poro se abre de forma permeável a monovalentes. Como a força motriz eletroquímica para o Na+ em repouso (-90 mV) é muito mais favorável para entrada do que para a saída de K+, o influxo líquido de cargas positivas de sódio produz uma despolarização local robusta (PPT) que atinge o limiar para disparar o potencial de ação muscular.",
    officialReference: "Guyton & Hall, Cap. 7; Silverthorn, Cap. 11",
    keyTakeaway: "Receptor nicotínico na placa motora: liga 2 ACh -> influxo despolarizante de Na+ produz o Potencial de Placa Terminal."
  }
];

