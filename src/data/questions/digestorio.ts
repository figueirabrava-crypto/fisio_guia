import { Question } from "../../types";

export const DIGESTORIO_QUESTIONS: Question[] = [
  {
    id: "dig-01",
    subjectId: "digestorio",
    subtopic: "Boca & Digestão Química",
    difficulty: "Fácil",
    question: "A digestão química dos carboidratos inicia-se na boca através da ação da enzima salivar:",
    options: [
      "Ptialina (Amilase salivar)",
      "Pepsina gástrica",
      "Tripsina pancreática",
      "Lipase biliar"
    ],
    correctIndex: 0,
    explanation: "Conforme ilustrado no infográfico oficial: Boca (mastigação e digestão química inicial com amilase salivar). A amilase salivar (ptialina), secretada pelas glândulas parótidas e submandibulares, inicia a quebra das ligações alfa-1,4 do amido em maltose e dextrinas em pH neutro.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Ptialina (amilase salivar) inicia a quebra do amido na cavidade oral."
  },
  {
    id: "dig-02",
    subjectId: "digestorio",
    subtopic: "Esôfago & Peristaltismo",
    difficulty: "Fácil",
    question: "O transporte unidirecional do bolo alimentar da faringe ao estômago ao longo do esôfago é realizado por:",
    options: [
      "Ondas peristálticas coordenadas de contração circular e encurtamento longitudinal",
      "Gravidade exclusivamente, sem necessidade de musculatura ativa",
      "Batimento ciliar do epitélio respiratório",
      "Sucção promovida pela pressão negativa do baço"
    ],
    correctIndex: 0,
    explanation: "O peristaltismo esofágico primário (desencadeado pela deglutição) e secundário (acionado por distensão de restos de alimento) consiste em anéis de contração da camada muscular circular atrás do bolo e relaxamento receptivo à frente, funcionando até mesmo de cabeça para baixo.",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Peristaltismo esofágico = ondas propulsivas coordenadas de contração e relaxamento."
  },
  {
    id: "dig-03",
    subjectId: "digestorio",
    subtopic: "Estômago & Secreção Ácida",
    difficulty: "Fácil",
    question: "As células parietais (oxínticas) das glândulas gástricas secretam quais duas substâncias fisiológicas cruciais?",
    options: [
      "Ácido clorídrico (HCl) e Fator intrínseco de Castle",
      "Pepsinogênio e muco alcalino",
      "Insulina e glucagon",
      "Bile e sais biliares"
    ],
    correctIndex: 0,
    explanation: "As células parietais possuem bombas de prótons H+/K+ ATPase que bombeiam H+ acidificando o suco gástrico até pH 1.5 a 2.0. Concomitantemente, secretam o fator intrínseco, glicoproteína essencial para a absorção ileal da vitamina B12.",
    officialReference: "Guyton & Hall, Cap. 65; Silverthorn, Cap. 21",
    keyTakeaway: "Células parietais secretam HCl (acidez) e fator intrínseco (absorção de B12)."
  },
  {
    id: "dig-04",
    subjectId: "digestorio",
    subtopic: "Estômago & Pepsina",
    difficulty: "Fácil",
    question: "As células principais (pépticas) do estômago produzem o pepsinogênio. Como ocorre sua ativação na pepsina ativa?",
    options: [
      "Pela ação do pH ácido gerado pelo ácido clorídrico (HCl) e por autocatálise",
      "Pela bile liberada pelo duodeno que reflui ao antro",
      "Pela amilase da saliva engolida",
      "Pela insulina circulante no sangue arterial"
    ],
    correctIndex: 0,
    explanation: "O pepsinogênio é um zimogênio inativo. Em pH gástrico inferior a 3.5, a acidez do HCl cliva covalentemente um fragmento peptídico inibitório, convertendo-o em pepsina ativa, uma endopeptidase que quebra proteínas em peptonas e polipeptídeos menores.",
    officialReference: "Guyton & Hall, Cap. 65; Silverthorn, Cap. 21",
    keyTakeaway: "HCl cliva o pepsinogênio em pepsina ativa para digerir proteínas."
  },
  {
    id: "dig-05",
    subjectId: "digestorio",
    subtopic: "Fígado & Bile",
    difficulty: "Fácil",
    question: "A bile produzida pelos hepatócitos e armazenada na vesícula biliar NÃO contém enzimas digestivas ativas. Sua função principal na digestão é:",
    options: [
      "Emulsificar as gorduras em micelas menores através dos sais biliares, aumentando a área de contato para as lipases",
      "Digerir amido e glicose diretamente na corrente sanguínea",
      "Substituir o ácido clorídrico no interior do íleo terminal",
      "Neutralizar o oxigênio que entra pelo esôfago"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: Fígado e Vesícula (produção e armazenamento de bile para emulsificação de gorduras). Os sais biliares são moléculas anfipáticas com propriedades tensoativas: quebram os grandes glóbulos de gordura em gotículas microscópicas (emulsificação), formando micelas para a lipase pancreática agir.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 64 e 65",
    keyTakeaway: "Bile emulsifica lipídios em micelas para ação eficiente das lipases."
  },
  {
    id: "dig-06",
    subjectId: "digestorio",
    subtopic: "Vesícula Biliar & Colecistocina",
    difficulty: "Médio",
    question: "Qual hormônio duodenal liberado na presença de lipídios e peptídeos no quimo estimula a contração da vesícula biliar e o relaxamento do esfíncter de Oddi?",
    options: [
      "Colecistocinina (CCK)",
      "Secretina",
      "Gastrina",
      "Somatostatina"
    ],
    correctIndex: 0,
    explanation: "A colecistocinina (CCK) é secretada pelas células I da mucosa do duodeno e jejuno proximal. A CCK contrai a musculatura lisa da vesícula biliar (ejetando a bile) e relaxa o esfíncter de Oddi na ampola hepatopancreática, além de estimular a secreção de enzimas ricas pelo pâncreas exócrino.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "CCK (Colecistocinina) contrai a vesícula e relaxa o esfíncter de Oddi."
  },
  {
    id: "dig-07",
    subjectId: "digestorio",
    subtopic: "Pâncreas Exócrino & Bicarbonato",
    difficulty: "Médio",
    question: "A secretina é um hormônio liberado pelas células S do duodeno em resposta à acidez gástrica (pH < 4.5) que estimula o pâncreas a secretar:",
    options: [
      "Um fluido aquoso copioso altamente rico em bicarbonato (HCO3-) para neutralizar o quimo ácido",
      "Ácido clorídrico concentrado para queimar patógenos no cólon",
      "Glucagon maciço nas ilhotas para aumentar a glicemia",
      "Pepsina adicional idêntica à gástrica"
    ],
    correctIndex: 0,
    explanation: "A principal função da secretina é proteger o duodeno contra a acidez corrosiva do quimo gástrico. Ela estimula os ductos pancreáticos e biliares a bombear bicarbonato (HCO3-), elevando o pH intraluminal para 7.0-8.0, ideal para o funcionamento das enzimas pancreáticas.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Secretina estimula secreção pancreática rica em bicarbonato para neutralizar o quimo ácido."
  },
  {
    id: "dig-08",
    subjectId: "digestorio",
    subtopic: "Enzimas Pancreáticas",
    difficulty: "Médio",
    question: "Qual enzima da borda em escova do enterócito duodenal é responsável por clivar e ativar o tripsinogênio pancreático em tripsina ativa, desencadeando a cascata das demais proteases?",
    options: [
      "Enteroquinase (Enteropeptidase)",
      "Lactase",
      "Maltase",
      "Lipase lingual"
    ],
    correctIndex: 0,
    explanation: "O pâncreas secreta suas proteases na forma de pró-enzimas inativas para prevenir autodigestão pancreática. No duodeno, a enteropeptidase da mucosa cliva o tripsinogênio em tripsina ativa; a tripsina, por sua vez, ativa o quimiotripsinogênio, pró-carboxipeptidases e pró-elastases.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 64",
    keyTakeaway: "Enteropeptidase (enteroquinase) ativa a tripsina na mucosa duodenal."
  },
  {
    id: "dig-09",
    subjectId: "digestorio",
    subtopic: "Intestino Delgado & Absorção",
    difficulty: "Fácil",
    question: "As três divisões anatômicas sucessivas do intestino delgado, em ordem do estômago ao intestino grosso, são:",
    options: [
      "Duodeno, Jejuno e Íleo",
      "Ceco, Cólon e Reto",
      "Piloro, Antro e Cárdia",
      "Fundo, Corpo e Colo"
    ],
    correctIndex: 0,
    explanation: "O intestino delgado inicia-se no duodeno (onde desembocam ductos biliar e pancreático), prossegue pelo jejuno (principal sítio de absorção de carboidratos, proteínas e lipídios) e termina no íleo, que se une ao ceco na válvula ileocecal.",
    officialReference: "Silverthorn, Cap. 21; Junqueira & Carneiro, Cap. 15",
    keyTakeaway: "Intestino delgado = Duodeno -> Jejuno -> Íleo."
  },
  {
    id: "dig-10",
    subjectId: "digestorio",
    subtopic: "Especializações da Mucosa Intestinal",
    difficulty: "Fácil",
    question: "As dobras circulares (válvulas de Kerckring), as vilosidades intestinais e as microvilosidades da borda em escova dos enterócitos têm o objetivo de:",
    options: [
      "Aumentar a área de superfície de absorção de nutrientes em centenas de vezes (cerca de 250 a 300 m²)",
      "Armazenar gordura para períodos de jejum prolongado",
      "Evitar que o bolo fecal resseque prematuramente",
      "Impedir a passagem de água para o sangue venoso"
    ],
    correctIndex: 0,
    explanation: "Essa arquitetura hierárquica (pregas, vilosidades digitiformes e milhões de microvilosidades na membrana apical de cada enterócito) expande a área absortiva interna do intestino delgado para o tamanho aproximado de uma quadra de tênis.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Pregas, vilosidades e microvilosidades maximizam a área de absorção intestinal."
  },
  {
    id: "dig-11",
    subjectId: "digestorio",
    subtopic: "Absorção de Lipídios & Quilomícrons",
    difficulty: "Médio",
    question: "Após serem absorvidos pelos enterócitos e ressintetizados em triglicerídeos no retículo endoplasmático liso, os lipídios são empacotados com apolipoproteínas na forma de:",
    options: [
      "Quilomícrons, que são exocitados e drenados para os vasos linfáticos centrais (lactíferos) das vilosidades",
      "Glicose livre que cai diretamente nos capilares fenestrados da veia porta",
      "Aminoácidos solúveis na urina",
      "Ácidos nucleicos armazenados no baço"
    ],
    correctIndex: 0,
    explanation: "Os grandes quilomícrons não conseguem penetrar os poros dos capilares sanguíneos convencionais da vilosidade. Entram nos vasos linfáticos com endotélio fendido (lactíferos), passam pelo ducto torácico e só então desembocam na circulação venosa sistêmica.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Quilomícrons são lipoproteínas que entram nos vasos linfáticos lactíferos."
  },
  {
    id: "dig-12",
    subjectId: "digestorio",
    subtopic: "Absorção de Vitamina B12",
    difficulty: "Médio",
    question: "A vitamina B12 (cobalamina) complexada com o fator intrínseco de Castle é absorvida especificamente em qual segmento do trato gastrointestinal?",
    options: [
      "Íleo terminal através de receptores de cubilina",
      "Fundo gástrico por difusão simples",
      "Duodeno proximal",
      "Cólon sigmoide"
    ],
    correctIndex: 0,
    explanation: "O complexo vitamina B12-fator intrínseco resiste às proteases pancreáticas e percorre todo o jejuno até atingir o íleo terminal, onde enterócitos especializados expressam o receptor de cubilina-amnionless para endocitose mediada por receptor.",
    officialReference: "Guyton & Hall, Cap. 65; Silverthorn, Cap. 21",
    keyTakeaway: "Vitamina B12 + fator intrínseco são absorvidos exclusivamente no íleo terminal."
  },
  {
    id: "dig-13",
    subjectId: "digestorio",
    subtopic: "Intestino Grosso & Microbiota",
    difficulty: "Fácil",
    question: "No intestino grosso (ceco, colos ascendente, transverso, descendente, sigmoide e reto), as principais funções fisiológicas são:",
    options: [
      "Absorção maciça de água e eletrólitos, compactação das fezes e fermentação bacteriana de fibras por trilhões de microrganismos (microbiota)",
      "Digestão enzimática completa de gorduras e proteínas animais",
      "Produção exclusiva de ácido clorídrico",
      "Filtração de urina a partir da linfa colônica"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: Intestino Grosso (absorção de água, formação de fezes e microbiota intestinal). O cólon absorve de 1.5 a 2 litros de água e sódio diariamente. Sua rica microbiota simbiótica produz vitaminas (K e biotina), ácidos graxos de cadeia curta (butirato) e protege contra patógenos.",
    officialReference: "Guyton & Hall, Cap. 65; Silverthorn, Cap. 21",
    keyTakeaway: "Intestino grosso = absorção de água/íons, fezes e microbiota produtora de vitamina K."
  },
  {
    id: "dig-14",
    subjectId: "digestorio",
    subtopic: "Circulação Entero-Hepática",
    difficulty: "Médio",
    question: "Cerca de 95% dos sais biliares secretados na bile são reabsorvidos ativamente no íleo terminal e retornam ao fígado através de qual circuito vascular?",
    options: [
      "Sistema venoso porta-hepático (Circulação Entero-Hepática)",
      "Artéria femoral profunda",
      "Veia cava superior",
      "Ducto torácico linfático esquerdo"
    ],
    correctIndex: 0,
    explanation: "Os sais biliares são reciclados de 4 a 12 vezes ao dia: após exercerem seu efeito micelar no duodeno e jejuno, são recaptados no íleo terminal pelo transportador ASBT dependente de Na+, caem na veia porta e são eficientemente extraídos pelos hepatócitos para resecreção na bile.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Circulação entero-hepática recicla 95% dos sais biliares via veia porta."
  },
  {
    id: "dig-15",
    subjectId: "digestorio",
    subtopic: "Gastrina",
    difficulty: "Fácil",
    question: "O hormônio gastrina é secretado pelas células G do antro gástrico e tem como efeito primário:",
    options: [
      "Estimular intensamente as células parietais a secretarem ácido clorídrico (HCl)",
      "Inibir a motilidade do estômago e induzir o vômito",
      "Bloquear a produção de saliva nas parótidas",
      "Provocar a contração espasmódica do esôfago superior"
    ],
    correctIndex: 0,
    explanation: "A gastrina é liberada em resposta a peptídeos, aminoácidos e estímulo vagal no estômago. Ela liga-se a receptores CCK-B nas células parietais e principalmente nas células ECL (enterocromafim-like), liberando histamina para potencializar a secreção de ácido.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Gastrina das células G estimula a secreção ácida gástrica (HCl)."
  },
  {
    id: "dig-16",
    subjectId: "digestorio",
    subtopic: "Histamina & Secreção Gástrica",
    difficulty: "Médio",
    question: "A histamina liberada pelas células enterocromafim-like (ECL) da mucosa gástrica liga-se a qual receptor das células parietais para disparar a bomba de prótons?",
    options: [
      "Receptores H2 de histamina (bloqueados por ranitidina/cimetidina)",
      "Receptores H1 de histamina (anti-alérgicos)",
      "Receptores nicotínicos musculares",
      "Receptores alfa-1 adrenérgicos"
    ],
    correctIndex: 0,
    explanation: "A histamina é o estimulador parácrino mais potente da acidez gástrica. A ligação aos receptores H2 eleva o AMPc intracelular nas células parietais, ativando a PKA e fundindo as vesículas contendo bombas H+/K+ ATPase na membrana canalicular apical.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 64",
    keyTakeaway: "Histamina ativa receptores H2 na célula parietal estimulando a secreção de HCl."
  },
  {
    id: "dig-17",
    subjectId: "digestorio",
    subtopic: "Inibidores da Bomba de Prótons",
    difficulty: "Fácil",
    question: "Fármacos como o omeprazol e o pantoprazol reduzem dramaticamente a acidez gástrica por qual mecanismo de ação molecular?",
    options: [
      "Inibição direta e irreversível da bomba de prótons H+/K+ ATPase nas células parietais",
      "Neutralização química simples do ácido idêntica ao bicarbonato de sódio em pó",
      "Destruição das células principais produtoras de pepsina",
      "Bloqueio dos receptores gustativos de doce na língua"
    ],
    correctIndex: 0,
    explanation: "Os inibidores de bomba de prótons (IBPs) são pró-fármacos que se acumulam no meio extremamente ácido dos canalículos das células parietais, onde são sulfonilados e ligam-se covalentemente a resíduos de cisteína da enzima H+/K+ ATPase, paralisando a secreção de H+.",
    officialReference: "Goodman & Gilman - As Bases Farmacológicas da Terapêutica; Guyton & Hall, Cap. 65",
    keyTakeaway: "Omeprazol inibe irreversivelmente a bomba de prótons H+/K+ ATPase."
  },
  {
    id: "dig-18",
    subjectId: "digestorio",
    subtopic: "Barreira Mucosa Gástrica",
    difficulty: "Médio",
    question: "Como o estômago evita ser autodigerido pelo pH ultra-ácido (pH ~1.5) e pela pepsina corrosiva que ele mesmo produz?",
    options: [
      "Através da barreira mucosa de gel glicoproteico rico em bicarbonato (HCO3-), tight junctions epiteliais e prostaglandinas protetoras (PGE2)",
      "Porque o ácido fica armazenado dentro de vesículas de chumbo impermeáveis",
      "Porque a pepsina só fica ativa após deixar o organismo pelo reto",
      "Pela renovação tecidual que ocorre a cada 50 anos"
    ],
    correctIndex: 0,
    explanation: "As células mucosas superficiais secretam uma camada contínua de muco insolúvel e íons HCO3- que mantém o pH junto à superfície celular neutro (~pH 7.0). As prostaglandinas estimulam esse muco e o fluxo sanguíneo; AINEs como o ibuprofeno inibem prostaglandinas, causando gastrites e úlceras.",
    officialReference: "Guyton & Hall, Cap. 65; Silverthorn, Cap. 21",
    keyTakeaway: "Muco gástrico + bicarbonato + prostaglandinas formam a barreira protetora contra o HCl."
  },
  {
    id: "dig-19",
    subjectId: "digestorio",
    subtopic: "Somatostatina",
    difficulty: "Médio",
    question: "A somatostatina, secretada pelas células D gástricas e pancreáticas em resposta ao excesso de acidez luminal, atua fisiologicamente como:",
    options: [
      "O principal freio inibitório da digestão: inibe a liberação de gastrina, histamina, HCl e esvaziamento gástrico",
      "Um potente estimulante da secreção biliar",
      "Uma enzima que degrada celulose vegetal",
      "Um hormônio de contração dos ductos salivares"
    ],
    correctIndex: 0,
    explanation: "A somatostatina é o principal mediador de feedback negativo da secreção ácida. Quando o pH gástrico cai abaixo de 2.0, as células D liberam somatostatina, que inibe diretamente as células G (gastrina), ECL (histamina) e parietais (HCl).",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Somatostatina das células D = hormônio inibitório geral da secreção gástrica e motilidade."
  },
  {
    id: "dig-20",
    subjectId: "digestorio",
    subtopic: "Fases da Secreção Gástrica",
    difficulty: "Médio",
    question: "A secreção de suco gástrico desencadeada pela simples visão, cheiro, gosto ou pensamento de comida apetitosa corresponde à:",
    options: [
      "Fase cefálica, mediada por vias parassimpáticas pelo Nervo Vago (NC X)",
      "Fase gástrica puramente mecânica",
      "Fase intestinal de inibição humoral",
      "Fase cólica mediada pela microbiota"
    ],
    correctIndex: 0,
    explanation: "A fase cefálica é responsável por até 30% da resposta ácida a uma refeição. Sinais sensoriais do córtex cerebral e hipotálamo convergem nos núcleos motores dorsais do vago, cujas fibras colinérgicas liberam acetilcolina e GRP no estômago antes mesmo da deglutição.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Fase cefálica = estímulo visual/olfatório mediado pelo Nervo Vago."
  },
  {
    id: "dig-21",
    subjectId: "digestorio",
    subtopic: "Sistema Nervoso Entérico",
    difficulty: "Fácil",
    question: "O sistema nervoso intrínseco do trato gastrointestinal, frequentemente chamado de 'segundo cérebro', é composto por quais dois plexos nervosos?",
    options: [
      "Plexo mioentérico (de Auerbach) e Plexo submucoso (de Meissner)",
      "Plexo braquial e Plexo lombossacral",
      "Plexo carotídeo e Plexo timpânico",
      "Plexo venoso pampiniforme e Plexo solar puro"
    ],
    correctIndex: 0,
    explanation: "O plexo mioentérico de Auerbach localiza-se entre as camadas musculares circular e longitudinal, controlando a motilidade gastrointestinal e o peristaltismo. O plexo submucoso de Meissner controla secreções glandulares e fluxo sanguíneo local da mucosa.",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Auerbach = motilidade muscular; Meissner = secreções submucosas e absorção."
  },
  {
    id: "dig-22",
    subjectId: "digestorio",
    subtopic: "Células Intersticiais de Cajal",
    difficulty: "Difícil",
    question: "As células intersticiais de Cajal (ICC) funcionam como os marcapassos elétricos do trato gastrointestinal porque:",
    options: [
      "Geram espontaneamente ondas elétricas lentas (ritmo elétrico básico - BER) que despolarizam a musculatura lisa rítmica",
      "Secretam bile diretamente no cólon descendente",
      "Produzem imunoglobulina IgA no duodeno",
      "Fagocitam vermes intestinais na luz do ceco"
    ],
    correctIndex: 0,
    explanation: "As ICC formam uma rede conectada por junções comunicantes (gap junctions) com os miócitos lisos. Elas oscilam seu potencial de membrana gerando o ritmo de ondas lentas (3 por minuto no estômago, 12 no duodeno), determinando a frequência máxima de contrações.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 63",
    keyTakeaway: "Células de Cajal = marcapasso do ritmo elétrico básico (BER) do trato digestório."
  },
  {
    id: "dig-23",
    subjectId: "digestorio",
    subtopic: "Células de Kupffer",
    difficulty: "Fácil",
    question: "Quais células residentes nos sinusoides hepáticos atuam como macrófagos especializados, fagocitando bactérias, debris celulares e eritrócitos senescentes vindos da veia porta?",
    options: [
      "Células de Kupffer",
      "Células estreladas de Ito",
      "Hepatócitos centrolobulares",
      "Colangiócitos"
    ],
    correctIndex: 0,
    explanation: "As células de Kupffer representam mais de 80% de todos os macrófagos teciduais fixos do corpo humano. Elas limpam o sangue venoso portal que drena o intestino de bactérias translocadas, toxinas bacterianas e restos celulares antes de atingir a circulação geral.",
    officialReference: "Junqueira & Carneiro, Cap. 16; Guyton & Hall, Cap. 70",
    keyTakeaway: "Células de Kupffer = macrófagos residentes dos sinusoides hepáticos."
  },
  {
    id: "dig-24",
    subjectId: "digestorio",
    subtopic: "Metabolismo da Bilirrubina",
    difficulty: "Médio",
    question: "A bilirrubina é um pigmento derivado da degradação do grupo heme da hemoglobina. No fígado, ela é conjugada com qual ácido para tornar-se hidrossolúvel e ser excretada na bile?",
    options: [
      "Ácido glicurônico (formando glicuronídeo de bilirrubina)",
      "Ácido lático",
      "Ácido clorídrico",
      "Ácido ascórbico puro"
    ],
    correctIndex: 0,
    explanation: "A bilirrubina indireta (não conjugada) é apolar e circula ligada à albumina. Nos hepatócitos, a enzima UDP-glicuronosiltransferase (UGT1A1) conjuga duas moléculas de ácido glicurônico à bilirrubina, tornando-a bilirrubina direta (solúvel), pronta para ser excretada na bile.",
    officialReference: "Guyton & Hall, Cap. 70; Lehninger, Cap. 22",
    keyTakeaway: "Bilirrubina é conjugada com ácido glicurônico no fígado para se tornar hidrossolúvel."
  },
  {
    id: "dig-25",
    subjectId: "digestorio",
    subtopic: "Icterícia",
    difficulty: "Fácil",
    question: "O acúmulo patológico de bilirrubina no sangue (> 2.0-2.5 mg/dL) causa coloração amarelada da pele, mucosas e esclera dos olhos, condição clínica denominada:",
    options: [
      "Icterícia",
      "Cianose",
      "Eritema",
      "Vitiligo"
    ],
    correctIndex: 0,
    explanation: "A icterícia pode ser pré-hepática (hemólise intensa excedendo a capacidade de conjugação), intra-hepática (hepatite, cirrose que lesam os hepatócitos) ou pós-hepática/obstrutiva (cálculos biliares impactados no ducto colédoco impedindo o fluxo biliar).",
    officialReference: "Guyton & Hall, Cap. 70; Robbins & Cotran, Cap. 18",
    keyTakeaway: "Icterícia = pigmentação amarelada por acúmulo de bilirrubina no sangue."
  },
  {
    id: "dig-26",
    subjectId: "digestorio",
    subtopic: "Absorção de Carboidratos",
    difficulty: "Médio",
    question: "No epitélio do intestino delgado, a glicose e a galactose são absorvidas na borda em escova através de qual transportador ativo secundário?",
    options: [
      "SGLT1 (cotransportador de sódio-glicose)",
      "GLUT5 (transportador exclusivo de frutose)",
      "GLUT4 (mediado por insulina)",
      "Canal de cloro CFTR"
    ],
    correctIndex: 0,
    explanation: "O enterócito utiliza o SGLT1 para transportar ativamente glicose e galactose para o citosol aproveitando o influxo a favor do gradiente de Na+. Na membrana basolateral, a glicose é transferida para o sangue por difusão facilitada via GLUT2.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Glicose e galactose usam SGLT1 (simporte com Na+) na membrana apical intestinal."
  },
  {
    id: "dig-27",
    subjectId: "digestorio",
    subtopic: "Absorção de Frutose",
    difficulty: "Médio",
    question: "Diferentemente da glicose, a absorção intestinal da frutose na membrana apical do enterócito ocorre por difusão facilitada independente de sódio através do transportador:",
    options: [
      "GLUT5",
      "SGLT1",
      "Bomba de sódio e potássio",
      "Aquaporina tipo 1"
    ],
    correctIndex: 0,
    explanation: "A frutose utiliza o carreador GLUT5 para penetrar no enterócito por difusão facilitada simples a favor de seu gradiente, sem acoplamento a íons sódio nem consumo indireto de ATP. Na membrana basolateral, sai via GLUT2 em direção ao sangue.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Frutose é absorvida por difusão facilitada através do GLUT5."
  },
  {
    id: "dig-28",
    subjectId: "digestorio",
    subtopic: "Intolerância à Lactose",
    difficulty: "Fácil",
    question: "A intolerância à lactose é provocada pela deficiência da enzima lactase na borda em escova intestinal, resultando em diarreia osmótica e gases porque:",
    options: [
      "A lactose não digerida permanece na luz intestinal retendo água por osmose e sendo fermentada por bactérias colônicas em gases (H2, CO2, metano) e ácidos orgânicos",
      "A lactose bloqueia a absorção de ar pelo esôfago",
      "O excesso de lactase destrói as microvilosidades mecânicas",
      "O ácido clorídrico gástrico deixa de ser produzido"
    ],
    correctIndex: 0,
    explanation: "Sem a lactase para quebrar a lactose em glicose e galactose, o dissacarídeo osmoticamente ativo atrai água para a luz do cólon. As bactérias fermentam a molécula, gerando distensão abdominal, flatulência dolorosa e diarreia ácida.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Intolerância à lactose = lactose retém água por osmose e é fermentada em gases."
  },
  {
    id: "dig-29",
    subjectId: "digestorio",
    subtopic: "Motilina & CMM",
    difficulty: "Difícil",
    question: "Durante o jejum interdigestivo, surtos periódicos de contrações peristálticas de limpeza que varrem restos alimentares e bactérias do estômago ao íleo constituem o:",
    options: [
      "Complexo Motor Migrante (CMM), estimulado pelo hormônio motilina",
      "Reflexo gastroileal acionado por gastrina",
      "Movimento pendular estático",
      "Reflexo do vômito involuntário"
    ],
    correctIndex: 0,
    explanation: "A cada 90 a 120 minutos durante o jejum, a motilina liberada pelas células M do duodeno desencadeia o Complexo Motor Migrante (CMM), uma onda intensa de contrações ('vassoura gástrica e intestinal') que limpa o lúmen e previne proliferação bacteriana anômala.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 63",
    keyTakeaway: "Complexo Motor Migrante (CMM) estimulado por motilina faz a limpeza no jejum."
  },
  {
    id: "dig-30",
    subjectId: "digestorio",
    subtopic: "Grelina & Leptina",
    difficulty: "Fácil",
    question: "A grelina é um hormônio peptídico secretado pelas células do fundo gástrico com o estômago vazio cuja principal função no sistema nervoso central é:",
    options: [
      "Estimular intensamente a fome e o apetite nos neurônios do hipotálamo",
      "Induzir saciedade imediata e queima rápida de gordura",
      "Impedir a salivação durante o sono",
      "Bloquear a absorção de glicose no jejuno"
    ],
    correctIndex: 0,
    explanation: "A grelina é o único hormônio orexígeno periférico potente conhecido. Seus níveis elevam-se antes das refeições, agindo sobre neurônios NPY/AgRP do núcleo arqueado do hipotálamo estimulando a busca por alimento. A leptina (do tecido adiposo) faz o oposto (saciedade).",
    officialReference: "Guyton & Hall, Cap. 71; Silverthorn, Cap. 22",
    keyTakeaway: "Grelina gástrica estimula o apetite e a fome no hipotálamo."
  },
  {
    id: "dig-31",
    subjectId: "digestorio",
    subtopic: "Reflexo da Deglutição",
    difficulty: "Médio",
    question: "Durante a fase faríngea involuntária da deglutição, qual estrutura cartilaginosa dobra-se para trás para ocluir a entrada da laringe, impedindo que o alimento vá para a traqueia?",
    options: [
      "Epiglote",
      "Tireoide",
      "Cricoide",
      "Aritenoide"
    ],
    correctIndex: 0,
    explanation: "A elevação da laringe traciona e inclina a cartilagem epiglótica sobre o adito da laringe e aproxima as pregas vocais, selando completamente a via aérea enquanto o esfíncter esofágico superior se relaxa para o bolo transitar seguramente.",
    officialReference: "Guyton & Hall, Cap. 63; Junqueira & Carneiro, Cap. 15",
    keyTakeaway: "Epiglote fecha a laringe durante a deglutição, evitando aspiração pulmonar."
  },
  {
    id: "dig-32",
    subjectId: "digestorio",
    subtopic: "Reflexo da Defecação",
    difficulty: "Médio",
    question: "O reflexo da defecação envolve o relaxamento involuntário do esfíncter anal interno e o controle voluntário e consciente exercido sobre o:",
    options: [
      "Esfíncter anal externo (músculo estriado esquelético inervado pelo nervo pudendo)",
      "Músculo detrusor vesical",
      "Músculo cricofaríngeo",
      "Esfíncter de Oddi"
    ],
    correctIndex: 0,
    explanation: "A distensão do reto por fezes deflagra o reflexo retossfincteriano mediado por parassimpáticos sacrais (nervos esplâncnicos pélvicos), que relaxam o esfíncter interno involuntário de músculo liso. A continência é mantida até momento oportuno pelo esfíncter externo voluntário.",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Esfíncter anal interno é involuntário; esfíncter externo é voluntário (nervo pudendo)."
  },
  {
    id: "dig-33",
    subjectId: "digestorio",
    subtopic: "Lipase Pancreática & Co-lipase",
    difficulty: "Médio",
    question: "A lipase pancreática necessita de qual cofator protéico secretado pelo pâncreas para conseguir ancorar-se na superfície das gotículas lipídicas recobertas por sais biliares?",
    options: [
      "Colipase",
      "Fator intrínseco",
      "Calmodulina",
      "Albumina sérica"
    ],
    correctIndex: 0,
    explanation: "Os sais biliares formam uma película eletrostática que naturalmente repele a lipase pancreática solúvel em água. A colipase liga-se à gota de gordura e atua como uma âncora de fixação, permitindo que a lipase catalise a hidrólise dos triglicerídeos em 2-monoglicerídeos e ácidos graxos livres.",
    officialReference: "Guyton & Hall, Cap. 65; Silverthorn, Cap. 21",
    keyTakeaway: "Colipase ancora a lipase pancreática na superfície das gotículas emulsionadas."
  },
  {
    id: "dig-34",
    subjectId: "digestorio",
    subtopic: "Glândulas Salivares",
    difficulty: "Fácil",
    question: "Quais são os três grandes pares de glândulas salivares exócrinas na espécie humana?",
    options: [
      "Parótidas, Submandibulares e Sublinguais",
      "Tireoide, Paratireoide e Timo",
      "Adrenais, Hipófise e Pâncreas",
      "Lacrimais, Sudoríparas e Sebáceas"
    ],
    correctIndex: 0,
    explanation: "As glândulas parótidas produzem saliva predominantemente serosa rica em amilase via ducto de Stensen; as submandibulares produzem secreção mista via ducto de Wharton; e as sublinguais produzem secreção mucosa espessa via ductos de Rivinus/Bartholin.",
    officialReference: "Guyton & Hall, Cap. 64; Junqueira & Carneiro, Cap. 16",
    keyTakeaway: "3 pares de glândulas salivares: Parótidas, Submandibulares e Sublinguais."
  },
  {
    id: "dig-35",
    subjectId: "digestorio",
    subtopic: "Cálculos Biliares",
    difficulty: "Médio",
    question: "A colelitíase (pedras na vesícula biliar) ocorre predominantemente quando há um desequilíbrio na proporção entre:",
    options: [
      "Excesso de colesterol e diminuição de sais biliares e fosfolipídios (lecitina) na bile, levando à precipitação de cristais",
      "Excesso de ácido clorídrico que penetra no colédoco",
      "Falta de vitamina C na alimentação diária",
      "Degradação acelerada de plaquetas na circulação"
    ],
    correctIndex: 0,
    explanation: "Na bile normal, o colesterol insolúvel é mantido dissolvido no centro de micelas mistas formadas por sais biliares e fosfatidilcolina (lecitina). Se o colesterol supera a capacidade solubilizadora (bile litogênica saturada), nucleiam cristais que coalescem em cálculos.",
    officialReference: "Guyton & Hall, Cap. 65; Robbins & Cotran, Cap. 18",
    keyTakeaway: "Cálculos de colesterol formam-se por saturação de colesterol em relação aos sais biliares."
  },
  {
    id: "dig-36",
    subjectId: "digestorio",
    subtopic: "Pâncreas Endócrino vs Exócrino",
    difficulty: "Fácil",
    question: "O pâncreas é uma glândula mista (anfícrina). Sua porção exócrina (ácinos e ductos) difere da endócrina (ilhotas de Langerhans) por secretar:",
    options: [
      "Enzimas digestivas e bicarbonato no duodeno; enquanto a endócrina secreta insulina e glucagon no sangue",
      "Insulina na bile; enquanto a endócrina drena enzimas no estômago",
      "Bile pura; enquanto a endócrina produz adrenalina",
      "Ácido clorídrico diretamente no esôfago"
    ],
    correctIndex: 0,
    explanation: "Cerca de 98% da massa pancreática é exócrina (ácinos serosos secretores de tripsinogênio, amilase e lípase que drenam pelo ducto de Wirsung ao duodeno). As ilhotas de Langerhans (~2%) secretam hormônios reguladores de glicemia diretamente na veia porta.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 64",
    keyTakeaway: "Pâncreas exócrino = enzimas no duodeno; endócrino = insulina e glucagon no sangue."
  },
  {
    id: "dig-37",
    subjectId: "digestorio",
    subtopic: "Células Paneth & Criptas de Lieberkühn",
    difficulty: "Médio",
    question: "As células de Paneth, localizadas na base das criptas de Lieberkühn no intestino delgado, desempenham papel crucial na imunidade ao secretarem:",
    options: [
      "Lisozimas, defensinas (criptidinas) e fosfolipase A2 contra bactérias patogênicas",
      "Ácido gástrico concentrado",
      "Gordura saturada para revestir as fezes",
      "Hormônios tireoidianos reguladores"
    ],
    correctIndex: 0,
    explanation: "As células de Paneth contêm grandes grânulos repletos de peptídeos antimicrobianos (alfa-defensinas). Elas detectam produtos bacterianos via receptores TLR e liberam substâncias bactericidas que mantêm as células-tronco vizinhas da cripta estéreis e protegidas.",
    officialReference: "Junqueira & Carneiro, Cap. 15; Silverthorn, Cap. 21",
    keyTakeaway: "Células de Paneth nas criptas secretam defensinas e lisozimas antimicrobianas."
  },
  {
    id: "dig-38",
    subjectId: "digestorio",
    subtopic: "Apendicite",
    difficulty: "Fácil",
    question: "A apêndice cecal é uma projeção tubular rica em tecido linfoide associada a qual porção anatômica do cólon?",
    options: [
      "Ceco",
      "Reto distal",
      "Cólon descendente",
      "Ângulo esplênico"
    ],
    correctIndex: 0,
    explanation: "A apêndice vermiforme projeta-se a partir da parede posteromedial do ceco, logo abaixo da junção ileocecal. Sua obstrução luminal por fecalitos (coprólitos) ou hiperplasia linfoide desencadeia a apendicite aguda.",
    officialReference: "Junqueira & Carneiro, Cap. 15; Robbins & Cotran, Cap. 17",
    keyTakeaway: "Apêndice cecal projeta-se do ceco, na porção inicial do intestino grosso."
  },
  {
    id: "dig-39",
    subjectId: "digestorio",
    subtopic: "Placas de Peyer & GALT",
    difficulty: "Médio",
    question: "As placas de Peyer são aglomerados de folículos linfoides pertencentes ao tecido linfoide associado ao intestino (GALT), abundantes sobretudo no:",
    options: [
      "Íleo",
      "Esôfago proximal",
      "Fundo gástrico",
      "Canal anal"
    ],
    correctIndex: 0,
    explanation: "O íleo possui a maior concentração de placas de Peyer na sua lâmina própria e submucosa. As células M especializadas cobrindo as placas transportam antígenos luminais por transcitose para apresentar a linfócitos e macrófagos, induzindo síntese de anticorpos IgA secretores.",
    officialReference: "Silverthorn, Cap. 21; Junqueira & Carneiro, Cap. 14",
    keyTakeaway: "Placas de Peyer = aglomerados de tecido imune GALT predominantes no íleo."
  },
  {
    id: "dig-40",
    subjectId: "digestorio",
    subtopic: "Absorção de Ferro",
    difficulty: "Difícil",
    question: "O ferro dietético não-heme (Fe3+) precisa ser reduzido a ferro ferroso (Fe2+) no duodeno para ser absorvido pelo enterócito através de qual transportador apical?",
    options: [
      "DMT1 (Transportador de Metais Divalentes 1)",
      "Ferroportina basolateral",
      "Transferrina sérica",
      "Canais ENaC de sódio"
    ],
    correctIndex: 0,
    explanation: "O citocromo b duodenal (Dcytb) na borda em escova reduz Fe3+ em Fe2+, que é então captado pelo DMT1 acoplado a prótons. A ferroportina na membrana basolateral exporta o Fe2+ para o sangue, onde a hepcidina atua como o principal hormônio regulador degradando a ferroportina.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 33",
    keyTakeaway: "Fe2+ é absorvido no duodeno pelo transportador DMT1 e exportado pela ferroportina."
  },
  {
    id: "dig-41",
    subjectId: "digestorio",
    subtopic: "GIP e GLP-1 (Incretinas)",
    difficulty: "Médio",
    question: "Os hormônios incretínicos GLP-1 (Glucagon-Like Peptide-1) e GIP (Polipeptídeo Inibidor Gástrico), liberados pelo intestino delgado na presença de glicose, têm o papel fisiológico de:",
    options: [
      "Antecipar e amplificar a secreção de insulina pelas células beta pancreáticas antes mesmo da elevação maciça da glicemia",
      "Reduzir a pressão arterial induzindo choque",
      "Paralisar a secreção salivar",
      "Transformar glicogênio em gordura no estômago"
    ],
    correctIndex: 0,
    explanation: "O 'efeito incretina' explica por que a glicose ingerida por via oral causa secreção de insulina muito maior do que a mesma dose injetada por via endovenosa. GLP-1 e GIP estimulam as células beta do pâncreas e retardam o esvaziamento gástrico.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 79",
    keyTakeaway: "Incretinas (GLP-1 e GIP) potencializam a secreção precoce de insulina pós-prandial."
  },
  {
    id: "dig-42",
    subjectId: "digestorio",
    subtopic: "H. pylori e Úlcera Péptica",
    difficulty: "Médio",
    question: "A bactéria Helicobacter pylori consegue colonizar o ambiente hostil do estômago humano porque produz em abundância qual enzima neutralizadora de ácido?",
    options: [
      "Urease, que hidrolisa a ureia em amônia (NH3) e bicarbonato, criando uma nuvem protetora alcalina ao seu redor",
      "Amilase salivar resistente ao calor",
      "Pepsina recombinante",
      "Lactato desidrogenase tóxica"
    ],
    correctIndex: 0,
    explanation: "A urease da H. pylori gera amônia (alcalina), tamponando o microambiente ácido peri-bacteriano. A amônia e citotoxinas (CagA, VacA) degradam a camada de muco, provocando gastrite crônica ativa, úlceras duodenais e gástricas.",
    officialReference: "Robbins & Cotran, Cap. 17; Guyton & Hall, Cap. 65",
    keyTakeaway: "H. pylori sobrevive à acidez produzindo urease, que gera amônia protetora."
  },
  {
    id: "dig-43",
    subjectId: "digestorio",
    subtopic: "Vômito (Êmese)",
    difficulty: "Médio",
    question: "O centro coordenador do reflexo do vômito e a zona de gatilho quimiorreceptora (CTZ) localizam-se no:",
    options: [
      "Bulbo (tronco encefálico), na área postrema no assoalho do quarto ventrículo",
      "Córtex pré-frontal motor",
      "Hipotálamo anterior",
      "Amígdala temporal"
    ],
    correctIndex: 0,
    explanation: "A área postrema no bulbo é desprovida de barreira hematoencefálica íntegra, permitindo que a zona de gatilho quimiorreceptora (CTZ) detecte toxinas circulantes, fármacos e quimioterápicos no sangue, disparando a cascata motora do vômito.",
    officialReference: "Guyton & Hall, Cap. 66; Silverthorn, Cap. 21",
    keyTakeaway: "Centro do vômito e CTZ localizam-se na área postrema do bulbo."
  },
  {
    id: "dig-44",
    subjectId: "digestorio",
    subtopic: "Trânsito Gastrointestinal",
    difficulty: "Fácil",
    question: "O esfíncter pilórico regula a passagem intermitente de pequenas porções de quimo entre quais dois compartimentos?",
    options: [
      "Do estômago (antro) para o duodeno",
      "Do esôfago para o estômago",
      "Do íleo para o ceco",
      "Da vesícula biliar para o colédoco"
    ],
    correctIndex: 0,
    explanation: "O piloro é um anel espesso de músculo liso circular que separa o antro gástrico da primeira porção do duodeno. Ele impede o esvaziamento de partículas maiores que 1 a 2 mm, forçando a retropulsão e trituração do alimento no estômago.",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Esfíncter pilórico controla o fluxo calibrado do estômago para o duodeno."
  },
  {
    id: "dig-45",
    subjectId: "digestorio",
    subtopic: "Acidez Gástrica e Parasitas",
    difficulty: "Fácil",
    question: "Além da função digestiva, o pH extremamente ácido do estômago atua como uma barreira inata primária de defesa ao:",
    options: [
      "Desnaturar e destruir a imensa maioria dos microrganismos e bactérias ingeridos junto aos alimentos",
      "Oxigenar as hemácias do sangue portal",
      "Aumentar a multiplicação de parasitas benéficos",
      "Revestir os dentes com esmalte protetor"
    ],
    correctIndex: 0,
    explanation: "O ambiente gástrico com pH 1.5-2.0 esteriliza o conteúdo gástrico, destruindo bactérias invasoras e inviabilizando vírus e parasitas sensíveis à acidez, constituindo um dos pilares da imunidade inata do hospedeiro.",
    officialReference: "Guyton & Hall, Cap. 65; Abbas - Imunologia Celular e Molecular, Cap. 4",
    keyTakeaway: "Acidez gástrica esteriliza o alimento e atua como barreira inata antimicrobiana."
  },
  {
    id: "dig-46",
    subjectId: "digestorio",
    subtopic: "Absorção de Água",
    difficulty: "Médio",
    question: "Dos cerca de 9 a 10 litros diários de fluidos que entram no trato gastrointestinal (líquidos ingeridos + secreções salivares, gástricas, biliares, pancreáticas e intestinais), onde é absorvida a maior fração absoluta?",
    options: [
      "No intestino delgado (cerca de 7 a 8 litros)",
      "No estômago (cerca de 6 litros)",
      "No esôfago",
      "Na cavidade bucal"
    ],
    correctIndex: 0,
    explanation: "Embora o cólon seja muito eficiente na dessecação das fezes (absorve ~1.5 a 1.9 L de 2 L que chegam a ele), a maior quantidade absoluta de água é absorvida no intestino delgado (especialmente jejuno), acompanhando a absorção maciça de nutrientes e Na+.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "A maior quantidade absoluta de água (~80%) é absorvida no intestino delgado."
  },
  {
    id: "dig-47",
    subjectId: "digestorio",
    subtopic: "Digestão de Proteínas",
    difficulty: "Médio",
    question: "A digestão final de oligopeptídeos em dipeptídeos, tripeptídeos e aminoácidos livres antes da absorção é realizada por enzimas localizadas:",
    options: [
      "Na borda em escova dos enterócitos (aminopeptidases e dipeptidil peptidases) e peptidases citoplasmáticas",
      "Exclusivamente no esôfago",
      "Pela bile na vesícula biliar",
      "Pelos neurônios do plexo mioentérico"
    ],
    correctIndex: 0,
    explanation: "As proteases pancreáticas clivam proteínas em pequenos fragmentos na luz intestinal. Na superfície dos enterócitos, enzimas da membrana quebram esses peptídeos; o transportador PepT1 absorve di e tripeptídeos que são convertidos em aminoácidos livres por peptidases intracelulares.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Peptidases da borda em escova e citosólicas completam a digestão proteica."
  },
  {
    id: "dig-48",
    subjectId: "digestorio",
    subtopic: "Reflexo Gastrointestinal Longo",
    difficulty: "Médio",
    question: "O reflexo gastrocólico é uma resposta autonômica comum que se manifesta clinicamente como:",
    options: [
      "Aumento das ondas peristálticas e motilidade no cólon logo após a entrada de comida no estômago, estimulando a evacuação",
      "Contração dolorosa do esôfago ao beber água fria",
      "Fechamento da traqueia durante o sono",
      "Aumento imediato da salivação antes de deitar"
    ],
    correctIndex: 0,
    explanation: "A distensão do estômago e a presença de gorduras e gastrina deflagram o reflexo gastrocólico através do sistema nervoso autônomo, provocando contrações em massa no cólon transverso e descendente que empurram o conteúdo para o reto.",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Reflexo gastrocólico = distensão estomacal estimula motilidade e evacuação no cólon."
  },
  {
    id: "dig-49",
    subjectId: "digestorio",
    subtopic: "Esôfago de Barrett",
    difficulty: "Médio",
    question: "No refluxo gastroesofágico crônico grave, a substituição do epitélio estratificado pavimentoso esofágico por epitélio colunar simples mucoso com células caliciformes é denominada:",
    options: [
      "Metaplasia de Barrett (Esôfago de Barrett)",
      "Hiperplasia linfoide amigdaliana",
      "Acalásia idiopática",
      "Divertículo de Zenker"
    ],
    correctIndex: 0,
    explanation: "A exposição contínua ao ácido e bile provoca lesão cáustica no epitélio escamoso esofágico. O tecido repara-se sofrendo metaplasia colunar intestinalizada (Esôfago de Barrett), condição pré-maligna que eleva o risco de adenocarcinoma esofágico.",
    officialReference: "Robbins & Cotran, Cap. 17; Guyton & Hall, Cap. 66",
    keyTakeaway: "Esôfago de Barrett = metaplasia colunar em resposta ao refluxo ácido crônico."
  },
  {
    id: "dig-50",
    subjectId: "digestorio",
    subtopic: "Fígado & Desaminação de Aminoácidos",
    difficulty: "Médio",
    question: "O fígado protege o encéfalo contra a toxidade da amônia gerada no metabolismo de aminoácidos convertendo-a em qual composto excretado na urina?",
    options: [
      "Ureia (através do ciclo da ureia nos hepatócitos)",
      "Ácido clorídrico concentrado",
      "Bilirrubina direta insolúvel",
      "Gás metano volátil"
    ],
    correctIndex: 0,
    explanation: "A amônia (NH3) é altamente neurotóxica. Os hepatócitos executam o Ciclo da Ornitina/Ureia (Krebs-Henseleit), combinando NH3 e CO2 para sintetizar ureia neutra e hidrossolúvel, que é liberada no sangue e filtrada pelos rins.",
    officialReference: "Lehninger, Cap. 18; Guyton & Hall, Cap. 70",
    keyTakeaway: "Fígado converte a amônia tóxica em ureia através do ciclo da ureia."
  },
  {
    id: "dig-51",
    subjectId: "digestorio",
    subtopic: "Acalásia",
    difficulty: "Médio",
    question: "A doença caracterizada por disfagia motora progressiva devido à perda de neurônios inibitórios do plexo mioentérico e incapacidade de relaxamento do esfíncter esofágico inferior é a:",
    options: [
      "Acalásia (megaesôfago, frequente no Brasil na Doença de Chagas)",
      "Gastrite atrófica autoimune",
      "Doença de Crohn terminal",
      "Pancreatite crônica obstrutiva"
    ],
    correctIndex: 0,
    explanation: "Na acalásia, a destruição imunomediada ou parasitária (Trypanosoma cruzi na fase crônica) dos neurônios ganglionares do plexo de Auerbach priva o esfíncter esofágico inferior de NO e VIP, impedindo seu relaxamento na deglutição e dilatando o esôfago à montante.",
    officialReference: "Robbins & Cotran, Cap. 17; Guyton & Hall, Cap. 66",
    keyTakeaway: "Acalásia = falta de relaxamento do esfíncter esofágico inferior e aperistaltismo."
  },
  {
    id: "dig-52",
    subjectId: "digestorio",
    subtopic: "Válvula Ileocecal",
    difficulty: "Fácil",
    question: "A válvula ileocecal separa o íleo terminal do ceco e exerce a função crítica de:",
    options: [
      "Evitar o refluxo do conteúdo fecal e das bactérias do cólon para o intestino delgado estéril",
      "Secretar ptialina para digerir amido no cólon",
      "Filtrar as hemácias senescentes do reto",
      "Produzir ácido gástrico"
    ],
    correctIndex: 0,
    explanation: "A válvula e o esfíncter ileocecal fecham-se quando a pressão no ceco sobe, bloqueando estritamente o refluxo fecal. Isso impede que a microbiota abundante do intestino grosso colonize o íleo e jejuno, prevenindo supercrescimento bacteriano no intestino delgado (SIBO).",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Válvula ileocecal impede o refluxo de fezes e bactérias do cólon para o íleo."
  },
  {
    id: "dig-53",
    subjectId: "digestorio",
    subtopic: "Secreção Ácida Gástrica",
    difficulty: "Médio",
    question: "A bomba responsável pela secreção de prótons para o lúmen estomacal contra um gradiente de 1 milhão de vezes é a:",
    options: [
      "H+/K+ ATPase da membrana apical da célula parietal (alvo farmacológico dos prazóis como omeprazol)",
      "Bomba de Na+/K+ da membrana basolateral",
      "Bomba Ca2+ ATPase da vesícula biliar",
      "Trocador de glicose e sódio SGLT1"
    ],
    correctIndex: 0,
    explanation: "A H+/K+ ATPase (bomba de prótons) na membrana luminal das células parietais bombeia H+ para a luz gástrica em troca de K+, com gasto de ATP. Os inibidores de bomba de prótons (IBPs como omeprazol, pantoprazol) ligam-se covalentemente aos resíduos de cisteína da bomba, inibindo irreversivelmente a secreção ácida basal e estimulada.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "H+/K+ ATPase na célula parietal secreta HCl e é inibida irreversivelmente pelos prazóis."
  },
  {
    id: "dig-54",
    subjectId: "digestorio",
    subtopic: "Regulação da Célula Parietal",
    difficulty: "Difícil",
    question: "A secreção de HCl pelas células parietais é diretamente estimulada por três secretagogos principais que atuam em seus receptores específicos:",
    options: [
      "Histamina (receptores H2 acoplados a Gs/AMPc), Gastrina (receptores CCK-B via Gq/Ca2+) e Acetilcolina (receptores M3 via Gq/Ca2+)",
      "Somatostatina, Secretina e Glucagon",
      "Insulina, Adrenalina e Dopamina",
      "Serotonina, GABA e Encefalina"
    ],
    correctIndex: 0,
    explanation: "A histamina é liberada pelas células enterocromafim-símiles (ECL) e ativa receptores H2 (via Gs e AMPc). A gastrina (células G) e a acetilcolina (nervo vago pós-ganglionar) ativam receptores CCK-B e M3, elevando o Ca2+ citosólico. Essa combinação atua em sinergia marcante (potenciação), multiplicando a secreção de ácido gástrico.",
    officialReference: "Guyton & Hall, Cap. 64; Berne & Levy, Cap. 27",
    keyTakeaway: "3 estimuladores parietais: Histamina (H2/AMPc) + Gastrina (CCK-B/Ca2+) + Acetilcolina (M3/Ca2+)."
  },
  {
    id: "dig-55",
    subjectId: "digestorio",
    subtopic: "Feedback Inibitório Gástrico",
    difficulty: "Médio",
    question: "Quando o pH gástrico atinge valores excessivamente ácidos (<2,0), qual hormônio parácrino é liberado pelas células D do antro para frear a secreção gástrica?",
    options: [
      "Somatostatina (inibindo as células G e células ECL)",
      "Colecistoquinina (CCK)",
      "Motilina",
      "VIP (Peptídeo Intestinal Vasoativo)"
    ],
    correctIndex: 0,
    explanation: "As células D do antro e corpo gástrico monitoram a acidez luminal. Quando o pH cai abaixo de 2-3, elas liberam somatostatina, que atua por via parácrina ligando-se a receptores acoplados a Gi nas células G (bloqueando a liberação de gastrina) e nas células parietais (inibindo a adenilato ciclase), prevenindo autodigestão ácida da mucosa.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 64",
    keyTakeaway: "Células D secretam somatostatina em pH ácido para inibir a gastrina e frear o HCl."
  },
  {
    id: "dig-56",
    subjectId: "digestorio",
    subtopic: "Secreção Pancreática e CFTR",
    difficulty: "Difícil",
    question: "Na Fibrose Cística, o muco pancreático espesso e a insuficiência exócrina decorrem de mutações no gene CFTR, que codifica um canal de:",
    options: [
      "Cloreto (Cl-) na membrana apical dos ductos pancreáticos, essencial para a reciclagem de Cl- e secreção de bicarbonato (HCO3-) e água",
      "Potássio voltagem-dependente nos ácinos",
      "Sódio epitelial (ENaC) ativado por aldosterona",
      "Cálcio operado por voltagem nos ilhéus de Langerhans"
    ],
    correctIndex: 0,
    explanation: "O trocador apical de ânions Cl-/HCO3- depende do canal CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) para reciclar o Cl- de volta ao lúmen. Na fibrose cística, a ausência de transporte funcional de Cl- impede a secreção de bicarbonato e água, tornando as secreções ductais viscosas e desidratadas, entupindo os ductos pancreáticos e gerando atrofia fibrocística acinar.",
    officialReference: "Robbins & Cotran, Cap. 10; Boron & Boulpaep, Cap. 43",
    keyTakeaway: "CFTR é um canal de Cl- apical crucial para a secreção aquosa de bicarbonato pancreático."
  },
  {
    id: "dig-57",
    subjectId: "digestorio",
    subtopic: "Ativação de Zimogênios Pancreáticos",
    difficulty: "Médio",
    question: "O pâncreas exócrino secreta suas enzimas proteolíticas na forma de proenzimas inativas (zimogênios) para evitar autodigestão. O 'gatilho mestre' fisiológico que ativa todos os zimogênios no duodeno é a:",
    options: [
      "Enteropeptidase (enterocinase) da borda em escova duodenal, que cliva o tripsinogênio em tripsina ativa",
      "Ptialina salivar ao atingir o quimo",
      "Bile desidratada pelos hepatócitos",
      "Amilase pancreática"
    ],
    correctIndex: 0,
    explanation: "A enteropeptidase (enterocinase), uma enzima fixada na membrana apical dos enterócitos duodenais, reconhece e cliva um hexapeptídeo do tripsinogênio, convertendo-o em tripsina ativa. A tripsina livre atua então em cascata proteolítica, ativando as outras enzimas (quimotripsinogênio, pró-carboxipeptidase, pró-elastase) e o próprio tripsinogênio (autocatálise).",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Enteropeptidase duodenal ativa o tripsinogênio em tripsina, que dispara a cascata digestiva."
  },
  {
    id: "dig-58",
    subjectId: "digestorio",
    subtopic: "Efeito Incretina",
    difficulty: "Médio",
    question: "A ingestão oral de glicose provoca uma secreção de insulina significativamente maior do que a mesma quantidade de glicose infundida por via intravenosa. Esse fenômeno é o 'efeito incretina', mediado por:",
    options: [
      "GLP-1 (liberado pelas células L do íleo) e GIP (liberado pelas células K do duodeno e jejuno)",
      "Somatostatina e glucagon",
      "Secretina e gastrina exclusivamente",
      "Colecistoquinina e histamina"
    ],
    correctIndex: 0,
    explanation: "O efeito incretina responde por 50 a 70% da secreção total de insulina pós-prandial. As incretinas GLP-1 (Glucagon-Like Peptide-1) e GIP (Glucose-Dependent Insulinotropic Polypeptide) são liberadas no sangue assim que os nutrientes atingem o intestino e ligam-se às células beta pancreáticas, potencializando a liberação de insulina de forma dependente da glicemia.",
    officialReference: "Silverthorn, Cap. 22; Guyton & Hall, Cap. 79",
    keyTakeaway: "Efeito incretina: GLP-1 e GIP intestinais potencializam a secreção de insulina após refeições."
  },
  {
    id: "dig-59",
    subjectId: "digestorio",
    subtopic: "Digestão e Absorção de Lipídios",
    difficulty: "Médio",
    question: "Após a hidrólise dos triglicerídeos pela lipase pancreática e colipase, os produtos lipídicos (ácidos graxos livres e 2-monoacilgliceróis) penetram nos enterócitos através de:",
    options: [
      "Micelas mistas formadas por sais biliares e fosfolipídios que atravessam a camada de água não agitada até a membrana apical",
      "Canais de cálcio operados por voltagem",
      "Pinocitose de grandes gotas de gordura bruta sem digestão",
      "Fagocitose por macrófagos da submucosa"
    ],
    correctIndex: 0,
    explanation: "Os produtos da digestão lipídica são insolúveis em água. Os sais biliares anfipáticos os empacotam em minúsculos agregados de 4 a 7 nm chamados micelas mistas. Essas micelas difundem-se através da camada de água parada na superfície dos enterócitos e liberam os lipídios para se difundirem livremente através da membrana plasmática lipídica.",
    officialReference: "Guyton & Hall, Cap. 65; Silverthorn, Cap. 21",
    keyTakeaway: "Micelas de sais biliares transportam lipídios hidrofóbicos até a borda em escova do enterócito."
  },
  {
    id: "dig-60",
    subjectId: "digestorio",
    subtopic: "Montagem de Quilomícrons",
    difficulty: "Difícil",
    question: "Dentro do retículo endoplasmático do enterócito, os lipídios são ressintetizados em triglicerídeos e empacotados com a apolipoproteína B-48 para formar:",
    options: [
      "Quilomícrons, que são exocitados para os vasos linfáticos centrais (lácteos) das vilosidades",
      "Gotas de glicogênio armazenadas no citoplasma",
      "Moléculas de HDL expelidas na urina",
      "Glicoproteínas secretadas na bile"
    ],
    correctIndex: 0,
    explanation: "Os ácidos graxos e monoglicerídeos são reesterificados no RE liso do enterócito, associados a colesterol e fosfolipídios e recobertos pela ApoB-48, formando os quilomícrons. Devido ao seu grande diâmetro (~100-500 nm), eles não conseguem penetrar os poros dos capilares sanguíneos, entrando pelas fenestrações largas dos capilares linfáticos (vasos lácteos) que drenam no ducto torácico.",
    officialReference: "Guyton & Hall, Cap. 65; Berne & Levy, Cap. 29",
    keyTakeaway: "Quilomícrons contêm ApoB-48 e são absorvidos pela via linfática (vasos lácteos), não venosa."
  },
  {
    id: "dig-61",
    subjectId: "digestorio",
    subtopic: "Circulação Entero-hepática de Sais Biliares",
    difficulty: "Médio",
    question: "Cerca de 95% dos sais biliares secretados na bile são reabsorvidos e retornam ao fígado via veia porta. Essa reabsorção ativa ocorre predominantemente em qual segmento intestinal?",
    options: [
      "Íleo terminal (via cotransportador apical Na+/ácido biliar - ASBT)",
      "Estômago proximal",
      "Duodeno descendente",
      "Reto e canal anal"
    ],
    correctIndex: 0,
    explanation: "O pool total de sais biliares (~3 a 5 g) circula de 4 a 12 vezes ao dia entre fígado e intestino. No íleo terminal, o transportador ASBT (Apical Sodium-dependent Bile acid Transporter) reabsorve ativamente os sais biliares conjugados, que retornam ao fígado pela veia porta (circulação entero-hepática). Ressecções ileais na Doença de Crohn interrompem esse ciclo, causando esteatorreia e diarreia colerética.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Circulação entero-hepática: 95% dos sais biliares são reabsorvidos ativamente no íleo terminal."
  },
  {
    id: "dig-62",
    subjectId: "digestorio",
    subtopic: "Absorção de Vitamina B12",
    difficulty: "Médio",
    question: "A absorção fisiológica da cobalamina (vitamina B12) requer a ligação ao Fator Intrínseco produzido pelas células parietais gástricas e a subsequente endocitose mediada pelo receptor cubilina no:",
    options: [
      "Íleo terminal",
      "Esôfago médio",
      "Fundo gástrico",
      "Cólon descendente"
    ],
    correctIndex: 0,
    explanation: "No estômago, a B12 liga-se à haptocorrina; no duodeno, as proteases pancreáticas degradam a haptocorrina e a B12 liga-se ao Fator Intrínseco (FI). Esse complexo resistente B12-FI viaja até o íleo terminal, onde se liga ao receptor cubilina-amnionless e é internalizado por endocitose. Gastrectomia ou ileíte causam anemia megaloblástica por má absorção de B12.",
    officialReference: "Guyton & Hall, Cap. 65; Berne & Levy, Cap. 29",
    keyTakeaway: "Vitamina B12 exige Fator Intrínseco gástrico e é absorvida exclusivamente no íleo terminal."
  },
  {
    id: "dig-63",
    subjectId: "digestorio",
    subtopic: "Homeostase e Absorção de Ferro",
    difficulty: "Difícil",
    question: "O principal hormônio hepático que regula negativamente a absorção sistêmica de ferro, promovendo a degradação da ferroportina nas células intestinais e macrófagos, é a:",
    options: [
      "Hepcidina",
      "Transferrina",
      "Ferritina",
      "Eritropoietina"
    ],
    correctIndex: 0,
    explanation: "A hepcidina é sintetizada pelo fígado em resposta à sobrecarga de ferro ou inflamação sistêmica (IL-6). Ela liga-se ao único exportador de ferro conhecido dos mamíferos, a ferroportina, induzindo sua internalização e degradação lisossômica. Sem ferroportina, o ferro fica retido dentro dos enterócitos e macrófagos, resultando na anemia das doenças crônicas.",
    officialReference: "Guyton & Hall, Cap. 33; Robbins & Cotran, Cap. 14",
    keyTakeaway: "Hepcidina degrada a ferroportina, bloqueando a liberação de ferro para a corrente sanguínea."
  },
  {
    id: "dig-64",
    subjectId: "digestorio",
    subtopic: "Complexo Motor Migratório (MMC)",
    difficulty: "Médio",
    question: "Durante o jejum interdigestivo, ondas de contração peristáltica vigorosas varrem o estômago e intestino delgado a cada 90-120 minutos ('faxina digestiva'). Esse padrão motor é o:",
    options: [
      "Complexo Motor Migratório (MMC), desencadeado pelo hormônio motilina",
      "Reflexo gastrocólico mediado por gastrina",
      "Movimento antiperistáltico do vômito",
      "Segmentação rítmica pós-prandial"
    ],
    correctIndex: 0,
    explanation: "O Complexo Motor Migratório (MMC) consiste em quatro fases cíclicas durante o jejum. A fase III apresenta contrações luminais fortes que empurram restos alimentares não digeridos, muco e bactérias em direção ao cólon, impedindo a estase e a proliferação bacteriana. Sua periodicidade é coordenada pelo sistema nervoso entérico e picos do hormônio motilina (células M).",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 63",
    keyTakeaway: "MMC é a onda peristáltica de 'limpeza' do jejum, coordenada por motilina."
  },
  {
    id: "dig-65",
    subjectId: "digestorio",
    subtopic: "Proteção da Mucosa Gástrica e AINEs",
    difficulty: "Fácil",
    question: "O uso crônico de anti-inflamatórios não esteroidais (AINEs como ibuprofeno e cetoprofeno) é uma causa frequente de úlceras pépticas porque esses medicamentos inibem:",
    options: [
      "A enzima Cicloxigenase-1 (COX-1), reduzindo a síntese de prostaglandinas protetoras (PGE2 e PGI2) que estimulam muco e bicarbonato",
      "A absorção de água no intestino grosso",
      "A secreção de saliva pelas glândulas parótidas",
      "A motilidade do esfíncter anal externo"
    ],
    correctIndex: 0,
    explanation: "As prostaglandinas E2 e I2 (produzidas constitutivamente pela COX-1) são os principais defensores da barreira gástrica: inibem a adenilato ciclase da célula parietal (reduzem HCl), estimulam a secreção de muco espesso e bicarbonato pelas células mucosas e promovem vasodilatação na microcirculação submucosa. AINEs bloqueiam a COX-1, deixando a mucosa vulnerável à autodigestão pelo ácido.",
    officialReference: "Guyton & Hall, Cap. 64; Goodman & Gilman, Cap. 34",
    keyTakeaway: "AINEs inibem COX-1 e diminuem prostaglandinas protetoras, gerando úlceras gástricas."
  },
  {
    id: "dig-66",
    subjectId: "digestorio",
    subtopic: "Ação da Colecistoquinina (CCK)",
    difficulty: "Fácil",
    question: "A chegada de quimo rico em gorduras e proteínas ao duodeno estimula a liberação de Colecistoquinina (CCK) pelas células I, promovendo fisiologicamente:",
    options: [
      "Contração vigorosa da vesícula biliar e relaxamento simultâneo do esfíncter de Oddi, permitindo a liberação de bile e enzimas",
      "Aceleração extrema do esvaziamento gástrico",
      "Inibição da secreção de enzimas acinares pancreáticas",
      "Fechamento do esfíncter esofágico superior"
    ],
    correctIndex: 0,
    explanation: "A CCK exerce dupla ação coordenada sobre as vias biliares: contrai a musculatura lisa da vesícula biliar através de receptores CCK-A e relaxa o esfíncter de Oddi (na ampola hepatopancreática) mediado por VIP e óxido nítrico, garantindo que a bile concentrada e o suco pancreático enzimático fluam para a luz duodenal.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "CCK contrai a vesícula biliar e relaxa o esfíncter de Oddi para ejetar bile no duodeno."
  },
  {
    id: "dig-67",
    subjectId: "digestorio",
    subtopic: "Ação da Secretina",
    difficulty: "Fácil",
    question: "A secretina, sintetizada pelas células S do duodeno e jejuno, é ativada quando o pH do quimo cai abaixo de 4,5 e tem como alvo principal:",
    options: [
      "As células ductais pancreáticas e biliares, estimulando secreção copiosa de suco aquoso rico em bicarbonato (HCO3-) para neutralizar o ácido",
      "A musculatura estomacal, forçando contrações pilóricas imediatas",
      "As células beta pancreáticas para liberar glucagon",
      "A glândula tireoide para aumentar a taxa de iodo"
    ],
    correctIndex: 0,
    explanation: "A secretina atua como o 'antiácido da natureza'. Quando o quimo ácido sai do estômago e entra no duodeno (pH < 4,5), as células S liberam secretina. Esta estimula as células epiteliais ductais do pâncreas e dos colangiócitos via AMPc a secretarem um fluido rico em bicarbonato (HCO3-) que neutraliza o ácido gástrico e permite a atuação ideal das enzimas digestivas duodenais.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Secretina estimula células ductais pancreáticas a liberarem bicarbonato para neutralizar o quimo."
  },
  {
    id: "dig-68",
    subjectId: "digestorio",
    subtopic: "Digestão de Carboidratos na Borda em Escova",
    difficulty: "Fácil",
    question: "A lactose (açúcar do leite) é digerida na borda em escova do enterócito pela enzima lactase, sendo quebrada em:",
    options: [
      "Uma molécula de Glicose e uma molécula de Galactose",
      "Duas moléculas de Frutose",
      "Uma molécula de Glicose e uma molécula de Maltose",
      "Ácidos graxos livres e glicerol"
    ],
    correctIndex: 0,
    explanation: "A lactase (beta-galactosidase) é uma dissacaridase inserida na membrana microvilositária da borda em escova do intestino delgado apical. Ela hidrolisa a ligação beta-1,4-glicosídica da lactose, gerando os monossacarídeos absorvíveis glicose e galactose, que são então captados pelo transportador SGLT1.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Lactase hidrolisa a lactose em glicose + galactose na borda em escova."
  },
  {
    id: "dig-69",
    subjectId: "digestorio",
    subtopic: "Microbiota e Ácidos Graxos de Cadeia Curta",
    difficulty: "Médio",
    question: "As bactérias anaeróbias da microbiota colônica fermentam fibras alimentares não digeríveis gerando Ácidos Graxos de Cadeia Curta (AGCC). O butirato é de fundamental importância porque:",
    options: [
      "É o principal combustível energético primário utilizado pelos colonócitos, promovendo a integridade da barreira intestinal e exercendo ação anti-inflamatória",
      "Bloqueia a absorção de água gerando diarreia osmótica intencional",
      "Inibe a síntese de hemoglobina pelo fígado",
      "Converte carboidratos em colágeno nos vasos mesentéricos"
    ],
    correctIndex: 0,
    explanation: "A fermentação bacteriana de polissacarídeos não amiláceos no ceco e cólon produz os AGCCs acetato, propionato e butirato. O butirato fornece cerca de 70% de toda a energia oxidativa consumida pelas células epiteliais do cólon (colonócitos), induzindo a diferenciação celular, fortalecendo junções oclusivas e inibindo a histona desacetilase (efeito antineoplásico e protetor).",
    officialReference: "Silverthorn, Cap. 21; Berne & Levy, Cap. 30",
    keyTakeaway: "Butirato é o principal combustível dos colonócitos e preserva a barreira epitelial colônica."
  },
  {
    id: "dig-70",
    subjectId: "digestorio",
    subtopic: "Reflexo da Defecação",
    difficulty: "Fácil",
    question: "O reflexo intrínseco da defecação é deflagrado pela distensão mecânica das paredes do reto. A continência fecal voluntária depende do controle consciente sobre:",
    options: [
      "O Esfíncter Anal Externo (formado por músculo esquelético estriado e inervado pelo nervo pudendo somático)",
      "O Esfíncter Anal Interno exclusivamente",
      "A válvula ileocecal",
      "O esfíncter pilórico gástrico"
    ],
    correctIndex: 0,
    explanation: "A distensão da ampola retal pelas fezes dispara o reflexo mioentérico da defecação e o reflexo parassimpático sacral, relaxando o esfíncter anal interno (involuntário, de músculo liso). O esfíncter anal externo, por ser composto de músculo estriado esquelético inervado pelo nervo pudendo somático (S2-S4), permanece sob controle voluntário cortical até que a defecação seja socialmente oportuna.",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Esfíncter anal interno é involuntário (músculo liso); esfíncter anal externo é voluntário (nervo pudendo)."
  },
  {
    id: "dig-71",
    subjectId: "digestorio",
    subtopic: "Fisiologia da Célula Parietal Gástrica",
    difficulty: "Difícil",
    question: "A secreção ácida gástrica (HCl) pela H+/K+-ATPase da célula parietal é ativada por três vias agonistas convergentes. Qual é a correlação correta entre o agonista, seu receptor e a via de transdução intracelular?",
    options: [
      "Histamina (receptor H2, acoplado a Gs -> adenilato ciclase -> cAMP -> PKA); Acetilcolina (receptor M3, acoplado a Gq -> PLC -> IP3/Ca2+); Gastrina (receptor CCK2, acoplado a Gq -> PLC -> IP3/Ca2+)",
      "Histamina ativa receptores H1 acoplados a Gi inibindo a secreção",
      "Acetilcolina atua exclusivamente via receptores nicotínicos abrindo poros de potássio",
      "A gastrina atua como inibidor direto da bomba de prótons apical"
    ],
    correctIndex: 0,
    explanation: "A célula parietal gástrica responde sinergicamente a: 1) Histamina (liberada pelas células ECL parácrinas) via receptor H2, elevando cAMP via Gs; 2) Acetilcolina (liberada por neurônios vagais pós-ganglionares) via receptor M3 acoplado a Gq, elevando Ca2+ citosólico; 3) Gastrina (hormônio das células G antrais) via receptor CCK2/CCK-B acoplado a Gq, elevando Ca2+. A somatostatina (células D) atua em sentido oposto ligando-se ao receptor SST2 acoplado a Gi, reduzindo o cAMP e freando a secreção.",
    officialReference: "Guyton & Hall, Cap. 64; Goodman & Gilman, Cap. 45",
    keyTakeaway: "Célula parietal: Histamina (H2-cAMP) potencializa Acetilcolina (M3-Ca2+) e Gastrina (CCK2-Ca2+) para ativar a H+/K+-ATPase."
  },
  {
    id: "dig-72",
    subjectId: "digestorio",
    subtopic: "Absorção de Vitamina B12 (Cobalamina)",
    difficulty: "Médio",
    question: "Na fisiologia gástrica e intestinal da vitamina B12 (cobalamina), o sítio anatômico exclusivo de sua absorção e os mediadores moleculares obrigatórios desse processo são:",
    options: [
      "Íleo terminal, dependente da ligação da cobalamina ao Fator Intrínseco de Castle (secretado pelas células parietais) e captação pelo complexo receptor apical Cubilina-Amnionless (Cubam)",
      "Antro gástrico, por endocitose direta mediada por gastrina",
      "Duodeno proximal, através do transportador de glicose SGLT1",
      "Cólon ascendente, mediado pela microflora bacteriana"
    ],
    correctIndex: 0,
    explanation: "A vitamina B12 liga-se inicialmente à haptocorrina (proteína R da saliva e estômago). No duodeno, as proteases pancreáticas hidrolisam a haptocorrina, permitindo que a B12 se associe ao Fator Intrínseco (glicoproteína sintetizada pelas células parietais gástricas). O complexo B12-Fator Intrínseco resiste à digestão enzimática e viaja intacto até o íleo terminal, onde se liga ao receptor específico Cubilina-Amnionless para sofrer endocitose mediada por receptor.",
    officialReference: "Guyton & Hall, Cap. 66; Harrison - Medicina Interna, Cap. 95",
    keyTakeaway: "Vitamina B12 exige Fator Intrínseco (das células parietais) e é absorvida exclusivamente no íleo terminal (via Cubilina)."
  },
  {
    id: "dig-73",
    subjectId: "digestorio",
    subtopic: "Circulação Entero-Hepática de Sais Biliares",
    difficulty: "Difícil",
    question: "Cerca de 95% do pool total de sais biliares conjugados secretados na bile são reabsorvidos e recirculados de volta ao fígado. O principal sítio anatômico e transportador responsável por essa reabsorção ativa é:",
    options: [
      "Íleo terminal, mediado pelo cotransportador apical de sódio-ácido biliar ASBT (ou IBAT)",
      "Fundo gástrico, mediado por pepsinogênio",
      "Bulbo duodenal, mediado por canais de cloro CFTR",
      "Reto e canal anal, por difusão facilitada pura"
    ],
    correctIndex: 0,
    explanation: "Os sais biliares conjugados (glicoconjugados e tauroconjugados) são moléculas anfipáticas com carga negativa no pH entérico, impossibilitando sua absorção por difusão simples no jejuno. Eles realizam a digestão lipídica ao longo do delgado e, ao alcançarem o íleo terminal, são ativamente recaptados pelo transportador apical ASBT (Apical Sodium-dependent Bile acid Transporter), caem na veia porta e são recaptados pelos hepatócitos via NTCP, completando a circulação entero-hepática.",
    officialReference: "Silverthorn, Cap. 21; Berne & Levy, Fisiologia Gastrointestinal",
    keyTakeaway: "Circulação entero-hepática: 95% dos sais biliares são ativamente reabsorvidos no íleo terminal via ASBT/IBAT."
  },
  {
    id: "dig-74",
    subjectId: "digestorio",
    subtopic: "Colecistoquinina (CCK) e Esvaziamento Biliar",
    difficulty: "Médio",
    question: "A ingestão de uma refeição rica em lipídios e peptídeos no duodeno estimula a secreção do hormônio Colecistoquinina (CCK) pelas Células I da mucosa. As duas principais ações fisiológicas integradas da CCK no trato biliar e pancreático são:",
    options: [
      "Contração vigorosa da musculatura lisa da vesícula biliar acompanhada do relaxamento coordenado do Esfíncter de Oddi, e estimulação da secreção de zimogênios enzimáticos pelos ácinos pancreáticos",
      "Relaxamento da vesícula biliar e fechamento espástico da ampola de Vater",
      "Estimulação maciça da secreção ácida gástrica pelas células principais",
      "Inibição de todas as enzimas lipolíticas na luz do jejuno"
    ],
    correctIndex: 0,
    explanation: "A CCK exerce efeitos digestivos cruciais: liga-se a receptores CCK1 (CCK-A) na musculatura lisa da vesícula biliar (e em neurônios vagais motores), provocando sua contração peristáltica; simultaneamente, induz o relaxamento reflexo do Esfíncter de Oddi (mediado por liberação parácrina de VIP e NO), permitindo a ejeção de bile rica em sais para o duodeno. No pâncreas, ativa as células acinares para secretar amilase, lipase e proteases.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "CCK (células I duodenais): contrai a vesícula biliar, relaxa o esfíncter de Oddi e estimula enzimas acinares pancreáticas."
  },
  {
    id: "dig-75",
    subjectId: "digestorio",
    subtopic: "Secretina e Secreção Pancreática Hidroeletrolítica",
    difficulty: "Difícil",
    question: "Quando o quimo ácido gástrico (pH < 4,5) atinge o duodeno, as Células S epiteliais secretam Secretina no sangue. Como a secretina atua nas células ductais pancreáticas?",
    options: [
      "Liga-se a receptores acoplados a Gs, eleva o cAMP e ativa a proteína quinase A (PKA), que abre o canal apical de cloro CFTR; a reciclagem de Cl- impulsiona o trocador apical Cl-/HCO3-, gerando um suco pancreático aquoso rico em bicarbonato que neutraliza a acidez duodenal",
      "Ativa a secreção de ácido clorídrico concentrado para acelerar a quebra enzimática",
      "Bloqueia a síntese de tripsina nas ilhotas de Langerhans",
      "Estimula a contração isométrica do duodeno impedindo o trânsito do quimo"
    ],
    correctIndex: 0,
    explanation: "A secretina é o 'antiácido hormonal' natural do corpo. Estimulada pelo pH ácido luminal no duodeno, ela viaja pela corrente sanguínea e ativa receptores nas células dos ductos pancreáticos e biliares. O aumento intracelular de cAMP fosforila e abre o canal de cloro CFTR na membrana luminal. O Cl- ejetado pelo CFTR é imediatamente trocado por HCO3- citosólico via trocador aniônico apical SLC26A6, secretando até 140 mEq/L de bicarbonato aquoso para elevar o pH duodenal a ~7,0-8,0, ideal para a ação das enzimas pancreáticas.",
    officialReference: "Guyton & Hall, Cap. 64; Berne & Levy, Cap. 28",
    keyTakeaway: "Secretina (células S): ativada por ácido -> estimula células ductais pancreáticas via CFTR/cAMP a secretar suco rico em HCO3-."
  },
  {
    id: "dig-76",
    subjectId: "digestorio",
    subtopic: "Complexo Motor Migratório (CMM)",
    difficulty: "Médio",
    question: "O Complexo Motor Migratório (CMM) é um padrão eletromecânico cíclico de motilidade gastrointestinal que ocorre durante o estado de jejum (período interdigestivo). Sua função fisiológica primordial e o hormônio deflagrador de sua Fase III são:",
    options: [
      "Funcionar como uma 'vassoura mecânica' que varre resíduos alimentares não digeridos, células descamadas e bactérias do estômago e delgado em direção ao cólon, prevenindo o supercrescimento bacteriano (SIBO); deflagrado pela Motilina",
      "Acelerar a absorção de glicose pura pelo epitélio gástrico mediado por glucagon",
      "Manter o esfíncter esofágico inferior permanentemente relaxado para liberar gases",
      "Paralisar completamente a musculatura lisa gastrointestinal por até 24 horas"
    ],
    correctIndex: 0,
    explanation: "O CMM ocorre a cada 90-120 minutos entre as refeições no estado interdigestivo, consistindo em três fases: Fase I (quiescência motora), Fase II (contrações irregulares) e Fase III (rajadas coordenadas de contrações peristálticas de grande amplitude que se propagam do antro gástrico até o íleo terminal). A Fase III é deflagrada pelo pico plasmático do hormônio peptídico Motilina (secretado pelas células M duodenais). Sua ausência favorece a Síndrome de Supercrescimento Bacteriano no Intestino Delgado (SIBO).",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "CMM (Fase III mediada pela Motilina): 'vassoura motora' no jejum que previne supercrescimento bacteriano (SIBO)."
  },
  {
    id: "dig-77",
    subjectId: "digestorio",
    subtopic: "Barreira Mucosa Gástrica e AINEs",
    difficulty: "Médio",
    question: "O uso prolongado de anti-inflamatórios não esteroidais (AINEs tradicionais, como naproxeno ou cetoprofeno) é uma causa frequente de gastrite erosiva e úlceras pépticas. O mecanismo fisiopatológico primário dessa lesão reside na:",
    options: [
      "Inibição da enzima ciclo-oxigenase-1 (COX-1) na mucosa gástrica, suprimindo a síntese de prostaglandinas citoprotetoras (PGE2 e PGI2) que estimulam a secreção de muco e bicarbonato e mantêm o fluxo sanguíneo submucoso",
      "Estimulação direta da secreção de pepsina pelas células parietais",
      "Destruição autoimune dos receptores de gastrina no antro",
      "Inativação bacteriana do Helicobacter pylori no bulbo duodenal"
    ],
    correctIndex: 0,
    explanation: "A integridade da barreira mucosa gástrica depende estritamente das prostaglandinas locais E2 (PGE2) e I2 (prostaciclina), sintetizadas constitutivamente pela COX-1. As prostaglandinas: 1) estimulam a exocitose de muco viscoso e íons bicarbonato pelas células mucosas foveolares; 2) mantêm a vasodilatação e o fluxo microvascular submucoso para nutrir o epitélio e remover prótons que vazam; 3) inibem tonicamente a secreção ácida parietal. A inibição da COX-1 pelos AINEs colapsa essa tríade protetora, permitindo a retrodifusão de H+ e necrose tecidual.",
    officialReference: "Goodman & Gilman, Cap. 34; Guyton & Hall, Cap. 66",
    keyTakeaway: "AINEs inibem COX-1 -> suprimem PGE2/PGI2 -> colapso de muco, bicarbonato e fluxo sanguíneo -> úlcera péptica."
  },
  {
    id: "dig-78",
    subjectId: "digestorio",
    subtopic: "Digestão e Absorção de Lipídios",
    difficulty: "Difícil",
    question: "Após a hidrólise dos triglicerídeos da dieta pela lipase pancreática e colipase na luz intestinal, como os ácidos graxos livres e monoglicerídeos são processados e exportados pelos enterócitos para a circulação sistêmica?",
    options: [
      "Difundem através da membrana apical, são reesterificados em triglicerídeos no retículo endoplasmático liso do enterócito, empacotados em Quilomícrons com a apolipoproteína B-48 e exocitados nos Vasos Linfáticos Quilíferos",
      "São secretados diretamente na veia porta em forma de ácidos graxos livres insolúveis",
      "São convertidos em glicogênio intracelular e armazenados nos vilos",
      "São hidrolisados em gás metano e eliminados pela respiração"
    ],
    correctIndex: 0,
    explanation: "Na luz intestinal, os lipídios são emulsionados em micelas mistas (com sais biliares e fosfolipídios). Ao tocarem o glicocálice enterocitário, os ácidos graxos de cadeia longa e 2-monoglicerídeos difundem-se ou entram por transportadores (CD36/FATP4). No retículo endoplasmático liso, a enzima DGAT ressintetiza os triglicerídeos, que recebem a apolipoproteína B-48 (sintetizada exclusivamente pelo intestino delgado) para formar os quilomícrons. Devido ao grande diâmetro (100-500 nm), os quilomícrons não penetram as fenestras capilares sanguíneas, caindo nas fendas dos capilares linfáticos lácteos (vasos quilíferos) em direção ao ducto torácico.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Lipídios são remontados em triglicerídeos no enterócito, envelopados com ApoB-48 em Quilomícrons e caem na linfa (quilíferos)."
  },
  {
    id: "dig-79",
    subjectId: "digestorio",
    subtopic: "Homeostase de Ferro e Hepcidina",
    difficulty: "Difícil",
    question: "A absorção intestinal de ferro não-heme e sua liberação na circulação sistêmica dependem de um eixo regulador chave. O hormônio peptídico hepático Hepcidina regula os estoques corporais de ferro através de qual mecanismo celular?",
    options: [
      "Liga-se ao transportador basolateral de ferro Ferroportina-1 nos enterócitos e macrófagos, induzindo sua internalização e degradação lisossômica, bloqueando a saída de ferro para o plasma",
      "Inibe a redutase férrica apical Dcytb impedindo a captação gástrica de ferro heme",
      "Estimula a síntese de transferrina na medula óssea",
      "Acelera a excreção renal de ferritina na urina"
    ],
    correctIndex: 0,
    explanation: "A ferroportina é o único canal conhecido de exportação de ferro intracelular para o plasma presente em enterócitos duodenais basolaterais, hepatócitos e macrófagos do sistema reticuloendotelial. Quando o ferro corporal está abundante ou há inflamação sistêmica (estimulada por IL-6), o fígado secreta hepcidina. A hepcidina liga-se à ferroportina, promovendo sua fosforilação, endocitose e destruição por proteólise. Sem ferroportina viável, o ferro fica retido dentro das células e a sideremia despenca (fisiopatologia da Anemia de Doença Crônica / Inflamação).",
    officialReference: "Harrison - Medicina Interna, Cap. 93; Guyton & Hall, Cap. 33",
    keyTakeaway: "Hepcidina (hormônio hepático) degrada a Ferroportina, impedindo a exportação de ferro e reduzindo o ferro plasmático."
  },
  {
    id: "dig-80",
    subjectId: "digestorio",
    subtopic: "Hormônios Incretínicos (GLP-1 e GIP)",
    difficulty: "Médio",
    question: "O 'Efeito Incretina' descreve o fenômeno fisiológico pelo qual uma carga de glicose administrada por via oral desencadeará uma secreção de insulina pelas células beta pancreáticas muito mais potente do que a mesma quantidade de glicose infundida por via intravenosa. Esse efeito é mediado principalmente por:",
    options: [
      "GLP-1 (Glucagon-Like Peptide-1, secretado pelas Células L do íleo/cólon) e GIP (Glucose-Dependent Insulinotropic Polypeptide, pelas Células K do duodeno/jejuno)",
      "Adrenalina e glucagon secretados pelo córtex adrenal",
      "Tiroxina (T4) e tri-iodotironina (T3) da tireoide",
      "Vasopressina e ocitocina hipotalâmicas"
    ],
    correctIndex: 0,
    explanation: "O contato luminal dos nutrientes da dieta com as células enteroendócrinas desencadeia a secreção rápida de GLP-1 (células L) e GIP (células K). Esses hormônios incretínicos ligam-se a receptores específicos acoplados a Gs nas células beta das ilhotas pancreáticas, amplificando acentuadamente a exocitose de insulina de forma dependente da glicose (somente quando a glicemia está elevada, evitando hipoglicemia). O GLP-1 também inibe a secreção de glucagon, retarda o esvaziamento gástrico e atua no hipotálamo induzindo saciedade.",
    officialReference: "Goodman & Gilman, Cap. 43; Guyton & Hall, Cap. 78",
    keyTakeaway: "Efeito Incretina: GLP-1 (células L) e GIP (células K) potenciam a secreção de insulina glicose-dependente pós-prandial."
  },
  {
    id: "dig-81",
    subjectId: "digestorio",
    subtopic: "Marca-Passo Gastrointestinal e Células de Cajal",
    difficulty: "Difícil",
    question: "As Células Intersticiais de Cajal (ICC), distribuídas no interior das camadas musculares do trato gastrointestinal, são responsáveis por:",
    options: [
      "Gerar o Ritmo Elétrico Básico (BER ou Ondas Lentas), despolarizações rítmicas oscilatórias espontâneas que ditam a frequência máxima teórica de contração peristáltica em cada segmento do tubo digestivo",
      "Secretar ácido clorídrico durante a noite",
      "Fagocitar bactérias que atravessam as placas de Peyer",
      "Inervar voluntariamente as cordas vocais"
    ],
    correctIndex: 0,
    explanation: "As células de Cajal atuam como os 'nós sinoatriais' do trato gastrointestinal. Elas possuem condutâncias iônicas oscilatórias intrínsecas (canais de cálcio e cloreto ativados por cálcio, como o canal Ano1/TMEM16A) que produzem ondas lentas sub-limiares de despolarização espontânea (ex.: 3 ciclos/min no estômago, 12 ciclos/min no duodeno, 8-9 ciclos/min no íleo). Quando neurotransmissores excitatórios (ACh, substância P) superimpõem seu efeito sobre essas ondas lentas, atinge-se o limiar para o disparo de potenciais de ação em espícula, gerando contração mecânica.",
    officialReference: "Guyton & Hall, Cap. 63; Silverthorn, Cap. 21",
    keyTakeaway: "Células Intersticiais de Cajal geram as Ondas Lentas (marca-passo miogênico intrínseco do trato gastrointestinal)."
  },
  {
    id: "dig-82",
    subjectId: "digestorio",
    subtopic: "Metabolismo Hepático da Bilirrubina",
    difficulty: "Médio",
    question: "A degradação do anel heme das hemácias senescentes produz bilirrubina não conjugada (indireta). No fígado, a enzima microssomal responsável por converter a bilirrubina lipossolúvel em diglicuronídeo de bilirrubina hidrossolúvel para excreção biliar é a:",
    options: [
      "UDP-glicuronosiltransferase 1A1 (UGT1A1)",
      "Alanina aminotransferase (ALT)",
      "Fosfatase alcalina óssea",
      "Amilase pancreática terminal"
    ],
    correctIndex: 0,
    explanation: "A bilirrubina indireta (não conjugada, lipossolúvel e tóxica) circula ligada à albumina sérica, entra no hepatócito via carreadores OATP1B1/B3 e é conjugada no retículo endoplasmático pela enzima UGT1A1 com duas moléculas de ácido glicurônico. A bilirrubina conjugada resultante (direta, solúvel em água) é ativamente secretada no canalículo biliar contra forte gradiente pela bomba transportadora MRP2 (ABCC2). Mutações com redução parcial na UGT1A1 causam a benigna Síndrome de Gilbert.",
    officialReference: "Robbins - Patologia Básica, Cap. 18; Guyton & Hall, Cap. 70",
    keyTakeaway: "UGT1A1 hepática conjuga bilirrubina indireta em glicuronídeo solúvel para excreção biliar via MRP2."
  },
  {
    id: "dig-83",
    subjectId: "digestorio",
    subtopic: "Fisiopatologia da Acalasia",
    difficulty: "Médio",
    question: "A Acalasia primária do esôfago é um distúrbio motor caracterizado por aperistalse do corpo esofágico e falha no relaxamento do Esfíncter Esofágico Inferior (EEI). A alteração neurofisiológica responsável por esse quadro consiste na:",
    options: [
      "Perda ou degeneração seletiva dos neurônios pós-ganglionares inibitórios do plexo mioentérico de Auerbach que sintetizam Óxido Nítrico (NO) e Peptídeo Intestinal Vasoativo (VIP)",
      "Hipertrofia exclusiva das fibras estriadas do terço proximal do esôfago",
      "Deficiência congênita de receptores colinérgicos muscarínicos no fundo gástrico",
      "Aumento na produção de secretina pelas células principais do cárdia"
    ],
    correctIndex: 0,
    explanation: "No esôfago normal, a deglutição desencadeia peristaltismo primário e relaxamento imediato do EEI, mediado pela liberação de neurotransmissores inibitórios (NO e VIP) originados de interneurônios do plexo mioentérico de Auerbach. Na acalasia (e na Doença de Chagas com megaesôfago por Trypanosoma cruzi), há destruição desses neurônios inibitórios no plexo mioentérico, mantendo o tônus colinérgico excitatório sem oposição (hipertonia e não relaxamento do EEI e dilatação esofágica a montante).",
    officialReference: "Harrison - Medicina Interna, Cap. 317; Guyton & Hall, Cap. 63",
    keyTakeaway: "Acalasia: destruição dos neurônios inibitórios de NO/VIP do plexo de Auerbach impede o relaxamento do EEI."
  },
  {
    id: "dig-84",
    subjectId: "digestorio",
    subtopic: "Transportadores de Carboidratos Entéricos",
    difficulty: "Difícil",
    question: "Na absorção de carboidratos através da membrana do enterócito duodeno-jejunal, o monossacarídeo Frutose é captado no polo apical e exportado no polo basolateral respectivamente pelos seguintes transportadores:",
    options: [
      "GLUT5 apical (por difusão facilitada pura, independente de Na+) e GLUT2 basolateral",
      "SGLT1 apical acoplado a 2 íons Na+ e SGLT2 basolateral",
      "Bomba de prótons H+/K+ apical e canal de sódio ENaC basolateral",
      "Endocitose mediada por clatrina em ambos os polos"
    ],
    correctIndex: 0,
    explanation: "A absorção dos monossacarídeos é compartimentada: 1) Glicose e Galactose utilizam o cotransportador ativo secundário dependente de sódio SGLT1 na membrana apical (movidas pelo gradiente eletroquímico de Na+ gerado pela Na+/K+-ATPase); 2) A Frutose entra no polo apical via transportador seletivo GLUT5 por difusão facilitada (sem gasto de ATP e sem sódio); 3) No polo basolateral voltado para o sangue capilar da veia porta, os três monossacarídeos (glicose, galactose e frutose) saem em conjunto por difusão facilitada através do transportador GLUT2.",
    officialReference: "Silverthorn, Cap. 21; Guyton & Hall, Cap. 65",
    keyTakeaway: "Frutose entra no enterócito via GLUT5 apical (sem Na+) e sai para o sangue via GLUT2 basolateral."
  },
  {
    id: "dig-85",
    subjectId: "digestorio",
    subtopic: "Cascata de Ativação Enzimática Pancreática",
    difficulty: "Médio",
    question: "Para evitar a autodigestão precoce do pâncreas, as proteases pancreáticas são sintetizadas e empacotadas em grânulos de zimogênio sob forma inativa. O evento gatilho obrigatório que deflagra a ativação de toda a cascata proteolítica no lúmen duodenal é:",
    options: [
      "A clivagem proteolítica do tripsinogênio em tripsina ativa pela enzima Enteropeptidase (enteroquinase), ancorada no bordo em escova da mucosa duodenal",
      "O contato direto do tripsinogênio com a bile na vesícula biliar",
      "A autoativação instantânea das enzimas sob a ação da amilase salivar ácida",
      "A absorção passiva de quimotripsinogênio pelos vasos quilíferos"
    ],
    correctIndex: 0,
    explanation: "O pâncreas exócrino secreta precursores enzimáticos inativos (tripsinogênio, quimotripsinogênio, pró-carboxipeptidase, pró-elastase). Ao desembocarem no duodeno, o tripsinogênio entra em contato com a Enteropeptidase (anteriormente chamada enteroquinase), uma glicoproteína transmembrana expressa exclusivamente na membrana apical dos enterócitos da borda em escova. A enteropeptidase cliva uma pequena porção hexapeptídica do tripsinogênio, gerando Tripsina ativa. Uma vez formada, a tripsina cliva autocataliticamente mais tripsinogênio e ativa todos os demais zimogênios pancreáticos.",
    officialReference: "Guyton & Hall, Cap. 64; Silverthorn, Cap. 21",
    keyTakeaway: "Enteropeptidase do bordo em escova duodenal cliva o tripsinogênio em Tripsina, que ativa todos os demais zimogênios."
  }
];

