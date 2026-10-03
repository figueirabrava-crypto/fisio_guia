import { Question } from "../../types";

export const CARDIORRESPIRATORIO_QUESTIONS: Question[] = [
  {
    id: "cr-01",
    subjectId: "cardiorrespiratorio",
    subtopic: "Circulação Sistêmica vs Pulmonar",
    difficulty: "Fácil",
    question: "O sangue desoxigenado que retorna do corpo pelas veias cavas entra no coração através de qual câmara e é ejetado para os pulmões por qual vaso?",
    options: [
      "Entra no átrio direito, passa ao ventrículo direito e é ejetado pelo tronco pulmonar para as artérias pulmonares",
      "Entra no átrio esquerdo e sai pela aorta ascendente",
      "Entra no ventrículo esquerdo e sai pelas veias pulmonares",
      "Entra na veia cava inferior e vai diretamente para o átrio esquerdo"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico oficial: Coração (bomba de 4 câmaras: 2 átrios e 2 ventrículos). O circuito pulmonar (pequena circulação) recebe o sangue venoso no átrio direito via veias cavas, passa pela valva tricúspide para o ventrículo direito e é bombeado via artérias pulmonares até os alvéolos.",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "Átrio Direito -> Ventrículo Direito -> Tronco/Artérias Pulmonares para hematose."
  },
  {
    id: "cr-02",
    subjectId: "cardiorrespiratorio",
    subtopic: "Hematose Alveolar",
    difficulty: "Fácil",
    question: "A troca de gases (hematose) entre o ar alveolar e o sangue capilar pulmonar ocorre por:",
    options: [
      "Difusão simples passiva a favor dos gradientes de pressão parcial de O2 e CO2 através da membrana alvéolo-capilar",
      "Transporte ativo primário com gasto maciço de ATP",
      "Filtração osmótica dependente de albumina",
      "Pinocitose das hemácias nos alvéolos"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: Pulmões e Alvéolos (hematose: troca de O2 por CO2). O O2 difunde-se do ar alveolar (PO2 ~104 mmHg) para o sangue capilar desoxigenado (PO2 ~40 mmHg), enquanto o CO2 difunde-se no sentido inverso (PCO2 do sangue 45 mmHg para o alvéolo 40 mmHg), sem gasto de energia.",
    officialReference: "West - Fisiologia Respiratória, Cap. 2; Guyton & Hall, Cap. 40",
    keyTakeaway: "Hematose ocorre por difusão simples passiva de O2 e CO2 pela membrana alvéolo-capilar."
  },
  {
    id: "cr-03",
    subjectId: "cardiorrespiratorio",
    subtopic: "Mecânica da Inspiração",
    difficulty: "Fácil",
    question: "Durante a inspiração eupneica (em repouso), qual é o principal músculo responsável pela expansão da caixa torácica e como ele atua?",
    options: [
      "Diafragma, que se contrai e desce, aumentando o volume vertical do tórax e gerando pressão alveolar negativa em relação à atmosférica",
      "Músculos abdominais retos, que comprimem as vísceras para cima",
      "Músculos intercostais internos que fecham as costelas",
      "Esternocleidomastoideo exclusivamente"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: Mecânica respiratória (inspiração com contração do diafragma). O diafragma é o principal músculo inspiratório (75% da ventilação em repouso). Ao contrair-se, sua cúpula desce de 1 a 2 cm, gerando pressão subatmosférica (-1 cmH2O) que aspira o ar para os pulmões.",
    officialReference: "West, Cap. 7; Guyton & Hall, Cap. 38",
    keyTakeaway: "Inspiração = contração do diafragma gera pressão subatmosférica que aspira o ar."
  },
  {
    id: "cr-04",
    subjectId: "cardiorrespiratorio",
    subtopic: "Mecânica da Expiração",
    difficulty: "Fácil",
    question: "Em condições de repouso normal (eupneia), a expiração pulmonar é considerada um processo passivo porque:",
    options: [
      "Depende primariamente do relaxamento dos músculos inspiratórios e da retração elástica dos pulmões e caixa torácica, sem gasto muscular ativo",
      "Ocorre devido ao peso da cabeça comprimindo a traqueia",
      "Não há saída real de gás carbônico",
      "Depende do fechamento simultâneo das quatro valvas cardíacas"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: expiração passiva por retração elástica. Durante a inspiração, a energia elástica foi armazenada no tecido conjuntivo rico em elastina dos pulmões e na caixa torácica distendida. Com o relaxamento do diafragma, essa energia retrai os alvéolos passivamente.",
    officialReference: "West, Cap. 7; Silverthorn, Cap. 17",
    keyTakeaway: "Expiração em repouso é puramente passiva pela retração elástica tecidual."
  },
  {
    id: "cr-05",
    subjectId: "cardiorrespiratorio",
    subtopic: "Surfactante Pulmonar",
    difficulty: "Médio",
    question: "O surfactante pulmonar é sintetizado pelos pneumócitos tipo II e tem como função biofísica crucial:",
    options: [
      "Reduzir a tensão superficial na interface ar-líquido dos alvéolos, impedindo o colapso alveolar (atelectasia) no final da expiração",
      "Aumentar a viscosidade do sangue capilar",
      "Digerir bactérias anaeróbias por fagocitose",
      "Neutralizar o oxigênio excessivo nos brônquios"
    ],
    correctIndex: 0,
    explanation: "Composto por dipalmitoilfosfatidilcolina (DPPC) e apoproteínas, o surfactante quebra a atração intermolecular das moléculas de água na parede alveolar. Conforme a lei de Laplace (P = 2T/r), sem surfactante a alta tensão superficial colapsaria os alvéolos menores.",
    officialReference: "West, Cap. 7; Guyton & Hall, Cap. 38",
    keyTakeaway: "Surfactante pulmonar diminui a tensão superficial evitando o colapso dos alvéolos."
  },
  {
    id: "cr-06",
    subjectId: "cardiorrespiratorio",
    subtopic: "Marcapasso Cardíaco",
    difficulty: "Fácil",
    question: "Qual estrutura anatômica no átrio direito atua como o marcapasso fisiológico natural primário do coração humano?",
    options: [
      "Nó Sinoatrial (Nó Sinusal)",
      "Nó Atrioventricular (AV)",
      "Feixe de His",
      "Fibras de Purkinje ventrais"
    ],
    correctIndex: 0,
    explanation: "O nó sinoatrial (SA), situado próximo à desembocadura da veia cava superior no átrio direito, possui a maior frequência intrínseca de despolarização espontânea (60-100 bpm), comandando o ritmo sinusal cardíaco em condições fisiológicas normais.",
    officialReference: "Guyton & Hall, Cap. 10; Silverthorn, Cap. 14",
    keyTakeaway: "Nó Sinoatrial (SA) = marcapasso primário do ritmo cardíaco normal."
  },
  {
    id: "cr-07",
    subjectId: "cardiorrespiratorio",
    subtopic: "Automatismo e Corrente If",
    difficulty: "Médio",
    question: "O potencial marcapasso das células do nó sinoatrial caracteriza-se por uma lenta despolarização diastólica espontânea (fase 4) acionada pela corrente de:",
    options: [
      "Corrente If ('funny current'), mediada por canais de cátions HCN permeáveis ao influxo de sódio",
      "Corrente maciça de efluxo de cloreto",
      "Fechamento de todos os canais de cálcio",
      "Bomba de prótons lisossomal"
    ],
    correctIndex: 0,
    explanation: "Ao final da repolarização prévia (~ -60 mV), canais HCN ativam-se por hiperpolarização, permitindo entrada lenta de Na+ (corrente If / engraçada). Isso eleva gradualmente o potencial até o limiar de disparo dos canais de cálcio tipo T e L, deflagrando o potencial de ação sem nenhum estímulo externo.",
    officialReference: "Silverthorn, Cap. 14; Guyton & Hall, Cap. 10",
    keyTakeaway: "Corrente If (funny) de Na+ gera a despolarização espontânea do nó sinoatrial."
  },
  {
    id: "cr-08",
    subjectId: "cardiorrespiratorio",
    subtopic: "Platô do Potencial de Ação Miocárdico",
    difficulty: "Médio",
    question: "O potencial de ação dos miócitos ventriculares cardíacos apresenta uma fase longa de sustentação despolarizada (fase 2 de platô) devida ao equilíbrio entre:",
    options: [
      "Influxo sustentado de íons Cálcio (Ca2+) por canais de cálcio tipo L e efluxo retardado de Potássio (K+)",
      "Entrada contínua de glicose e saída de ureia",
      "Influxo rápido de hidrogênio e saída de sódio",
      "Fechamento das conexinas das junções comunicantes"
    ],
    correctIndex: 0,
    explanation: "A fase de platô dura cerca de 200 a 300 ms nos ventrículos. A entrada lenta de Ca2+ contrabalança a saída de K+. Esse platô prolonga o período refratário absoluto, impedindo contrações tetânicas sustentadas no coração (o que causaria parada cardíaca fatal).",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "Platô cardíaco (fase 2) decorre do influxo de Ca2+ tipo L equilibrado pelo efluxo de K+."
  },
  {
    id: "cr-09",
    subjectId: "cardiorrespiratorio",
    subtopic: "Acoplamento Excitação-Contração",
    difficulty: "Médio",
    question: "No miocárdio de trabalho, o fenômeno de 'liberação de cálcio induzida por cálcio' (CICR) significa que:",
    options: [
      "A pequena entrada de Ca2+ extracelular pelos canais tipo L durante o platô abre os canais de rianodina (RyR2) no retículo sarcoplasmático, liberando grande torrente de Ca2+ intracelular",
      "O cálcio absorvido na digestão entra diretamente nos miofilamentos sem passar pelo sangue",
      "O cálcio se transforma em magnésio no sarcoplasma",
      "O cálcio é expulso para fora da célula para provocar o encurtamento do sarcômero"
    ],
    correctIndex: 0,
    explanation: "A despolarização abre receptores DHPR (canais de Ca2+ tipo L). A entrada desse 'gatilho de cálcio' estimula receptores de rianodina RyR2 na membrana do retículo sarcoplasmático, liberando até 90% do Ca2+ que se ligará à troponina C para promover o deslizamento da actina e miosina.",
    officialReference: "Silverthorn, Cap. 14; Guyton & Hall, Cap. 9",
    keyTakeaway: "CICR = Ca2+ extracelular deflagra liberação massiva de Ca2+ do retículo sarcoplasmático."
  },
  {
    id: "cr-10",
    subjectId: "cardiorrespiratorio",
    subtopic: "Débito Cardíaco",
    difficulty: "Fácil",
    question: "O Débito Cardíaco (DC), volume de sangue ejetado por cada ventrículo por minuto (~5 L/min em repouso), é o produto matemático de:",
    options: [
      "Frequência Cardíaca (FC) x Volume Sistólico (VS)",
      "Pressão Arterial Média dividida pela Volemia",
      "Frequência Respiratória x Volume Corrente",
      "Resistência Vascular Sistêmica + Pressão Venosa Central"
    ],
    correctIndex: 0,
    explanation: "DC = FC x VS. Em um adulto saudável em repouso com FC de 70 batimentos/min e volume ejetado de 70 mL por batimento: DC = 70 x 70 = 4.900 mL/min (~5 litros por minuto). Durante exercício pesado pode subir para 20 a 25 L/min.",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "Débito Cardíaco = Frequência Cardíaca x Volume Sistólico (DC = FC x VS)."
  },
  {
    id: "cr-11",
    subjectId: "cardiorrespiratorio",
    subtopic: "Lei de Frank-Starling",
    difficulty: "Médio",
    question: "A Lei de Frank-Starling do coração estabelece fundamentalmente que:",
    options: [
      "Quanto maior o volume diastólico final (maior o estiramento inicial das fibras miocárdicas na pré-carga), maior será a força de contração e o volume de sangue ejetado na sístole",
      "Quanto maior a frequência cardíaca, menor é o consumo de oxigênio",
      "O coração bombeia sempre exatamente a mesma quantidade de sangue independente do retorno venoso",
      "O ventrículo direito exerce pressão maior que o ventrículo esquerdo"
    ],
    correctIndex: 0,
    explanation: "Otto Frank e Ernest Starling demonstraram a relação comprimento-tensão intrínseca do miocárdio: o aumento do retorno venoso distende os sarcômeros cardíacos aproximando-os de seu comprimento de sobreposição ideal de actina/miosina (2.2 µm), gerando contrações mais vigorosas.",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "Lei de Frank-Starling: maior estiramento diastólico (pré-carga) = maior força de ejeção."
  },
  {
    id: "cr-12",
    subjectId: "cardiorrespiratorio",
    subtopic: "Pressão Arterial & Equação Fundamental",
    difficulty: "Fácil",
    question: "A Pressão Arterial Média (PAM) sistêmica é determinada fisiologicamente pelo produto entre:",
    options: [
      "Débito Cardíaco (DC) x Resistência Vascular Periférica Total (RVP)",
      "Volume Corrente x Capacidade Vital",
      "Pressão Atmosférica - Pressão Alveolar",
      "Hematócrito x Concentração de Hemoglobina"
    ],
    correctIndex: 0,
    explanation: "PAM = DC x RVP. Qualquer alteração primária que eleve o volume minuto de sangue bombeado pelo coração (DC) ou que provoque vasoconstrição arteriolar generalizada (elevando a RVP) resultará em aumento proporcional da pressão arterial.",
    officialReference: "Guyton & Hall, Cap. 18; Silverthorn, Cap. 15",
    keyTakeaway: "PAM = Débito Cardíaco x Resistência Vascular Periférica (PAM = DC x RVP)."
  },
  {
    id: "cr-13",
    subjectId: "cardiorrespiratorio",
    subtopic: "Barorreceptores Arteriais",
    difficulty: "Médio",
    question: "Uma elevação aguda e súbita da pressão arterial estira os barorreceptores do seio carotídeo e arco aórtico, desencadeando como resposta reflexa imediata:",
    options: [
      "Aumento da atividade parassimpática vagal (bradicardia) e inibição do tônus simpático (vasodilatação periférica), reduzindo a pressão de volta ao normal",
      "Aumento imediato da adrenalina com taquicardia extrema",
      "Parada respiratória irreversível",
      "Fechamento reflexo das artérias coronárias"
    ],
    correctIndex: 0,
    explanation: "Os barorreceptores (fibras nos nervos NC IX e NC X) enviam sinais ao núcleo do trato solitário no bulbo. O centro vasomotor responde aumentando a descarga do vago para desacelerar o coração e reduzindo a estimulação simpática arteriolar para diminuir a resistência e normalizar a PAM.",
    officialReference: "Guyton & Hall, Cap. 18; Silverthorn, Cap. 15",
    keyTakeaway: "Reflexo barorreceptor responde à alta pressão ativando o vago (bradicardia e vasodilatação)."
  },
  {
    id: "cr-14",
    subjectId: "cardiorrespiratorio",
    subtopic: "Eletrocardiograma (ECG)",
    difficulty: "Fácil",
    question: "No traçado do Eletrocardiograma (ECG) convencional, a onda P corresponde à:",
    options: [
      "Despolarização elétrica dos átrios",
      "Repolarização elétrica dos ventrículos",
      "Despolarização rápida dos ventrículos",
      "Abertura das valvas semilunares"
    ],
    correctIndex: 0,
    explanation: "A onda P reflete a propagação da onda de despolarização a partir do nó sinoatrial através de ambos os átrios. O complexo QRS corresponde à despolarização ventricular e a onda T representa a repolarização ventricular.",
    officialReference: "Guyton & Hall, Cap. 11; Silverthorn, Cap. 14",
    keyTakeaway: "Onda P no ECG = despolarização dos átrios."
  },
  {
    id: "cr-15",
    subjectId: "cardiorrespiratorio",
    subtopic: "Eletrocardiograma (ECG)",
    difficulty: "Fácil",
    question: "No traçado eletrocardiográfico, o Complexo QRS e a Onda T correspondem respectivamente a quais eventos elétricos?",
    options: [
      "Despolarização dos ventrículos e Repolarização dos ventrículos",
      "Contração mecânica da aorta e relaxamento do diafragma",
      "Esvaziamento do seio coronário e enchimento das veias cavas",
      "Repolarização atrial isolada e fechamento da valva mitral"
    ],
    correctIndex: 0,
    explanation: "O complexo QRS marca a rápida despolarização sincicial dos miócitos ventriculares via feixe de His e fibras de Purkinje (a repolarização atrial fica oculta dentro do QRS). A onda T reflete o restabelecimento do potencial de repouso ventricular (repolarização).",
    officialReference: "Guyton & Hall, Cap. 11; Silverthorn, Cap. 14",
    keyTakeaway: "Complexo QRS = despolarização ventricular; Onda T = repolarização ventricular."
  },
  {
    id: "cr-16",
    subjectId: "cardiorrespiratorio",
    subtopic: "Sons Cardíacos (Bulhas)",
    difficulty: "Fácil",
    question: "A primeira bulha cardíaca (B1 - som 'Tum') auscultada no estetoscópio é produzida pelo:",
    options: [
      "Fechamento das valvas atrioventriculares (Mitral e Tricúspide) no início da sístole ventricular",
      "Fechamento das valvas semilunares aórtica e pulmonar",
      "Atrito do sangue contra a parede da traqueia",
      "Enchimento rápido e passivo do átrio direito"
    ],
    correctIndex: 0,
    explanation: "B1 ocorre no início da sístole ventricular isométrica quando a elevação súbita da pressão nos ventrículos força o fechamento das valvas mitral e tricúspide, gerando reverberação do sangue e das paredes cardíacas. B2 (som 'Tá') é o fechamento das valvas aórtica e pulmonar.",
    officialReference: "Guyton & Hall, Cap. 9 e 23; Silverthorn, Cap. 14",
    keyTakeaway: "B1 = fechamento das valvas atrioventriculares (mitral e tricúspide)."
  },
  {
    id: "cr-17",
    subjectId: "cardiorrespiratorio",
    subtopic: "Transporte de Oxigênio na Hemoglobina",
    difficulty: "Fácil",
    question: "A imensa maioria do oxigênio molecular (cerca de 98,5%) transportado no sangue arterial está:",
    options: [
      "Ligado reversivelmente aos átomos de ferro ferroso (Fe2+) dos 4 grupos heme da molécula de hemoglobina",
      "Dissolvido livremente no plasma na forma de bolhas gasosas",
      "Convertido enzimaticamente em bicarbonato",
      "Complexado a lipoproteínas de baixa densidade (LDL)"
    ],
    correctIndex: 0,
    explanation: "Devido à baixa solubilidade do O2 no plasma aquoso (apenas 0,003 mL de O2/100 mL de sangue por mmHg de PO2), menos de 1,5% dissolve-se fisicamente. Cada grama de hemoglobina liga-se a até 1,34 mL de oxigênio formando oxi-hemoglobina.",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 41",
    keyTakeaway: "98,5% do oxigênio sanguíneo é transportado ligado à hemoglobina nos eritrócitos."
  },
  {
    id: "cr-18",
    subjectId: "cardiorrespiratorio",
    subtopic: "Curva de Dissociação da Hemoglobina (Efeito Bohr)",
    difficulty: "Médio",
    question: "O desvio da curva de dissociação da oxi-hemoglobina para a DIREITA (Efeito Bohr), facilitando a liberação de O2 para os tecidos periféricos metabolicamente ativos, é provocado por:",
    options: [
      "Aumento da acidez (queda de pH / elevação de H+), aumento de PCO2, aumento de temperatura e elevação de 2,3-BPG",
      "Queda de temperatura e ambiente alcalino",
      "Diminuição maciça de gás carbônico",
      "Inalação de monóxido de carbono puro"
    ],
    correctIndex: 0,
    explanation: "Tecidos que trabalham intensamente produzem calor, ácido lático e CO2. Esses fatores ligam-se alostericamente à hemoglobina desoxigenada (estado Teso), reduzindo sua afinidade pelo oxigênio e descarregando mais O2 onde as células mais precisam (Efeito Bohr).",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 41",
    keyTakeaway: "Efeito Bohr: acidez, calor e CO2 desviam a curva para a direita facilitando a entrega de O2."
  },
  {
    id: "cr-19",
    subjectId: "cardiorrespiratorio",
    subtopic: "Transporte de Gás Carbônico",
    difficulty: "Médio",
    question: "A maior parte do dióxido de carbono (cerca de 70%) gerado pelo metabolismo celular é transportado no sangue venoso na forma de:",
    options: [
      "Íons bicarbonato (HCO3-) dissolvidos no plasma, gerados pela enzima anidrase carbônica dentro das hemácias",
      "Carbamino-hemoglobina ligada aos resíduos de amina",
      "Gás CO2 dissolvido puramente como gás livre",
      "Monóxido de carbono combinado à ferritina"
    ],
    correctIndex: 0,
    explanation: "O CO2 penetra nas hemácias onde a anidrase carbônica o combina com água: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-. O bicarbonato sai para o plasma pelo trocador aniônico AE1 em troca de Cl- (desvio de cloreto / efeito Hamburger), atuando como o principal tampão do sangue.",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 41",
    keyTakeaway: "70% do CO2 é transportado como bicarbonato (HCO3-) gerado pela anidrase carbônica."
  },
  {
    id: "cr-20",
    subjectId: "cardiorrespiratorio",
    subtopic: "Controle Neural da Respiração",
    difficulty: "Médio",
    question: "O ritmo respiratório basal automático é gerado e coordenado no tronco encefálico pelo complexo pré-Bötzinger situado no:",
    options: [
      "Bulbo ventrolateral (Grupo Respiratório Ventral)",
      "Cerebelo floconodular",
      "Córtex parietal somatossensorial",
      "Gânglios da base telencefálicos"
    ],
    correctIndex: 0,
    explanation: "O complexo pré-Bötzinger no grupo respiratório ventral do bulbo contém neurônios marcapasso intrinsecamente rítmicos que ativam os motoneurônios do nervo frênico (C3-C5) na medula espinal, garantindo respiração rítmica contínua mesmo sob anestesia ou sono.",
    officialReference: "West, Cap. 8; Guyton & Hall, Cap. 42",
    keyTakeaway: "Complexo pré-Bötzinger no bulbo = gerador do ritmo respiratório básico."
  },
  {
    id: "cr-21",
    subjectId: "cardiorrespiratorio",
    subtopic: "Quimiorreceptores Centrais",
    difficulty: "Médio",
    question: "O principal estímulo fisiológico que determina a frequência e profundidade respiratória em um indivíduo normal em repouso é detectado por quimiorreceptores centrais sensíveis a:",
    options: [
      "Íons hidrogênio (H+) no líquido cefalorraquidiano, gerados pela difusão do CO2 arterial através da barreira hematoencefálica",
      "Pequenas variações na pressão parcial de oxigênio exclusivamente",
      "Níveis de glicose no terceiro ventrículo",
      "Concentração de sódio plasmático"
    ],
    correctIndex: 0,
    explanation: "O CO2 difunde-se livremente do sangue para o líquor, onde a anidrase carbônica gera prótons H+. Os quimiorreceptores na superfície ventrolateral do bulbo são intensamente excitados pela acidez liquórica, elevando a ventilação alveolar para lavar o excesso de CO2.",
    officialReference: "West, Cap. 8; Guyton & Hall, Cap. 42",
    keyTakeaway: "A PCO2 arterial (via H+ liquórico) é o principal controlador da ventilação basal."
  },
  {
    id: "cr-22",
    subjectId: "cardiorrespiratorio",
    subtopic: "Quimiorreceptores Periféricos",
    difficulty: "Médio",
    question: "Os corpos carotídeos (inervados pelo NC IX) e os corpos aórticos (inervados pelo NC X) contêm células glômicas do tipo I especializadas na detecção de:",
    options: [
      "Hipoxemia arterial acentuada (queda da PO2 arterial abaixo de 60 mmHg), acidose e hipercapnia",
      "Pressão osmótica dos eritrócitos",
      "Níveis de colesterol circulante",
      "Temperatura central do miocárdio"
    ],
    correctIndex: 0,
    explanation: "Os quimiorreceptores periféricos são os únicos sensores do organismo capazes de detectar hipóxia arterial. Quando a PO2 cai abaixo de 60 mmHg, canais de K+ nas células glômicas fecham-se, despolarizando-as e disparando potenciais para aumentar a respiração e preservar a oxigenação cerebral.",
    officialReference: "West, Cap. 8; Guyton & Hall, Cap. 42",
    keyTakeaway: "Corpos carotídeos e aórticos detectam hipoxemia arterial (PO2 < 60 mmHg)."
  },
  {
    id: "cr-23",
    subjectId: "cardiorrespiratorio",
    subtopic: "Resistência Vascular e Raio do Vaso",
    difficulty: "Médio",
    question: "De acordo com a Lei de Poiseuille, a resistência vascular ao fluxo sanguíneo é inversamente proporcional a qual potência do raio do vaso?",
    options: [
      "À quarta potência do raio (r⁴)",
      "Ao quadrado do raio (r²)",
      "Diretamente ao raio simples",
      "À raiz quadrada do raio"
    ],
    correctIndex: 0,
    explanation: "Resistência = 8ηL / (π·r⁴). Como a resistência é inversamente proporcional à 4ª potência do raio, pequenas alterações no diâmetro das arteríolas musculares causam impactos monumentais: reduzir o raio pela metade aumenta a resistência vascular em 16 vezes (2⁴ = 16)!",
    officialReference: "Guyton & Hall, Cap. 14; Silverthorn, Cap. 15",
    keyTakeaway: "Resistência vascular varia com a quarta potência do raio (r⁴)."
  },
  {
    id: "cr-24",
    subjectId: "cardiorrespiratorio",
    subtopic: "Vasos de Resistência",
    difficulty: "Fácil",
    question: "Quais vasos do leito circulatório possuem a camada de músculo liso mais rica e representam o principal sítio regulatório da resistência vascular periférica sistêmica?",
    options: [
      "Arteríolas",
      "Capilares contínuos",
      "Grandes veias cavas",
      "Vênulas pós-capilares"
    ],
    correctIndex: 0,
    explanation: "As arteríolas são as 'torneiras' do sistema cardiovascular: sua túnica média espessa e ricamente inervada por fibras simpáticas permite contrair ou dilatar vigorosamente seu lúmen, direcionando o fluxo aos órgãos prioritários e modulando a pressão arterial média.",
    officialReference: "Guyton & Hall, Cap. 14; Silverthorn, Cap. 15",
    keyTakeaway: "Arteríolas são os principais vasos de resistência do sistema circulatório."
  },
  {
    id: "cr-25",
    subjectId: "cardiorrespiratorio",
    subtopic: "Vasos de Capacitância",
    difficulty: "Fácil",
    question: "As veias e vênulas do sistema circulatório são denominadas 'vasos de capacitância' porque:",
    options: [
      "Abrigam em repouso mais de 60% do volume sanguíneo total corporal graças à sua alta complacência e paredes delgadas",
      "Resistem a pressões superiores a 200 mmHg sem deformar",
      "Não permitem a passagem de hemácias",
      "Produzem oxigênio para os tecidos"
    ],
    correctIndex: 0,
    explanation: "As veias têm paredes finas e alta distensibilidade, funcionando como reservatório dinâmico de volume. A venoconstrição simpática (em hemorragias ou exercício) expele centenas de mililitros de sangue das veias para o coração, elevando o retorno venoso e o débito cardíaco.",
    officialReference: "Guyton & Hall, Cap. 15; Silverthorn, Cap. 15",
    keyTakeaway: "Veias = vasos de capacitância que contêm mais de 60% do sangue circulante."
  },
  {
    id: "cr-26",
    subjectId: "cardiorrespiratorio",
    subtopic: "Retorno Venoso e Válvulas",
    difficulty: "Fácil",
    question: "O retorno venoso dos membros inferiores em direção ao coração contra a gravidade é impulsionado principalmente por:",
    options: [
      "Bomba muscular da panturrilha combinada a válvulas venosas semilunares unidirecionais e pressão torácica negativa inspiratória",
      "Pulsações da bexiga urinária",
      "Alta pressão hidrostática deixada pelos capilares",
      "Sucção gerada pelo fígado"
    ],
    correctIndex: 0,
    explanation: "Ao caminhar, a contração dos músculos gastrocnêmio e sóleo espreme as veias profundas, impulsionando o sangue para cima. Válvulas cúspides bicúspides fecham-se impedindo o refluxo gravídico (a falência dessas válvulas provoca varizes e edema).",
    officialReference: "Guyton & Hall, Cap. 15; Silverthorn, Cap. 15",
    keyTakeaway: "Bomba muscular esquelética + válvulas venosas garantem o retorno venoso antigravitacional."
  },
  {
    id: "cr-27",
    subjectId: "cardiorrespiratorio",
    subtopic: "Troca Capilar & Forças de Starling",
    difficulty: "Médio",
    question: "O movimento transcapilar de fluidos entre o plasma e o interstício é regido pelo equilíbrio de Starling entre:",
    options: [
      "Pressão hidrostática capilar (que empurra líquido para fora) e Pressão oncótica das proteínas plasmáticas (que retém líquido no interior)",
      "Gravidade e velocidade do fluxo nos linfáticos",
      "Concentração de glicose e oxigênio dissolvidos",
      "Diferença de temperatura entre a derme e a epiderme"
    ],
    correctIndex: 0,
    explanation: "A pressão hidrostática do capilar (Pc ~35 mmHg no polo arteriolar) tende a filtrar fluido para o interstício. A pressão oncótica/coloidosmótica gerada pelas proteínas plasmáticas, sobretudo a albumina (πc ~25-28 mmHg), puxa o fluido de volta por osmose.",
    officialReference: "Guyton & Hall, Cap. 16; Silverthorn, Cap. 15",
    keyTakeaway: "Forças de Starling: equilíbrio entre pressão hidrostática e pressão oncótica (albumina)."
  },
  {
    id: "cr-28",
    subjectId: "cardiorrespiratorio",
    subtopic: "Edema e Hipoalbuminemia",
    difficulty: "Fácil",
    question: "Condições clínicas que cursam com queda acentuada de albumina sérica (como cirrose hepática descompensada ou síndrome nefrótica) provocam edema generalizado porque:",
    options: [
      "A redução da pressão oncótica plasmática diminui a força que retém a água nos capilares, aumentando a filtração de líquido para o espaço intersticial",
      "O coração para de bater nos ventrículos",
      "Os pulmões enchem-se de bile",
      "As artérias sofrem necrose imediata"
    ],
    correctIndex: 0,
    explanation: "A albumina é responsável por 80% da pressão coloidosmótica do plasma. Quando seu nível cai (<2.5 g/dL), a pressão oncótica capilar despenca, rompendo o equilíbrio de Starling a favor do vazamento contínuo de plasma para os tecidos, manifestando-se como edema depressível (anasarca).",
    officialReference: "Guyton & Hall, Cap. 16 e 25; Robbins & Cotran, Cap. 4",
    keyTakeaway: "Hipoalbuminemia reduz a pressão oncótica capilar gerando edema generalizado."
  },
  {
    id: "cr-29",
    subjectId: "cardiorrespiratorio",
    subtopic: "Fração de Ejeção Ventricular",
    difficulty: "Médio",
    question: "A Fração de Ejeção (FE) do ventrículo esquerdo é um índice crítico da função cardíaca clínica definido como:",
    options: [
      "A porcentagem do volume diastólico final que é ejetada a cada sístole (Volume Sistólico / VDF x 100%), sendo normalmente superior a 50-55%",
      "A quantidade total de batimentos acumulados em uma hora",
      "A relação entre o tamanho do átrio e o tamanho do ventrículo",
      "A velocidade da onda de pulso na carótida"
    ],
    correctIndex: 0,
    explanation: "Se o ventrículo se enche com 120 mL de sangue na diástole (VDF) e ejeta 70 mL na sístole (VS), a Fração de Ejeção é: 70 / 120 = ~58%. Na insuficiência cardíaca com fração de ejeção reduzida (ICFER), esse valor cai para menos de 40%, refletindo déficit contrátil miocárdico.",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "Fração de Ejeção = percentual do volume diastólico ejetado na sístole (normal > 50%)."
  },
  {
    id: "cr-30",
    subjectId: "cardiorrespiratorio",
    subtopic: "Volumes e Capacidades Pulmonares",
    difficulty: "Fácil",
    question: "O volume de ar inspirado ou expirado em cada ciclo respiratório normal durante a respiração tranquila e silenciosa (~500 mL) denomina-se:",
    options: [
      "Volume Corrente (VC)",
      "Capacidade Pulmonar Total (CPT)",
      "Volume Residual (VR)",
      "Volume de Reserva Expiratório (VRE)"
    ],
    correctIndex: 0,
    explanation: "O Volume Corrente (Tidal Volume) é de aproximadamente 500 mL no adulto jovem saudável (cerca de 7 mL/kg). Deste total, cerca de 150 mL permanecem nas vias aéreas condutoras (espaço morto anatômico) e 350 mL atingem os alvéolos respiratórios.",
    officialReference: "West, Cap. 2; Guyton & Hall, Cap. 38",
    keyTakeaway: "Volume Corrente (VC) = volume movimentado a cada respiração normal (~500 mL)."
  },
  {
    id: "cr-31",
    subjectId: "cardiorrespiratorio",
    subtopic: "Volume Residual",
    difficulty: "Fácil",
    question: "O Volume Residual (VR) pulmonar é o volume de ar que permanece nos pulmões mesmo após uma expiração forçada máxima. É correto afirmar que o VR:",
    options: [
      "NÃO pode ser medido por espirometria convencional simples e impede o colapso completo dos alvéolos pulmonares",
      "É completamente eliminado em mergulhos profundos",
      "Equivale a zero litros em indivíduos saudáveis",
      "Mede mais de 10 litros em recém-nascidos"
    ],
    correctIndex: 0,
    explanation: "O volume residual (~1.100 a 1.200 mL) garante que a hematose continue ocorrendo nos capilares mesmo durante os intervalos entre as respirações. Como não sai dos pulmões, só pode ser aferido por pletismografia ou técnicas de diluição de hélio/lavagem de nitrogênio.",
    officialReference: "West, Cap. 2; Guyton & Hall, Cap. 38",
    keyTakeaway: "Volume Residual permanece após expiração forçada máxima e não é medido por espirometria."
  },
  {
    id: "cr-32",
    subjectId: "cardiorrespiratorio",
    subtopic: "Capacidade Vital",
    difficulty: "Fácil",
    question: "A Capacidade Vital (CV), correspondente à quantidade máxima de ar que uma pessoa pode expelir após uma inspiração máxima, equivale à soma de:",
    options: [
      "Volume Corrente (VC) + Volume de Reserva Inspiratório (VRI) + Volume de Reserva Expiratório (VRE)",
      "Volume Residual + Volume Corrente",
      "Volume do espaço morto x 2",
      "Pressão arterial sistólica somada à diastólica"
    ],
    correctIndex: 0,
    explanation: "CV = VRI + VC + VRE (~4.600 mL no homem). É um dos parâmetros mais amplamente avaliados em testes de função pulmonar e espirometria para diagnosticar distúrbios ventilatórios restritivos e obstrutivos.",
    officialReference: "West, Cap. 2; Guyton & Hall, Cap. 38",
    keyTakeaway: "Capacidade Vital (CV) = VRI + VC + VRE (máximo ar mobilizável voluntariamente)."
  },
  {
    id: "cr-33",
    subjectId: "cardiorrespiratorio",
    subtopic: "Vasoconstrição Hipóxica Pulmonar",
    difficulty: "Médio",
    question: "Ao contrário dos tecidos sistêmicos que sofrem vasodilatação diante de hipóxia local, os vasos pulmonares exibem uma resposta contrária e única denominada Vasoconstrição Hipóxica Pulmonar (Efeito Euler-Liljestrand). Qual o objetivo dessa resposta?",
    options: [
      "Desviar o fluxo de sangue das regiões alveolares mal ventiladas para áreas bem oxigenadas, otimizando a relação ventilação/perfusão (V/Q)",
      "Reduzir a oxigenação do cérebro para poupar energia",
      "Romper os capilares alveolares para drenar edema",
      "Provocar a parada dos batimentos cardíacos"
    ],
    correctIndex: 0,
    explanation: "Se um segmento pulmonar for obstruído (por secreção ou rolha de muco), o alvéolo fica com baixa PO2. As arteríolas que irrigam essa região constringem-se automaticamente, redirecionando o sangue venoso para alvéolos abertos e ventilados, evitando shunt intrapulmonar.",
    officialReference: "West, Cap. 4; Guyton & Hall, Cap. 39",
    keyTakeaway: "Vasoconstrição hipóxica pulmonar desvia o sangue de áreas mal ventiladas para as oxigenadas."
  },
  {
    id: "cr-34",
    subjectId: "cardiorrespiratorio",
    subtopic: "Circulação Coronariana",
    difficulty: "Médio",
    question: "A maior parte da perfusão miocárdica que irriga a parede muscular do ventrículo esquerdo ocorre durante qual fase do ciclo cardíaco?",
    options: [
      "Diástole ventricular, quando o miocárdio relaxa e descompacta os vasos intramiocardiais",
      "Sístole isovolumétrica de alta pressão",
      "Pico da ejeção aórtica rápida",
      "Durante o fechamento da valva tricúspide exclusivamente"
    ],
    correctIndex: 0,
    explanation: "Durante a sístole, a potente contração do miocárdio ventricular comprime os capilares e ramos coronarianos intramurais, estrangulando o fluxo. O enchimento coronariano do VE ocorre predominantemente durante a diástole (cerca de 70-80% do fluxo total).",
    officialReference: "Guyton & Hall, Cap. 21; Silverthorn, Cap. 14",
    keyTakeaway: "A irrigação coronariana do ventrículo esquerdo ocorre primariamente durante a diástole."
  },
  {
    id: "cr-35",
    subjectId: "cardiorrespiratorio",
    subtopic: "Reflexo de Hering-Breuer",
    difficulty: "Médio",
    question: "O reflexo de insuflação de Hering-Breuer previne a hiperdistensão mecânica perigosa dos pulmões através de:",
    options: [
      "Receptores de estiramento nas paredes dos brônquios e bronquíolos que enviam sinais inibitórios via nervo vago para interromper a inspiração",
      "Ativação do nervo facial para fechar os lábios",
      "Parada temporária dos batimentos cardíacos",
      "Expulsão reflexa do surfactante na traqueia"
    ],
    correctIndex: 0,
    explanation: "Quando o volume corrente ultrapassa ~1 a 1.5 L (como no exercício), os mecanorreceptores de estiramento de adaptação lenta na árvore traqueobrônquica disparam potenciais via fibras vagais aferentes ao bulbo, inibindo os neurônios inspiratórios e iniciando a expiração.",
    officialReference: "West, Cap. 8; Guyton & Hall, Cap. 42",
    keyTakeaway: "Reflexo de Hering-Breuer = receptores de estiramento pulmonar inibem a inspiração excessiva."
  },
  {
    id: "cr-36",
    subjectId: "cardiorrespiratorio",
    subtopic: "Intoxicação por Monóxido de Carbono",
    difficulty: "Fácil",
    question: "O monóxido de carbono (CO) é um gás inodoro extremamente letal porque sua afinidade pela hemoglobina humana é cerca de:",
    options: [
      "210 a 250 vezes maior do que a do oxigênio, formando carboxi-hemoglobina estável e bloqueando o transporte de O2",
      "Igual à do nitrogênio, sem efeito clínico",
      "Dez vezes menor que a do gás carbônico",
      "Inexistente, pois o CO não interage com células vermelhas"
    ],
    correctIndex: 0,
    explanation: "O CO liga-se ao ferro heme formando carboxi-hemoglobina (HbCO) com afinidade ~240 vezes superior à do O2. Além de ocupar os sítios de ligação, ele trava os hemes restantes no estado relaxado de alta afinidade, impedindo a liberação do pouco oxigênio para os tecidos hipóxicos.",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 41",
    keyTakeaway: "CO tem afinidade ~240x maior que o O2 pela hemoglobina, impedindo a oxigenação celular."
  },
  {
    id: "cr-37",
    subjectId: "cardiorrespiratorio",
    subtopic: "Pressão Pleural",
    difficulty: "Médio",
    question: "A pressão no interior do espaço intrapleural (entre as pleuras visceral e parietal) em repouso é normalmente:",
    options: [
      "Negativa (subatmosférica, cerca de -5 cmH2O), mantendo os pulmões expandidos aplicados contra a parede torácica",
      "Positiva (+20 cmH2O) para empurrar os pulmões para fora",
      "Exatamente idêntica à pressão sanguínea aórtica",
      "Flutuante entre 100 e 200 mmHg"
    ],
    correctIndex: 0,
    explanation: "A tendência elástica dos pulmões em retrair para dentro opõe-se à tendência da parede da caixa torácica em expandir para fora. Essa oposição contínua cria uma pressão negativa (vácuo parcial de -3 a -5 cmH2O) no líquido intrapleural, mantendo os pulmões abertos.",
    officialReference: "West, Cap. 7; Guyton & Hall, Cap. 38",
    keyTakeaway: "Pressão intrapleural é subatmosférica (-5 cmH2O), acoplando os pulmões à parede torácica."
  },
  {
    id: "cr-38",
    subjectId: "cardiorrespiratorio",
    subtopic: "Pneumotórax",
    difficulty: "Fácil",
    question: "Se a parede torácica for perfurada (por exemplo, por um ferimento por arma branca), o ar atmosférico entra no espaço intrapleural e a pressão negativa é perdida. O que ocorre com o pulmão afetado?",
    options: [
      "O pulmão entra em colapso elástico imediato (atelectasia maciça / pneumotórax)",
      "O pulmão infla indefinidamente até explodir",
      "O pulmão continua respirando perfeitamente sem alteração",
      "O ventrículo esquerdo se rompe espontaneamente"
    ],
    correctIndex: 0,
    explanation: "Com a entrada de ar no espaço pleural (pneumotórax), a pressão intrapleural iguala-se à pressão atmosférica (0 cmH2O). Sem a sucção da pressão subatmosférica para sustentá-lo aberto, as forças elásticas intrínsecas colapsam o pulmão em direção ao hilo.",
    officialReference: "West, Cap. 7; Guyton & Hall, Cap. 38",
    keyTakeaway: "Pneumotórax = entrada de ar na cavidade pleural com colapso do pulmão."
  },
  {
    id: "cr-39",
    subjectId: "cardiorrespiratorio",
    subtopic: "Diferença Artéria vs Veia",
    difficulty: "Fácil",
    question: "Histologicamente e funcionalmente, as grandes artérias elásticas (como a aorta) diferem das grandes veias por possuírem:",
    options: [
      "Camada média muito espessa rica em fibras elásticas e músculo liso, suportando e amortecendo pressões pulsáteis elevadas",
      "Válvulas em toda a extensão para impedir o refluxo",
      "Paredes delgadas transparentes com lúmen sempre colabado",
      "Presença exclusiva de sangue azul desoxigenado"
    ],
    correctIndex: 0,
    explanation: "A aorta e grandes ramos funcionam como reservatório de pressão elástica (efeito Windkessel): distendem-se com a onda ejetada na sístole e retraem-se elasticamente na diástole, mantendo um fluxo sanguíneo arterial contínuo e estável para a periferia.",
    officialReference: "Junqueira & Carneiro, Cap. 11; Guyton & Hall, Cap. 14",
    keyTakeaway: "Artérias elásticas amortecem altas pressões pulsáteis e mantêm o fluxo contínuo."
  },
  {
    id: "cr-40",
    subjectId: "cardiorrespiratorio",
    subtopic: "Capilares Contínuos vs Fenestrados",
    difficulty: "Médio",
    question: "Os capilares fenestrados são caracterizados por poros (fenestras) em suas células endoteliais e são encontrados preferencialmente em órgãos com intensa filtração ou absorção, como:",
    options: [
      "Glomérulos renais, mucosa intestinal e glândulas endócrinas",
      "Músculo esquelético e cérebro com barreira hematoencefálica",
      "Córnea e esclera ocular",
      "Dentes e cartilagem hialina"
    ],
    correctIndex: 0,
    explanation: "Capilares fenestrados possuem poros de 60 a 80 nm que facilitam o trânsito veloz de fluidos, íons e pequenas moléculas. Capilares contínuos (com junções oclusivas fortes) predominam no encéfalo e músculos. Sinusoides (com grandes fendas abertas) residem no fígado e baço.",
    officialReference: "Junqueira & Carneiro, Cap. 11; Silverthorn, Cap. 15",
    keyTakeaway: "Capilares fenestrados (com poros) localizam-se nos rins, intestino e endócrinas."
  },
  {
    id: "cr-41",
    subjectId: "cardiorrespiratorio",
    subtopic: "Atraso no Nó Atrioventricular",
    difficulty: "Médio",
    question: "O nó atrioventricular (AV) impõe um atraso fisiológico de condução de cerca de 0,10 a 0,13 segundo ao impulso elétrico cardíaco. Qual é o papel funcional essencial desse atraso?",
    options: [
      "Permitir que os átrios terminem sua contração e esvaziem completamente o sangue nos ventrículos antes do início da sístole ventricular",
      "Evitar que o oxigênio volte para os pulmões",
      "Descansar o diafragma durante a expiração",
      "Resfriar o sangue nas câmaras cardíacas"
    ],
    correctIndex: 0,
    explanation: "Se átrios e ventrículos contraíssem simultaneamente, as valvas AV fechariam e os átrios não conseguiriam ejetar seu volume de reforço nos ventrículos. O atraso no nó AV garante o sequenciamento mecânico sincronizado: sístole atrial primeiro, sístole ventricular depois.",
    officialReference: "Guyton & Hall, Cap. 10; Silverthorn, Cap. 14",
    keyTakeaway: "Atraso no Nó AV permite que os átrios se esvaziem antes que os ventrículos se contraiam."
  },
  {
    id: "cr-42",
    subjectId: "cardiorrespiratorio",
    subtopic: "Hiperventilação e Alcalose Respiratória",
    difficulty: "Fácil",
    question: "Um indivíduo que hiperventila em uma crise aguda de ansiedade elimina excesso de CO2 pela respiração acelerada. Essa alteração provocará no sangue:",
    options: [
      "Queda da PCO2 arterial (hipocapnia) e aumento do pH sanguíneo (alcalose respiratória)",
      "Acidose metabólica com pH inferior a 6.8",
      "Aumento imediato do ácido láctico gástrico",
      "Hipóxia fulminante na retina"
    ],
    correctIndex: 0,
    explanation: "Conforme a equação CO2 + H2O <-> H2CO3 <-> H+ + HCO3-, a hiperventilação excessiva 'lava' o CO2 dos alvéolos e sangue. A perda do ácido volátil CO2 desloca a reação para a esquerda, consumindo prótons livres H+ e elevando o pH acima de 7.45 (alcalose respiratória).",
    officialReference: "West, Cap. 6; Guyton & Hall, Cap. 31",
    keyTakeaway: "Hiperventilação elimina CO2 excessivo levando à alcalose respiratória (aumento de pH)."
  },
  {
    id: "cr-43",
    subjectId: "cardiorrespiratorio",
    subtopic: "Hipoventilação e Acidose Respiratória",
    difficulty: "Fácil",
    question: "A hipoventilação alveolar grave (como na sobredose por opioides que deprime o bulbo respiratório) retém CO2 no organismo, resultando em:",
    options: [
      "Hipercapnia (elevação de PCO2 arterial) e queda do pH sanguíneo (acidose respiratória)",
      "Alcalose metabólica grave",
      "Parada imediata da produção de hemácias",
      "Hiperventilação reflexa por excesso de oxigênio"
    ],
    correctIndex: 0,
    explanation: "A respiração superficial ou lenta não expele o dióxido de carbono metabólico. A PCO2 acumula-se no sangue (> 45 mmHg), gerando excesso de íons H+ hidrogeniônicos e derrubando o pH sanguíneo abaixo de 7.35 (acidose respiratória), com risco de coma por narcose de CO2.",
    officialReference: "West, Cap. 6; Guyton & Hall, Cap. 31",
    keyTakeaway: "Hipoventilação retém CO2 promovendo acidose respiratória (queda do pH sanguíneo)."
  },
  {
    id: "cr-44",
    subjectId: "cardiorrespiratorio",
    subtopic: "Shunt Fisiológico",
    difficulty: "Médio",
    question: "O sangue desoxigenado das veias bronquiais e das veias de Thebesius que drena diretamente nas veias pulmonares e no ventrículo esquerdo constitui um pequeno:",
    options: [
      "Shunt (desvio) fisiológico anatômico da direita para a esquerda (~1-2% do DC), explicando por que a PO2 arterial é discretamente menor que a alveolar",
      "Vazamento patológico congênito que necessita de cirurgia imediata",
      "Canal de transporte exclusivo de linfócitos",
      "Ducto secretor de surfactante"
    ],
    correctIndex: 0,
    explanation: "Mesmo em pessoas perfeitamente saudáveis, o sangue venoso que nutriu o parênquima pulmonar e a parede cardíaca drena direto no lado esquerdo arterial sem passar pelos capilares alveolares, diluindo discretamente o sangue oxigenado e reduzindo a PO2 de 104 para ~95-100 mmHg.",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 40",
    keyTakeaway: "Shunt anatômico fisiológico normal diminui discretamente a PO2 arterial para ~95 mmHg."
  },
  {
    id: "cr-45",
    subjectId: "cardiorrespiratorio",
    subtopic: "Músculo Liso Vascular e Óxido Nítrico",
    difficulty: "Médio",
    question: "O cisalhamento mecânico do sangue (shear stress) sobre as células endoteliais arteriais estimula a enzima eNOS a produzir qual potente vasodilatador endógeno?",
    options: [
      "Óxido Nítrico (NO)",
      "Endotelina-1 (ET-1)",
      "Angiotensina II",
      "Tromboxano A2"
    ],
    correctIndex: 0,
    explanation: "A enzima óxido nítrico sintase endotelial (eNOS) sintetiza o gás NO a partir da L-arginina. O NO difunde-se para a camada média de músculo liso vizinha, ativa a guanilil ciclase solúvel e eleva o GMPc, provocando vasodilatação e reduzindo a resistência vascular.",
    officialReference: "Guyton & Hall, Cap. 17; Silverthorn, Cap. 15",
    keyTakeaway: "Endotélio libera Óxido Nítrico (NO) promovendo vasodilatação dependente de fluxo."
  },
  {
    id: "cr-46",
    subjectId: "cardiorrespiratorio",
    subtopic: "Relação Ventilação/Perfusão (V/Q)",
    difficulty: "Difícil",
    question: "Em um indivíduo em pé, devido à gravidade, as bases pulmonares apresentam valores de ventilação e fluxo sanguíneo muito maiores que os ápices. No entanto, a relação Ventilação/Perfusão (V/Q):",
    options: [
      "É mais alta no ápice pulmonar (V/Q ~3.0, com PO2 mais alta) e mais baixa na base pulmonar (V/Q ~0.6)",
      "É uniforme e perfeitamente idêntica a 1.0 em todas as partes dos pulmões",
      "É nula na base e infinita no ápice",
      "Não tem relação com a gravidade"
    ],
    correctIndex: 0,
    explanation: "Embora tanto o fluxo de sangue quanto a ventilação aumentem do ápice para a base, a perfusão cresce com intensidade muito mais íngreme. Assim, o ápice tem excesso de ar para pouco sangue (alto V/Q), enquanto a base é superperfundida em relação à ventilação (baixo V/Q).",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 40",
    keyTakeaway: "Relação V/Q é maior no ápice pulmonar (~3.0) e menor na base (~0.6)."
  },
  {
    id: "cr-47",
    subjectId: "cardiorrespiratorio",
    subtopic: "Sistema Linfático & Drenagem",
    difficulty: "Fácil",
    question: "O sistema vascular linfático é essencial para o equilíbrio cardiovascular porque:",
    options: [
      "Recolhe os cerca de 2 a 4 litros diários de excesso de líquido e proteínas plasmáticas extravasadas no interstício, devolvendo-os à circulação venosa",
      "Substitui as artérias coronárias em idosos",
      "Bombeia hemácias diretamente no átrio esquerdo",
      "Filtra o ar inspirado nas fossas nasais"
    ],
    correctIndex: 0,
    explanation: "Pelas forças de Starling normais, a filtração capilar excede discretamente a reabsorção venular. Os vasos linfáticos cegos drenam esse ultrafiltrado e o conduzem através de linfonodos até o ducto torácico e ducto linfático direito, impedindo o acúmulo de edema intersticial.",
    officialReference: "Guyton & Hall, Cap. 16; Silverthorn, Cap. 15",
    keyTakeaway: "Linfáticos drenam de 2 a 4 L/dia de fluido intersticial e proteínas de volta ao sangue."
  },
  {
    id: "cr-48",
    subjectId: "cardiorrespiratorio",
    subtopic: "Complacência Pulmonar",
    difficulty: "Médio",
    question: "A complacência pulmonar reflete a facilidade com que os pulmões se expandem sob uma dada variação de pressão (ΔV/ΔP). Uma complacência pulmonar marcadamente reduzida (pulmão rígido e duro de insuflar) é típica de qual patologia?",
    options: [
      "Fibrose pulmonar intersticial idiopática",
      "Enfisema pulmonar avançado",
      "Crise de asma alérgica aguda",
      "Pólipo nasal benigno"
    ],
    correctIndex: 0,
    explanation: "Na fibrose pulmonar, a deposição excessiva de colágeno no interstício torna o tecido alveolar rígido e inextensível (baixa complacência), exigindo trabalho muscular inspiratório exaustivo. No enfisema, ocorre o inverso: a destruição das fibras elásticas aumenta a complacência.",
    officialReference: "West, Cap. 7; Robbins & Cotran, Cap. 15",
    keyTakeaway: "Fibrose pulmonar diminui a complacência tornando os pulmões rígidos e duros de inflar."
  },
  {
    id: "cr-49",
    subjectId: "cardiorrespiratorio",
    subtopic: "Músculos Acessórios da Respiração",
    difficulty: "Fácil",
    question: "Durante uma crise asmática grave ou esforço físico extenuante, quais músculos são recrutados ativamente como musculatura acessória da inspiração?",
    options: [
      "Esternocleidomastoideo, Escalenos e Peitorais menores",
      "Músculos da língua e lábios",
      "Músculos do períneo exclusivamente",
      "Glúteos máximos e quadríceps"
    ],
    correctIndex: 0,
    explanation: "Quando a demanda ventilatória excede a capacidade do diafragma isolado, o indivíduo utiliza a musculatura acessória do pescoço e tórax (esternocleidomastoideo elevando o esterno, escalenos tracionando as duas primeiras costelas), visível clinicamente como tiragem intercostal/supraclavicular.",
    officialReference: "West, Cap. 7; Guyton & Hall, Cap. 38",
    keyTakeaway: "Esternocleidomastoideo e escalenos são músculos acessórios da inspiração forçada."
  },
  {
    id: "cr-50",
    subjectId: "cardiorrespiratorio",
    subtopic: "Efeito Haldane",
    difficulty: "Difícil",
    question: "O Efeito Haldane descreve uma propriedade fisiológica fundamental da hemoglobina no transporte de gases, segundo a qual:",
    options: [
      "A oxigenação do sangue nos capilares pulmonares desloca o CO2 da hemoglobina, promovendo sua liberação para os alvéolos",
      "O oxigênio impede a formação de urina pelos rins",
      "O dióxido de carbono neutraliza os ácidos estomacais",
      "O cálcio liga-se à hemoglobina em temperaturas frias"
    ],
    correctIndex: 0,
    explanation: "Enquanto o Efeito Bohr aborda a influência do H+/CO2 sobre a entrega de O2, o Efeito Haldane trata do inverso: a ligação de O2 à hemoglobina nos pulmões altera sua conformação espacial, diminuindo sua afinidade por CO2 e íons H+, liberando o CO2 para ser expirado.",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 41",
    keyTakeaway: "Efeito Haldane: a ligação de O2 à hemoglobina força a liberação do CO2 nos pulmões."
  },
  {
    id: "cr-51",
    subjectId: "cardiorrespiratorio",
    subtopic: "Período Refratário Cardíaco",
    difficulty: "Médio",
    question: "O longo período refratário absoluto do músculo cardíaco (~250 ms) impede a ocorrência de tétano (contração sustentada). Por que o tétano seria biologicamente fatal no coração?",
    options: [
      "Porque o coração paralisaria contraído em sístole permanente, impedindo o relaxamento diastólico e o enchimento de sangue das câmaras",
      "Porque os ossículos da orelha vibrariam em ressonância",
      "Porque o estômago deixaria de secretar ácido",
      "Porque os eritrócitos se multiplicariam desordenadamente"
    ],
    correctIndex: 0,
    explanation: "O coração é uma bomba alternante que depende estritamente do ciclo mecânico de contração (ejeção) seguido obrigatoriamente de relaxamento (enchimento de sangue). O longo período refratário garante que o miocárdio relaxe sempre após cada batimento antes de poder ser reexcitado.",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "O longo período refratário cardíaco impede tétano garantindo o relaxamento para enchimento."
  },
  {
    id: "cr-52",
    subjectId: "cardiorrespiratorio",
    subtopic: "Integração Cardiorrespiratória",
    difficulty: "Fácil",
    question: "A arritmia sinusal respiratória é uma variação fisiológica benigna comum caracterizada por:",
    options: [
      "Aumento da frequência cardíaca durante a inspiração e diminuição durante a expiração, mediado por flutuações do tônus vagal",
      "Parada respiratória a cada batimento cardíaco",
      "Abertura prematura da valva aórtica na expiração",
      "Queda de 80% da pressão na inspiração"
    ],
    correctIndex: 0,
    explanation: "Conforme ilustrado no infográfico: sinergia cardiorrespiratória. Durante a inspiração, a pressão intratorácica negativa e o influxo de sangue no átrio direito diminuem temporariamente a inibição parassimpática vagal, acelerando os batimentos; na expiração, o tônus vagal é restaurado, desacelerando o coração.",
    officialReference: "Guyton & Hall, Cap. 13; Silverthorn, Cap. 14",
    keyTakeaway: "Arritmia sinusal respiratória: coração acelera na inspiração e desacelera na expiração."
  },
  {
    id: "cr-53",
    subjectId: "cardiorrespiratorio",
    subtopic: "Mecanismo de Frank-Starling",
    difficulty: "Médio",
    question: "A Lei de Frank-Starling do coração estabelece que, dentro dos limites fisiológicos, quanto maior o retorno venoso (volume diastólico final / pré-carga):",
    options: [
      "Maior o estiramento inicial dos sarcômeros miocárdicos, aproximando os miofilamentos de actina e miosina do comprimento ótimo e aumentando a força de contração sistólica",
      "Menor o volume de sangue ejetado por batimento",
      "Mais rápida a despolarização dos neurônios cerebrais",
      "Menor o consumo de oxigênio pelo miocárdio"
    ],
    correctIndex: 0,
    explanation: "A lei de Frank-Starling é uma propriedade intrínseca do músculo cardíaco. O aumento do enchimento ventricular estira os sarcômeros (de ~1,8 para até 2,2 micrômetros), otimizando a sobreposição de pontes cruzadas de actina-miosina e aumentando a sensibilidade dos miofilamentos ao cálcio, o que gera maior força de ejeção (volume sistólico).",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "Lei de Frank-Starling: maior volume diastólico final gera maior estiramento e maior força de ejeção."
  },
  {
    id: "cr-54",
    subjectId: "cardiorrespiratorio",
    subtopic: "Pós-Carga e Lei de Laplace",
    difficulty: "Difícil",
    question: "Segundo a Lei de Laplace aplicada ao ventrículo esquerdo (Tensão = [Pressão × Raio] / [2 × Espessura]), a hipertrofia concêntrica em resposta à hipertensão arterial crônica atua para:",
    options: [
      "Aumentar a espessura da parede miocárdica (h), reduzindo o estresse e a tensão sistólica exercida sobre as fibras musculares individuais",
      "Aumentar o raio da câmara ventricular esquerda",
      "Diminuir a pressão arterial diastólica a zero",
      "Impedir a contração das coronárias"
    ],
    correctIndex: 0,
    explanation: "A pós-carga excessiva (hipertensão ou estenose aórtica) eleva a pressão intraventricular sistólica (P). Para normalizar a tensão ou estresse parietal (sigma = P x r / 2h), os miócitos sintetizam novos sarcômeros em paralelo, espessando a parede ventricular (hipertrofia concêntrica, aumento de h), o que atenua o estresse de sobrecarga.",
    officialReference: "Berne & Levy, Cap. 17; Guyton & Hall, Cap. 22",
    keyTakeaway: "Lei de Laplace: hipertrofia da parede ventricular reduz a tensão sistólica frente à pós-carga alta."
  },
  {
    id: "cr-55",
    subjectId: "cardiorrespiratorio",
    subtopic: "Reflexo Barorreceptor",
    difficulty: "Médio",
    question: "Quando uma pessoa se levanta bruscamente da cama e a pressão arterial cai transitoriamente (hipotensão ortostática), o reflexo barorreceptor arterial promove imediatamente:",
    options: [
      "Redução da frequência de disparos dos barorreceptores do seio carotídeo (NC IX) e arco aórtico (NC X), desinibindo o centro vasomotor simpático e aumentando FC e resistência vascular periférica",
      "Aumento imediato do tônus vagal parassimpático cardíaco",
      "Bloqueio de toda a secreção de adrenalina pelas adrenais",
      "Vasodilatação sistêmica generalizada"
    ],
    correctIndex: 0,
    explanation: "A queda de pressão diminui a deformação mecânica dos barorreceptores no seio carotídeo e aorta, reduzindo seus disparos para o núcleo do trato solitário (NTS). Isso desinibe a área vasomotora rostral ventrolateral no bulbo, disparando descarga simpática rápida: taquicardia, maior contratilidade e vasoconstrição arteriolar, normalizando a PA em segundos.",
    officialReference: "Guyton & Hall, Cap. 18; Silverthorn, Cap. 15",
    keyTakeaway: "Queda de PA reduz disparos barorreceptores, ativando o simpático para elevar FC e vasoconstrição."
  },
  {
    id: "cr-56",
    subjectId: "cardiorrespiratorio",
    subtopic: "Controle Central da Respiração",
    difficulty: "Médio",
    question: "Os quimiorreceptores centrais situados na superfície ventral do bulbo são os principais reguladores do ritmo ventilatório minuto basal em repouso, respondendo a variações de:",
    options: [
      "Concentração de íons hidrogênio (H+) no líquido cefalorraquidiano, gerados pela difusão rápida de CO2 através da barreira hematoencefálica",
      "Níveis de glicose no sangue arterial",
      "Pressão parcial de oxigênio abaixo de 95 mmHg",
      "Concentração plasmática de albumina"
    ],
    correctIndex: 0,
    explanation: "Os quimiorreceptores centrais são extremamente sensíveis a íons H+, mas o H+ plasmático não cruza facilmente a BHE. O CO2, por ser lipofílico, difunde-se instantaneamente para o líquor, onde a anidrase carbônica o hidrata em H2CO3, dissociando-se em H+ e HCO3-. O H+ resultante acidifica o LCR e estimula os neurônios inspiratórios centrais.",
    officialReference: "West - Fisiologia Respiratória, Cap. 8; Guyton & Hall, Cap. 42",
    keyTakeaway: "Quimiorreceptores centrais detectam H+ no líquor gerado pela difusão do CO2 arterial."
  },
  {
    id: "cr-57",
    subjectId: "cardiorrespiratorio",
    subtopic: "Quimiorreceptores Periféricos e Hipóxia",
    difficulty: "Médio",
    question: "Os corpos carotídeos (quimiorreceptores periféricos inervados pelo nervo glossofaríngeo NC IX) são únicos porque disparam uma hiperventilação reflexa em resposta à:",
    options: [
      "Queda acentuada da pressão parcial de oxigênio arterial dissolvido (PaO2 < 60 mmHg)",
      "Queda na taxa de filtração glomerular",
      "Aumento da volemia venosa",
      "Redução exclusiva da hemoglobina fetal"
    ],
    correctIndex: 0,
    explanation: "Ao contrário dos quimiorreceptores centrais (que não monitoram O2), as células glômicas tipo I dos corpos carotídeos possuem canais de K+ sensíveis a oxigênio. Quando a PaO2 cai abaixo de 60 mmHg (saturação <90%), esses canais fecham-se, despolarizando a célula e liberando dopamina e ATP que estimulam o nervo do seio carotídeo (ramo do NC IX), disparando hiperventilação de emergência.",
    officialReference: "Guyton & Hall, Cap. 42; Silverthorn, Cap. 18",
    keyTakeaway: "Corpos carotídeos são os únicos sensores de hipóxia arterial (PaO2 < 60 mmHg)."
  },
  {
    id: "cr-58",
    subjectId: "cardiorrespiratorio",
    subtopic: "Curva da Hemoglobina e Efeito Bohr",
    difficulty: "Médio",
    question: "Durante o exercício muscular intenso, o Efeito Bohr promove maior liberação de O2 para os tecidos metabolicamente ativos desviando a curva de dissociação da oxi-hemoglobina para a:",
    options: [
      "Direita, em resposta ao aumento da PCO2, acidez (queda de pH), temperatura elevada e aumento de 2,3-DPG",
      "Esquerda, aumentando a afinidade da hemoglobina pelo oxigênio",
      "Vertical, impedindo a dissociação do oxigênio",
      "Horizontal nula, destruindo a estrutura quaternária da globina"
    ],
    correctIndex: 0,
    explanation: "Nos capilares do músculo em atividade, o metabolismo gera CO2, ácido lático (H+) e calor. Esses fatores ligam-se alostericamente à desoxi-hemoglobina, estabilizando seu estado tenso (T) e reduzindo sua afinidade pelo O2 (desvio da curva para a direita). Isso facilita a entrega imediata de oxigênio aos miócitos onde ele é mais necessário.",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 41",
    keyTakeaway: "Efeito Bohr: desvio para a DIREITA (mais CO2, H+, calor, 2,3-DPG) = menor afinidade e mais O2 liberado."
  },
  {
    id: "cr-59",
    subjectId: "cardiorrespiratorio",
    subtopic: "Efeito Haldane",
    difficulty: "Difícil",
    question: "O Efeito Haldane complementa o Efeito Bohr na respiração, estabelecendo que:",
    options: [
      "A oxigenação da hemoglobina nos capilares pulmonares reduz sua afinidade pelo CO2 e H+, facilitando a eliminação de dióxido de carbono nos alvéolos",
      "O oxigênio compete com a glicose pelos transportadores eritrocitários",
      "O monóxido de carbono aumenta a circulação linfática pulmonar",
      "O nitrogênio gasoso dissolve os surfactantes alveolares"
    ],
    correctIndex: 0,
    explanation: "O efeito Haldane descreve como a ligação de O2 à hemoglobina nos pulmões altera sua capacidade carreadora de CO2. A conformação oxigenada (R) da hemoglobina é um ácido mais forte, liberando prótons (H+) que combinam com o bicarbonato gerando CO2, e enfraquece a ligação dos grupos carbamino, expulsando o CO2 para a luz alveolar.",
    officialReference: "Guyton & Hall, Cap. 41; West, Cap. 5",
    keyTakeaway: "Efeito Haldane: a ligação do O2 à hemoglobina nos pulmões expulsa o CO2 para expiração."
  },
  {
    id: "cr-60",
    subjectId: "cardiorrespiratorio",
    subtopic: "Vasoconstrição Pulmonar Hipóxica",
    difficulty: "Médio",
    question: "Ao contrário dos vasos da circulação sistêmica (que se dilatam em resposta à hipóxia local), as pequenas artérias pulmonares sofrem:",
    options: [
      "Vasoconstrição reflexa potente diante de baixa PO2 alveolar (vasoconstrição pulmonar hipóxica), desviando o fluxo sanguíneo para alvéolos bem ventilados",
      "Vasodilatação maciça com inundação alveolar",
      "Trombose imediata irreversível",
      "Fechamento completo e permanente das veias pulmonares"
    ],
    correctIndex: 0,
    explanation: "A Vasoconstrição Pulmonar Hipóxica (VPH) é uma adaptação fisiológica exclusiva da circulação pulmonar. Se um grupo de alvéolos é mal ventilado (ex: por pneumonia ou corpo estranho), a hipóxia alveolar contrai as arteríolas daquela unidade, redirecionando o fluxo sanguíneo capilar para alvéolos sadios e bem oxigenados, otimizando a relação V/Q.",
    officialReference: "West, Cap. 4; Guyton & Hall, Cap. 39",
    keyTakeaway: "Vasoconstrição pulmonar hipóxica: desvia o sangue de áreas mal ventiladas para áreas bem ventiladas."
  },
  {
    id: "cr-61",
    subjectId: "cardiorrespiratorio",
    subtopic: "Zonas de West do Pulmão",
    difficulty: "Difícil",
    question: "Nas Zonas de West da perfusão pulmonar em posição ortostática, a Zona 3 (base do pulmão) caracteriza-se por:",
    options: [
      "Pressão arterial pulmonar (Pa) > Pressão venosa pulmonar (Pv) > Pressão alveolar (PA), resultando em fluxo sanguíneo capilar contínuo e máxima perfusão",
      "Pressão alveolar superior à pressão arterial, colapsando os capilares",
      "Ausência completa de troca gasosa",
      "Pressão negativa permanente no leito capilar"
    ],
    correctIndex: 0,
    explanation: "Devido ao gradiente hidrostático da gravidade, a pressão intravascular pulmonar cresce do ápice para a base. Na Zona 3 (base), tanto a pressão arterial pulmonar (Pa) quanto a venosa (Pv) superam a pressão do gás alveolar (PA), mantendo todos os capilares abertos e túrgidos ao longo de todo o ciclo cardíaco (maior fluxo sanguíneo por grama de tecido).",
    officialReference: "West, Cap. 4; Boron & Boulpaep, Cap. 31",
    keyTakeaway: "Zona 3 de West (base): Pa > Pv > PA, capilares permanentemente abertos e fluxo contínuo máximo."
  },
  {
    id: "cr-62",
    subjectId: "cardiorrespiratorio",
    subtopic: "Surfactante Pulmonar",
    difficulty: "Fácil",
    question: "O surfactante pulmonar, sintetizado e secretado pelos pneumócitos tipo II a partir da 24ª-28ª semana gestacional, exerce a função vital de:",
    options: [
      "Reduzir drasticamente a tensão superficial na interface ar-líquido alveolar, impedindo o colapso dos alvéolos (atelectasia) no final da expiração",
      "Aumentar a viscosidade do sangue nas arteríolas",
      "Impedir a entrada de ar nos brônquios",
      "Inibir a hematose em baixas temperaturas"
    ],
    correctIndex: 0,
    explanation: "O surfactante pulmonar é composto por dipalmitoilfosfatidilcolina (DPPC) e apoproteínas surfactantes (SP-A, B, C, D). Suas moléculas anfipáticas interpõem-se entre as moléculas de água da camada alveolar líquida, quebrando a atração intermolecular de hidrogênio e reduzindo a tensão superficial de ~70 para <5 dinas/cm, estabilizando alvéolos pequenos e aumentando a complacência pulmonar.",
    officialReference: "Guyton & Hall, Cap. 38; Silverthorn, Cap. 17",
    keyTakeaway: "Surfactante (DPPC de pneumócitos II) reduz a tensão superficial alveolar e impede a atelectasia."
  },
  {
    id: "cr-63",
    subjectId: "cardiorrespiratorio",
    subtopic: "Ventilação Alveolar e Espaço Morto",
    difficulty: "Médio",
    question: "Um indivíduo com volume corrente (VC) de 500 mL, frequência respiratória (FR) de 12 rpm e espaço morto anatômico (VD) de 150 mL possui uma Ventilação Alveolar Efetiva (VA) por minuto de:",
    options: [
      "4.200 mL/min (4,2 L/min)",
      "6.000 mL/min (6,0 L/min)",
      "1.800 mL/min (1,8 L/min)",
      "500 mL/min (0,5 L/min)"
    ],
    correctIndex: 0,
    explanation: "A ventilação minuto total é VC x FR = 500 x 12 = 6.000 mL/min. No entanto, os primeiros 150 mL de cada inspiração ficam retidos nas vias aéreas de condução sem participar de trocas gasosas (espaço morto anatômico). A ventilação alveolar real é VA = (VC - VD) x FR = (500 - 150) x 12 = 350 x 12 = 4.200 mL/min.",
    officialReference: "West, Cap. 2; Guyton & Hall, Cap. 38",
    keyTakeaway: "Ventilação Alveolar = (Volume Corrente - Espaço Morto) x Frequência Respiratória."
  },
  {
    id: "cr-64",
    subjectId: "cardiorrespiratorio",
    subtopic: "Sons Cardíacos (Bulhas)",
    difficulty: "Fácil",
    question: "A Primeira Bulha Cardíaca (B1 - 'tum') e a Segunda Bulha Cardíaca (B2 - 'tá') auscultadas no fonocardiograma são geradas respectivamente pelo:",
    options: [
      "Fechamento das valvas atrioventriculares (Mitral e Tricúspide) no início da sístole e Fechamento das valvas semilunares (Aórtica e Pulmonar) no início da diástole",
      "Enchimento atrial rápido e contração do pericárdio",
      "Impacto do sangue no apex pulmonar",
      "Abertura forçada da valva mitral e aórtica"
    ],
    correctIndex: 0,
    explanation: "Os sons cardíacos são produzidos pela turbulência sanguínea e vibração súbita das paredes e cúspides valvares quando elas se fecham bruscamente: B1 marca o início da sístole ventricular isométrica (fechamento mitral e tricúspide); B2 marca o término da sístole ventricular e início do relaxamento isovolumétrico (fechamento aórtico e pulmonar).",
    officialReference: "Guyton & Hall, Cap. 23; Silverthorn, Cap. 14",
    keyTakeaway: "B1 = fechamento das valvas atrioventriculares (M e T); B2 = fechamento das semilunares (Ao e P)."
  },
  {
    id: "cr-65",
    subjectId: "cardiorrespiratorio",
    subtopic: "Perfusão Coronariana",
    difficulty: "Médio",
    question: "Diferente de todos os outros órgãos corporais onde o fluxo arterial é predominantemente sistólico, o miocárdio ventricular esquerdo recebe a maior parte do seu fluxo sanguíneo coronariano durante a:",
    options: [
      "Diástole ventricular, porque durante a sístole a alta compressão intramiocárdica esmaga os vasos subendocárdicos",
      "Sístole ventricular máxima",
      "Fase de ejeção rápida",
      "Pausa respiratória exclusivamente"
    ],
    correctIndex: 0,
    explanation: "Durante a sístole ventricular esquerda, a tensão na parede miocárdica atinge ~120 mmHg, comprimindo fisicamente os vasos coronários que atravessam o miocárdio, especialmente no subendocárdio. Quando o ventrículo relaxa na diástole, a pressão intramural despenca e as artérias coronárias são perfundidas sob a pressão diastólica da raiz aórtica.",
    officialReference: "Guyton & Hall, Cap. 21; Berne & Levy, Cap. 20",
    keyTakeaway: "O ventrículo esquerdo é perfundido quase exclusivamente durante a diástole ventricular."
  },
  {
    id: "cr-66",
    subjectId: "cardiorrespiratorio",
    subtopic: "Eletrocardiograma (ECG)",
    difficulty: "Fácil",
    question: "No eletrocardiograma de superfície padrão (12 derivações), a Onda P, o Complexo QRS e a Onda T representam eletrofisiologicamente:",
    options: [
      "Despolarização atrial (P), Despolarização ventricular (QRS) e Repolarização ventricular (T)",
      "Contração mecânica atrial (P), ejeção ventricular (QRS) e relaxamento do diafragma (T)",
      "Fechamento da valva mitral (P), fechamento da aórtica (QRS) e fluxo coronariano (T)",
      "Ativação do nó atrioventricular (P), disparo do nó sinusal (QRS) e onda de choque aórtica (T)"
    ],
    correctIndex: 0,
    explanation: "A onda P reflete a propagação da despolarização através de ambos os átrios a partir do nó sinoatrial; o complexo QRS reflete a rápida despolarização de ambos os ventrículos através do feixe de His e fibras de Purkinje (a repolarização atrial fica oculta no QRS); e a onda T representa a repolarização ventricular miocárdica.",
    officialReference: "Guyton & Hall, Cap. 11; Silverthorn, Cap. 14",
    keyTakeaway: "ECG: Onda P = despolarização atrial; Complexo QRS = despolarização ventricular; Onda T = repolarização ventricular."
  },
  {
    id: "cr-67",
    subjectId: "cardiorrespiratorio",
    subtopic: "Circulação Fetal",
    difficulty: "Difícil",
    question: "Na circulação fetal intrauterina, a maior parte do sangue bem oxigenado proveniente da placenta através da veia umbilical passa direto do átrio direito para o átrio esquerdo através do:",
    options: [
      "Forame Oval (fossa oval pós-natal)",
      "Ducto arterioso de Botallo",
      "Canal de Schlemm",
      "Ventrículo único funcional"
    ],
    correctIndex: 0,
    explanation: "Na vida fetal, os pulmões estão colabados e apresentam alta resistência vascular. O sangue oxigenado da veia umbilical atinge o átrio direito via ducto venoso e veia cava inferior e, graças à crista dividens (válvula de Eustáquio), é direcionado diretamente para o átrio esquerdo através do forame oval, perfundindo o cérebro e coronárias com o melhor teor de oxigênio.",
    officialReference: "Guyton & Hall, Cap. 84; Silverthorn, Cap. 14",
    keyTakeaway: "Forame oval desvia o sangue oxigenado do átrio direito para o átrio esquerdo no feto."
  },
  {
    id: "cr-68",
    subjectId: "cardiorrespiratorio",
    subtopic: "Transporte de Dióxido de Carbono",
    difficulty: "Fácil",
    question: "A maior parte (~70%) do dióxido de carbono (CO2) produzido pelo metabolismo celular dos tecidos é transportada no sangue até os pulmões na forma de:",
    options: [
      "Íons Bicarbonato (HCO3-) dissolvidos no plasma, gerados dentro das hemácias pela enzima anidrase carbônica",
      "Gás CO2 livremente dissolvido sem modificação",
      "Glicose monossacarídea",
      "Compostos carbamino insolúveis"
    ],
    correctIndex: 0,
    explanation: "O CO2 entra na hemácia, onde a enzima anidrase carbônica converte CO2 + H2O em H2CO3, que se dissocia em H+ e HCO3-. O bicarbonato é bombeado para fora da hemácia em troca de Cl- (trocador de cloreto de Hamburger ou AE1) e viaja dissolvido no plasma até os capilares alveolares, onde a reação é revertida para liberação de gás CO2 expirado.",
    officialReference: "West, Cap. 5; Guyton & Hall, Cap. 41",
    keyTakeaway: "70% do CO2 viaja no sangue na forma de bicarbonato (HCO3-) gerado pela anidrase carbônica."
  },
  {
    id: "cr-69",
    subjectId: "cardiorrespiratorio",
    subtopic: "Reflexo de Hering-Breuer",
    difficulty: "Médio",
    question: "O reflexo de insuflação de Hering-Breuer é um mecanismo de segurança pulmonar que atua quando o volume corrente se torna excessivamente elevado (>1 a 1,5 L), promovendo:",
    options: [
      "A interrupção reflexa da inspiração através de receptores de estiramento de adaptação lenta das vias aéreas que enviam sinais pelo nervo vago ao grupo respiratório dorsal",
      "Contração espástica permanente do diafragma",
      "Fechamento glótico impedindo qualquer entrada de ar",
      "Aceleração da sístole atrial"
    ],
    correctIndex: 0,
    explanation: "Receptores mecânicos de estiramento localizados nas paredes dos brônquios e bronquíolos são ativados quando os pulmões se tornam superdistendidos. Esses sinais viajam por fibras mielínicas do nervo vago (NC X) até o complexo respiratório bulbar, desligando a 'rampa inspiratória' e iniciando a expiração para proteger o parênquima pulmonar contra barotrauma mecânico.",
    officialReference: "Guyton & Hall, Cap. 42; West, Cap. 8",
    keyTakeaway: "Reflexo de Hering-Breuer: estiramento pulmonar excessivo inibe o vago e corta a inspiração."
  },
  {
    id: "cr-70",
    subjectId: "cardiorrespiratorio",
    subtopic: "Fração de Ejeção Ventricular",
    difficulty: "Fácil",
    question: "A fração de ejeção do ventrículo esquerdo (FEVE = [Volume Sistólico / Volume Diastólico Final] × 100), considerada um indicador clínico clássico da função miocárdica, apresenta valor de referência normal em repouso entre:",
    options: [
      "50% a 70%",
      "10% a 20%",
      "95% a 100% (o ventrículo esvazia-se totalmente)",
      "2% a 5%"
    ],
    correctIndex: 0,
    explanation: "Em um coração adulto típico em repouso, o volume diastólico final (VDF) é de ~120 mL e o volume sistólico ejetado (VS) é de ~70 mL. A fração de ejeção é 70 / 120 = ~58% (normal: 50 a 70%). O ventrículo nunca se esvazia por completo, restando ~50 mL de volume telessistólico (VTS) de reserva fisiológica.",
    officialReference: "Guyton & Hall, Cap. 9; Silverthorn, Cap. 14",
    keyTakeaway: "Fração de ejeção normal do ventrículo esquerdo é de 50% a 70%."
  },
  {
    id: "cr-71",
    subjectId: "cardiorrespiratorio",
    subtopic: "Efeito Bohr vs Efeito Haldane",
    difficulty: "Difícil",
    question: "Sobre os fenômenos alostéricos da hemoglobina no transporte de gases respiratórios, assinale a correlação fisiológica correta:",
    options: [
      "O Efeito Bohr descreve a diminuição da afinidade da hemoglobina pelo O2 em tecidos com aumento de H+ e CO2, enquanto o Efeito Haldane descreve o aumento da capacidade de transporte de CO2 pelo sangue venoso quando a hemoglobina está desoxigenada",
      "O Efeito Haldane ocorre exclusivamente nos alvéolos e impede a liberação de CO2 para o ar expirado",
      "O Efeito Bohr só ocorre em condições anormais de hipotermia extrema e acidose lática grave",
      "Tanto o Efeito Bohr quanto o Haldane são mediados exclusivamente pela mioglobina no sarcolema"
    ],
    correctIndex: 0,
    explanation: "O Efeito Bohr descreve o desvio para a direita da curva de dissociação da oxi-hemoglobina mediado por H+ (pH baixo) e PCO2 tecidual elevada, facilitando a liberação de O2 nos tecidos ativos. Já o Efeito Haldane descreve como a desoxigenação da hemoglobina nos capilares teciduais aumenta sua afinidade para ligar carbamino-hemoglobina e tamponar H+, elevando a capacidade de carregar CO2 até os pulmões.",
    officialReference: "Guyton & Hall, Cap. 41; West - Fisiologia Respiratória, Cap. 5",
    keyTakeaway: "Bohr = H+/CO2 favorecem entrega de O2 aos tecidos; Haldane = desoxigenação da Hb facilita captação de CO2."
  },
  {
    id: "cr-72",
    subjectId: "cardiorrespiratorio",
    subtopic: "Zonas Pulmonares de West",
    difficulty: "Difícil",
    question: "De acordo com a classificação das Zonas de West para a distribuição da perfusão e ventilação pulmonar em posição ortostática, a Zona 1 caracteriza-se por:",
    options: [
      "Pressão alveolar superior à pressão arterial pulmonar (PA > Pa > Pv), colapsando os capilares e criando espaço morto fisiológico sob condições normais ou de hipotensão",
      "Fluxo sanguíneo máximo contínuo determinado exclusivamente pela pressão venosa pulmonar",
      "Pressão capilar hidrostática máxima com extravasamento permanente de líquido intersticial na base pulmonar",
      "Ventilação nula com perfusão maciça resultando em saturação de 100%"
    ],
    correctIndex: 0,
    explanation: "Nas Zonas de West em pé: Na Zona 1 (ápice pulmonar em condições de hipotensão ou ventilação mecânica com PEEP alta), a pressão alveolar (PA) excede a pressão arterial pulmonar (Pa), colapsando os capilares alveolares e gerando ventilação sem perfusão (espaço morto alveolar). Na Zona 2 (terço médio), Pa > PA > Pv (fluxo em cachoeira). Na Zona 3 (base), Pa > Pv > PA (fluxo contínuo dependente do gradiente arteriovenoso).",
    officialReference: "West - Fisiologia Respiratória, Cap. 4; Guyton & Hall, Cap. 39",
    keyTakeaway: "Zona 1 de West: PA > Pa > Pv = capilares comprimidos pelo alvéolo, gerando espaço morto alveolar."
  },
  {
    id: "cr-73",
    subjectId: "cardiorrespiratorio",
    subtopic: "Curva Pressão-Volume Ventricular",
    difficulty: "Difícil",
    question: "No diagrama de alça de pressão-volume do ventrículo esquerdo, o fechamento da valva aórtica marca o início de qual fase do ciclo cardíaco?",
    options: [
      "Relaxamento isovolumétrico ventricular",
      "Contração isovolumétrica ventricular",
      "Ejeção rápida sistólica",
      "Enchimento ventricular rápido passivo"
    ],
    correctIndex: 0,
    explanation: "No ciclo cardíaco: O fechamento da valva mitral marca o início da contração isovolumétrica; a abertura da aórtica inicia a ejeção; o fechamento da aórtica marca o fim da ejeção e o início do relaxamento isovolumétrico (quando ambas as valvas estão fechadas e a pressão cai sem variação de volume); a abertura da mitral inicia a fase de enchimento.",
    officialReference: "Guyton & Hall, Cap. 9; Costanzo - Fisiologia, Cap. 3",
    keyTakeaway: "Fechamento da valva aórtica = início do relaxamento isovolumétrico ventricular (volume constante, queda de pressão)."
  },
  {
    id: "cr-74",
    subjectId: "cardiorrespiratorio",
    subtopic: "Capacidade Residual Funcional (CRF)",
    difficulty: "Médio",
    question: "A Capacidade Residual Funcional (CRF) representa o volume de ar remanescente nos pulmões ao final de uma expiração passiva em repouso. Nesse ponto de equilíbrio:",
    options: [
      "A tendência elástica do pulmão para o recolhimento (colapso para dentro) é exatamente igual e oposta à tendência da caixa torácica de expandir-se para fora",
      "A pressão intrapleural torna-se positiva em relação à pressão atmosférica",
      "O diafragma atinge sua contração máxima isométrica",
      "Os alvéolos pulmonares encontram-se totalmente esvaziados de nitrogênio e oxigênio"
    ],
    correctIndex: 0,
    explanation: "A CRF (soma do Volume de Reserva Expiratório com o Volume Residual, ~2.200 a 2.400 mL) é o ponto de repouso mecânico do sistema respiratório, onde o vetor de recolhimento elástico pulmonar para dentro equilibra exatamente o vetor elástico da parede torácica para fora, mantendo a pressão intrapleural em cerca de -5 cmH2O.",
    officialReference: "West, Cap. 7; Berne & Levy, Fisiologia Respiratória",
    keyTakeaway: "CRF = equilíbrio mecânico: recolhimento pulmonar elástico para dentro se equipara à expansão torácica para fora."
  },
  {
    id: "cr-75",
    subjectId: "cardiorrespiratorio",
    subtopic: "Controle Químico da Respiração",
    difficulty: "Difícil",
    question: "Os quimiorreceptores centrais, situados na superfície ventrolateral do bulbo cerebral, respondem primordialmente a qual estímulo químico e por qual mecanismo fisiológico?",
    options: [
      "Ao aumento da concentração de H+ no líquido cefalorraquidiano (LCR), decorrente da difusão rápida de CO2 pela barreira hematoencefálica e sua hidratação pela anidrase carbônica",
      "À queda isolada da PO2 arterial abaixo de 80 mmHg detectada diretamente pelo líquido cerebroespinal",
      "À entrada direta de íons bicarbonato plasmáticos através das junções oclusivas dos capilares cerebrais",
      "À liberação de dopamina pelas células glômicas carotídeas"
    ],
    correctIndex: 0,
    explanation: "A barreira hematoencefálica é altamente permeável ao CO2 molecular lipossolúvel, mas impermeável a íons H+ e HCO3-. Quando a PaCO2 arterial sobe, o CO2 atravessa rapidamente para o líquor, gerando H+ + HCO3- via anidrase carbônica liquórica. O H+ resultante estimula diretamente os neurônios quimiossensíveis centrais. A hipóxia pura estimula primariamente os quimiorreceptores periféricos (corpos carotídeos e aórticos).",
    officialReference: "Guyton & Hall, Cap. 42; West, Cap. 8",
    keyTakeaway: "Quimiorreceptores centrais respondem a H+ no LCR gerado pelo CO2 difusível; periféricos respondem a hipóxia e H+ arterial."
  },
  {
    id: "cr-76",
    subjectId: "cardiorrespiratorio",
    subtopic: "Peptídeo Natriurético Atrial (ANP)",
    difficulty: "Médio",
    question: "O Peptídeo Natriurético Atrial (ANP) é sintetizado e liberado pelos miócitos atriais em resposta a qual estímulo e exerce qual efeito hemodinâmico?",
    options: [
      "Estiramento mecânico atrial decorrente de hipervolemia; induz vasodilatação arteriolar, natriurese, diurese e inibição da secreção de renina e aldosterona",
      "Isquemia coronariana ventricular com aumento de cálcio citosólico; induz hipertensão arterial sistêmica imediata",
      "Bradicardia sinusal extrema; estimula a retenção renal de sódio e água pelo duto coletor",
      "Acidose metabólica descompensada; atua aumentando a reabsorção tubular proximal de glicose"
    ],
    correctIndex: 0,
    explanation: "Quando o retorno venoso e a volemia se elevam, a tensão transmural nas paredes dos átrios estira os cardiomiócitos, disparando a exocitose de ANP (e dos ventrículos o BNP). O ANP liga-se ao receptor NPR-A acoplado à guanilato ciclase gerando cGMP, relaxando o músculo liso vascular, dilatando a arteríola aferente renal e bloqueando os canais ENaC no duto coletor, promovendo natriurese e redução da pré-carga.",
    officialReference: "Guyton & Hall, Cap. 29; Silverthorn, Cap. 20",
    keyTakeaway: "ANP é ativado por estiramento atrial na hipervolemia; causa natriurese, vasodilatação e inibe renina/aldosterona."
  },
  {
    id: "cr-77",
    subjectId: "cardiorrespiratorio",
    subtopic: "Circulação Coronariana",
    difficulty: "Difícil",
    question: "Diferente da maioria dos outros órgãos do corpo humano, o suprimento sanguíneo coronariano para a musculatura do ventrículo esquerdo ocorre predominantemente durante qual fase do ciclo cardíaco?",
    options: [
      "Diástole ventricular, pois durante a sístole a compressão extravascular miocárdica sobre os vasos intramurais subendocárdicos excede a pressão aórtica intracoronária",
      "Sístole isovolumétrica, quando a pressão de perfusão aórtica é máxima",
      "Ejeção rápida, devido à alta velocidade do jato ejetado através dos óstios coronários",
      "Fase de contração atrial exclusivamente"
    ],
    correctIndex: 0,
    explanation: "Durante a sístole ventricular esquerda, as fortes forças compressivas intramiocárdicas comprimem os vasos coronarianos profundos (especialmente os ramos subendocárdicos), restringindo drasticamente o fluxo. Cerca de 70% a 80% da perfusão miocárdica do VE ocorre na diástole, quando o músculo relaxa e a pressão diastólica da raiz da aorta impulsiona o sangue coronário.",
    officialReference: "Guyton & Hall, Cap. 21; Berne & Levy, Fisiologia Cardiovascular",
    keyTakeaway: "Perfusão coronariana do VE é predominantemente diastólica devido ao alívio da compressão intramiocárdica sistólica."
  },
  {
    id: "cr-78",
    subjectId: "cardiorrespiratorio",
    subtopic: "Shunt Pulmonar e Hipoxemia",
    difficulty: "Difícil",
    question: "O shunt pulmonar verdadeiro (mistura venosa com relação V/Q = 0) caracteriza-se clinicamente pela seguinte resposta gasométrica à oxigenoterapia com fração inspirada de O2 a 100% (FiO2 1,0):",
    options: [
      "Refratariedade da hipoxemia arterial à suplementação com O2 a 100%, pois o sangue desoxigenado contorna unidades alveolares completamente não ventiladas",
      "Correção imediata e normalização rápida da PaO2 para valores superiores a 500 mmHg",
      "Aumento imediato da pressão parcial alveolar de CO2 para o dobro do basal",
      "Alcalose respiratória mediada por inibição do tronco encefálico"
    ],
    correctIndex: 0,
    explanation: "Em áreas de shunt verdadeiro (alvéolos preenchidos por pus, edema pulmonar alveolar grave ou atelectasia total com V/Q = 0), o sangue flui pelos capilares sem entrar em contato com alvéolos ventilados. Mesmo que os alvéolos saudáveis vizinhos recebam 100% de O2, sua hemoglobina já está saturada e não consegue carregar oxigênio dissolvido suficiente para compensar o sangue venoso desviado pelo shunt, gerando a clássica hipoxemia refratária a O2.",
    officialReference: "West - Fisiologia Respiratória, Cap. 5; Guyton & Hall, Cap. 40",
    keyTakeaway: "Hipoxemia por shunt verdadeiro (V/Q = 0) é refratária à oxigenoterapia pura a 100%."
  },
  {
    id: "cr-79",
    subjectId: "cardiorrespiratorio",
    subtopic: "Eletrocardiografia - Eixo Elétrico",
    difficulty: "Médio",
    question: "No eletrocardiograma padrão de 12 derivações, considera-se o eixo elétrico médio do complexo QRS no plano frontal em faixa fisiologicamente normal quando orientado entre:",
    options: [
      "-30° e +90°",
      "-90° e -180°",
      "+120° e +180°",
      "-60° e -120°"
    ],
    correctIndex: 0,
    explanation: "O vetor resultante de despolarização dos ventrículos aponta normalmente para baixo e para a esquerda. Pelas diretrizes de eletrocardiografia, o eixo elétrico normal do QRS varia entre -30° e +90° (algumas escolas aceitam até +100° ou -15° a +105°). Valores menores que -30° indicam desvio do eixo para a esquerda (ex.: sobrecarga de VE ou bloqueio divisional anterossuperior esquerdo); valores maiores que +90° indicam desvio para a direita.",
    officialReference: "Goldman - Eletrocardiografia Clínica; Guyton & Hall, Cap. 12",
    keyTakeaway: "Eixo elétrico cardíaco normal do QRS situa-se entre -30° e +90° no plano frontal."
  },
  {
    id: "cr-80",
    subjectId: "cardiorrespiratorio",
    subtopic: "Complacência Pulmonar",
    difficulty: "Médio",
    question: "A complacência pulmonar estática (C = ΔV / ΔP) mede a distensibilidade elástica do parênquima pulmonar. Qual das seguintes condições clínicas cursa com redução acentuada da complacência pulmonar?",
    options: [
      "Fibrose pulmonar idiopática e Síndrome do Desconforto Respiratório Agudo (SDRA)",
      "Enfisema pulmonar panacinar avançado",
      "Crise asmática inicial com aprisionamento aéreo puro",
      "Uso de broncodilatador beta-2 agonista inalatório em repouso"
    ],
    correctIndex: 0,
    explanation: "A complacência pulmonar é a capacidade dos pulmões de se expandirem sob uma dada variação de pressão transpulmonar. Na fibrose pulmonar (depósito excessivo de colágeno intersticial rígido) e na SDRA (edema intersticial/alveolar e perda de surfactante), os pulmões tornam-se 'duros' e pouco distensíveis, demandando pressões muito maiores para mobilizar o mesmo volume de ar (complacência reduzida). No enfisema, ocorre o inverso: destruição de septos e fibras elásticas, elevando a complacência.",
    officialReference: "West, Cap. 7; Guyton & Hall, Cap. 38",
    keyTakeaway: "Fibrose pulmonar e SDRA reduzem a complacência pulmonar ('pulmão rígido'); enfisema aumenta a complacência."
  },
  {
    id: "cr-81",
    subjectId: "cardiorrespiratorio",
    subtopic: "Barorreflexo e Hipotensão Ortostática",
    difficulty: "Médio",
    question: "Ao assumir subitamente a postura ortostática (em pé), cerca de 500 a 800 mL de sangue se represam nas veias dos membros inferiores por gravidade. A resposta fisiológica barorreflexa imediata para evitar síncope envolve:",
    options: [
      "Queda do estiramento dos barorreceptores do seio carotídeo, redução dos disparos aferentes pelo nervo glossofaríngeo, desinibição simpática com taquicardia reflexa e vasoconstrição arteriolar",
      "Aumento maciço do tônus vagal parassimpático provocando bradicardia acentuada",
      "Inibição imediata da secreção de catecolaminas pelas suprarrenais",
      "Dilatação passiva das arteríolas esplâncnicas para aumentar a complacência vascular"
    ],
    correctIndex: 0,
    explanation: "O pooling venoso postural reduz o retorno venoso, o volume sistólico e a pressão arterial média. Menor pressão estira menos as terminações dos barorreceptores carotídeos (nervo de Hering / NC IX) e aórticos (NC X). Isso reduz os disparos ao núcleo do trato solitário (NTS), desinibindo a área vasomotora rostral ventrolateral e inibindo a área vagal motora: eleva a atividade simpática (vasoconstrição + inotropismo/cronotropismo) restaurando a PA em segundos.",
    officialReference: "Guyton & Hall, Cap. 18; Berne & Levy, Fisiologia Cardiovascular",
    keyTakeaway: "Hipotensão ortostática = menor disparo barorreflexo aferente ativa resposta eferente simpática compensatória."
  },
  {
    id: "cr-82",
    subjectId: "cardiorrespiratorio",
    subtopic: "Óxido Nítrico (NO) e Tônus Vascular",
    difficulty: "Difícil",
    question: "O Óxido Nítrico (NO), sintetizado pelas células endoteliais a partir da L-arginina pela enzima eNOS, promove relaxamento do músculo liso vascular através de qual cascata intracelular?",
    options: [
      "Difusão parácrina para a célula muscular lisa, ativação da guanilato ciclase solúvel (sGC), aumento de cGMP e estimulação da Proteína Quinase G (PKG), que reduz o Ca2+ intracelular livre",
      "Ativação de receptores tirosina quinase de membrana com influxo massivo de íons cálcio extracelulares",
      "Bloqueio da bomba de sódio-potássio gerando despolarização prolongada do sarcolema",
      "Estimulação da enzima fosfodiesterase tipo 5 para hidrolisar adenosina trifosfato"
    ],
    correctIndex: 0,
    explanation: "O NO difunde-se rapidamente através da membrana plasmática até o citosol da musculatura lisa vascular vizinha, onde se liga ao grupo heme da guanilato ciclase solúvel (sGC). A sGC converte GTP em cGMP cíclico. O cGMP ativa a PKG, que fosforila e estimula a bomba SERCA (recolhendo Ca2+ para o retículo sarcoplasmático), inibe canais de cálcio operados por voltagem e ativa a fosfatase da cadeia leve de miosina (MLCP), promovendo relaxamento muscular e vasodilatação.",
    officialReference: "Guyton & Hall, Cap. 17; Goodman & Gilman, Farmacologia Básica",
    keyTakeaway: "Óxido Nítrico -> Guanilato Ciclase Solúvel -> cGMP -> PKG -> queda do Ca2+ citosólico = vasodilatação."
  },
  {
    id: "cr-83",
    subjectId: "cardiorrespiratorio",
    subtopic: "Ausculta Cardíaca - Desdobramento de B2",
    difficulty: "Médio",
    question: "O desdobramento fisiológico da segunda bulha cardíaca (B2 = A2 e P2) durante a fase inspiratória do ciclo respiratório decorre de:",
    options: [
      "Aumento do retorno venoso ao coração direito pelo vácuo intratorácico inspiratório, prolongando a ejeção ventricular direita e atrasando o fechamento da valva pulmonar (P2)",
      "Fechamento prematuro da valva mitral decorrente do aumento do fluxo pulmonar",
      "Retardo na despolarização do ramo esquerdo do feixe de His",
      "Aceleração da ejeção do ventrículo esquerdo pela pressão positiva alveolar"
    ],
    correctIndex: 0,
    explanation: "Na inspiração, a pressão intratorácica negativa aumenta o gradiente de pressão para o retorno venoso pelas cavas até o átrio e ventrículo direitos. Com maior volume diastólico final no VD, a sístole mecânica direita prolonga-se, retardando o fechamento do componente pulmonar da 2ª bulha (P2). Simultaneamente, o leito vascular pulmonar expande-se e retém transitoriamente volume, encurtando ligeiramente a sístole esquerda (A2 fecha ligeiramente antes), tornando A2 e P2 audivelmente separados.",
    officialReference: "Porto - Semiologia Médica; Guyton & Hall, Cap. 23",
    keyTakeaway: "Desdobramento fisiológico de B2 na inspiração: maior retorno venoso ao VD retarda o fechamento da valva pulmonar (P2)."
  },
  {
    id: "cr-84",
    subjectId: "cardiorrespiratorio",
    subtopic: "Surfactante Pulmonar e Lei de Laplace",
    difficulty: "Difícil",
    question: "Pela Lei de Laplace aplicada a uma esfera (P = 2T / r), alvéolos menores (raio r menor) tenderiam a apresentar pressões de colapso mais elevadas do que alvéolos maiores, esvaziando-se neles. Como o surfactante pulmonar previne essa atelectasia?",
    options: [
      "O surfactante reduz a tensão superficial (T) de forma proporcionalmente mais intensa nos alvéolos menores à medida que eles desinsuflam e suas moléculas lipídicas se adensam, equilibrando a pressão transmural",
      "O surfactante aumenta a tensão superficial para manter as paredes alveolares permanentemente esticadas",
      "Ele bloqueia fisicamente as vias aéreas que conectam alvéolos vizinhos com tampões mucosos",
      "Ele força o influxo de líquido intersticial hidrostático para o interior do lúmen alveolar"
    ],
    correctIndex: 0,
    explanation: "O surfactante pulmonar (rico em dipalmitoilfosfatidilcolina - DPPC) intercala-se entre as moléculas de água na interface ar-líquido. Quando o alvéolo diminui de raio na expiração, as moléculas anfipáticas de surfactante são comprimidas e concentram-se, reduzindo a tensão superficial (T) a valores próximos de zero. Assim, a razão 2T/r mantém-se estável, impedindo que a pressão interna suba e estabilizando alvéolos de diferentes calibres contra o colapso atelectásico.",
    officialReference: "West - Fisiologia Respiratória, Cap. 7; Guyton & Hall, Cap. 38",
    keyTakeaway: "Surfactante diminui mais a tensão superficial nos alvéolos menores, equalizando pressões e impedindo atelectasia."
  },
  {
    id: "cr-85",
    subjectId: "cardiorrespiratorio",
    subtopic: "Pressão de Oclusão da Artéria Pulmonar (POAP / PCWP)",
    difficulty: "Difícil",
    question: "A medida da Pressão de Oclusão da Artéria Pulmonar (POAP / PCWP / Pressão Capilar Pulmonar) obtida via cateter de Swan-Ganz fornece uma estimativa clínica acurada de qual parâmetro hemodinâmico?",
    options: [
      "Pressão no átrio esquerdo e pressão diastólica final do ventrículo esquerdo (pré-carga ventricular esquerda) na ausência de estenose mitral",
      "Pressão sistólica de pico da artéria aorta descendente",
      "Resistência vascular sistêmica da microcirculação cutânea",
      "Pressão venosa central do átrio direito exclusivamente"
    ],
    correctIndex: 0,
    explanation: "Ao insuflar o balonete na extremidade do cateter de Swan-Ganz encravado em um ramo arterial pulmonar periférico distal, o fluxo sanguíneo é temporariamente interrompido naquele vaso, criando uma coluna contínua e estática de sangue líquido entre a ponta do cateter, os capilares pulmonares, as veias pulmonares e o átrio esquerdo. Assim, a pressão medida reflete com fidelidade a pressão atrial esquerda e a pressão de enchimento diastólico do VE.",
    officialReference: "Guyton & Hall, Cap. 20; Marino - UTI O Livro da Terapia Intensiva",
    keyTakeaway: "POAP (Swan-Ganz) avalia a pressão hidrostática do átrio esquerdo e a pré-carga diastólica do ventrículo esquerdo."
  }
];

