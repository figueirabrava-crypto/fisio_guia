import { Question } from "../../types";

export const FISIOLOGIA_CELULAR_QUESTIONS: Question[] = [
  {
    id: "cel-01",
    subjectId: "fisiologia-celular",
    subtopic: "Membrana Plasmática",
    difficulty: "Fácil",
    question: "O modelo do 'mosaico fluido' descreve a membrana plasmática como:",
    options: [
      "Uma bicamada lipídica com fosfolipídios em constante movimentação lateral e proteínas inseridas ou associadas",
      "Uma placa rígida e estática de proteínas unidas por ligações covalentes permanentes",
      "Uma camada única de triglicerídeos impermeável à água e aos gases",
      "Um envoltório celulósico com poros abertos e sem lipídios"
    ],
    correctIndex: 0,
    explanation: "Proposto por Singer e Nicolson, o modelo do mosaico fluido estabelece que a bicamada de fosfolipídios forma uma matriz líquida bidimensional na qual proteínas integrais e periféricas deslizam lateralmente, conferindo maleabilidade e permeabilidade seletiva.",
    officialReference: "Alberts - Biologia Molecular da Célula, Cap. 10; Silverthorn, Cap. 3",
    keyTakeaway: "Mosaico fluido: bicamada fosfolipídica maleável com proteínas móveis inseridas."
  },
  {
    id: "cel-02",
    subjectId: "fisiologia-celular",
    subtopic: "Mitocôndria & ATP",
    difficulty: "Fácil",
    question: "Qual organela é a principal responsável pela geração de energia na forma de ATP por meio da respiração celular aeróbia?",
    options: [
      "Mitocôndria",
      "Lisossomo",
      "Complexo de Golgi",
      "Centríolo"
    ],
    correctIndex: 0,
    explanation: "Conforme ilustrado no infográfico oficial: 'Mitocôndria (produz energia - ATP)'. Através do ciclo do ácido cítrico na matriz e da fosforilação oxidativa acoplada à ATP sintase nas cristas mitocondriais, a mitocôndria gera mais de 90% do ATP celular.",
    officialReference: "Guyton & Hall, Cap. 2; Silverthorn, Cap. 4",
    keyTakeaway: "Mitocôndria = usina energética que sintetiza ATP por respiração aeróbia."
  },
  {
    id: "cel-03",
    subjectId: "fisiologia-celular",
    subtopic: "Ribossomos",
    difficulty: "Fácil",
    question: "A função primária dos ribossomos no citoplasma e aderidos ao retículo endoplasmático rugoso é:",
    options: [
      "Realizar a tradução do RNA mensageiro para síntese de proteínas",
      "Oxidar ácidos graxos de cadeia longa em peróxido de hidrogênio",
      "Armazenar cálcio para a contração muscular",
      "Empacotar glicose na forma de glicogênio hepático"
    ],
    correctIndex: 0,
    explanation: "Os ribossomos, formados por RNAr e proteínas ribossomais divididos em subunidades maior e menor, traduzem a sequência de códons do RNA mensageiro em cadeias de aminoácidos durante a síntese proteica.",
    officialReference: "Alberts, Cap. 6; Junqueira & Carneiro, Cap. 2",
    keyTakeaway: "Ribossomos = síntese de proteínas através da tradução do RNAm."
  },
  {
    id: "cel-04",
    subjectId: "fisiologia-celular",
    subtopic: "Complexo de Golgi",
    difficulty: "Fácil",
    question: "Qual organela membranosa recebe proteínas do retículo endoplasmático, promovendo sua modificação pós-traducional, glicosilação e empacotamento em vesículas secretoras?",
    options: [
      "Complexo de Golgi",
      "Peroxissomo",
      "Nucléolo",
      "Vacúolo contrátil"
    ],
    correctIndex: 0,
    explanation: "O Complexo de Golgi atua como centro de distribuição e acabamento celular. Ele recebe vesículas da face cis, promove glicosilação terminal, fosforilação e sulfatação, e despacha vesículas direcionadas a lisossomos, membrana ou secreção exocítica pela face trans.",
    officialReference: "Junqueira & Carneiro, Cap. 2; Guyton & Hall, Cap. 2",
    keyTakeaway: "Golgi = modifica, glicosila, empacota e endereça proteínas."
  },
  {
    id: "cel-05",
    subjectId: "fisiologia-celular",
    subtopic: "Lisossomos",
    difficulty: "Fácil",
    question: "Os lisossomos contêm enzimas hidrolíticas ativas em pH ácido cuja função primordial é:",
    options: [
      "Digestão celular intracelular e reciclagem de organelas velhas (autofagia)",
      "Síntese direta de novos cromossomos durante a mitose",
      "Transporte de oxigênio ligado à hemoglobina",
      "Geração de calor sem produção de energia mecânica"
    ],
    correctIndex: 0,
    explanation: "Os lisossomos contêm cerca de 40 hidrolases ácidas (proteases, nucleases, lipases) que funcionam otimamente em pH ~4.5-5.0 mantido por uma bomba de prótons H+-ATPase, digerindo substâncias fagocitadas e organelas danificadas.",
    officialReference: "Alberts, Cap. 12; Silverthorn, Cap. 3",
    keyTakeaway: "Lisossomos = enzimas ácidas para digestão celular e autofagia."
  },
  {
    id: "cel-06",
    subjectId: "fisiologia-celular",
    subtopic: "Retículo Endoplasmático",
    difficulty: "Médio",
    question: "O Retículo Endoplasmático Liso (ou agranular) diferencia-se do Rugoso por não conter ribossomos e destacar-se na:",
    options: [
      "Síntese de lipídios e esteroides, metabolismo de carboidratos, detoxificação e armazenamento de cálcio",
      "Tradução de histonas e síntese de RNA transportador",
      "Digestão de bactérias por fagocitose direta",
      "Fixação de gás carbônico durante o repouso"
    ],
    correctIndex: 0,
    explanation: "O RE Liso sintetiza fosfolipídios e hormônios esteroides a partir do colesterol, contém enzimas citocromo P450 para detoxificar fármacos no fígado e funciona como retículo sarcoplasmático em células musculares estocando íons Ca2+.",
    officialReference: "Junqueira & Carneiro, Cap. 2; Guyton & Hall, Cap. 2",
    keyTakeaway: "RE Liso = síntese de lipídios/esteroides, detoxificação e reserva de cálcio."
  },
  {
    id: "cel-07",
    subjectId: "fisiologia-celular",
    subtopic: "Transporte Ativo Primário",
    difficulty: "Fácil",
    question: "O transporte ativo primário através da membrana celular caracteriza-se por:",
    options: [
      "Mover solutos contra o gradiente eletroquímico com hidrólise direta de ATP",
      "Ocorrer a favor do gradiente sem gasto energético celular",
      "Depender exclusivamente da força da gravidade",
      "Utilizar a energia cinética de outro íon sem usar ATP em nenhuma etapa"
    ],
    correctIndex: 0,
    explanation: "No transporte ativo primário, a própria proteína carreadora (como a Na+/K+ ATPase, Ca2+ ATPase ou H+/K+ ATPase) possui atividade enzimática ATPase, quebrando ATP diretamente para forçar íons contra seus gradientes de concentração.",
    officialReference: "Silverthorn, Cap. 5; Guyton & Hall, Cap. 4",
    keyTakeaway: "Transporte ativo primário consome ATP diretamente na própria bomba."
  },
  {
    id: "cel-08",
    subjectId: "fisiologia-celular",
    subtopic: "Transporte Ativo Secundário",
    difficulty: "Médio",
    question: "O cotransporte de sódio-glicose (SGLT1) no epitélio intestinal e túbulo proximal renal é um exemplo clássico de:",
    options: [
      "Transporte ativo secundário do tipo simporte",
      "Difusão simples por canais aquosos",
      "Transporte passivo facilitado por transportador GLUT",
      "Antiporte acoplado a prótons"
    ],
    correctIndex: 0,
    explanation: "O transportador SGLT move Na+ a favor de seu gradiente eletroquímico para impulsionar a glicose contra seu gradiente para o mesmo lado (simporte). A energia deriva indiretamente do gradiente de sódio previamente estabelecido pela bomba de Na+/K+ ATPase.",
    officialReference: "Silverthorn, Cap. 5; Berne & Levy, Cap. 1",
    keyTakeaway: "SGLT = transporte ativo secundário simporte movido pelo gradiente de Na+."
  },
  {
    id: "cel-09",
    subjectId: "fisiologia-celular",
    subtopic: "Difusão Facilitada",
    difficulty: "Fácil",
    question: "Os transportadores da família GLUT (como o GLUT4 dependente de insulina) realizam o transporte de glicose por:",
    options: [
      "Difusão facilitada a favor do gradiente de concentração, sem consumo de ATP",
      "Transporte ativo primário com gasto direto de 2 ATPs por molécula",
      "Osmose pura através da bicamada fosfolipídica",
      "Endocitose mediada por caveolina"
    ],
    correctIndex: 0,
    explanation: "Os transportadores GLUT ligam-se à glicose extracelular, mudam de conformação e a liberam no citoplasma a favor do gradiente (onde a concentração intracelular é mantida baixa pela rápida fosforilação em glicose-6-fosfato). Não há consumo de ATP.",
    officialReference: "Silverthorn, Cap. 5; Guyton & Hall, Cap. 4",
    keyTakeaway: "Transportadores GLUT operam por difusão facilitada (passivo, sem ATP)."
  },
  {
    id: "cel-10",
    subjectId: "fisiologia-celular",
    subtopic: "Osmose e Tonicidade",
    difficulty: "Fácil",
    question: "Se uma hemácia for colocada em uma solução hipotônica (como água destilada pura), o que acontecerá com seu volume celular?",
    options: [
      "A água entrará rapidamente na hemácia por osmose, provocando inchaço e lise osmótica (hemólise)",
      "A hemácia perderá água e sofrerá crenação (murchamento)",
      "O volume permanecerá perfeitamente inalterado devido à membrana rígida",
      "A hemácia começará a secretar ativamente sal contra o gradiente"
    ],
    correctIndex: 0,
    explanation: "Em solução hipotônica, a osmolaridade extracelular é menor do que a intracelular. A água move-se a favor de seu gradiente químico (da menor concentração de soluto para a maior), penetrando na célula até distender a membrana frágil da hemácia e provocar hemólise.",
    officialReference: "Silverthorn, Cap. 5; Guyton & Hall, Cap. 4",
    keyTakeaway: "Meio hipotônico = água entra na célula = inchaço e lise celular."
  },
  {
    id: "cel-11",
    subjectId: "fisiologia-celular",
    subtopic: "Osmose e Tonicidade",
    difficulty: "Fácil",
    question: "Qual é a osmolaridade plasmática fisiológica média no organismo humano normal?",
    options: [
      "Aproximadamente 285 a 295 mOsm/L",
      "Cerca de 100 mOsm/L",
      "Mais de 600 mOsm/L",
      "Exatamente 0 mOsm/L"
    ],
    correctIndex: 0,
    explanation: "O líquido extracelular e intracelular de humanos normais possui osmolaridade mantida estritamente entre 280 e 295 mOsm/kg H2O. Soluções como o soro fisiológico a 0,9% (NaCl) e ringer lactato são consideradas isotônicas por terem osmolaridade próxima a 300 mOsm/L.",
    officialReference: "Guyton & Hall, Cap. 25; Silverthorn, Cap. 5",
    keyTakeaway: "Osmolaridade corporal normal = 285 a 295 mOsm/L."
  },
  {
    id: "cel-12",
    subjectId: "fisiologia-celular",
    subtopic: "Fosforilação Oxidativa",
    difficulty: "Médio",
    question: "Na cadeia transportadora de elétrons mitocondrial, qual molécula atua como aceptor final de elétrons e prótons, formando água?",
    options: [
      "Oxigênio molecular (O2)",
      "Gás carbônico (CO2)",
      "Piruvato",
      "NADH"
    ],
    correctIndex: 0,
    explanation: "No Complexo IV (citocromo c oxidase), os elétrons que percorreram a cadeia respiratória são finalmente transferidos para o O2 molecular, que se combina com prótons da matriz para formar H2O. Sem O2, a cadeia é bloqueada e cessa a síntese mitocondrial de ATP.",
    officialReference: "Alberts, Cap. 14; Guyton & Hall, Cap. 68",
    keyTakeaway: "Oxigênio (O2) = aceptor final de elétrons na cadeia respiratória mitocondrial."
  },
  {
    id: "cel-13",
    subjectId: "fisiologia-celular",
    subtopic: "Glicólise",
    difficulty: "Médio",
    question: "A glicólise ocorre no citoplasma celular e produz um saldo líquido por molécula de glicose de:",
    options: [
      "2 ATPs, 2 NADHs e 2 moléculas de piruvato",
      "32 ATPs e 6 moléculas de CO2",
      "1 ATP e 4 moléculas de ácido lático",
      "Nenhum ATP, apenas calor"
    ],
    correctIndex: 0,
    explanation: "A glicólise citoplasmática não consome oxigênio: gasta 2 ATPs nas etapas de ativação e gera 4 ATPs por fosforilação ao nível do substrato, resultando em saldo líquido de 2 ATPs, 2 moléculas de piruvato e 2 NADHs reduzidos.",
    officialReference: "Lehninger - Princípios de Bioquímica, Cap. 14; Silverthorn, Cap. 4",
    keyTakeaway: "Glicólise citosólica líquida = 2 ATP, 2 NADH e 2 piruvatos."
  },
  {
    id: "cel-14",
    subjectId: "fisiologia-celular",
    subtopic: "Comunicação Celular",
    difficulty: "Fácil",
    question: "Quando uma célula secreta uma molécula sinalizadora que atua em receptores da própria célula que a liberou, essa comunicação é classificada como:",
    options: [
      "Autócrina",
      "Parácrina",
      "Endócrina",
      "Justácrina"
    ],
    correctIndex: 0,
    explanation: "Comunicação autócrina: a substância atua na própria célula produtora (ex: interleucina-2 em linfócitos T). Parácrina: atua em células vizinhas. Endócrina: cai na circulação sanguínea atingindo alvos distantes.",
    officialReference: "Silverthorn, Cap. 6; Guyton & Hall, Cap. 75",
    keyTakeaway: "Autócrina = atua na própria célula secretora."
  },
  {
    id: "cel-15",
    subjectId: "fisiologia-celular",
    subtopic: "Segundos Mensageiros",
    difficulty: "Médio",
    question: "O AMP cíclico (AMPc) é um segundo mensageiro intracelular clássico gerado a partir do ATP pela enzima de membrana:",
    options: [
      "Adenilil ciclase",
      "Fosfolipase C",
      "Proteína quinase C",
      "ATP sintase"
    ],
    correctIndex: 0,
    explanation: "Receptores acoplados à proteína Gs ativam a adenilil ciclase de membrana, que cicliza o ATP em AMPc. O AMPc difunde-se no citosol e ativa a Proteína Quinase A (PKA), fosforilando enzimas e fatores de transcrição.",
    officialReference: "Silverthorn, Cap. 6; Alberts, Cap. 15",
    keyTakeaway: "Adenilil ciclase converte ATP em AMPc, que ativa a PKA."
  },
  {
    id: "cel-16",
    subjectId: "fisiologia-celular",
    subtopic: "Fosfolipase C",
    difficulty: "Difícil",
    question: "A ativação da proteína Gq estimula a fosfolipase C-beta, que cliva o fosfatidilinositol 4,5-bisfosfato (PIP2) em quais dois mensageiros secundários?",
    options: [
      "Inositol 1,4,5-trisfosfato (IP3) e Diacilglicerol (DAG)",
      "AMPc e GMPc",
      "Colesterol e ácido araquidônico",
      "Piruvato e acetil-CoA"
    ],
    correctIndex: 0,
    explanation: "A fosfolipase C cliva PIP2 gerando IP3 solúvel (que vai ao retículo endoplasmático abrir canais de Ca2+) e DAG lipofílico que permanece na membrana ativando a Proteína Quinase C (PKC).",
    officialReference: "Alberts, Cap. 15; Silverthorn, Cap. 6",
    keyTakeaway: "Proteína Gq -> Fosfolipase C cliva PIP2 em IP3 (libera Ca2+) e DAG (ativa PKC)."
  },
  {
    id: "cel-17",
    subjectId: "fisiologia-celular",
    subtopic: "Peroxissomos",
    difficulty: "Fácil",
    question: "Qual organela celular é especializada na beta-oxidação de ácidos graxos de cadeia muito longa e na degradação de peróxido de hidrogênio (H2O2) pela enzima catalase?",
    options: [
      "Peroxissomo",
      "Lisossomo",
      "Nucléolo",
      "Centrossomo"
    ],
    correctIndex: 0,
    explanation: "Os peroxissomos utilizam oxigênio molecular para oxidar substratos orgânicos gerando H2O2, e empregam a catalase para converter o tóxico peróxido de hidrogênio em água e oxigênio inócuos.",
    officialReference: "Junqueira & Carneiro, Cap. 2; Alberts, Cap. 12",
    keyTakeaway: "Peroxissomo = degradação de ácidos graxos e quebra de H2O2 por catalase."
  },
  {
    id: "cel-18",
    subjectId: "fisiologia-celular",
    subtopic: "Citoesqueleto",
    difficulty: "Médio",
    question: "O fuso mitótico que segrega os cromossomos durante a divisão celular é composto fundamentalmente por polímeros de:",
    options: [
      "Microtúbulos formados por dímeros de alfa e beta-tubulina",
      "Microfilamentos de actina globular",
      "Filamentos intermediários de queratina",
      "Fibras elásticas de elastina"
    ],
    correctIndex: 0,
    explanation: "Os microtúbulos são cilindros ocos polares de 25 nm de diâmetro formados por heterodímeros de tubulina. Eles irradiam a partir dos centrossomos formando o fuso mitótico que se conecta aos cinetócoros dos cromossomos.",
    officialReference: "Alberts, Cap. 17; Junqueira & Carneiro, Cap. 2",
    keyTakeaway: "Fuso mitótico = microtúbulos de tubulina."
  },
  {
    id: "cel-19",
    subjectId: "fisiologia-celular",
    subtopic: "Ciclo Celular",
    difficulty: "Fácil",
    question: "Em qual fase da interfase ocorre a replicação semiconservativa completa de todo o DNA nuclear?",
    options: [
      "Fase S (Síntese)",
      "Fase G1 (Gap 1)",
      "Fase G2 (Gap 2)",
      "Telófase"
    ],
    correctIndex: 0,
    explanation: "A interfase é composta por G1 (crescimento e síntese de organelas), Fase S (duplicação fiel do DNA celular de 2n para 4c) e G2 (checagem do DNA e preparação final para a mitose).",
    officialReference: "Alberts, Cap. 17; Silverthorn, Cap. 3",
    keyTakeaway: "Fase S = Síntese e duplicação completa do DNA."
  },
  {
    id: "cel-20",
    subjectId: "fisiologia-celular",
    subtopic: "Apoptose",
    difficulty: "Médio",
    question: "A apoptose (morte celular programada) difere da necrose porque na apoptose ocorre:",
    options: [
      "Fragmentação ordenada do DNA, encolhimento celular e formação de corpos apoptóticos sem resposta inflamatória tecidual",
      "Ruptura explosiva da membrana com liberação de enzimas e intensa inflamação local",
      "Multiplicação mitocondrial acelerada e tumoração",
      "Inchaço maciço do citoplasma por entrada descontrolada de água"
    ],
    correctIndex: 0,
    explanation: "A apoptose é um processo ativo e geneticamente controlado executado por caspases. A célula condensa a cromatina, preserva a integridade de membrana em corpos apoptóticos fagocitados por macrófagos, sem vazamento tóxico nem inflamação.",
    officialReference: "Alberts, Cap. 18; Robbins & Cotran - Patologia Estrutural e Funcional, Cap. 1",
    keyTakeaway: "Apoptose = morte celular programada e limpa, sem inflamação."
  },
  {
    id: "cel-21",
    subjectId: "fisiologia-celular",
    subtopic: "Junções Celulares",
    difficulty: "Médio",
    question: "As junções comunicantes (Gap Junctions) são canais proteicos formados por conexinas cuja principal função fisiológica é:",
    options: [
      "Permitir a passagem direta de íons e pequenas moléculas entre células vizinhas, promovendo acoplamento elétrico e metabólico",
      "Selar o espaço intercelular de modo impermeável impedindo a passagem de fluidos",
      "Ancorar os filamentos intermediários à lâmina basal através de integrinas",
      "Destruir toxinas que tentam penetrar no espaço intercelular"
    ],
    correctIndex: 0,
    explanation: "As junções gap são formadas por hexâmeros de conexina que formam canais aquosos alinhados entre duas células adjacentes. Permitem passagem livre de íons (Na+, K+, Ca2+) e segundos mensageiros, permitindo a despolarização sincicial no músculo cardíaco e músculo liso.",
    officialReference: "Alberts, Cap. 19; Silverthorn, Cap. 3",
    keyTakeaway: "Junções comunicantes (gap) = canais de conexinas para acoplamento elétrico e iônico."
  },
  {
    id: "cel-22",
    subjectId: "fisiologia-celular",
    subtopic: "Junções Celulares",
    difficulty: "Fácil",
    question: "Qual tipo de junção celular é responsável por formar uma barreira impermeável que impede a passagem paracelular de substâncias entre células epiteliais (como no intestino e rins)?",
    options: [
      "Zônula de oclusão (Junção estreita / Tight Junction)",
      "Desmossomo (Mácula de adesão)",
      "Hemidesmossomo",
      "Junção comunicante"
    ],
    correctIndex: 0,
    explanation: "As tight junctions (zônulas de oclusão), formadas por ocludinas e claudinas, circundam o ápice das células epiteliais, vedando o espaço intercelular e segregando os domínios de membrana apical e basolateral.",
    officialReference: "Junqueira & Carneiro, Cap. 4; Silverthorn, Cap. 3",
    keyTakeaway: "Tight Junctions = vedação impermeável contra passagem paracelular."
  },
  {
    id: "cel-23",
    subjectId: "fisiologia-celular",
    subtopic: "Endocitose Mediada por Receptor",
    difficulty: "Médio",
    question: "A captação celular de partículas de LDL (colesterol) é o exemplo mais clássico de:",
    options: [
      "Endocitose mediada por receptor em fossetas revestidas por clatrina",
      "Pinocitose inespecífica de fase fluida",
      "Fagocitose por emissão de grandes pseudópodes",
      "Difusão passiva direta pelos lipídios de membrana"
    ],
    correctIndex: 0,
    explanation: "A partícula de LDL liga-se especificamente ao receptor de LDL na superfície celular, que se acumula em depressões revestidas pela proteína clatrina. A fosseta invagina-se e desprende-se como vesícula endocítica com auxílio da dinamina.",
    officialReference: "Alberts, Cap. 13; Guyton & Hall, Cap. 2",
    keyTakeaway: "Captação de LDL = endocitose mediada por receptor e vesículas de clatrina."
  },
  {
    id: "cel-24",
    subjectId: "fisiologia-celular",
    subtopic: "Proteassomo & Ubiquitina",
    difficulty: "Médio",
    question: "Proteínas citosólicas mal dobradas, envelhecidas ou que precisam ser rapidamente degradadas são marcadas covalentemente por qual peptídeo para destruição no proteassomo 26S?",
    options: [
      "Ubiquitina",
      "Insulina",
      "Actina",
      "Glutationa"
    ],
    correctIndex: 0,
    explanation: "A cascata enzimática de ubiquitinação (E1, E2 e E3 ligases) adiciona cadeias de poliubiquitina às lisinas da proteína-alvo. O complexo proteassomo 26S reconhece essa etiqueta, desdobra a proteína e a degrada em pequenos peptídeos.",
    officialReference: "Alberts, Cap. 6; Lehninger, Cap. 27",
    keyTakeaway: "Ubiquitina marca proteínas para trituração enzimática no proteassomo."
  },
  {
    id: "cel-25",
    subjectId: "fisiologia-celular",
    subtopic: "Fluidez de Membrana",
    difficulty: "Médio",
    question: "Qual componente lipídico atua como um 'tampão de fluidez' na membrana plasmática animal, reduzindo a fluidez em temperaturas altas e impedindo a solidificação em baixas temperaturas?",
    options: [
      "Colesterol",
      "Ácido láctico",
      "Esfingomielina pura",
      "Glicose livre"
    ],
    correctIndex: 0,
    explanation: "O colesterol, molécula planar rígida com pequeno grupo hidroxila, intercala-se entre as caudas de fosfolipídios. Em temperaturas elevadas, ele restringe o movimento das caudas hidrofóbicas; em baixas temperaturas, impede o empacotamento compacto excessivo.",
    officialReference: "Alberts, Cap. 10; Silverthorn, Cap. 3",
    keyTakeaway: "Colesterol estabiliza e tampona a fluidez da membrana em diferentes temperaturas."
  },
  {
    id: "cel-26",
    subjectId: "fisiologia-celular",
    subtopic: "Ciclo de Krebs",
    difficulty: "Médio",
    question: "Onde ocorrem as reações enzimáticas do Ciclo do Ácido Cítrico (Ciclo de Krebs) dentro da célula eucariótica?",
    options: [
      "Na matriz mitocondrial",
      "No lúmen do complexo de Golgi",
      "No estroma cloroplastídico",
      "No citosol livre adjacente à membrana plasmática"
    ],
    correctIndex: 0,
    explanation: "O piruvato é transportado para a matriz mitocondrial e convertido em acetil-CoA pela piruvato desidrogenase. Todas as enzimas do Ciclo de Krebs residem dissolvidas na matriz mitocondrial (com exceção da succinato desidrogenase, inserida na membrana interna).",
    officialReference: "Lehninger, Cap. 16; Guyton & Hall, Cap. 68",
    keyTakeaway: "Ciclo de Krebs ocorre na matriz mitocondrial."
  },
  {
    id: "cel-27",
    subjectId: "fisiologia-celular",
    subtopic: "ATP Sintase",
    difficulty: "Difícil",
    question: "A síntese de ATP pela ATP sintase mitocondrial (Complexo V) é acionada diretamente por qual força motriz?",
    options: [
      "Gradiente eletroquímico de prótons (força próton-motriz de H+) através da membrana interna",
      "Influxo maciço de íons cloreto da matriz para o espaço intermembranar",
      "Degradação direta de ribossomos velhos",
      "Pressão mecânica exercida pela membrana externa"
    ],
    correctIndex: 0,
    explanation: "A hipótese quimiosmótica de Peter Mitchell estabelece que os complexos I, III e IV bombeiam prótons da matriz para o espaço intermembranar. O fluxo de retorno desses prótons através do rotor da ATP sintase (subunidades F0 e F1) aciona a fosforilação rotacional do ADP em ATP.",
    officialReference: "Lehninger, Cap. 19; Alberts, Cap. 14",
    keyTakeaway: "ATP sintase é impulsionada pelo gradiente eletroquímico de prótons (H+)."
  },
  {
    id: "cel-28",
    subjectId: "fisiologia-celular",
    subtopic: "Nucléolo",
    difficulty: "Fácil",
    question: "O nucléolo é uma região intranuclear densa desprovida de membrana especializada na:",
    options: [
      "Transcrição do RNA ribossômico (RNAr) e montagem das subunidades dos ribossomos",
      "Produção dos fosfolipídios de membrana",
      "Quebra de ácidos graxos em acetil-CoA",
      "Secreção de insulina"
    ],
    correctIndex: 0,
    explanation: "No nucléolo, múltiplos genes de RNAr são transcritos pela RNA polimerase I, associam-se a proteínas ribossômicas importadas do citoplasma e formam as subunidades pré-ribossômicas 40S e 60S que são exportadas via poros nucleares.",
    officialReference: "Alberts, Cap. 6; Junqueira & Carneiro, Cap. 3",
    keyTakeaway: "Nucléolo = síntese de RNAr e montagem das subunidades ribossômicas."
  },
  {
    id: "cel-29",
    subjectId: "fisiologia-celular",
    subtopic: "Aquaporinas",
    difficulty: "Fácil",
    question: "As aquaporinas são canais proteicos integrais de membrana cuja função primordial é:",
    options: [
      "Permitir o fluxo rápido e bidirecional de água por osmose através da membrana celular",
      "Bombear glicose com gasto de 3 moléculas de ATP",
      "Conduzir potenciais de ação de alta voltagem",
      "Capturar bactérias extracelulares por pinocitose"
    ],
    correctIndex: 0,
    explanation: "Descobertas por Peter Agre (Nobel de 2003), as aquaporinas facilitam o transporte transmembrana de água em altíssima velocidade (bilhões de moléculas por segundo por canal), bloqueando estritamente a passagem de prótons e outros íons.",
    officialReference: "Silverthorn, Cap. 5; Guyton & Hall, Cap. 4",
    keyTakeaway: "Aquaporinas = canais proteicos dedicados ao transporte rápido de água."
  },
  {
    id: "cel-30",
    subjectId: "fisiologia-celular",
    subtopic: "Receptores Intracelulares",
    difficulty: "Médio",
    question: "Hormônios lipofílicos (como cortisol, estrogênio, testosterona e hormônios tireoidianos) atravessam livremente a membrana e ligam-se a:",
    options: [
      "Receptores intracelulares citosólicos ou nucleares que atuam como fatores de transcrição ativando genes",
      "Receptores canais acoplados a enzimas na superfície externa da membrana",
      "Receptores de membrana acoplados à proteína Gs exclusivamente",
      "Vesículas de clatrina na matriz extracelular"
    ],
    correctIndex: 0,
    explanation: "Por serem apolares e lipossolúveis, esses hormônios difundem-se através da bicamada lipídica. No citosol ou núcleo, acoplam-se a receptores nucleares específicos, que se ligam a elementos de resposta a hormônios (HRE) no DNA, modulando a síntese de proteínas.",
    officialReference: "Guyton & Hall, Cap. 75; Silverthorn, Cap. 6",
    keyTakeaway: "Hormônios esteroides ligam-se a receptores intracelulares e modulam a transcrição."
  },
  {
    id: "cel-31",
    subjectId: "fisiologia-celular",
    subtopic: "Fagocitose",
    difficulty: "Fácil",
    question: "Células como macrófagos e neutrófilos capturam bactérias e partículas grandes através de expansões citoplasmáticas chamadas:",
    options: [
      "Pseudópodes",
      "Cílios vibráteis",
      "Flagelos",
      "Microvilosidades fixas"
    ],
    correctIndex: 0,
    explanation: "Na fagocitose, a polimerização orientada de filamentos de actina projeta pseudópodes que englobam o patógeno, formando um fagossomo intracelular que se funde aos lisossomos para degradação.",
    officialReference: "Junqueira & Carneiro, Cap. 2; Guyton & Hall, Cap. 34",
    keyTakeaway: "Fagocitose = englobamento de grandes partículas por pseudópodes ricos em actina."
  },
  {
    id: "cel-32",
    subjectId: "fisiologia-celular",
    subtopic: "Autofagia",
    difficulty: "Médio",
    question: "O processo celular no qual organelas danificadas são envolvidas por uma dupla membrana formando um autofagossomo e encaminhadas à degradação lisossomal denomina-se:",
    options: [
      "Autofagia",
      "Exocitose regulada",
      "Metástase",
      "Necrose isquêmica"
    ],
    correctIndex: 0,
    explanation: "A autofagia (descoberta por Yoshinori Ohsumi, Nobel de 2016) é o mecanismo de controle de qualidade e sobrevivência sob privação de nutrientes, digerindo mitocôndrias senescentes (mitofagia) e reciclando aminoácidos e lipídios.",
    officialReference: "Alberts, Cap. 12; Silverthorn, Cap. 3",
    keyTakeaway: "Autofagia = reciclagem interna de organelas e agregados proteicos."
  },
  {
    id: "cel-33",
    subjectId: "fisiologia-celular",
    subtopic: "Envoltório Nuclear",
    difficulty: "Médio",
    question: "A troca de macromoléculas (como proteínas e RNA) entre o núcleo e o citoplasma ocorre obrigatoriamente através de:",
    options: [
      "Complexos de poro nuclear (NPC) formados por nucleoporinas",
      "Fagocitose através da carioteca",
      "Bomba de sódio e potássio nuclear",
      "Difusão simples lipídica direta sem controle proteico"
    ],
    correctIndex: 0,
    explanation: "O complexo de poro nuclear é uma estrutura octamétrica com mais de 30 nucleoporinas que permite difusão passiva de pequenas moléculas e transporte ativo altamente regulado de proteínas contendo sinais de localização nuclear (NLS) mediado por importinas/exportinas e a GTPase Ran.",
    officialReference: "Alberts, Cap. 12; Junqueira & Carneiro, Cap. 3",
    keyTakeaway: "Complexos de poro nuclear regulam o trânsito macromolecular núcleo-citoplasma."
  },
  {
    id: "cel-34",
    subjectId: "fisiologia-celular",
    subtopic: "Cálcio Intracelular",
    difficulty: "Médio",
    question: "O retículo sarcoplasmático em células musculares estriadas armazena grandes concentrações de íons cálcio com o auxílio de qual bomba de transporte ativo primário?",
    options: [
      "SERCA (Sarcoplasmic/Endoplasmic Reticulum Calcium ATPase)",
      "Bomba de Na+/K+ ATPase",
      "H+/K+ ATPase gástrica",
      "Complexo I da cadeia respiratória"
    ],
    correctIndex: 0,
    explanation: "A bomba SERCA remove ativamente o Ca2+ do citosol para o interior do retículo sarcoplasmático contra um enorme gradiente de concentração, consumindo ATP para permitir o relaxamento do músculo.",
    officialReference: "Guyton & Hall, Cap. 7; Silverthorn, Cap. 12",
    keyTakeaway: "Bomba SERCA recapta Ca2+ para o retículo, promovendo o relaxamento muscular."
  },
  {
    id: "cel-35",
    subjectId: "fisiologia-celular",
    subtopic: "Microfilamentos",
    difficulty: "Fácil",
    question: "Os microfilamentos do citoesqueleto celular, essenciais para motilidade, anel contrátil na citocinese e formação de microvilosidades, são constituídos por:",
    options: [
      "Actina",
      "Tubulina",
      "Colágeno tipo I",
      "Mielina"
    ],
    correctIndex: 0,
    explanation: "Microfilamentos são polímeros helicoidais de actina com 7 nm de diâmetro. Eles conferem suporte mecânico à membrana plasmática, formam o anel contrátil que estrangula a célula durante a divisão celular e sustentam as microvilosidades.",
    officialReference: "Alberts, Cap. 16; Junqueira & Carneiro, Cap. 2",
    keyTakeaway: "Microfilamentos = actina; sustentação de microvilosidades e citocinese."
  },
  {
    id: "cel-36",
    subjectId: "fisiologia-celular",
    subtopic: "Óxido Nítrico",
    difficulty: "Médio",
    question: "O óxido nítrico (NO) é um gás sinalizador parácrino produzido pelo endotélio vascular que difunde-se nas células musculares lisas e ativa a enzima:",
    options: [
      "Guanilil ciclase solúvel, elevando os níveis de GMPc e causando vasodilatação",
      "Adenilil ciclase, elevando o AMPc e causando constrição",
      "Fosfodiesterase tipo 5 para hidrolisar ATP",
      "ATP sintase na crista mitocondrial"
    ],
    correctIndex: 0,
    explanation: "O NO difunde-se facilmente pela membrana e liga-se ao grupo heme da guanilil ciclase citosólica, ativando a síntese de GMP cíclico (GMPc). O GMPc ativa a PKG, reduzindo o cálcio livre e provocando relaxamento do músculo liso vascular.",
    officialReference: "Guyton & Hall, Cap. 17; Silverthorn, Cap. 15",
    keyTakeaway: "Óxido Nítrico (NO) ativa guanilil ciclase -> GMPc -> relaxamento vascular."
  },
  {
    id: "cel-37",
    subjectId: "fisiologia-celular",
    subtopic: "Glicocálice",
    difficulty: "Fácil",
    question: "A camada superficial de carboidratos ligada a glicoproteínas e glicolipídios na face externa da membrana plasmática é o:",
    options: [
      "Glicocálice (glicocálix)",
      "Córtex celular",
      "Lâmina basal",
      "Lipossomo"
    ],
    correctIndex: 0,
    explanation: "O glicocálice é uma cobertura rica em oligossacarídeos que atua no reconhecimento célula-célula (como nos grupos sanguíneos ABO), adesão intercelular e proteção química e mecânica contra lesões enzimáticas.",
    officialReference: "Junqueira & Carneiro, Cap. 2; Alberts, Cap. 10",
    keyTakeaway: "Glicocálice = carboidratos de membrana para reconhecimento e proteção."
  },
  {
    id: "cel-38",
    subjectId: "fisiologia-celular",
    subtopic: "Fermentação Láctica",
    difficulty: "Médio",
    question: "Em condições de hipóxia severa (como no músculo esquelético durante exercício extenuante), o piruvato gerado na glicólise é convertido em:",
    options: [
      "Lactato pela enzima lactato desidrogenase, regenerando NAD+ para manter a glicólise funcionando",
      "Acetil-CoA diretamente no citosol sem gerar energia",
      "Etanol e gás carbônico idêntico às leveduras",
      "Glicose pura sem necessidade de ATP"
    ],
    correctIndex: 0,
    explanation: "Sem oxigênio suficiente, a cadeia mitocondrial cessa e o NADH acumula-se. A lactato desidrogenase reduz o piruvato a lactato e oxida o NADH de volta a NAD+, permitindo que a glicólise anaeróbia continue gerando seus 2 ATPs vitais.",
    officialReference: "Lehninger, Cap. 14; Silverthorn, Cap. 4",
    keyTakeaway: "Fermentação láctica regenera NAD+ para manter a produção de ATP na glicólise."
  },
  {
    id: "cel-39",
    subjectId: "fisiologia-celular",
    subtopic: "Filamentos Intermediários",
    difficulty: "Médio",
    question: "Qual classe do citoesqueleto confere grande resistência mecânica à tração celular, sendo representada pelas queratinas nos epitélios e pela lâmina nuclear no núcleo?",
    options: [
      "Filamentos intermediários",
      "Microtúbulos",
      "Microfilamentos de actina",
      "Centríolos"
    ],
    correctIndex: 0,
    explanation: "Com diâmetro de cerca de 10 nm, os filamentos intermediários (queratinas, vimentina, neurofilamentos, laminas nucleares) são polímeros de corda altamente resistentes a estresses físicos, impedindo o rompimento da célula quando estirada.",
    officialReference: "Alberts, Cap. 16; Junqueira & Carneiro, Cap. 2",
    keyTakeaway: "Filamentos intermediários (queratina) fornecem resistência contra estiramento e tração."
  },
  {
    id: "cel-40",
    subjectId: "fisiologia-celular",
    subtopic: "Potencial Eletroquímico",
    difficulty: "Médio",
    question: "A força que impulsiona o movimento de um íon através de um canal aberto na membrana depende de dois fatores fundamentais reunidos sob o termo:",
    options: [
      "Gradiente eletroquímico (diferença de concentração química e diferença de potencial elétrico)",
      "Gradiente de temperatura e umidade relativa",
      "Velocidade de rotação dos centríolos",
      "Tamanho dos lisossomos"
    ],
    correctIndex: 0,
    explanation: "Para íons com carga, a difusão depende da soma da força química (gradiente de concentração) e da força elétrica (atração ou repulsão pelas cargas internas e externas). Essa combinação constitui o gradiente eletroquímico.",
    officialReference: "Silverthorn, Cap. 5; Guyton & Hall, Cap. 4",
    keyTakeaway: "Gradiente eletroquímico = força química de concentração + força elétrica transmembrana."
  },
  {
    id: "cel-41",
    subjectId: "fisiologia-celular",
    subtopic: "DNA Mitocondrial",
    difficulty: "Fácil",
    question: "A mitocôndria humana possui material genético próprio (DNAmt) de formato circular que é transmitido hereditariamente:",
    options: [
      "Exclusivamente por herança materna através do citoplasma do óvulo",
      "Exclusivamente por herança paterna pelo flagelo do espermatozoide",
      "Em proporção igual de 50% paterno e 50% materno por recombinação meiótica",
      "Por mutações randômicas sem relação biológica com os genitores"
    ],
    correctIndex: 0,
    explanation: "O óvulo contribui com praticamente todo o citoplasma e dezenas de milhares de mitocôndrias para o zigoto. As poucas mitocôndrias do espermatozoide situadas na peça intermediária são marcadas por ubiquitina e degradadas após a fertilização.",
    officialReference: "Alberts, Cap. 14; Silverthorn, Cap. 3",
    keyTakeaway: "DNA mitocondrial tem herança estritamente materna."
  },
  {
    id: "cel-42",
    subjectId: "fisiologia-celular",
    subtopic: "Exocitose Constitutiva vs Regulada",
    difficulty: "Médio",
    question: "A secreção de hormônios (como a insulina) que aguarda um sinal celular específico (como elevação de cálcio citosólico) para descarregar suas vesículas é classificada como:",
    options: [
      "Exocitose regulada",
      "Exocitose constitutiva contínua",
      "Pinocitose passiva",
      "Transcitose espontânea"
    ],
    correctIndex: 0,
    explanation: "Na exocitose constitutiva, vesículas fundem-se continuamente à membrana para repor lipídios e proteínas. Na regulada, substâncias como enzimas e hormônios são armazenados em vesículas densas que só se fundem após um estímulo como elevação de Ca2+.",
    officialReference: "Alberts, Cap. 13; Junqueira & Carneiro, Cap. 2",
    keyTakeaway: "Exocitose regulada requer um gatilho prévio (sinal de cálcio)."
  },
  {
    id: "cel-43",
    subjectId: "fisiologia-celular",
    subtopic: "Receptores Tirosina Quinase",
    difficulty: "Difícil",
    question: "Receptores com atividade enzimática intrínseca tirosina quinase (RTKs), como o receptor de insulina e de fatores de crescimento (EGF), ativam-se por meio de:",
    options: [
      "Dimerização provocada pelo ligante seguida de autofosforilação cruzada em resíduos de tirosina",
      "Abertura direta de poros para entrada de cloreto",
      "Clivagem hidrolítica no interior dos lisossomos",
      "Fusão à mitocôndria para produzir ATP"
    ],
    correctIndex: 0,
    explanation: "A ligação da molécula sinalizadora aproxima os monômeros do receptor (dimerização). Os domínios quinase citoplasmáticos fosforilam resíduos de tirosina uns dos outros, criando sítios de ancoragem de alta afinidade para proteínas efetoras contendo domínios SH2.",
    officialReference: "Alberts, Cap. 15; Silverthorn, Cap. 6",
    keyTakeaway: "Receptores Tirosina Quinase sofrem dimerização e transfosforilação em tirosinas."
  },
  {
    id: "cel-44",
    subjectId: "fisiologia-celular",
    subtopic: "Bomba de Prótons V-ATPase",
    difficulty: "Médio",
    question: "A acidificação do interior dos lisossomos e endossomos para pH ~4.5 é realizada ativamente por qual transportador?",
    options: [
      "Bomba de prótons do tipo vacuola (V-ATPase) que hidrolisa ATP para bombear H+ para o lúmen",
      "Bomba de Na+/K+ ATPase",
      "Canais iônicos de cálcio voltagem-dependentes",
      "Co-transportador de glicose e sódio SGLT"
    ],
    correctIndex: 0,
    explanation: "A bomba V-ATPase (ATPase vacuolar) utiliza a energia da quebra do ATP para transportar íons H+ contra um gradiente de mais de cem vezes para o interior das vesículas lisossomais, criando o ambiente ácido requerido pelas hidrolases.",
    officialReference: "Alberts, Cap. 12; Silverthorn, Cap. 3",
    keyTakeaway: "V-ATPase consome ATP para bombear H+ e manter o lisossomo ácido."
  },
  {
    id: "cel-45",
    subjectId: "fisiologia-celular",
    subtopic: "Centríolos & Centrossomo",
    difficulty: "Fácil",
    question: "O centrossomo com seus dois centríolos perpendiculares atua como o principal:",
    options: [
      "Centro organizador de microtúbulos (MTOC) da célula animal",
      "Reservatório de ácidos biliares",
      "Local de tradução das histonas",
      "Centro de digestão de lipoproteínas"
    ],
    correctIndex: 0,
    explanation: "O centrossomo consiste em um par de centríolos formados por 9 trincas de microtúbulos imersos em material pericentriolar rico em gama-tubulina, que nucleia o crescimento e organização de todos os microtúbulos citoplasmáticos e do fuso mitótico.",
    officialReference: "Alberts, Cap. 16; Junqueira & Carneiro, Cap. 2",
    keyTakeaway: "Centrossomo = centro organizador de microtúbulos (MTOC)."
  },
  {
    id: "cel-46",
    subjectId: "fisiologia-celular",
    subtopic: "Desmossomos",
    difficulty: "Médio",
    question: "Os desmossomos (máculas de adesão) ancoram fortemente células vizinhas submetidas a grande atrito mecânico (como na epiderme e músculo cardíaco) conectando-se a quais componentes do citoesqueleto?",
    options: [
      "Filamentos intermediários (como queratinas ou desmina)",
      "Microtúbulos de alfa-tubulina",
      "Moléculas livres de glicogênio",
      "Canais de cálcio dependentes de voltagem"
    ],
    correctIndex: 0,
    explanation: "As caderinas desmossômicas (desmogleínas e desmocolinas) conectam-se no espaço extracelular e ancoram-se a placas proteicas citoplasmáticas que prendem os filamentos intermediários, distribuindo as forças de tração por todo o tecido.",
    officialReference: "Alberts, Cap. 19; Junqueira & Carneiro, Cap. 4",
    keyTakeaway: "Desmossomos conectam filamentos intermediários de células vizinhas para dar firmeza."
  },
  {
    id: "cel-47",
    subjectId: "fisiologia-celular",
    subtopic: "Proteína G Heterotrimérica",
    difficulty: "Médio",
    question: "Uma proteína G heterotrimérica em seu estado inativo em repouso encontra-se ligada a qual nucleotídeo em sua subunidade alfa?",
    options: [
      "GDP (Guanosina Difosfato)",
      "GTP (Guanosina Trifosfato)",
      "ATP (Adenosina Trifosfato)",
      "AMP cíclico"
    ],
    correctIndex: 0,
    explanation: "Em repouso, a subunidade alfa da proteína G está ligada ao GDP e associada ao dímero beta-gama. A ativação pelo receptor acoplado troca o GDP por GTP, dissociando a subunidade alfa-GTP para modular efetores como adenilil ciclase ou fosfolipase C.",
    officialReference: "Silverthorn, Cap. 6; Alberts, Cap. 15",
    keyTakeaway: "Proteína G inativa = ligada a GDP; Proteína G ativa = ligada a GTP."
  },
  {
    id: "cel-48",
    subjectId: "fisiologia-celular",
    subtopic: "Difusão Simples",
    difficulty: "Fácil",
    question: "Quais substâncias conseguem atravessar a bicamada lipídica da membrana por difusão simples passiva direta, sem necessitar de canais ou proteínas transportadoras?",
    options: [
      "Gases apolares pequenos (como O2, CO2 e N2) e moléculas lipossolúveis pequenas",
      "Grandes proteínas plasmáticas como albumina",
      "Íons com alta carga como sódio (Na+) e potássio (K+)",
      "Glicose e polissacarídeos complexos"
    ],
    correctIndex: 0,
    explanation: "Moléculas pequenas e sem carga elétrica, com alta lipossolubilidade (como oxigênio, gás carbônico, ácidos graxos e hormônios esteroides), dissolvem-se diretamente no interior hidrofóbico da bicamada lipídica e difundem-se a favor de seus gradientes.",
    officialReference: "Guyton & Hall, Cap. 4; Silverthorn, Cap. 5",
    keyTakeaway: "Gases (O2, CO2) e moléculas lipofílicas realizam difusão simples pela bicamada."
  },
  {
    id: "cel-49",
    subjectId: "fisiologia-celular",
    subtopic: "Checkpoints do Ciclo Celular",
    difficulty: "Difícil",
    question: "A proteína p53, frequentemente denominada 'guardiã do genoma', atua no ponto de checagem G1/S do ciclo celular principalmente:",
    options: [
      "Interrompendo a progressão do ciclo e ativando o reparo do DNA ou induzindo apoptose se o dano for irreparável",
      "Acelerando a replicação do DNA para sobrepujar mutações",
      "Impedindo a formação de membranas plasmáticas nos tecidos normais",
      "Convertendo glicose em colesterol"
    ],
    correctIndex: 0,
    explanation: "Danos ao DNA ativam quinases (ATM/ATR) que fosforilam e estabilizam p53. Como fator de transcrição, p53 induz p21 (um inibidor de CDK), travando o ciclo em G1 para reparo. Se o dano persistir, induz genes pró-apoptóticos como Bax.",
    officialReference: "Alberts, Cap. 17; Robbins & Cotran, Cap. 7",
    keyTakeaway: "p53 bloqueia o ciclo celular em G1 para reparo ou deflagra apoptose se houver mutação."
  },
  {
    id: "cel-50",
    subjectId: "fisiologia-celular",
    subtopic: "Estresse Oxidativo",
    difficulty: "Médio",
    question: "As espécies reativas de oxigênio (EROs / Radicais Livres) são subprodutos naturais do metabolismo mitocondrial que, em excesso, causam danos celulares neutralizados pelas enzimas antioxidantes:",
    options: [
      "Superóxido dismutase (SOD), catalase e glutationa peroxidase",
      "Pepsina, amilase e tripsina",
      "DNA polimerase e RNA helicase",
      "Acetilcolinesterase e renina"
    ],
    correctIndex: 0,
    explanation: "A SOD converte o ânion superóxido (O2-) em peróxido de hidrogênio (H2O2). A catalase e a glutationa peroxidase convertem esse H2O2 em água e oxigênio molecular inócuos, prevenindo peroxidação lipídica e lesão ao DNA.",
    officialReference: "Lehninger, Cap. 19; Robbins & Cotran, Cap. 1",
    keyTakeaway: "SOD, catalase e glutationa peroxidase formam a linha de defesa contra radicais livres."
  },
  {
    id: "cel-51",
    subjectId: "fisiologia-celular",
    subtopic: "Caspases",
    difficulty: "Difícil",
    question: "As enzimas executoras da cascata proteolítica da apoptose celular são conhecidas como:",
    options: [
      "Caspases (cisteíno-proteases dependentes de aspartato)",
      "Helicases",
      "Amilases",
      "Ligases de DNA"
    ],
    correctIndex: 0,
    explanation: "As caspases são sintetizadas como zimogênios inativos. Uma vez clivadas e ativadas pelas caspases iniciadoras (caspase-8 ou caspase-9), as caspases executoras (caspase-3 e 7) degradam o citoesqueleto e ativam a nuclease CAD, fragmentando o DNA.",
    officialReference: "Alberts, Cap. 18; Robbins & Cotran, Cap. 1",
    keyTakeaway: "Caspases são as enzimas proteolíticas executoras da apoptose."
  },
  {
    id: "cel-52",
    subjectId: "fisiologia-celular",
    subtopic: "Homeostase",
    difficulty: "Fácil",
    question: "O conceito de homeostase, formulado por Claude Bernard e refinado por Walter Cannon, define:",
    options: [
      "A manutenção da constância dinâmica e equilíbrio das variáveis físico-químicas do meio interno corporal",
      "A multiplicação desordenada de células para substituir órgãos lesados",
      "A fixação estática e imutável de todas as substâncias corporais",
      "A perda progressiva de calor para o ambiente sem recuperação de energia"
    ],
    correctIndex: 0,
    explanation: "Homeostase é a capacidade dos organismos vivos de manterem condições internas estáveis (como temperatura, pH, osmolaridade, glicemia e volemia) através de circuitos de retroalimentação (feedback negativo), essenciais para que 'células saudáveis formem organismos funcionais'.",
    officialReference: "Guyton & Hall, Cap. 1; Silverthorn, Cap. 1",
    keyTakeaway: "Homeostase = manutenção ativa da estabilidade e equilíbrio dinâmico do meio interno."
  },
  {
    id: "cel-53",
    subjectId: "fisiologia-celular",
    subtopic: "Equação de Goldman-Hodgkin-Katz",
    difficulty: "Difícil",
    question: "A Equação de Goldman-Hodgkin-Katz (GHK) supera a Equação de Nernst simples na previsão do potencial de repouso porque ela considera:",
    options: [
      "A permeabilidade relativa da membrana e os gradientes de concentração de múltiplos íons simultaneamente (K+, Na+ e Cl-)",
      "Apenas o peso molecular dos carboidratos intracelulares",
      "O volume total de urina produzido por minuto",
      "A quantidade de hemoglobina presente nas hemácias"
    ],
    correctIndex: 0,
    explanation: "Enquanto Nernst calcula o potencial de equilíbrio para um único íon permeável, a equação de GHK calcula o potencial de membrana real pesando as concentrações intra e extracelulares de K+, Na+ e Cl- multiplicadas por seus respectivos coeficientes de permeabilidade relativa (P_K, P_Na, P_Cl).",
    officialReference: "Guyton & Hall, Cap. 5; Berne & Levy, Cap. 2",
    keyTakeaway: "GHK calcula o potencial transmembrana real ponderando múltiplos íons e suas permeabilidades."
  },
  {
    id: "cel-54",
    subjectId: "fisiologia-celular",
    subtopic: "Via do Óxido Nítrico e GMPc",
    difficulty: "Médio",
    question: "O óxido nítrico (NO) liberado pelas células endoteliais promove vasodilatação na musculatura lisa vascular através de qual mecanismo?",
    options: [
      "Difunde-se livremente e ativa a Guanilato Ciclase Solúvel (sGC), elevando o GMPc e ativando a Proteína Quinase G (PKG), que desfosforila a cadeia leve de miosina",
      "Bloqueia irreversivelmente todos os canais de potássio vasculares",
      "Ativa a bomba de sódio e potássio até a exaustão energética",
      "Promove o influxo maciço de cálcio através de canais mecanossensíveis"
    ],
    correctIndex: 0,
    explanation: "O NO é um gás lipofílico que se difunde das células endoteliais para as células musculares lisas vizinhas. Ele se liga ao grupo heme da guanilato ciclase solúvel, convertendo GTP em GMPc. O GMPc ativa a PKG, que estimula a bomba SERCA e a fosfatase da cadeia leve de miosina (MLCP), reduzindo o Ca2+ livre e relaxando o vaso.",
    officialReference: "Silverthorn, Cap. 15; Guyton & Hall, Cap. 17",
    keyTakeaway: "Via do NO: NO -> Guanilato Ciclase Solúvel -> aumento de GMPc -> PKG -> vasodilatação."
  },
  {
    id: "cel-55",
    subjectId: "fisiologia-celular",
    subtopic: "Proteína G e Cascata de Segundos Mensageiros",
    difficulty: "Médio",
    question: "A ativação de receptores acoplados à proteína Gq (ex: receptores alfa-1 adrenérgicos e muscarínicos M1/M3) desencadeia qual cascata intracelular?",
    options: [
      "Ativação da Fosfolipase C-beta (PLCβ), que cliva o PIP2 em Trifosfato de Inositol (IP3) e Diacilglicerol (DAG)",
      "Inibição total da adenilato ciclase com queda de AMP cíclico",
      "Abertura direta de canais de cloro mediada por glicina",
      "Fosforilação imediata do DNA mitocondrial"
    ],
    correctIndex: 0,
    explanation: "A subunidade alfa-q ativa a enzima de membrana Fosfolipase C (PLCβ), que hidrolisa o fosfatidilinositol-4,5-bisfosfato (PIP2) em dois mensageiros: o IP3 solúvel (que abre canais de Ca2+ no retículo endoplasmático) e o DAG hidrofóbico (que ativa a Proteína Quinase C - PKC na membrana plasmática).",
    officialReference: "Alberts - Biologia Molecular da Célula, Cap. 15; Guyton & Hall, Cap. 75",
    keyTakeaway: "Via Gq: Fosfolipase C cliva PIP2 gerando IP3 (libera Ca2+ do RE) e DAG (ativa PKC)."
  },
  {
    id: "cel-56",
    subjectId: "fisiologia-celular",
    subtopic: "Retículo Sarcoplasmático e SERCA",
    difficulty: "Difícil",
    question: "A bomba SERCA (Sarco/Endoplasmic Reticulum Ca2+-ATPase) é responsável pelo relaxamento muscular ao transportar Ca2+:",
    options: [
      "Do citosol de volta para o lúmen do retículo sarcoplasmático contra um gradiente químico íngreme com gasto de ATP",
      "Diretamente do citosol para o líquido extracelular através de canais passivos",
      "Para a matriz mitocondrial durante o ciclo de Krebs",
      "Para o interior dos lisossomos para degradação enzimática"
    ],
    correctIndex: 0,
    explanation: "O relaxamento do músculo esquelético e cardíaco exige a redução da concentração citosólica de Ca2+ livre de ~10^-5 M para <10^-7 M. Isso é realizado pela bomba SERCA (bomba de Ca2+ tipo P do retículo), que bombeia ativamente 2 íons Ca2+ por cada molécula de ATP hidrolisada para dentro dos estoques do retículo.",
    officialReference: "Berne & Levy, Cap. 12; Silverthorn, Cap. 12",
    keyTakeaway: "SERCA recapta ativamente o Ca2+ para o retículo sarcoplasmático, encerrando a contração."
  },
  {
    id: "cel-57",
    subjectId: "fisiologia-celular",
    subtopic: "Junções Comunicantes (Gap Junctions)",
    difficulty: "Fácil",
    question: "O acoplamento elétrico e metabólico entre miócitos cardíacos vizinhos nos discos intercalares ocorre por meio de:",
    options: [
      "Junções do tipo GAP (gap junctions) formadas por canais transcelulares de conexinas (como Cx43)",
      "Zônulas de oclusão herméticas impermeáveis a íons",
      "Sinapses químicas mediadas exclusivamente por serotonina",
      "Fibras de colágeno denso com condução piezoelétrica"
    ],
    correctIndex: 0,
    explanation: "As junções comunicantes (gap junctions) são hexâmeros de proteínas transmembrana chamadas conexinas, que se alinham entre células adjacentes formando um poro hidrofílico (conexon) de ~1,5 nm. Elas permitem o fluxo direto de correntes iônicas (sincício funcional cardíaco) e pequenas moléculas (<1 kDa).",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "Gap junctions (conexinas) permitem acoplamento elétrico direto e formam o sincício cardíaco."
  },
  {
    id: "cel-58",
    subjectId: "fisiologia-celular",
    subtopic: "Receptores Tirosina-Quinase (RTK)",
    difficulty: "Médio",
    question: "A ligação da insulina e de fatores de crescimento (EGF, PDGF) aos seus receptores tirosina-quinase desencadeia inicialmente:",
    options: [
      "Dimerização do receptor e transfosforilação cruzada (autofosforilação) de resíduos de tirosina em seus domínios citoplasmáticos",
      "Fechamento de canais de sódio e hiperpolarização nuclear",
      "Produção maciça de ácido lático citossólico",
      "Extrusão de colesterol para fora da membrana plasmática"
    ],
    correctIndex: 0,
    explanation: "Os receptores com atividade tirosina-quinase intrínseca sofrem dimerização na presença do ligante. As caudas quinases citoplasmáticas fosforilam tirosinas umas das outras (trans-autofosforilação). Esses fosfotirosinas servem como sítios de ancoragem de alta afinidade para proteínas contendo domínios SH2 (como Grb2 e IRS-1), ativando as vias MAPK e PI3K/Akt.",
    officialReference: "Alberts, Cap. 15; Guyton & Hall, Cap. 79",
    keyTakeaway: "Receptores tirosina-quinase: ligante induz dimerização e autofosforilação de tirosinas."
  },
  {
    id: "cel-59",
    subjectId: "fisiologia-celular",
    subtopic: "Transporte Axonal e Motores Moleculares",
    difficulty: "Médio",
    question: "O transporte retrógrado ao longo dos microtúbulos (da periferia em direção ao corpo celular/soma) é mediado predominantemente por qual proteína motora?",
    options: [
      "Dineína citoplasmática (movendo-se em direção à extremidade 'menos' dos microtúbulos)",
      "Cinesina convencional (movendo-se em direção à extremidade 'mais')",
      "Miosina tipo II de filamentos grossos",
      "Actina polimerizada em hélice dupla"
    ],
    correctIndex: 0,
    explanation: "Os microtúbulos no axônio são polarizados, com a ponta 'mais' voltada para o terminal e a ponta 'menos' voltada para o soma. A cinesina move vesículas anterogradamente (para a ponta mais), enquanto a dineína é o motor retrógrado (para a ponta menos), reciclando endossomos, fatores de crescimento como NGF e transportando vírus como raiva e herpes.",
    officialReference: "Kandel, Cap. 4; Alberts, Cap. 16",
    keyTakeaway: "Cinesina = transporte anterógrado (para fora); Dineína = transporte retrógrado (para o soma)."
  },
  {
    id: "cel-60",
    subjectId: "fisiologia-celular",
    subtopic: "Fosforilação Oxidativa e Termogênese",
    difficulty: "Difícil",
    question: "No tecido adiposo marrom dos recém-nascidos, a proteína desacopladora 1 (UCP-1 ou termogenina) dissipa o gradiente eletroquímico de prótons da mitocôndria produzindo:",
    options: [
      "Calor direto sem síntese de ATP (termogênese sem calafrios)",
      "Aumento exponencial de trifosfato de adenosina (ATP)",
      "Acúmulo tóxico de peróxido de hidrogênio no citosol",
      "Parada total do consumo de oxigênio celular"
    ],
    correctIndex: 0,
    explanation: "A UCP-1 permite que os prótons (H+) acumulados no espaço intermembranares pela cadeia respiratória reentrem na matriz mitocondrial contornando a ATP sintase. Essa energia livre não é capturada na ligação fosfato do ATP, mas é dissipada diretamente como calor, garantindo a homeostase térmica do neonato.",
    officialReference: "Guyton & Hall, Cap. 74; Silverthorn, Cap. 22",
    keyTakeaway: "UCP-1 / Termogenina desacopla o gradiente de prótons da síntese de ATP para gerar calor."
  },
  {
    id: "cel-61",
    subjectId: "fisiologia-celular",
    subtopic: "Equilíbrio Osmótico e Pressão Oncótica",
    difficulty: "Fácil",
    question: "A principal proteína plasmática responsável por exercer a pressão coloidosmótica (pressão oncótica) intravascular, impedindo o extravasamento excessivo de líquido para o interstício, é a:",
    options: [
      "Albumina sérica",
      "Fibrina",
      "Imunoglobulina E",
      "Troponina I"
    ],
    correctIndex: 0,
    explanation: "A albumina representa cerca de 60% de todas as proteínas plasmáticas e responde por aproximadamente 80% da pressão coloidosmótica capilar (~28 mmHg). Estados de hipoalbuminemia severa (como cirrose hepática ou síndrome nefrótica) reduzem essa força de atração osmótica, resultando em edema generalizado (anasarca).",
    officialReference: "Guyton & Hall, Cap. 16; Silverthorn, Cap. 15",
    keyTakeaway: "Albumina gera a maior parte da pressão oncótica plasmática, retendo líquido no vaso."
  },
  {
    id: "cel-62",
    subjectId: "fisiologia-celular",
    subtopic: "Degradação Proteica",
    difficulty: "Médio",
    question: "Proteínas citosólicas velhas, mal dobradas ou reguladoras que necessitam de destruição controlada são marcadas para degradação no proteassoma 26S através da adição de:",
    options: [
      "Cadeias de poliubiquitina através de enzimas ligases E1, E2 e E3",
      "Resíduos de colesterol esterificado",
      "Grupos fosfato exclusivamente em serinas nucleares",
      "Moléculas de glicose no retículo endoplasmático liso"
    ],
    correctIndex: 0,
    explanation: "A via ubiquitina-proteassoma é a via principal de degradação seletiva proteica celular. A enzima E3 ubiquitina-ligase reconhece o substrato específico e adiciona uma cadeia de poliubiquitina ligada à lisina-48. Esse sinal direciona a proteína para o complexo catalítico do proteassoma 26S, que a digere em peptídeos curtos.",
    officialReference: "Alberts, Cap. 6; Robbins & Cotran, Cap. 1",
    keyTakeaway: "Marcação com poliubiquitina direciona proteínas para destruição no proteassoma 26S."
  },
  {
    id: "cel-63",
    subjectId: "fisiologia-celular",
    subtopic: "Autofagia Celular",
    difficulty: "Médio",
    question: "Durante períodos de privação nutricional ou estresse oxidativo, a autofagia permite que a célula:",
    options: [
      "Englobe organelas danificadas em vesículas de dupla membrana (autofagossomos) e as funda aos lisossomos para reciclagem de nutrientes essenciais",
      "Destrua o núcleo celular provocando necrose tecidual",
      "Inverta a polaridade de todos os canais de sódio",
      "Multiplique o número de cromossomos sem divisão celular"
    ],
    correctIndex: 0,
    explanation: "A macroautofagia é um processo fisiológico conservado de reciclagem celular. Um fagóforo envolve componentes citoplasmáticos senescentes ou mitocôndrias defeituosas (mitofagia), formando o autofagossomo com a proteína marcadora LC3-II. A fusão ao lisossomo gera o autolisossomo, cujas hidrolases ácidas degradam o conteúdo para reutilização metabólica.",
    officialReference: "Robbins & Cotran, Cap. 1; Alberts, Cap. 13",
    keyTakeaway: "Autofagia: autofagossomo de dupla membrana funde-se ao lisossomo para reciclagem metabólica."
  },
  {
    id: "cel-64",
    subjectId: "fisiologia-celular",
    subtopic: "Endocitose Mediada por Receptor",
    difficulty: "Médio",
    question: "A internalização de partículas de LDL (colesterol) e de transferrina (ferro) ocorre principalmente por qual mecanismo celular?",
    options: [
      "Endocitose mediada por receptor em fossas recobertas por clatrina, com fissão vesicular pela GTPase dinamina",
      "Fagocitose através de pseudópodes de actina pura",
      "Macropinocitose não específica sem gasto de nucleotídeos",
      "Difusão passiva livre através dos poros de aquaporina"
    ],
    correctIndex: 0,
    explanation: "O complexo ligante-receptor é capturado por proteínas adaptadoras (AP-2) em depressões da membrana revestidas por trímeros de clatrina (triskelions). A vesícula recoberta invagina e a grande GTPase dinamina estrangula e corta o colo da membrana (fissão), liberando a vesícula no citosol.",
    officialReference: "Alberts, Cap. 13; Silverthorn, Cap. 5",
    keyTakeaway: "Endocitose mediada por receptor: clatrina reveste a vesícula e dinamina promove a fissão."
  },
  {
    id: "cel-65",
    subjectId: "fisiologia-celular",
    subtopic: "Apoptose e Marcadores de Superfície",
    difficulty: "Médio",
    question: "Durante a apoptose celular, qual fosfolipídio transloca-se da face interna para a face externa da membrana plasmática servindo como sinal 'coma-me' (eat-me signal) para macrófagos?",
    options: [
      "Fosfatidilserina (detectada por anexina V)",
      "Fosfatidilcolina",
      "Esfingomielina",
      "Cardiolipina"
    ],
    correctIndex: 0,
    explanation: "Em células vivas e saudáveis, a enzima flipase mantém a fosfatidilserina confinada estritamente à monocamada interna citoplasmática da membrana. Na apoptose, a inativação da flipase e a ativação da escramblase expõem a fosfatidilserina na superfície externa, permitindo que macrófagos a reconheçam e fagocitem a célula sem gerar inflamação.",
    officialReference: "Alberts, Cap. 10; Robbins & Cotran, Cap. 1",
    keyTakeaway: "Exteriorização de fosfatidilserina é o sinal que atrai macrófagos para fagocitose apoptótica limpa."
  },
  {
    id: "cel-66",
    subjectId: "fisiologia-celular",
    subtopic: "Potencial de Ação Cardíaco",
    difficulty: "Difícil",
    question: "O prolongado período de platô (fase 2) do potencial de ação dos cardiomiócitos ventriculares é mantido pelo equilíbrio entre:",
    options: [
      "Entrada lenta de Ca2+ através de canais de cálcio do tipo L e saída de K+ através de canais de potássio retificadores retardados",
      "Influxo massivo de Na+ e bloqueio total da saída de qualquer cátion",
      "Abertura exclusiva de canais de cloro com bombeamento reverso de prótons",
      "Parada da bomba de sódio-potássio durante todo o ciclo sístólico"
    ],
    correctIndex: 0,
    explanation: "O platô ventricular dura ~200-300 ms e é a base que impede o tétano cardíaco (período refratário longo). Ele resulta de correntes opostas quase equivalentes: uma corrente despolarizante para dentro de Ca2+ (canais de cálcio tipo L voltagem-dependentes) equilibrada por uma corrente hiperpolarizante para fora de K+ (canais I_Kr e I_Ks).",
    officialReference: "Guyton & Hall, Cap. 9; Berne & Levy, Cap. 16",
    keyTakeaway: "Fase 2 (platô cardíaco) = influxo de Ca2+ por canais tipo L sustentado em equilíbrio com efluxo de K+."
  },
  {
    id: "cel-67",
    subjectId: "fisiologia-celular",
    subtopic: "Equilíbrio de Gibbs-Donnan",
    difficulty: "Difícil",
    question: "O Efeito de Gibbs-Donnan decorre da presença de proteínas e ânions orgânicos impermeáveis confinados no interior celular, resultando em:",
    options: [
      "Distribuição assimétrica de íons difusíveis e tendência osmótica contínua de água para o interior da célula, contra-atacada ativamente pela bomba Na+/K+ ATPase",
      "Eliminação espontânea de todo o sódio extracelular",
      "Inversão do pH citoplasmático para valores extremamente ácidos",
      "Perda de volume celular até a desidratação completa"
    ],
    correctIndex: 0,
    explanation: "Ânions proteicos fixos atraem cátions difusíveis adicionais (como K+ e Na+) para o meio intracelular e repelem ânions difusíveis (como Cl-). Esse excesso de partículas gera um gradiente osmótico coloidosmótico que atrairia água sem cessar, causando lise celular se a bomba de Na+/K+ não extrudasse ativamente o sódio para fora.",
    officialReference: "Boron & Boulpaep - Medical Physiology, Cap. 5; Guyton & Hall, Cap. 4",
    keyTakeaway: "Gibbs-Donnan: macromoléculas aniônicas fixas geram tendência a edema celular combatida pela bomba Na+/K+."
  },
  {
    id: "cel-68",
    subjectId: "fisiologia-celular",
    subtopic: "Via JAK-STAT",
    difficulty: "Médio",
    question: "Citocinas inflamatórias (como interferon e interleucinas) e hormônios como prolactina e eritropoietina sinalizam através de qual cascata rápida receptor-núcleo?",
    options: [
      "Via JAK-STAT (Janus Quinase e Transdutores de Sinal e Ativadores de Transcrição)",
      "Via do AMP cíclico mediada por receptores olfatórios",
      "Via da calcineurina acoplada a canais de potássio Kv",
      "Despolarização eletrostática da carioteca nuclear"
    ],
    correctIndex: 0,
    explanation: "Receptores de citocinas não possuem atividade catalítica intrínseca; eles se associam às tirosina-quinases citoplasmáticas JAK (Janus Kinases). A ligação do hormônio induz as JAKs a fosforilarem o receptor e os fatores de transcrição STAT. Os STATs fosforilados dimerizam e migram diretamente para o núcleo, ativando genes em minutos.",
    officialReference: "Silverthorn, Cap. 6; Alberts, Cap. 15",
    keyTakeaway: "Via JAK-STAT: sinalização direta de citocinas e eritropoietina sem segundos mensageiros clássicos."
  },
  {
    id: "cel-69",
    subjectId: "fisiologia-celular",
    subtopic: "Transportadores SGLT e GLUT",
    difficulty: "Fácil",
    question: "A diferença funcional entre os transportadores SGLT1/SGLT2 e os transportadores GLUT1 a GLUT4 consiste em:",
    options: [
      "SGLT realizam transporte ativo secundário acoplado ao gradiente de Na+, enquanto GLUT realizam difusão facilitada passiva a favor do gradiente de glicose",
      "SGLT transportam gorduras e GLUT transportam açúcares",
      "SGLT operam apenas em neurônios e GLUT apenas em ossos",
      "Não há diferença, são nomes sinônimos da mesma enzima"
    ],
    correctIndex: 0,
    explanation: "Os SGLT (Sodium-Glucose Linked Transporters) são simporte que utilizam a energia eletroquímica da entrada de Na+ para transportar glicose contra seu gradiente no intestino delgado e túbulos proximais renais. Já a família GLUT (Glucose Transporters) é formada por carreadores de difusão facilitada (passivo, uniporte) regulados ou não por insulina (como GLUT4).",
    officialReference: "Guyton & Hall, Cap. 27; Silverthorn, Cap. 5",
    keyTakeaway: "SGLT = transporte ativo secundário cotransporte Na+/glicose; GLUT = difusão facilitada."
  },
  {
    id: "cel-70",
    subjectId: "fisiologia-celular",
    subtopic: "Ciclo Celular e Checkpoints",
    difficulty: "Médio",
    question: "A proteína p53 é classicamente reconhecida como o 'guardião do genoma' porque, diante de danos graves no DNA celular na fase G1:",
    options: [
      "Interrompe o ciclo celular ativando o inibidor de CDK p21 (para reparo do DNA) ou, se o dano for irreparável, dispara a via apoptótica mediada por Bax/Puma",
      "Acelera a mitose para diluir a mutação entre as células filhas",
      "Transforma o DNA mutado em lipídios neutros",
      "Inibe a síntese de proteínas ribossômicas no citoplasma"
    ],
    correctIndex: 0,
    explanation: "A proteína p53 é um fator de transcrição ativado por quebras de fita dupla de DNA (sinalizadas por quinases ATM/ATR). O p53 transcreve o p21, que inibe os complexos Cdk4/6-ciclina D e Cdk2-ciclina E, parando o ciclo em G1. Se o reparo for inviável, o p53 transcreve genes pró-apoptóticos (Bax, Bak, Puma), eliminando a célula mutada.",
    officialReference: "Alberts, Cap. 17; Robbins & Cotran, Cap. 7",
    keyTakeaway: "p53 interrompe o ciclo em G1 via p21 ou dispara apoptose para impedir o câncer."
  },
  {
    id: "cel-71",
    subjectId: "fisiologia-celular",
    subtopic: "Ciclo Catalítico da Na+/K+-ATPase",
    difficulty: "Difícil",
    question: "No ciclo catalítico de Post-Albers da Na+/K+-ATPase (bomba de sódio-potássio), a conformação de alta afinidade por Na+ intracelular e o evento bioquímico que deflagra a transição conformacional para a extrusão de Na+ para o meio extracelular são:",
    options: [
      "Conformação E1 com sítios voltados para o citosol; a fosforilação dependente de ATP de um resíduo conservado de aspartato deflagra a mudança para E2-P, expulsando 3 íons Na+ para fora da célula",
      "Conformação E2 ligada a fosfato inorgânico livre sem gasto de energia",
      "Entrada passiva de cálcio mitocondrial que rompe a cadeia alfa",
      "Hidrólise do colesterol de membrana pelas flipases"
    ],
    correctIndex: 0,
    explanation: "O ciclo da Na+/K+-ATPase alterna entre dois estados conformacionais: Na conformação E1, a enzima tem alta afinidade por 3 íons Na+ e por ATP citosólicos. A transferência do fosfato gama do ATP para o resíduo Asp369 forma o intermediário fosforilado de alta energia E1-P~Na3, que sofre transição para a conformação E2-P. Na conformação E2-P, os sítios de ligação voltam-se para o meio extracelular e sua afinidade por Na+ cai drasticamente, liberando 3 Na+ para o exterior e ligando 2 K+ extracelulares com alta afinidade. A ouabaína e a digoxina ligam-se e travam a bomba na conformação E2-P.",
    officialReference: "Alberts - Biologia Molecular da Célula, Cap. 11; Guyton & Hall, Cap. 4",
    keyTakeaway: "Na+/K+-ATPase: E1 liga 3 Na+ citosólicos -> fosforilação do aspartato comuta para E2-P -> libera 3 Na+ fora e liga 2 K+."
  },
  {
    id: "cel-72",
    subjectId: "fisiologia-celular",
    subtopic: "Bomba SERCA e Fosfolambam Cardíaco",
    difficulty: "Difícil",
    question: "No cardiomiócito ventricular, a recaptação do Ca2+ citosólico para o retículo sarcoplasmático durante a diástole é executada pela bomba SERCA2a. Como a estimulação simpática beta-1 adrenérgica acelera o relaxamento miocárdico (efeito lusitrópico positivo)?",
    options: [
      "A PKA ativada fosforila o Fosfolambam (PLN), aliviando sua inibição tônica sobre a SERCA2a e acelerando significativamente a recaptação de cálcio para o retículo sarcoplasmático",
      "A noradrenalina destrói a bomba SERCA2a aumentando o cálcio citosólico residual",
      "O fosfolambam fosforilado bloqueia permanentemente a calsequestrina",
      "A estimulação beta-1 fecha os canais de potássio do túbulo T"
    ],
    correctIndex: 0,
    explanation: "Em repouso basal, a proteína fosfolambam (PLN) desfosforilada liga-se à bomba SERCA2a e inibe sua afinidade pelo cálcio citosólico. Durante o estímulo simpático (exercício ou estresse), a ativação do receptor beta-1 cardíaco gera cAMP e ativa a PKA, que fosforila a Serina-16 do fosfolambam. O PLN fosforilado desassocia-se da SERCA2a, desinibindo-a completamente. Isso acelera a remoção diastólica do Ca2+ do citosol (encurtando a diástole e permitindo frequências cardíacas elevadas) e sobrecarrega o retículo de Ca2+ para a próxima sístole (efeito inotrópico positivo).",
    officialReference: "Berne & Levy, Fisiologia Cardiovascular; Guyton & Hall, Cap. 9",
    keyTakeaway: "Estimulação beta-1 -> PKA fosforila o Fosfolambam -> desinibe a SERCA2a -> relaxamento miocárdico acelerado (lusitropismo positivo)."
  },
  {
    id: "cel-73",
    subjectId: "fisiologia-celular",
    subtopic: "Equação de Goldman-Hodgkin-Katz (GHK)",
    difficulty: "Difícil",
    question: "Diferente da Equação de Nernst (que calcula o potencial de equilíbrio eletroquímico de um único íon), a Equação de Goldman-Hodgkin-Katz (GHK) calcula o potencial real de repouso da membrana (Vm) levando em consideração:",
    options: [
      "A concentração intra e extracelular de múltiplos íons (Na+, K+, Cl-) ponderada pela permeabilidade relativa (P) da membrana plasmática a cada um deles no momento",
      "O volume celular total e o número absoluto de ribossomos",
      "A quantidade de hemoglobina presente no citoplasma",
      "A temperatura corporal elevada multiplicada pelo peso atômico do cálcio"
    ],
    correctIndex: 0,
    explanation: "O potencial de repouso de uma membrana biológica não é igual ao potencial de Nernst de nenhum íon isolado, mas sim uma média ponderada calculada pela equação de GHK: Vm = (RT/F) ln [ (P_K[K+]out + P_Na[Na+]out + P_Cl[Cl-]in) / (P_K[K+]in + P_Na[Na+]in + P_Cl[Cl-]out) ]. Como a permeabilidade em repouso ao K+ é cerca de 50 a 100 vezes maior do que ao Na+ (graças aos canais de vazamento Kir/K2P), o Vm de repouso (-70 a -90 mV) aproxima-se muito do potencial de equilíbrio do K+ (-94 mV).",
    officialReference: "Guyton & Hall, Cap. 5; Silverthorn, Cap. 8",
    keyTakeaway: "Equação GHK: o potencial de membrana depende das concentrações iônicas multiplicadas pela permeabilidade relativa de cada íon."
  },
  {
    id: "cel-74",
    subjectId: "fisiologia-celular",
    subtopic: "Vias da Apoptose (Morte Celular Programada)",
    difficulty: "Difícil",
    question: "Na via intrínseca (mitocondrial) da apoptose desencadeada por estresse oxidativo ou privação de fatores de crescimento, a cascata de ativação de caspases ocorre sequencialmente por:",
    options: [
      "Permeabilização da membrana mitocondrial externa (MOMP) por Bax/Bak, liberação de Citocromo c no citosol, formação do apoptossomo com Apaf-1, ativação da Caspase-9 iniciadora e clivagem da Caspase-3 executora",
      "Ligação do ligante FasL ao receptor Fas gerando ativação exclusiva da caspase-8 sem envolvimento mitocondrial",
      "Entrada massiva de água levando a lise osmótica desordenada e inflamação exuberante",
      "Inibição permanente da RNA polimerase II nuclear por histonas acetiladas"
    ],
    correctIndex: 0,
    explanation: "Na apoptose intrínseca, estímulos pró-morte ativam proteínas BH3-only que neutralizam as anti-apoptóticas Bcl-2/Bcl-xL e ativam os oligômeros Bax e Bak na membrana mitocondrial externa. Isso forma poros (MOMP), permitindo o extravasamento do Citocromo c para o citosol. O Citocromo c liga-se à proteína adaptadora Apaf-1 na presença de dATP, montando o complexo heptamérico 'Apoptossomo'. O apoptossomo recruta e cliva a pró-caspase-9 (iniciadora), que por sua vez cliva e ativa as caspases efetoras 3 e 7, que degradam o citoesqueleto e ativam a DNase apoptótica (ICAD/CAD).",
    officialReference: "Robbins & Cotran - Patologia Estrutural e Funcional, Cap. 2; Alberts, Cap. 18",
    keyTakeaway: "Apoptose mitocondrial: Bax/Bak liberam Citocromo c -> Apoptossomo (Apaf-1) ativa Caspase-9 -> cliva Caspase-3 executora."
  },
  {
    id: "cel-75",
    subjectId: "fisiologia-celular",
    subtopic: "Sistema Ubiquitina-Proteassoma 26S",
    difficulty: "Médio",
    question: "O sistema Ubiquitina-Proteassoma é a via primária para a degradação seletiva de proteínas celulares danificadas, mal dobradas ou de vida curta. A enzima responsável por conferir a alta especificidade no reconhecimento do substrato proteico alvo a ser ubiquitinado é a:",
    options: [
      "Ubiquitina ligase E3",
      "Enzima ativadora de ubiquitina E1",
      "Enzima conjugadora de ubiquitina E2",
      "Topoisomerase II mitocondrial"
    ],
    correctIndex: 0,
    explanation: "A cascata de ubiquitinação opera em três etapas hierárquicas: A enzima E1 ativa a molécula de ubiquitina consumindo ATP; a enzima E2 recebe a ubiquitina ativada; a ubiquitina ligase E3 liga-se simultaneamente à E2 e ao substrato proteico específico alvo (reconhecendo 'degroons' ou alterações estruturais). Existem poucas isoformas de E1 e E2, mas centenas de famílias de E3 ligases diferentes no genoma humano, o que garante a precisão cirúrgica de quais proteínas devem receber a cadeia de poliubiquitina (ligada pela Lisina-48) para serem destruídas pelo proteassoma 26S.",
    officialReference: "Alberts - Biologia Molecular da Célula, Cap. 6; Lodish, Cap. 3",
    keyTakeaway: "Ubiquitina Ligase E3 confere o reconhecimento específico do substrato para degradação no proteassoma 26S."
  },
  {
    id: "cel-76",
    subjectId: "fisiologia-celular",
    subtopic: "Macroautofagia e Controle por mTOR",
    difficulty: "Difícil",
    question: "Em condições de privação de nutrientes (jejum de aminoácidos e glicose), o processo de macroautofagia celular é fisiologicamente deflagrado através de:",
    options: [
      "Inibição do complexo quinase mTORC1 (sensor de abundância nutricional), desinibindo o complexo iniciador ULK1/Atg13 e estimulando a clivagem e lipidação da proteína LC3 em LC3-II para a biogênese do autofagossomo",
      "Hiperativação de receptores tirosina quinase de membrana por insulina",
      "Bloqueio irreversível da fusão dos lisossomos com qualquer vesícula",
      "Exportação de todas as mitocôndrias viáveis para o meio extracelular"
    ],
    correctIndex: 0,
    explanation: "O complexo mTORC1 é o controlador mestre do anabolismo celular. Quando nutrientes e ATP estão abundantes, o mTORC1 fosforila e inibe o complexo ULK1/FIP200, impedindo a autofagia. Na privação de nutrientes ou ativação da AMPK pelo aumento de AMP/ATP, o mTORC1 é inibido, liberando o complexo ULK1 para fosforilar o complexo Beclin-1/Vps34 (PI3K classe III). Isso recruta membranas de isolamento (fagóforo) e promove a conjugação de LC3-I com fosfatidiletanolamina gerando LC3-II, que fecha o autofagossomo em torno de organelas senescentes para digestão lisossômica.",
    officialReference: "Alberts, Cap. 13; Robbins & Cotran, Cap. 1",
    keyTakeaway: "Jejum inibe mTORC1 -> ativa complexo ULK1 e lipidação de LC3 em LC3-II -> montagem do autofagossomo."
  },
  {
    id: "cel-77",
    subjectId: "fisiologia-celular",
    subtopic: "Via de Sinalização PI3K-Akt-mTOR",
    difficulty: "Difícil",
    question: "A via da Fosfatidilinositol 3-Quinase (PI3K) / Akt desempenha papel essencial na sobrevivência celular e resposta à insulina. Ao ser ativada por receptores tirosina-quinase, a PI3K fosforila:",
    options: [
      "O lipídio de membrana PIP2 (fosfatidilinositol-4,5-bisfosfato), convertendo-o em PIP3 (fosfatidilinositol-3,4,5-trisfosfato), que ancora a quinase Akt na membrana plasmática",
      "A proteína quinase C diretamente sem intermediários lipídicos",
      "O RNA mensageiro da insulina na luz dos ribossomos",
      "A tubulina alfa do fuso mitótico para bloquear a intérfase"
    ],
    correctIndex: 0,
    explanation: "Ao ligar ligantes como insulina ou IGF-1, o receptor autofosforila resíduos de tirosina que recrutam a PI3K. A PI3K fosforila o PIP2 da face interna da membrana gerando PIP3. O PIP3 atua como um segundo mensageiro lipídico que ancora proteínas com domínios PH (pleckstrin homology), incluindo a quinase Akt (PKB) e a PDK1. A PDK1 fosforila e ativa a Akt, que por sua vez inibe proteínas pró-apoptóticas (Bad), inibe a glicogênio sintase quinase 3 (GSK3) e ativa o mTORC1, estimulando sobrevivência, síntese proteica e captação de glicose.",
    officialReference: "Alberts, Cap. 15; Goodman & Gilman, Cap. 3",
    keyTakeaway: "PI3K converte PIP2 em PIP3 na membrana -> ancora e ativa Akt -> promove sobrevivência e proliferação celular."
  },
  {
    id: "cel-78",
    subjectId: "fisiologia-celular",
    subtopic: "Cascata das MAP Quinases (Ras-Raf-MEK-ERK)",
    difficulty: "Médio",
    question: "A cascata de sinalização celular Ras-Raf-MEK-ERK é ativada classicamente por Fatores de Crescimento (como EGF e PDGF) para comandar:",
    options: [
      "A proliferação celular e expressão de genes de resposta imediata (como c-Fos e c-Jun), onde a pequena GTPase Ras ativada por GTP recruta a quinase Raf (MAPKKK), que fosforila a MEK (MAPKK), que fosforila e ativa a ERK (MAPK)",
      "A parada permanente da glicólise anaeróbia no citosol",
      "A degradação imediata de todo o retículo endoplasmático rugoso",
      "A secreção de ácido lático pelos podócitos glomerulares"
    ],
    correctIndex: 0,
    explanation: "A ativação de receptores RTK recruta o complexo adaptador Grb2-SOS. A proteína SOS funciona como um fator de troca de nucleotídeo guanina (GEF) que troca GDP por GTP na pequena GTPase de membrana Ras. A Ras-GTP recruta a quinase serina/treonina Raf (MAPK quinase quinase) para a membrana. A Raf fosforila e ativa a MEK1/2 (dupla especificidade), que por sua vez fosforila resíduos de treonina e tirosina na ERK1/2 (MAPK clássica). A ERK transloca para o núcleo celular e fosforila fatores de transcrição reguladores do ciclo celular.",
    officialReference: "Alberts, Cap. 15; Lodish - Biologia Celular e Molecular, Cap. 16",
    keyTakeaway: "Cascata MAPK: Receptor RTK -> Ras-GTP -> Raf -> MEK -> ERK fosforila fatores nucleares de divisão celular."
  },
  {
    id: "cel-79",
    subjectId: "fisiologia-celular",
    subtopic: "Dessensibilização de GPCRs e Beta-Arrestina",
    difficulty: "Difícil",
    question: "Após estimulação agonista contínua, os Receptores Acoplados à Proteína G (GPCRs) sofrem dessensibilização homóloga e perda progressiva de responsividade. Esse processo é orquestrado por:",
    options: [
      "Fosforilação da cauda citoplasmática do GPCR ativo por Cinases de Receptor Acoplado à Proteína G (GRKs), permitindo o recrutamento de Beta-Arrestinas que desacoplam a proteína G e promovem a endocitose do receptor via vesículas revestidas por clatrina",
      "Clivagem enzimática do domínio extracelular do receptor pela pepsina",
      "Transformação do receptor de 7 passagens transmembrana em um canal de sódio voltagem-dependente",
      "Oxidação irreversível dos resíduos de cisteína por ácido ascórbico citoplasmático"
    ],
    correctIndex: 0,
    explanation: "Quando um agonista permanece ligado ao GPCR, enzimas quinases específicas (GRKs, como GRK2) fosforilam seletivamente múltiplos resíduos de serina/treonina na cauda intracelular C-terminal do receptor ativo. Os fosfatos atraem com alta afinidade a proteína citoplasmática Beta-Arrestina. A beta-arrestina impede fisicamente a interação da proteína G heterotrimérica com o receptor (dessensibilização rápida) e interage com a clatrina e o adaptador AP-2, internalizando o receptor em endossomos para reciclagem ou degradação lisossômica.",
    officialReference: "Goodman & Gilman, Cap. 3; Alberts, Cap. 15",
    keyTakeaway: "Dessensibilização de GPCR: GRKs fosforilam cauda do receptor -> Beta-Arrestina desacopla a Proteína G e induz endocitose."
  },
  {
    id: "cel-80",
    subjectId: "fisiologia-celular",
    subtopic: "Liberação de Cálcio Induzida por Cálcio (CICR)",
    difficulty: "Médio",
    question: "O fenômeno biológico de 'Liberação de Cálcio Induzida por Cálcio' (Calcium-Induced Calcium Release - CICR), essencial para o acoplamento excitação-contração no miocárdio, ocorre quando:",
    options: [
      "Uma pequena corrente de Ca2+ que entra pelos canais de cálcio tipo L (Cav1.2) do sarcolema durante o platô do potencial de ação ativa diretamente os Receptores de Rianodina Tipo 2 (RyR2) no retículo sarcoplasmático, liberando uma onda maciça de Ca2+ estocado para o citosol",
      "O cálcio entra na célula exclusivamente por fagocitose mediada por caveolinas",
      "Os íons cálcio substituem os íons sódio nos filamentos de actina",
      "A bomba de sódio-potássio inverte seu fluxo e ejeta potássio para dentro do retículo"
    ],
    correctIndex: 0,
    explanation: "No músculo cardíaco, a despolarização abre os canais de cálcio voltagem-dependentes tipo L (receptores DHPR / Cav1.2) no túbulo T. A quantidade de Ca2+ que entra por esses canais é insuficiente por si só para ativar todos os sarcômeros, mas atua como um 'gatilho': o Ca2+ liga-se ao domínio citosólico do receptor de rianodina (RyR2) da membrana do retículo sarcoplasmático vizinho, abrindo o canal e liberando um influxo colossal de cálcio armazenado (amplificação de sinal CICR), que atinge a troponina C.",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "No coração, a entrada de Ca2+ via canais tipo L deflagra a abertura maciça dos receptores de rianodina (CICR)."
  },
  {
    id: "cel-81",
    subjectId: "fisiologia-celular",
    subtopic: "Isoformas da Óxido Nítrico Sintase (NOS)",
    difficulty: "Difícil",
    question: "Existem três isoformas primárias da enzima Óxido Nítrico Sintase (NOS) no organismo humano. Qual é a correlação correta em termos de regulação fisiológica e papel biológico?",
    options: [
      "eNOS (endotelial) e nNOS (neuronal) são constitutivas e estritamente dependentes de complexo Ca2+/Calmodulina para liberação pulsátil basal de NO; iNOS (induzível) é independente de influxo agudo de Ca2+, sendo sintetizada em macrófagos sob estímulo de citocinas inflamatórias para produzir níveis citotóxicos sustentados de NO",
      "iNOS é a única isoforma presente nas células endoteliais em repouso saudável",
      "eNOS não utiliza a L-arginina como substrato, utilizando apenas glicina",
      "nNOS sintetiza monóxido de carbono em vez de óxido nítrico"
    ],
    correctIndex: 0,
    explanation: "A eNOS (NOS3) e a nNOS (NOS1) são enzimas constitutivas: sua atividade depende de elevações transitórias de cálcio citosólico que se liga à calmodulina para permitir a transferência de elétrons do NADPH até a L-arginina. Em contrapartida, a iNOS (NOS2) tem a calmodulina constitutivamente associada de forma rígida; sua transcrição é ativada em macrófagos e células imunes pelo fator de transcrição NF-kB diante de LPS ou interferon-gama, gerando fluxos massivos e prolongados de NO com ação bactericida e citotóxica na inflamação.",
    officialReference: "Goodman & Gilman, Cap. 26; Robbins & Cotran, Cap. 3",
    keyTakeaway: "eNOS/nNOS são constitutivas e dependem de Ca2+/Calmodulina; iNOS é induzida por citocinas/NF-kB e produz NO em larga escala."
  },
  {
    id: "cel-82",
    subjectId: "fisiologia-celular",
    subtopic: "Mecanismo de Inativação por 'Bola e Corrente'",
    difficulty: "Difícil",
    question: "Nos canais de sódio voltagem-dependentes (Nav) e certos canais de potássio (Shaker/Kv), o mecanismo clássico de 'inativação rápida' que estabelece o período refratário absoluto do potencial de ação celular é conhecido como:",
    options: [
      "Modelo de bola e corrente (ball-and-chain / peptídeo de inativação N-terminal ou alça citoplasmática IFM), onde um domínio globular hidrofóbico oscila e obstrui fisicamente a embocadura interna do poro aberto",
      "Fosforilação direta da camada bilipídica externa por glicoproteínas",
      "Extrusão de todos os íons magnésio da cavidade central do canal",
      "Despolimerização completa das hélices alfa transmembrana na fase de despolarização"
    ],
    correctIndex: 0,
    explanation: "Descoberto por Armstrong e Bezanilla, o modelo da bola e corrente descreve como canais voltagem-dependentes encerram sua corrente milissegundos após a abertura sem retornar ao estado fechado de repouso. Nos canais de Na+ neuronais e cardíacos, o motivo de aminoácidos hidrofóbicos Isoleucina-Fenilalanina-Metionina (IFM) localizado na alça citoplasmática entre os domínios III e IV atua como a 'bola' que se projeta e tampona a boca interna do poro do canal condutor, gerando o estado inativado refratário até a repolarização.",
    officialReference: "Kandel - Princípios da Neurociência, Cap. 6; Hille - Ion Channels of Excitable Membranes",
    keyTakeaway: "Inativação rápida de canais de Na+: o peptídeo hidrofóbico citosólico (IFM / bola e corrente) tampa a boca interna do poro."
  },
  {
    id: "cel-83",
    subjectId: "fisiologia-celular",
    subtopic: "Junções Comunicantes e Conexinas",
    difficulty: "Médio",
    question: "O sincício funcional miocárdico e o acoplamento elétrico bidirecional direto entre células adjacentes são sustentados por junções comunicantes (gap junctions). Cada canal comunicante completo é constituído por:",
    options: [
      "Dois hemicanais (conéxons) alinhados de membranas celulares opostas, cada um composto por um anel hexamérico de 6 proteínas transmembrana chamadas Conexinas (como a Conexina-43 no ventrículo cardíaco)",
      "Quatro filamentos de desmina e actina trançados",
      "Vesículas de sinaptotagmina fundidas no espaço intersticial",
      "Dois receptores de insulina acoplados ponta a ponta"
    ],
    correctIndex: 0,
    explanation: "As junções comunicantes fornecem vias de baixa resistência elétrica e de permeabilidade metabólica entre citoplasmas vizinhos, permitindo a passagem livre de íons inorgânicos (Na+, K+, Ca2+) e segundos mensageiros menores que 1 kDa (IP3, cAMP). Cada célula contribui com um hemicanal chamado Conéxon, formado por 6 subunidades proteicas de Conexina. No miocárdio de trabalho atrial e ventricular, a isoforma predominante é a Conexina-43 (Cx43), essencial para a condução homogênea da frente de onda do potencial de ação.",
    officialReference: "Alberts, Cap. 19; Guyton & Hall, Cap. 9",
    keyTakeaway: "Gap Junctions: 2 conéxons (cada um com 6 conexinas) unem células adjacentes garantindo acoplamento elétrico direto."
  },
  {
    id: "cel-84",
    subjectId: "fisiologia-celular",
    subtopic: "Defesas Antioxidantes Celulares (SOD e Catalase)",
    difficulty: "Médio",
    question: "Durante a fosforilação oxidativa mitocondrial e o estresse metabólico, a cadeia de transporte de elétrons gera Espécies Reativas de Oxigênio (ROS). A enzima Superóxido Dismutase (SOD) e a Catalase neutralizam esses radicais respectivamente por:",
    options: [
      "A SOD converte o ânion radical superóxido (O2•-) em peróxido de hidrogênio (H2O2) e oxigênio molecular; a Catalase (presente nos peroxissomos) decompõe o H2O2 tóxico em água (H2O) e oxigênio",
      "A SOD converte a água em gás carbônico radioativo",
      "A catalase converte o peróxido de hidrogênio em ácido clorídrico concentrado",
      "Ambas as enzimas sintetizam íons ferro livre para oxidar lipídios de membrana"
    ],
    correctIndex: 0,
    explanation: "O vazamento prematuro de elétrons nos complexos I e III da cadeia respiratória reduz univalentemente o O2 a ânion superóxido (O2•-). A enzima Superóxido Dismutase (SOD1 citosólica Cu/Zn, SOD2 mitocondrial Mn) converte rapidamente: 2 O2•- + 2 H+ -> H2O2 + O2. O peróxido de hidrogênio resultante é em seguida decomposto pela Catalase peroxissômica (2 H2O2 -> 2 H2O + O2) ou reduzido pela Glutationa Peroxidase (GPx) consumindo GSH, evitando a formação do letal radical hidroxila (•OH) via Reação de Fenton.",
    officialReference: "Robbins & Cotran, Cap. 2; Lehninger - Princípios de Bioquímica, Cap. 19",
    keyTakeaway: "SOD converte superóxido em H2O2; Catalase e Glutationa Peroxidase decompõem H2O2 em água limpa."
  },
  {
    id: "cel-85",
    subjectId: "fisiologia-celular",
    subtopic: "Desacoplamento Mitocondrial e Termogenina (UCP-1)",
    difficulty: "Difícil",
    question: "O tecido adiposo marrom (castanho) dos recém-nascidos e mamíferos adaptados ao frio produz calor sem calafrios (termogênese não associada a tremores) graças à proteína mitocondrial Termogenina (UCP-1). O mecanismo bioenergético da UCP-1 consiste em:",
    options: [
      "Dissipar o gradiente eletroquímico de prótons da membrana mitocondrial interna permitindo o refluxo de H+ para a matriz sem passar pela ATP sintase, convertendo a energia da oxidação de substratos diretamente em calor puro",
      "Acelerar a síntese de ATP para níveis 50 vezes superiores ao consumo basal",
      "Bloquear a entrada de oxigênio nos pulmões para resfriar os órgãos nobres",
      "Congelar as mitocôndrias periféricas para estocar energia na forma de gelo"
    ],
    correctIndex: 0,
    explanation: "Na fosforilação oxidativa normal acoplada, a energia liberada pelo transporte de elétrons bombeia prótons para o espaço intermembrana, gerando uma força próton-motriz que só retorna à matriz através da ATP sintase (Complexo V), produzindo ATP. A Termogenina (Uncoupling Protein 1 - UCP-1), abundante nas mitocôndrias do tecido adiposo marrom, funciona como um canal de prótons ativado por ácidos graxos livres sob estímulo simpático beta-3. Ela 'curto-circuita' o gradiente de H+, fazendo a energia motriz ser dissipada integralmente sob a forma de calor corporal.",
    officialReference: "Silverthorn, Cap. 22; Lehninger, Cap. 19",
    keyTakeaway: "Termogenina (UCP-1): desvia o refluxo de H+ da ATP sintase, convertendo o gradiente próton-motriz em calor puro."
  }
];

