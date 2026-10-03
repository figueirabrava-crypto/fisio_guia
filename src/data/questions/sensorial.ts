import { Question } from "../../types";

export const SENSORIAL_QUESTIONS: Question[] = [
  {
    id: "sen-01",
    subjectId: "sensorial",
    subtopic: "Transdução Sensorial",
    difficulty: "Fácil",
    question: "O processo fundamental pelo qual um receptor biológico converte uma energia ambiental (luminosa, mecânica, térmica ou química) em sinal elétrico neural denomina-se:",
    options: [
      "Transdução sensorial",
      "Condução saltatória",
      "Exocitose mediada",
      "Filtração osmótica"
    ],
    correctIndex: 0,
    explanation: "Conforme ilustrado no infográfico oficial: Estímulo (energia do ambiente) -> Receptor (converte em sinal) -> Nervo sensorial (transporta o impulso) -> Cérebro (interpreta). A transdução sensorial consiste na conversão do estímulo físico/químico em potencial receptor (graduado).",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 47",
    keyTakeaway: "Transdução sensorial = conversão de energia ambiental em sinal elétrico celular."
  },
  {
    id: "sen-02",
    subjectId: "sensorial",
    subtopic: "Visão & Fotorreceptores",
    difficulty: "Fácil",
    question: "Na retina humana, os cones e os bastonetes desempenham funções visuais distintas. É correto afirmar que:",
    options: [
      "Cones são responsáveis pela visão em cores e alta acuidade em ambientes iluminados; bastonetes são responsáveis pela visão em baixa luminosidade (visão noturna/escotópica)",
      "Bastonetes detectam cores primárias e cones enxergam apenas em tons de cinza",
      "Cones concentram-se na periferia da retina e bastonetes situam-se exclusivamente na fóvea central",
      "Ambos possuem a mesma sensibilidade à luz e utilizam a mesma fotopsina"
    ],
    correctIndex: 0,
    explanation: "Os cones (cerca de 6 milhões) contêm três tipos de opsinas (vermelho, verde e azul) e concentram-se na fóvea para visão detalhada diurna (fotópica). Os bastonetes (cerca de 120 milhões) contêm rodopsina de altíssima sensibilidade à luz, permitindo enxergar no escuro.",
    officialReference: "Guyton & Hall, Cap. 50 e 51; Silverthorn, Cap. 10",
    keyTakeaway: "Cones = cores e nitidez foveal; Bastonetes = visão noturna escotópica sensível."
  },
  {
    id: "sen-03",
    subjectId: "sensorial",
    subtopic: "Fototransdução",
    difficulty: "Difícil",
    question: "Ao contrário da maioria dos neurônios que se despolarizam quando estimulados, os fotorreceptores da retina (bastonetes e cones), quando atingidos pela luz:",
    options: [
      "Hiperpolarizam-se e reduzem a liberação do neurotransmissor glutamato",
      "Despolarizam-se vigorosamente disparando potenciais de ação de alta frequência",
      "Aumentam a concentração intracelular de GMP cíclico (GMPc)",
      "Abrem canais de sódio e cálcio mediados por calor"
    ],
    correctIndex: 0,
    explanation: "No escuro, altos níveis de GMPc mantêm canais de Na+/Ca2+ abertos ('corrente de escuro'), mantendo o fotorreceptor despolarizado (~ -40 mV). A luz ativa a rodopsina que estimula a transducina e a fosfodiesterase (PDE). A PDE degrada o GMPc, os canais de Na+ fecham-se e a célula se hiperpolariza (~ -70 mV), reduzindo a liberação de glutamato.",
    officialReference: "Kandel, Cap. 26; Guyton & Hall, Cap. 51",
    keyTakeaway: "A luz fecha canais de Na+ (via degradação de GMPc) hiperpolarizando o fotorreceptor."
  },
  {
    id: "sen-04",
    subjectId: "sensorial",
    subtopic: "Audição & Células Ciliadas",
    difficulty: "Fácil",
    question: "Onde estão localizadas as células ciliadas responsáveis pela transdução mecanoelétrica dos sons na orelha interna?",
    options: [
      "No Órgão de Corti, situado sobre a membrana basilar dentro da cóclea",
      "No meato acústico externo aderidas ao cerúmen",
      "Dentro da tuba auditiva que conecta à faringe",
      "No tímpano junto aos ossículos martelo e bigorna"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: Audição (Ouvido externo, Ouvido médio, Ouvido interno, Células ciliadas). O órgão de Corti localiza-se na escala média da cóclea. Suas células ciliadas possuem estereocílios que se defletem contra a membrana tectorial quando a onda sonora faz vibrar a perilinfa e a endolinfa.",
    officialReference: "Guyton & Hall, Cap. 53; Silverthorn, Cap. 10",
    keyTakeaway: "Órgão de Corti na cóclea = transdução auditiva pelas células ciliadas."
  },
  {
    id: "sen-05",
    subjectId: "sensorial",
    subtopic: "Audição & Endolinfa",
    difficulty: "Médio",
    question: "A despolarização das células ciliadas da cóclea é atípica porque ocorre pelo influxo rápido de qual íon, abundante na endolinfa?",
    options: [
      "Potássio (K+)",
      "Sódio (Na+)",
      "Cloreto (Cl-)",
      "Bicarbonato (HCO3-)"
    ],
    correctIndex: 0,
    explanation: "A endolinfa que banha os estereocílios possui uma composição iônica incomum para fluidos extracelulares: é rica em K+ (~150 mM) e possui potencial elétrico positivo (+80 mV gerado pela estria vascular). A deflexão dos estereocílios abre canais mecanosensíveis e o K+ entra na célula a favor do gradiente elétrico, despolarizando-a.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 53",
    keyTakeaway: "A despolarização auditiva das células ciliadas ocorre por influxo de K+ da endolinfa."
  },
  {
    id: "sen-06",
    subjectId: "sensorial",
    subtopic: "Ouvido Médio & Ossículos",
    difficulty: "Médio",
    question: "A cadeia ossicular da orelha média (martelo, bigorna e estribo) desempenha a função mecânica indispensável de:",
    options: [
      "Casamento de impedância e amplificação da pressão sonora do ar para o meio líquido da cóclea",
      "Filtrar frequências muito altas para que não alcancem o cérebro",
      "Produzir endolinfa para preencher a cóclea",
      "Secretar neurotransmissores diretamente para o nervo vestibulococlear"
    ],
    correctIndex: 0,
    explanation: "A impedância acústica do líquido coclear é muito superior à do ar. Os ossículos atuam como uma alavanca mecânica que, combinada à diferença de área entre a membrana timpânica (maior) e a janela oval (menor), amplifica a pressão do som em cerca de 22 vezes.",
    officialReference: "Guyton & Hall, Cap. 53; Silverthorn, Cap. 10",
    keyTakeaway: "Ossículos = casamento de impedância e amplificação de pressão acústica para a cóclea."
  },
  {
    id: "sen-07",
    subjectId: "sensorial",
    subtopic: "Equilíbrio Vestibular",
    difficulty: "Fácil",
    question: "No aparelho vestibular da orelha interna, os três canais semicirculares são especializados na detecção de:",
    options: [
      "Aceleração angular e rotação da cabeça nos três planos do espaço",
      "Aceleração linear e gravidade estática em linha reta",
      "Frequências sonoras agudas de instrumentos musicais",
      "Temperatura do ar que entra pelas vias aéreas"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: Equilíbrio (Labirinto vestibular, Canais semicirculares, Otólitos). Os canais semicirculares (anterior, posterior e horizontal) contêm cristas ampulares com cúpula gelatinosa que é defletida pela inércia da endolinfa quando giramos a cabeça.",
    officialReference: "Guyton & Hall, Cap. 56; Silverthorn, Cap. 10",
    keyTakeaway: "Canais semicirculares = rotação / aceleração angular da cabeça."
  },
  {
    id: "sen-08",
    subjectId: "sensorial",
    subtopic: "Equilíbrio & Otólitos",
    difficulty: "Médio",
    question: "Os órgãos otolíticos (sáculo e utrículo) possuem cristais de carbonato de cálcio (otólitos) embebidos em membrana gelatinosa e detectam:",
    options: [
      "Aceleração linear (para frente/trás, cima/baixo) e posição da cabeça em relação à gravidade",
      "Vibrações sonoras acima de 20.000 Hz",
      "Odores voláteis que penetram pela nasofaringe",
      "Intensidade luminosa periférica"
    ],
    correctIndex: 0,
    explanation: "A inércia dos cristais pesados de carbonato de cálcio (otólitos) faz deslizar a membrana otolítica sobre a mácula do utrículo (plano horizontal) e do sáculo (plano vertical), defletindo os cílios ao acelerar em um carro ou elevador e informando a gravidade constante.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 56",
    keyTakeaway: "Sáculo e Utrículo com otólitos = gravidade e aceleração linear."
  },
  {
    id: "sen-09",
    subjectId: "sensorial",
    subtopic: "Olfato",
    difficulty: "Fácil",
    question: "Os receptores olfatórios localizados na mucosa olfatória do teto da cavidade nasal são histologicamente:",
    options: [
      "Neurônios bipolares que possuem cílios com receptores acoplados à proteína Golf e sofrem renovação contínua",
      "Células epiteliais desprovidas de axônio que fazem sinapse com linfócitos",
      "Receptores térmicos desprovidos de membrana fosfolipídica",
      "Fibras musculares modificadas que vibram na passagem do ar"
    ],
    correctIndex: 0,
    explanation: "Os neurônios receptores olfatórios são neurônios verdadeiros que projetam seus axônios pela lâmina cribriforme do osso etmoide até o bulbo olfatório. Eles são notáveis por serem uma das poucas populações de neurônios que se regeneram ao longo da vida adulta.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 54",
    keyTakeaway: "Receptores olfatórios = neurônios bipolares renováveis que vão ao bulbo olfatório."
  },
  {
    id: "sen-10",
    subjectId: "sensorial",
    subtopic: "Paladar & Sabores Primários",
    difficulty: "Fácil",
    question: "Quais são as cinco modalidades gustativas primárias reconhecidas pela neurofisiologia sensorial?",
    options: [
      "Doce, Salgado, Azedo (ácido), Amargo e Umami",
      "Doce, Salgado, Picante, Metálico e Adstringente",
      "Cítrico, Gorduroso, Frio, Quente e Amargo",
      "Ácido, Doce, Apimentado, Salgado e Fermentado"
    ],
    correctIndex: 0,
    explanation: "As cinco sensações gustativas básicas são: doce (carboidratos calóricos), salgado (íons Na+), azedo/ácido (íons H+), amargo (alcaloides potencialmente tóxicos) e umami (glutamato monossódico e aspartato, sabor de aminoácidos/proteínas). A picância é dor/ardência mediada pelo nervo trigêmeo (receptores TRPV1).",
    officialReference: "Guyton & Hall, Cap. 54; Silverthorn, Cap. 10",
    keyTakeaway: "5 sabores primários = Doce, Salgado, Azedo, Amargo e Umami."
  },
  {
    id: "sen-11",
    subjectId: "sensorial",
    subtopic: "Inervação do Paladar",
    difficulty: "Médio",
    question: "A sensibilidade gustativa dos dois terços anteriores da língua e do terço posterior é conduzida respectivamente por quais pares cranianos?",
    options: [
      "Nervo Facial (NC VII) nos 2/3 anteriores e Nervo Glossofaríngeo (NC IX) no 1/3 posterior",
      "Nervo Trigêmeo (NC V) nos 2/3 anteriores e Nervo Vago (NC X) no 1/3 posterior",
      "Nervo Hipoglosso (NC XII) em toda a extensão da língua",
      "Nervo Olfatório (NC I) nos 2/3 anteriores e Nervo Óptico (NC II) no terço posterior"
    ],
    correctIndex: 0,
    explanation: "Os botões gustativos dos 2/3 anteriores da língua são inervados pelo nervo corda do tímpano (ramo do NC VII - Facial); o 1/3 posterior (incluindo papilas circunvaladas) é inervado pelo NC IX (Glossofaríngeo). A base da língua e epiglote são inervadas pelo NC X (Vago).",
    officialReference: "Guyton & Hall, Cap. 54; Silverthorn, Cap. 10",
    keyTakeaway: "Paladar 2/3 anterior = Nervo Facial (VII); 1/3 posterior = Glossofaríngeo (IX)."
  },
  {
    id: "sen-12",
    subjectId: "sensorial",
    subtopic: "Fóvea Central",
    difficulty: "Fácil",
    question: "A fóvea central da retina representa o ponto de maior acuidade visual do olho humano porque:",
    options: [
      "Contém densidade máxima de cones compactados e as camadas de células sobrejacentes são deslocadas lateralmente, minimizando a dispersão da luz",
      "É o local onde emerge o nervo óptico e não há fotorreceptores",
      "Possui abundância de bastonetes gigantes para visão no escuro",
      "É revestida por melanina que reflete a luz como um espelho"
    ],
    correctIndex: 0,
    explanation: "Na fóvea (~0,33 mm no centro da mácula), a convergência neural é mínima (quase 1 cone para 1 célula ganglionar), e as células bipolares e ganglionares são afastadas para os lados, permitindo que a luz atinja diretamente os cones sem distorção.",
    officialReference: "Guyton & Hall, Cap. 50; Silverthorn, Cap. 10",
    keyTakeaway: "Fóvea = ponto focal de máxima nitidez visual, povoado densamente por cones."
  },
  {
    id: "sen-13",
    subjectId: "sensorial",
    subtopic: "Ponto Cego",
    difficulty: "Fácil",
    question: "O ponto cego (disco óptico) da retina não detecta nenhuma imagem porque:",
    options: [
      "É a área de saída dos axônios das células ganglionares para formar o nervo óptico, sendo desprovida de fotorreceptores",
      "Sofre isquemia contínua devido à falta de artérias na região",
      "Contém apenas melanócitos densos impermeáveis aos fótons",
      "É preenchido por ar em vez de humor vítreo"
    ],
    correctIndex: 0,
    explanation: "O disco óptico é a 'papila' onde mais de 1 milhão de axônios das células ganglionares convergem para formar o nervo óptico (NC II) e onde entram os vasos centrais da retina. Não há cones nem bastonetes nesse local.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 50",
    keyTakeaway: "Ponto cego = emergência do nervo óptico, onde não existem fotorreceptores."
  },
  {
    id: "sen-14",
    subjectId: "sensorial",
    subtopic: "Acomodação Visual",
    difficulty: "Médio",
    question: "Para focar objetos próximos (visão de perto), o músculo ciliar e o cristalino atuam da seguinte forma:",
    options: [
      "O músculo ciliar se contrai, as fibras da zônula relaxam e o cristalino assume formato mais esférico e convexo (maior poder dióptrico)",
      "O músculo ciliar relaxa, as fibras da zônula se esticam e o cristalino fica completamente plano",
      "A córnea aumenta de espessura empurrando a íris para a frente",
      "A pupila dilata-se ao máximo para permitir entrada de luz difusa"
    ],
    correctIndex: 0,
    explanation: "Na acomodação para perto (estímulo parassimpático via NC III), a contração do anel muscular ciliar reduz a tensão sobre os ligamentos suspensores (zônula de Zinn). A cápsula elástica do cristalino retrai-se espontaneamente, tornando-o mais curvo e convergente.",
    officialReference: "Guyton & Hall, Cap. 50; Silverthorn, Cap. 10",
    keyTakeaway: "Foco para perto: músculo ciliar contrai -> zônula afrouxa -> cristalino fica mais convexo."
  },
  {
    id: "sen-15",
    subjectId: "sensorial",
    subtopic: "Presbiopia",
    difficulty: "Fácil",
    question: "A presbiopia ('vista cansada'), comum a partir dos 40-45 anos, é causada por:",
    options: [
      "Perda progressiva da elasticidade natural do cristalino e rigidez da cápsula, dificultando a acomodação para perto",
      "Degeneração das células ciliadas da cóclea",
      "Atrofia congênita dos bastonetes periféricos",
      "Crescimento de tecido ósseo sobre a córnea"
    ],
    correctIndex: 0,
    explanation: "Com o envelhecimento, as fibras proteicas do cristalino sofrem desnaturação e endurecimento progressivo, perdendo a capacidade de arredondar-se quando a zônula relaxa. Exige uso de lentes convexas corretivas para leitura.",
    officialReference: "Guyton & Hall, Cap. 50; Silverthorn, Cap. 10",
    keyTakeaway: "Presbiopia = enrijecimento do cristalino com perda da acomodação para objetos próximos."
  },
  {
    id: "sen-16",
    subjectId: "sensorial",
    subtopic: "Miopia e Hipermetropia",
    difficulty: "Médio",
    question: "Na miopia e na hipermetropia axiais, a imagem de um objeto distante é focada, respectivamente:",
    options: [
      "Antes da retina na miopia (globo ocular longo); atrás da retina na hipermetropia (globo ocular curto)",
      "Atrás da retina na miopia; exatamente na fóvea na hipermetropia",
      "Na córnea em ambos os casos",
      "No nervo óptico na miopia; no cristalino na hipermetropia"
    ],
    correctIndex: 0,
    explanation: "No míope, o olho é longo demais ou a refração é excessiva, de modo que os raios paralelos convergem antes de atingir a retina (corrigido com lentes divergentes/côncavas). No hipermétrope, o olho é curto e a imagem foca atrás da retina (corrigido com lentes convergentes).",
    officialReference: "Guyton & Hall, Cap. 50; Silverthorn, Cap. 10",
    keyTakeaway: "Miopia: foco antes da retina (lente côncava); Hipermetropia: foco atrás da retina (lente convexa)."
  },
  {
    id: "sen-17",
    subjectId: "sensorial",
    subtopic: "Tonotopia Coclear",
    difficulty: "Médio",
    question: "A membrana basilar da cóclea possui propriedades mecânicas variáveis ao longo de sua extensão (tonotopia), o que permite discriminar as frequências sonoras da seguinte maneira:",
    options: [
      "Sons de alta frequência (agudos) vibram a base estreita e rígida; sons de baixa frequência (graves) vibram o ápice largo e flexível (helicotrema)",
      "Sons graves vibram a base da cóclea e agudos o ápice",
      "Todas as frequências vibram exclusivamente o centro da cóclea",
      "Sons agudos estimulam apenas os canais semicirculares"
    ],
    correctIndex: 0,
    explanation: "A base da membrana basilar (perto da janela oval) é estreita e rígida, ressonando com vibrações rápidas de alta frequência (sons agudos até 20.000 Hz). O ápice próximo ao helicotrema é cinco vezes mais largo e cem vezes mais maleável, ressonando com frequências baixas (graves até 20 Hz).",
    officialReference: "Guyton & Hall, Cap. 53; Silverthorn, Cap. 10",
    keyTakeaway: "Tonotopia: base coclear = sons agudos; ápice coclear = sons graves."
  },
  {
    id: "sen-18",
    subjectId: "sensorial",
    subtopic: "Via Visual & Quiasma Óptico",
    difficulty: "Difícil",
    question: "Uma lesão compressiva completa no quiasma óptico (como um macroadenoma de hipófise) causará qual déficit visual clássico?",
    options: [
      "Hemianopsia bitemporal (perda da visão dos campos temporais laterais de ambos os olhos)",
      "Cegueira monocular total exclusivamente do olho direito",
      "Hemianopsia homônima esquerda com preservação macular",
      "Perda exclusiva da visão central em cores com preservação da visão noturna"
    ],
    correctIndex: 0,
    explanation: "No quiasma óptico cruzam apenas as fibras provenientes das hemirretinas nasais de cada olho, responsáveis pela visão do campo visual temporal periférico correspondente. A compressão do quiasma interrompe essas fibras decussadas, gerando hemianopsia bitemporal ('visão em túnel').",
    officialReference: "Guyton & Hall, Cap. 52; Silverthorn, Cap. 10",
    keyTakeaway: "Compressão do quiasma óptico = Hemianopsia bitemporal."
  },
  {
    id: "sen-19",
    subjectId: "sensorial",
    subtopic: "Adaptação ao Escuro",
    difficulty: "Médio",
    question: "A adaptação dos olhos ao passar de um ambiente ensolarado brilhante para uma sala completamente escura leva vários minutos porque:",
    options: [
      "A rodopsina dos bastonetes foi maciçamente degradada (branqueamento) e necessita de tempo para ser ressintetizada a partir da opsina e do 11-cis-retinal",
      "O cérebro desliga temporariamente o lobo occipital",
      "A córnea precisa desidratar para permitir passagem de luz fraca",
      "Os cones precisam se transformar fisicamente em bastonetes"
    ],
    correctIndex: 0,
    explanation: "Sob luz intensa, a maior parte da rodopsina é fotolizada em metarrodopsina e depois em toda-trans-retinal e opsina ('bleaching'). No escuro, a enzima retinal isomerase converte o retinal de volta a 11-cis-retinal com gasto de tempo, restaurando a rodopsina e elevando a sensibilidade em até 25.000 vezes.",
    officialReference: "Guyton & Hall, Cap. 51; Silverthorn, Cap. 10",
    keyTakeaway: "Adaptação ao escuro = tempo necessário para ressintetizar a rodopsina nos bastonetes."
  },
  {
    id: "sen-20",
    subjectId: "sensorial",
    subtopic: "Vitamina A e Visão",
    difficulty: "Fácil",
    question: "A deficiência nutricional grave de Vitamina A provoca cegueira noturna (nictalopia) porque a vitamina A é a precursora direta de qual cromóforo fotorreceptor?",
    options: [
      "Retinal (11-cis-retinal)",
      "Caroteno insolúvel",
      "Melatonina",
      "Riboflavina"
    ],
    correctIndex: 0,
    explanation: "O 11-cis-retinal é a molécula sensível à luz ligada covalentemente à proteína opsina para formar a rodopsina nos bastonetes e fotopsinas nos cones. Como o retinal deriva diretamente da vitamina A (retinol), sua carência crônica impede a formação da rodopsina.",
    officialReference: "Guyton & Hall, Cap. 51; Silverthorn, Cap. 10",
    keyTakeaway: "Vitamina A é precursora do retinal da rodopsina; sua carência causa cegueira noturna."
  },
  {
    id: "sen-21",
    subjectId: "sensorial",
    subtopic: "Mecanorreceptores Cutâneos",
    difficulty: "Médio",
    question: "Qual mecanorreceptor cutâneo encapsulado de rápida adaptação localiza-se na derme profunda e tecido subcutâneo, sendo extremamente sensível a vibrações de alta frequência (200-300 Hz)?",
    options: [
      "Corpúsculo de Pacini",
      "Corpúsculo de Meissner",
      "Disco de Merkel",
      "Terminações livres para dor"
    ],
    correctIndex: 0,
    explanation: "O corpúsculo de Pacini possui lâminas concêntricas de tecido conjuntivo que atuam como filtro mecânico. Apenas deformações e vibrações rápidas transmitem pressão ao axônio central, ativando canais mecanossensíveis. Adapta-se em milissegundos.",
    officialReference: "Guyton & Hall, Cap. 47; Silverthorn, Cap. 10",
    keyTakeaway: "Corpúsculo de Pacini = vibração profunda de alta frequência e adaptação rápida."
  },
  {
    id: "sen-22",
    subjectId: "sensorial",
    subtopic: "Mecanorreceptores Cutâneos",
    difficulty: "Médio",
    question: "Qual receptor tátil de adaptação lenta localiza-se na epiderme basal das pontas dos dedos e permite a discriminação de formas finas, texturas e leitura em Braille?",
    options: [
      "Discos de Merkel",
      "Corpúsculo de Pacini",
      "Receptores do folículo piloso",
      "Corpúsculo de Ruffini"
    ],
    correctIndex: 0,
    explanation: "As células de Merkel formam sinapses com terminações nervosas expandidas (discos de Merkel). São receptores tônicos de adaptação lenta com campos receptivos pequeníssimos, permitindo resolução espacial extraordinária de bordas e texturas.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 48",
    keyTakeaway: "Discos de Merkel = tato discriminativo fino de bordas, texturas e leitura tátil."
  },
  {
    id: "sen-23",
    subjectId: "sensorial",
    subtopic: "Propriocepção",
    difficulty: "Fácil",
    question: "A capacidade inconsciente e consciente de perceber a posição, orientação e movimento relativo dos próprios membros e corpo no espaço é denominada:",
    options: [
      "Propriocepção (cinestesia)",
      "Nocicepção crônica",
      "Termorregulação",
      "Fotossensibilização"
    ],
    correctIndex: 0,
    explanation: "A propriocepção baseia-se nas informações colhidas continuamente por fusos neuromusculares, órgãos tendinosos de Golgi e mecanorreceptores articulares, processadas pelo cerebelo e córtex somatossensorial para coordenar postura e equilíbrio.",
    officialReference: "Guyton & Hall, Cap. 48; Silverthorn, Cap. 10",
    keyTakeaway: "Propriocepção = percepção da posição e movimento articular e corporal."
  },
  {
    id: "sen-24",
    subjectId: "sensorial",
    subtopic: "Reflexo Vestíbulo-Ocular",
    difficulty: "Médio",
    question: "O Reflexo Vestíbulo-Ocular (RVO) tem como função biológica primordial:",
    options: [
      "Estabilizar a imagem visual na fóvea da retina durante movimentos rápidos da cabeça, movimentando os olhos na direção oposta com velocidade idêntica",
      "Fechar os olhos automaticamente diante de luz muito intensa",
      "Aumentar a produção de lágrimas em ambientes com poeira",
      "Impedir a contração dos músculos mastigatórios durante a deglutição"
    ],
    correctIndex: 0,
    explanation: "Quando a cabeça gira para a esquerda, os canais semicirculares esquerdos excitam os núcleos vestibulares, que ativam os músculos reto lateral direito e reto medial esquerdo, rotacionando os globos oculares exatamente para a direita, mantendo o alvo visual estático na retina.",
    officialReference: "Guyton & Hall, Cap. 56; Silverthorn, Cap. 10",
    keyTakeaway: "RVO = estabiliza a imagem na retina movendo os olhos no sentido oposto ao giro da cabeça."
  },
  {
    id: "sen-25",
    subjectId: "sensorial",
    subtopic: "Morfologia Gustativa",
    difficulty: "Fácil",
    question: "Qual tipo de papila lingual em formato de V invertido na base posterior da língua abriga o maior número de botões gustativos por unidade?",
    options: [
      "Papilas circunvaladas (caliciformes)",
      "Papilas filiformes puramente mecânicas",
      "Papilas dentadas",
      "Papilas ciliares"
    ],
    correctIndex: 0,
    explanation: "As papilas circunvaladas (8 a 12 na linha terminal em V) possuem criptas profundas banhadas pela secreção das glândulas serosas de von Ebner, contendo centenas de botões gustativos inervados pelo nervo glossofaríngeo (NC IX).",
    officialReference: "Junqueira & Carneiro, Cap. 15; Guyton & Hall, Cap. 54",
    keyTakeaway: "Papilas circunvaladas na base da língua concentram grande densidade de botões gustativos."
  },
  {
    id: "sen-26",
    subjectId: "sensorial",
    subtopic: "Morfologia Gustativa",
    difficulty: "Fácil",
    question: "As papilas linguais filiformes diferenciam-se de todas as outras papilas da língua humana porque:",
    options: [
      "São as mais numerosas, queratinizadas e NÃO possuem botões gustativos, tendo função puramente mecânica e de atrito para o bolo alimentar",
      "Detectam exclusivamente o sabor doce do açúcar",
      "Secretam bile diretamente na cavidade oral",
      "São inervadas diretamente pelo nervo óptico"
    ],
    correctIndex: 0,
    explanation: "As papilas filiformes cobrem toda a superfície dorsal da língua anterior, dando o aspecto aveludado e rugoso para reter e triturar o alimento contra o palato duro, sem participar da percepção química de sabores primários.",
    officialReference: "Junqueira & Carneiro, Cap. 15; Silverthorn, Cap. 10",
    keyTakeaway: "Papilas filiformes = mecânicas, ásperas e sem botões gustativos."
  },
  {
    id: "sen-27",
    subjectId: "sensorial",
    subtopic: "Transdução Gustativa",
    difficulty: "Médio",
    question: "O sabor salgado puro da culinária (cloreto de sódio) é transduzido nas células gustativas tipo I/II por qual mecanismo?",
    options: [
      "Entrada direta de íons Na+ através de canais epiteliais de sódio (ENaC), despolarizando a célula gustativa",
      "Ativação de receptores acoplados à proteína G do tipo T1R1",
      "Fechamento de canais de cálcio voltagem-dependentes",
      "Hidrólise de lactose na superfície da mucosa"
    ],
    correctIndex: 0,
    explanation: "Os íons Na+ dissolvidos na saliva entram diretamente a favor de seu gradiente eletroquímico pelos canais de sódio ENaC na membrana apical. A entrada de cargas positivas despolariza a célula sensorial, abrindo canais de Ca2+ e liberando ATP/serotonina.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 54",
    keyTakeaway: "Sabor salgado = influxo direto de íons Na+ pelos canais ENaC."
  },
  {
    id: "sen-28",
    subjectId: "sensorial",
    subtopic: "Transdução Gustativa",
    difficulty: "Médio",
    question: "O sabor azedo (ácido) dos alimentos é desencadeado primariamente por:",
    options: [
      "Íons hidrogênio (H+), que penetram por canais de prótons (Otopetrina-1) e bloqueiam canais de K+, despolarizando a célula",
      "Moléculas grandes de polissacarídeos insolúveis",
      "Emulsificação de gorduras da dieta",
      "Presença de ferro oxidado"
    ],
    correctIndex: 0,
    explanation: "A acidez reflete a alta concentração de H+ livre. O próton permeia o canal OTOP1 específico de células tipo III e acidifica o citoplasma, o que inativa canais de potássio sensíveis a pH, despolarizando a membrana sensorial.",
    officialReference: "Silverthorn, Cap. 10; Kandel, Cap. 32",
    keyTakeaway: "Sabor azedo/ácido = influxo de íons H+ (prótons)."
  },
  {
    id: "sen-29",
    subjectId: "sensorial",
    subtopic: "Transdução do Umami e Doce",
    difficulty: "Difícil",
    question: "Os sabores Doce, Amargo e Umami utilizam receptores metabotrópicos acoplados à proteína G monomérica/heterotrimérica especializada denominada:",
    options: [
      "Gustducina, que ativa a fosfolipase C e canais TRPM5 com liberação de ATP",
      "Transducina, que degrada GMPc",
      "Golf, que ativa a adenilil ciclase tipo III",
      "Proteína quinase A pura"
    ],
    correctIndex: 0,
    explanation: "As famílias de receptores T1R (doce e umami) e T2R (amargo) são acopladas à proteína G gustducina. A ativação estimula a PLC-beta-2, liberando IP3 que eleva Ca2+ e abre os canais catiônicos TRPM5, promovendo a secreção não vesicular de ATP através de canais CALHM1.",
    officialReference: "Silverthorn, Cap. 10; Kandel, Cap. 32",
    keyTakeaway: "Doce, Amargo e Umami usam receptores acoplados à gustducina e canais TRPM5."
  },
  {
    id: "sen-30",
    subjectId: "sensorial",
    subtopic: "Transdução Olfatória",
    difficulty: "Médio",
    question: "Na transdução olfatória, a ligação da molécula odorífera ao seu receptor específico nos cílios olfatórios ativa a proteína Golf, que provoca:",
    options: [
      "Ativação da adenilil ciclase III, aumento de AMPc e abertura de canais iônicos de nucleotídeos cíclicos (CNG) permeáveis a Na+ e Ca2+",
      "Destruição imediata da molécula odorífera sem gerar potenciais",
      "Inibição de todos os neurônios do córtex límbico",
      "Entrada passiva de glicose nos capilares do etmoide"
    ],
    correctIndex: 0,
    explanation: "A cascata Golf estimula a adenilil ciclase III, gerando AMPc. O AMPc abre canais CNG permitindo influxo de Ca2+ e Na+. O acúmulo de Ca2+ abre subsequentemente canais de Cl- ativados por cálcio (Anoctamin-2), cuja saída de cloreto potencializa a despolarização olfatória.",
    officialReference: "Kandel, Cap. 32; Guyton & Hall, Cap. 54",
    keyTakeaway: "Odorante -> Golf -> AMPc -> canais CNG abrem -> despolarização olfatória."
  },
  {
    id: "sen-31",
    subjectId: "sensorial",
    subtopic: "Bulbo Olfatório",
    difficulty: "Médio",
    question: "Os axônios de todos os neurônios olfatórios que expressam o mesmo tipo específico de receptor convergem no bulbo olfatório para estruturas esféricas sinápticas denominadas:",
    options: [
      "Glomérulos olfatórios",
      "Pirâmides bulbares",
      "Corpúsculos de Hassall",
      "Ilhotas de Langerhans"
    ],
    correctIndex: 0,
    explanation: "Descoberto por Linda Buck e Richard Axel (Nobel de 2004), os axônios convergem precisamente para glomérulos específicos no bulbo olfatório, onde fazem sinapse com os dendritos primários das células mitrais e células em tufo, criando um mapa topográfico de odores.",
    officialReference: "Silverthorn, Cap. 10; Kandel, Cap. 32",
    keyTakeaway: "Glomérulos olfatórios = convergência de axônios do mesmo receptor olfatório."
  },
  {
    id: "sen-32",
    subjectId: "sensorial",
    subtopic: "Tuba Auditiva",
    difficulty: "Fácil",
    question: "A tuba auditiva (de Eustáquio) comunica a orelha média com a nasofaringe e tem como papel primordial:",
    options: [
      "Equiparar a pressão do ar entre a cavidade timpânica e a atmosfera externa",
      "Transportar células ciliadas novas para a cóclea",
      "Permitir a entrada de luz para a retina",
      "Eliminar o excesso de cera para fora do ouvido"
    ],
    correctIndex: 0,
    explanation: "Durante a deglutição ou bocejo, a abertura da tuba auditiva pelo músculo tensor do véu palatino equaliza as pressões dos dois lados da membrana timpânica, permitindo que o tímpano vibre livremente ao som.",
    officialReference: "Guyton & Hall, Cap. 53; Silverthorn, Cap. 10",
    keyTakeaway: "Tuba auditiva = equalização de pressão entre ouvido médio e atmosfera."
  },
  {
    id: "sen-33",
    subjectId: "sensorial",
    subtopic: "Células Ciliadas Externas",
    difficulty: "Difícil",
    question: "As células ciliadas externas da cóclea possuem a proteína motora prestina na sua membrana e atuam funcionalmente como:",
    options: [
      "Amplificadores cocleares mecânicos que alteram seu comprimento a cada ciclo acústico, aguçando a sensibilidade e seletividade de frequência",
      "Filtros de bactérias da linfa coclear",
      "Fibras motoras de contração muscular rápida da faringe",
      "Neurônios condutores de dor crônica"
    ],
    correctIndex: 0,
    explanation: "As células ciliadas externas (cerca de 12.000) exibem eletromotilidade mediada pela prestina: encurtam quando despolarizadas e alongam quando hiperpolarizadas. Esse feedback mecânico amplifica o movimento da membrana basilar em até 100 vezes para as células ciliadas internas.",
    officialReference: "Kandel, Cap. 31; Guyton & Hall, Cap. 53",
    keyTakeaway: "Células ciliadas externas com prestina = amplificador mecânico coclear."
  },
  {
    id: "sen-34",
    subjectId: "sensorial",
    subtopic: "Surdez de Condução vs Sensorioneural",
    difficulty: "Médio",
    question: "A perda auditiva resultante do acúmulo obstrutivo de cera no canal auditivo externo ou fixação dos ossículos por otosclerose é classificada como:",
    options: [
      "Surdez condutiva (de condução)",
      "Surdez sensorioneural pura",
      "Afasia de condução cortical",
      "Presbiacusia degenerativa"
    ],
    correctIndex: 0,
    explanation: "Surdez de condução decorre de qualquer impedimento físico à passagem mecânica da onda sonora através do meato externo, tímpano ou ossículos até a janela oval. A surdez sensorioneural envolve lesão nas células ciliadas cocleares ou no nervo vestibulococlear (NC VIII).",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 53",
    keyTakeaway: "Surdez condutiva = defeito na transmissão mecânica do som no ouvido externo/médio."
  },
  {
    id: "sen-35",
    subjectId: "sensorial",
    subtopic: "Camadas da Retina",
    difficulty: "Médio",
    question: "Na organização funcional da retina, a ordem sequencial de processamento dos sinais visuais a partir dos fotorreceptores até o nervo óptico é:",
    options: [
      "Fotorreceptores -> Células Bipolares -> Células Ganglionares (cujos axônios formam o nervo óptico)",
      "Células Ganglionares -> Células Amácrinas -> Fotorreceptores",
      "Nervo Óptico -> Humor Vítreo -> Cristalino",
      "Bastonetes -> Bastonetes vizinhos -> Músculo ciliar"
    ],
    correctIndex: 0,
    explanation: "A retina é uma estrutura em camadas estratificadas. O sinal inicia nos fotorreceptores (cones/bastonetes), passa pelas células bipolares (modulado horizontalmente por células horizontais e amácrinas) e atinge as células ganglionares, cujos axônios mielinizados saem pelo disco óptico.",
    officialReference: "Guyton & Hall, Cap. 51; Silverthorn, Cap. 10",
    keyTakeaway: "Fluxo retiniano: Fotorreceptores -> Bipolares -> Ganglionares (Nervo Óptico)."
  },
  {
    id: "sen-36",
    subjectId: "sensorial",
    subtopic: "Astigmatismo",
    difficulty: "Fácil",
    question: "O erro de refração ocular denominado astigmatismo é provocado por:",
    options: [
      "Curvatura desigual ou assimétrica da córnea (ou do cristalino) em diferentes meridianos, impedindo que a luz forme um ponto focal único",
      "Diminuição no número de cones na fóvea central",
      "Aumento súbito da pressão intraocular por fechamento angular",
      "Atrofia congênita da glândula lacrimal"
    ],
    correctIndex: 0,
    explanation: "Em vez de ter a superfície esférica de uma bola de futebol, a córnea astigmata tem o contorno elíptico de uma bola de futebol americano, focando a luz em planos focais diferentes e causando distorção visual em todas as distâncias (corrigido por lentes cilíndricas).",
    officialReference: "Guyton & Hall, Cap. 50; Silverthorn, Cap. 10",
    keyTakeaway: "Astigmatismo = curvatura irregular da córnea gerando múltiplos focos visuais."
  },
  {
    id: "sen-37",
    subjectId: "sensorial",
    subtopic: "Glaucoma",
    difficulty: "Médio",
    question: "O glaucoma é uma neuropatia óptica progressiva frequentemente associada a:",
    options: [
      "Elevação da pressão intraocular decorrente da drenagem inadequada do humor aquoso pelo canal de Schlemm, lesando as fibras do nervo óptico",
      "Perda de pigmentação nos cones da mácula lútea",
      "Inflamação crônica bacteriana nos canais semicirculares",
      "Falta de fluxo sanguíneo na artéria carótida externa"
    ],
    correctIndex: 0,
    explanation: "O humor aquoso produzido no corpo ciliar deve escoar através da malha trabecular para o canal de Schlemm. Obstruções elevam a pressão intraocular (>21 mmHg), comprimindo os axônios das células ganglionares no disco óptico e levando à perda visual periférica.",
    officialReference: "Guyton & Hall, Cap. 50; Silverthorn, Cap. 10",
    keyTakeaway: "Glaucoma = hipertensão ocular por bloqueio do humor aquoso lesando o nervo óptico."
  },
  {
    id: "sen-38",
    subjectId: "sensorial",
    subtopic: "Catarata",
    difficulty: "Fácil",
    question: "A catarata é a principal causa reversível de cegueira no mundo e caracteriza-se por:",
    options: [
      "Opacificação progressiva do cristalino devida ao envelhecimento e agregação de proteínas cristilinas",
      "Descolamento traumático da retina periférica",
      "Perfuração infecciosa da membrana timpânica",
      "Atrofia dos botões gustativos da língua"
    ],
    correctIndex: 0,
    explanation: "Com a idade, radiação UV ou diabetes, as proteínas cristalinas do cristalino sofrem oxidação e glicação, perdendo sua conformação transparente regular. O cristalino torna-se turvo e leitoso, bloqueando a passagem de luz (tratada com cirurgia de facoemulsificação e prótese intraocular).",
    officialReference: "Guyton & Hall, Cap. 50",
    keyTakeaway: "Catarata = opacificação do cristalino tratada por implante de lente intraocular."
  },
  {
    id: "sen-39",
    subjectId: "sensorial",
    subtopic: "Termorreceptores",
    difficulty: "Médio",
    question: "Os receptores sensoriais cutâneos para o frio e para o calor pertencem principalmente à família de canais iônicos:",
    options: [
      "TRP (Transient Receptor Potential), como TRPM8 para frio/mentol e TRPV1 para calor/capsaicina",
      "Canais de sódio ativados por voltagem Nav1.7 exclusivamente",
      "Receptores muscarínicos acoplados à adenilil ciclase",
      "Aquaporinas de tipo 4"
    ],
    correctIndex: 0,
    explanation: "Os canais TRP são canais catiônicos termossensíveis. O TRPV1 abre em temperaturas >43°C (calor nocivo) e é ativado pela capsaicina da pimenta. O TRPM8 abre em temperaturas frias (10-25°C) e é ativado pelo mentol da hortelã, explicando a sensação de gelado.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 49",
    keyTakeaway: "Termorrecepção = canais TRP (TRPV1 para calor e TRPM8 para frio)."
  },
  {
    id: "sen-40",
    subjectId: "sensorial",
    subtopic: "Daltonismo",
    difficulty: "Médio",
    question: "O daltonismo congênito mais comum (cegueira para as cores vermelho-verde) tem padrão de herança genética:",
    options: [
      "Recessiva ligada ao cromossomo X, afetando preferencialmente homens",
      "Autossômica dominante com penetrância incompleta",
      "Exclusivamente mitocondrial materna",
      "Cromossômica ligada ao cromossomo Y"
    ],
    correctIndex: 0,
    explanation: "Os genes que codificam as opsinas dos cones sensíveis ao vermelho (eritrolabe) e ao verde (clorolabe) situam-se lado a lado no braço longo do cromossomo X. Como homens possuem apenas um cromossomo X (XY), uma mutação expressa diretamente o daltonismo (cerca de 8% dos homens).",
    officialReference: "Guyton & Hall, Cap. 51; Silverthorn, Cap. 10",
    keyTakeaway: "Daltonismo vermelho-verde = herança recessiva ligada ao cromossomo X."
  },
  {
    id: "sen-41",
    subjectId: "sensorial",
    subtopic: "Córtex Visual Primário",
    difficulty: "Fácil",
    question: "O córtex visual primário (área estriada / área 17 de Brodmann) localiza-se em qual lobo cerebral?",
    options: [
      "Lobo occipital (ao redor da fissura calcarina)",
      "Lobo frontal anterior",
      "Lobo temporal medial",
      "Lobo da ínsula"
    ],
    correctIndex: 0,
    explanation: "O córtex visual primário (V1) situa-se nas margens da fissura calcarina do lobo occipital. Ele recebe a radiação óptica do corpo geniculado lateral do tálamo e decodifica orientação, linhas, bordas e disparidade binocular.",
    officialReference: "Guyton & Hall, Cap. 52; Silverthorn, Cap. 10",
    keyTakeaway: "Córtex visual primário (V1) = lobo occipital na fissura calcarina."
  },
  {
    id: "sen-42",
    subjectId: "sensorial",
    subtopic: "Córtex Auditivo Primário",
    difficulty: "Fácil",
    question: "O córtex auditivo primário (giros temporais transversos de Heschl) localiza-se no:",
    options: [
      "Lobo temporal superior",
      "Lobo parietal posterior",
      "Lobo occipital lateral",
      "Cerebelo hemisférico"
    ],
    correctIndex: 0,
    explanation: "Os giros de Heschl (áreas 41 e 42 de Brodmann) ficam no giro temporal superior, no interior do sulco lateral. Apresentam organização tonotópica fiel espelhando a membrana basilar coclear.",
    officialReference: "Guyton & Hall, Cap. 53; Silverthorn, Cap. 10",
    keyTakeaway: "Córtex auditivo primário = lobo temporal superior (giros de Heschl)."
  },
  {
    id: "sen-43",
    subjectId: "sensorial",
    subtopic: "Nistagmo Vestibular",
    difficulty: "Médio",
    question: "O nistagmo fisiológico durante rotação contínua da cabeça caracteriza-se por:",
    options: [
      "Fase lenta de perseguição dos olhos no sentido oposto à rotação e fase rápida sacádica corretiva no mesmo sentido do giro",
      "Fechamento intermitente de ambas as pálpebras",
      "Dilatação assimétrica das pupilas",
      "Imobilidade completa dos globos oculares"
    ],
    correctIndex: 0,
    explanation: "O nistagmo vestibular é uma resposta motora reflexa para compensar a rotação: a fase lenta (acionada pelos canais semicirculares) mantém os olhos fixos no ambiente rodando-os para o lado oposto; a fase rápida (sacada originada no tronco/córtex) resseta o olhar rapidamente para frente.",
    officialReference: "Guyton & Hall, Cap. 56; Silverthorn, Cap. 10",
    keyTakeaway: "Nistagmo = fase lenta compensatória oposta + fase rápida sacádica de retorno."
  },
  {
    id: "sen-44",
    subjectId: "sensorial",
    subtopic: "Humor Aquoso vs Humor Vítreo",
    difficulty: "Fácil",
    question: "O humor vítreo diferencia-se do humor aquoso do olho humano por ser:",
    options: [
      "Uma substância gelatinosa e transparente estática que preenche a câmara posterior entre o cristalino e a retina, sem renovação contínua",
      "Um líquido aquoso fino produzido pelos plexos corióideos que drena a cada 2 horas",
      "Um gás incolor rico em nitrogênio pressurizado",
      "Composto exclusivamente por lipídios opacos e melanina"
    ],
    correctIndex: 0,
    explanation: "O humor vítreo (corpo vítreo) é 99% água ligada a colágeno tipo II e ácido hialurônico, formando um gel estável que mantém o formato do globo e sustenta a retina aplicada contra o epitélio pigmentar. O humor aquoso é fluido, renova-se a cada ~90 minutos.",
    officialReference: "Guyton & Hall, Cap. 50; Junqueira & Carneiro, Cap. 23",
    keyTakeaway: "Humor vítreo = gel colagenoso transparente estático na câmara vítrea posterior."
  },
  {
    id: "sen-45",
    subjectId: "sensorial",
    subtopic: "Sensação do Picante",
    difficulty: "Fácil",
    question: "A sensação ardente de 'picância' provocada pela capsaicina das pimentas não é um sabor primário dos botões gustativos, mas uma sensação dolorosa e térmica conduzida por:",
    options: [
      "Fibras nociceptivas do Nervo Trigêmeo (NC V) que expressam receptores TRPV1",
      "Nervo Glossofaríngeo que detecta apenas glicose",
      "Células ciliadas da orelha média",
      "Nervo Óptico através dos cones periféricos"
    ],
    correctIndex: 0,
    explanation: "A capsaicina liga-se ao receptor vaniloide TRPV1 presente nas terminações livres nociceptivas do nervo trigêmeo na mucosa oral. O cérebro interpreta o sinal exatamente como se a língua estivesse sofrendo queimadura térmica real (>43°C).",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 49",
    keyTakeaway: "Picância de pimentas = ativação de receptores de dor TRPV1 do nervo trigêmeo."
  },
  {
    id: "sen-46",
    subjectId: "sensorial",
    subtopic: "Campos Receptivos & Inibição Lateral",
    difficulty: "Médio",
    question: "O mecanismo neural da inibição lateral nos sistemas somatossensorial e visual é fundamental para:",
    options: [
      "Aumentar o contraste e a acuidade da discriminação espacial de bordas e estímulos pontuais",
      "Diminuir a velocidade de condução para poupar energia de ATP",
      "Fazer todos os neurônios vizinhos dispararem na mesma intensidade",
      "Causar sonolência quando a luz do ambiente se apaga"
    ],
    correctIndex: 0,
    explanation: "Na inibição lateral, o neurônio mais fortemente ativado envia colaterais que ativam interneurônios inibitórios, silenciando os neurônios sensoriais periféricos vizinhos menos ativados. Isso afia o gradiente de contraste, facilitando localizar exatamente onde começou o estímulo.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 47",
    keyTakeaway: "Inibição lateral = aguça bordas, contraste e resolução espacial."
  },
  {
    id: "sen-47",
    subjectId: "sensorial",
    subtopic: "Epitélio Pigmentar da Retina",
    difficulty: "Médio",
    question: "O epitélio pigmentar da retina (EPR) desempenha papel indispensável na sobrevivência dos cones e bastonetes ao:",
    options: [
      "Fagocitar diariamente as pontas dos discos membranosos fotorreceptores e regenerar o 11-cis-retinal",
      "Bombear ar para oxigenar o cristalino",
      "Conduzir os potenciais motores para a córnea",
      "Produzir as lágrimas que umidificam a conjuntiva"
    ],
    correctIndex: 0,
    explanation: "O EPR é uma monocamada de células ricas em melanina que absorve a luz dispersa, fagocita os discos descartados dos segmentos externos dos fotorreceptores e converte o todo-trans-retinol de volta a 11-cis-retinal através do ciclo visual dos retinoides.",
    officialReference: "Guyton & Hall, Cap. 51; Junqueira & Carneiro, Cap. 23",
    keyTakeaway: "EPR = fagocita discos dos fotorreceptores e recicla o retinal visual."
  },
  {
    id: "sen-48",
    subjectId: "sensorial",
    subtopic: "Células Ganglionares Retinianas",
    difficulty: "Difícil",
    question: "As células ganglionares intrinsecamente fotossensíveis (ipRGCs) contêm o fotopigmento melanopsina e desempenham a função fisiológica vital de:",
    options: [
      "Ajustar o relógio circadiano mestre no núcleo supraquiasmático e mediar o reflexo fotomotor pupilar sem formar imagens visuais conscientes",
      "Detectar tons sutis de cor azul na periferia da visão diurna",
      "Lubrificar o cristalino durante o sono profundo",
      "Substituir os cones destruídos pela miopia"
    ],
    correctIndex: 0,
    explanation: "Cerca de 1-2% das células ganglionares da retina expressam melanopsina, despolarizando diretamente com a luz azul (~480 nm). Seus axônios projetam-se ao núcleo supraquiasmático do hipotálamo para sincronizar o ciclo sono-vigília e a secreção de melatonina.",
    officialReference: "Kandel, Cap. 26; Silverthorn, Cap. 10",
    keyTakeaway: "Melanopsina nas ipRGCs = sincronização do ritmo circadiano e reflexo da pupila."
  },
  {
    id: "sen-49",
    subjectId: "sensorial",
    subtopic: "Cinetose",
    difficulty: "Fácil",
    question: "A cinetose (enjoo do movimento ao viajar em carros, barcos ou aviões) decorre neurofisiologicamente de:",
    options: [
      "Conflito sensorial entre os sinais conflitantes do sistema vestibular (movimento detectado) e do sistema visual (ambiente estático da cabine)",
      "Intoxicação alimentar bacteriana no intestino grosso",
      "Lesão mecânica imediata do tímpano",
      "Falta de fluxo sanguíneo na aorta ascendente"
    ],
    correctIndex: 0,
    explanation: "Quando lemos dentro de um carro em movimento, os olhos informam que o livro está estático, mas o labirinto vestibular e os proprioceptores informam acelerações e curvas contínuas. Essa discordância sensorial no tronco e cerebelo ativa o centro do vômito bulbar.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 56",
    keyTakeaway: "Cinetose = discordância de sinais entre o labirinto vestibular e a visão."
  },
  {
    id: "sen-50",
    subjectId: "sensorial",
    subtopic: "Reflexo da Atenuação Acústica",
    difficulty: "Médio",
    question: "O reflexo de atenuação acústica (reflexo timpânico) protege a cóclea contra sons contínuos ensurdecedores através da contração de quais dois músculos da orelha média?",
    options: [
      "Músculo estapédio (inervado pelo NC VII) e Músculo tensor do tímpano (inervado pelo NC V)",
      "Músculo ciliar e Músculo esfíncter da pupila",
      "Músculo bucinador e Músculo masseter",
      "Músculos intercostais internos e diafragma"
    ],
    correctIndex: 0,
    explanation: "Diante de sons intensos (>80 dB), o estapédio puxa o estribo para fora da janela oval e o tensor do tímpano traciona o martelo para dentro, enrijecendo a cadeia ossicular e atenuando a transmissão de frequências baixas em até 30-40 dB para proteger as células ciliadas.",
    officialReference: "Guyton & Hall, Cap. 53; Silverthorn, Cap. 10",
    keyTakeaway: "Estapédio e tensor do tímpano contraem-se para atenuar sons estrondosos na cóclea."
  },
  {
    id: "sen-51",
    subjectId: "sensorial",
    subtopic: "Anosmia",
    difficulty: "Fácil",
    question: "A perda completa da capacidade olfatória é denominada clinicamente:",
    options: [
      "Anosmia",
      "Ageusia",
      "Acufeno",
      "Amaurose"
    ],
    correctIndex: 0,
    explanation: "Anosmia é a ausência de olfato (ageusia é perda do paladar; acufeno/tinnitus é zumbido no ouvido; amaurose é cegueira total). Traumatismos cranianos frontais podem cisalhar os finos axônios olfatórios que atravessam a lâmina cribriforme, causando anosmia traumática.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 54",
    keyTakeaway: "Anosmia = perda total do sentido do olfato."
  },
  {
    id: "sen-52",
    subjectId: "sensorial",
    subtopic: "Córtex Gustativo",
    difficulty: "Médio",
    question: "O córtex gustativo primário, responsável pela percepção consciente dos sabores, localiza-se na:",
    options: [
      "Ínsula anterior e opérculo frontal adjacente",
      "Lobo occipital póstero-inferior",
      "Córtex motor suplementar",
      "Corpo estriado e globo pálido"
    ],
    correctIndex: 0,
    explanation: "Os impulsos do trato solitário bulbar sobem via trato tegmental central até o núcleo ventral posteromedial (VPM) do tálamo e projetam-se no córtex gustativo primário na ínsula anterior e opérculo frontal, onde os sabores primários são identificados conscientemente.",
    officialReference: "Guyton & Hall, Cap. 54; Silverthorn, Cap. 10",
    keyTakeaway: "Córtex gustativo primário = ínsula anterior e opérculo frontal."
  },
  {
    id: "sen-53",
    subjectId: "sensorial",
    subtopic: "Teoria da Comporta da Dor",
    difficulty: "Médio",
    question: "A Teoria da Comporta da Dor (Gate Control Theory) explica por que esfregar ou massagear vigorosamente uma área machucada reduz a sensação dolorosa. Isso ocorre porque:",
    options: [
      "Fibras mielínicas grossas A-beta do tato ativam interneurônios inibitórios no corno dorsal medular, bloqueando a transmissão das fibras nociceptivas finas (C e A-delta)",
      "A massagem destrói as terminações nervosas livres da pele",
      "O tato queima todo o trifosfato de adenosina (ATP) dos nociceptores",
      "As fibras motoras revertem a direção do potencial de ação"
    ],
    correctIndex: 0,
    explanation: "Na substância gelatinosa do corno dorsal da medula, as fibras A-beta (tato não doloroso e pressão) emitem colaterais que estimulam interneurônios inibitórios encefalinérgicos. Esses interneurônios inibem pré e pós-sinapticamente os neurônios de projeção espinotalâmicos, 'fechando a comporta' para os sinais de dor das fibras C.",
    officialReference: "Guyton & Hall, Cap. 49; Silverthorn, Cap. 10",
    keyTakeaway: "Teoria da comporta: fibras A-beta de tato ativam interneurônios inibitórios medulares que atenuam a dor."
  },
  {
    id: "sen-54",
    subjectId: "sensorial",
    subtopic: "Modulação Descendente da Dor",
    difficulty: "Difícil",
    question: "A analgesia endógena desencadeada por situações de estresse extremo envolve a ativação de qual circuito neuronal no tronco encefálico?",
    options: [
      "Substância Cinzenta Periaquedutal (PAG) projetando para o Núcleo Magno da Rafe, liberando serotonina e encefalinas no corno dorsal da medula",
      "Núcleo caudado projetando para o córtex auditivo primário",
      "Glândula pineal liberando calcitonina no líquido cefalorraquidiano",
      "Cerebelo inibindo o nervo vago periférico"
    ],
    correctIndex: 0,
    explanation: "O sistema descendente supressor de dor origina-se na substância cinzenta periaquedutal (PAG) do mesencéfalo. Os axônios da PAG ativam neurônios serotoninérgicos do núcleo magno da rafe e noradrenérgicos do locus coeruleus, cujos tratos descendem até o corno dorsal da medula espinhal e ativam interneurônios opióides encefalinérgicos locais.",
    officialReference: "Guyton & Hall, Cap. 49; Kandel, Cap. 24",
    keyTakeaway: "Sistema analgésico endógeno = PAG mesencefálica -> núcleo da rafe -> inibição opióide medular."
  },
  {
    id: "sen-55",
    subjectId: "sensorial",
    subtopic: "Acuidade Visual e Fóvea",
    difficulty: "Fácil",
    question: "A fóvea centralis é a região da retina de máxima acuidade e nitidez visual porque:",
    options: [
      "Contém altíssima densidade de cones, sem bastonetes, com convergência de 1 cone para 1 célula bipolar e 1 ganglionar, e camadas celulares deslocadas lateralmente para evitar dispersão de luz",
      "Possui a maior espessura de vasos sanguíneos da retina para nutrir os bastonetes",
      "É revestida por melanina que reflete a luz como um espelho",
      "Não possui fotorreceptores, apenas axônios mielinizados"
    ],
    correctIndex: 0,
    explanation: "Na fóvea (e fovéola central de 0,3 mm), não há bastonetes, apenas cones longos e estreitos densamente empacotados. As camadas neuronais internas da retina e os capilares são empurrados para as bordas (foveação), permitindo que a luz atinja os fotorreceptores sem dispersão física. Além disso, a proporção 1:1 com células ganglionares maximiza a resolução espacial.",
    officialReference: "Guyton & Hall, Cap. 50; Silverthorn, Cap. 10",
    keyTakeaway: "Fóvea: apenas cones, proporção 1:1 com ganglionares e sem camadas celulares sobrepostas."
  },
  {
    id: "sen-56",
    subjectId: "sensorial",
    subtopic: "Acomodação Visual e Presbiopia",
    difficulty: "Médio",
    question: "Para focar um objeto próximo (<40 cm), o olho humano realiza a acomodação visual através de:",
    options: [
      "Contração do músculo ciliar inervado pelo NC III, o que relaxa a tensão das fibras zonulares e permite que o cristalino se torne mais convexo/arredondado",
      "Relaxamento do músculo ciliar tensionando as fibras zonulares e achatando o cristalino",
      "Dilatação pupilar máxima (midríase) mediada pelo simpático",
      "Alongamento mecânico do globo ocular para trás"
    ],
    correctIndex: 0,
    explanation: "Na visão de perto, estímulos parassimpáticos pelo nervo oculomotor (NC III) contraem o músculo ciliar em esfíncter. Essa contração move o corpo ciliar para frente e para dentro, afrouxando a zônula de Zinn. A cápsula elástica do cristalino retrai-se espontaneamente, tornando o cristalino mais esférico e com maior poder dióptrico refrativo.",
    officialReference: "Guyton & Hall, Cap. 50; Silverthorn, Cap. 10",
    keyTakeaway: "Visão de perto: contração do músculo ciliar -> relaxamento da zônula -> cristalino mais convexo."
  },
  {
    id: "sen-57",
    subjectId: "sensorial",
    subtopic: "Processamento Retiniano",
    difficulty: "Difícil",
    question: "O mecanismo de 'inibição lateral' na retina, mediado pelas células horizontais, é crucial para:",
    options: [
      "Aumentar o contraste visual nas bordas de luminosidade e nitidez entre luz e sombra",
      "Destruir a rodopsina gasta antes do sono",
      "Manter a pressão intraocular abaixo de 15 mmHg",
      "Bloquear qualquer sinal cromático na visão diurna"
    ],
    correctIndex: 0,
    explanation: "Quando um fotorreceptor é iluminado, ele ativa células horizontais que liberam GABA sobre os fotorreceptores vizinhos não iluminados. Essa inibição lateral acentua a diferença de descarga entre o centro excitado e a periferia inibida (organização centro-periferia), amplificando a percepção de bordas e contornos visuais.",
    officialReference: "Kandel, Cap. 26; Guyton & Hall, Cap. 51",
    keyTakeaway: "Células horizontais realizam inibição lateral para acentuar contrastes e contornos de borda."
  },
  {
    id: "sen-58",
    subjectId: "sensorial",
    subtopic: "Potencial Endococlear",
    difficulty: "Difícil",
    question: "A endolinfa da rampa média (escala média) coclear apresenta uma composição iônica incomum com potencial positivo de +80 mV devido a:",
    options: [
      "Secreção contínua e ativa de potássio (K+) pela estria vascular da parede lateral da cóclea",
      "Entrada passiva de sódio através da membrana basilar",
      "Ausência total de qualquer ânion cloreto na perilinfa",
      "Produção de ácido clorídrico pelos otólitos"
    ],
    correctIndex: 0,
    explanation: "A estria vascular possui bombas Na+/K+ ATPase e cotransportadores NKCC1 em suas células marginais que secretam K+ ativamente para a endolinfa, elevando sua concentração para ~150 mEq/L e gerando o 'potencial endococlear' de +80 mV. Essa gigantesca diferença elétrica (+80 mV vs -70 mV intracelular = 150 mV de força motriz) impulsiona o K+ para dentro das células ciliadas ao menor toque mecânico.",
    officialReference: "Guyton & Hall, Cap. 53; Berne & Levy, Cap. 10",
    keyTakeaway: "Estria vascular secreta K+ ativamente gerando o potencial endococlear positivo de +80 mV."
  },
  {
    id: "sen-59",
    subjectId: "sensorial",
    subtopic: "Reflexo de Atenuação Sonora",
    difficulty: "Médio",
    question: "Diante de um ruído extremamente alto (>85 dB), o reflexo acústico protetor atenua as vibrações mecânicas da cadeia ossicular através da contração reflexa de quais músculos?",
    options: [
      "Músculo estapédio (inervado pelo nervo facial NC VII) e Músculo tensor do tímpano (inervado pelo trigêmeo NC V3)",
      "Músculos reto lateral e reto medial",
      "Músculo cricotireóideo e tiroaritenóideo",
      "Músculo bucinador e masseter"
    ],
    correctIndex: 0,
    explanation: "Sons intensos desencadeiam o reflexo de atenuação auditiva: o músculo estapédio traciona o estribo para fora da janela oval, enquanto o músculo tensor do tímpano traciona o martelo para dentro, enrijecendo a cadeia ossicular. Isso reduz a transmissão sonora em até 30-40 dB para baixas frequências, protegendo a cóclea contra traumatismos acústicos.",
    officialReference: "Guyton & Hall, Cap. 53; Silverthorn, Cap. 10",
    keyTakeaway: "Reflexo acústico protetor = contração do estapédio (NC VII) e tensor do tímpano (NC V3)."
  },
  {
    id: "sen-60",
    subjectId: "sensorial",
    subtopic: "Reflexo Vestíbulo-Ocular (RVO)",
    difficulty: "Médio",
    question: "O Reflexo Vestíbulo-Ocular (RVO) é essencial para a estabilização visual porque:",
    options: [
      "Move os olhos em velocidade e amplitude iguais, mas em direção exatamente oposta ao movimento da cabeça, mantendo a imagem estável na fóvea",
      "Fecha as pálpebras automaticamente quando a cabeça é inclinada para trás",
      "Contrai as pupilas para impedir a entrada de luz durante giros corporais",
      "Inibe o córtex visual durante a marcha"
    ],
    correctIndex: 0,
    explanation: "Quando a cabeça roda para a esquerda, os canais semicirculares esquerdos aumentam seus disparos e, via núcleos vestibulares e fascículo longitudinal medial, contraem o reto medial esquerdo e o reto lateral direito. Os olhos giram com precisão milimétrica para a direita com a mesma velocidade angular, permitindo ler uma placa mesmo correndo.",
    officialReference: "Kandel, Cap. 40; Guyton & Hall, Cap. 56",
    keyTakeaway: "RVO move os olhos na direção oposta ao giro cefálico para manter a imagem estável na retina."
  },
  {
    id: "sen-61",
    subjectId: "sensorial",
    subtopic: "Nistagmo Pós-Rotatório",
    difficulty: "Médio",
    question: "O nistagmo vestibular fisiológico observado após girar uma pessoa em uma cadeira e pará-la abruptamente é composto por:",
    options: [
      "Uma fase lenta de desvio ocular impulsionada pelos canais semicirculares e uma fase rápida corretiva sacádica mediada pelo tronco/córtex",
      "Tremor exclusivamente palpebral sem envolvimento ocular",
      "Dilatação pupilar alternada a cada 2 segundos",
      "Paralisia permanente dos músculos retos inferiores"
    ],
    correctIndex: 0,
    explanation: "O nistagmo é uma oscilação ocular rítmica bifásica: a fase lenta é reflexa e vestibular (a endolinfa continua em movimento inercial curvando a cúpula), desviando os olhos. Quando o olhar atinge o limite da órbita, o centro sacádico do tronco dispara uma fase rápida no sentido oposto para recentralizar o olhar (a direção do nistagmo é definida por convenção pela sua fase rápida).",
    officialReference: "Guyton & Hall, Cap. 56; Silverthorn, Cap. 10",
    keyTakeaway: "Nistagmo vestibular = fase lenta reflexa vestibular + fase rápida corretiva sacádica."
  },
  {
    id: "sen-62",
    subjectId: "sensorial",
    subtopic: "Mecanismo Olfatório",
    difficulty: "Difícil",
    question: "A transdução de odores nos cílios dos neurônios receptores olfatórios (ORN) é mediada por qual via molecular?",
    options: [
      "Proteína G olfatória (Golf) que ativa a adenilato ciclase III, gerando AMPc que abre canais catiônicos CNG e canais de Cl- ativados por Ca2+ (Anoctamina-2)",
      "Receptores tirosina-quinase ligados a canais de potássio",
      "Fosforilação direta da miosina ciliar",
      "Transporte passivo de moléculas gasosas pelo citocromo P450"
    ],
    correctIndex: 0,
    explanation: "Cada odorante liga-se a um GPCR olfatório específico. A subunidade alfa da proteína Golf ativa a adenilato ciclase III, elevando o AMPc intracelular. O AMPc abre canais de nucleotídeos cíclicos (CNG), permitindo entrada de Na+ e Ca2+. O Ca2+ abre canais de Cl- ativados por cálcio (Ano2); como os neurônios olfatórios acumulam Cl- intracelular alto, o Cl- sai, despolarizando fortemente a célula.",
    officialReference: "Kandel, Cap. 32; Guyton & Hall, Cap. 54",
    keyTakeaway: "Transdução olfatória: receptor GPCR -> Golf -> AMPc -> canais CNG -> influxo de Ca2+ e efluxo de Cl-."
  },
  {
    id: "sen-63",
    subjectId: "sensorial",
    subtopic: "Neurogênese Olfatória",
    difficulty: "Fácil",
    question: "O epitélio olfatório humano é uma das poucas regiões do sistema nervoso onde ocorre neurogênese contínua ao longo de toda a vida adulta graças à proliferação de:",
    options: [
      "Células basais do epitélio olfatório",
      "Oligodendrócitos maduros",
      "Células da glia de Schwann perineurais",
      "Células endoteliais dos capilares sinusoides"
    ],
    correctIndex: 0,
    explanation: "Os neurônios sensoriais olfatórios são expostos diretamente ao ambiente externo e têm vida média de 30 a 60 dias. Células-tronco conhecidas como células basais do epitélio olfatório dividem-se e diferenciam-se continuamente em novos neurônios receptores que estendem axônios até o bulbo olfatório, restabelecendo conexões sinápticas.",
    officialReference: "Silverthorn, Cap. 10; Kandel, Cap. 32",
    keyTakeaway: "Células basais do epitélio olfatório geram novos neurônios sensoriais na vida adulta."
  },
  {
    id: "sen-64",
    subjectId: "sensorial",
    subtopic: "Mecanismos do Paladar",
    difficulty: "Difícil",
    question: "Os sabores doce, umami (glutamato) e amargo utilizam qual mecanismo de transdução nas células receptoras gustativas tipo II?",
    options: [
      "Receptores acoplados à proteína G (famílias T1R e T2R) ativando a gustducina, fosfolipase C-beta2 e liberação de ATP por canais CALHM1",
      "Influxo direto de íons hidrogênio (H+) através de canais OTOP1",
      "Passagem direta de íons sódio através de canais ENaC",
      "Difusão simples através de desmossomos de membrana"
    ],
    correctIndex: 0,
    explanation: "Doce (heterodímero T1R2+T1R3), umami (T1R1+T1R3) e amargo (família de ~30 receptores T2R monoméricos) são GPCRs. Eles ativam a proteína G gustducina, que estimula PLCβ2 -> IP3 -> liberação de Ca2+ do retículo endoplasmático -> abertura de canais TRPM5. A despolarização abre o canal liberador de ATP (CALHM1/3), liberando ATP sem vesículas para as fibras gustativas aferentes.",
    officialReference: "Guyton & Hall, Cap. 54; Silverthorn, Cap. 10",
    keyTakeaway: "Doce, amargo e umami: receptores T1R/T2R acoplados a GPCR e liberação não vesicular de ATP."
  },
  {
    id: "sen-65",
    subjectId: "sensorial",
    subtopic: "Paladar Azedo e Salgado",
    difficulty: "Médio",
    question: "A sensação do sabor azedo (ácido) nas células gustativas tipo III é disparada principalmente por:",
    options: [
      "Influxo de prótons (H+) através de canais iônicos de prótons específicos (OTOP1), causando acidificação intracelular e bloqueio de canais de K+",
      "Degradação de gorduras neutras na saliva",
      "Liberação de glicose a partir do amido alimentar",
      "Ligação a receptores de histamina H2"
    ],
    correctIndex: 0,
    explanation: "O sabor azedo é a percepção de acidez (H+). Os íons H+ penetram nas células gustativas tipo III através do canal de prótons seletivo Otopetrina-1 (OTOP1). O declínio do pH citoplasmático fecha canais de K+ (Kir2.1), despolarizando a célula e abrindo canais de cálcio que liberam serotonina (5-HT) por exocitose vesicular clássica.",
    officialReference: "Silverthorn, Cap. 10; Boron & Boulpaep, Cap. 15",
    keyTakeaway: "Sabor azedo = influxo de H+ por canais OTOP1 e acidificação citoplasmática."
  },
  {
    id: "sen-66",
    subjectId: "sensorial",
    subtopic: "Mecanorreceptores Cutâneos",
    difficulty: "Médio",
    question: "O Corpúsculo de Pacini é especializado em detectar qual modalidade de estímulo mecânico na pele?",
    options: [
      "Vibração mecânica de alta frequência (200-300 Hz) devido à sua cápsula multilamelar com adaptação extremamente rápida",
      "Calor tórrido contínuo",
      "Textura estática e pressão sustentada de adaptação lenta",
      "pH superficial da epiderme"
    ],
    correctIndex: 0,
    explanation: "Os corpúsculos de Pacini são grandes mecanorreceptores subcutâneos de adaptação rápida (fásicos). Sua cápsula concêntrica multilamelar de tecido conjuntivo com líquido viscoso dissipa deformações mecânicas constantes em milissegundos, respondendo exclusivamente a estímulos dinâmicos repetitivos de alta frequência (vibração).",
    officialReference: "Guyton & Hall, Cap. 48; Kandel, Cap. 22",
    keyTakeaway: "Corpúsculo de Pacini = vibração de alta frequência e adaptação extremamente rápida."
  },
  {
    id: "sen-67",
    subjectId: "sensorial",
    subtopic: "Termorreceptores e Canais TRP",
    difficulty: "Médio",
    question: "A sensação gustativa e cutânea refrescante provocada pelo mentol decorre da ativação do mesmo canal iônico ativado pelo frio moderado, que é o:",
    options: [
      "TRPM8 (Transient Receptor Potential Melastatin 8)",
      "TRPV1 (ativado por calor nocivo e capsaicina)",
      "Canal de sódio Nav1.7",
      "Receptor GABA-B"
    ],
    correctIndex: 0,
    explanation: "A família de canais iônicos TRP atua como termômetro molecular. O canal TRPM8 é ativado por temperaturas frias entre 10°C e 28°C e por agonistas químicos refrescantes como o mentol e o eucaliptol. Já o TRPV1 é ativado por temperaturas >43°C e pela capsaicina da pimenta vermelha, gerando sensação de ardor térmico.",
    officialReference: "Silverthorn, Cap. 10; Guyton & Hall, Cap. 49",
    keyTakeaway: "TRPM8 detecta frio e mentol; TRPV1 detecta calor doloroso (>43°C) e capsaicina."
  },
  {
    id: "sen-68",
    subjectId: "sensorial",
    subtopic: "Dor Referida",
    difficulty: "Fácil",
    question: "Na isquemia miocárdica (infarto), a dor é frequentemente sentida no braço esquerdo, ombro ou mandíbula. Essa dor referida ocorre porque:",
    options: [
      "Fibras aferentes nociceptivas viscerais cardíacas e fibras somáticas do braço convergem para os mesmos neurônios de segunda ordem no corno dorsal medular (segmentos T1-T5)",
      "O coração bombeia ácido lático diretamente para o músculo bíceps",
      "O nervo vago se funde com os nervos digitais da mão",
      "O cérebro desliga a sensibilidade do tórax durante a isquemia"
    ],
    correctIndex: 0,
    explanation: "A dor referida é explicada pela teoria da convergência-projeção: os nociceptores viscerais cardíacos entram na medula espinhal nos segmentos T1 a T5 e sinapsam com os mesmos neurônios do trato espinotalâmico que recebem aferências da pele do hemitórax esquerdo e braço medial. O córtex cerebral interpreta o sinal como vindo da via somática mais comumente ativada.",
    officialReference: "Guyton & Hall, Cap. 49; Silverthorn, Cap. 10",
    keyTakeaway: "Dor referida: convergência de nociceptores viscerais e somáticos no mesmo neurônio medular."
  },
  {
    id: "sen-69",
    subjectId: "sensorial",
    subtopic: "Via Visual e Hemianopsia",
    difficulty: "Médio",
    question: "Uma lesão completa do quiasma óptico (frequentemente causada por adenoma de hipófise que cresce para cima) resulta em qual defeito de campo visual característico?",
    options: [
      "Hemianopsia bitemporal (cegueira nas metades temporais de ambos os campos visuais)",
      "Hemianopsia homônima esquerda",
      "Amaurose monocular direita",
      "Cegueira exclusivamente noturna"
    ],
    correctIndex: 0,
    explanation: "No quiasma óptico, apenas as fibras provenientes das hemirretinas nasais de cada olho cruzam para o lado oposto. Como a hemirretina nasal recebe luz do campo visual temporal (lateral), a compressão central do quiasma interrompe os sinais temporais de ambos os olhos, produzindo hemianopsia bitemporal ('visão em túnel').",
    officialReference: "Guyton & Hall, Cap. 52; Silverthorn, Cap. 10",
    keyTakeaway: "Lesão do quiasma óptico = hemianopsia bitemporal (compressão por tumor de hipófise)."
  },
  {
    id: "sen-70",
    subjectId: "sensorial",
    subtopic: "Aparelho Vestibular e Otólitos",
    difficulty: "Fácil",
    question: "O utrículo e o sáculo contêm otólitos de carbonato de cálcio situados sobre uma membrana gelatinosa. Esses órgãos são especializados na detecção de:",
    options: [
      "Aceleração linear (como arranques e frenagens) e inclinação estática da cabeça em relação à gravidade",
      "Rotação tridimensional rápida da cabeça",
      "Frequências sonoras ultrassônicas",
      "Pressão osmótica do sangue cerebral"
    ],
    correctIndex: 0,
    explanation: "Os órgãos otolíticos (máculas do utrículo e sáculo) possuem cristais pesados de carbonato de cálcio (otocônias/otólitos) que conferem inércia à membrana gelatinosa. Quando a cabeça acelera linearmente ou se inclina contra a gravidade, os otólitos deslizam, defletindo os estereocílios das células ciliadas e sinalizando a postura estática e acelerações translacionais.",
    officialReference: "Guyton & Hall, Cap. 56; Silverthorn, Cap. 10",
    keyTakeaway: "Utrículo e sáculo detectam gravidade e aceleração linear; canais semicirculares detectam rotação."
  },
  {
    id: "sen-71",
    subjectId: "sensorial",
    subtopic: "Fototransdução na Retina",
    difficulty: "Difícil",
    question: "Diferente da maioria dos receptores sensoriais que despolarizam diante de estímulos, os fotorreceptores da retina humana (bastonetes e cones) respondem à incidência de luz com:",
    options: [
      "Hiperpolarização da membrana (o potencial passa de -40 mV para -70 mV), decorrente da fotoisomerização da rodopsina, ativação da proteína G transducina e degradação de cGMP pela fosfodiesterase (PDE6), fechando os canais de cátions CNG",
      "Despolarização explosiva imediata até +50 mV com abertura de canais de sódio voltagem-dependentes",
      "Secreção maciça de dopamina no humor aquoso",
      "Destruição irreversível do pigmento melanina no epitélio pigmentar"
    ],
    correctIndex: 0,
    explanation: "No escuro, os bastonetes mantêm níveis citosólicos elevados de cGMP, que sustentam canais catiônicos CNG abertos na membrana do segmento externo (a 'corrente escura' despolarizante de Na+ e Ca2+, mantendo o potencial em -40 mV e liberação contínua de glutamato). Quando a luz atinge a rodopsina, o 11-cis-retinal é convertido em all-trans-retinal, ativando a metarrodopsina II. Esta ativa a proteína G Transducina (Gt), estimulando a PDE6 a hidrolisar cGMP em 5'-GMP. Sem cGMP, os canais CNG fecham-se, a corrente de sódio cessa e o bastonete hiperpolariza para -70 mV, reduzindo a liberação basal de glutamato.",
    officialReference: "Kandel - Princípios da Neurociência, Cap. 26; Guyton & Hall, Cap. 51",
    keyTakeaway: "Fototransdução: Luz -> Rodopsina -> Transducina ativa PDE6 -> queda de cGMP fecha canais CNG -> Fotorreceptor hiperpolariza."
  },
  {
    id: "sen-72",
    subjectId: "sensorial",
    subtopic: "Inibição Lateral e Células Horizontais",
    difficulty: "Difícil",
    question: "O fenômeno de 'inibição lateral' na retina neural é fundamental para aumentar o contraste de bordas e contornos das imagens visuais. As células responsáveis por mediar essa inibição lateral pré-sináptica entre fotorreceptores vizinhos são:",
    options: [
      "Células Horizontais (interneurônios inibitórios gabaérgicos da camada nuclear interna)",
      "Células da glia de Müller mielinizadas",
      "Células ganglionares parvocelulares do nervo óptico",
      "Células epiteliais da córnea anterior"
    ],
    correctIndex: 0,
    explanation: "As células horizontais conectam-se lateralmente com múltiplos fotorreceptores vizinhos. Quando um grupo de fotorreceptores é iluminado no centro do campo receptivo, ele hiperpolariza; as células horizontais vizinhas captam essa variação e liberam GABA sobre os fotorreceptores situados na periferia do campo, hiperpolarizando-os ou despolarizando-os de forma antagônica. Isso cria a célebre organização de 'centro-periferia' (surround antagonism), permitindo ao córtex visual detectar contrastes de luminosidade muito sutis.",
    officialReference: "Bear - Neurociências, Cap. 9; Guyton & Hall, Cap. 51",
    keyTakeaway: "Células horizontais medeiam inibição lateral na retina via GABA, amplificando o contraste das bordas visuais."
  },
  {
    id: "sen-73",
    subjectId: "sensorial",
    subtopic: "Eletromotilidade das Células Ciliadas Externas",
    difficulty: "Difícil",
    question: "No Órgão de Corti da cóclea, as Células Ciliadas Externas (OHCs) desempenham uma função biofísica única conhecida como 'Amplificador Coclear'. Essa função é impulsionada pela:",
    options: [
      "Eletromotilidade somática mediada pela proteína motora transmembrana Prestrina, que altera o comprimento da célula sincronizada com as oscilações de voltagem acústicas, amplificando a deflexão mecânica da membrana basilar",
      "Secreção de endolinfa para dentro do ducto vestibular",
      "Síntese contínua de cera acústica estéril",
      "Contração voluntária dos ossículos do ouvido médio"
    ],
    correctIndex: 0,
    explanation: "Diferente das Células Ciliadas Internas (IHCs, que respondem por 95% da transmissão aferente ao nervo acústico), as OHCs possuem a membrana lateral densamente empacotada com a proteína Prestrina (SLC26A5). Quando a despolarização ocorre, a prestrina muda de conformação e encurta a célula mecanicamente; na hiperpolarização, ela a alonga. Essa eletromotilidade rápida injeta energia mecânica no mesmo ciclo da onda sonora, amplificando as vibrações da membrana basilar em mais de 100 a 1000 vezes (40 a 50 dB) e afinando drasticamente a seletividade de frequência.",
    officialReference: "Kandel, Cap. 31; Guyton & Hall, Cap. 53",
    keyTakeaway: "Células ciliadas externas: a proteína Prestrina confere eletromotilidade motora amplificando a audição em até 50 dB."
  },
  {
    id: "sen-74",
    subjectId: "sensorial",
    subtopic: "Mapa Tonotópico da Cóclea",
    difficulty: "Médio",
    question: "A membrana basilar da cóclea possui um gradiente físico de rigidez e largura da base até o ápice (helicotrema), estabelecendo o Mapa Tonotópico. As frequências sonoras agudas (altas frequências, ex.: 20.000 Hz) e graves (baixas frequências, ex.: 200 Hz) provocam ressonância mecânica máxima respectivamente:",
    options: [
      "Na base da cóclea (estreita e rígida) para sons agudos; no ápice da cóclea (larga e flexível) para sons graves",
      "No ápice para sons agudos e na base para sons graves",
      "Exclusivamente na membrana timpânica externa sem diferenciação coclear",
      "Na tuba auditiva de Eustáquio para qualquer frequência"
    ],
    correctIndex: 0,
    explanation: "A base da membrana basilar (próxima à janela oval) é cerca de 100 vezes mais rígida e 5 vezes mais estreita do que o ápice próximo ao helicotrema. Por conseguinte, ondas sonoras de alta frequência e comprimento de onda curto ressoam e dissipam sua energia mecânica logo na base rígida. Conforme a frequência sonora diminui, a onda viajante progride mais profundamente ao longo da cóclea, atingindo a amplitude máxima de deflexão no ápice complacente e largo para os tons graves.",
    officialReference: "Guyton & Hall, Cap. 53; Silverthorn, Cap. 10",
    keyTakeaway: "Tonotopia coclear: Base (estreita/rígida) = sons agudos/altas frequências; Ápice (largo/flexível) = sons graves/baixas frequências."
  },
  {
    id: "sen-75",
    subjectId: "sensorial",
    subtopic: "Canais Semicirculares e Rotação",
    difficulty: "Médio",
    question: "Nas ampolas dos três Canais Semicirculares do labirinto vestibular, os estereocílios das células ciliadas sensoriais estão embebidos em uma estrutura gelatinosa que oclui a luz da ampola chamada Cúpula. A cúpula é deslocada funcionalmente por:",
    options: [
      "Pela inércia do fluxo de endolinfa que se opõe ao movimento da cabeça durante acelerações angulares tridimensionais (rotações cefálicas)",
      "Pelo peso de otólitos de carbonato de cálcio sob ação pura da gravidade",
      "Pelo fluxo contínuo de perilinfa arterial",
      "Pela contração direta do músculo estapédio"
    ],
    correctIndex: 0,
    explanation: "A cúpula da crista ampolar tem a mesma densidade específica da endolinfa ao seu redor, sendo insensível à gravidade estática pura (diferente das máculas do utrículo e sáculo, que possuem otocônias densas). Quando a cabeça gira em torno de qualquer um dos três eixos espaciais (eixo dos canais anterior, posterior ou horizontal), a parede óssea e membranosa do canal gira, mas o fluido endolinfático interno retarda seu movimento por inércia, defletindo mecanicamente a cúpula e os cílios inseridos.",
    officialReference: "Guyton & Hall, Cap. 56; Kandel, Cap. 40",
    keyTakeaway: "Canais semicirculares: inércia da endolinfa deflete a cúpula gelatinosa durante aceleração angular (rotação)."
  },
  {
    id: "sen-76",
    subjectId: "sensorial",
    subtopic: "Reflexo Vestíbulo-Ocular (RVO)",
    difficulty: "Difícil",
    question: "O Reflexo Vestíbulo-Ocular (RVO) é o arco reflexo mais rápido do corpo humano (~7 a 10 ms). Sua função biológica primordial consiste em:",
    options: [
      "Produzir movimentos oculares compensatórios em velocidade idêntica e direção exatamente oposta aos movimentos cefálicos, estabilizando a imagem visual nítida sobre a fóvea da retina durante a locomoção",
      "Fechar reflexamente as pálpebras diante de flashes intensos de luz solar",
      "Dilatar a pupila para acomodação no escuro profundo",
      "Interromper o fluxo sanguíneo retiniano durante a leitura silenciosa"
    ],
    correctIndex: 0,
    explanation: "Sem o RVO, qualquer movimento rotacional ou oscilação da cabeça (como ao caminhar ou correr) causaria deslizamento caótico da imagem sobre a retina (oscilopsia incapacitante). O RVO conecta os núcleos vestibulares pontinos diretamente aos núcleos motores oculares (NC III oculomotor, NC IV troclear e NC VI abducente) através do fascículo longitudinal medial (FLM). Ao virar a cabeça rapidamente para a esquerda, o canal horizontal esquerdo excita o reto medial esquerdo e o reto lateral direito, girando os olhos para a direita em tempo real.",
    officialReference: "Bear - Neurociências, Cap. 11; Kandel, Cap. 40",
    keyTakeaway: "Reflexo Vestíbulo-Ocular (RVO): move os olhos na velocidade e sentido oposto à cabeça, prevenindo oscilopsia."
  },
  {
    id: "sen-77",
    subjectId: "sensorial",
    subtopic: "Transdução Olfatória e Conexão Cortical",
    difficulty: "Médio",
    question: "O sistema olfatório apresenta uma particularidade anatômica e fisiológica singular em relação a todas as outras modalidades sensoriais clássicas no cérebro humano. Essa característica é:",
    options: [
      "Os axônios dos neurônios do bulbo olfatório (trato olfatório) projetam-se diretamente para o córtex primário (córtex piriforme e entorrinal) e sistema límbico sem passar obrigatoriamente por um revezamento talâmico prévio",
      "O olfato é transduzido por células mortas queratinizadas sem potenciais de ação",
      "Todos os receptores olfatórios pertencem à classe de canais operados por acetilcolina",
      "As moléculas odoríferas necessitam ser digeridas pela pepsina antes de sensibilizarem a mucosa"
    ],
    correctIndex: 0,
    explanation: "A via olfatória é o único sistema sensorial que atinge o córtex telencefálico primário (córtex piriforme, tubérculo olfatório e complexo amigdaloide) diretamente através dos neurônios mitrais e em tufo do bulbo olfatório, sem passar antes pelo tálamo. Isso explica a extraordinária capacidade de certos odores evocarem memórias autobiográficas vívidas e respostas afetivas imediatas (conexão direta com o hipocampo e amígdala). As projeções para o tálamo (núcleo dorsomedial) existem, mas ocorrem secundariamente para percepção consciente refinada.",
    officialReference: "Guyton & Hall, Cap. 54; Silverthorn, Cap. 10",
    keyTakeaway: "A via olfatória projeta-se diretamente para o córtex cerebral e sistema límbico sem revezamento prévio no tálamo."
  },
  {
    id: "sen-78",
    subjectId: "sensorial",
    subtopic: "Transdução Gustatória dos Cinco Sabores",
    difficulty: "Difícil",
    question: "Na quimiorrecepção gustatória dos corpúsculos linguais, os sabores Salgado e Azedo (ácido) utilizam canais iônicos diretos, enquanto Doce, Amargo e Umami dependem de:",
    options: [
      "Receptores acoplados à Proteína G (GPCRs gustatórios) associados à proteína G Gustducina, ativação da Fosfolipase C beta-2 (PLC-beta-2), geração de IP3, liberação de Ca2+ do retículo e abertura do canal catiônico TRPM5",
      "Endocitose mediada por clatrina dos cristais de sacarose",
      "Bombas ativas primárias de prótons H+/K+-ATPase",
      "Destruição celular necrótica permanente do botão gustativo"
    ],
    correctIndex: 0,
    explanation: "O sabor salgado é transduzido pela entrada direta de Na+ por canais epiteliais de sódio (ENaC) e o sabor ácido pelo influxo de H+ através de canais de prótons OTOP1. Em contraste: 1) Doce (dímero T1R2 + T1R3); 2) Umami (dímero T1R1 + T1R3 ligado a L-glutamato); 3) Amargo (família monomérica de ~25 receptores T2R). Todos ativam a subunidade alfa-gustducina acoplada a PLC-beta-2 -> IP3 -> elevação de Ca2+ citosólico -> abertura de canais TRPM5 e liberação não vesicular de ATP via canais CALHM1 para excitar as fibras aferentes dos nervos VII e IX.",
    officialReference: "Kandel, Cap. 32; Silverthorn, Cap. 10",
    keyTakeaway: "Doce, Amargo e Umami são transduzidos via GPCRs acoplados à via PLC-IP3-TRPM5 que libera ATP nas fibras gustativas."
  },
  {
    id: "sen-79",
    subjectId: "sensorial",
    subtopic: "Mecanorreceptores Cutâneos Táteis",
    difficulty: "Médio",
    question: "Entre os mecanorreceptores da pele glabra humana, qual receptor cutâneo é encapsulado por camadas concêntricas de tecido conjuntivo semelhantes a folhas de cebola, apresenta adaptação extremamente rápida (fásica) e é especializado na detecção de vibrações mecânicas de alta frequência (200-300 Hz)?",
    options: [
      "Corpúsculo de Pacini (lamelar)",
      "Disco de Merkel (célula de Merkel-neurite)",
      "Corpúsculo de Ruffini",
      "Terminação nervosa livre não mielinizada"
    ],
    correctIndex: 0,
    explanation: "Os Corpúsculos de Pacini localizam-se na derme profunda e tecido subcutâneo. Sua cápsula lamelar elástica com fluido entre as lâminas absorve deformações estáticas mantidas (adaptação fásica ultrarrápida), transmitindo apenas a oscilação mecânica transitória para a terminação nervosa central. Por isso, são os sensores perfeitos para detectar vibrações de alta frequência e sensação de textura rugosa ao deslizar os dedos sobre uma superfície.",
    officialReference: "Guyton & Hall, Cap. 48; Bear, Cap. 12",
    keyTakeaway: "Corpúsculos de Pacini: adaptação muito rápida (fásica), especializados em detectar vibrações de alta frequência (200-300 Hz)."
  },
  {
    id: "sen-80",
    subjectId: "sensorial",
    subtopic: "Teoria da Comporta da Dor (Gate Control)",
    difficulty: "Médio",
    question: "A clássica 'Teoria da Comporta' (Gate Control Theory) de Melzack e Wall explica por que o ato instintivo de massagear ou esfregar vigorosamente a pele em torno de um local traumatizado reduz a percepção dolorosa. O mecanismo neurofisiológico subjacente consiste em:",
    options: [
      "A ativação de fibras mielinizadas A-beta de tato epicrítico estimula interneurônios inibitórios na substância gelatinosa do corno posterior da medula, que liberam GABA/glicina e inibem os neurônios de projeção espinotalâmica excitados por fibras C nociceptivas",
      "A massagem destrói os receptores de calor TRPV1 no tecido subcutâneo",
      "A circulação venosa local remove todo o cálcio da medula espinhal",
      "O choque mecânico despolariza irreversivelmente os neurônios do córtex motor"
    ],
    correctIndex: 0,
    explanation: "No corno posterior da medula (lâmina II / substância gelatinosa de Rolando), interneurônios inibitórios regulam o limiar de disparo dos neurônios de transmissão nociceptiva de 2ª ordem (trato espinotalâmico). As fibras C amielínicas e A-delta da dor inibem esses interneurônios, 'abrindo a comporta' para os impulsos dolorosos subirem ao cérebro. Por outro lado, o estímulo mecânico táctil não doloroso ativa fibras A-beta mielínicas de alta velocidade, que enviam ramos colaterais excitando esses mesmos interneurônios inibitórios, 'fechando a comporta' pré e pós-sinapticamente.",
    officialReference: "Guyton & Hall, Cap. 49; Silverthorn, Cap. 10",
    keyTakeaway: "Teoria da Comporta: fibras A-beta de tato ativam interneurônios inibitórios na medula dorsal, bloqueando os sinais de dor das fibras C."
  },
  {
    id: "sen-81",
    subjectId: "sensorial",
    subtopic: "Termorrecepção e Receptores TRP",
    difficulty: "Difícil",
    question: "A sensação térmica de calor escaldante e dor induzida pela capsaicina (princípio pungente das pimentas) e a sensação refrescante do mentol são mediadas respectivamente pelos seguintes canais iônicos da família TRP:",
    options: [
      "Canal TRPV1 (ativado por temperaturas nociceptivas > 43 °C, prótons H+ e capsaicina) e Canal TRPM8 (ativado por frio moderado de 15 a 25 °C e mentol)",
      "Canal de sódio Nav1.5 e canal de potássio HERG",
      "Receptor ionotrópico de glutamato kainato e canal de cloro GABAA",
      "Aquaporina-1 e canal CFTR exclusivamente"
    ],
    correctIndex: 0,
    explanation: "David Julius e Ardem Patapoutian (Nobel de Medicina 2021) desvendaram os sensores de temperatura e tato. O canal TRPV1 (Transient Receptor Potential Vanilloid 1) é um canal catiônico não seletivo expresso em terminações nociceptivas polimodais; abre-se por calor deletério (> 42-43 °C), pH ácido tecidual (< 5,5 na inflamação) e pelo composto químico capsaicina. Em contraste, o TRPM8 (Melastatin 8) é ativado por resfriamento brando (8 a 28 °C) e agonistas químicos como o mentol e eucaliptol.",
    officialReference: "Bear - Neurociências, Cap. 12; Goodman & Gilman, Cap. 24",
    keyTakeaway: "TRPV1 detecta calor nociceptivo (>43 °C) e capsaicina; TRPM8 detecta frio brando (15-25 °C) e mentol."
  },
  {
    id: "sen-82",
    subjectId: "sensorial",
    subtopic: "Reflexo Fotomotor Pupilar",
    difficulty: "Médio",
    question: "Ao iluminar o olho direito com um facho de luz em um indivíduo neurologicamente saudável, observa-se constrição pupilar em ambos os olhos (reflexo direto no olho direito e consensual no olho esquerdo). O cruzamento anatômico de fibras que garante a resposta consensual bilateral ocorre:",
    options: [
      "Tanto no Quiasma Óptico (fibras aferentes retinianas) quanto na Comissura Posterior (fibras eferentes dos núcleos pré-tectais conectando-se aos núcleos de Edinger-Westphal de ambos os lados)",
      "Exclusivamente no nervo ciático periférico",
      "Pela fusão dos bulbos olfatórios",
      "Nos gânglios da cadeia simpática paravertebral lombar"
    ],
    correctIndex: 0,
    explanation: "O reflexo pupilar à luz não depende do córtex visual: 1) Aferência: axônios de células ganglionares fotossensíveis viajam pelo nervo óptico (NC II), cruzam parcialmente no quiasma óptico e projetam-se ao Núcleo Pré-Tectal no mesencéfalo superior; 2) Cada núcleo pré-tectal envia axônios bilateralmente através da Comissura Posterior para os dois núcleos parassimpáticos de Edinger-Westphal (núcleos do NC III); 3) As fibras eferentes parassimpáticas pré-ganglionares viajam pelo nervo oculomotor (NC III) até o gânglio ciliar, de onde partem os nervos ciliares curtos para contrair o músculo esfíncter da pupila.",
    officialReference: "Guyton & Hall, Cap. 52; Campbell - DeJong's Neurological Examination",
    keyTakeaway: "Reflexo consensual: o núcleo pré-tectal projeta-se bilateralmente para ambos os núcleos de Edinger-Westphal (NC III)."
  },
  {
    id: "sen-83",
    subjectId: "sensorial",
    subtopic: "Reflexo de Acomodação Visual (Visão de Perto)",
    difficulty: "Médio",
    question: "Ao mudar o foco visual de um objeto no horizonte distante para um livro situado a 20 cm do rosto, o sistema óptico executa a 'Tríade da Acomodação para Perto'. Essa resposta fisiológica coordenada consiste em:",
    options: [
      "Contração do músculo ciliar (afrouxando as fibras zonulares de Zinn e tornando o cristalino mais arredondado e convergente), convergência ocular medial bilateral pelos músculos retos mediais e miose pupilar para aumentar a profundidade de foco",
      "Relaxamento do músculo ciliar que achata o cristalino e midríase pupilar máxima",
      "Fechamento completo da pálpebra superior direita com abdução do globo",
      "Ejeção de lágrimas ácidas sobre a fóvea central"
    ],
    correctIndex: 0,
    explanation: "Na visão de perto, três eventos simultâneos mediados por fibras eferentes do nervo oculomotor (NC III) entram em ação: 1) Acomodação do cristalino: o músculo ciliar liso forma um anel esfincteriano; sua contração parassimpática diminui o diâmetro do anel, afrouxando a tensão sobre a Zônula de Zinn. A cápsula elástica própria do cristalino faz com que ele assuma formato mais esférico/convexo, aumentando seu poder dióptrico de refração; 2) Convergência: os retos mediais rodam os dois olhos para dentro; 3) Miose: a constrição pupilar corta os raios de aberração esférica periférica.",
    officialReference: "Guyton & Hall, Cap. 50; Kandel, Cap. 27",
    keyTakeaway: "Tríade de perto: contração do músculo ciliar (cristalino mais convexo) + convergência ocular + miose pupilar."
  },
  {
    id: "sen-84",
    subjectId: "sensorial",
    subtopic: "Vias Somatossensoriais Centrais",
    difficulty: "Médio",
    question: "A sensibilidade de Tato Epicrítico (fino/discriminativo), Estereognosia, Vibração (palestesia) e Propriocepção Consciente dos membros e tronco ascende ao cérebro através de qual via da medula espinhal e cruza a linha média em qual nível anatômico?",
    options: [
      "Via da Coluna Dorsal-Lemnisco Medial (fascículos grácil e cuneiforme), cujos axônios primários sobem ipsilateralmente na medula e cruzam a linha média (decussação sensorial dos lemniscos) apenas no Bulbo encefálico",
      "Trato espinotalâmico anterior, que cruza imediatamente 10 cm abaixo na cauda equina",
      "Trato rubroespinal que não cruza a linha média",
      "Via simpática paravertebral torácica exclusivamente"
    ],
    correctIndex: 0,
    explanation: "Na via da Coluna Dorsal-Lemnisco Medial: Os axônios grossos mielinizados (A-alfa/A-beta) entram pelo corno posterior e sobem diretamente sem cruzar no funículo posterior ipsilateral da medula (fascículo grácil para membros inferiores e cuneiforme para membros superiores). Eles fazem a primeira sinapse nos núcleos grácil e cuneiforme do bulbo baixo. Os neurônios de 2ª ordem emitem axônios chamados fibras arqueadas internas que decussam no bulbo formando o Lemnisco Medial contralateral, ascendendo ao núcleo ventral posterolateral (VPL) do tálamo e córtex somatossensorial primário (S1).",
    officialReference: "Guyton & Hall, Cap. 48; Bear, Cap. 12",
    keyTakeaway: "Coluna Dorsal-Lemnisco Medial (tato fino e propriocepção): sobe ipsilateral na medula e só decussa no Bulbo."
  },
  {
    id: "sen-85",
    subjectId: "sensorial",
    subtopic: "Semiologia Auditiva - Testes de Rinne e Weber",
    difficulty: "Difícil",
    question: "Na avaliação semiológica da acuidade auditiva com diapasão vibrante (512 Hz), um paciente com Perda Auditiva Condutiva pura no ouvido direito (por exemplo, cerume impactado ou otite média com efusão) apresentará os seguintes resultados nos Testes de Rinne e Weber:",
    options: [
      "Teste de Rinne negativo no ouvido direito (condução óssea supera a condução aérea: BC > AC) e Teste de Weber lateralizando para o ouvido direito afetado",
      "Teste de Rinne positivo em ambos os ouvidos e Weber lateralizando para o ouvido esquerdo saudável",
      "Incapacidade total de sentir a vibração óssea na fronte",
      "Teste de Weber indiferenciado associado a nistagmo torsional espontâneo"
    ],
    correctIndex: 0,
    explanation: "No Teste de Rinne: normalmente a condução aérea é mais eficiente que a óssea (Rinne positivo: AC > BC). Na perda condutiva (bloqueio mecânico no canal auditivo externo ou orelha média), o som aéreo é abafado, de modo que a vibração transmitida pelo osso mastóideo soa mais alta que pelo ar (Rinne negativo: BC > AC no ouvido doente). No Teste de Weber (diapasão na linha média da fronte/vértice), a condução óssea transmite o som igualmente para ambas as cócleas; no ouvido com defeito de condução, a ausência de ruído ambiente competidor mascarador faz com que o som seja percebido muito mais alto do lado acometido (Weber lateraliza para o ouvido doente).",
    officialReference: "Porto - Semiologia Médica; Bickley - Bates Guia de Exame Físico",
    keyTakeaway: "Perda auditiva condutiva: Rinne negativo (BC > AC) no ouvido doente e Weber lateraliza para o ouvido acometido."
  }
];

