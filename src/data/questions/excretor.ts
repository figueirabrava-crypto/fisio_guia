import { Question } from "../../types";

export const EXCRETOR_QUESTIONS: Question[] = [
  {
    id: "exc-01",
    subjectId: "excretor",
    subtopic: "Néfron e Unidade Funcional",
    difficulty: "Fácil",
    question: "A unidade morfofuncional microscópica dos rins humanos responsável pela filtração, reabsorção e secreção tubular (cerca de 1 milhão por rim) é o:",
    options: [
      "Néfron",
      "Glomérulo isolado",
      "Ureter",
      "Cálice maior"
    ],
    correctIndex: 0,
    explanation: "Conforme ilustrado no infográfico oficial: Néfron (unidade funcional: corpúsculo renal/glomérulo, túbulo proximal, alça de Henle, túbulo distal, ducto coletor). Cada rim contém aproximadamente 1 a 1,2 milhão de néfrons que processam o plasma para formar a urina.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Néfron é a unidade morfofuncional básica do rim."
  },
  {
    id: "exc-02",
    subjectId: "excretor",
    subtopic: "Três Processos Renais Básicos",
    difficulty: "Fácil",
    question: "A quantidade final de qualquer substância excretada na urina é matematicamente expressa pela equação clássica:",
    options: [
      "Excreção = Filtração - Reabsorção + Secreção",
      "Excreção = Filtração + Reabsorção - Secreção",
      "Excreção = Reabsorção x Secreção",
      "Excreção = Filtração pura sem qualquer modificação"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: três processos essenciais. A substância é primeiro filtrada no glomérulo; ao longo dos túbulos, os compostos úteis são reabsorvidos de volta ao sangue peritubular, enquanto escórias e íons são secretados diretamente no lúmen.",
    officialReference: "Silverthorn, Cap. 19; Guyton & Hall, Cap. 26",
    keyTakeaway: "Excreção = Filtração Glomerular - Reabsorção Tubular + Secreção Tubular."
  },
  {
    id: "exc-03",
    subjectId: "excretor",
    subtopic: "Filtração Glomerular (TFG)",
    difficulty: "Fácil",
    question: "Em um adulto jovem e saudável de 70 kg, a Taxa de Filtração Glomerular (TFG) média normal é de aproximadamente:",
    options: [
      "120 a 125 mL/min (cerca de 180 litros de ultrafiltrado por dia)",
      "10 mL/min (apenas 1 litro por dia)",
      "500 mL/min (700 litros por dia)",
      "Exatamente zero mL/min"
    ],
    correctIndex: 0,
    explanation: "Os rins recebem cerca de 20-25% de todo o débito cardíaco (~1.200 mL/min de sangue). Deles, cerca de 125 mL de plasma são filtrados através dos capilares glomerulares para o espaço de Bowman a cada minuto, totalizando ~180 L/dia (dos quais >99% são reabsorvidos).",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "TFG normal = ~125 mL/min ou ~180 litros de filtrado glomerular por dia."
  },
  {
    id: "exc-04",
    subjectId: "excretor",
    subtopic: "Barreira de Filtração Glomerular",
    difficulty: "Médio",
    question: "A barreira de filtração glomerular impede a passagem de proteínas plasmáticas grandes (como a albumina) e células sanguíneas graças a três camadas estruturais:",
    options: [
      "Endotélio capilar fenestrado, Membrana Basal Glomerular (MBG rica em heparansulfato negativo) e Fendas de filtração com podócitos (diafragma de nefrina)",
      "Cápsula de Glisson, ducto colédoco e válvulas de Kerckring",
      "Epitélio ciliado, cartilagem e músculo liso",
      "Camada de mielina e astrócitos podais"
    ],
    correctIndex: 0,
    explanation: "A barreira seleciona por tamanho (fendas de ~8 nm nos podócitos) e por carga elétrica negativa (glicosaminoglicanos sulfatados da MBG que repelem eletrostaticamente a albumina aniônica). Lesão nos podócitos causa proteinúria maciça (síndrome nefrótica).",
    officialReference: "Junqueira & Carneiro, Cap. 19; Guyton & Hall, Cap. 26",
    keyTakeaway: "Barreira glomerular = endotélio fenestrado + membrana basal aniônica + podócitos."
  },
  {
    id: "exc-05",
    subjectId: "excretor",
    subtopic: "Túbulo Contorcido Proximal",
    difficulty: "Fácil",
    question: "Qual segmento do néfron é responsável pela reabsorção obrigatória de cerca de 65-70% de toda a água e sódio filtrados, além de 100% da glicose e aminoácidos em condições fisiológicas?",
    options: [
      "Túbulo Contorcido Proximal",
      "Alça de Henle ramo ascendente espesso",
      "Túbulo Contorcido Distal",
      "Ducto Coletor medular"
    ],
    correctIndex: 0,
    explanation: "O túbulo proximal possui epitélio cuboide com borda em escova exuberante e incontáveis mitocôndrias basais. Reabsorve ativamente todo o nutriente vital filtrado (glicose via SGLT2, aminoácidos, 85% do bicarbonato e 65% de Na+, Cl- e H2O iso-osmoticamente).",
    officialReference: "Guyton & Hall, Cap. 27; Silverthorn, Cap. 19",
    keyTakeaway: "Túbulo proximal reabsorve 100% de glicose/aminoácidos e 65-70% de água e sódio."
  },
  {
    id: "exc-06",
    subjectId: "excretor",
    subtopic: "Glicosúria e Limiar Renal",
    difficulty: "Médio",
    question: "A glicose aparece na urina (glicosúria) em pacientes diabéticos descompensados quando a glicemia ultrapassa o 'transporte máximo' (TmG) e o limiar renal de cerca de:",
    options: [
      "180 a 200 mg/dL de glicose no plasma",
      "50 mg/dL",
      "500 mg/dL exclusivamente",
      "Qualquer valor acima de 10 mg/dL"
    ],
    correctIndex: 0,
    explanation: "Os transportadores SGLT2 e SGLT1 do túbulo proximal possuem uma taxa máxima de transporte (~375 mg/min). Quando a carga filtrada supera a capacidade de saturação dos carreadores (glicemia > 180-200 mg/dL), a glicose excedente escapa para a urina causando diurese osmótica.",
    officialReference: "Silverthorn, Cap. 19; Guyton & Hall, Cap. 27",
    keyTakeaway: "Limiar renal da glicose = 180-200 mg/dL; acima disso ocorre glicosúria."
  },
  {
    id: "exc-07",
    subjectId: "excretor",
    subtopic: "Alça de Henle e Multiplicação por Contracorrente",
    difficulty: "Médio",
    question: "O ramo descendente fino da Alça de Henle e o ramo ascendente espesso diferenciam-se fundamentalmente por:",
    options: [
      "O ramo descendente é altamente permeável à água e impermeável a solutos; o ramo ascendente espesso é impermeável à água e transporta ativamente solutos (NKCC2)",
      "O ramo descendente consome ATP e o ascendente é puramente osmótico",
      "O ramo descendente secreta glicose e o ascendente reabsorve proteínas",
      "Ambos realizam exatamente o mesmo transporte iônico"
    ],
    correctIndex: 0,
    explanation: "Essa assimetria funcional é a base do sistema multiplicador por contracorrente: a saída de água no ramo descendente concentra o fluido tubular até 1.200 mOsm/L; o ramo ascendente bombeia ativamente Na+-K+-2Cl- para o interstício sem água, gerando o gradiente hiperosmótico medular.",
    officialReference: "Guyton & Hall, Cap. 28; Silverthorn, Cap. 20",
    keyTakeaway: "Ramo descendente = permeável à água; Ramo ascendente = impermeável à água, bombeia íons (NKCC2)."
  },
  {
    id: "exc-08",
    subjectId: "excretor",
    subtopic: "Diuréticos de Alça",
    difficulty: "Fácil",
    question: "O diurético furosemida (Lasix) é um dos mais potentes da prática médica e atua inibindo qual transportador específico no ramo ascendente espesso da alça de Henle?",
    options: [
      "Cotransportador Na+-K+-2Cl- (NKCC2)",
      "Cotransportador Na+-Cl- (NCCT sensível a tiazídicos)",
      "Bomba de sódio e glicose SGLT2",
      "Aquaporina tipo 2"
    ],
    correctIndex: 0,
    explanation: "A furosemida bloqueia o sítio de cloreto no transportador NKCC2. Sem a reabsorção de solutos, o gradiente medular é desfeito e grande volume de água e eletrólitos deixa de ser reabsorvido, resultando em diurese copiosa de alívio rápido em edemas e insuficiência cardíaca.",
    officialReference: "Goodman & Gilman, Cap. 25; Guyton & Hall, Cap. 32",
    keyTakeaway: "Furosemida inibe o cotransportador NKCC2 na alça de Henle ascendente."
  },
  {
    id: "exc-09",
    subjectId: "excretor",
    subtopic: "Aparelho Justaglomerular",
    difficulty: "Médio",
    question: "O Aparelho Justaglomerular (AJG) regula a hemodinâmica renal e a secreção de renina. É composto por quais estruturas celulares?",
    options: [
      "Células justaglomerulares (produtoras de renina na arteríola aferente), Mácula densa (no túbulo distal) e Células mesangiais extraglomerulares",
      "Podócitos e células parietais de Bowman exclusivamente",
      "Células da crista neural e hepatócitos vizinhos",
      "Fibras elásticas da adventícia da aorta"
    ],
    correctIndex: 0,
    explanation: "A mácula densa monitora a concentração de NaCl no túbulo distal inicial. Se o fluxo ou NaCl caem, a mácula densa estimula as células justaglomerulares vizinhas a secretarem a enzima renina na arteríola aferente, ativando a cascata do SRAA.",
    officialReference: "Junqueira & Carneiro, Cap. 19; Guyton & Hall, Cap. 26",
    keyTakeaway: "Aparelho Justaglomerular = Células JG (renina) + Mácula densa (sensor de NaCl) + Mesângio."
  },
  {
    id: "exc-10",
    subjectId: "excretor",
    subtopic: "Sistema Renina-Angiotensina-Aldosterona (SRAA)",
    difficulty: "Fácil",
    question: "Qual é a sequência enzimática e humoral correta da ativação do Sistema Renina-Angiotensina-Aldosterona?",
    options: [
      "Renina (rim) converte Angiotensinogênio (fígado) em Angiotensina I -> ECA (endotélio pulmonar) converte Angio I em Angiotensina II -> Aldosterona (córtex adrenal)",
      "Aldosterona converte Angiotensina II diretamente em Renina",
      "ECA secreta Angiotensinogênio na medula adrenal",
      "Angiotensina II converte Renina em bicarbonato"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: Sistema Renina-Angiotensina-Aldosterona (SRAA). A renina cliva o angiotensinogênio hepático gerando o decapeptídeo Angiotensina I. A Enzima Conversora de Angiotensina (ECA), abundante nos capilares pulmonares, gera o octapeptídeo Angiotensina II.",
    officialReference: "Guyton & Hall, Cap. 19; Silverthorn, Cap. 20",
    keyTakeaway: "Cascata SRAA: Angiotensinogênio -> (Renina) -> Angio I -> (ECA) -> Angio II -> Aldosterona."
  },
  {
    id: "exc-11",
    subjectId: "excretor",
    subtopic: "Ações da Angiotensina II",
    difficulty: "Médio",
    question: "A Angiotensina II exerce múltiplos efeitos no organismo para restaurar a pressão arterial e a volemia, destacando-se:",
    options: [
      "Potente vasoconstrição arteriolar sistêmica, vasoconstrição preferencial da arteríola eferente renal, estímulo da sede, liberação de ADH e secreção de aldosterona",
      "Vasodilatação maciça com hipotensão profunda",
      "Bloqueio da reabsorção de sódio no túbulo proximal",
      "Destruição das glândulas suprarrenais"
    ],
    correctIndex: 0,
    explanation: "A Angio II eleva a resistência vascular sistêmica e contrai a arteríola eferente mantendo a pressão de filtração glomerular mesmo em choques hipovolêmicos. No SNC estimula o centro da sede e a hipófise a secretar ADH, e no córtex adrenal estimula a aldosterona.",
    officialReference: "Guyton & Hall, Cap. 19; Silverthorn, Cap. 20",
    keyTakeaway: "Angiotensina II = vasoconstrição potente, sede, ADH e estímulo à aldosterona."
  },
  {
    id: "exc-12",
    subjectId: "excretor",
    subtopic: "Aldosterona",
    difficulty: "Fácil",
    question: "A aldosterona, hormônio mineralocorticoide sintetizado na zona glomerulosa da glândula adrenal, atua nas células principais do néfron distal promovendo:",
    options: [
      "Reabsorção ativa de Sódio (Na+) e água acoplada à secreção de Potássio (K+) e prótons (H+)",
      "Eliminação maciça de sal com retenção de potássio tóxico",
      "Bloqueio completo da filtração glomerular",
      "Digestão de lipídios no ducto coletor"
    ],
    correctIndex: 0,
    explanation: "A aldosterona induz a expressão e inserção de canais de sódio epiteliais (ENaC) na membrana apical e bombas de Na+/K+ ATPase na membrana basolateral das células principais. O Na+ entra e o K+ é excretado na urina.",
    officialReference: "Guyton & Hall, Cap. 27 e 77; Silverthorn, Cap. 20",
    keyTakeaway: "Aldosterona = reabsorve Na+ e água e excreta K+ e H+ no néfron distal."
  },
  {
    id: "exc-13",
    subjectId: "excretor",
    subtopic: "Hormônio Antidiurético (ADH / Vasopressina)",
    difficulty: "Fácil",
    question: "O Hormônio Antidiurético (ADH / Vasopressina), liberado pela neuro-hipófise diante de hiperosmolaridade plasmática ou hipovolemia, atua nos ductos coletores renais promovendo:",
    options: [
      "A inserção de vesículas com canais de aquaporina tipo 2 (AQP2) na membrana apical, reabsorvendo água livre e concentrando a urina",
      "A eliminação de 10 litros de água por hora",
      "A inibição da sede hipotalâmica",
      "A alcalinização extrema do filtrado"
    ],
    correctIndex: 0,
    explanation: "O ADH liga-se a receptores V2 basolaterais acoplados à via Gs-AMPc-PKA. Vesículas citoplasmáticas com AQP2 fundem-se à membrana luminal. A água transita da luz hipo-osmótica para o interstício medular hiperosmótico, gerando urina concentrada (até 1.200 mOsm/L).",
    officialReference: "Guyton & Hall, Cap. 28; Silverthorn, Cap. 20",
    keyTakeaway: "ADH insere canais de aquaporina-2 (AQP2) no ducto coletor para reter água livre."
  },
  {
    id: "exc-14",
    subjectId: "excretor",
    subtopic: "Diabetes Insipidus",
    difficulty: "Médio",
    question: "A doença caracterizada por sede extrema (polidipsia) e eliminação de grandes volumes de urina extremamente diluída e insípida (poliúria de até 15-20 L/dia) decorrente da falta ou resistência ao ADH é o:",
    options: [
      "Diabetes Insipidus (central ou nefrogênico)",
      "Diabetes Mellitus tipo 1 descompensado",
      "Glomerulonefrite pós-estreptocócica",
      "Síndrome hemolítico-urêmica"
    ],
    correctIndex: 0,
    explanation: "No diabetes insipidus central, a neuro-hipófise não secreta ADH (por trauma, tumor); no nefrogênico, o rim não responde ao ADH (mutação em V2 ou AQP2, ou por uso de lítio). Sem ADH, os ductos coletores ficam impermeáveis à água, eliminando urina aquosa.",
    officialReference: "Silverthorn, Cap. 20; Guyton & Hall, Cap. 28",
    keyTakeaway: "Diabetes Insipidus = deficiência ou insensibilidade ao ADH com poliúria hipotônica maciça."
  },
  {
    id: "exc-15",
    subjectId: "excretor",
    subtopic: "Peptídeo Natriurético Atrial (ANP)",
    difficulty: "Médio",
    question: "O Peptídeo Natriurético Atrial (ANP / PNA) é secretado pelos cardiomiócitos atriais quando distendidos por excesso de volemia e atua nos rins:",
    options: [
      "Promovendo vasodilatação da arteríola aferente, inibindo a renina, aldosterona e reabsorção de Na+, estimulando a excreção de sal e água (natriurese e diurese)",
      "Retendo sódio e elevando ainda mais a pressão arterial",
      "Estimulando a proliferação de glomérulos adicionais",
      "Fechando todos os poros das aquaporinas"
    ],
    correctIndex: 0,
    explanation: "O ANP é o antagonista endógeno natural do sistema renina-angiotensina-aldosterona. Eleva a filtração glomerular e bloqueia a captação de Na+ no ducto coletor medular, expulsando o excesso de líquido para reduzir a volemia e aliviar o estiramento cardíaco.",
    officialReference: "Silverthorn, Cap. 20; Guyton & Hall, Cap. 19",
    keyTakeaway: "ANP estimula a perda renal de sódio e água (natriurese) para reduzir a pressão e volemia."
  },
  {
    id: "exc-16",
    subjectId: "excretor",
    subtopic: "Eritropoetina (EPO)",
    difficulty: "Fácil",
    question: "Células intersticiais fibroblásticas peritubulares renais detectam hipóxia tecidual crônica e secretam no sangue qual hormônio essencial para a eritropoiese?",
    options: [
      "Eritropoetina (EPO)",
      "Trombopoetina pura",
      "Paratormônio (PTH)",
      "Tiroxina (T4)"
    ],
    correctIndex: 0,
    explanation: "Os rins produzem mais de 90% da eritropoetina corporal via fator induzido por hipóxia (HIF-1alfa). A EPO atua na medula óssea vermelha estimulando a sobrevivência, proliferação e diferenciação dos precursores eritroides. Na insuficiência renal crônica, a falta de EPO causa anemia grave normocítica normocrômica.",
    officialReference: "Guyton & Hall, Cap. 33; Silverthorn, Cap. 16",
    keyTakeaway: "Rins produzem Eritropoetina (EPO) estimulando a produção de hemácias na medula óssea."
  },
  {
    id: "exc-17",
    subjectId: "excretor",
    subtopic: "Ativação da Vitamina D (Calcitriol)",
    difficulty: "Médio",
    question: "O rim é o órgão responsável pela etapa final de bioativação da vitamina D através da enzima 1-alfa-hidroxilase, sintetizando a forma hormonal ativa denominada:",
    options: [
      "1,25-di-hidroxivitamina D3 (Calcitriol)",
      "25-hidroxivitamina D3 (Calcidiol hepático)",
      "Colecalciferol cutâneo",
      "Ergocalciferol inerte"
    ],
    correctIndex: 0,
    explanation: "No túbulo proximal, a enzima 1-alfa-hidroxilase (estimulada pelo PTH e inibida pelo FGF-23) adiciona uma hidroxila ao calcidiol, gerando o calcitriol ativo. O calcitriol atua no intestino estimulando a síntese de calbindina e a absorção ativa de cálcio e fosfato da dieta.",
    officialReference: "Guyton & Hall, Cap. 79; Silverthorn, Cap. 23",
    keyTakeaway: "Rim realiza a hidroxilação final que produz o Calcitriol (vitamina D ativa)."
  },
  {
    id: "exc-18",
    subjectId: "excretor",
    subtopic: "Equilíbrio Ácido-Base Renal",
    difficulty: "Médio",
    question: "Diferente dos pulmões que eliminam o ácido volátil CO2 em minutos, os rins regulam o equilíbrio ácido-base a longo prazo (horas a dias) através de:",
    options: [
      "Reabsorção e síntese de novo de bicarbonato (HCO3-) acoplada à secreção ativa e excreção de íons H+ tituláveis e íons amônio (NH4+)",
      "Excreção de oxigênio gasoso pelos túbulos",
      "Digestão de proteínas plasmáticas",
      "Parada total da filtração glomerular em acidose"
    ],
    correctIndex: 0,
    explanation: "Para cada próton H+ secretado no lúmen tubular pelos trocadores Na+/H+ (NHE3) e bombas de H+-ATPase, uma molécula de HCO3- é devolvida ao sangue peritubular. Além disso, a glutamina é desaminada gerando amônia (NH3) que amortece o H+ na urina como NH4+.",
    officialReference: "Guyton & Hall, Cap. 31; Silverthorn, Cap. 20",
    keyTakeaway: "Rins controlam o pH excretando H+ (como NH4+ e fosfato ácido) e gerando novo bicarbonato."
  },
  {
    id: "exc-19",
    subjectId: "excretor",
    subtopic: "Depuração Renal (Clearance)",
    difficulty: "Médio",
    question: "O conceito de depuração renal (clearance) de uma substância representa:",
    options: [
      "O volume virtual de plasma sanguíneo que é completamente purificado daquela substância pelos rins por unidade de tempo (mL/min)",
      "A quantidade de água que sobra na bexiga após a micção",
      "A velocidade do jato urinário durante a micção matinal",
      "A porcentagem de glomérulos destruídos pela idade"
    ],
    correctIndex: 0,
    explanation: "Clearance = (U_x · V) / P_x, onde U_x é a concentração urinária, V é o fluxo de urina e P_x é a concentração plasmática. Substâncias como a inulina (e clinicamente a creatinina endógena) servem para estimar a TFG porque são filtradas livremente sem serem reabsorvidas nem metabolizadas.",
    officialReference: "Silverthorn, Cap. 19; Guyton & Hall, Cap. 27",
    keyTakeaway: "Clearance renal = volume de plasma purificado de um soluto por minuto."
  },
  {
    id: "exc-20",
    subjectId: "excretor",
    subtopic: "Creatinina e TFG",
    difficulty: "Fácil",
    question: "A creatinina sérica é um produto do metabolismo muscular utilizado universalmente na medicina prática para avaliar a função renal porque:",
    options: [
      "É produzida em ritmo relativamente constante e eliminada quase exclusivamente por filtração glomerular, de modo que sua elevação no sangue indica queda da TFG",
      "É um hormônio sintetizado pela bexiga",
      "Transforma-se em albumina durante o exercício",
      "Diz se o indivíduo está se alimentando de sal"
    ],
    correctIndex: 0,
    explanation: "Como a creatinina é livremente filtrada e apenas discretamente secretada (~10%), quando a função renal cai pela metade (50% de perda da TFG), a creatinina plasmática dobra (de 1.0 mg/dL para 2.0 mg/dL), constituindo o principal biomarcador de injúria renal.",
    officialReference: "Guyton & Hall, Cap. 27; Silverthorn, Cap. 19",
    keyTakeaway: "Níveis séricos de creatinina são inversamente proporcionais à filtração glomerular (TFG)."
  },
  {
    id: "exc-21",
    subjectId: "excretor",
    subtopic: "Ureteres e Peristaltismo",
    difficulty: "Fácil",
    question: "O transporte da urina dos cálices renais e pelve renal até a bexiga urinária é realizado pelos ureteres através de:",
    options: [
      "Ondas peristálticas ativas da musculatura lisa ureteral comandadas por marcapassos na pelve renal",
      "Queda estritamente por gravidade, paralisando se a pessoa estiver deitada",
      "Sucção gerada pelos pulmões",
      "Capilaridade das hemácias"
    ],
    correctIndex: 0,
    explanation: "Conforme o infográfico: Ureteres (transporte de urina por peristaltismo). Células marcapasso no músculo liso da pelve renal disparam potenciais que propagam ondas peristálticas (1 a 5 por minuto) ao longo do ureter, impulsionando a urina em direção à bexiga independente da postura física.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Ureteres impulsionam a urina ativamente por ondas de contração peristáltica."
  },
  {
    id: "exc-22",
    subjectId: "excretor",
    subtopic: "Músculo Detrusor e Bexiga",
    difficulty: "Fácil",
    question: "O corpo muscular da bexiga urinária é formado por uma rica trama entrelaçada de músculo liso cuja contração sincronizada esvazia a bexiga durante a micção, denominado:",
    options: [
      "Músculo Detrusor da bexiga",
      "Músculo Cremaster",
      "Músculo Psoas maior",
      "Músculo Piriforme"
    ],
    correctIndex: 0,
    explanation: "O músculo detrusor possui células musculares lisas fusionadas eletricamente por junções comunicantes. A estimulação parassimpática (via nervos esplâncnicos pélvicos sacrais S2-S4 e receptores muscarínicos M3) causa contração vigorosa do detrusor, elevando a pressão intravesical.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Músculo Detrusor = musculatura lisa da bexiga que contrai na micção via estímulo parassimpático."
  },
  {
    id: "exc-23",
    subjectId: "excretor",
    subtopic: "Esfíncteres Uretrais",
    difficulty: "Médio",
    question: "A continência urinária voluntária e a interrupção consciente do jato urinário durante a micção são controladas por qual estrutura anatômica?",
    options: [
      "Esfíncter uretral externo (músculo estriado esquelético inervado pelo nervo pudendo somaticamente)",
      "Esfíncter uretral interno involuntário",
      "Válvula ileocecal",
      "Cápsula de Bowman"
    ],
    correctIndex: 0,
    explanation: "Enquanto o esfíncter interno no colo vesical é de músculo liso involuntário (simpático L1-L2), o esfíncter externo situa-se no diafragma urogenital e é formado por músculo estriado voluntário sob controle corticoespinhal e inervação do nervo pudendo (S2-S4).",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Esfíncter uretral externo é de controle voluntário somático via nervo pudendo."
  },
  {
    id: "exc-24",
    subjectId: "excretor",
    subtopic: "Reflexo da Micção",
    difficulty: "Médio",
    question: "O reflexo da micção é deflagrado quando o enchimento da bexiga atinge cerca de 200 a 400 mL, estimulando mecanorreceptores de estiramento na parede vesical que ativam:",
    options: [
      "O centro miccional sacral na medula espinal e o centro pontino da micção (núcleo de Barrington) no tronco encefálico",
      "O lobo occipital foveal",
      "O nervo óptico contralateral",
      "A glândula parótida direita"
    ],
    correctIndex: 0,
    explanation: "Fibras sensoriais aferentes entram na medula sacral. O centro pontino da micção na ponte coordena o reflexo: se o córtex frontal der permissão consciente, ele orquestra a inibição simpática, relaxamento do esfíncter externo e ativação parassimpática do detrusor.",
    officialReference: "Guyton & Hall, Cap. 26; Kandel, Cap. 47",
    keyTakeaway: "Reflexo da micção é coordenado pelo centro sacral e centro miccional pontino."
  },
  {
    id: "exc-25",
    subjectId: "excretor",
    subtopic: "Uretra Feminina vs Masculina",
    difficulty: "Fácil",
    question: "Por que as infecções do trato urinário baixo (cistites) são biologicamente muito mais frequentes em mulheres do que em homens?",
    options: [
      "Devido à uretra feminina ser muito mais curta (~4 cm vs ~20 cm no homem) e situar-se anatomicamente próxima ao ânus e vestíbulo vaginal",
      "Porque as mulheres não possuem bexiga muscular",
      "Porque o filtrado renal feminino contém mais glicose",
      "Pela ausência de néfrons justa-medulares"
    ],
    correctIndex: 0,
    explanation: "A uretra feminina curta facilita a ascensão de bactérias uropatogênicas colônicas (especialmente Escherichia coli) até a bexiga. No homem, além do longo trajeto uretral prostático, membranoso e peniano, a secreção prostática contém fatores antibacterianos (zinco).",
    officialReference: "Silverthorn, Cap. 19; Robbins & Cotran, Cap. 20",
    keyTakeaway: "Uretra feminina curta (~4 cm) predispõe à ascensão bacteriana e cistites frequentes."
  },
  {
    id: "exc-26",
    subjectId: "excretor",
    subtopic: "Potássio e Risco Cardiovascular",
    difficulty: "Médio",
    question: "O rim é o órgão mestre no controle do balanço de Potássio (K+). Por que desvios graves de potássio sérico (hipercalemia > 5.5 mEq/L ou hipocalemia < 3.5 mEq/L) são emergências médicas fatais?",
    options: [
      "Porque o K+ é o principal determinante do potencial de repouso das membranas excitáveis, provocando arritmias cardíacas graves e parada cardíaca",
      "Porque desfaz a camada de mielina periférica instantaneamente",
      "Porque impede a absorção de ferro no estômago",
      "Porque resseca o cristalino ocular"
    ],
    correctIndex: 0,
    explanation: "Pela equação de Nernst, a razão [K+]intracelular / [K+]extracelular fixa o potencial de repouso. A hipercalemia despolariza os miócitos cardíacos inactivando canais de Na+ voltagem-dependentes (onda T apiculada, QRS alargado e fibrilação ventricular); a hipocalemia causa hiperpolarização e extrassístoles.",
    officialReference: "Guyton & Hall, Cap. 29; Silverthorn, Cap. 20",
    keyTakeaway: "Variações anômalas de K+ alteram o potencial de repouso gerando arritmias cardíacas fatais."
  },
  {
    id: "exc-27",
    subjectId: "excretor",
    subtopic: "Feedback Tubuloglomerular",
    difficulty: "Difícil",
    question: "O mecanismo autorregulatório de Feedback Tubuloglomerular (FTG) atua da seguinte forma quando a TFG está excessivamente alta:",
    options: [
      "O alto aporte de NaCl atinge a mácula densa, que libera adenosina/ATP promovendo vasoconstrição da arteríola aferente e normalizando a TFG",
      "O rim libera adrenalina para dilatar todos os vasos",
      "Ocorre rompimento dos capilares peritubulares",
      "A urina para de ser conduzida aos ureteres"
    ],
    correctIndex: 0,
    explanation: "O cotransporte de Na-K-2Cl nas células da mácula densa satura e acumula ATP/adenosina no espaço justaglomerular. A adenosina liga-se a receptores A1 no músculo liso da arteríola aferente adjacente, causando vasoconstrição e reduzindo a pressão hidrostática glomerular de volta à faixa estável.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Feedback Tubuloglomerular: mácula densa detecta excesso de NaCl e contrai a arteríola aferente."
  },
  {
    id: "exc-28",
    subjectId: "excretor",
    subtopic: "Autorregulação Renal de Fluxo",
    difficulty: "Médio",
    question: "A autorregulação renal mantém o Fluxo Sanguíneo Renal (FSR) e a Taxa de Filtração Glomerular (TFG) praticamente constantes em uma ampla faixa de variação de pressão arterial média (PAM) situada entre:",
    options: [
      "80 e 180 mmHg (através de reflexo miogênico e feedback tubuloglomerular)",
      "0 e 30 mmHg",
      "250 e 400 mmHg",
      "Exclusivamente durante o sono a 60 mmHg"
    ],
    correctIndex: 0,
    explanation: "Graças ao mecanismo miogênico intrínseco das arteríolas aferentes e ao feedback tubuloglomerular, os capilares glomerulares ficam protegidos contra elevações da pressão arterial sistêmica que poderiam romper suas paredes delicadas, garantindo filtração estável entre 80 e 180 mmHg.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Autorregulação renal mantém o fluxo e filtração estáveis entre 80 e 180 mmHg de PAM."
  },
  {
    id: "exc-29",
    subjectId: "excretor",
    subtopic: "Transportadores SGLT2 e Gliflozinas",
    difficulty: "Médio",
    question: "Os medicamentos da classe dos inibidores de SGLT2 (gliflozinas, como dapagliflozina e empagliflozina) atuam nos rins:",
    options: [
      "Bloqueando a reabsorção de glicose no túbulo proximal, eliminando o excesso de glicose pela urina (glicosúria terapêutica) e reduzindo a glicemia",
      "Aumentando a síntese de insulina nos ductos coletores",
      "Destruindo os receptores de aldosterona",
      "Paralisando a bomba cardíaca"
    ],
    correctIndex: 0,
    explanation: "Ao inibir o transportador SGLT2 (responsável por 90% da reabsorção da glicose filtrada), promovem a perda de 70-80 g de glicose na urina por dia, reduzindo a glicemia, o peso corporal e a pressão arterial, com comprovada nefro e cardioproteção.",
    officialReference: "Silverthorn, Cap. 19; Goodman & Gilman, Cap. 47",
    keyTakeaway: "Inibidores de SGLT2 bloqueiam a reabsorção de glicose promovendo glicosúria benéfica."
  },
  {
    id: "exc-30",
    subjectId: "excretor",
    subtopic: "Néfrons Corticais vs Justamedulares",
    difficulty: "Médio",
    question: "Os néfrons justamedulares (cerca de 15% do total) diferenciam-se dos néfrons corticais por possuírem:",
    options: [
      "Glomérulos situados próximos à junção cortiço-medular, alças de Henle longuíssimas que mergulham profundamente na medula e capilares vasa recta especializados na concentração urinária",
      "Ausência de túbulos coletores",
      "Incapacidade de produzir urina",
      "Apenas células musculares esqueléticas"
    ],
    correctIndex: 0,
    explanation: "Os néfrons justamedulares são os grandes arquitetos do gradiente hiperosmótico medular. Suas alças de Henle longas acompanhadas pelas alças vasculares da vasa recta permitem a sobrevivência em ambientes áridos concentrando a urina ao máximo.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Néfrons justamedulares possuem alças de Henle longas e vasa recta para concentrar a urina."
  },
  {
    id: "exc-31",
    subjectId: "excretor",
    subtopic: "Vasa Recta e Troca por Contracorrente",
    difficulty: "Difícil",
    question: "Os capilares peritubulares em forma de grampo de cabelo que acompanham as alças de Henle justamedulares (Vasa Recta) atuam como trocadores por contracorrente passivos com a função de:",
    options: [
      "Nutrir a medula renal sem dissipar nem 'lavar' o gradiente hiperosmótico de solutos (ureia e NaCl)",
      "Bombear oxigênio ativo para a bexiga",
      "Filtrar eritrócitos doentes para o ureter",
      "Produzir bile renal"
    ],
    correctIndex: 0,
    explanation: "Se o fluxo medular fosse rápido e linear, os solutos concentrados seriam carreados embora. A geometria em alça em U em ferradura e o baixo fluxo da vasa recta permitem que a água saia no ramo descendente e retorne no ramo ascendente, mantendo o interstício medular hiperosmolar.",
    officialReference: "Guyton & Hall, Cap. 28; Silverthorn, Cap. 20",
    keyTakeaway: "Vasa Recta atua como trocador por contracorrente preservando a hiperosmolaridade medular."
  },
  {
    id: "exc-32",
    subjectId: "excretor",
    subtopic: "Reciclagem da Ureia",
    difficulty: "Difícil",
    question: "Qual soluto contribui com cerca de 40 a 50% de toda a osmolaridade da medula interna renal (até 600 mOsm/L de um total de 1.200 mOsm/L) através de um ciclo contínuo de reabsorção facilitada sob estímulo do ADH?",
    options: [
      "Ureia (através dos transportadores UT-A1 e UT-A3 no ducto coletor medular)",
      "Glicose não fosforilada",
      "Creatinina pura",
      "Ácido úrico insolúvel"
    ],
    correctIndex: 0,
    explanation: "O ADH aumenta a expressão dos transportadores de ureia nos ductos coletores medulares internos terminais. A ureia escapa para o interstício profundo, concentrando a medula e reentrando nas alças de Henle finas, num ciclo virtuoso de hiperosmolaridade essencial para a conservação de água.",
    officialReference: "Guyton & Hall, Cap. 28; Silverthorn, Cap. 20",
    keyTakeaway: "Reciclagem da ureia estimulada pelo ADH responde por quase metade da hiperosmolaridade medular."
  },
  {
    id: "exc-33",
    subjectId: "excretor",
    subtopic: "Túbulo Contorcido Distal e Tiazídicos",
    difficulty: "Médio",
    question: "Os diuréticos tiazídicos (como a hidroclorotiazida) inibem qual transportador na porção inicial do túbulo contorcido distal?",
    options: [
      "Cotransportador Na+-Cl- (NCCT)",
      "Cotransportador Na+-K+-2Cl- (NKCC2)",
      "Bomba de prótons gástrica",
      "Receptor V2 de vasopressina"
    ],
    correctIndex: 0,
    explanation: "O túbulo contorcido distal reabsorve cerca de 5% do sódio filtrado via cotransportador NCCT eletro-neutro. Os tiazídicos bloqueiam esse carreador, promovendo natriurese moderada e vasodilatação sustentada, sendo primeira linha no tratamento da hipertensão arterial primária.",
    officialReference: "Goodman & Gilman, Cap. 25; Guyton & Hall, Cap. 32",
    keyTakeaway: "Hidroclorotiazida inibe o cotransportador Na+-Cl- (NCCT) no túbulo distal."
  },
  {
    id: "exc-34",
    subjectId: "excretor",
    subtopic: "Espironolactona e Poupadores de Potássio",
    difficulty: "Fácil",
    question: "A espironolactona é um diurético 'poupador de potássio' amplamente utilizado que atua por meio de:",
    options: [
      "Antagonismo competitivo dos receptores intracelulares de aldosterona nas células principais, bloqueando a excreção de K+ e a reabsorção de Na+",
      "Destruição da membrana basal do glomérulo",
      "Conversão direta de sódio em potássio no citoplasma",
      "Bloqueio da sede hipotalâmica"
    ],
    correctIndex: 0,
    explanation: "A espironolactona liga-se aos receptores mineralocorticoides (MR) no citoplasma das células principais do túbulo distal e coletor, impedindo a aldosterona de induzir os canais ENaC e a bomba Na+/K+ ATPase. Assim, retém potássio e elimina sódio e água.",
    officialReference: "Goodman & Gilman, Cap. 25; Silverthorn, Cap. 20",
    keyTakeaway: "Espironolactona bloqueia o receptor de aldosterona, poupando K+ e eliminando Na+."
  },
  {
    id: "exc-35",
    subjectId: "excretor",
    subtopic: "Células Intercaladas e Equilíbrio Ácido-Base",
    difficulty: "Médio",
    question: "No ducto coletor cortical, as células intercaladas do tipo A são especializadas na:",
    options: [
      "Secreção ativa de prótons H+ na urina por bombas H+-ATPase e H+/K+-ATPase e reabsorção de novo bicarbonato na acidose",
      "Secreção de bicarbonato e retenção de ácido na alcalose (função das células tipo B)",
      "Produção exclusiva de amilase",
      "Filtração de plaquetas intactas"
    ],
    correctIndex: 0,
    explanation: "As células intercaladas A possuem bombas de prótons apicais que acidificam a urina até pH mínimo de ~4.5 e trocadores AE1 basolaterais que enviam HCO3- ao sangue. As células intercaladas B invertem a polaridade das bombas para secretar bicarbonato em condições de alcalose sistêmica.",
    officialReference: "Guyton & Hall, Cap. 31; Silverthorn, Cap. 20",
    keyTakeaway: "Células intercaladas tipo A secretam prótons H+ corrigindo a acidose metabólica."
  },
  {
    id: "exc-36",
    subjectId: "excretor",
    subtopic: "Lactato e Amônia como Tampões Urinários",
    difficulty: "Médio",
    question: "Como o pH urinário mínimo é limitado em ~4.5 para não lesionar o epitélio, o excesso de íons H+ secretados nos túbulos é tamponado na urina por quais dois sistemas?",
    options: [
      "Sistema tampão fosfato (HPO4²- que vira H2PO4-) e Sistema tampão amônia (NH3 que vira NH4+)",
      "Sistema de hemoglobina dissolvida e albumina",
      "Tampão de ácido clorídrico puro",
      "Tampão de etanol volátil"
    ],
    correctIndex: 0,
    explanation: "Sem tampões, bastaria a secreção de pouquíssimos prótons livres para derrubar o pH urinário abaixo de 4.5 e interromper o transporte. O fosfato filtrado (ácido titulável) e a amônia sintetizada pelos túbulos (NH3 + H+ -> NH4+) 'sequestram' os íons H+, permitindo excretar centenas de mEq de ácido diariamente.",
    officialReference: "Guyton & Hall, Cap. 31; Silverthorn, Cap. 20",
    keyTakeaway: "Tampão fosfato e síntese de amônio (NH4+) permitem grande excreção de H+ na urina."
  },
  {
    id: "exc-37",
    subjectId: "excretor",
    subtopic: "Cálculos Renais (Nefrolitíase)",
    difficulty: "Fácil",
    question: "Cerca de 70 a 80% de todos os cálculos renais (pedras nos rins) diagnosticados são formados por sais de:",
    options: [
      "Oxalato de cálcio e Fosfato de cálcio",
      "Ácido úrico puro em meio alcalino",
      "Proteínas de bence-jones",
      "Ferro elementar oxidado"
    ],
    correctIndex: 0,
    explanation: "A litíase por oxalato de cálcio ocorre por hipersaturação urinária, baixa ingestão de água (volume urinário escasso), hipercalciúria idiopática e baixa concentração de inibidores naturais de cristalização (como o citrato urinário que quela o cálcio livre).",
    officialReference: "Robbins & Cotran, Cap. 20; Guyton & Hall, Cap. 32",
    keyTakeaway: "Cálculos de oxalato de cálcio representam mais de 75% dos casos de litíase renal."
  },
  {
    id: "exc-38",
    subjectId: "excretor",
    subtopic: "Paratormônio (PTH) e os Rins",
    difficulty: "Médio",
    question: "O Paratormônio (PTH), secretado pelas paratireoides em resposta à hipocalcemia, atua nos rins promovendo:",
    options: [
      "Aumento da reabsorção tubular de Cálcio (Ca2+) no túbulo distal e inibição da reabsorção de Fosfato (efeito fosfatúrico) no túbulo proximal",
      "Eliminação imediata de todo o cálcio nos ureteres",
      "Inibição da vitamina D ativa",
      "Constrição do músculo detrusor vesical"
    ],
    correctIndex: 0,
    explanation: "O PTH impede que o cálcio filtrado seja perdido na urina. Ao mesmo tempo, ele inibe os transportadores NaPi-IIa no túbulo proximal, aumentando a excreção de fosfato (fosfatúria) para evitar que o fosfato se ligue ao cálcio no sangue e precipite nos tecidos moles.",
    officialReference: "Guyton & Hall, Cap. 79; Silverthorn, Cap. 23",
    keyTakeaway: "PTH no rim = reabsorve Cálcio e excreta Fosfato (fosfatúria), além de ativar o calcitriol."
  },
  {
    id: "exc-39",
    subjectId: "excretor",
    subtopic: "Insuficiência Renal Aguda vs Crônica",
    difficulty: "Médio",
    question: "A Insuficiência Renal Crônica terminal leva à uremia e atinge múltiplos sistemas do corpo humano, manifestando-se clinicamente por:",
    options: [
      "Acúmulo de escórias nitrogenadas (ureia e creatinina), hipercalemia, acidose metabólica, anemia hipoproliferativa, hipertensão e osteodistrofia renal",
      "Hipotensão extrema permanente sem anemia",
      "Crescimento acelerado dos dentes e ossos longos",
      "Alcalose respiratória sem alterações metabólicas"
    ],
    correctIndex: 0,
    explanation: "A perda progressiva irreversível de néfrons compromete todas as funções homeostáticas renais: sem excreção de H+ e K+ há acidose e hipercalemia; sem EPO há anemia; sem ativação de vitamina D e com retenção de fosfato há hiperparatireoidismo e lesão óssea; e a retenção de sódio gera hipertensão volêmica.",
    officialReference: "Guyton & Hall, Cap. 32; Robbins & Cotran, Cap. 20",
    keyTakeaway: "Doença renal crônica causa uremia, anemia (falta de EPO), acidose e distúrbios ósseos."
  },
  {
    id: "exc-40",
    subjectId: "excretor",
    subtopic: "Hemodiálise",
    difficulty: "Fácil",
    question: "O procedimento artificial de substituição renal em que o sangue do paciente circula por um filtro capilar semipermeável banhado por líquido de diálise para remover escórias e excesso de água é a:",
    options: [
      "Hemodiálise",
      "Hemotransfusão pura",
      "Angioplastia coronária",
      "Cintilografia pulmonar"
    ],
    correctIndex: 0,
    explanation: "Na hemodiálise, o sangue passa por milhares de fibras ocas de celulose/polissulfona. As escórias tóxicas (ureia, creatinina, potássio excedente) difundem-se a favor do gradiente para o dialisato, enquanto a ultrafiltração por gradiente de pressão hidrostática remove o excesso de líquido corporal.",
    officialReference: "Guyton & Hall, Cap. 32; Silverthorn, Cap. 19",
    keyTakeaway: "Hemodiálise utiliza membranas semipermeáveis para filtrar escórias e retirar excesso de água."
  },
  {
    id: "exc-41",
    subjectId: "excretor",
    subtopic: "Densidade Urinária e Osmolaridade",
    difficulty: "Fácil",
    question: "A densidade urinária normal avaliada no exame simples de urina (EAS / Tipo 1) varia fisiologicamente entre:",
    options: [
      "1.002 a 1.030 g/mL (refletindo a capacidade renal de diluir ou concentrar a urina)",
      "0.500 a 0.800 g/mL",
      "Exatamente 2.000 g/mL",
      "Mais de 5.000 g/mL"
    ],
    correctIndex: 0,
    explanation: "A densidade mede o peso dos solutos dissolvidos comparado à água pura (1.000). Uma pessoa hiperidratada pode diluir a urina até 1.002 (~50 mOsm/L), enquanto alguém desidratado com alto ADH pode concentrar até 1.030 (~1.200 mOsm/L). Uma densidade fixada em 1.010 (isostenúria) indica perda da função tubular renal.",
    officialReference: "Guyton & Hall, Cap. 28; Silverthorn, Cap. 20",
    keyTakeaway: "Densidade urinária normal = 1.002 a 1.030; reflete a concentração de solutos."
  },
  {
    id: "exc-42",
    subjectId: "excretor",
    subtopic: "Refluxo Vesicoureteral",
    difficulty: "Médio",
    question: "Como o organismo impede normalmente o refluxo retrógrado perigoso da urina da bexiga para os ureteres e rins durante o aumento da pressão intravesical?",
    options: [
      "O trajeto oblíquo intramural dos ureteres na parede muscular da bexiga faz com que a contração do detrusor comprima e sele os orifícios ureterais como uma válvula passiva",
      "Através de ossículos cartilaginosos no trígono",
      "Pela ação do esfíncter anal voluntário",
      "Pela secreção contínua de cera no trígono"
    ],
    correctIndex: 0,
    explanation: "Os ureteres penetram obliquamente por 1 a 2 cm na parede vesical antes de abrir no trígono. Quando a bexiga se enche e o detrusor contrai, a pressão comprime o túnel ureteral intramural, ocluindo-o passivamente. O defeito congênito desse túnel curto causa refluxo vesicoureteral e pielonefrite.",
    officialReference: "Guyton & Hall, Cap. 26; Robbins & Cotran, Cap. 20",
    keyTakeaway: "Trajeto oblíquo intramural dos ureteres atua como válvula antirrefluxo na bexiga."
  },
  {
    id: "exc-43",
    subjectId: "excretor",
    subtopic: "Trígono Vesical",
    difficulty: "Fácil",
    question: "O trígono vesical é uma área triangular lisa e fixa na base da mucosa da bexiga delimitada pelos:",
    options: [
      "Dois óstios dos ureteres póstero-superiores e o óstio interno da uretra no ápice inferior",
      "Dois rins e o baço",
      "Quatro lobos da próstata",
      "Pelve renal e polo inferior esquerdo"
    ],
    correctIndex: 0,
    explanation: "Diferente do restante do detrusor que é enrugado em pregas na bexiga vazia, o trígono vesical possui mucosa lisa e firme derivada embriologicamente do mesoderma dos ductos mesonéfricos, orientando o fluxo de urina diretamente ao orifício da uretra.",
    officialReference: "Junqueira & Carneiro, Cap. 19; Guyton & Hall, Cap. 26",
    keyTakeaway: "Trígono vesical é delimitado pelos 2 óstios dos ureteres e pelo óstio interno da uretra."
  },
  {
    id: "exc-44",
    subjectId: "excretor",
    subtopic: "Uretra Masculina e Segmentos",
    difficulty: "Médio",
    question: "A uretra masculina (~20 cm de comprimento) é anatomicamente e funcionalmente dividida em três porções principais sucessivas:",
    options: [
      "Prostática, Membranosa e Esponjosa (peniana)",
      "Cervical, Torácica e Abdominal",
      "Glomerular, Tubular e Calicial",
      "Hepática, Esplênica e Retal"
    ],
    correctIndex: 0,
    explanation: "A uretra prostática atravessa a próstata (onde desembocam ductos ejaculatórios); a membranosa perfura o assoalho pélvico envolvida pelo esfíncter externo; e a uretra esponjosa percorre o corpo esponjoso do pênis até o meato uretral externo, servindo tanto à micção quanto à ejaculação.",
    officialReference: "Junqueira & Carneiro, Cap. 19; Moore - Anatomia Orientada para a Clínica",
    keyTakeaway: "Uretra masculina possui 3 divisões: Prostática, Membranosa e Esponjosa."
  },
  {
    id: "exc-45",
    subjectId: "excretor",
    subtopic: "Reabsorção de Ácido Úrico",
    difficulty: "Médio",
    question: "O ácido úrico é o produto final do catabolismo das bases púricas (adenina e guanina). Sua excreção ou superprodução desregulada leva ao acúmulo de cristais de urato monossódico nas articulações, causando a:",
    options: [
      "Gota (artrite gotosa)",
      "Osteoporose senil",
      "Escabiose",
      "Doença de Parkinson"
    ],
    correctIndex: 0,
    explanation: "Cerca de 90% do ácido úrico filtrado é reabsorvido no túbulo proximal pelo transportador URAT1. Em hiperuricemia (> 7.0 mg/dL), a baixa solubilidade do urato precipita cristais pontiagudos de birrefringência negativa na sinóvia articular (especialmente no hálux / podagra), disparando inflamação neutrofílica excruciante.",
    officialReference: "Robbins & Cotran, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Hiperuricemia causa precipitação de cristais de urato monossódico provocando gota."
  },
  {
    id: "exc-46",
    subjectId: "excretor",
    subtopic: "Pressão Efetiva de Filtração",
    difficulty: "Médio",
    question: "A Pressão Efetiva de Filtração (PEF) no corpúsculo renal, responsável por empurrar o líquido através do filtro glomerular (~10 a 15 mmHg), resulta de:",
    options: [
      "Pressão Hidrostática Glomerular (~60 mmHg) MENOS a soma da Pressão Coloidosmótica Plasmática (~32 mmHg) e Pressão Hidrostática da Cápsula de Bowman (~18 mmHg)",
      "Pressão arterial braquial dividida pela pressão venosa",
      "Pressão osmótica dos ureteres multiplicada pelo volume de urina",
      "Temperatura renal em graus Celsius"
    ],
    correctIndex: 0,
    explanation: "PEF = P_g - (π_g + P_b). A pressão que favorece a filtração é a hidrostática capilar (~60 mmHg). As forças opostas que resistem à filtração são a pressão coloidosmótica das proteínas plasmáticas (~32 mmHg) e a pressão do líquido na cápsula (~18 mmHg): 60 - (32 + 18) = +10 mmHg líquidos.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Pressão Efetiva de Filtração = Hidrostática capilar - (Oncótica capilar + Hidrostática de Bowman)."
  },
  {
    id: "exc-47",
    subjectId: "excretor",
    subtopic: "Proteinúria Glomerular",
    difficulty: "Fácil",
    question: "A presença anormal de grande quantidade de proteínas na urina (proteinúria > 3,5 g/24 horas) associada a edema, hipoalbuminemia e hiperlipidemia caracteriza a:",
    options: [
      "Síndrome Nefrótica",
      "Insuficiência cardíaca esquerda isolada",
      "Cistite bacteriana simples",
      "Apnéia obstrutiva do sono"
    ],
    correctIndex: 0,
    explanation: "Na síndrome nefrótica (como na nefropatia membranosa ou glomeruloesclerose segmentar e focal), a perda da barreira de carga aniônica e danos aos podócitos permitem o escape maciço de albumina. A hipoalbuminemia resultante reduz a pressão oncótica sistêmica, gerando anasarca.",
    officialReference: "Robbins & Cotran, Cap. 20; Guyton & Hall, Cap. 32",
    keyTakeaway: "Síndrome Nefrótica = proteinúria maciça (>3.5 g/dia), hipoalbuminemia e edema."
  },
  {
    id: "exc-48",
    subjectId: "excretor",
    subtopic: "Resistência das Arteríolas Renal",
    difficulty: "Médio",
    question: "A constrição isolada e seletiva da arteríola EFERENTE glomerular provoca:",
    options: [
      "Aumento da pressão hidrostática capilar glomerular e aumento da Taxa de Filtração Glomerular (TFG), com redução do fluxo plasmático renal",
      "Queda imediata de toda a filtração para zero",
      "Ruptura dos ureteres",
      "Aumento da excreção de glicose pura"
    ],
    correctIndex: 0,
    explanation: "Comprimir a via de saída (arteríola eferente, efeito da angiotensina II em doses moderadas) 'represa' o sangue no glomérulo, elevando a pressão de filtração e sustentando a TFG mesmo quando a pressão sistêmica cai.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Constrição da arteríola eferente represa o sangue e eleva a filtração glomerular."
  },
  {
    id: "exc-49",
    subjectId: "excretor",
    subtopic: "Osmorregulação Hipotalâmica",
    difficulty: "Médio",
    question: "Os osmorreceptores que monitoram a osmolaridade plasmática com sensibilidade extrema (detectando variações de apenas 1%) localizam-se:",
    options: [
      "No hipotálamo anterior (órgão vasculoso da lâmina terminal - OVLT e órgão subfornicial)",
      "Na medula adrenal",
      "No córtex auditivo",
      "Na polpa dentária"
    ],
    correctIndex: 0,
    explanation: "O OVLT e órgão subfornicial são órgãos circunventriculares sem barreira hematoencefálica. Neurônios osmorreceptores sofrem encolhimento osmótico imediato quando a osmolaridade sanguínea sobe acima de 285-290 mOsm/kg, disparando a sensação consciente de sede e a liberação de ADH.",
    officialReference: "Guyton & Hall, Cap. 28; Silverthorn, Cap. 20",
    keyTakeaway: "Osmorreceptores no hipotálamo anterior detectam variações de 1% na osmolaridade."
  },
  {
    id: "exc-50",
    subjectId: "excretor",
    subtopic: "Hematúria",
    difficulty: "Fácil",
    question: "A presença de sangue (eritrócitos) visível a olho nu ou detectada no exame microscópico da urina é denominada clinicamente:",
    options: [
      "Hematúria",
      "Leucocitúria",
      "Bacteriúria",
      "Glicosúria"
    ],
    correctIndex: 0,
    explanation: "A hematúria pode ser glomerular (com hemácias dismórficas e cilindros hemáticos, indicando glomerulonefrite) ou do trato urológico inferior (hemácias isomórficas íntegras decorrentes de litíase, infecção, hiperplasia prostática ou neoplasias).",
    officialReference: "Guyton & Hall, Cap. 32; Robbins & Cotran, Cap. 20",
    keyTakeaway: "Hematúria = presença de sangue/eritrócitos na urina."
  },
  {
    id: "exc-51",
    subjectId: "excretor",
    subtopic: "Bicarbonato e Anidrase Carbônica Renal",
    difficulty: "Médio",
    question: "Como os rins reabsorvem o bicarbonato (HCO3-) filtrado no túbulo proximal, considerando que a membrana apical do enterócito/célula tubular é impermeável ao ânion bicarbonato livre?",
    options: [
      "O H+ secretado combina-se com o HCO3- formando H2CO3, que é clivado pela anidrase carbônica apical em CO2 e H2O; o CO2 difunde-se para dentro da célula e é reconvertido em HCO3- intracelularmente",
      "O bicarbonato atravessa canais de cloro gigantes sem nenhuma enzima",
      "O bicarbonato é transportado ligado a lipoproteínas",
      "O bicarbonato nunca é reabsorvido, sendo totalmente sintetizado de novo"
    ],
    correctIndex: 0,
    explanation: "A anidrase carbônica IV ligada à membrana apical cliva H2CO3 em CO2 e água. O gás CO2 entra rapidamente no citoplasma por difusão simples. No interior da célula, a anidrase carbônica citosólica II regenera HCO3-, que é exportado para o sangue pelo cotransportador Na+-3HCO3- (NBCe1).",
    officialReference: "Guyton & Hall, Cap. 31; Silverthorn, Cap. 20",
    keyTakeaway: "Anidrase carbônica converte HCO3- em CO2 para que ele consiga atravessar a membrana apical."
  },
  {
    id: "exc-52",
    subjectId: "excretor",
    subtopic: "Inibidores da ECA e Rins",
    difficulty: "Médio",
    question: "Medicamentos Inibidores da Enzima Conversora de Angiotensina (iECAs, como o enalapril e ramipril) protegem os rins de pacientes com diabetes e hipertensão a longo prazo porque:",
    options: [
      "Promovem a vasodilatação seletiva da arteríola eferente, reduzindo a hiperfiltração e a hipertensão intraglomerular deletéria",
      "Aumentam a produção de ureia para hidratar os glomérulos",
      "Impedem que a urina entre na bexiga",
      "Multiplicam o número de néfrons adultos"
    ],
    correctIndex: 0,
    explanation: "No diabetes, a angiotensina II contrai desproporcionalmente a arteríola eferente, gerando estresse de hiperfiltração mecânica que esclerosa os glomérulos. Ao bloquear a formação de Angio II, os iECAs reduzem a pressão intraglomerular, retardando significativamente a progressão para insuficiência renal terminal.",
    officialReference: "Goodman & Gilman, Cap. 26; Guyton & Hall, Cap. 32",
    keyTakeaway: "iECAs dilatam a arteríola eferente reduzindo a pressão intraglomerular e preservando os rins."
  },
  {
    id: "exc-53",
    subjectId: "excretor",
    subtopic: "Células Intercaladas e Acidose",
    difficulty: "Difícil",
    question: "Na acidose metabólica grave, a excreção renal compensatória de prótons (H+) e a regeneração de bicarbonato ocorrem principalmente através de qual tipo celular no ducto coletor?",
    options: [
      "Células intercaladas tipo Alfa (com H+-ATPase e H+/K+-ATPase na membrana apical e trocador Cl-/HCO3- basolateral)",
      "Células intercaladas tipo Beta",
      "Células da mácula densa",
      "Podócitos glomerulares"
    ],
    correctIndex: 0,
    explanation: "As células intercaladas alfa são especialistas na secreção ácida ativa: secretam H+ ativamente para a urina através de bombas de prótons apicais (H+-ATPase e trocador H+/K+ ATPase). O novo bicarbonato gerado intracelularmente pela anidrase carbônica é reabsorvido para a corrente sanguínea pelo trocador basolateral de ânions AE1 (Cl-/HCO3-).",
    officialReference: "Guyton & Hall, Cap. 31; Boron & Boulpaep, Cap. 39",
    keyTakeaway: "Células intercaladas alfa secretam H+ na urina e devolvem novo bicarbonato ao sangue."
  },
  {
    id: "exc-54",
    subjectId: "excretor",
    subtopic: "Ânion Gap Sérico",
    difficulty: "Médio",
    question: "O cálculo do Ânion Gap sérico (AG = [Na+] - ([Cl-] + [HCO3-]), valor de referência normal: 8 a 12 mEq/L) é fundamental na avaliação diagnóstica de qual distúrbio ácido-base?",
    options: [
      "Acidose Metabólica (diferenciando acidose com AG aumentado, como cetoacidose diabética e uremia, de acidose hiperclorêmica com AG normal)",
      "Alcalose Respiratória crônica pura",
      "Acidose Respiratória aguda por sufocamento",
      "Alcalose Metabólica induzida por vômitos"
    ],
    correctIndex: 0,
    explanation: "O ânion gap representa a concentração de ânions plasmáticos não medidos (principalmente albumina, fosfato e sulfato). Quando ácidos não mensuráveis se acumulam no sangue (ácido lático, corpos cetônicos como acetoacetato e beta-hidroxibutirato ou toxinas como metanol e etilenoglicol), o bicarbonato é consumido e o ânion gap eleva-se (>12 mEq/L).",
    officialReference: "Guyton & Hall, Cap. 31; Silverthorn, Cap. 20",
    keyTakeaway: "Ânion Gap elevado (>12 mEq/L) sinaliza acúmulo de ácidos orgânicos não medidos (lactato, cetonas)."
  },
  {
    id: "exc-55",
    subjectId: "excretor",
    subtopic: "Amoniagênese Renal",
    difficulty: "Difícil",
    question: "A produção de 'novo bicarbonato' e a capacidade de excretar grandes cargas ácidas dependem da quebra enzimática de qual aminoácido no túbulo proximal?",
    options: [
      "Glutamina (degradada pela glutaminase gerando dois íons amônio NH4+ e dois novos HCO3-)",
      "Glicina",
      "Leucina",
      "Tirosina"
    ],
    correctIndex: 0,
    explanation: "Em resposta à acidose, os túbulos proximais captam glutamina do sangue e a metabolizam via glutaminase e glutamato desidrogenase em alfa-cetoglutarato, liberando 2 NH4+ (excretados na urina pelo trocador Na+/NH4+) e gerando 2 moléculas de 'novo' bicarbonato que são transportadas para o sangue peritubular.",
    officialReference: "Boron & Boulpaep, Cap. 39; Guyton & Hall, Cap. 31",
    keyTakeaway: "Amoniagênese: glutamina gera NH4+ para excreção urinária e 2 novos HCO3- para o sangue."
  },
  {
    id: "exc-56",
    subjectId: "excretor",
    subtopic: "Mecanismo dos Diuréticos de Alça",
    difficulty: "Fácil",
    question: "A furosemida (diurético de alça mais potente da prática médica) atua inibindo seletivamente qual transportador renal?",
    options: [
      "Cotransportador Na+-K+-2Cl- (NKCC2) no ramo ascendente espesso da alça de Henle",
      "Cotransportador Na+-Cl- (NCC) no túbulo contorcido distal",
      "Canal epitelial de sódio (ENaC) no ducto coletor",
      "Bomba H+/K+ gástrica"
    ],
    correctIndex: 0,
    explanation: "A furosemida liga-se reversivelmente ao sítio de cloreto do cotransportador apical NKCC2 no ramo ascendente espesso da alça de Henle. Como esse segmento é impermeável à água e responde por 25% da reabsorção de sódio, sua inibição dissipa o gradiente hiperosmótico medular, impedindo a concentração urinária e gerando diurese maciça de água e eletrólitos.",
    officialReference: "Goodman & Gilman, Cap. 25; Guyton & Hall, Cap. 32",
    keyTakeaway: "Furosemida inibe o cotransportador NKCC2 na alça de Henle espessa, bloqueando 25% do sódio."
  },
  {
    id: "exc-57",
    subjectId: "excretor",
    subtopic: "Mecanismo dos Diuréticos Tiazídicos",
    difficulty: "Fácil",
    question: "Os diuréticos tiazídicos (ex: hidroclorotiazida, clortalidona), amplamente utilizados no tratamento da hipertensão arterial, inibem o:",
    options: [
      "Cotransportador Na+-Cl- (NCC) na membrana apical do túbulo contorcido distal",
      "Receptor de vasopressina V2 no ducto coletor",
      "Receptor AT1 de angiotensina II",
      "Canal de aquaporina tipo 1 do túbulo proximal"
    ],
    correctIndex: 0,
    explanation: "Os tiazídicos inibem especificamente o simporte eletroneutro Na+/Cl- (NCC) localizado na membrana luminal das células do túbulo contorcido distal inicial, responsável por reabsorver ~5% do sódio filtrado. Curiosamente, essa inibição estimula secundariamente a reabsorção de Ca2+ no mesmo segmento (ação hipocalciúrica protetora contra osteoporose e cálculos).",
    officialReference: "Guyton & Hall, Cap. 32; Silverthorn, Cap. 20",
    keyTakeaway: "Tiazídicos inibem o cotransportador Na+/Cl- (NCC) no túbulo contorcido distal."
  },
  {
    id: "exc-58",
    subjectId: "excretor",
    subtopic: "Diuréticos Poupadores de Potássio",
    difficulty: "Médio",
    question: "A espironolactona e a eplerenona exercem efeito diurético poupador de potássio porque:",
    options: [
      "Antagonizam competitivamente os receptores intracelulares de mineralocorticoides (aldosterona) nas células principais do ducto coletor",
      "Bloqueiam a liberação de adrenalina pelas supra-renais",
      "Destroem os canais de cloro renais",
      "Aceleram a absorção de glicose no túbulo proximal"
    ],
    correctIndex: 0,
    explanation: "A aldosterona induz a transcrição e inserção de canais de sódio ENaC apicais e bombas Na+/K+ basolaterais nas células principais. A espironolactona bloqueia o receptor mineralocorticoide, impedindo essa ação. Menos Na+ entra na célula, reduzindo o lúmen eletronegativo que impulsiona o efluxo de K+ e H+, poupando potássio e causando natriurese moderada.",
    officialReference: "Goodman & Gilman, Cap. 25; Guyton & Hall, Cap. 29",
    keyTakeaway: "Espironolactona antagoniza a aldosterona nas células principais, retendo K+ e excretando Na+."
  },
  {
    id: "exc-59",
    subjectId: "excretor",
    subtopic: "Inibidores de SGLT2 (Gliflozinas)",
    difficulty: "Médio",
    question: "Os inibidores de SGLT2 (como empagliflozina e dapagliflozina) representam uma revolução no tratamento do diabetes, insuficiência cardíaca e doença renal crônica porque:",
    options: [
      "Inibem o transportador SGLT2 no segmento S1 do túbulo proximal, induzindo glicosúria e natriurese e restaurando o feedback tubuloglomerular protetor",
      "Estimulam a síntese pancreática de glucagon",
      "Impedem a digestão gástrica de carboidratos",
      "Invertem o fluxo sanguíneo renal"
    ],
    correctIndex: 0,
    explanation: "O SGLT2 reabsorve ~90% de toda a glicose filtrada nos rins junto com sódio. Ao inibir o SGLT2, as gliflozinas causam excreção urinária de glicose (efeito hipoglicemiante) e de sódio. Mais NaCl atinge a mácula densa distal, ativando o feedback tubuloglomerular que contrai a arteríola aferente hiperfiltrante, reduzindo a hipertensão intraglomerular e preservando os néfrons.",
    officialReference: "Guyton & Hall, Cap. 27; Silverthorn, Cap. 20",
    keyTakeaway: "Inibidores de SGLT2 causam glicosúria/natriurese e aliviam a sobrecarga intraglomerular renal."
  },
  {
    id: "exc-60",
    subjectId: "excretor",
    subtopic: "Feedback Tubuloglomerular (TGF)",
    difficulty: "Difícil",
    question: "O mecanismo de autorregulação renal do Feedback Tubuloglomerular opera através das células da mácula densa que, ao detectarem excesso de fluxo e NaCl no lúmen tubular distal:",
    options: [
      "Liberam adenosina e ATP parácrinos, provocando vasoconstrição reflexa da arteríola aferente adjacente para normalizar a TFG",
      "Causam vasodilatação extrema da arteríola aferente",
      "Estimulam a liberação imediata de renina em cascata",
      "Paralisam a secreção de ácido úrico"
    ],
    correctIndex: 0,
    explanation: "Se a TFG sobe excessivamente, o fluxo rápido impede reabsorção adequada e mais NaCl atinge a mácula densa (detectado pelo cotransportador NKCC2). O influxo de íons ativa a liberação parácrina de adenosina e ATP. A adenosina liga-se a receptores A1 na musculatura lisa da arteríola aferente, contraindo-a e diminuindo a pressão capilar glomerular de volta ao valor basal.",
    officialReference: "Guyton & Hall, Cap. 26; Boron & Boulpaep, Cap. 34",
    keyTakeaway: "Feedback tubuloglomerular: excesso de NaCl na mácula densa libera adenosina e contrai a arteríola aferente."
  },
  {
    id: "exc-61",
    subjectId: "excretor",
    subtopic: "Aparelho Justaglomerular e Renina",
    difficulty: "Médio",
    question: "A secreção da enzima renina pelas células justaglomerulares mioepitelioides da arteríola aferente é estimulada fisiologicamente por:",
    options: [
      "Queda na pressão de perfusão na arteríola aferente (barorreceptor renal), estimulação simpática (receptores beta-1) e baixa entrega de NaCl à mácula densa",
      "Hipervolemia com hipertensão arterial severa",
      "Ingestão maciça de cloreto de sódio alimentar",
      "Inibição completa do sistema nervoso autônomo"
    ],
    correctIndex: 0,
    explanation: "Três estímulos primários ativam a liberação de renina pelas células justaglomerulares: 1) Hipotensão na arteríola aferente (barorreceptor renal intrínseco); 2) Estímulo simpático via nervos renais atuando em receptores beta-1 adrenérgicos; e 3) Queda da concentração ou fluxo de NaCl na mácula densa (sinalizando hipovolemia sistêmica).",
    officialReference: "Guyton & Hall, Cap. 19; Silverthorn, Cap. 20",
    keyTakeaway: "3 gatilhos da renina: baixa pressão na aferente, estímulo simpático beta-1 e pouco NaCl na mácula densa."
  },
  {
    id: "exc-62",
    subjectId: "excretor",
    subtopic: "Peptídeo Natriurético Atrial (ANP)",
    difficulty: "Médio",
    question: "O Peptídeo Natriurético Atrial (ANP), secretado pelos miócitos atriais em resposta à sobrecarga volêmica e estiramento das câmaras cardíacas, promove natriurese e diurese porque:",
    options: [
      "Dilata a arteríola aferente e contrai a arteríola eferente (aumentando a TFG) e inibe a secreção de renina e aldosterona",
      "Fecha os poros de aquaporina no túbulo proximal",
      "Estimula a retenção de sódio e água pelo ducto coletor",
      "Reduz a frequência cardíaca para menos de 30 bpm"
    ],
    correctIndex: 0,
    explanation: "O ANP atua como um potente antagonista do sistema renina-angiotensina-aldosterona. Ele se liga a receptores acoplados a guanilato ciclase (aumento de GMPc), causando dilatação da arteríola aferente e constrição da eferente (aumenta a pressão intraglomerular e a filtração de Na+) e inibe a reabsorção de Na+ no ducto coletor medular, excretando o excesso de líquido.",
    officialReference: "Guyton & Hall, Cap. 29; Silverthorn, Cap. 20",
    keyTakeaway: "ANP eleva a TFG (dilata aferente / contrai eferente) e bloqueia a aldosterona para eliminar Na+ e água."
  },
  {
    id: "exc-63",
    subjectId: "excretor",
    subtopic: "Depuração Renal e Medição da TFG",
    difficulty: "Difícil",
    question: "O polissacarídeo vegetal inulina é considerado o padrão-ouro biológico para a medição precisa da Taxa de Filtração Glomerular (TFG) porque:",
    options: [
      "É livremente filtrado pelos capilares glomerulares e não sofre nenhuma reabsorção, secreção, metabolismo ou síntese tubular pelos rins",
      "É transportado ativamente por todas as células do néfron",
      "Se liga covalentemente à albumina sérica",
      "Transforma-se em ureia no córtex renal"
    ],
    correctIndex: 0,
    explanation: "A substância ideal para medir a TFG deve ter um clearance (depuração) idêntico à taxa de filtração: a quantidade filtrada por minuto (TFG x concentração plasmática P) deve ser exatamente igual à quantidade excretada na urina (fluxo urinário V x concentração urinária U). A inulina atende com perfeição a esse critério: Clearance de Inulina = TFG.",
    officialReference: "Guyton & Hall, Cap. 27; Silverthorn, Cap. 19",
    keyTakeaway: "Clearance de Inulina = TFG exata porque é filtrada livremente sem secreção ou reabsorção tubular."
  },
  {
    id: "exc-64",
    subjectId: "excretor",
    subtopic: "Medição do Fluxo Plasmático Renal",
    difficulty: "Difícil",
    question: "O Ácido Para-aminohipúrico (PAH) é utilizado na fisiologia renal para calcular o Fluxo Plasmático Renal Efetivo (FPR) porque:",
    options: [
      "Apresenta uma taxa de extração renal de quase 90%, sendo quase que totalmente filtrado e secretado pelos túbulos em uma única passagem pelo rim",
      "Não se dissolve na água corporal",
      "É metabolizado exclusivamente pelo fígado",
      "Aumenta a reabsorção de glicose para 100%"
    ],
    correctIndex: 0,
    explanation: "O PAH é filtrado no glomérulo (~20%) e o restante presente no sangue peritubular é ativamente secretado pelos transportadores de ânions orgânicos (OAT) do túbulo proximal, de modo que o sangue que deixa o rim pela veia renal está praticamente livre de PAH. Portanto, o Clearance de PAH reflete o Fluxo Plasmático Renal (~600 mL/min).",
    officialReference: "Guyton & Hall, Cap. 27; Boron & Boulpaep, Cap. 34",
    keyTakeaway: "Clearance de PAH mede o Fluxo Plasmático Renal porque é totalmente filtrado e secretado (extração ~90%)."
  },
  {
    id: "exc-65",
    subjectId: "excretor",
    subtopic: "Balanço Glomerulotubular",
    difficulty: "Médio",
    question: "O fenômeno intrínseco do Balanço Glomerulotubular renal consiste na capacidade do túbulo contorcido proximal de:",
    options: [
      "Manter uma fração percentual constante (~65-67%) de reabsorção de sódio e água mesmo diante de flutuações moderadas da TFG",
      "Eliminar 100% das proteínas filtradas na urina",
      "Interromper a filtração glomerular a cada hora",
      "Secretar potássio em troca direta de ureia pura"
    ],
    correctIndex: 0,
    explanation: "Se a TFG sobe de 120 para 150 mL/min, a filtração de Na+ e água aumenta. O balanço glomerulotubular garante que a reabsorção proximal aumente proporcionalmente, mantendo a taxa de reabsorção fixa em ~67%. Esse mecanismo baseia-se nas forças de Starling peritubulares (maior fração de filtração eleva a pressão oncótica nos capilares peritubulares, puxando mais líquido de volta).",
    officialReference: "Guyton & Hall, Cap. 27; Berne & Levy, Cap. 33",
    keyTakeaway: "Balanço glomerulotubular: o túbulo proximal reabsorve sempre a mesma fração (~67%) do filtrado."
  },
  {
    id: "exc-66",
    subjectId: "excretor",
    subtopic: "Reciclagem de Ureia e Hiperosmolaridade",
    difficulty: "Difícil",
    question: "A formação do gradiente hiperosmótico de 1.200 mOsm/L na medula renal profunda depende da reciclagem de ureia, que é estimulada pelo hormônio ADH através dos transportadores:",
    options: [
      "UT-A1 e UT-A3 na porção terminal do ducto coletor medular interno",
      "GLUT4 no córtex renal",
      "SGLT2 na alça de Henle",
      "Aquaporina 3 nos capilares glomerulares"
    ],
    correctIndex: 0,
    explanation: "A ureia responde por até 50% de toda a osmolaridade do interstício medular profundo. O hormônio antidiurético (ADH) ativa os transportadores de ureia facilitada UT-A1 e UT-A3 no ducto coletor medular interno, permitindo que a ureia concentrada saia para o interstício medular, onde se acumula e atrai água da alça de Henle descendente, concentrando a urina ao máximo.",
    officialReference: "Guyton & Hall, Cap. 28; Silverthorn, Cap. 20",
    keyTakeaway: "ADH ativa transportadores UT-A1/UT-A3 promovendo acúmulo medular de ureia e hiperosmolaridade."
  },
  {
    id: "exc-67",
    subjectId: "excretor",
    subtopic: "Regulação Renal do Cálcio e Fosfato",
    difficulty: "Médio",
    question: "O Paratormônio (PTH) regula o metabolismo mineral nos rins exercendo simultaneamente duas ações tubulares fundamentais:",
    options: [
      "Inibe a reabsorção de fosfato no túbulo proximal (promovendo fosfatúria) e estimula a reabsorção ativa de cálcio no túbulo distal (via canal TRPV5)",
      "Inibe a reabsorção de cálcio e retém fosfato ao máximo",
      "Bloqueia a ativação de vitamina D nos néfrons",
      "Provoca a excreção total de magnésio na bexiga"
    ],
    correctIndex: 0,
    explanation: "Para elevar o cálcio iônico sérico sem precipitar fosfato de cálcio insolúvel nos tecidos, o PTH internaliza os transportadores de fosfato NaPi-IIa no túbulo proximal (causando fosfatúria). Simultaneamente, o PTH abre canais apicais de Ca2+ TRPV5 no túbulo contorcido distal, reabsorvendo cálcio ativamente de volta ao sangue.",
    officialReference: "Guyton & Hall, Cap. 80; Silverthorn, Cap. 23",
    keyTakeaway: "PTH no rim: fosfatúrico no túbulo proximal e poupador de cálcio no túbulo distal."
  },
  {
    id: "exc-68",
    subjectId: "excretor",
    subtopic: "Ativação Renal da Vitamina D",
    difficulty: "Fácil",
    question: "A conversão do precursor circulante 25-hidroxivitamina D3 em sua forma hormonal ativa mais potente, o calcitriol (1,25-di-hidroxivitamina D3), ocorre nos rins pela enzima:",
    options: [
      "1-alfa-hidroxilase (CYP27B1) nas células do túbulo contorcido proximal, estimulada pelo paratormônio (PTH)",
      "Anidrase carbônica tipo IV",
      "Renina justaglomerular",
      "Pepsina tubular"
    ],
    correctIndex: 0,
    explanation: "O fígado produz a 25-OH-vitamina D3 (calcidiol). A etapa final e estritamente regulada de bioativação ocorre nos túbulos proximais renais através da enzima mitocondrial 1-alfa-hidroxilase, gerando o calcitriol (1,25-(OH)2-D3). Na doença renal crônica avançada, a perda de massa tubular proximal causa deficiência de calcitriol e hiperparatireoidismo secundário.",
    officialReference: "Guyton & Hall, Cap. 80; Silverthorn, Cap. 23",
    keyTakeaway: "1-alfa-hidroxilase no túbulo proximal renal ativa a vitamina D em calcitriol sob estímulo do PTH."
  },
  {
    id: "exc-69",
    subjectId: "excretor",
    subtopic: "Reflexo da Micção e Controle Autonômico",
    difficulty: "Médio",
    question: "O reflexo da micção envolve a coordenação de vias autonômicas e somáticas. O esvaziamento vesical ativo depende de:",
    options: [
      "Estímulo parassimpático sacral (nervo pélvico) que contrai o músculo detrusor da bexiga via receptores muscarínicos M3 e inibe o tônus do esfíncter uretral",
      "Estímulo simpático exclusivo contraindo o colo vesical",
      "Relaxamento do músculo detrusor mediado por dopamina",
      "Contração voluntária dos músculos abdominais sem participação nervosa vesical"
    ],
    correctIndex: 0,
    explanation: "O enchimento vesical ativa mecanorreceptores de estiramento na parede da bexiga, enviando aferências aos centros sacrais S2-S4 e ao centro pontino da micção. As eferências parassimpáticas pelo nervo pélvico liberam acetilcolina em receptores M3 do músculo detrusor, contraindo-o fortemente, enquanto o esfíncter interno liso relaxa e o esfíncter externo estriado (nervo pudendo) é voluntariamente relaxado.",
    officialReference: "Guyton & Hall, Cap. 26; Silverthorn, Cap. 19",
    keyTakeaway: "Micção: parassimpático sacral (receptores M3) contrai o músculo detrusor e relaxa esfíncteres."
  },
  {
    id: "exc-70",
    subjectId: "excretor",
    subtopic: "Continência Urinária e Inervação Simpática",
    difficulty: "Fácil",
    question: "Durante a fase de enchimento e continência urinária (armazenamento), o sistema nervoso simpático (via nervo hipogástrico) atua para:",
    options: [
      "Relaxar o músculo detrusor (receptores beta-3 adrenérgicos) e contrair o esfíncter uretral interno no colo vesical (receptores alfa-1 adrenérgicos)",
      "Esvaziar a bexiga involuntariamente a cada 100 mL",
      "Inibir a produção de urina pelos glomérulos",
      "Aumentar o tônus do músculo diafragma"
    ],
    correctIndex: 0,
    explanation: "Na fase de enchimento vesical, a dominância simpática (T11-L2) promove o armazenamento de urina sob baixa pressão: a noradrenalina ativa receptores beta-3 no corpo do detrusor, relaxando-o (acomodação complacente), e ativa receptores alfa-1 na base da bexiga e esfíncter uretral interno, mantendo-o firmemente fechado para impedir perdas involuntárias.",
    officialReference: "Guyton & Hall, Cap. 26; Goodman & Gilman, Cap. 12",
    keyTakeaway: "Continência simpática: beta-3 relaxa o detrusor e alfa-1 contrai o esfíncter interno."
  },
  {
    id: "exc-71",
    subjectId: "excretor",
    subtopic: "Multiplicação por Contracorrente",
    difficulty: "Difícil",
    question: "O mecanismo de multiplicação por contracorrente na alça de Henle, essencial para gerar o gradiente hiperosmolar na medula renal (até 1200 mOsm/L), baseia-se na seguinte propriedade do ramo espesso ascendente:",
    options: [
      "Transporte ativo vigoroso de solutos via cotransportador apical NKCC2 sem permeabilidade à água, diluindo o fluido tubular e hiperconcentrando o interstício medular",
      "Permeabilidade passiva exclusiva à água sem qualquer transporte iônico ativo",
      "Secreção primária ativa de ureia para o interior do lúmen glomerular",
      "Filtração livre de proteínas plasmáticas de alto peso molecular"
    ],
    correctIndex: 0,
    explanation: "O ramo descendente fino da alça de Henle é altamente permeável à água (aquaporina-1) e quase impermeável a solutos. Em contraste, o ramo ascendente espesso (TAL) é completamente impermeável à água e transporta ativamente Na+, K+ e 2Cl- para o interstício via cotransportador NKCC2. Esse transporte contínuo gera um gradiente transversal de ~200 mOsm/L que, multiplicado pelo fluxo em contracorrente, atinge até 1200 mOsm/L na papila renal profunda.",
    officialReference: "Guyton & Hall, Cap. 28; Eaton & Pooler - Vander's Renal Physiology",
    keyTakeaway: "Ramo ascendente espesso: reabsorve Na-K-2Cl (NKCC2) sem água = gera a hiperosmolaridade medular renal."
  },
  {
    id: "exc-72",
    subjectId: "excretor",
    subtopic: "Troca por Contracorrente nos Vasa Recta",
    difficulty: "Difícil",
    question: "Como os capilares peritubulares especializados da medula renal (Vasa Recta) preservam o gradiente hiperosmolar medular sem dissipá-lo pela circulação sanguínea?",
    options: [
      "Atuam como trocadores passivos por contracorrente em alça em U com baixo fluxo sanguíneo: ganham solutos e perdem água ao descer, e perdem solutos e ganham água ao subir de volta ao córtex",
      "Bombeiam ativamente todo o sódio medular para a veia cava inferior",
      "Possuem paredes impermeáveis de queratina que impedem trocas capilares",
      "Apresentam fluxo sanguíneo de altíssima velocidade para impedir a difusão de solutos"
    ],
    correctIndex: 0,
    explanation: "Os vasa recta formam alças capilares vasculares paralelas em U. À medida que o sangue desce para a medula hiperosmolar, ele capta solutos (NaCl e ureia) e perde água por osmose. Ao retornar e subir em direção ao córtex, o gradiente se inverte: solutos difundem de volta ao interstício e a água é reabsorvida para o sangue venoso. Esse mecanismo passivo de contracorrente retém os solutos na medula enquanto remove a água excedente reabsorvida dos túbulos coletores.",
    officialReference: "Guyton & Hall, Cap. 28; Silverthorn, Cap. 20",
    keyTakeaway: "Vasa recta em U funcionam como trocadores passivos por contracorrente que preservam o gradiente medular."
  },
  {
    id: "exc-73",
    subjectId: "excretor",
    subtopic: "Retroalimentação Tubuloglomerular (TGF)",
    difficulty: "Difícil",
    question: "Na Retroalimentação Tubuloglomerular (Tubuloglomerular Feedback - TGF), o aumento da taxa de filtração glomerular e da carga de NaCl que atinge a Mácula Densa do túbulo distal deflagra:",
    options: [
      "Maior influxo de NaCl via NKCC2 na mácula densa, liberação parácrina de ATP e adenosina (receptor A1) e vasoconstrição da arteríola aferente para reduzir a TFG de volta ao normal",
      "Vasodilatação maciça da arteríola eferente mediada por angiotensina II",
      "Descarga imediata de aldosterona no lúmen do túbulo contorcido proximal",
      "Inibição da secreção de potássio pelas células principais"
    ],
    correctIndex: 0,
    explanation: "A mácula densa funciona como um sensor de fluxo e concentração de cloreto de sódio. Quando a TFG sobe, o fluxo tubular excede a capacidade de reabsorção proximal e chega mais NaCl à mácula densa. A captação celular de Na+ e Cl- pelo NKCC2 acelera o consumo de ATP na bomba Na+/K+, promovendo a degradação e liberação intersticial de ATP e adenosina. A adenosina ativa receptores A1 nas células musculares lisas da arteríola aferente, provocando vasoconstrição que reduz o fluxo plasmático glomerular e normaliza a TFG.",
    officialReference: "Eaton & Pooler, Cap. 2; Guyton & Hall, Cap. 27",
    keyTakeaway: "Feedback Tubuloglomerular: excesso de NaCl na mácula densa libera adenosina/ATP -> contrai a arteríola aferente -> normaliza a TFG."
  },
  {
    id: "exc-74",
    subjectId: "excretor",
    subtopic: "Células Intercaladas no Equilíbrio Ácido-Base",
    difficulty: "Difícil",
    question: "Em resposta a um quadro de acidose metabólica sistêmica grave, as Células Intercaladas Tipo Alfa (A) do ducto coletor cortical atuam para:",
    options: [
      "Secretar íons H+ ativamente no lúmen urinário via H+-ATPase e H+/K+-ATPase apicais, enquanto reabsorvem bicarbonato novo (HCO3-) para o sangue via trocador basolateral AE1 (ânion exchanger 1)",
      "Secretar bicarbonato na urina via trocador apical pendrina",
      "Bloquear a reabsorção de água induzida pelo hormônio antidiurético",
      "Reabsorver íons amônio diretamente para a veia renal"
    ],
    correctIndex: 0,
    explanation: "As células intercaladas alfa são as células 'secretoras de ácido' do néfron distal. Em seu polo apical voltado para a urina, expressam bombas ativas primárias de prótons (H+-ATPase e H+/K+-ATPase) que secretam H+ contra gradientes químicos acentuados (acidificando a urina até pH 4,5). O HCO3- recém-gerado intracelularmente pela anidrase carbônica tipo II é devolvido à circulação sistêmica pelo trocador basolateral de cloreto-bicarbonato (AE1 / Band 3).",
    officialReference: "Guyton & Hall, Cap. 31; Koeppen & Stanton - Renal Physiology",
    keyTakeaway: "Células intercaladas Alfa: secretam H+ na urina (H+-ATPase apical) e devolvem HCO3- novo ao sangue (AE1 basolateral)."
  },
  {
    id: "exc-75",
    subjectId: "excretor",
    subtopic: "Amoniogênese e Bicarbonatogênese Renal",
    difficulty: "Difícil",
    question: "O principal mecanismo renal adaptativo de longo prazo para a excreção de grandes cargas de ácidos fixos e geração de bicarbonato novo reside na:",
    options: [
      "Metabolização de glutamina nas células tubulares proximais pela enzima glutaminase, gerando dois íons NH4+ (secretados na urina via NHE3) e dois novos íons HCO3- (reabsorvidos via cotransportador NBCe1)",
      "Degradação de ureia em amônia pela anidrase carbônica no espaço de Bowman",
      "Infiltração de leucócitos nos glomérulos para tamponamento mecânico",
      "Excreção passiva de ácido sulfúrico não dissociado pelas alças finas"
    ],
    correctIndex: 0,
    explanation: "Na acidose crônica, os rins aumentam dramaticamente a amoniogênese proximal. A captação de glutamina plasmática e seu catabolismo mitocondrial geram alfa-cetoglutarato e 2 moléculas de amônio (NH4+). A oxidação do alfa-cetoglutarato sintetiza 2 novas moléculas de HCO3-, que são transportadas para o sangue peritubular. O NH4+ substitui o H+ no transportador apical NHE3, sendo excretado na urina como 'acidez titulável/amônio' (principal forma de eliminação líquida de H+).",
    officialReference: "Guyton & Hall, Cap. 31; Costanzo, Cap. 7",
    keyTakeaway: "Amoniogênese: cada glutamina metabolizada no túbulo proximal gera 2 NH4+ excretados e 2 HCO3- novos no sangue."
  },
  {
    id: "exc-76",
    subjectId: "excretor",
    subtopic: "Fração de Excreção de Sódio (FeNa)",
    difficulty: "Médio",
    question: "No diagnóstico diferencial da Insuficiência Renal Aguda oligúrica, a Fração de Excreção de Sódio (FeNa = [Na_urina × Cr_plasma] / [Na_plasma × Cr_urina] × 100) inferior a 1% sugere tipicamente:",
    options: [
      "Injúria renal aguda pré-renal com néfrons e túbulos íntegros reabsorvendo avidamente sódio e água sob estímulo neuro-hormonal",
      "Necrose Tubular Aguda (NTA) isquêmica com destruição do epitélio tubular",
      "Nefrite intersticial alérgica induzida por antibióticos",
      "Obstrução urinária bilateral baixa (pós-renal)"
    ],
    correctIndex: 0,
    explanation: "Em estados pré-renais (desidratação, hemorragia, choque séptico inicial, insuficiência cardíaca), a hipoperfusão renal ativa intensamente o sistema renina-angiotensina-aldosterona e o simpático. Como as células tubulares estão intactas e viáveis, elas reabsorvem o máximo de sódio possível da urina, resultando em FeNa < 1% e Na urinário < 20 mEq/L. Na necrose tubular aguda (NTA intrínseca), os túbulos necrosados perdem a capacidade absortiva, elevando a FeNa tipicamente para > 2%.",
    officialReference: "Harrison - Medicina Interna, Cap. 304; Guyton & Hall, Cap. 32",
    keyTakeaway: "FeNa < 1% indica azotemia pré-renal (túbulos intactos poupando sódio); FeNa > 2% indica necrose tubular intrínseca."
  },
  {
    id: "exc-77",
    subjectId: "excretor",
    subtopic: "Vasopressina e Diabetes Insipidus",
    difficulty: "Médio",
    question: "Um paciente apresenta poliúria hipotônica maciça (8 litros de urina/dia com osmolaridade de 80 mOsm/kg) e polidipsia intensa. Ao receber o teste do análogo sintético da vasopressina (Desmopressina - dDAVP), sua osmolaridade urinária quadruplica para 450 mOsm/kg. Esse achado estabelece o diagnóstico fisiopatológico de:",
    options: [
      "Diabetes Insipidus Central (neurogênico), decorrente da falta de secreção hipotalâmica/neuro-hipofisária de ADH com receptores V2 renais normais",
      "Diabetes Insipidus Nefrogênico com mutação inativadora no receptor V2",
      "Polidipsia primária psicogênica sem resposta à desmopressina",
      "Diabetes mellitus tipo 1 descompensado com glicosúria"
    ],
    correctIndex: 0,
    explanation: "No Diabetes Insipidus Central, há deficiência na síntese ou secreção de vasopressina (ADH) pelos núcleos supraóptico e paraventricular do hipotálamo / neuro-hipófise. Os túbulos coletores renais expressam receptores V2 funcionais e saudáveis. Ao administrar o dDAVP exógeno, o receptor V2 é ativado, disparando a cascata da adenilato ciclase/PKA que transloca as vesículas de aquaporina-2 para a membrana apical, concentrando a urina com sucesso (>50% a 100% de aumento da osmolaridade). No DI nefrogênico, a resposta ao dDAVP é nula ou insignificante.",
    officialReference: "Harrison - Medicina Interna; Guyton & Hall, Cap. 29",
    keyTakeaway: "Diabetes Insipidus Central responde expressivamente à Desmopressina (dDAVP); o nefrogênico não responde."
  },
  {
    id: "exc-78",
    subjectId: "excretor",
    subtopic: "Homeostase de Cálcio e Fosfato pelo PTH",
    difficulty: "Difícil",
    question: "O Paratormônio (PTH) exerce ações combinadas essenciais nos túbulos renais para regular a calcemia e a fosfatemia. Essas ações consistem em:",
    options: [
      "Aumentar a reabsorção ativa de Ca2+ no túbulo contornado distal (via canais apicais TRPV5) e inibir a reabsorção de fosfato no túbulo proximal (endocitose dos cotransportadores NaPi-IIa), promovendo fosfatúria",
      "Inibir a reabsorção tubular de cálcio para provocar hipocalcemia controlada",
      "Estimular a retenção tubular de fosfato gerando cristais de hidroxiapatita urinária",
      "Bloquear a enzima 1-alfa-hidroxilase no interstício glomerular"
    ],
    correctIndex: 0,
    explanation: "O PTH atua nos rins de modo coordenado: 1) No túbulo contorcido distal, liga-se ao receptor PTH1R, ativa a PKA e estimula a abertura do canal apical TRPV5 e da calbindina-D28k, reabsorvendo cálcio e poupando-o da urina; 2) No túbulo proximal, inibe e promove a internalização dos transportadores de sódio-fosfato NaPi-IIa/IIc, impedindo a reabsorção de fosfato. A fosfatúria resultante evita que o cálcio reabsorvido se precipite em forma de fosfato de cálcio insolúvel nos tecidos moles.",
    officialReference: "Guyton & Hall, Cap. 80; Costanzo, Cap. 7",
    keyTakeaway: "PTH no rim: reabsorve cálcio no túbulo distal (TRPV5) e elimina fosfato no túbulo proximal (fosfatúria)."
  },
  {
    id: "exc-79",
    subjectId: "excretor",
    subtopic: "Eixo FGF23-Klotho no Fósforo",
    difficulty: "Difícil",
    question: "O Fator de Crescimento de Fibroblastos 23 (FGF23), sintetizado e secretado pelos osteócitos em resposta à sobrecarga de fosfato, atua nos túbulos renais que expressam o correceptor obrigatório alfa-Klotho para:",
    options: [
      "Induzir fosfatúria rápida pela remoção dos transportadores NaPi-IIa da membrana apical e suprimir a transcrição da enzima 1-alfa-hidroxilase (CYP27B1), reduzindo a síntese de calcitriol",
      "Estimular a absorção intestinal de fósforo mediada por calcitonina",
      "Elevar os níveis de PTH no soro em pacientes nefropatas terminais",
      "Impedir a filtração de albumina na barreira glomerular podocitária"
    ],
    correctIndex: 0,
    explanation: "O FGF23 é o principal hormônio fosfaturina do organismo. Ele se liga ao complexo receptor FGFR1-alfa-Klotho nas células do túbulo renal, disparando sinais intracelulares que retiram os transportadores NaPi-IIa e NaPi-IIc do bordo em escova, promovendo excreção urinária imediata de fosfato. Além disso, inibe a 1-alfa-hidroxilase e estimula a 24-hidroxilase (catabolizadora), reduzindo os níveis de vitamina D ativa para conter a absorção entérica de fosfato.",
    officialReference: "Silverthorn, Cap. 23; Harrison - Medicina Interna, Cap. 403",
    keyTakeaway: "FGF23 (com co-receptor Klotho) promove fosfatúria e suprime a ativação de vitamina D nos rins."
  },
  {
    id: "exc-80",
    subjectId: "excretor",
    subtopic: "Clearance Renal e Medida de Fluxos",
    difficulty: "Médio",
    question: "Por que a taxa de depuração plasmática (clearance) do polissacarídeo exógeno inulina é considerada o padrão-ouro biológico para a determinação da Taxa de Filtração Glomerular (TFG)?",
    options: [
      "Porque a inulina é livremente filtrada pelos capilares glomerulares e não sofre nenhuma reabsorção tubular, secreção tubular, síntese ou degradação pelos rins",
      "Porque a inulina é completamente secretada na arteríola eferente sem passar pelo glomérulo",
      "Porque ela se liga 100% às proteínas plasmáticas para ser transportada",
      "Porque sua concentração plasmática permanece idêntica à creatinina sérica"
    ],
    correctIndex: 0,
    explanation: "Para que o clearance de uma substância (C = [U_x × V] / P_x) seja exatamente idêntico à Taxa de Filtração Glomerular, a substância deve atender a critérios fisiológicos rigorosos: 1) Filtração glomerular totalmente livre; 2) Ausência completa de reabsorção pelo epitélio tubular; 3) Ausência de secreção tubular ativa; 4) Ser metabolicamente inerte e atóxica. A inulina preenche perfeitamente todos esses requisitos (quantidade filtrada = quantidade excretada na urina).",
    officialReference: "Guyton & Hall, Cap. 27; Eaton & Pooler, Cap. 3",
    keyTakeaway: "Clearance de Inulina = TFG padrão-ouro (filtrada livremente, nem reabsorvida nem secretada pelos túbulos)."
  },
  {
    id: "exc-81",
    subjectId: "excretor",
    subtopic: "Acidoses Tubulares Renais (ATR)",
    difficulty: "Difícil",
    question: "A Acidose Tubular Renal Tipo 1 (Distal) caracteriza-se fisiopatologicamente por:",
    options: [
      "Incapacidade das células intercaladas alfa do ducto coletor de secretar adequadamente H+ na urina, resultando em acidose metabólica hiperclorêmica com gap aniônico sérico normal e pH urinário persistentemente alcalino (>5,5)",
      "Perda maciça de bicarbonato no túbulo proximal com pH urinário ácido inferior a 4,5",
      "Resistência periférica absoluta à ação do hormônio paratormônio na alça de Henle",
      "Ausência congênita de arteríolas aferentes e eferentes nos rins"
    ],
    correctIndex: 0,
    explanation: "Na ATR Tipo 1 (distal), há falha primária na secreção tubular de prótons pelas bombas de H+-ATPase ou pelo trocador basolateral AE1 das células intercaladas do ducto coletor. Como os rins não conseguem acidificar a urina mesmo em vigência de acidose sistêmica grave, o pH urinário permanece inapropriadamente elevado (>5,5). A retenção de H+ reduz a reabsorção de cálcio e citrato, favorecendo nefrocalcinose e litíase renal recorrente por cálculo de fosfato de cálcio.",
    officialReference: "Harrison, Cap. 316; Guyton & Hall, Cap. 31",
    keyTakeaway: "ATR Tipo 1 (distal): defeito na secreção de H+ no duto coletor; cursa com acidose sistêmica e pH urinário > 5,5."
  },
  {
    id: "exc-82",
    subjectId: "excretor",
    subtopic: "Diuréticos de Alça e Potencial Transepiteliar",
    difficulty: "Difícil",
    question: "Por que os diuréticos de alça (como a furosemida) induzem intensa excreção urinária de cálcio e magnésio (hipercalciúria e hipermagnesiúria), enquanto os tiazídicos reduzem a calciúria?",
    options: [
      "A furosemida inibe o cotransportador NKCC2, colapsando a reciclagem apical de K+ via canais ROMK e abolindo o potencial elétrico transepiteliar luz-positivo (+8 a +10 mV) que impulsiona a reabsorção paracelular de Ca2+ e Mg2+",
      "A furosemida destrói diretamente as membranas celulares do ducto coletor",
      "Os tiazídicos aumentam a secreção glomerular de fósforo na urina",
      "A furosemida bloqueia os receptores de PTH nas células principais"
    ],
    correctIndex: 0,
    explanation: "No ramo espesso da alça de Henle, o cotransporte de Na-K-2Cl pelo NKCC2 é acompanhado pelo efluxo de K+ de volta para o lúmen através de canais ROMK. Essa retroalimentação gera um lúmen tubular positivamente carregado (+8 a +10 mV) em relação ao interstício, que repele eletrostaticamente cátions divalentes (Ca2+ e Mg2+), forçando-os a serem reabsorvidos pela via paracelular mediada por paracelina-1 (claudina-16/19). A furosemida bloqueia o NKCC2, anula essa voltagem positiva e impede a reabsorção de Ca2+ e Mg2+.",
    officialReference: "Goodman & Gilman, Cap. 25; Guyton & Hall, Cap. 32",
    keyTakeaway: "Furosemida bloqueia NKCC2 -> abole potencial transepiteliar luz-positivo -> inibe reabsorção paracelular de Ca e Mg."
  },
  {
    id: "exc-83",
    subjectId: "excretor",
    subtopic: "Diuréticos Tiazídicos e Calciúria",
    difficulty: "Médio",
    question: "Os diuréticos tiazídicos (como a hidroclorotiazida e clortalidona) atuam no Túbulo Contorcido Distal inibindo o cotransportador apical NaCl (NCC). Esse bloqueio promove redução da excreção de cálcio (hipocalciúria) porque:",
    options: [
      "A queda do Na+ intracelular acelera a atividade do trocador basolateral 3Na+/Ca2+ (NCX1), reduzindo a concentração citosólica de Ca2+ e acelerando a entrada de Ca2+ pelo canal apical TRPV5",
      "Os tiazídicos precipitam o cálcio em forma de cristais proteicos nos cálices renais",
      "Estimulam a liberação de vasopressina que sequestra o cálcio nos eritrócitos",
      "Convertem o bicarbonato luminal em cristais insolúveis de oxalato"
    ],
    correctIndex: 0,
    explanation: "Ao inibir o cotransportador NCC no polo apical do túbulo contorcido distal, a entrada de Na+ na célula diminui, reduzindo a concentração citosólica de sódio. Isso amplifica o gradiente para o trocador basolateral Na+/Ca2+ (NCX1), que exporta Ca2+ para o sangue peritubular em troca de Na+. A consequente diminuição do Ca2+ livre no citosol aumenta a força motriz para a entrada apical de Ca2+ pelo canal TRPV5, elevando a reabsorção de cálcio e diminuindo o cálcio urinário (útil na prevenção de litíase por hipercalciúria idiopática).",
    officialReference: "Goodman & Gilman - As Bases Farmacológicas da Terapêutica; Costanzo, Cap. 7",
    keyTakeaway: "Tiazídicos inibem NCC no TCD -> ativam trocador basolateral Na+/Ca2+ -> aumentam reabsorção e reduzem cálcio na urina."
  },
  {
    id: "exc-84",
    subjectId: "excretor",
    subtopic: "Tubulopatias Hereditárias - Bartter vs Gitelman",
    difficulty: "Difícil",
    question: "A Síndrome de Gitelman e a Síndrome de Bartter são tubulopatias genéticas que cursam com alcalose metabólica hipocalêmica e pressão arterial normal ou baixa. A diferenciação laboratorial clássica entre elas dá-se por:",
    options: [
      "A Síndrome de Gitelman (defeito no cotransportador NCC do túbulo distal) cursa com hipocalciúria e hipomagnesemia profunda, enquanto a Síndrome de Bartter (defeito no NKCC2/ROMK da alça de Henle) cursa com calciúria normal ou hipercalciúria",
      "A Síndrome de Bartter cursa com acidose metabólica hiperclorêmica grave",
      "A Síndrome de Gitelman cursa com hipertensão arterial renovascular maligna",
      "Ambas apresentam ausência total de aldosterona no plasma"
    ],
    correctIndex: 0,
    explanation: "A Síndrome de Bartter mimetiza o uso crônico de furosemida (mutação no NKCC2, ROMK ou canais de Cl- na alça de Henle), cursando com perda de sal, hipercalciúria e nefrocalcinose. A Síndrome de Gitelman mimetiza o uso crônico de tiazídicos (mutação no cotransportador NCC do túbulo distal), apresentando hipocalciúria característica (reabsorção aumentada de cálcio no TCD) associada a hipomagnesemia acentuada.",
    officialReference: "Harrison - Medicina Interna, Cap. 316; Eaton & Pooler, Cap. 6",
    keyTakeaway: "Gitelman mimetiza tiazídico (hipocalciúria e hipomagnesemia); Bartter mimetiza furosemida (hipercalciúria)."
  },
  {
    id: "exc-85",
    subjectId: "excretor",
    subtopic: "Barreira de Filtração Glomerular e Podócitos",
    difficulty: "Difícil",
    question: "Na barreira de filtração glomerular, a barreira de fenda (slit diaphragm) localizada entre os pedicelos dos podócitos é formada por um complexo proteico multiproteico ancorado no citoesqueleto. A proteína transmembrana fundamental desse diafragma cuja mutação genética acarreta proteinúria nefrótica congênita maciça é a:",
    options: [
      "Nefrina (NPHS1), que interage com a Podocina (NPHS2) e filamentos de actina",
      "Albuminase tipo B",
      "Queratina tubular glomerular",
      "Mioglobina renal podocitária"
    ],
    correctIndex: 0,
    explanation: "A barreira de filtração glomerular é composta por: 1) Endotélio fenestrado capilar (recoberto por glicocálice aniônico); 2) Membrana basal glomerular (colágeno tipo IV, laminina e proteoglicanos de heparan sulfato ricos em cargas negativas); 3) Fendas de filtração entre os pedicelos dos podócitos, interligadas pelo diafragma de fenda composto por Nefrina (NPHS1) e Podocina (NPHS2). Mutações na nefrina causam a Síndrome Nefrótica Congênita do Tipo Finlandês com proteinúria maciça precoce.",
    officialReference: "Robbins & Cotran - Patologia Estrutural e Funcional, Cap. 20; Guyton & Hall, Cap. 27",
    keyTakeaway: "Nefrina e Podocina estruturam o diafragma de fenda podocitário; mutações destroem a barreira e causam proteinúria maciça."
  }
];

