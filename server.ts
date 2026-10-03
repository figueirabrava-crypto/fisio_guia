import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: "5mb" }));

  // Lazy Gemini instance
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // PWA Core Static Assets Handlers (garante MIME types estritos)
  app.get("/manifest.webmanifest", (req, res) => {
    const pubFile = path.join(process.cwd(), "public", "manifest.webmanifest");
    const distFile = path.join(process.cwd(), "dist", "manifest.webmanifest");
    const filePath = fs.existsSync(pubFile) ? pubFile : distFile;
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/manifest+json; charset=utf-8");
      return res.sendFile(filePath);
    }
    res.status(404).send("Manifest not found");
  });

  app.get("/sw.js", (req, res) => {
    const pubFile = path.join(process.cwd(), "public", "sw.js");
    const distFile = path.join(process.cwd(), "dist", "sw.js");
    const filePath = fs.existsSync(pubFile) ? pubFile : distFile;
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/javascript; charset=utf-8");
      res.setHeader("Service-Worker-Allowed", "/");
      return res.sendFile(filePath);
    }
    res.status(404).send("Service Worker not found");
  });

  app.get("/registerSW.js", (req, res) => {
    const pubFile = path.join(process.cwd(), "public", "registerSW.js");
    const distFile = path.join(process.cwd(), "dist", "registerSW.js");
    const filePath = fs.existsSync(pubFile) ? pubFile : distFile;
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/javascript; charset=utf-8");
      return res.sendFile(filePath);
    }
    res.status(404).send("registerSW not found");
  });

  // In-memory telemetry log for author Figueirabrava
  const telemetryLogs: Array<{
    id: string;
    receivedAt: string;
    clientTimestamp: string;
    subjectId: string;
    eventType: string;
    offlineRecovered: boolean;
    ip?: string;
    device?: string;
  }> = [];

  // System updates catalogue for the 6 physiology subjects
  const currentSystemUpdates = [
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

  // Updates check endpoint (called every time user gets online)
  app.get("/api/updates/check", (req, res) => {
    res.json({
      version: "2026.09.2",
      author: "Figueirabrava",
      lastUpdated: "2026-09-22T19:00:00.000Z",
      subjectsCovered: 6,
      systemUpdates: currentSystemUpdates,
    });
  });

  // Telemetry Ping (records access & offline queues)
  app.post("/api/telemetry/ping", (req, res) => {
    try {
      const { events, deviceInfo } = req.body;
      const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "127.0.0.1";
      const now = new Date().toISOString();

      if (Array.isArray(events)) {
        events.forEach((ev: any) => {
          telemetryLogs.unshift({
            id: ev.id || "ev_" + Math.random().toString(36).substring(2, 9),
            receivedAt: now,
            clientTimestamp: ev.timestamp || now,
            subjectId: ev.subjectId || "geral",
            eventType: ev.eventType || "open",
            offlineRecovered: !!ev.offlineRecovered,
            ip: clientIp.split(",")[0].trim(),
            device: deviceInfo?.platform || "web",
          });
        });
      }

      // Keep max 500 in memory
      if (telemetryLogs.length > 500) {
        telemetryLogs.length = 500;
      }

      res.json({ success: true, recorded: events?.length || 0 });
    } catch {
      res.status(200).json({ success: false });
    }
  });

  // Telemetry Stats for Author Figueirabrava
  app.get("/api/telemetry/stats", (req, res) => {
    const totalOpens = telemetryLogs.filter((e) => e.eventType === "open").length;
    const offlineRecovered = telemetryLogs.filter((e) => e.offlineRecovered).length;
    const directOnline = totalOpens - offlineRecovered;

    // Subjects frequency
    const subjectsMap: Record<string, number> = {};
    telemetryLogs.forEach((l) => {
      subjectsMap[l.subjectId] = (subjectsMap[l.subjectId] || 0) + 1;
    });

    res.json({
      author: "Figueirabrava",
      authorEmail: "figueirabrava@gmail.com",
      totalEvents: telemetryLogs.length,
      totalOpens,
      offlineRecovered,
      directOnline,
      subjectsMap,
      recentLogs: telemetryLogs.slice(0, 30),
      serverUptime: process.uptime(),
    });
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // AI Tutor / Professor Virtual endpoint
  app.post("/api/ai/ask", async (req, res) => {
    const { topic, subjectContext, question, context } = req.body;
    const activeTopic = topic || subjectContext || "Fisiologia Humana Geral";

    try {
      const ai = getGeminiClient();

      if (!ai) {
        return res.status(200).json({
          answer:
            `🎓 **Tutor Fisiológico (Modo Offline / Guia Essencial)**\n\n` +
            `Sobre a dúvida *"**${question}**"* no tema de **${activeTopic}**:\n\n` +
            `Na fisiologia humana de acordo com Guyton & Hall e Silverthorn, a regulação desse processo opera por mecanismos de feedback homeostático. Os gradientes iônicos, mensageiros intracelulares e a integração sistêmica garantem a estabilidade funcional do organismo.\n\n` +
            `💡 *Dica de Ouro:* Revise o Atlas Interativo e as questões do banco de ${activeTopic} aqui no FisioGuia para consolidar os detalhes deste mecanismo!`,
          fallback: true,
        });
      }

      const prompt = `Você é o Professor Especialista em Fisiologia Humana do app FisioGuia.
Você foi treinado em livros-texto de referência: Tratado de Fisiologia Médica de Guyton & Hall, Fisiologia Humana de Dee Unglaub Silverthorn e Berne & Levy.
O usuário está estudando um dos 6 módulos: Neurofisiologia, Fisiologia Celular, Fisiologia Sensorial, Fisiologia Digestória, Fisiologia Cardiorrespiratória ou Fisiologia Excretora.

Módulo atual: ${activeTopic}
Pergunta do estudante: "${question}"
Contexto opcional: ${context || "Nenhum contexto extra"}

Instruções:
1. Responda em Português do Brasil com linguagem didática, clara, acolhedora e cientificamente rigorosa.
2. Explique os mecanismos moleculares e funcionais (passo a passo de como e por que acontece).
3. Conecte com o lema do app: "Da célula ao sistema - tudo conectado! Entender o corpo é entender a vida!"
4. Dê uma dica mnemônica ou clínica prática se aplicável.
5. Seja conciso e elegante (cerca de 2 a 4 parágrafos bem estruturados com tópicos se necessário).`;

      // Modelo primário: gemini-3.6-flash (alta velocidade e estabilidade)
      // Modelo secundário de fallback: gemini-3.1-flash-lite
      let responseText = "";
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: prompt,
        });
        responseText = response.text || "";
      } catch (firstErr: any) {
        console.warn("gemini-3.6-flash ocupado, tentando gemini-3.1-flash-lite:", firstErr?.message);
        const fallbackResp = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: prompt,
        });
        responseText = fallbackResp.text || "";
      }

      res.json({
        answer: responseText || "Sem resposta gerada pelo modelo.",
        fallback: false,
      });
    } catch (error: any) {
      console.warn("Aviso no endpoint /api/ai/ask (ativando resposta didática de segurança):", error?.message);
      // Nunca retorne erro 500 para o aluno
      res.status(200).json({
        answer:
          `🎓 **Tutor Fisiológico (Explicação Integrada)**\n\n` +
          `Analisando a sua pergunta *"**${question}**"* sobre **${activeTopic}**:\n\n` +
          `1. **Princípio Mecanicista:** Na fisiologia moderna (Guyton & Hall / Silverthorn), todo mecanismo celular está conectado à homeostase. As alterações de permeabilidade de membrana, influxo de íons (como Ca²⁺, Na⁺, K⁺) ou regulação enzimática coordenam a resposta tecidual.\n\n` +
          `2. **Integração Sistêmica:** Lembre-se do lema do FisioGuia: *"Da célula ao sistema - tudo conectado!"*. Esse fenômeno em ${activeTopic} não ocorre isolado; ele repercute diretamente no equilíbrio hidroeletrolítico, metabólico e cardiovascular.\n\n` +
          `3. **Dica para sua Prova:** Fixe as etapas sequenciais desse processo através do simulador de questões interativas na aba correspondente do app!`,
        fallback: true,
      });
    }
  });

  // Generate an extra dynamic clinical question
  app.post("/api/ai/generate-question", async (req, res) => {
    const { topic } = req.body;
    const activeTopic = topic || "Neurofisiologia";

    try {
      const ai = getGeminiClient();

      if (!ai) {
        return res.status(200).json({
          question: `Em relação à regulação funcional em ${activeTopic}, qual é o mecanismo primário de controle homeostático?`,
          options: [
            "Retroalimentação negativa (feedback negativo), que atenua a perturbação inicial",
            "Retroalimentação positiva contínua que desestabiliza a variável controlada",
            "Ausência de receptores e mediadores químicos específicos no tecido-alvo",
            "Bloqueio permanente dos canais iônicos dependentes de voltagem e ligante"
          ],
          correctIndex: 0,
          explanation: "O feedback negativo é o principal mecanismo homeostático dos sistemas fisiológicos humanos (Guyton & Hall), restaurando o ponto de ajuste fisiológico.",
          subtopic: activeTopic,
          difficulty: "Médio"
        });
      }

      const prompt = `Gere 1 questão inédita de múltipla escolha com raciocínio clínico ou fisiológico sobre "${activeTopic}", compatível com provas de Fisiologia Médica / Biomédica / Enfermagem.
Formato JSON estrito com o seguinte schema:
{
  "question": "Texto claro da pergunta ou vinheta clínica",
  "options": ["Opção A", "Opção B", "Opção C", "Opção D"],
  "correctIndex": 0,
  "explanation": "Explicação científica detalhada justificando a correta e explicando os distratores, citando mecanismos de Guyton e Silverthorn",
  "subtopic": "Nome da estrutura ou processo específico",
  "difficulty": "Médio" ou "Difícil"
}`;

      let parsed: any = null;
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });
        parsed = JSON.parse(response.text || "{}");
      } catch (err) {
        const fallbackResp = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });
        parsed = JSON.parse(fallbackResp.text || "{}");
      }

      res.json(parsed);
    } catch (error: any) {
      console.warn("Aviso ao gerar questão dinâmica (retornando questão padrão segura):", error?.message);
      res.status(200).json({
        question: `Considerando os mecanismos fisiológicos de ${activeTopic}, qual das alternativas descreve corretamente o princípio regulatório fundamental?`,
        options: [
          "Mecanismo de retroalimentação negativa visando preservar o equilíbrio homeostático",
          "Aumento descontrolado do gradiente eletroquímico sem gasto de energia metabólica",
          "Interrupção total das sinapses e da sinalização celular por segundo mensageiro",
          "Inibição completa da síntese de ATP pela cadeia respiratória mitocondrial"
        ],
        correctIndex: 0,
        explanation: "Na fisiologia de Guyton e Silverthorn, a retroalimentação negativa é o pilar da estabilidade funcional, contrabalançando desvios para manter os parâmetros dentro da faixa fisiológica.",
        subtopic: activeTopic,
        difficulty: "Médio"
      });
    }
  });

  // Humanized Voice TTS endpoint (Gemini Flash TTS Preview)
  app.post("/api/tts", async (req, res) => {
    try {
      const { text, voiceName = "Kore" } = req.body;
      if (!text || typeof text !== "string") {
        return res.status(400).json({ error: "Texto não informado" });
      }

      const ai = getGeminiClient();
      if (!ai) {
        return res.status(200).json({
          error: "Chave Gemini não configurada no servidor",
          useClientFallback: true,
        });
      }

      const validVoices = ["Kore", "Puck", "Fenrir", "Zephyr", "Charon"];
      const selectedVoice = validVoices.includes(voiceName) ? voiceName : "Kore";

      // Truncate to reasonable study sentence length
      const safeText = text.trim().slice(0, 900);

      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-tts-preview",
        contents: [
          {
            parts: [
              {
                text: `Narre com pronúncia perfeita em português brasileiro, entonação natural e ritmo humanizado de professor: ${safeText}`,
              },
            ],
          },
        ],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: selectedVoice },
            },
          },
        },
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      const audioData = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType || "audio/pcm;rate=24000";

      if (!audioData) {
        return res.status(200).json({
          error: "Nenhum áudio gerado pelo modelo",
          useClientFallback: true,
        });
      }

      return res.json({
        audio: audioData,
        mimeType: mimeType,
        voiceName: selectedVoice,
        fallback: false,
      });
    } catch (err: any) {
      console.warn("Aviso: fallback TTS ativo (Gemini TTS error):", err?.message || err);
      return res.status(200).json({
        error: "Falha no serviço de TTS da IA, usando fallback local",
        details: err?.message || String(err),
        useClientFallback: true,
      });
    }
  });

  // Vite middleware for development vs static for production
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FisioGuia Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
