import { QUESTIONS_DATABASE } from "../data/questions";
import { SUBJECTS } from "../data/subjects";
import { THEORY_DATABASE } from "../data/theoryData";
import { INITIAL_UPDATES_REGISTRY } from "../data/updatesData";

export function exportStandaloneHTML(): void {
  const jsonQuestions = JSON.stringify(QUESTIONS_DATABASE);
  const jsonTheory = JSON.stringify(THEORY_DATABASE);
  const jsonUpdates = JSON.stringify(INITIAL_UPDATES_REGISTRY);
  const jsonSubjects = JSON.stringify(
    SUBJECTS.map((s) => ({
      id: s.id,
      title: s.title,
      shortTitle: s.shortTitle,
      icon: s.icon,
      subtitle: s.subtitle,
      themeColor: s.themeColor,
      summaryAudio: s.audioSummaryScript || s.summaryAudio,
      keyPrinciples: s.keyPrinciples,
      clinicalConstants: s.clinicalConstants,
      clinicalPathologies: s.clinicalPathologies,
      officialReferences: s.officialReferences,
      hotspots: s.hotspots.map((h) => ({
        id: h.id,
        title: h.title,
        subtitle: h.subtitle || "",
        xPercent: h.xPercent || h.x,
        yPercent: h.yPercent || h.y,
        description: h.description,
        clinicalPearl: h.clinicalPearl,
        functionSummary: h.functionSummary || "",
      })),
    }))
  );

  const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FisioGuia • Versão Offline Completa por Figueirabrava</title>
  <meta name="author" content="Figueirabrava" />
  <style>
    :root {
      --bg: #0b1120;
      --card-bg: #1e293b;
      --card-sub: #0f172a;
      --border: #334155;
      --border-accent: #38bdf8;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #38bdf8;
      --accent: #818cf8;
      --success: #34d399;
      --danger: #f87171;
      --amber: #fbbf24;
      --gold: #f59e0b;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    body { background-color: var(--bg); color: var(--text); padding: 16px; line-height: 1.6; }
    .container { max-width: 1100px; margin: 0 auto; }
    
    header { 
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 22px 24px;
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4);
    }
    h1 { font-size: 22px; display: flex; align-items: center; gap: 10px; color: var(--primary); }
    .badge-author { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #fff; font-weight: 800; font-size: 13px; padding: 6px 14px; border-radius: 9999px; border: 1px solid #fbbf24; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 8px rgba(245,158,11,0.3); }
    .badge-offline { background: #0369a1; color: #e0f2fe; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: bold; }

    /* Audio Bar */
    .audio-bar {
      background: #1e293b;
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 10px 18px;
      margin-bottom: 16px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      font-size: 13px;
    }
    .speed-select { background: #0f172a; border: 1px solid var(--border); color: #fff; padding: 4px 8px; border-radius: 6px; font-size: 12px; }

    /* Nav Buttons */
    .modes-container { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
    .mode-btn { background: var(--card-bg); border: 1px solid var(--border); color: var(--text-muted); padding: 9px 15px; border-radius: 12px; cursor: pointer; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; transition: all 0.2s; }
    .mode-btn:hover { border-color: var(--primary); color: #fff; }
    .mode-btn.active { background: #0284c7; color: #fff; border-color: var(--primary); box-shadow: 0 4px 12px rgba(2,132,199,0.3); }
    .mode-btn.special-tutor.active { background: #7c3aed; border-color: #a855f7; box-shadow: 0 4px 12px rgba(124,58,237,0.3); }

    .subject-tabs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
    .sub-btn { background: #0f172a; border: 1px solid var(--border); color: var(--text-muted); padding: 7px 12px; border-radius: 8px; cursor: pointer; font-size: 12.5px; font-weight: 600; transition: all 0.15s; }
    .sub-btn:hover { color: #fff; border-color: var(--primary); }
    .sub-btn.active { background: #1e293b; color: #fff; border-color: var(--primary); font-weight: bold; }

    .card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: 22px; margin-bottom: 22px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3); }
    .btn { padding: 8px 14px; border-radius: 10px; font-size: 13px; font-weight: 600; cursor: pointer; border: none; transition: 0.15s; display: inline-flex; align-items: center; gap: 6px; }
    .btn-primary { background: #0284c7; color: white; }
    .btn-primary:hover { background: #0369a1; }
    .btn-voice { background: #4f46e5; color: white; }
    .btn-voice:hover { background: #4338ca; }
    .btn-stop { background: #7f1d1d; color: #fee2e2; }

    /* Diagram & Hotspots */
    .diagram-viewport { position: relative; width: 100%; aspect-ratio: 16/10; max-height: 520px; background: #0f172a; border-radius: 16px; overflow: hidden; border: 1px solid var(--border); margin-bottom: 18px; }
    .hotspot-pin { position: absolute; transform: translate(-50%, -50%); width: 28px; height: 28px; border-radius: 50%; background: #38bdf8; border: 2px solid #ffffff; color: #0f172a; font-size: 11px; font-weight: bold; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 0 12px rgba(56,189,248,0.8); transition: transform 0.2s; z-index: 10; }
    .hotspot-pin:hover { transform: translate(-50%, -50%) scale(1.25); background: #f59e0b; color: #fff; }
    .hotspot-pin.active { background: #f59e0b; color: #fff; transform: translate(-50%, -50%) scale(1.3); }
    .pulse-ring { position: absolute; width: 100%; height: 100%; border-radius: 50%; border: 2px solid #38bdf8; animation: pulse 2s infinite; pointer-events: none; }
    @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2.2); opacity: 0; } }

    /* Inspector Card */
    .inspector-card { background: #0f172a; border: 1px solid var(--primary); border-radius: 14px; padding: 18px; margin-top: 14px; }
    
    /* Quiz */
    .option-btn { background: #0f172a; border: 1px solid var(--border); border-radius: 12px; padding: 14px 18px; color: var(--text); text-align: left; cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: space-between; gap: 12px; transition: all 0.15s; width: 100%; margin-bottom: 10px; }
    .option-btn:hover:not(:disabled) { border-color: var(--primary); background: #1e293b; }
    .option-btn.tentative { background: #0369a1 !important; border-color: var(--primary) !important; color: #fff !important; font-weight: bold; box-shadow: 0 0 12px rgba(56,189,248,0.4); }
    .option-btn.correct { background: #064e3b !important; border-color: var(--success) !important; color: #ecfdf5 !important; font-weight: bold; }
    .option-btn.wrong { background: #7f1d1d !important; border-color: var(--danger) !important; color: #fef2f2 !important; }
    .explanation-box { background: #0c4a6e; border: 1px solid var(--primary); border-radius: 12px; padding: 16px; margin-top: 16px; font-size: 13.5px; line-height: 1.6; }

    /* Tables */
    table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
    th, td { padding: 10px 14px; text-align: left; border-bottom: 1px solid var(--border); }
    th { background: #0f172a; color: var(--primary); font-weight: bold; }

    /* Formula & Steps */
    .formula-box { background: #020617; border: 1px solid #ca8a04; border-radius: 10px; padding: 16px; margin: 16px 0; text-align: center; }
    .formula-math { font-size: 20px; font-weight: bold; color: #fde047; font-family: monospace; }
    .step-card { background: #1e293b; border: 1px solid var(--border); border-radius: 10px; padding: 14px; }
    .pearl-box { background: rgba(244, 63, 94, 0.1); border: 1px solid #f43f5e; border-radius: 10px; padding: 12px 16px; margin-top: 12px; font-size: 13px; color: #fecdd3; }
    .exam-box { background: rgba(245, 158, 11, 0.1); border: 1px solid #f59e0b; border-radius: 10px; padding: 12px 16px; margin-top: 10px; font-size: 13px; color: #fef3c7; }

    /* Chat / Tutor */
    .chat-box { background: #0f172a; border: 1px solid var(--border); border-radius: 14px; padding: 16px; height: 380px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; margin-bottom: 14px; }
    .msg-user { background: #0284c7; color: #fff; padding: 10px 14px; border-radius: 14px 14px 2px 14px; align-self: flex-end; max-width: 80%; font-size: 13.5px; }
    .msg-bot { background: #1e293b; border: 1px solid var(--border); color: #e2e8f0; padding: 14px 16px; border-radius: 14px 14px 14px 2px; align-self: flex-start; max-width: 85%; font-size: 13.5px; line-height: 1.6; white-space: pre-wrap; }
    .chat-input-bar { display: flex; gap: 8px; }
    .chat-input { flex: 1; background: #0f172a; border: 1px solid var(--border); padding: 12px 16px; border-radius: 10px; color: #fff; font-size: 14px; outline: none; }
    .chat-input:focus { border-color: var(--primary); }
    .prompt-chip { background: #1e293b; border: 1px solid var(--border); color: #38bdf8; font-size: 11px; padding: 5px 10px; border-radius: 9999px; cursor: pointer; transition: 0.15s; }
    .prompt-chip:hover { background: #0284c7; color: #fff; }

    footer { text-align: center; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 30px; font-size: 12px; color: var(--text-muted); }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div>
        <h1>🧠 FisioGuia • Versão Standalone Offline Completa</h1>
        <p style="color: var(--text-muted); font-size: 13px; margin-top: 4px;">
          Teoria + Atlas Interativo + Constantes Clínicas + 312 Questões + Tutor Offline • <strong>Autor: Figueirabrava</strong> (figueirabrava@gmail.com)
        </p>
      </div>
      <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
        <span class="badge-author">✨ Autor: Figueirabrava</span>
        <span class="badge-offline">100% Offline (Sem Login)</span>
      </div>
    </header>

    <!-- Global Voice Bar -->
    <div class="audio-bar">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>🔊 <strong>Áudio & Síntese de Voz:</strong></span>
        <button class="btn btn-stop" onclick="stopSpeech()">⏹️ Parar Voz</button>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <label for="speed-ctrl">Velocidade:</label>
        <select id="speed-ctrl" class="speed-select" onchange="updateSpeechRate()">
          <option value="0.8">0.8x</option>
          <option value="1.0" selected>1.0x (Padrão)</option>
          <option value="1.2">1.2x</option>
          <option value="1.5">1.5x</option>
        </select>
      </div>
    </div>

    <!-- Navigation Modes -->
    <div class="modes-container">
      <button id="btn-mode-theory" class="mode-btn active" onclick="setMode('theory')">📖 Apostila & Teoria</button>
      <button id="btn-mode-diagram" class="mode-btn" onclick="setMode('diagram')">🔬 Atlas & Diagramas</button>
      <button id="btn-mode-constants" class="mode-btn" onclick="setMode('constants')">📊 Constantes & Fisiopatologia</button>
      <button id="btn-mode-quiz" class="mode-btn" onclick="setMode('quiz')">⚡ Simulado Interativo</button>
      <button id="btn-mode-bank" class="mode-btn" onclick="setMode('bank')">📝 Banco Completo (312 Qs)</button>
      <button id="btn-mode-tutor" class="mode-btn special-tutor" onclick="setMode('tutor')">🤖 Tutor Inteligente</button>
      <button id="btn-mode-updates" class="mode-btn" onclick="setMode('updates')">🔄 Atualizações dos 6 Sistemas</button>
      <button id="btn-mode-calcs" class="mode-btn" onclick="setMode('calcs')">🧮 Calculadoras Fisiológicas</button>
    </div>

    <!-- Subject Selector -->
    <div class="subject-tabs" id="subject-tabs-container"></div>

    <!-- VIEW 1: THEORY -->
    <div id="view-theory"></div>

    <!-- VIEW 2: DIAGRAM & ATLAS -->
    <div id="view-diagram" style="display: none;"></div>

    <!-- VIEW 3: CONSTANTS & PATHOLOGY -->
    <div id="view-constants" style="display: none;"></div>

    <!-- VIEW 4: QUIZ -->
    <div id="view-quiz" style="display: none;">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span id="quiz-badge" style="font-size: 11px; font-weight: bold; color: var(--primary); text-transform: uppercase;"></span>
          <span id="quiz-counter" style="font-size: 12px; color: var(--text-muted);">Questão 1 de 52</span>
        </div>
        <div style="font-size: 17px; font-weight: 600; margin-bottom: 18px; line-height: 1.6;" id="quiz-statement"></div>
        <div id="quiz-options"></div>

        <div id="quiz-confirm-box" style="display: none; margin-top: 14px; padding: 14px 18px; background: rgba(14, 165, 233, 0.12); border: 1px solid var(--primary); border-radius: 12px; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
          <div>
            <div id="quiz-selected-label" style="font-size: 13.5px; font-weight: bold; color: #fff;">Opção A selecionada</div>
            <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">Você pode alterar a opção antes de confirmar definitivamente.</div>
          </div>
          <button class="btn btn-primary" id="btn-quiz-confirm" onclick="confirmQuizAnswer()" style="background: #059669; font-weight: bold; font-size: 13px; padding: 10px 18px;">Confirmar Resposta Definitiva ✓</button>
        </div>

        <div id="quiz-explanation" class="explanation-box" style="display: none;"></div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 18px;">
          <button class="btn btn-voice" onclick="readCurrentQuizQuestion()">🔊 Ouvir Pergunta</button>
          <div style="display: flex; gap: 8px;">
            <span style="font-size: 13px; font-weight: bold; color: var(--amber); margin-right: 12px; align-self: center;">
              Acertos: <span id="quiz-score">0</span> / <span id="quiz-total-answered">0</span>
            </span>
            <button class="btn btn-primary" id="btn-quiz-next" onclick="nextQuizQuestion()" style="display: none;">Próxima Questão ➔</button>
          </div>
        </div>
      </div>
    </div>

    <!-- VIEW 5: QUESTION BANK -->
    <div id="view-bank" style="display: none;">
      <div class="card">
        <div style="display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap;">
          <input type="text" id="bank-search" class="chat-input" placeholder="Buscar por termo, droga, patologia, autor..." oninput="renderBankList()" />
          <select id="bank-diff-filter" class="speed-select" onchange="renderBankList()" style="padding: 10px 14px; font-size: 13px;">
            <option value="">Todas as Dificuldades</option>
            <option value="Fácil">Fácil</option>
            <option value="Médio">Médio</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>
        <div id="bank-list"></div>
      </div>
    </div>

    <!-- VIEW 6: OFFLINE AI TUTOR -->
    <div id="view-tutor" style="display: none;">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
          <div>
            <h3 style="font-size: 18px; color: #c084fc;">🤖 Tutor Especialista em Fisiologia Humana (Offline)</h3>
            <p style="font-size: 12px; color: var(--text-muted);">Base médica completa Guyton, Silverthorn, Kandel e West integrada. Funciona 100% sem internet!</p>
          </div>
          <span class="badge-offline">Motor Local Ativo</span>
        </div>

        <!-- Quick prompts chips -->
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;">
          <button class="prompt-chip" onclick="askTutor('Explique a bomba de Na+/K+ e o potencial de repouso')">⚡ Bomba Na+/K+</button>
          <button class="prompt-chip" onclick="askTutor('Como ocorre a transmissão sináptica química e liberação de vesículas?')">🧠 Sinapses</button>
          <button class="prompt-chip" onclick="askTutor('Explique as fases do ciclo cardíaco e a regulação da pressão arterial')">❤️ Ciclo Cardíaco</button>
          <button class="prompt-chip" onclick="askTutor('Como funciona a filtração glomerular, TFG e o sistema renina-angiotensina?')">🩸 Filtração Renal</button>
          <button class="prompt-chip" onclick="askTutor('Descreva a lei de difusão de Fick e as trocas gasosas alveolares')">🫁 Trocas Gasosas</button>
          <button class="prompt-chip" onclick="askTutor('Qual o mecanismo da secreção gástrica de HCl e o papel das células parietais?')">🧪 Secreção de HCl</button>
        </div>

        <div class="chat-box" id="tutor-chat-box"></div>

        <div class="chat-input-bar">
          <input type="text" id="tutor-input" class="chat-input" placeholder="Faça uma pergunta sobre fisiologia, mecanismos moleculares, fórmulas ou patologias..." onkeydown="if(event.key==='Enter') sendTutorMessage()" />
          <button class="btn btn-primary" onclick="sendTutorMessage()" style="padding: 12px 20px;">Perguntar</button>
        </div>
      </div>
    </div>

    <!-- VIEW 7: UPDATES DOS 6 SISTEMAS -->
    <div id="view-updates" style="display: none;">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
          <div>
            <h3 style="font-size: 18px; color: #38bdf8; display: flex; align-items: center; gap: 8px;">
              🔄 Atualizações Clínicas & Descobertas dos 6 Sistemas
            </h3>
            <p style="font-size: 12px; color: var(--text-muted);">
              Sincronização com as mais recentes notas fisiológicas de Guyton & Hall e Silverthorn.
            </p>
          </div>
          <button class="btn btn-primary" onclick="syncLiveUpdates()" style="background: #0284c7;">
            🔄 Sincronizar Agora se Online
          </button>
        </div>
        <div id="updates-sync-status" style="display: none; padding: 10px; background: rgba(56,189,248,0.15); border: 1px solid #38bdf8; border-radius: 10px; margin-bottom: 16px; font-size: 12.5px;"></div>
        <div id="updates-list-container"></div>
      </div>
    </div>

    <!-- VIEW 8: CALCULADORAS FISIOLÓGICAS INTERATIVAS -->
    <div id="view-calcs" style="display: none;">
      <div class="card">
        <div style="margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
          <h3 style="font-size: 18px; color: #34d399; display: flex; align-items: center; gap: 8px;">
            🧮 Calculadoras Fisiológicas & Prática Médica
          </h3>
          <p style="font-size: 12px; color: var(--text-muted);">
            Fórmulas biofísicas de Guyton & Hall com cálculo em tempo real e interpretação clínica.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
          <!-- Calc 1: TFG -->
          <div style="background: #0f172a; border: 1px solid var(--border); border-radius: 12px; padding: 16px;">
            <h4 style="color: #38bdf8; font-size: 14px; margin-bottom: 8px;">Clearance de Creatinina (Cockcroft-Gault)</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Idade (anos):</label>
                <input type="number" id="calc-tfg-age" value="30" oninput="recalcTFG()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Peso (kg):</label>
                <input type="number" id="calc-tfg-weight" value="70" oninput="recalcTFG()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Cr Sérica (mg/dL):</label>
                <input type="number" step="0.1" id="calc-tfg-cr" value="1.0" oninput="recalcTFG()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Sexo:</label>
                <select id="calc-tfg-gender" onchange="recalcTFG()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;">
                  <option value="m">Masculino</option>
                  <option value="f">Feminino (x0.85)</option>
                </select>
              </div>
            </div>
            <div style="background: #020617; padding: 10px; border-radius: 8px; border: 1px solid #38bdf8; text-align: center;">
              <span style="font-size: 11px; color: var(--text-muted);">TFG Estimada:</span>
              <div id="calc-tfg-result" style="font-size: 20px; font-weight: bold; color: #38bdf8; font-family: monospace;">106.9 mL/min</div>
              <div id="calc-tfg-stage" style="font-size: 11px; color: #34d399; margin-top: 4px;">Estágio 1 (Função Renal Normal)</div>
            </div>
          </div>

          <!-- Calc 2: Nernst -->
          <div style="background: #0f172a; border: 1px solid var(--border); border-radius: 12px; padding: 16px;">
            <h4 style="color: #a855f7; font-size: 14px; margin-bottom: 8px;">Potencial de Equilíbrio de Nernst (37°C)</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 10px;">
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Valência (z):</label>
                <input type="number" id="calc-nernst-z" value="1" oninput="recalcNernst()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">[C] Fora (mM):</label>
                <input type="number" step="0.1" id="calc-nernst-out" value="4.5" oninput="recalcNernst()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">[C] Dentro (mM):</label>
                <input type="number" step="0.1" id="calc-nernst-in" value="150" oninput="recalcNernst()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
            </div>
            <div style="background: #020617; padding: 10px; border-radius: 8px; border: 1px solid #a855f7; text-align: center;">
              <span style="font-size: 11px; color: var(--text-muted);">Potencial de Equilíbrio E_ion:</span>
              <div id="calc-nernst-result" style="font-size: 20px; font-weight: bold; color: #c084fc; font-family: monospace;">-93.7 mV</div>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">Equilíbrio entre forças elétricas e químicas</div>
            </div>
          </div>

          <!-- Calc 3: Débito Cardíaco -->
          <div style="background: #0f172a; border: 1px solid var(--border); border-radius: 12px; padding: 16px;">
            <h4 style="color: #f43f5e; font-size: 14px; margin-bottom: 8px;">Débito Cardíaco (DC = VS x FC)</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Vol. Sistólico (mL):</label>
                <input type="number" id="calc-dc-vs" value="70" oninput="recalcDC()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Freq. Cardíaca (bpm):</label>
                <input type="number" id="calc-dc-fc" value="75" oninput="recalcDC()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
            </div>
            <div style="background: #020617; padding: 10px; border-radius: 8px; border: 1px solid #f43f5e; text-align: center;">
              <span style="font-size: 11px; color: var(--text-muted);">Débito Cardíaco Total:</span>
              <div id="calc-dc-result" style="font-size: 20px; font-weight: bold; color: #fb7185; font-family: monospace;">5.25 L/min</div>
              <div style="font-size: 11px; color: #34d399; margin-top: 4px;">Faixa fisiológica de repouso (4.5 a 6.0 L/min)</div>
            </div>
          </div>

          <!-- Calc 4: Osmolaridade Plasmática -->
          <div style="background: #0f172a; border: 1px solid var(--border); border-radius: 12px; padding: 16px;">
            <h4 style="color: #f59e0b; font-size: 14px; margin-bottom: 8px;">Osmolaridade Plasmática</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 10px;">
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Na+ (mEq/L):</label>
                <input type="number" id="calc-osmo-na" value="140" oninput="recalcOsmo()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Glicose (mg/dL):</label>
                <input type="number" id="calc-osmo-gli" value="90" oninput="recalcOsmo()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
              <div>
                <label style="font-size: 11px; color: var(--text-muted);">Ureia (mg/dL):</label>
                <input type="number" id="calc-osmo-ur" value="30" oninput="recalcOsmo()" style="width: 100%; background: #1e293b; border: 1px solid var(--border); color: #fff; padding: 6px; border-radius: 6px; font-size: 12px;" />
              </div>
            </div>
            <div style="background: #020617; padding: 10px; border-radius: 8px; border: 1px solid #f59e0b; text-align: center;">
              <span style="font-size: 11px; color: var(--text-muted);">Osmolaridade Calculada:</span>
              <div id="calc-osmo-result" style="font-size: 20px; font-weight: bold; color: #fbbf24; font-family: monospace;">290.0 mOsm/kg</div>
              <div style="font-size: 11px; color: #34d399; margin-top: 4px;">Iso-osmolar Normal (280 - 295 mOsm/kg)</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer>
      <div style="margin-bottom: 8px;">
        <span class="badge-author">Figueirabrava • Coordenação & Autoria Oficial</span>
      </div>
      <p>FisioGuia • Plataforma Didática de Fisiologia Humana • Baseado nos tratados de Guyton & Hall, Silverthorn, Kandel e West.</p>
      <p style="margin-top: 4px; opacity: 0.7;">Versão Offline Standalone de Alto Desempenho • Sem dependências externas ou logins de terceiros.</p>
    </footer>
  </div>

  <script>
    const subjects = ${jsonSubjects};
    const allQuestions = ${jsonQuestions};
    const theoryDb = ${jsonTheory};
    let updatesDb = ${jsonUpdates};

    let currentSubjectId = 'neurofisiologia';
    let currentMode = 'theory';
    let currentQIndex = 0;
    let quizScore = 0;
    let quizTotalAnswered = 0;
    let answeredCurrent = false;
    let speechRate = 1.0;
    let selectedHotspotId = null;

    const chatHistory = [
      {
        role: 'bot',
        text: 'Olá! Sou o seu Tutor de Fisiologia Humana Offline por Figueirabrava. Posso explicar qualquer mecanismo celular, fórmula biofísica, ciclo cardiovascular, trocas respiratórias, filtração renal ou digestão. Digite sua pergunta ou clique nos botões acima!'
      }
    ];

    function init() {
      renderSubjectTabs();
      renderTheoryView();
      renderDiagramView();
      renderConstantsView();
      renderQuizQuestion();
      renderBankList();
      renderTutorChat();
      renderUpdatesView();
      pingAuthorTelemetry(false);
    }

    // Telemetry Ping para o autor Figueirabrava (Online & Fila Offline)
    function pingAuthorTelemetry(recovered) {
      try {
        const payload = {
          events: [{
            id: 'ev_html_' + Math.random().toString(36).substring(2, 9),
            timestamp: new Date().toISOString(),
            subjectId: currentSubjectId || 'geral',
            eventType: 'open',
            offlineRecovered: !!recovered
          }],
          deviceInfo: {
            platform: (navigator && navigator.platform) || 'html_standalone',
            userAgent: (navigator && navigator.userAgent) || '',
            language: (navigator && navigator.language) || ''
          }
        };

        fetch('/api/telemetry/ping', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).then(res => {
          if (res.ok) {
            localStorage.removeItem('fisioguia_html_telemetry_queue');
          }
        }).catch(() => {
          const q = JSON.parse(localStorage.getItem('fisioguia_html_telemetry_queue') || '[]');
          q.push({ timestamp: new Date().toISOString(), subjectId: currentSubjectId });
          localStorage.setItem('fisioguia_html_telemetry_queue', JSON.stringify(q));
        });
      } catch (e) {}
    }

    window.addEventListener('online', () => {
      const q = JSON.parse(localStorage.getItem('fisioguia_html_telemetry_queue') || '[]');
      if (q.length > 0) {
        pingAuthorTelemetry(true);
      }
      syncLiveUpdates();
    });

    function normalizeKey(id) {
      if (id === 'cardiorrespiratoria') return 'cardiorrespiratorio';
      if (id === 'digestoria') return 'digestorio';
      if (id === 'excretora') return 'excretor';
      return id;
    }

    function setMode(mode) {
      currentMode = mode;
      const modes = ['theory', 'diagram', 'constants', 'quiz', 'bank', 'tutor', 'updates', 'calcs'];
      modes.forEach(m => {
        const viewEl = document.getElementById('view-' + m);
        const btnEl = document.getElementById('btn-mode-' + m);
        if (viewEl) viewEl.style.display = m === mode ? 'block' : 'none';
        if (btnEl) {
          if (m === mode) btnEl.classList.add('active');
          else btnEl.classList.remove('active');
        }
      });
      stopSpeech();
    }

    function renderSubjectTabs() {
      const container = document.getElementById('subject-tabs-container');
      let html = '';
      subjects.forEach(s => {
        const active = s.id === currentSubjectId ? 'active' : '';
        html += '<button class="sub-btn ' + active + '" onclick="selectSubject(\\'' + s.id + '\\')">' + s.icon + ' ' + s.shortTitle + '</button>';
      });
      container.innerHTML = html;
    }

    function selectSubject(id) {
      currentSubjectId = id;
      currentQIndex = 0;
      selectedHotspotId = null;
      renderSubjectTabs();
      renderTheoryView();
      renderDiagramView();
      renderConstantsView();
      renderQuizQuestion();
      renderBankList();
    }

    /* SPEECH SYNTHESIS ENGINE */
    function updateSpeechRate() {
      const val = parseFloat(document.getElementById('speed-ctrl').value) || 1.0;
      speechRate = val;
    }

    function stopSpeech() {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    function speakText(text) {
      if (!('speechSynthesis' in window)) {
        alert('Seu navegador não suporta sintetizador de voz local.');
        return;
      }
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pt-BR';
      utter.rate = speechRate;
      window.speechSynthesis.speak(utter);
    }

    /* 1. THEORY VIEW */
    function renderTheoryView() {
      const key = normalizeKey(currentSubjectId);
      const theory = theoryDb[key] || theoryDb['fisiologia-celular'];
      const subj = subjects.find(s => s.id === currentSubjectId);
      const container = document.getElementById('view-theory');

      let html = '<div class="card">';
      html += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid var(--border); padding-bottom: 12px; flex-wrap: wrap; gap: 8px;">';
      html += '<div><span style="font-size: 11px; font-weight: bold; color: var(--primary); text-transform: uppercase;">Apostila Didática • Guyton & Silverthorn</span><h2 style="font-size: 22px; color: #fff; margin-top: 4px;">' + (subj ? subj.icon + ' ' + subj.title : theory.subjectTitle) + '</h2></div>';
      html += '<button class="btn btn-voice" onclick="speakText(\\'' + escapeString(theory.mainIntroduction) + '\\')">🔊 Ouvir Introdução</button>';
      html += '</div>';

      html += '<p style="font-size: 14px; line-height: 1.7; color: #cbd5e1; margin-bottom: 20px;">' + theory.mainIntroduction + '</p>';

      if (theory.learningObjectives && theory.learningObjectives.length) {
        html += '<div style="background: var(--card-sub); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 24px;">';
        html += '<strong style="color: var(--primary); font-size: 12px; text-transform: uppercase;">🎯 Objetivos de Aprendizagem:</strong>';
        html += '<ul style="margin: 8px 0 0 20px; font-size: 13.5px; color: #94a3b8; display: flex; flex-direction: column; gap: 4px;">';
        theory.learningObjectives.forEach(obj => {
          html += '<li>' + obj + '</li>';
        });
        html += '</ul></div>';
      }

      html += '<h3 style="font-size: 17px; margin-bottom: 16px; color: var(--primary);">Capítulos e Mecanismos Biofísicos:</h3>';

      theory.subtopics.forEach(sub => {
        html += '<div style="background: var(--card-sub); border: 1px solid var(--border); border-radius: 14px; padding: 20px; margin-bottom: 20px;">';
        html += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">';
        html += '<div><span style="background: #0369a1; color: #e0f2fe; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold; text-transform: uppercase;">' + sub.badge + '</span><h4 style="font-size: 17px; color: #fff; margin-top: 4px;">' + sub.title + '</h4></div>';
        html += '<button class="btn btn-voice" style="padding: 5px 10px; font-size: 11px;" onclick="speakText(\\'' + escapeString(sub.title + '. ' + sub.summary + '. ' + sub.clinicalPearl) + '\\')">🔊 Ouvir Tópico</button>';
        html += '</div>';

        html += '<p style="font-size: 13px; color: #38bdf8; font-weight: 500; margin-bottom: 12px;">' + sub.summary + '</p>';

        const paras = sub.fullExplanation.split('\\n\\n');
        paras.forEach(p => {
          html += '<p style="font-size: 13.5px; line-height: 1.7; color: #cbd5e1; margin-bottom: 10px;">' + p + '</p>';
        });

        if (sub.steps && sub.steps.length) {
          html += '<div style="margin: 16px 0;"><strong style="font-size: 12px; color: var(--accent); text-transform: uppercase;">⚡ Mecanismo Passo a Passo:</strong>';
          html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-top: 10px;">';
          sub.steps.forEach(st => {
            html += '<div class="step-card">';
            html += '<div style="font-size: 12px; font-weight: bold; color: var(--primary);">Passo ' + st.step + ': ' + st.title + '</div>';
            html += '<div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">' + st.description + '</div>';
            if (st.molecularDetail) {
              html += '<div style="font-size: 11px; color: #818cf8; margin-top: 6px; font-family: monospace;">' + st.molecularDetail + '</div>';
            }
            html += '</div>';
          });
          html += '</div></div>';
        }

        if (sub.keyFormula) {
          html += '<div class="formula-box">';
          html += '<div style="font-size: 11px; color: #ca8a04; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Fórmula Fisiológica</div>';
          html += '<div class="formula-math">' + sub.keyFormula.formula + '</div>';
          html += '<div style="font-size: 12px; color: #fde047; margin: 4px 0 8px 0;">' + sub.keyFormula.meaning + '</div>';
          html += '<div style="font-size: 11px; color: #cbd5e1; text-align: left; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 6px; margin-top: 8px;">';
          sub.keyFormula.variables.forEach(v => {
            html += '<div><strong style="color:#fde047;">' + v.symbol + ':</strong> ' + v.desc + '</div>';
          });
          html += '</div></div>';
        }

        if (sub.comparisonTable) {
          html += '<div style="overflow-x: auto; margin: 16px 0;"><table><thead><tr>';
          sub.comparisonTable.headers.forEach(h => { html += '<th>' + h + '</th>'; });
          html += '</tr></thead><tbody>';
          sub.comparisonTable.rows.forEach(r => {
            html += '<tr>';
            r.forEach((c, idx) => {
              html += '<td style="' + (idx === 0 ? 'font-weight: bold; color: #fff;' : 'color: #cbd5e1;') + '">' + c + '</td>';
            });
            html += '</tr>';
          });
          html += '</tbody></table></div>';
        }

        html += '<div class="pearl-box"><strong>🩺 Aplicação Clínica:</strong> ' + sub.clinicalPearl + '</div>';
        html += '<div class="exam-box"><strong>💡 Dica Para Provas:</strong> ' + sub.examTip + '</div>';
        html += '<div style="margin-top: 14px; text-align: right;"><button class="btn btn-primary" style="font-size:11px;" onclick="setMode(\\'quiz\\')">Praticar Questões deste Tema ➔</button></div>';

        html += '</div>';
      });

      html += '</div>';
      container.innerHTML = html;
    }

    /* 2. DIAGRAMS & HOTSPOTS ATLAS */
    function getSubjectSVG(id) {
      const key = normalizeKey(id);
      switch(key) {
        case 'neurofisiologia':
          return \`<svg viewBox="0 0 800 500" style="width:100%;height:100%;" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#4f46e5"/></linearGradient>
              <linearGradient id="stemGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#fbbf24"/><stop offset="100%" stopColor="#d97706"/></linearGradient>
              <linearGradient id="cerebGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f472b6"/><stop offset="100%" stopColor="#db2777"/></linearGradient>
            </defs>
            <rect width="800" height="500" fill="#0f172a" rx="16"/>
            <!-- CÉREBRO -->
            <path d="M 180,240 C 140,200 130,120 210,70 C 290,20 450,20 530,70 C 590,110 600,190 560,240 C 530,270 480,280 430,280 C 370,280 320,290 280,270 C 230,270 190,250 180,240 Z" fill="url(#brainGrad)" opacity="0.9" stroke="#3730a3" strokeWidth="3"/>
            <path d="M 240,90 Q 290,130 270,180 Q 250,220 320,240" stroke="#c7d2fe" strokeWidth="4" fill="none"/>
            <path d="M 330,60 Q 370,110 350,170 Q 380,210 440,220" stroke="#c7d2fe" strokeWidth="4" fill="none"/>
            <path d="M 420,60 Q 480,100 470,160 Q 520,180 540,220" stroke="#c7d2fe" strokeWidth="4" fill="none"/>
            <!-- CEREBELO -->
            <path d="M 480,240 C 540,240 590,270 590,320 C 590,370 530,400 460,390 C 440,360 440,300 460,260 Z" fill="url(#cerebGrad)" stroke="#9d174d" strokeWidth="3"/>
            <!-- TRONCO & MEDULA -->
            <path d="M 360,280 C 370,280 430,280 430,320 C 430,350 415,370 410,400 L 375,400 C 370,370 350,340 350,310 Z" fill="url(#stemGrad)" stroke="#b45309" strokeWidth="3"/>
            <path d="M 375,400 L 410,400 L 405,485 L 380,485 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="3"/>
            <!-- NEURÔNIO & SINAPSE -->
            <g transform="translate(620, 60)">
              <rect width="160" height="370" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
              <text x="80" y="24" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#38bdf8">Sinapse & Axônio</text>
              <circle cx="80" cy="70" r="22" fill="#818cf8"/>
              <line x1="80" y1="92" x2="80" y2="240" stroke="#f59e0b" strokeWidth="4"/>
              <rect x="71" y="110" width="18" height="24" rx="4" fill="#fbbf24"/>
              <rect x="71" y="150" width="18" height="24" rx="4" fill="#fbbf24"/>
              <rect x="71" y="190" width="18" height="24" rx="4" fill="#fbbf24"/>
              <circle cx="70" cy="275" r="7" fill="#ec4899"/>
              <circle cx="90" cy="275" r="7" fill="#ec4899"/>
              <path d="M 50,300 Q 80,310 110,300" stroke="#059669" strokeWidth="4" fill="none"/>
            </g>
          </svg>\`;

        case 'fisiologia-celular':
          return \`<svg viewBox="0 0 800 500" style="width:100%;height:100%;" preserveAspectRatio="xMidYMid meet">
            <rect width="800" height="500" fill="#0f172a" rx="16"/>
            <!-- MEMBRANA PLASMÁTICA -->
            <path d="M 120,250 C 110,120 240,60 400,60 C 580,60 690,130 680,260 C 670,390 560,450 390,440 C 220,430 130,380 120,250 Z" fill="#064e3b" stroke="#10b981" strokeWidth="6" opacity="0.8"/>
            <!-- NÚCLEO -->
            <ellipse cx="380" cy="240" rx="95" ry="85" fill="#312e81" stroke="#6366f1" strokeWidth="4"/>
            <circle cx="395" cy="225" r="28" fill="#1e1b4b" stroke="#a5b4fc" strokeWidth="2"/>
            <text x="395" y="230" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">DNA / rRNA</text>
            <!-- MITOCÔNDRIAS -->
            <g transform="translate(180, 140) rotate(-25)">
              <rect width="110" height="52" rx="26" fill="#c2410c" stroke="#f97316" strokeWidth="3"/>
              <path d="M 20,26 L 40,15 L 35,37 L 60,15 L 55,37 L 80,15 L 95,26" stroke="#fed7aa" strokeWidth="3" fill="none"/>
            </g>
            <!-- GOLGI -->
            <g transform="translate(480, 140)">
              <path d="M 20,10 Q 60,20 100,10" stroke="#ec4899" strokeWidth="7" fill="none"/>
              <path d="M 15,26 Q 60,38 105,26" stroke="#ec4899" strokeWidth="7" fill="none"/>
              <circle cx="118" cy="18" r="8" fill="#f43f5e"/>
            </g>
          </svg>\`;

        case 'sensorial':
          return \`<svg viewBox="0 0 800 500" style="width:100%;height:100%;" preserveAspectRatio="xMidYMid meet">
            <rect width="800" height="500" fill="#0f172a" rx="16"/>
            <!-- VISÃO -->
            <g transform="translate(40, 40)">
              <rect width="210" height="190" rx="12" fill="#1e293b" stroke="#0284c7" strokeWidth="2"/>
              <text x="105" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#38bdf8">Visão (Fotorrecepção)</text>
              <circle cx="95" cy="100" r="50" fill="#0f172a" stroke="#0284c7" strokeWidth="3"/>
              <path d="M 125,65 C 150,85 150,115 125,135" stroke="#ea580c" strokeWidth="6" fill="none"/>
            </g>
            <!-- AUDIÇÃO -->
            <g transform="translate(290, 40)">
              <rect width="220" height="190" rx="12" fill="#1e293b" stroke="#d97706" strokeWidth="2"/>
              <text x="110" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fbbf24">Audição & Cóclea</text>
              <path d="M 130,100 C 160,90 170,125 145,135 C 125,140 120,120 135,115" stroke="#f59e0b" strokeWidth="4" fill="none"/>
            </g>
            <!-- TATO -->
            <g transform="translate(540, 40)">
              <rect width="220" height="190" rx="12" fill="#1e293b" stroke="#16a34a" strokeWidth="2"/>
              <text x="110" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4ade80">Tato (Mecanorreceptores)</text>
              <ellipse cx="110" cy="100" rx="20" ry="12" fill="#22c55e"/>
            </g>
          </svg>\`;

        case 'digestorio':
          return \`<svg viewBox="0 0 800 500" style="width:100%;height:100%;" preserveAspectRatio="xMidYMid meet">
            <rect width="800" height="500" fill="#0f172a" rx="16"/>
            <!-- ESÔFAGO -->
            <line x1="400" y1="40" x2="400" y2="160" stroke="#f472b6" strokeWidth="12"/>
            <!-- FÍGADO -->
            <path d="M 230,165 C 290,140 370,160 370,220 C 370,250 310,265 240,245 Z" fill="#78350f" stroke="#b45309" strokeWidth="3"/>
            <ellipse cx="320" cy="235" rx="14" ry="20" fill="#22c55e"/>
            <!-- ESTÔMAGO -->
            <path d="M 395,160 C 435,160 480,180 480,230 C 480,280 410,290 370,280 C 390,250 410,210 395,160 Z" fill="#9f1239" stroke="#fda4af" strokeWidth="3"/>
            <!-- INTESTINOS -->
            <path d="M 270,410 L 270,300 C 270,270 350,270 350,270 L 470,270 C 520,270 520,300 520,410" stroke="#d97706" strokeWidth="24" strokeLinecap="round" fill="none"/>
            <path d="M 360,320 C 440,320 440,350 360,350 C 320,350 320,380 440,380" stroke="#fb7185" strokeWidth="16" fill="none"/>
          </svg>\`;

        case 'cardiorrespiratorio':
          return \`<svg viewBox="0 0 800 500" style="width:100%;height:100%;" preserveAspectRatio="xMidYMid meet">
            <rect width="800" height="500" fill="#0f172a" rx="16"/>
            <!-- TRAQUÉIA -->
            <line x1="400" y1="40" x2="400" y2="135" stroke="#cbd5e1" strokeWidth="16"/>
            <path d="M 400,135 L 330,175 M 400,135 L 470,175" stroke="#94a3b8" strokeWidth="10"/>
            <!-- PULMÕES -->
            <path d="M 330,120 C 270,120 220,170 210,260 C 200,340 240,410 320,410 C 340,410 350,380 340,320 Z" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="3" opacity="0.8"/>
            <path d="M 470,120 C 530,120 580,170 590,260 C 600,340 560,410 480,410 C 450,410 450,350 460,300 Z" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="3" opacity="0.8"/>
            <!-- CORAÇÃO -->
            <g transform="translate(340, 210)">
              <path d="M 60,30 C 20,-10 -20,30 10,70 C 40,110 60,140 60,140 C 60,140 80,110 110,70 C 140,30 100,-10 60,30 Z" fill="#991b1b" stroke="#ef4444" strokeWidth="4"/>
              <circle cx="35" cy="25" r="6" fill="#facc15"/>
              <path d="M 45,5 C 45,-30 85,-30 85,-5" stroke="#dc2626" strokeWidth="10" fill="none"/>
            </g>
            <!-- DIAFRAGMA -->
            <path d="M 170,430 Q 400,370 630,430" stroke="#059669" strokeWidth="8" fill="none"/>
          </svg>\`;

        case 'excretor':
          return \`<svg viewBox="0 0 800 500" style="width:100%;height:100%;" preserveAspectRatio="xMidYMid meet">
            <rect width="800" height="500" fill="#0f172a" rx="16"/>
            <!-- AORTA & CAVA -->
            <line x1="385" y1="30" x2="385" y2="350" stroke="#dc2626" strokeWidth="10"/>
            <line x1="415" y1="30" x2="415" y2="350" stroke="#2563eb" strokeWidth="10"/>
            <!-- RINS -->
            <path d="M 230,120 C 270,120 280,160 265,180 C 280,200 270,240 230,240 C 190,240 180,180 190,140 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="3"/>
            <path d="M 570,105 C 610,105 620,145 610,165 C 620,185 610,225 570,225 C 530,225 520,165 530,125 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="3"/>
            <!-- URETERES & BEXIGA -->
            <path d="M 265,190 C 270,270 340,320 375,375" stroke="#f59e0b" strokeWidth="4" fill="none"/>
            <path d="M 535,175 C 530,270 460,320 425,375" stroke="#f59e0b" strokeWidth="4" fill="none"/>
            <ellipse cx="400" cy="405" rx="55" ry="40" fill="#b45309" stroke="#f59e0b" strokeWidth="3"/>
          </svg>\`;

        default:
          return '<svg viewBox="0 0 800 500"><rect width="800" height="500" fill="#0f172a"/></svg>';
      }
    }

    function renderDiagramView() {
      const subj = subjects.find(s => s.id === currentSubjectId);
      const container = document.getElementById('view-diagram');
      if (!subj) return;

      let html = '<div class="card">';
      html += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">';
      html += '<div><span style="font-size: 11px; font-weight: bold; color: var(--primary); text-transform: uppercase;">Atlas Digital Anatomo-Fisiológico</span><h2 style="font-size: 20px; color: #fff; margin-top: 4px;">' + subj.icon + ' ' + subj.title + '</h2></div>';
      html += '<button class="btn btn-voice" onclick="speakText(\\'' + escapeString(subj.title + '. ' + subj.summaryAudio) + '\\')">🔊 Ouvir Atlas Completo</button>';
      html += '</div>';

      html += '<p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">Clique nos pontos anatômicos pulsantes (hotspots) para inspecionar os mecanismos moleculares e ouvir o áudio didático:</p>';

      // Diagram container
      html += '<div class="diagram-viewport">';
      html += getSubjectSVG(subj.id);

      subj.hotspots.forEach((h, idx) => {
        const isActive = selectedHotspotId === h.id ? 'active' : '';
        html += '<div class="hotspot-pin ' + isActive + '" style="left: ' + h.xPercent + '%; top: ' + h.yPercent + '%;" onclick="selectHotspot(\\'' + h.id + '\\')" title="' + h.title + '">';
        html += '<div class="pulse-ring"></div>';
        html += (idx + 1);
        html += '</div>';
      });

      html += '</div>';

      // Inspector Section
      const currentH = subj.hotspots.find(h => h.id === selectedHotspotId) || subj.hotspots[0];
      if (currentH) {
        html += '<div class="inspector-card">';
        html += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">';
        html += '<div><span style="font-size: 11px; font-weight: bold; color: var(--accent); text-transform: uppercase;">Estrutura Selecionada</span><h3 style="font-size: 18px; color: #fff; margin-top: 2px;">' + currentH.title + '</h3><div style="font-size: 12px; color: var(--text-muted);">' + currentH.subtitle + '</div></div>';
        html += '<button class="btn btn-voice" onclick="speakText(\\'' + escapeString(currentH.title + '. ' + currentH.description + '. Destaque clínico: ' + currentH.clinicalPearl) + '\\')">🔊 Ouvir Estrutura</button>';
        html += '</div>';

        html += '<p style="font-size: 13.5px; line-height: 1.7; color: #cbd5e1; margin-bottom: 12px;">' + currentH.description + '</p>';
        html += '<div class="pearl-box"><strong>🩺 Aplicação Clínica & Fisiopatologia:</strong> ' + currentH.clinicalPearl + '</div>';
        html += '</div>';
      }

      html += '</div>';
      container.innerHTML = html;
    }

    function selectHotspot(id) {
      selectedHotspotId = id;
      renderDiagramView();
    }

    /* 3. CONSTANTS & PATHOLOGY VIEW */
    function renderConstantsView() {
      const subj = subjects.find(s => s.id === currentSubjectId);
      const container = document.getElementById('view-constants');
      if (!subj) return;

      let html = '<div class="card">';
      html += '<h2 style="font-size: 20px; color: #fff; margin-bottom: 6px;">' + subj.icon + ' Constantes Laboratoriais & Fisiopatologia Aplicada</h2>';
      html += '<p style="font-size: 13px; color: var(--text-muted); margin-bottom: 20px;">Valores de referência e correlações clínicas fundamentadas no Tratado Guyton & Hall.</p>';

      if (subj.clinicalConstants && subj.clinicalConstants.length) {
        html += '<h3 style="font-size: 16px; color: var(--primary); margin-bottom: 10px;">📊 Constantes Fisiológicas & Valores Normais:</h3>';
        html += '<div style="overflow-x: auto; margin-bottom: 24px;"><table><thead><tr><th>Parâmetro</th><th>Valor Normal</th><th>Interpretação Fisiológica</th></tr></thead><tbody>';
        subj.clinicalConstants.forEach(c => {
          html += '<tr><td style="font-weight: bold; color: #fff;">' + c.label + '</td><td style="color: var(--amber); font-weight: bold;">' + c.value + ' ' + (c.unit || '') + '</td><td style="color: #cbd5e1;">' + c.interpretation + '</td></tr>';
        });
        html += '</tbody></table></div>';
      }

      if (subj.clinicalPathologies && subj.clinicalPathologies.length) {
        html += '<h3 style="font-size: 16px; color: #f43f5e; margin-bottom: 10px;">🩺 Fisiopatologia e Mecanismos de Doença:</h3>';
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px; margin-bottom: 24px;">';
        subj.clinicalPathologies.forEach(p => {
          html += '<div style="background: var(--card-sub); border: 1px solid var(--border); border-radius: 12px; padding: 16px;">';
          html += '<h4 style="font-size: 15px; color: #fecdd3; font-weight: bold; margin-bottom: 6px;">' + p.condition + '</h4>';
          html += '<p style="font-size: 13px; line-height: 1.6; color: #cbd5e1;">' + p.mechanism + '</p>';
          html += '</div>';
        });
        html += '</div>';
      }

      if (subj.officialReferences && subj.officialReferences.length) {
        html += '<div style="background: var(--card-sub); border: 1px solid var(--border); border-radius: 12px; padding: 14px;">';
        html += '<strong style="color: var(--accent); font-size: 12px; text-transform: uppercase;">📚 Bibliografia Recomendada:</strong>';
        html += '<ul style="margin: 6px 0 0 20px; font-size: 13px; color: #94a3b8;">';
        subj.officialReferences.forEach(ref => { html += '<li>' + ref + '</li>'; });
        html += '</ul></div>';
      }

      html += '</div>';
      container.innerHTML = html;
    }

    let tentativeQuizIdx = null;

    /* 4. QUIZ VIEW */
    function renderQuizQuestion() {
      answeredCurrent = false;
      tentativeQuizIdx = null;
      document.getElementById('btn-quiz-next').style.display = 'none';
      document.getElementById('quiz-explanation').style.display = 'none';
      const cBox = document.getElementById('quiz-confirm-box');
      if (cBox) cBox.style.display = 'none';

      const filtered = allQuestions.filter(q => q.subjectId === currentSubjectId);
      if (!filtered.length) return;

      const q = filtered[currentQIndex % filtered.length];
      const subj = subjects.find(s => s.id === q.subjectId);

      document.getElementById('quiz-badge').innerText = (subj ? subj.icon + ' ' + subj.title : 'Fisiologia') + ' • ' + q.subtopic;
      document.getElementById('quiz-counter').innerText = 'Questão ' + ((currentQIndex % filtered.length) + 1) + ' de ' + filtered.length;
      document.getElementById('quiz-statement').innerText = q.question;

      const optsContainer = document.getElementById('quiz-options');
      optsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = '<span><strong>' + letters[idx] + ')</strong> ' + opt + '</span>';
        btn.onclick = () => selectTentativeQuizOption(idx, q);
        optsContainer.appendChild(btn);
      });
    }

    function selectTentativeQuizOption(idx, q) {
      if (answeredCurrent) return;
      tentativeQuizIdx = idx;
      const letters = ['A', 'B', 'C', 'D'];

      const btns = document.querySelectorAll('#quiz-options .option-btn');
      btns.forEach((btn, i) => {
        if (i === idx) btn.classList.add('tentative');
        else btn.classList.remove('tentative');
      });

      const cBox = document.getElementById('quiz-confirm-box');
      if (cBox) {
        cBox.style.display = 'flex';
        document.getElementById('quiz-selected-label').innerText = 'Opção ' + letters[idx] + ' marcada para conferência';
      }
    }

    function confirmQuizAnswer() {
      if (answeredCurrent || tentativeQuizIdx === null) return;
      const filtered = allQuestions.filter(q => q.subjectId === currentSubjectId);
      const q = filtered[currentQIndex % filtered.length];
      handleQuizAnswer(tentativeQuizIdx, q);
      const cBox = document.getElementById('quiz-confirm-box');
      if (cBox) cBox.style.display = 'none';
    }

    function handleQuizAnswer(selectedIdx, q) {
      if (answeredCurrent) return;
      answeredCurrent = true;
      quizTotalAnswered++;
      const isCorrect = selectedIdx === q.correctIndex;
      if (isCorrect) quizScore++;

      document.getElementById('quiz-score').innerText = quizScore;
      document.getElementById('quiz-total-answered').innerText = quizTotalAnswered;

      const btns = document.querySelectorAll('#quiz-options .option-btn');
      btns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) btn.classList.add('correct');
        else if (idx === selectedIdx) btn.classList.add('wrong');
      });

      const expBox = document.getElementById('quiz-explanation');
      expBox.style.display = 'block';
      expBox.innerHTML = '<strong>' + (isCorrect ? '✅ Resposta Correta!' : '❌ Incorreta.') + '</strong><br>' + q.explanation + '<br><small style="color: var(--primary); margin-top: 6px; display: block;">Fonte Oficial: ' + q.officialReference + '</small>';

      document.getElementById('btn-quiz-next').style.display = 'inline-block';
      speakText((isCorrect ? 'Correto! ' : 'Incorreto. ') + q.explanation);
    }

    function nextQuizQuestion() {
      const filtered = allQuestions.filter(q => q.subjectId === currentSubjectId);
      currentQIndex = (currentQIndex + 1) % filtered.length;
      renderQuizQuestion();
    }

    function readCurrentQuizQuestion() {
      const filtered = allQuestions.filter(q => q.subjectId === currentSubjectId);
      const q = filtered[currentQIndex % filtered.length];
      let txt = q.question + '. ';
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((opt, i) => { txt += 'Opção ' + letters[i] + ': ' + opt + '. '; });
      speakText(txt);
    }

    /* 5. BANK LIST VIEW */
    function renderBankList() {
      const search = (document.getElementById('bank-search').value || '').toLowerCase();
      const diffFilter = document.getElementById('bank-diff-filter').value;
      const container = document.getElementById('bank-list');

      let filtered = allQuestions.filter(q => q.subjectId === currentSubjectId);
      if (diffFilter) filtered = filtered.filter(q => q.difficulty === diffFilter);

      if (search) {
        filtered = filtered.filter(q =>
          q.question.toLowerCase().includes(search) ||
          q.explanation.toLowerCase().includes(search) ||
          q.subtopic.toLowerCase().includes(search) ||
          q.officialReference.toLowerCase().includes(search)
        );
      }

      let html = '<p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px;">Exibindo ' + filtered.length + ' questões com gabarito:</p>';
      filtered.forEach((q, idx) => {
        const letters = ['A', 'B', 'C', 'D'];
        html += '<div style="background: var(--card-sub); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 12px;">';
        html += '<div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: bold; color: var(--primary); text-transform: uppercase; margin-bottom: 4px;"><span>#' + (idx + 1) + ' • ' + q.subtopic + '</span><span style="color: var(--amber);">' + q.difficulty + '</span></div>';
        html += '<div style="font-size: 15px; font-weight: 600; margin-bottom: 10px;">' + q.question + '</div>';
        html += '<ul style="list-style: none; padding: 0; margin-bottom: 12px; font-size: 13px; display: flex; flex-direction: column; gap: 4px;">';
        q.options.forEach((opt, oIdx) => {
          const isAns = oIdx === q.correctIndex;
          html += '<li style="padding: 6px 10px; border-radius: 6px; background: ' + (isAns ? '#064e3b' : 'transparent') + '; color: ' + (isAns ? '#34d399; font-weight: bold;' : 'inherit') + ';"><strong>' + letters[oIdx] + ')</strong> ' + opt + (isAns ? '  (GABARITO OFICIAL)' : '') + '</li>';
        });
        html += '</ul>';
        html += '<div style="font-size: 12px; color: #94a3b8; background: #0b1120; padding: 10px; border-radius: 8px;"><strong>Justificativa Oficial:</strong> ' + q.explanation + '<br><span style="color: #38bdf8;">Fonte: ' + q.officialReference + '</span></div>';
        html += '</div>';
      });

      container.innerHTML = html;
    }

    /* 6. TUTOR OFFLINE LOGIC */
    function renderTutorChat() {
      const box = document.getElementById('tutor-chat-box');
      let html = '';
      chatHistory.forEach(msg => {
        if (msg.role === 'user') {
          html += '<div class="msg-user">' + msg.text + '</div>';
        } else {
          html += '<div class="msg-bot">' + msg.text + '<div style="margin-top: 8px;"><button class="btn btn-voice" style="padding: 4px 8px; font-size: 11px;" onclick="speakText(\\'' + escapeString(msg.text) + '\\')">🔊 Ouvir Resposta</button></div></div>';
        }
      });
      box.innerHTML = html;
      box.scrollTop = box.scrollHeight;
    }

    function askTutor(query) {
      document.getElementById('tutor-input').value = query;
      sendTutorMessage();
    }

    function sendTutorMessage() {
      const input = document.getElementById('tutor-input');
      const text = input.value.trim();
      if (!text) return;

      chatHistory.push({ role: 'user', text });
      input.value = '';
      renderTutorChat();

      // Search local database
      const reply = answerFromLocalKnowledgeBase(text);
      chatHistory.push({ role: 'bot', text: reply });
      renderTutorChat();
      speakText(reply);
    }

    function answerFromLocalKnowledgeBase(query) {
      const q = query.toLowerCase();
      let bestMatch = null;
      let highestScore = 0;

      // Search Theory Database
      Object.keys(theoryDb).forEach(key => {
        const th = theoryDb[key];
        th.subtopics.forEach(sub => {
          let score = 0;
          const words = q.split(/\\s+/).filter(w => w.length > 2);
          words.forEach(w => {
            if (sub.title.toLowerCase().includes(w)) score += 6;
            if (sub.summary.toLowerCase().includes(w)) score += 3;
            if (sub.fullExplanation.toLowerCase().includes(w)) score += 1;
          });
          if (score > highestScore) {
            highestScore = score;
            let ans = '📚 ' + sub.title + ' (' + th.subjectTitle + ')\\n\\n';
            ans += sub.summary + '\\n\\n';
            ans += '🔍 Mecanismo Fisiológico:\\n' + sub.fullExplanation + '\\n\\n';
            if (sub.keyFormula) {
              ans += '📐 Fórmula: ' + sub.keyFormula.formula + ' (' + sub.keyFormula.meaning + ')\\n\\n';
            }
            ans += '🩺 Pérola Clínica: ' + sub.clinicalPearl + '\\n\\n';
            ans += '💡 Dica de Prova: ' + sub.examTip;
            bestMatch = ans;
          }
        });
      });

      // Search Subjects Pathologies & Constants
      subjects.forEach(s => {
        if (s.clinicalPathologies) {
          s.clinicalPathologies.forEach(p => {
            if (q.includes(p.condition.toLowerCase())) {
              bestMatch = '🩺 Patologia Clínica: ' + p.condition + ' (' + s.title + ')\\n\\nMecanismo Fisiopatológico: ' + p.mechanism + '\\n\\n(Tratado Guyton & Hall)';
              highestScore = 50;
            }
          });
        }
      });

      if (bestMatch && highestScore > 3) {
        return bestMatch;
      }

      return 'Compreendo a sua dúvida sobre "' + query + '". Na Fisiologia Humana, este processo é regulado por retroalimentação (biofeedback) celular, mantendo a homeostase do organismo.\\n\\nPara explorar em detalhes com diagramas e fórmulas, confira a aba "Apostila & Teoria" e o "Atlas Anatômico" no menu superior!';
    }

    function renderUpdatesView() {
      const container = document.getElementById('updates-list-container');
      if (!container) return;
      let html = '';
      updatesDb.forEach(u => {
        html += '<div style="background: #0f172a; border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 12px;">';
        html += '  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">';
        html += '    <div>';
        html += '      <span style="font-size: 11px; font-weight: bold; background: #1e293b; color: #38bdf8; border: 1px solid #38bdf8; padding: 2px 8px; border-radius: 12px;">' + u.subjectTitle + '</span>';
        html += '      <span style="font-size: 10px; margin-left: 6px; color: #fbbf24;">' + u.badge + '</span>';
        html += '      <h4 style="font-size: 15px; font-weight: bold; color: #fff; margin-top: 6px;">' + u.title + '</h4>';
        html += '    </div>';
        html += '    <button class="btn btn-voice" onclick="speakText(\\'' + escapeString(u.title + '. ' + u.summary + '. Aplicação clínica: ' + u.clinicalImpact) + '\\')">🔊 Ouvir</button>';
        html += '  </div>';
        html += '  <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5; margin-bottom: 10px;">' + u.summary + '</p>';
        html += '  <div style="background: rgba(16,185,129,0.1); border: 1px solid #059669; border-radius: 8px; padding: 10px; font-size: 12px; color: #a7f3d0;">';
        html += '    <strong>Impacto Clínico & Provas:</strong> ' + u.clinicalImpact;
        html += '  </div>';
        html += '  <div style="margin-top: 8px; font-size: 11px; color: #64748b;">Fonte: ' + u.officialReference + '</div>';
        html += '</div>';
      });
      container.innerHTML = html;
    }

    function syncLiveUpdates() {
      const statusEl = document.getElementById('updates-sync-status');
      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.innerHTML = '🔄 Conectando ao servidor para checar novos dados dos 6 temas...';
      }
      fetch('/api/updates/check')
        .then(res => res.json())
        .then(data => {
          if (data && data.systemUpdates) {
            updatesDb = data.systemUpdates;
            renderUpdatesView();
            if (statusEl) {
              statusEl.innerHTML = '✅ Sincronizado com sucesso! Versão: ' + (data.version || '2026') + ' • Autor: ' + (data.author || 'Figueirabrava');
            }
          }
        })
        .catch(() => {
          if (statusEl) {
            statusEl.innerHTML = 'ℹ️ Operando no modo offline. As notas salvas estão ativas.';
          }
        });
    }

    function recalcTFG() {
      const age = Number(document.getElementById('calc-tfg-age').value) || 30;
      const weight = Number(document.getElementById('calc-tfg-weight').value) || 70;
      const cr = Number(document.getElementById('calc-tfg-cr').value) || 1.0;
      const gender = document.getElementById('calc-tfg-gender').value;

      if (cr <= 0) return;
      let base = ((140 - age) * weight) / (72 * cr);
      if (gender === 'f') base *= 0.85;

      const resEl = document.getElementById('calc-tfg-result');
      const stageEl = document.getElementById('calc-tfg-stage');
      if (resEl) resEl.innerText = base.toFixed(1) + ' mL/min';
      if (stageEl) {
        stageEl.innerText = base >= 90 ? 'Estágio 1 (Função Renal Normal)' :
                            base >= 60 ? 'Estágio 2 (Levemente Reduzida)' :
                            base >= 30 ? 'Estágio 3 (Moderadamente Reduzida)' :
                            base >= 15 ? 'Estágio 4 (Gravemente Reduzida)' : 'Estágio 5 (Falência Renal)';
      }
    }

    function recalcNernst() {
      const z = Number(document.getElementById('calc-nernst-z').value) || 1;
      const cout = Number(document.getElementById('calc-nernst-out').value) || 4.5;
      const cin = Number(document.getElementById('calc-nernst-in').value) || 150;

      if (cin <= 0 || cout <= 0 || z === 0) return;
      const val = (61.5 / z) * Math.log10(cout / cin);
      const resEl = document.getElementById('calc-nernst-result');
      if (resEl) resEl.innerText = (val > 0 ? '+' : '') + val.toFixed(1) + ' mV';
    }

    function recalcDC() {
      const vs = Number(document.getElementById('calc-dc-vs').value) || 70;
      const fc = Number(document.getElementById('calc-dc-fc').value) || 75;
      const dc = (vs * fc) / 1000;
      const resEl = document.getElementById('calc-dc-result');
      if (resEl) resEl.innerText = dc.toFixed(2) + ' L/min';
    }

    function recalcOsmo() {
      const na = Number(document.getElementById('calc-osmo-na').value) || 140;
      const gli = Number(document.getElementById('calc-osmo-gli').value) || 90;
      const ur = Number(document.getElementById('calc-osmo-ur').value) || 30;
      const osm = 2 * na + (gli / 18) + (ur / 6);
      const resEl = document.getElementById('calc-osmo-result');
      if (resEl) resEl.innerText = osm.toFixed(1) + ' mOsm/kg';
    }

    function escapeString(str) {
      if (!str) return '';
      return str.replace(/'/g, "\\\\'").replace(/"/g, '&quot;').replace(/\\n/g, ' ');
    }

    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (currentMode === 'quiz') {
        const filtered = allQuestions.filter(q => q.subjectId === currentSubjectId);
        const q = filtered[currentQIndex % filtered.length];
        if (!answeredCurrent) {
          if (e.key === '1' || e.key.toLowerCase() === 'a') selectTentativeQuizOption(0, q);
          else if (e.key === '2' || e.key.toLowerCase() === 'b') selectTentativeQuizOption(1, q);
          else if (e.key === '3' || e.key.toLowerCase() === 'c') selectTentativeQuizOption(2, q);
          else if (e.key === '4' || e.key.toLowerCase() === 'd') selectTentativeQuizOption(3, q);
          else if (e.key === 'Enter' && tentativeQuizIdx !== null) confirmQuizAnswer();
        } else {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            nextQuizQuestion();
          }
        }
      }
    });

    window.onload = init;
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "FisioGuia_Completo_Offline_Figueirabrava.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
