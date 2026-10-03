import React, { useState } from "react";
import { X, Calculator, Activity, Heart, Droplets, Wind, Sparkles, BookOpen, Volume2 } from "lucide-react";
import { speechService } from "../utils/speech";

interface PhysiologyCalculatorsModalProps {
  onClose: () => void;
  voiceAudioEnabled: boolean;
}

export const PhysiologyCalculatorsModal: React.FC<PhysiologyCalculatorsModalProps> = ({
  onClose,
  voiceAudioEnabled,
}) => {
  const [activeTab, setActiveTab] = useState<"tfg" | "nernst" | "cardio" | "osmo" | "gaso">("tfg");

  // Calculator 1: TFG / Cockcroft-Gault
  const [age, setAge] = useState<number>(30);
  const [weight, setWeight] = useState<number>(70);
  const [serumCr, setSerumCr] = useState<number>(1.0);
  const [gender, setGender] = useState<"m" | "f">("m");

  const calcTFG = () => {
    if (serumCr <= 0) return 0;
    const base = ((140 - age) * weight) / (72 * serumCr);
    return gender === "f" ? base * 0.85 : base;
  };
  const tfgResult = calcTFG();

  // Calculator 2: Nernst
  const [ionZ, setIonZ] = useState<number>(1);
  const [cOut, setCOut] = useState<number>(4.5);
  const [cIn, setCIn] = useState<number>(150);
  const [ionName, setIonName] = useState<string>("K+");

  const calcNernst = () => {
    if (cIn <= 0 || cOut <= 0 || ionZ === 0) return 0;
    return (61.5 / ionZ) * Math.log10(cOut / cIn);
  };
  const nernstResult = calcNernst();

  // Calculator 3: Cardíaco
  const [sv, setSv] = useState<number>(70);
  const [hr, setHr] = useState<number>(75);
  const dcResult = (sv * hr) / 1000;

  // Calculator 4: Osmolaridade
  const [sodium, setSodium] = useState<number>(140);
  const [glucose, setGlucose] = useState<number>(90);
  const [urea, setUrea] = useState<number>(30);
  const osmoResult = 2 * sodium + glucose / 18 + urea / 6;

  // Calculator 5: Gradiente Alvéolo-Arterial
  const [fio2, setFio2] = useState<number>(0.21);
  const [paco2, setPaco2] = useState<number>(40);
  const [pao2, setPao2] = useState<number>(95);
  const pao2Alveolar = (760 - 47) * fio2 - paco2 / 0.8;
  const gradientResult = Math.max(0, pao2Alveolar - pao2);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 p-5 sm:p-6 text-white flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <Calculator className="w-5 h-5" />
              </span>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono-data uppercase tracking-wider text-amber-300 font-bold">
                    Biofísica & Prática Médica
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 font-bold">
                    Autor: Figueirabrava
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-display">
                  Calculadoras Fisiológicas Interativas
                </h2>
              </div>
            </div>
            <p className="text-xs text-blue-200/80 max-w-xl">
              Fórmulas biofísicas de Guyton & Hall e Silverthorn com cálculo instantâneo e interpretação fisiológica.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setActiveTab("tfg")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === "tfg" ? "bg-blue-600 text-white shadow-xs" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Droplets className="w-4 h-4" />
            <span>Clearance Renal (TFG)</span>
          </button>

          <button
            onClick={() => setActiveTab("nernst")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === "nernst" ? "bg-indigo-600 text-white shadow-xs" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Potencial de Nernst</span>
          </button>

          <button
            onClick={() => setActiveTab("cardio")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === "cardio" ? "bg-rose-600 text-white shadow-xs" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Débito Cardíaco (DC)</span>
          </button>

          <button
            onClick={() => setActiveTab("osmo")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === "osmo" ? "bg-amber-600 text-white shadow-xs" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Osmolaridade Plasmática</span>
          </button>

          <button
            onClick={() => setActiveTab("gaso")}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === "gaso" ? "bg-emerald-600 text-white shadow-xs" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Wind className="w-4 h-4" />
            <span>Gradiente Alvéolo-Arterial</span>
          </button>
        </div>

        {/* Calculator Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: TFG */}
          {activeTab === "tfg" && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-950 space-y-1">
                <div className="font-bold text-sm text-blue-900">Fórmula de Cockcroft-Gault:</div>
                <div className="font-mono-data text-blue-800">
                  ClCr = [ (140 - idade) × peso (kg) ] / [ 72 × Creatinina Sérica (mg/dL) ] (× 0.85 se mulher)
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Idade (anos):</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Peso (kg):</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Creatinina (mg/dL):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={serumCr}
                    onChange={(e) => setSerumCr(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sexo Biológico:</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as "m" | "f")}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  >
                    <option value="m">Masculino</option>
                    <option value="f">Feminino (× 0.85)</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Taxa de Filtração Glomerular Estimada:</div>
                  <div className="text-3xl font-black text-amber-400 font-mono-data">
                    {tfgResult.toFixed(1)} <span className="text-base text-slate-300 font-normal">mL/min</span>
                  </div>
                </div>
                <div className="text-right sm:border-l border-slate-700 sm:pl-5">
                  <span className="text-xs text-slate-400">Classificação KDIGO:</span>
                  <div className="text-sm font-bold text-emerald-400">
                    {tfgResult >= 90
                      ? "Estágio 1 (Função Normal ou Elevada)"
                      : tfgResult >= 60
                      ? "Estágio 2 (Levemente Reduzida)"
                      : tfgResult >= 30
                      ? "Estágio 3 (Moderadamente Reduzida)"
                      : tfgResult >= 15
                      ? "Estágio 4 (Gravemente Reduzida)"
                      : "Estágio 5 (Falência Renal)"}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NERNST */}
          {activeTab === "nernst" && (
            <div className="space-y-4">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 text-xs text-indigo-950 space-y-1">
                <div className="font-bold text-sm text-indigo-900">Equação de Nernst a 37°C:</div>
                <div className="font-mono-data text-indigo-800">
                  E_ion = (61.5 / z) × log10( [C]_externo / [C]_interno ) [em mV]
                </div>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setIonName("K+");
                    setIonZ(1);
                    setCOut(4.5);
                    setCIn(150);
                  }}
                  className="px-3 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-900 text-xs font-semibold cursor-pointer"
                >
                  Preset Potássio (K+)
                </button>
                <button
                  onClick={() => {
                    setIonName("Na+");
                    setIonZ(1);
                    setCOut(145);
                    setCIn(15);
                  }}
                  className="px-3 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-900 text-xs font-semibold cursor-pointer"
                >
                  Preset Sódio (Na+)
                </button>
                <button
                  onClick={() => {
                    setIonName("Ca2+");
                    setIonZ(2);
                    setCOut(2.5);
                    setCIn(0.0001);
                  }}
                  className="px-3 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-900 text-xs font-semibold cursor-pointer"
                >
                  Preset Cálcio (Ca2+)
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Valência do Íon (z):</label>
                  <input
                    type="number"
                    value={ionZ}
                    onChange={(e) => setIonZ(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">[C] Extracelular (mM):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={cOut}
                    onChange={(e) => setCOut(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">[C] Intracelular (mM):</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={cIn}
                    onChange={(e) => setCIn(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Potencial de Equilíbrio (E_{ionName}):</div>
                  <div className="text-3xl font-black text-indigo-400 font-mono-data">
                    {nernstResult > 0 ? `+${nernstResult.toFixed(1)}` : nernstResult.toFixed(1)} <span className="text-base text-slate-300 font-normal">mV</span>
                  </div>
                </div>
                <div className="text-right sm:border-l border-slate-700 sm:pl-5 text-xs text-slate-300 max-w-xs">
                  A esta voltagem, o gradiente químico de concentração equilibra perfeitamente a força elétrica de repulsão.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DÉBITO CARDÍACO */}
          {activeTab === "cardio" && (
            <div className="space-y-4">
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs text-rose-950 space-y-1">
                <div className="font-bold text-sm text-rose-900">Débito Cardíaco (DC):</div>
                <div className="font-mono-data text-rose-800">
                  DC = Volume Sistólico (VS) × Frequência Cardíaca (FC) [L/min]
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Volume Sistólico (mL/batimento):</label>
                  <input
                    type="number"
                    value={sv}
                    onChange={(e) => setSv(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Frequência Cardíaca (bpm):</label>
                  <input
                    type="number"
                    value={hr}
                    onChange={(e) => setHr(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Débito Cardíaco Efetivo:</div>
                  <div className="text-3xl font-black text-rose-400 font-mono-data">
                    {dcResult.toFixed(2)} <span className="text-base text-slate-300 font-normal">L/min</span>
                  </div>
                </div>
                <div className="text-right sm:border-l border-slate-700 sm:pl-5">
                  <span className="text-xs text-slate-400">Faixa Fisiológica de Repouso:</span>
                  <div className="text-sm font-bold text-emerald-400">
                    4.5 a 6.0 L/min (Normocardíaco)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: OSMOLARIDADE */}
          {activeTab === "osmo" && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 space-y-1">
                <div className="font-bold text-sm text-amber-900">Osmolaridade Plasmática Calculada:</div>
                <div className="font-mono-data text-amber-800">
                  Osm = 2 × [Na+] + (Glicose / 18) + (Ureia / 6) [mOsm/kg H2O]
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sódio Na+ (mEq/L):</label>
                  <input
                    type="number"
                    value={sodium}
                    onChange={(e) => setSodium(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Glicose (mg/dL):</label>
                  <input
                    type="number"
                    value={glucose}
                    onChange={(e) => setGlucose(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ureia (mg/dL):</label>
                  <input
                    type="number"
                    value={urea}
                    onChange={(e) => setUrea(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Osmolaridade Total:</div>
                  <div className="text-3xl font-black text-amber-400 font-mono-data">
                    {osmoResult.toFixed(1)} <span className="text-base text-slate-300 font-normal">mOsm/kg</span>
                  </div>
                </div>
                <div className="text-right sm:border-l border-slate-700 sm:pl-5">
                  <span className="text-xs text-slate-400">Interpretação Guyton:</span>
                  <div className="text-sm font-bold text-emerald-400">
                    {osmoResult < 280 ? "Hipo-osmolar (Risco Edema Celular)" : osmoResult > 295 ? "Hiperosmolar (Estímulo ADH e Sede)" : "Iso-osmolar Normal (280-295)"}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: GASOMETRIA */}
          {activeTab === "gaso" && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-950 space-y-1">
                <div className="font-bold text-sm text-emerald-900">Gradiente Alvéolo-Arterial P(A-a)O2:</div>
                <div className="font-mono-data text-emerald-800">
                  PAO2 = (760 - 47) × FiO2 - (PaCO2 / 0.8) | Gradiente = PAO2 - PaO2
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Fração Inspirada FiO2 (ex: 0.21):</label>
                  <input
                    type="number"
                    step="0.01"
                    value={fio2}
                    onChange={(e) => setFio2(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">PaCO2 Arterial (mmHg):</label>
                  <input
                    type="number"
                    value={paco2}
                    onChange={(e) => setPaco2(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">PaO2 Arterial (mmHg):</label>
                  <input
                    type="number"
                    value={pao2}
                    onChange={(e) => setPao2(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Gradiente P(A-a)O2:</div>
                  <div className="text-3xl font-black text-emerald-400 font-mono-data">
                    {gradientResult.toFixed(1)} <span className="text-base text-slate-300 font-normal">mmHg</span>
                  </div>
                </div>
                <div className="text-right sm:border-l border-slate-700 sm:pl-5">
                  <span className="text-xs text-slate-400">Causa Fisiopatológica:</span>
                  <div className="text-sm font-bold text-emerald-400">
                    {gradientResult <= 15
                      ? "Gradiente Normal (Hipoventilação pura)"
                      : "Gradiente Elevado (Distúrbio V/Q, Shunt ou Bloqueio Difusão)"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Fórmulas biofísicas oficiais aplicáveis a provas e residência médica.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
