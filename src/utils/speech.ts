/**
 * Motor de Fala Humanizada & Síntese Vocal - FisioGuia
 * Suporta:
 * 1. Vozes Neurais de IA Studio (Gemini Flash TTS Preview) em Português do Brasil
 * 2. Vozes Nativas do Navegador (Web Speech API) com pré-processamento humanizado e expansão de termos fisiológicos
 */

export type TtsEngine = "ai" | "browser";

export type AiVoiceId = "Kore" | "Puck" | "Zephyr" | "Fenrir" | "Charon";

export interface AiVoiceOption {
  id: AiVoiceId;
  name: string;
  role: string;
  gender: "Feminina" | "Masculina";
  description: string;
  sampleText: string;
  badge?: string;
}

export const AI_VOICES: AiVoiceOption[] = [
  {
    id: "Kore",
    name: "Dra. Sofia",
    role: "Fisiologista e Professora",
    gender: "Feminina",
    description: "Voz calorosa, didática e expressiva. Excelente para explicações longas e conceitos complexos.",
    sampleText: "Olá! Sou a Dra. Sofia. Vamos explorar juntos a fisiologia humana, da célula aos sistemas integrados.",
    badge: "Mais Recomendada",
  },
  {
    id: "Puck",
    name: "Dr. Lucas",
    role: "Professor e Médico Residente",
    gender: "Masculina",
    description: "Voz jovem, enérgica, dinâmica e muito clara. Ideal para simulados e sessões rápidas de quiz.",
    sampleText: "Tudo pronto para o simulado? Vamos testar seus conhecimentos e fixar cada detalhe para a sua prova!",
    badge: "Dinâmica",
  },
  {
    id: "Zephyr",
    name: "Profa. Camila",
    role: "Tutora Acadêmica",
    gender: "Feminina",
    description: "Voz suave, calma, ritmo pausado e tom acolhedor. Perfeita para estudos noturnos e concentração.",
    sampleText: "Respire fundo e mantenha o foco. Cada mecanismo do corpo humano segue uma harmonia perfeita.",
    badge: "Suave & Calma",
  },
  {
    id: "Fenrir",
    name: "Prof. Gabriel",
    role: "Pesquisador Biomédico",
    gender: "Masculina",
    description: "Voz acadêmica, firme, confiante e com ótima projeção científica.",
    sampleText: "A homeostase é o princípio unificador da fisiologia. Compreender o mecanismo é a chave para o diagnóstico.",
    badge: "Acadêmica",
  },
  {
    id: "Charon",
    name: "Prof. Marcelo",
    role: "Especialista Clínico",
    gender: "Masculina",
    description: "Voz grave, ponderada, profunda e articulada com precisão terminológica.",
    sampleText: "Analisemos a integração entre o sistema cardiovascular e a mecânica ventilatória pulmonar.",
    badge: "Voz Grave",
  },
];

export interface VoiceSettings {
  engine: TtsEngine;
  aiVoice: AiVoiceId;
  browserVoiceURI: string;
  rate: number; // 0.8 a 1.4
  pitch: number; // 0.8 a 1.2
  humanizeMedicalTerms: boolean;
}

const DEFAULT_SETTINGS: VoiceSettings = {
  engine: "ai",
  aiVoice: "Kore",
  browserVoiceURI: "",
  rate: 1.0,
  pitch: 1.0,
  humanizeMedicalTerms: true,
};

/**
 * Pré-processador linguístico de termos biomédicos:
 * Transforma fórmulas químicas, siglas e termos truncados em português falado natural
 * para evitar leitura robótica e truncada tanto na IA quanto no sintetizador nativo.
 */
