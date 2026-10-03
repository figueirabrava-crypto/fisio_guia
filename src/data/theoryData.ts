import { SubjectId } from "../types";

export interface TheoryStep {
  step: number;
  title: string;
  description: string;
  molecularDetail?: string;
}

export interface TheorySubtopic {
  id: string;
  title: string;
  badge: string;
  summary: string;
  fullExplanation: string;
  steps?: TheoryStep[];
  keyFormula?: {
    formula: string;
    meaning: string;
    variables: { symbol: string; desc: string }[];
  };
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  clinicalPearl: string;
  examTip: string;
  relatedQuestionSubtopic?: string;
}

export interface SubjectTheory {
  subjectId: SubjectId;
  mainIntroduction: string;
  learningObjectives: string[];
  subtopics: TheorySubtopic[];
  quickSummaryTable: {
    title: string;
    headers: string[];
    rows: string[][];
  };
}

export const THEORY_DATABASE: Record<string, SubjectTheory> = {
  "fisiologia-celular": {
    subjectId: "fisiologia-celular",
    mainIntroduction:
      "A Fisiologia Celular estabelece as bases físico-químicas de todos os sistemas orgânicos. Compreende o transporte através da bicamada lipídica, a bioenergética mitocondrial, a manutenção do potencial elétrico transmembrana e as vias de transdução de sinais intracelulares.",
    learningObjectives: [
      "Compreender a diferença cinética e energética entre transporte passivo e ativo",
      "Dominar o mecanismo molecular da Bomba de Na+/K+ ATPase e sua importância osmótica",
      "Calcular e interpretar o Potencial de Repouso e o Equilíbrio de Nernst",
      "Entender a cascata de fosforilação oxidativa mitocondrial e produção de ATP",
      "Distinguir as vias de sinalização de segundos mensageiros (AMPc, IP3/DAG e Ca2+)",
    ],
    quickSummaryTable: {
      title: "Resumo Comparativo de Mecanismos de Transporte de Membrana",
      headers: ["Tipo de Transporte", "Gasto de Energia", "Sentido do Fluxo", "Proteína Carreadora?", "Exemplo Fisiológico"],
      rows: [
        ["Difusão Simples", "Não (Passivo)", "A favor do gradiente", "Não necessária", "Gases (O2, CO2), lipídios, anestésicos"],
        ["Difusão Facilitada", "Não (Passivo)", "A favor do gradiente", "Sim (canais/carreadores)", "Glicose via GLUT, água via Aquaporinas"],
        ["Transporte Ativo 1º", "Sim (Hidrólise direta de ATP)", "Contra o gradiente", "Sim (Bombas ATPase)", "Bomba Na+/K+ ATPase, Ca2+ ATPase (SERCA)"],
        ["Transporte Ativo 2º", "Indireto (usa gradiente de Na+)", "Contra o gradiente acoplado", "Sim (Simporte/Antiporte)", "SGLT-1 (Na+/Glicose), Trocador Na+/Ca2+"],
        ["Osmose", "Não (Pressão osmótica)", "Menor para maior osmolaridade", "Aquaporinas / Membrana", "Regulação do volume celular"],
      ],
    },
    subtopics: [
      {
        id: "fc-transporte",
        title: "1. Transporte Através da Membrana Plasmática",
        badge: "Transporte & Permeabilidade",
        summary: "A membrana celular é uma bicamada de fosfolipídios anfipáticos semipermeável. Moléculas lipossolúveis e pequenos gases apolares atravessam livremente, enquanto íons e solutos polares dependem de canais ou proteínas carreadoras.",
        fullExplanation: `A membrana plasmática segue o modelo do mosaico fluido de Singer e Nicolson. A bicamada lipídica é composta primariamente por fosfolipídios, colesterol (que confere estabilidade mecânica e modula a fluidez) e glicolipídios.

1. Difusão Simples: Ocorre de acordo com a Lei de Fick. A taxa de difusão é diretamente proporcional à área da membrana, ao coeficiente de partição óleo/água e à diferença de concentração, e inversamente proporcional à espessura da membrana.

2. Difusão Facilitada: Utiliza carreadores com cinética de saturação (Vmax). Exemplo clássico: transporte de glicose em adipócitos e miócitos via transportadores GLUT-4 estimulados pela insulina.

3. Transporte Ativo Primário (Bomba Na+/K+ ATPase): É uma proteína eletrogênica fundamental que consome aproximadamente 30% a 40% da energia basal de uma célula. A cada ciclo catalítico, hidrolisa 1 molécula de ATP, expulsa 3 íons Na+ para o meio extracelular e internaliza 2 íons K+ para o citoplasma. Isso gera um gradiente de concentração acentuado ([Na+] extracelular ~142 mEq/L vs intracelular ~10-14 mEq/L; [K+] intracelular ~140 mEq/L vs extracelular ~4 mEq/L).

4. Transporte Ativo Secundário: Utiliza a energia potencial acumulada no gradiente de Na+ gerado pela bomba. Se o soluto se move na mesma direção do sódio, chama-se cotransporte ou simporte (ex: SGLT-1 intestinal e renal). Se o soluto se move na direção oposta, chama-se contratransporte ou antiporte (ex: trocador Na+/H+ no néfron).`,
        steps: [
          {
            step: 1,
            title: "Ligação Intracelular de 3 Na+",
            description: "No estado de conformação E1 aberto para o citosol, 3 íons Na+ ligam-se aos sítios de alta afinidade da bomba.",
            molecularDetail: "Afinidade citoplasmática alta para Na+ e baixa para K+.",
          },
          {
            step: 2,
            title: "Fosforilação e Mudança Conformacional",
            description: "A hidrólise de 1 ATP transfere um grupo fosfato para um resíduo de aspartato da enzima, induzindo a conformação E2.",
            molecularDetail: "A conformação E2 abre a face externa da bomba para o fluido extracelular.",
          },
          {
            step: 3,
            title: "Liberação de Na+ e Ligação de 2 K+",
            description: "Os 3 Na+ perdem afinidade e são liberados no líquido extracelular; 2 íons K+ ligam-se aos sítios externos.",
            molecularDetail: "Na conformação E2, a afinidade por Na+ cai drasticamente e a afinidade por K+ atinge o pico.",
          },
          {
            step: 4,
            title: "Desfosforilação e Retorno a E1",
            description: "A liberação do fosfato inorgânico faz a bomba retornar à conformação original E1, liberando os 2 K+ no citoplasma.",
            molecularDetail: "Restaura o ciclo para um novo influxo de ATP.",
          },
        ],
        keyFormula: {
          formula: "J = -D · A · (ΔC / Δx)",
          meaning: "Lei de Fick para Difusão Simples através da membrana biológica.",
          variables: [
            { symbol: "J", desc: "Taxa líquida de difusão de soluto (fluxo molar por unidade de tempo)" },
            { symbol: "D", desc: "Coeficiente de difusão do soluto na membrana" },
            { symbol: "A", desc: "Área de superfície da membrana disponível" },
            { symbol: "ΔC / Δx", desc: "Gradiente de concentração dividido pela espessura da membrana" },
          ],
        },
        clinicalPearl: "O fármaco digitálico Digoxina inibe especificamente a Bomba Na+/K+ ATPase miocárdica. Ao diminuir o bombeamento de Na+, aumenta a concentração intracelular de Na+, o que reduz a atividade do trocador Na+/Ca2+, acumulando Ca2+ no citoplasma e aumentando a força de contração cardíaca (efeito inotrópico positivo na Insuficiência Cardíaca).",
        examTip: "Atenção em provas: A Bomba de Na+/K+ ATPase é eletrogênica porque bombeia 3 cargas positivas para fora e apenas 2 para dentro, gerando uma pequena negatividade direta (~ -4 a -10 mV), mas sua função mais crucial é manter o gradiente que permite o funcionamento dos canais de vazamento de potássio.",
        relatedQuestionSubtopic: "Transporte de Membrana e Bomba Na+/K+",
      },
      {
        id: "fc-potencial",
        title: "2. Potencial de Repouso de Membrana e Bioeletrogênese",
        badge: "Biofísica Celular",
        summary: "Todas as células vivas possuem uma diferença de potencial elétrico através de sua membrana plasmática, com o interior negativo em relação ao exterior. Nas células excitáveis (neurônios e fibras musculares), varia de -70 mV a -90 mV.",
        fullExplanation: `O potencial de membrana em repouso (PMR) resulta de dois fatores primordiais:
1. Gradiente de concentração iônico gerado pela bomba Na+/K+ ATPase.
2. Permeabilidade seletiva da membrana em repouso: em repouso, a membrana é aproximadamente 50 a 100 vezes mais permeável ao potássio (K+) do que ao sódio (Na+), devido à presença de canais de potássio de vazamento constitutivamente abertos (canais Kir / K2P).

O íon K+, estando altamente concentrado no interior da célula (~140 mEq/L vs 4 mEq/L fora), tende a sair por difusão passiva. Conforme as cargas positivas de K+ saem, deixam para trás ânions proteicos não difusíveis carregados negativamente (polipeptídeos, fosfatos, sulfatos), criando um campo elétrico negativo no interior.

Quando a força elétrica atrativa para o interior se iguala exatamente à força química de difusão para o exterior, atinge-se o Potencial de Equilíbrio Eletroquímico de Nernst do Potássio (EK ~ -90 mV). Como há também um pequeno influxo basal de Na+ e Cl-, o potencial de repouso real neuronal estabiliza-se em cerca de -70 mV, conforme calculado pela Equação de Goldman-Hodgkin-Katz.`,
        keyFormula: {
          formula: "E_íon = (61,5 / z) · log10([íon]_extracelular / [íon]_intracelular)",
          meaning: "Equação de Nernst para o potencial de equilíbrio a 37°C em mamíferos.",
          variables: [
            { symbol: "E_íon", desc: "Potencial de equilíbrio eletroquímico do íon em milivolts (mV)" },
            { symbol: "z", desc: "Valência do íon (+1 para Na+ e K+; +2 para Ca2+; -1 para Cl-)" },
            { symbol: "[íon]_ext", desc: "Concentração do íon no líquido extracelular (mEq/L)" },
            { symbol: "[íon]_int", desc: "Concentração do íon no citosol intracelular (mEq/L)" },
          ],
        },
        clinicalPearl: "A hipercalemia (aumento do potássio plasmático extracelular de 4 para >6 mEq/L) diminui o gradiente de concentração de K+, tornando o potencial de repouso menos negativo (despolarização parcial constante). Isso inativa canais de Na+ dependentes de voltagem por refratariedade e pode causar parada cardíaca em diástole, sendo uma das emergências médicas mais graves.",
        examTip: "Se uma questão perguntar qual íon é o principal determinante do potencial de repouso da membrana, a resposta é invariavelmente o POTÁSSIO (K+), devido à sua altíssima condutância em repouso.",
        relatedQuestionSubtopic: "Potencial de Repouso e Canais Iônicos",
      },
      {
        id: "fc-metabolismo",
        title: "3. Bioenergética Mitocondrial e Síntese de ATP",
        badge: "Metabolismo Celular",
        summary: "A mitocôndria atua como a usina de força da célula eucariótica. A oxidação completa de uma molécula de glicose produz entre 30 e 32 equivalentes de ATP através da glicólise citosólica, ciclo de Krebs na matriz mitocondrial e fosforilação oxidativa.",
        fullExplanation: `O metabolismo energético celular ocorre em etapas perfeitamente coordenadas:

1. Glicólise Citosólica: Ocorre no citoplasma sem consumo de O2. Uma molécula de glicose (6 carbonos) é convertida em 2 moléculas de piruvato (3 carbonos), gerando um saldo líquido de 2 ATP (fosforilação em nível de substrato) e 2 NADH.

2. Descarboxilação Oxidativa do Piruvato: O piruvato entra na matriz mitocondrial e é convertido em Acetil-CoA pelo complexo piruvato desidrogenase, gerando 1 NADH e liberando CO2 por piruvato.

3. Ciclo do Ácido Cítrico (Ciclo de Krebs): Ocorre na matriz mitocondrial. O Acetil-CoA combina-se com oxaloacetato formando citrato. Por volta do ciclo, são produzidos 3 NADH, 1 FADH2, 1 GTP (convertido em ATP) e 2 CO2.

4. Cadeia Respiratória e Fosforilação Oxidativa: Na crista mitocondrial interna, os complexos proteicos I, II, III e IV transportam elétrons até o O2 (o aceptor final, que se reduz a H2O). Conforme os elétrons fluem, prótons (H+) são bombeados da matriz para o espaço intermembranas, criando um forte gradiente eletroquímico de prótons (força próton-motriz). Esse gradiente aciona a enzima ATP Sintase (Complexo V), que gira mecanicamente fosforilando ADP + Pi em ATP.`,
        comparisonTable: {
          headers: ["Etapa Metabólica", "Localização Celular", "Dependência de O2", "Rendimento Energético"],
          rows: [
            ["Glicólise", "Citoplasma / Citosol", "Anaeróbica", "2 ATP líquidos + 2 NADH"],
            ["Formação de Acetil-CoA", "Matriz Mitocondrial", "Aeróbica indireta", "2 NADH (por glicose)"],
            ["Ciclo de Krebs", "Matriz Mitocondrial", "Aeróbica indireta", "2 ATP/GTP + 6 NADH + 2 FADH2"],
            ["Fosforilação Oxidativa", "Membrana Mitocondrial Interna", "Aeróbica estrita (O2 aceptor)", "~26 a 28 ATPs via ATP sintase"],
          ],
        },
        clinicalPearl: "O cianeto e o monóxido de carbono (CO) ligam-se e inibem irreversivelmente a Citocromo c Oxidase (Complexo IV da cadeia respiratória). Isso interrompe o fluxo de elétrons, zera a síntese aeróbica de ATP e causa acidose láctica letal em minutos, pois a célula é forçada a recorrer à glicólise anaeróbica ineficaz.",
        examTip: "O oxigênio (O2) que respiramos atua exclusivamente como o ACEPTOR FINAL DE ELÉTRONS na cadeia respiratória, unindo-se a prótons H+ para formar água metabólica (H2O). Ele NÃO é transformado diretamente em CO2 (o CO2 vem da descarboxilação do ciclo de Krebs).",
        relatedQuestionSubtopic: "Mitocôndria e Bioenergética Celular",
      },
      {
        id: "fc-sinalizacao",
        title: "4. Sinalização Celular e Vias de Segundos Mensageiros",
        badge: "Receptores & Mensageiros",
        summary: "A comunicação celular depende de primeiros mensageiros (hormônios, neurotransmissores) que ativam receptores de membrana, desencadeando a síntese de segundos mensageiros intracelulares amplificadores de sinal.",
        fullExplanation: `Os receptores mais abundantes no corpo humano são os Receptores Acoplados à Proteína G (GPCRs), que possuem 7 domínios transmembranares:

1. Via Gs (Estimulatória): A subunidade alfa-s ativa a enzima Adenilil Ciclase, que converte ATP em AMP cíclico (AMPc). O AMPc ativa a Proteína Quinase A (PKA), que fosforila enzimas-chave e fatores de transcrição (CREB). Exemplo: Receptores Beta-1 adrenérgicos no coração (aumentam frequência e força de contração).

2. Via Gi (Inibitória): A subunidade alfa-i inibe a Adenilil Ciclase, diminuindo os níveis de AMPc intracelular. Exemplo: Receptores Alfa-2 adrenérgicos e receptores muscarínicos M2 no nó sinoatrial cardíaco (reduzem batimentos).

3. Via Gq (Fosfolipase C): A subunidade alfa-q ativa a Fosfolipase C-beta (PLC), que cliva o fosfolipídio de membrana PIP2 em dois mensageiros:
   - IP3 (Inositol 1,4,5-trifosfato): Solúvel em água, difunde-se até o Retículo Endoplasmático/Sarcoplasmático, ligando-se a canais de cálcio e promovendo rápida liberação de Ca2+ no citosol.
   - DAG (Diacilglicerol): Permanece na membrana lipídica e, junto com o Ca2+, ativa a Proteína Quinase C (PKC).
Exemplo: Receptores Alfa-1 adrenérgicos nos vasos (provocam vasoconstrição arteriolar).`,
        clinicalPearl: "A Toxina da Cólera (Vibrio cholerae) modifica a subunidade alfa da proteína Gs, impedindo que ela hidrolise seu GTP. A Gs permanece travada no estado 'ligado' indefinidamente, gerando produção maciça e incontrolável de AMPc nos enterócitos. Isso ativa o canal CFTR de cloreto, expulsando Cl-, Na+ e grandes volumes de água para a luz intestinal, gerando diarreia aquosa letal ('água de arroz').",
        examTip: "Mnemônica clássica para receptores adrenérgicos: Q-I-S-S (Alfa-1 = Gq; Alfa-2 = Gi; Beta-1 = Gs; Beta-2 = Gs).",
        relatedQuestionSubtopic: "Comunicação Celular e Sinalização",
      },
    ],
  },

  neurofisiologia: {
    subjectId: "neurofisiologia",
    mainIntroduction:
      "A Neurofisiologia desvenda os mecanismos de excitabilidade, transmissão sináptica, integração e controle do sistema nervoso central e periférico. Explica desde o milissegundo de um potencial de ação até os reflexos autonômicos e a coordenação motora fina.",
    learningObjectives: [
      "Explicar as fases do Potencial de Ação neuronal e a cinética de canais de Na+ e K+",
      "Distinguir período refratário absoluto de relativo e compreender a condução saltatória",
      "Descrever as etapas da transmissão sináptica química e ação de proteínas SNARE",
      "Diferenciar os neurotransmissores excitatórios (Glutamato, ACh) dos inibitórios (GABA, Glicina)",
      "Comparar a organização anatômica e receptores do Sistema Simpático vs Parassimpático",
    ],
    quickSummaryTable: {
      title: "Quadro Comparativo: Sistema Nervoso Autônomo Simpático vs Parassimpático",
      headers: ["Característica", "SNA Simpático (Luta ou Fuga)", "SNA Parassimpático (Repouso e Digestão)"],
      rows: [
        ["Origem Anatômica", "Toracolombar (medula T1 a L2)", "Craniossacral (Pares III, VII, IX, X + S2 a S4)"],
        ["Comprimento dos Neurônios", "Pré-ganglionar curto / Pós-ganglionar longo", "Pré-ganglionar longo / Pós-ganglionar curto (perto da víscera)"],
        ["Neurotransmissor Pré-ganglionar", "Acetilcolina (ativa receptores nicotínicos N2)", "Acetilcolina (ativa receptores nicotínicos N2)"],
        ["Neurotransmissor Pós-ganglionar", "Noradrenalina (ativa receptores Alfa e Beta)", "Acetilcolina (ativa receptores muscarínicos M1 a M5)"],
        ["Efeito no Olho / Pupila", "Midríase (dilatação pupilar por contração radial)", "Miose (constrição pupilar por músculo esfíncter)"],
        ["Efeito no Coração", "Taquicardia (↑ FC) e ↑ Contratilidade (receptores Beta-1)", "Bradicardia (↓ FC) via nervo vago (receptores M2)"],
        ["Efeito nos Brônquios", "Broncodilatação (receptores Beta-2)", "Broncoconstrição e hipersecreção (receptores M3)"],
        ["Efeito no Trato Digestório", "Diminui motilidade e fecha esfíncteres", "Aumenta motilidade, secreções e abre esfíncteres"],
      ],
    },
    subtopics: [
      {
        id: "nf-potencial-acao",
        title: "1. O Potencial de Ação: Dinâmica de Milissegundos",
        badge: "Bioeletrogênese",
        summary: "O potencial de ação é uma alteração regenerativa e transitória do potencial de membrana que se propaga sem atenuação ao longo de todo o axônio, seguindo o princípio do 'tudo ou nada'.",
        fullExplanation: `Quando um neurônio recebe despolarizações graduadas em seus dendritos que somam no cone de implantação axônico (zona de disparo) e atingem o limiar de excitação (~ -55 mV):

1. Fase de Despolarização Rápida: Atingir o limiar abre os portões de ativação (portão m) dos canais de Na+ dependentes de voltagem. O Na+ entra em cascata explosiva a favor do gradiente elétrico e químico, despolarizando a membrana até um pico positivo de cerca de +30 mV a +35 mV (overshoot).

2. Fase de Inativação e Repolarização: No pico do potencial (+30 mV), duas mudanças ocorrem simultaneamente:
   a) Os canais de Na+ fecham seu portão de inativação interno (portão h), cessando o influxo de sódio.
   b) Os canais de K+ dependentes de voltagem (de ativação retardada) finalmente se abrem, permitindo a saída massiva de K+ do citoplasma, restaurando a negatividade interna.

3. Hiperpolarização Pós-Potencial (Undershoot): Como os canais de K+ demoram a se fechar completamente, a membrana torna-se temporariamente mais negativa do que o repouso normal (chegando a -80 ou -85 mV), antes que os canais de vazamento e a bomba Na+/K+ restabeleçam os -70 mV.

4. Períodos Refratários:
   - Absoluto: Nenhum estímulo, por mais intenso que seja, pode gerar novo potencial de ação. Ocorre porque os canais de Na+ estão inativados (portão h fechado). Isso garante que o impulso viaje em sentido único unidirecional (ortodrômico).
   - Relativo: Um estímulo supra-limiar muito mais forte pode disparar um potencial, pois alguns canais de Na+ já recuperaram a conformação de repouso, embora canais de K+ ainda estejam abertos.`,
        steps: [
          { step: 1, title: "Estímulo e Limiar", description: "Potenciais pós-sinápticos despolarizam a membrana de -70 mV até atingir o limiar de disparo de -55 mV no cone axônico." },
          { step: 2, title: "Abertura dos Canais de Na+ (Despolarização)", description: "Influxo massivo de Na+ gera o pico do potencial de ação até +35 mV em menos de 1 milissegundo." },
          { step: 3, title: "Inativação do Na+ e Abertura do K+ (Repolarização)", description: "Portões de inativação do Na+ fecham; canais de K+ abrem e o efluxo de K+ restaura o potencial negativo." },
          { step: 4, title: "Hiperpolarização e Restauração", description: "Canais de K+ fecham lentamente, gerando breve hiperpolarização a -85 mV antes de voltar ao repouso de -70 mV." },
        ],
        clinicalPearl: "Anestésicos locais como a Lidocaína e Bupivacaína atuam bloqueando reversivelmente os canais de Na+ dependentes de voltagem a partir do lado interno da membrana. Sem a abertura dos canais de Na+, o potencial de ação não é gerado nas fibras nociceptivas (fibras C e A-delta), bloqueando a transmissão da dor sem alterar a consciência do paciente.",
        examTip: "A condução saltatória nos axônios mielinizados ocorre exclusivamente nos Nós de Ranvier (onde há altíssima densidade de canais de Na+). A mielina atua como isolante elétrico de alta resistência e baixa capacitância, aumentando a velocidade de condução em até 100 vezes com enorme economia de ATP.",
        relatedQuestionSubtopic: "Geração e Propagação do Potencial de Ação",
      },
      {
        id: "nf-sinapse",
        title: "2. Fisiologia da Sinapse Química e Neurotransmissores",
        badge: "Sinapses & Circuitos",
        summary: "A transmissão sináptica química converte um impulso elétrico axônico em um sinal químico liberado na fenda sináptica, gerando potenciais pós-sinápticos excitatórios (PEPS) ou inibitórios (PIPS).",
        fullExplanation: `Na terminação pré-sináptica, o potencial de ação promove as seguintes etapas:
1. Influxo de Cálcio: A despolarização abre canais de Ca2+ dependentes de voltagem (tipo N e P/Q). O Ca2+ extracelular entra rapidamente no botão sináptico.
2. Formação do Complexo SNARE: O Ca2+ liga-se à proteína sinaptotagmina nas vesículas sinápticas. A sinaptotagmina interage com as proteínas SNARE (sinaptobrevina na vesícula; sintaxina e SNAP-25 na membrana plasmática), forçando a fusão da vesícula e exocitose do neurotransmissor na fenda de 20 a 40 nm.
3. Ação Pós-Sináptica:
   - Receptores Ionotrópicos: São canais iônicos ativados por ligante de resposta ultrarrápida (ex: receptor nicotínico de acetilcolina, receptor GABA-A).
   - Receptores Metabotrópicos: São receptores acoplados à proteína G com cascatas enzimáticas mais lentas e duradouras (ex: receptores adrenérgicos, receptores muscarínicos, GABA-B).
4. Cessação do Sinal: Ocorre por recaptação pré-sináptica (ex: transportadores de serotonina e dopamina), degradação enzimática (ex: Acetilcolinesterase na junção neuromuscular) ou difusão lateral com absorção por astrócitos.`,
        clinicalPearl: "A Toxina Botulínica (Botox) cliva especificamente as proteínas SNARE (como SNAP-25 e sinaptobrevina) nos terminais colinérgicos da junção neuromuscular. Impedindo a liberação de acetilcolina, causa paralisia muscular flácida. Em doses controladas, trata espasticidade, enxaqueca crônica e rugas dinâmicas.",
        examTip: "O principal neurotransmissor excitatório do Sistema Nervoso Central humano é o GLUTAMATO (receptores AMPA e NMDA). O principal neurotransmissor inibitório cerebral é o GABA (que abre canais de Cloro hiperpolarizando o neurônio), enquanto na medula espinhal a GLICINA predomina.",
        relatedQuestionSubtopic: "Mecanismo da Sinapse Química e Neurotransmissores",
      },
    ],
  },

  cardiorrespiratorio: {
    subjectId: "cardiorrespiratorio",
    mainIntroduction:
      "A Fisiologia Cardiorrespiratória integra a bomba mecânica cardíaca, a circulação hemodinâmica e a troca gasosa pulmonar para fornecer oxigênio e nutrientes a todos os tecidos e remover o dióxido de carbono metabólico.",
    learningObjectives: [
      "Dominar todas as fases mecânicas e elétricas do Ciclo Cardíaco",
      "Correlacionar as ondas do ECG (P, QRS, T) com eventos elétricos atriais e ventriculares",
      "Calcular e relacionar Débito Cardíaco, Pressão Arterial e Resistência Vascular Periférica",
      "Entender a mecânica ventilatória, pressão intrapleural e o papel do surfactante",
      "Explicar a Hematose alveolar e os fatores que desviam a curva de dissociação da Hemoglobina (Efeito Bohr)",
    ],
    quickSummaryTable: {
      title: "Quadro Integrado das Fases do Ciclo Cardíaco Ventricular Esquerdo",
      headers: ["Fase do Ciclo", "Estado das Valvas AV (Mitral)", "Estado das Valvas Semilunares (Aórtica)", "Volume Ventricular", "Pressão Ventricular", "Som Auscultado"],
      rows: [
        ["Sístole Atrial", "Aberta", "Fechada", "Enche últimos 20-30%", "Baixa (5-8 mmHg)", "B4 (patológica se rígido)"],
        ["Contração Isovolumétrica", "Fechada (B1)", "Fechada", "Constante (Volume Diastólico Final)", "Sobe abruptamente", "B1 (fechamento mitral/tricúspide)"],
        ["Ejeção Rápida e Lenta", "Fechada", "Aberta", "Diminui bruscamente (ejeta ~70 mL)", "Pico máximo (120 mmHg)", "Nenhum som normal"],
        ["Relaxamento Isovolumétrico", "Fechada", "Fechada (B2)", "Constante (Volume Sistólico Final)", "Cai abruptamente", "B2 (fechamento aórtico/pulmonar)"],
        ["Enchimento Rápido / Lento", "Aberta", "Fechada", "Aumenta rapidamente (70% do volume)", "Muito baixa (próxima a 0)", "B3 (fisiológica em jovens, patológica se dilatação)"],
      ],
    },
    subtopics: [
      {
        id: "cr-eletrofisiologia",
        title: "1. Eletrofisiologia Cardíaca e Marcapasso Natural",
        badge: "Eletrofisiologia & ECG",
        summary: "O coração possui células musculares especializadas autoexcitáveis (nó sinoatrial) com automatismo intrínseco, que geram potenciais rítmicos propagados através do sistema His-Purkinje até os cardiomiócitos de trabalho.",
        fullExplanation: `O sistema elétrico cardíaco possui dois tipos fundamentais de potenciais de ação:

1. Potencial de Resposta Lenta (Nó Sinoatrial e Atrioventricular):
   - Fase 4 (Despolarização Diastólica Espontânea): As células do nó SA não possuem potencial de repouso estável. Elas possuem canais especiais chamados Canais Funny (If), que são ativados pela hiperpolarização e permitem entrada contínua de Na+ e Ca2+ (tipo T), despolarizando lentamente a célula até o limiar (-40 mV).
   - Fase 0 (Despolarização): Atingido o limiar, abrem-se canais de Ca2+ dependentes de voltagem tipo L (diferente do miocárdio de trabalho, que depende de Na+).
   - Fase 3 (Repolarização): Efluxo de K+ através de canais retificadores tardios.

2. Potencial de Resposta Rápida (Cardiomiócitos Ventriculares):
   - Fase 0: Despolarização abrupta por abertura dos canais rápidos de Na+ dependentes de voltagem.
   - Fase 1: Repolarização precoce breve por fechamento dos canais de Na+ e efluxo passageiro de K+ (Ito).
   - Fase 2 (Platô): Fase crucial e prolongada (~200 a 300 ms). Há equilíbrio entre o influxo sustentado de Ca2+ por canais tipo L e o efluxo de K+. Esse platô prolonga o período refratário do miocárdio, impedindo que o coração sofra tétano (contrações sustentadas que seriam fatais).
   - Fase 3: Repolarização final por efluxo predominante de K+.
   - Fase 4: Potencial de repouso estável em cerca de -90 mV.

3. O Eletrocardiograma (ECG):
   - Onda P: Despolarização atrial.
   - Intervalo PR: Tempo de condução do nó SA até o feixe de His através do nó AV (onde há atraso fisiológico benéfico de ~0,12s para permitir o enchimento ventricular completo).
   - Complexo QRS: Despolarização dos ventrículos (mascara a repolarização atrial).
   - Segmento ST e Onda T: Repolarização ventricular.`,
        keyFormula: {
          formula: "DC = FC · VS",
          meaning: "Débito Cardíaco (DC): volume de sangue ejetado por cada ventrículo a cada minuto.",
          variables: [
            { symbol: "DC", desc: "Débito Cardíaco (normal em repouso: ~5,0 Litros/minuto)" },
            { symbol: "FC", desc: "Frequência Cardíaca (normal em repouso: 60 a 100 bpm)" },
            { symbol: "VS", desc: "Volume Sistólico ejetado por batimento (normal: ~70 mL)" },
          ],
        },
        clinicalPearl: "O nó Atrioventricular (AV) é a única via elétrica normal entre átrios e ventrículos. Ele realiza um retardo fisiológico proposital de 0,09 a 0,12 segundos. Esse atraso é vital porque garante que os átrios terminem de se contrair e esvaziar todo o sangue dentro dos ventrículos ANTES que a sístole ventricular comece.",
        examTip: "Lembre-se da diferença fundamental: no nó sinoatrial o pico da despolarização (Fase 0) depende de CÁLCIO (Ca2+), enquanto no miocárdio ventricular a Fase 0 depende de SÓDIO (Na+).",
        relatedQuestionSubtopic: "Eletrofisiologia e Ciclo Cardíaco",
      },
      {
        id: "cr-mecanica-respiratoria",
        title: "2. Mecânica Ventilatória, Surfactante e Trocas Gasosas",
        badge: "Fisiologia Pulmonar",
        summary: "A ventilação pulmonar obedece à Lei de Boyle. O diafragma gera pressões subatmosféricas na cavidade torácica, expandindo os alvéolos onde a hematose ocorre por difusão simples através da fina barreira alvéolo-capilar.",
        fullExplanation: `A respiração humana divide-se em mecânica ventilatória e hematose:

1. Mecânica da Inspiração e Expiração:
   - Inspiração (Processo Ativo): A contração do diafragma (inervado pelo nervo frênico C3-C5) desloca sua cúpula para baixo em 1 a 2 cm. Os músculos intercostais externos elevam as costelas (movimento em 'alça de balde' e 'braço de bomba'). O volume torácico aumenta, a pressão intrapleural cai de -5 cmH2O para -8 cmH2O, e a pressão alveolar torna-se negativa (-1 cmH2O em relação à pressão atmosférica de 760 mmHg), aspirando cerca de 500 mL de ar (Volume Corrente).
   - Expiração em Repouso (Processo Passivo): Ocorre puramente pelo relaxamento dos músculos inspiratórios e pelo recuo elástico natural do parênquima pulmonar e da parede torácica. A pressão alveolar torna-se positiva (+1 cmH2O), expulsando o ar.

2. Surfactante Pulmonar: Produzido pelos pneumócitos tipo II a partir da 24ª-28ª semana de gestação. É composto por dipalmitoilfosfatidilcolina (DPPC) e proteínas surfactantes (SP-A, B, C, D). Ele reduz dramaticamente a tensão superficial da interface água-ar nos alvéolos, impedindo o colapso alveolar durante a expiração (atelectasia) de acordo com a Lei de Laplace (P = 2T / r).

3. Transporte Sanguíneo de Oxigênio e Dióxido de Carbono:
   - 98,5% do O2 é transportado ligado reversivelmente aos 4 grupos heme da Hemoglobina (Hb).
   - Curva de Dissociação da Oxiemoglobina e Efeito Bohr: Fatores que desviam a curva para a DIREITA (facilitando a liberação de O2 nos tecidos metabolicamente ativos): aumento da temperatura, aumento do CO2 (hipercapnia), queda do pH (acidose) e aumento do 2,3-difosfoglicerato (2,3-DPG).
   - Transporte de CO2: 70% é transportado como Bicarbonato plasmático (HCO3-), formado dentro dos eritrócitos pela enzima Anidrase Carbônica: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-. 23% ligado a grupos amino da hemoglobina (carboaminoemoglobina) e 7% dissolvido no plasma.`,
        keyFormula: {
          formula: "PA = DC · RVP",
          meaning: "Equação Fundamental da Pressão Arterial Sistêmica.",
          variables: [
            { symbol: "PA", desc: "Pressão Arterial Média (mmHg)" },
            { symbol: "DC", desc: "Débito Cardíaco (L/min)" },
            { symbol: "RVP", desc: "Resistência Vascular Periférica total (controlada pelo raio das arteríolas)" },
          ],
        },
        clinicalPearl: "Na Síndrome do Desconforto Respiratório do Recém-Nascido (Doença da Membrana Hialina), prematuros nascidos antes da maturidade dos pneumócitos tipo II não produzem surfactante suficiente. A altíssima tensão superficial colapsa os alvéolos na expiração, gerando grave insuficiência respiratória hipoxêmica tratada com surfactante exógeno intratraqueal.",
        examTip: "O principal estímulo fisiológico que controla a ventilação no bulbo encefálico em condições normais NÃO é o O2, mas sim a concentração de íons H+ gerados pelo PCO2 arterial nos quimiorreceptores centrais do bulbo.",
        relatedQuestionSubtopic: "Mecânica Ventilatória e Volumes Pulmonares",
      },
    ],
  },

  digestorio: {
    subjectId: "digestorio",
    mainIntroduction:
      "A Fisiologia Digestória compreende as etapas coordenadas de motilidade, secreção enzimática e ácida, digestão macromolecular e absorção seletiva de nutrientes e eletrólitos ao longo do trato gastrointestinal.",
    learningObjectives: [
      "Entender o controle neural entérico (plexos de Auerbach e Meissner) e as ondas lentas de Cajal",
      "Dominar o mecanismo de secreção de ácido clorídrico (HCl) pelas células parietais gástricas",
      "Diferenciar as funções hormonais de Gastrina, Secretina e Colecistoquinina (CCK)",
      "Explicar a digestão e absorção de carboidratos, proteínas e lipídios na borda em escova",
      "Compreender a circulação entero-hepática e a emulsificação lipídica pelos sais biliares",
    ],
    quickSummaryTable: {
      title: "Hormônios Gastrointestinais Fundamentais e suas Ações",
      headers: ["Hormônio", "Local de Secreção", "Estímulo Principal", "Ação Fisiológica Primária"],
      rows: [
        ["Gastrina", "Células G do antro gástrico e duodeno", "Peptídeos, aminoácidos, distensão, estimulação vagal", "Estimula células parietais a secretar HCl e induz motilidade gástrica"],
        ["Colecistoquinina (CCK)", "Células I do duodeno e jejuno", "Ácidos graxos, monoglicerídeos e aminoácidos", "Contração da vesícula biliar (ejeção de bile), secreção de enzimas pancreáticas, retarda esvaziamento"],
        ["Secretina", "Células S da mucosa duodenal", "Quimo ácido com pH < 4,5 no duodeno", "Estimula pâncreas e ductos biliares a secretar água e Bicarbonato (HCO3-) neutralizante"],
        ["GIP (Peptídeo Insulinotrópico)", "Células K do duodeno e jejuno", "Glicose oral e ácidos graxos", "Estimula liberação precoce de insulina pelo pâncreas endócrino (efeito incretina)"],
        ["Somatostatina", "Células D do estômago e pâncreas", "Ácido luminal abundante no estômago", "Freio fisiológico universal: inibe secreção de gastrina, HCl e hormônios intestinais"],
      ],
    },
    subtopics: [
      {
        id: "dig-estomago-acido",
        title: "1. Secreção Ácida Gástrica e a Bomba de Prótons",
        badge: "Fisiologia Gástrica",
        summary: "As células parietais do corpo gástrico produzem ácido clorídrico (HCl) a um pH de 0,8 a 1,5, fundamental para esterilizar o bolo alimentar e ativar o pepsinogênio em pepsina.",
        fullExplanation: `A secreção ácida é um processo de alta exigência energética realizado pelas células parietais (oxínticas):

1. Mecanismo Molecular da Célula Parietal:
   - No citoplasma, a enzima Anidrase Carbônica converte CO2 e H2O em ácido carbônico, que se dissocia em H+ e HCO3-.
   - O H+ é ativamente bombeado para a luz gástrica pela Bomba H+/K+ ATPase (bomba de prótons), contra um gradiente de concentração de 1 para 1.000.000, em troca da entrada de K+.
   - O HCO3- gerado sai pela membrana basolateral para a corrente sanguínea em troca de Cl- (fenômeno da 'maré alcalina pós-prandial'). O Cl- difunde-se através de canais apicais para a luz gástrica, unindo-se ao H+ para formar HCl.

2. Três Vias Estimulatórias Paralelas:
   - Gastrina: Liberada pelas células G, liga-se aos receptores CCK-B da célula parietal e das células ECL (células semelhantes a enterocromafins).
   - Histamina: Liberada pelas células ECL, é o mais potente estímulo parácrino, ativando receptores H2 que elevam o AMPc.
   - Acetilcolina: Liberada por terminações parassimpáticas vagais pós-ganglionares, ativando receptores muscarínicos M3 com elevação de cálcio citosólico.

3. Mecanismos de Proteção da Mucosa: Células mucosas secretam um gel contínuo de muco rico em bicarbonato (HCO3-) estimulado pelas Prostaglandinas E2 e I2, criando um gradiente de pH que mantém a superfície celular em pH neutro (~7,0) enquanto o suco gástrico luminal está em pH 1,5.`,
        clinicalPearl: "Fármacos Inibidores da Bomba de Prótons (IBPs como Omeprazol, Pantoprazol) ligam-se covalentemente e inativam irreversivelmente a Bomba H+/K+ ATPase ativa. Por bloquearem a via final comum de qualquer estímulo secretor (gastrina, histamina ou acetilcolina), são o padrão-ouro no tratamento de úlceras pépticas e refluxo gastroesofágico.",
        examTip: "Além do HCl, as células parietais são as ÚNICAS produtoras do FATOR INTRÍNSECO gástrico. Sem fator intrínseco, a vitamina B12 (cobalamina) não pode ser absorvida no íleo terminal, causando anemia perniciosa e degeneração neurológica dos cordões posteriores da medula.",
        relatedQuestionSubtopic: "Secreção Gástrica e Enzimas Digestivas",
      },
      {
        id: "dig-absorcao",
        title: "2. Absorção Intestinal e Digestão de Macronutrientes",
        badge: "Absorção & Enterócitos",
        summary: "A digestão final e absorção ocorrem predominantemente no duodeno e jejuno, graças às vilosidades e microvilosidades que ampliam a superfície absortiva para mais de 200 m².",
        fullExplanation: `Os macronutrientes são digeridos e absorvidos por mecanismos especializados:

1. Carboidratos: Apenas monossacarídeos são absorvidos pelos enterócitos:
   - Glicose e Galactose: São absorvidas na membrana apical pelo transportador SGLT-1 por transporte ativo secundário acoplado ao gradiente de Na+.
   - Frutose: É absorvida por difusão facilitada independente de Na+ através do transportador GLUT-5.
   - Todos os monossacarídeos saem pela membrana basolateral para os capilares da veia porta via GLUT-2.

2. Proteínas: Digestão iniciada pela pepsina gástrica e concluída pelas proteases pancreáticas (tripsina, quimotripsina, carboxipeptidases) ativadas pela enteropeptidase duodenal:
   - Aminoácidos livres entram acoplados a Na+. Dipeptídeos e tripeptídeos entram acoplados a prótons via transportador PepT1, sendo hidrolisados por peptidases citosólicas em aminoácidos antes de caírem na circulação portal.

3. Lipídios: Os triglicerídeos são emulsificados por sais biliares formando micelas mistas. A lipase pancreática e a colipase quebram os triglicerídeos em 2-monoacilglicerol e ácidos graxos livres. Estes difundem-se passivamente pela membrana do enterócito, são reesterificados no retículo endoplasmático liso, empacotados em quilomícrons com apolipoproteínas (como ApoB-48) e liberados por exocitose nos vasos linfáticos centrais (lácteos), alcançando a circulação sistêmica via ducto torácico sem passar pelo fígado inicialmente.`,
        clinicalPearl: "A ausência congênita ou deficiência adquirida de lactase na borda em escova dos enterócitos impede a quebra da lactose em glicose e galactose. A lactose permanece osmoticamente ativa na luz intestinal, puxando água (diarreia osmótica) e sendo fermentada pela microbiota colônica em gases (metano e hidrogênio), causando cólicas, distensão e flatulência.",
        examTip: "Diferença clássica cobrada em provas: Aminoácidos e monossacarídeos absorvidos vão DIRETO para o fígado via veia porta. Lipídios na forma de quilomícrons entram nos VASOS LINFÁTICOS e caem direto na circulação venosa sistêmica antes de passar pelo fígado.",
        relatedQuestionSubtopic: "Absorção Intestinal de Nutrientes",
      },
    ],
  },

  excretor: {
    subjectId: "excretor",
    mainIntroduction:
      "A Fisiologia Renal e Excretora mantém o volume e a composição eletrolítica dos fluidos corporais, regula a pressão arterial a longo prazo, equilibra o pH sanguíneo e excreta escórias metabólicas através do néfron.",
    learningObjectives: [
      "Calcular a Filtração Glomerular a partir das Forças de Starling capilares",
      "Descrever as funções específicas de reabsorção e secreção de cada segmento do néfron",
      "Explicar a cascata do Sistema Renina-Angiotensina-Aldosterona (SRAA)",
      "Compreender a regulação da osmolaridade urinária pelo Hormônio Antidiurético (ADH / Vasopressina)",
      "Dominar os mecanismos renais de controle do equilíbrio ácido-base (reabsorção de HCO3- e excreção de H+)",
    ],
    quickSummaryTable: {
      title: "Mecanismos de Transporte ao Longo dos Segmentos do Néfron",
      headers: ["Segmento do Néfron", "% Reabsorção de Na+ e H2O", "Transportadores Chave", "Ação Farmacológica / Hormonal"],
      rows: [
        ["Túbulo Contorcido Proximal (TCP)", "~65% de Na+ e H2O (isogmótico)", "SGLT-2 (glicose), NHE3 (Na+/H+), Anidrase Carbônica", "Inibidores de SGLT2 (Dapagliflozina); Acetazolamida"],
        ["Ramo Descendente de Henle", "~15% de H2O apenas (altamente permeável)", "Aquaporina-1 abundante (impermeável a solutos)", "Concentra o fluido tubular"],
        ["Ramo Ascendente Espesso (TAL)", "~20-25% de Na+, K+, Cl- (impermeável à água)", "Cotransportador Na+-K+-2Cl- (NKCC2)", "Diuréticos de Alça (Furosemida inibe NKCC2)"],
        ["Túbulo Contorcido Distal (TCD)", "~5% de Na+ e Cl-", "Cotransportador Na+-Cl- (NCCT)", "Diuréticos Tiazídicos (Hidroclorotiazida inibe NCCT)"],
        ["Ducto Coletor (Células Principais)", "~2-3% de Na+ ajustado finamente", "Canais ENaC (epiteliais de Na+) e Aquaporina-2", "Aldosterona (aumenta ENaC); Espironolactona; ADH ativa AQP2"],
      ],
    },
    subtopics: [
      {
        id: "ren-filtracao",
        title: "1. Filtração Glomerular e Hemodinâmica Renal",
        badge: "Filtração & Glomérulo",
        summary: "Os rins recebem 20% a 25% do débito cardíaco (~1,2 L/min de fluxo sanguíneo). A taxa de filtração glomerular normal é de aproximadamente 120 a 125 mL/min (~180 L de filtrado primário por dia).",
        fullExplanation: `O glomérulo é uma rede de capilares de alta pressão especializada em ultrafiltração:

1. A Barreira de Filtração Glomerular é composta por 3 camadas:
   - Endotélio capilar fenestrado (com poros de 70 a 100 nm).
   - Membrana basal glomerular (rede de colágeno tipo IV e heparansulfato carregada negativamente, que repele proteínas aniônicas como a albumina).
   - Fenda de filtração entre os pedicelos dos podócitos (com diafragmas de nefrina e podocina).

2. Forças de Starling no Glomérulo:
   A filtração depende do balanço de pressões:
   - Pressão Hidrostática Capilar Glomerular (PGC ~60 mmHg): Favorece intensamente a filtração para fora do capilar.
   - Pressão Hidrostática na Cápsula de Bowman (PBS ~18 mmHg): Opõe-se à filtração.
   - Pressão Coloidosmótica / Oncótica Glomerular (piGC ~32 mmHg): Devido às proteínas plasmáticas retidas, atrai água de volta para o vaso.
   - Pressão Líquida de Filtração = PGC - PBS - piGC = 60 - 18 - 32 = +10 mmHg.

3. Autorregulação Renal: O fluxo e a filtração mantêm-se constantes em pressões arteriais entre 80 e 180 mmHg via dois mecanismos:
   - Mecanismo Miogênico: Estiramento da arteríola aferente abre canais de Ca2+ estiramento-sensíveis, gerando vasoconstrição reflexa.
   - Feedback Túbulo-Glomerular: A mácula densa do túbulo distal monitora o fluxo de NaCl. Se a filtração sobe demais, a mácula densa libera adenosina, que contrai a arteríola aferente vizinha, reduzindo a filtração de volta ao normal.`,
        keyFormula: {
          formula: "VFG = Kf · [(P_GC - P_BS) - π_GC]",
          meaning: "Equação das Forças de Starling para a Velocidade de Filtração Glomerular.",
          variables: [
            { symbol: "VFG", desc: "Velocidade de Filtração Glomerular (~125 mL/min)" },
            { symbol: "Kf", desc: "Coeficiente de ultrafiltração glomerular (área × condutividade hidráulica)" },
            { symbol: "P_GC", desc: "Pressão hidrostática capilar glomerular (~60 mmHg)" },
            { symbol: "P_BS", desc: "Pressão hidrostática na cápsula de Bowman (~18 mmHg)" },
            { symbol: "π_GC", desc: "Pressão coloidosmótica capilar glomerular (~32 mmHg)" },
          ],
        },
        clinicalPearl: "Anti-inflamatórios Não Esteroidais (AINEs como Ibuprofeno e Diclofenaco) inibem a síntese de prostaglandinas renais que mantêm a arteríola aferente dilatada. Em pacientes desidratados ou idosos, os AINEs causam vasoconstrição aguda da arteríola aferente, derrubando bruscamente a VFG e precipitando Insuficiência Renal Aguda pré-renal.",
        examTip: "A Angiotensina II contrai preferencialmente a ARTERÍOLA EFERENTE, o que eleva a pressão capilar glomerular intrínseca e preserva a filtração mesmo quando a pressão arterial do paciente está em queda.",
        relatedQuestionSubtopic: "Filtração Glomerular e Forças de Starling",
      },
      {
        id: "ren-sraa-adh",
        title: "2. Regulação Hormonal: Sistema Renina-Angiotensina e ADH",
        badge: "Controle Hormonal & Balanço",
        summary: "O equilíbrio hídrico e a volemia são controlados hormonalmente pela integração entre o Sistema Renina-Angiotensina-Aldosterona (SRAA) e o Hormônio Antidiurético (ADH / Arginina-Vasopressina).",
        fullExplanation: `Em resposta à hipovolemia, queda da pressão arterial ou baixa oferta de sódio na mácula densa:

1. Cascata do SRAA:
   - O aparelho justaglomerular renal libera a enzima Renina no sangue.
   - A Renina cliva o Angiotensinogênio hepático em Angiotensina I (decapeptídeo inativo).
   - A Enzima Conversora de Angiotensina (ECA), localizada primariamente no endotélio capilar pulmonar, converte Angiotensina I em Angiotensina II (octapeptídeo biologicamente ativo).
   - Efeitos da Angiotensina II: Vasoconstrição arteriolar sistêmica potente; estimula sede no hipotálamo; aumenta reabsorção de Na+ no túbulo proximal; e estimula a zona glomerulosa da adrenal a secretar Aldosterona.

2. Ação da Aldosterona:
   - Atua nas células principais do ducto coletor cortical, estimulando a síntese e translocação de canais ENaC na membrana apical e aumentando a Bomba Na+/K+ basolateral. Reabsorve Na+ e água em troca de secreção urinária de K+ e H+.

3. Ação do ADH (Vasopressina):
   - Sintetizado nos núcleos supraóptico e paraventricular do hipotálamo e armazenado na neuro-hipófise. É liberado quando os osmorreceptores hipotalâmicos detectam aumento da osmolaridade plasmática (> 290 mOsm/kg) ou queda de volemia.
   - Liga-se aos receptores V2 nos ductos coletores renais, promovendo a translocação de vesículas com Aquaporinas-2 para a membrana apical. A água é intensamente reabsorvida por osmose em direção ao interstício medular hiperosmótico, concentrando a urina em até 1.200 mOsm/L.`,
        clinicalPearl: "No Diabetes Insipidus Central (causado por trauma cranioencefálico ou lesão hipofisária), há ausência de secreção de ADH. Os ductos coletores permanecem impermeáveis à água, e o paciente excreta de 10 a 20 litros de urina extremamente diluída por dia (poliúria e polidipsia intensa), correndo risco de desidratação hipernatrêmica grave se não receber desmopressina sintética.",
        examTip: "Aldosterona promove retenção de SÓDIO e ÁGUA com perda urinária de POTÁSSIO e PRÓTONS. Portanto, hiperaldosteronismo causa hipertensão arterial, hipocalemia e alcalose metabólica.",
        relatedQuestionSubtopic: "Sistema Renina-Angiotensina-Aldosterona e ADH",
      },
    ],
  },

  sensorial: {
    subjectId: "sensorial",
    mainIntroduction:
      "A Fisiologia Sensorial estuda como receptores biológicos convertem diferentes formas de energia física e química do ambiente em impulsos elétricos nervosos decodificados pelo córtex cerebral.",
    learningObjectives: [
      "Compreender a transdução sensorial e a gênese de potenciais geradores",
      "Explicar a fotorrecepção retiniana, o papel da rodopsina e a fototransdução",
      "Descrever a mecânica coclear da audição e a cinocilia do sistema vestibular",
      "Entender os mecanismos iônicos e metabotrópicos da gustação e olfação",
    ],
    quickSummaryTable: {
      title: "Resumo dos Receptores Sensoriais e Vias de Transdução",
      headers: ["Sentido", "Receptor Primário", "Tipo de Estímulo", "Mecanismo de Transdução", "Destino Cortical"],
      rows: [
        ["Visão", "Cones e Bastonetes da retina", "Fótons de luz (400 a 700 nm)", "Fechamento de canais de cGMP e hiperpolarização", "Córtex Visual Primário (Lobo Occipital - V1)"],
        ["Audição", "Células ciliadas no Órgão de Corti", "Ondas sonoras de pressão mecânica", "Deflexão de estereocílios abre canais de K+ mecanosensíveis", "Córtex Auditivo Primário (Lobo Temporal - A1)"],
        ["Equilíbrio", "Células ciliadas nos canais semicirculares e máculas", "Aceleração angular e linear/gravidade", "Inércia da endolinfa e deslocamento de otólitos", "Córtex vestibular, tronco encefálico e cerebelo"],
        ["Gustação", "Células receptoras nos botões gustativos", "Moléculas químicas sápidas dissolvidas", "Salgado/Ácido = canais iônicos; Doce/Umami/Amargo = GPCR", "Córtex Gustativo (Ínsula anterior)"],
        ["Olfação", "Neurônios sensoriais olfatórios bipolares", "Moléculas odoríferas voláteis", "Receptores GPCR (Golf) ativam adenilil ciclase e AMPc", "Córtex Piriforme, Amígdala e Córtex Olfatório"],
      ],
    },
    subtopics: [
      {
        id: "sen-visao",
        title: "1. Fisiologia da Visão e Fototransdução",
        badge: "Fotorrecepção & Retina",
        summary: "A visão converte a luz em sinal elétrico nos fotorreceptores da retina através de um mecanismo singular no corpo humano: no escuro as células estão despolarizadas, e a presença de luz promove sua hiperpolarização.",
        fullExplanation: `A retina contém dois tipos de fotorreceptores com papéis complementares:
- Bastonetes: Altíssima sensibilidade luminosa, visão escotópica noturna em preto e branco, altamente convergentes nas células ganglionares.
- Cones: Menor sensibilidade à luz, alta resolução espacial, visão fotópica diurna em cores (três tipos de opsinas para azul, verde e vermelho), concentrados na fóvea central.

A Cascata de Fototransdução no Escuro vs Luz:
1. No Escuro: Os níveis intracelulares de GMP cíclico (cGMP) estão elevados. O cGMP mantém canais catiônicos de Na+ e Ca2+ abertos na membrana do segmento externo. Há influxo contínuo de sódio ('corrente de escuridão'), mantendo o fotorreceptor despolarizado em cerca de -40 mV e liberando continuamente o neurotransmissor glutamato em sua sinapse com as células bipolares.

2. Com a Chegada da Luz:
   - O fóton de luz atinge o fotopigmento Rodopsina, fotoisomerizando o 11-cis-retinal em todo-trans-retinal.
   - A rodopsina ativada interage com a proteína G chamada Transducina.
   - A subunidade alfa da transducina ativa a enzima Fosfodiesterase de cGMP (PDE), que quebra rapidamente o cGMP em 5'-GMP.
   - A queda drástica de cGMP fecha os canais de sódio. Como a saída basal de K+ continua, a célula HIPERPOLARIZA-SE até -70 mV.
   - A hiperpolarização reduz ou cessa a liberação de glutamato, despolarizando células bipolares de centro 'on' e disparando potenciais de ação nas células ganglionares do nervo óptico.`,
        clinicalPearl: "A deficiência de Vitamina A (retinol) compromete a síntese de 11-cis-retinal, componente da rodopsina dos bastonetes. O primeiro sintoma clínico é a nictalopia (cegueira noturna), na qual o paciente enxerga bem na luz do dia graças aos cones, mas fica praticamente cego ao entrar em ambientes escuros.",
        examTip: "Pegadinha comum em provas de fisiologia: A estimulação luminosa NÃO despolariza os fotorreceptores; ela HIPERPOLARIZA a célula fotorreceptora, reduzindo a liberação de glutamato!",
        relatedQuestionSubtopic: "Fisiologia da Visão e Fototransdução",
      },
      {
        id: "sen-audicao",
        title: "2. Audição e Sistema Vestibular",
        badge: "Mecanotransdução",
        summary: "A audição decodifica ondas de pressão sonora através das células ciliadas do órgão de Corti na cóclea, enquanto o aparelho vestibular informa sobre aceleração linear e angular.",
        fullExplanation: `1. Transdução Auditiva na Cóclea:
   - As ondas sonoras vibram a membrana timpânica e a cadeia ossicular (martelo, bigorna e estribo), amplificando a energia mecânica na janela oval da cóclea.
   - O movimento do fluido perilinfático na escala vestibular deflete a membrana basilar.
   - A membrana basilar possui tonotopia física estrita: sua base (próxima à janela oval) é estreita e rígida, vibrando em frequências altas / agudas (>10.000 Hz). Seu ápice (helicotrema) é largo e complacente, vibrando em frequências baixas / graves (<500 Hz).
   - A deflexão da membrana basilar curva os estereocílios das células ciliadas contra a membrana tectorial.
   - A deflexão dos cílios em direção ao cinocílio (o cílio mais alto) estica as pontes de ligação (tip links), abrindo canais mecanossensíveis. Como as células ciliadas são banhadas pela ENDOLINFA da escala média (que é rica em K+ com potencial positivo de +80 mV), o K+ entra na célula a favor do gradiente elétrico, gerando rápida despolarização que abre canais de cálcio e libera neurotransmissor para as fibras do nervo coclear (VIII par craniano).

2. Sistema Vestibular e Equilíbrio:
   - Canais Semicirculares (anterior, posterior e horizontal): Orientados nos três eixos do espaço. Detectam aceleração angular (rotação da cabeça).
   - Utrículo e Sáculo (Órgãos Otolíticos): Contêm cristais de carbonato de cálcio (otólitos) sobre uma membrana gelatinosa. Detectam aceleração linear (arranque e frenagem em veículos, gravidade e inclinação da cabeça).`,
        clinicalPearl: "A Vertigem Posicional Paroxística Benigna (VPPB) ocorre quando pequenos cristais de carbonato de cálcio (otólitos) se desprendem da mácula do utrículo e migram indevidamente para dentro de um canal semicircular (geralmente o posterior). Ao deitar ou virar a cabeça rapidamente na cama, o deslocamento desses cristais na endolinfa estimula falsamente a cúpula, causando vertigem rotatória intensa, náusea e nistagmo.",
        examTip: "Ao contrário da maioria das células do corpo humano onde a despolarização depende do sódio (Na+), a despolarização das células ciliadas auditivas depende do influxo de POTÁSSIO (K+), porque a endolinfa possui concentração anômala de K+ de ~150 mEq/L gerada pela estria vascular.",
        relatedQuestionSubtopic: "Audição e Sistema Vestibular",
      },
    ],
  },
};

// Aliases to ensure both masculine and feminine subject ID forms resolve seamlessly
THEORY_DATABASE["cardiorrespiratoria"] = THEORY_DATABASE["cardiorrespiratorio"];
THEORY_DATABASE["digestoria"] = THEORY_DATABASE["digestorio"];
THEORY_DATABASE["excretora"] = THEORY_DATABASE["excretor"];