export function humanizePhysiologicalText(text: string): string {
  if (!text) return "";

  let cleaned = text
    // Remove markdown e símbolos de formatação
    .replace(/[*_#`~>]/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Links
    .replace(/\s+/g, " ")
    .trim();

  // Substituições fonéticas de fórmulas e siglas fisiológicas
  const replacements: [RegExp, string][] = [
    [/\bNa\+\/K\+\s*ATPase\b/gi, "Bomba de Sódio Potássio ATPase"],
    [/\bNa\+\/K\+\b/gi, "Sódio e Potássio"],
    [/\bNa\+\b/g, "íon sódio"],
    [/\bK\+\b/g, "íon potássio"],
    [/\bCa2\+\b/gi, "íon cálcio"],
    [/\bCa²⁺\b/g, "íon cálcio"],
    [/\bCl-\b/g, "íon cloreto"],
    [/\bCl⁻\b/g, "íon cloreto"],
    [/\bH\+\b/g, "íons hidrogênio"],
    [/\bHCO3-\b/gi, "bicarbonato"],
    [/\bHCO3⁻\b/gi, "bicarbonato"],
    [/\bTFG\b/g, "Taxa de Filtração Glomerular"],
    [/\bSRAA\b/g, "Sistema Renina Angiotensina Aldosterona"],
    [/\bADH\b/g, "hormônio antidiurético vasopressina"],
    [/\bNó\s+SA\b/gi, "Nó Sinoatrial"],
    [/\bNó\s+AV\b/gi, "Nó Atrioventricular"],
    [/\bSNC\b/g, "Sistema Nervoso Central"],
    [/\bSNP\b/g, "Sistema Nervoso Periférico"],
    [/\bHCl\b/g, "ácido clorídrico"],
    [/\bATP\b/g, "A-T-P"],
    [/\bPaO2\b/gi, "pressão parcial de oxigênio"],
    [/\bPaCO2\b/gi, "pressão parcial de gás carbônico"],
    [/\bml\/min\b/gi, "mililitros por minuto"],
    [/\bmmHg\b/gi, "milímetros de mercúrio"],
    [/\bmOsm\/kg\b/gi, "miliosmóis por quilo"],
    [/\bmV\b/g, "milivolts"],
    [/\bbpm\b/gi, "batimentos por minuto"],
    [/\bCap\.\s*(\d+)/gi, "Capítulo $1"],
    [/\bex\.:/gi, "por exemplo:"],
    [/\bex:\b/gi, "por exemplo"],
    [/\betc\./gi, "e assim por diante."],
    // Formatação de alternativas de múltipla escolha
    [/\b([A-D])\)\s*/g, "Alternativa $1: "],
  ];

  for (const [pattern, replacement] of replacements) {
    cleaned = cleaned.replace(pattern, replacement);
  }

  // Melhora pausas naturais substituindo hifens isolados por vírgulas
  cleaned = cleaned.replace(/\s+[-–—]\s+/g, ", ");

  return cleaned;
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private audioContext: AudioContext | null = null;
  private currentSourceNode: AudioBufferSourceNode | null = null;
  private settings: VoiceSettings;
  private listeners: ((settings: VoiceSettings) => void)[] = [];
  private audioCache: Map<string, ArrayBuffer> = new Map();
  private isAudioPlaying: boolean = false;

  constructor() {
    this.settings = this.loadSettings();

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.synth = window.speechSynthesis;
      // Garante carregamento das vozes
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => {
          this.ensureValidBrowserVoice();
        };
      }
    }
  }

  private loadSettings(): VoiceSettings {
    if (typeof window === "undefined") return { ...DEFAULT_SETTINGS };
    try {
      const saved = localStorage.getItem("fisioguia_voice_settings");
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      // ignore
    }
    return { ...DEFAULT_SETTINGS };
  }

  public saveSettings(newSettings: Partial<VoiceSettings>) {
    this.settings = { ...this.settings, ...newSettings };
    try {
      localStorage.setItem("fisioguia_voice_settings", JSON.stringify(this.settings));
    } catch (e) {
      // ignore
    }
    this.listeners.forEach((cb) => cb(this.settings));
  }

  public getSettings(): VoiceSettings {
    return { ...this.settings };
  }

  public subscribeSettings(cb: (settings: VoiceSettings) => void): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext || this.audioContext.state === "closed") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.audioContext = new AudioCtx({ sampleRate: 24000 });
    }
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
    return this.audioContext;
  }

  public getAvailableBrowserVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    const all = this.synth.getVoices();
    // Prioriza vozes em Português
    const ptVoices = all.filter(
      (v) => v.lang === "pt-BR" || v.lang.startsWith("pt")
    );

    // Ordena colocando as vozes reconhecidamente naturais no topo
    return ptVoices.sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      const aNatural = aName.includes("natural") || aName.includes("google") || aName.includes("luciana") || aName.includes("online");
      const bNatural = bName.includes("natural") || bName.includes("google") || bName.includes("luciana") || bName.includes("online");
      if (aNatural && !bNatural) return -1;
      if (!aNatural && bNatural) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  private ensureValidBrowserVoice(): SpeechSynthesisVoice | null {
    const voices = this.getAvailableBrowserVoices();
    if (voices.length === 0) return null;

    if (this.settings.browserVoiceURI) {
      const found = voices.find((v) => v.voiceURI === this.settings.browserVoiceURI || v.name === this.settings.browserVoiceURI);
      if (found) return found;
    }

    // Default prioritário: Google pt-BR ou primeira natural
    const defaultVoice =
      voices.find((v) => v.name.toLowerCase().includes("google") && v.lang === "pt-BR") ||
      voices.find((v) => v.name.toLowerCase().includes("natural")) ||
      voices[0];

    if (defaultVoice && !this.settings.browserVoiceURI) {
      this.settings.browserVoiceURI = defaultVoice.voiceURI || defaultVoice.name;
    }

    return defaultVoice || null;
  }

  /**
   * Executa a reprodução com a melhor voz disponível:
   * Tenta primeiro a IA Neural (se selecionada). Se falhar ou estiver em modo browser,
   * utiliza a voz de alta qualidade do navegador com processamento fisiológico.
   */
  public async speak(
    text: string,
    options: {
      rate?: number;
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (e: any) => void;
    } = {}
  ): Promise<boolean> {
    this.stop();

    if (!text || !text.trim()) return false;

    // Humanização e lapidação fonética
    const processedText = this.settings.humanizeMedicalTerms
      ? humanizePhysiologicalText(text)
      : text.replace(/[*_#`~]/g, " ").trim();

    if (!processedText) return false;

    // 1. TENTATIVA COM IA STUDIO SE SELECIONADA
    if (this.settings.engine === "ai") {
      try {
        const success = await this.speakWithAI(processedText, options);
        if (success) return true;
      } catch (e) {
        console.warn("TTS IA indisponível, acionando sintetizador local:", e);
      }
    }

    // 2. FALLBACK OU MODO NATIVO DO NAVEGADOR
    return this.speakWithBrowser(processedText, options);
  }

  /**
   * Síntese com Gemini Studio Audio (24kHz PCM ou WAV)
   */
  private async speakWithAI(
    text: string,
    options: {
      rate?: number;
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (e: any) => void;
    }
  ): Promise<boolean> {
    // Busca no cache rápido de áudio
    const cacheKey = `${this.settings.aiVoice}:${text.slice(0, 120)}`;
    let audioBuffer: AudioBuffer | null = null;
    const ctx = this.getAudioContext();

    if (this.audioCache.has(cacheKey)) {
      const rawData = this.audioCache.get(cacheKey)!;
      audioBuffer = await this.decodePcmOrAudio(rawData, ctx);
    } else {
      // Chama o endpoint seguro do backend
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text,
          voiceName: this.settings.aiVoice,
        }),
      });

      if (!res.ok) {
        return false;
      }

      const data = await res.json();
      if (!data.audio || data.fallback) {
        return false;
      }

      // Decodifica base64 para ArrayBuffer
      const binaryString = atob(data.audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Salva no cache
      if (this.audioCache.size > 40) {
        const firstKey = this.audioCache.keys().next().value;
        if (firstKey) this.audioCache.delete(firstKey);
      }
      this.audioCache.set(cacheKey, bytes.buffer);

      audioBuffer = await this.decodePcmOrAudio(bytes.buffer, ctx);
    }

    if (!audioBuffer) return false;

    // Reprodução via Web Audio
    if (options.onStart) options.onStart();
    this.isAudioPlaying = true;

    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = options.rate || this.settings.rate || 1.0;
    source.connect(ctx.destination);

    source.onended = () => {
      this.isAudioPlaying = false;
      this.currentSourceNode = null;
      if (options.onEnd) options.onEnd();
    };

    this.currentSourceNode = source;
    source.start(0);
    return true;
  }

  /**
   * Converte PCM 16-bit 24kHz ou áudio padrão para AudioBuffer
   */
  private async decodePcmOrAudio(buffer: ArrayBuffer, ctx: AudioContext): Promise<AudioBuffer> {
    try {
      // Tenta decodificar como formato de arquivo de áudio padrão (se o backend retornar WAV/MP3)
      const cloned = buffer.slice(0);
      return await ctx.decodeAudioData(cloned);
    } catch (e) {
      // Interpreta como PCM bruto little-endian 16-bit a 24000Hz (formato padrão do Gemini Audio)
      const validByteLength = buffer.byteLength - (buffer.byteLength % 2);
      const int16Array = new Int16Array(buffer, 0, Math.floor(validByteLength / 2));
      const float32Array = new Float32Array(int16Array.length);
      for (let i = 0; i < int16Array.length; i++) {
        float32Array[i] = int16Array[i] / 32768.0;
      }

      const audioBuf = ctx.createBuffer(1, Math.max(float32Array.length, 1), 24000);
      audioBuf.getChannelData(0).set(float32Array);
      return audioBuf;
    }
  }

  /**
   * Síntese Nativa do Navegador (Web Speech API)
   */
  private speakWithBrowser(
    text: string,
    options: {
      rate?: number;
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (e: any) => void;
    }
  ): boolean {
    if (!this.synth) return false;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";

    const voice = this.ensureValidBrowserVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = options.rate || this.settings.rate || 1.0;
    utterance.pitch = options.pitch || this.settings.pitch || 1.0;

    utterance.onstart = () => {
      this.isAudioPlaying = true;
      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      this.isAudioPlaying = false;
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = (e) => {
      this.isAudioPlaying = false;
      this.currentUtterance = null;
      if (options.onError) options.onError(e);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
    return true;
  }

  public stop() {
    // Para áudio Web Audio
    if (this.currentSourceNode) {
      try {
        this.currentSourceNode.stop();
        this.currentSourceNode.disconnect();
      } catch (e) {
        // ignore
      }
      this.currentSourceNode = null;
    }

    // Para áudio Web Speech
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        // ignore
      }
      this.currentUtterance = null;
    }

    this.isAudioPlaying = false;
  }

  public isSpeaking(): boolean {
    return (
      this.isAudioPlaying ||
      !!(this.synth && this.synth.speaking) ||
      !!this.currentSourceNode
    );
  }

  public isSupported(): boolean {
    return true;
  }

  public testCurrentVoice(customPhrase?: string) {
    const activeAi = AI_VOICES.find((v) => v.id === this.settings.aiVoice);
    const phrase =
      customPhrase ||
      (this.settings.engine === "ai" && activeAi
        ? activeAi.sampleText
        : "Olá! Esta é a sua voz configurada no FisioGuia para estudar Fisiologia Humana.");
    this.speak(phrase);
  }
}

export const speechService = new SpeechService();

// Reconhecimento de Fala (Web Speech API) para respostas orais
export function startVoiceRecognition(
  onResult: (text: string, isFinal: boolean) => void,
  onEnd?: () => void,
  onError?: (err: any) => void
): { stop: () => void } | null {
  if (typeof window === "undefined") return null;

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if (onError) onError(new Error("Reconhecimento de voz não suportado neste navegador"));
    return null;
  }

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      if (finalTranscript) {
        onResult(finalTranscript.trim(), true);
      } else if (interimTranscript) {
        onResult(interimTranscript.trim(), false);
      }
    };

    recognition.onerror = (event: any) => {
      if (onError) onError(event);
    };

    recognition.onend = () => {
      if (onEnd) onEnd();
    };

    recognition.start();

    return {
      stop: () => {
        try {
          recognition.stop();
        } catch (e) {
          // ignore
        }
      },
    };
  } catch (err) {
    if (onError) onError(err);
    return null;
  }
}
