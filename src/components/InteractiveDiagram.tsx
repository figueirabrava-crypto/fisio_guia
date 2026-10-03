import React, { useState } from "react";
import { Subject, Hotspot } from "../types";
import { 
  Volume2, 
  Info, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Crosshair,
  Stethoscope,
  Maximize2
} from "lucide-react";
import { speechService } from "../utils/speech";

interface InteractiveDiagramProps {
  subject: Subject;
  selectedHotspot: Hotspot | null;
  onSelectHotspot: (hotspot: Hotspot) => void;
  voiceAudioEnabled: boolean;
}

export const InteractiveDiagram: React.FC<InteractiveDiagramProps> = ({
  subject,
  selectedHotspot,
  onSelectHotspot,
  voiceAudioEnabled,
}) => {
  const [hoveredHotspot, setHoveredHotspot] = useState<Hotspot | null>(null);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  const handleHotspotClick = (h: Hotspot) => {
    onSelectHotspot(h);
    if (voiceAudioEnabled) {
      speechService.speak(`${h.title}. ${h.description}. Destaque clínico: ${h.clinicalPearl}`);
    }
  };

  const renderSubjectIllustration = () => {
    switch (subject.id) {
      case "neurofisiologia":
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
              <linearGradient id="stemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="cerebGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
              <linearGradient id="cordGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Anatomical Silhouette Grid */}
            <rect width="800" height="500" fill="#f8fafc" rx="16" />
            <path d="M 0,250 Q 400,220 800,250" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" fill="none" />
            <path d="M 400,0 Q 420,250 400,500" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" fill="none" />

            {/* CÉREBRO - Hemisférios Cerebrais e Sulcos */}
            <g className="transition-transform duration-300 hover:scale-[1.01]">
              <path
                d="M 180,240 C 140,200 130,120 210,70 C 290,20 450,20 530,70 C 590,110 600,190 560,240 C 530,270 480,280 430,280 C 370,280 320,290 280,270 C 230,270 190,250 180,240 Z"
                fill="url(#brainGrad)"
                opacity="0.9"
                stroke="#3730a3"
                strokeWidth="3"
              />
              {/* Sulcos e Giros Cerebrais desenhados com precisão */}
              <path d="M 240,90 Q 290,130 270,180 Q 250,220 320,240" stroke="#c7d2fe" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 330,60 Q 370,110 350,170 Q 380,210 440,220" stroke="#c7d2fe" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 420,60 Q 480,100 470,160 Q 520,180 540,220" stroke="#c7d2fe" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 210,140 Q 260,160 300,140" stroke="#c7d2fe" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 380,130 Q 430,150 470,130" stroke="#c7d2fe" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>

            {/* CEREBELO - Folhas e Estrutura com pregas */}
            <g>
              <path
                d="M 480,240 C 540,240 590,270 590,320 C 590,370 530,400 460,390 C 440,360 440,300 460,260 Z"
                fill="url(#cerebGrad)"
                stroke="#9d174d"
                strokeWidth="3"
              />
              <path d="M 475,270 Q 540,280 570,300" stroke="#fbcfe8" strokeWidth="3" fill="none" />
              <path d="M 470,300 Q 530,315 570,335" stroke="#fbcfe8" strokeWidth="3" fill="none" />
              <path d="M 465,335 Q 515,350 550,370" stroke="#fbcfe8" strokeWidth="3" fill="none" />
            </g>

            {/* TRONCO ENCEFÁLICO (Mesencéfalo, Ponte, Bulbo) */}
            <g>
              <path
                d="M 360,280 C 370,280 430,280 430,320 C 430,350 415,370 410,400 L 375,400 C 370,370 350,340 350,310 Z"
                fill="url(#stemGrad)"
                stroke="#b45309"
                strokeWidth="3"
              />
              {/* Bulbo e Ponte marcadores */}
              <ellipse cx="395" cy="330" rx="30" ry="18" fill="#fef3c7" opacity="0.4" />
              <line x1="365" y1="365" x2="420" y2="365" stroke="#78350f" strokeWidth="2" strokeDasharray="3 3" />
            </g>

            {/* MEDULA ESPINHAL descendente */}
            <g>
              <path
                d="M 375,400 L 410,400 L 405,485 L 380,485 Z"
                fill="url(#cordGrad)"
                stroke="#0369a1"
                strokeWidth="3"
              />
              <line x1="392" y1="400" x2="392" y2="485" stroke="#bae6fd" strokeWidth="3" strokeDasharray="6 4" />
            </g>

            {/* NEURÔNIO esquemático lateral e sinapse */}
            <g transform="translate(620, 70)">
              <rect x="0" y="0" width="160" height="360" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="80" y="24" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
                Microestrutura Sináptica
              </text>
              {/* Corpo celular e dendritos */}
              <circle cx="80" cy="70" r="22" fill="#818cf8" stroke="#4f46e5" strokeWidth="2" />
              <circle cx="80" cy="70" r="8" fill="#ffffff" />
              <path d="M 60,60 L 40,45 M 65,85 L 45,100 M 95,60 L 115,45 M 95,85 L 115,100" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
              {/* Axônio com bainha de mielina */}
              <line x1="80" y1="92" x2="80" y2="220" stroke="#f59e0b" strokeWidth="4" />
              <rect x="71" y="105" width="18" height="24" rx="4" fill="#fbbf24" stroke="#d97706" />
              <rect x="71" y="140" width="18" height="24" rx="4" fill="#fbbf24" stroke="#d97706" />
              <rect x="71" y="175" width="18" height="24" rx="4" fill="#fbbf24" stroke="#d97706" />
              {/* Terminal axônico e fenda sináptica */}
              <path d="M 80,220 C 60,240 100,240 80,260" stroke="#4f46e5" strokeWidth="3" fill="none" />
              <circle cx="70" cy="275" r="7" fill="#ec4899" />
              <circle cx="90" cy="275" r="7" fill="#ec4899" />
              <path d="M 50,300 Q 80,310 110,300" stroke="#059669" strokeWidth="4" fill="none" strokeLinecap="round" />
              <text x="80" y="335" textAnchor="middle" fontSize="9" fill="#64748b">
                Potencial de Ação & NT
              </text>
            </g>
          </svg>
        );

      case "fisiologia-celular":
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="cellGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ecfdf5" />
                <stop offset="85%" stopColor="#d1fae5" />
                <stop offset="100%" stopColor="#a7f3d0" />
              </radialGradient>
              <linearGradient id="nucGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#3730a3" />
              </linearGradient>
              <linearGradient id="mitoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
            </defs>

            <rect width="800" height="500" fill="#f8fafc" rx="16" />

            {/* MEMBRANA PLASMÁTICA - Célula Animal Eucariótica */}
            <path
              d="M 120,250 C 110,120 240,60 400,60 C 580,60 690,130 680,260 C 670,390 560,450 390,440 C 220,430 130,380 120,250 Z"
              fill="url(#cellGrad)"
              stroke="#059669"
              strokeWidth="8"
              strokeDasharray="14 4"
            />
            {/* Bicamada Lipídica indicativa */}
            <path
              d="M 126,250 C 116,126 242,66 398,66 C 574,66 684,134 674,260 C 664,386 556,444 390,434 C 224,424 136,376 126,250 Z"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />

            {/* NÚCLEO & NUCLÉOLO */}
            <g>
              <ellipse cx="380" cy="240" rx="95" ry="85" fill="url(#nucGrad)" stroke="#1e1b4b" strokeWidth="4" />
              {/* Poros nucleares */}
              <circle cx="380" cy="240" r="95" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="8 12" fill="none" />
              {/* Cromatina / DNA */}
              <path d="M 330,220 Q 360,250 340,280 Q 380,260 410,270 Q 430,230 400,200" stroke="#818cf8" strokeWidth="3" fill="none" />
              {/* Nucléolo */}
              <circle cx="395" cy="225" r="28" fill="#312e81" stroke="#a5b4fc" strokeWidth="2" />
              <text x="395" y="229" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">
                rRNA
              </text>
            </g>

            {/* MITOCÔNDRIAS com cristas internas */}
            {/* Mitocôndria 1 */}
            <g transform="translate(180, 140) rotate(-25)">
              <rect x="0" y="0" width="110" height="52" rx="26" fill="url(#mitoGrad)" stroke="#9a3412" strokeWidth="3" />
              <path d="M 20,26 L 40,15 L 35,37 L 60,15 L 55,37 L 80,15 L 75,37 L 95,26" stroke="#fed7aa" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
            {/* Mitocôndria 2 */}
            <g transform="translate(520, 310) rotate(20)">
              <rect x="0" y="0" width="100" height="48" rx="24" fill="url(#mitoGrad)" stroke="#9a3412" strokeWidth="3" />
              <path d="M 18,24 L 35,14 L 30,34 L 55,14 L 50,34 L 75,14 L 85,24" stroke="#fed7aa" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>

            {/* RETÍCULO ENDOPLASMÁTICO RUGOSO & LISO */}
            <g>
              <path d="M 285,200 C 230,190 220,230 250,260 C 210,270 230,310 275,300" stroke="#3b82f6" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M 270,175 C 200,165 190,220 225,260" stroke="#3b82f6" strokeWidth="5" fill="none" strokeLinecap="round" />
              {/* Ribossomos no RER */}
              <circle cx="240" cy="195" r="2.5" fill="#1d4ed8" />
              <circle cx="225" cy="225" r="2.5" fill="#1d4ed8" />
              <circle cx="245" cy="275" r="2.5" fill="#1d4ed8" />
              <circle cx="210" cy="250" r="2.5" fill="#1d4ed8" />
            </g>

            {/* COMPLEXO DE GOLGI & VESÍCULAS */}
            <g transform="translate(480, 140)">
              <path d="M 20,10 Q 60,20 100,10" stroke="#ec4899" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M 15,26 Q 60,38 105,26" stroke="#ec4899" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M 18,42 Q 60,56 102,42" stroke="#ec4899" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M 25,58 Q 60,72 95,58" stroke="#ec4899" strokeWidth="6" fill="none" strokeLinecap="round" />
              {/* Vesículas de secreção saindo da face trans */}
              <circle cx="118" cy="18" r="8" fill="#f43f5e" stroke="#be123c" strokeWidth="1.5" />
              <circle cx="125" cy="45" r="6" fill="#f43f5e" stroke="#be123c" strokeWidth="1.5" />
              <circle cx="5" cy="40" r="7" fill="#fb7185" stroke="#be123c" strokeWidth="1.5" />
            </g>

            {/* LISOSSOMOS */}
            <g>
              <circle cx="230" cy="350" r="18" fill="#eab308" stroke="#a16207" strokeWidth="3" />
              <text x="230" y="354" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#713f12">
                pH 4.8
              </text>
            </g>

            {/* CITOSOL & CITOESQUELETO */}
            <path d="M 160,300 Q 300,420 480,380" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <path d="M 320,100 Q 450,80 580,120" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          </svg>
        );

      case "sensorial":
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            <rect width="800" height="500" fill="#f8fafc" rx="16" />

            {/* Painéis Didáticos dos 5 Sentidos e Transdução */}

            {/* 1. VISÃO - Olho e Retina */}
            <g transform="translate(40, 40)">
              <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#bae6fd" strokeWidth="2" />
              <text x="105" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0369a1">
                Visão (Fotorrecepção)
              </text>
              {/* Globo ocular */}
              <circle cx="95" cy="100" r="55" fill="#f0f9ff" stroke="#0284c7" strokeWidth="3" />
              {/* Córnea e Cristalino */}
              <path d="M 42,80 Q 25,100 42,120" stroke="#38bdf8" strokeWidth="6" fill="none" strokeLinecap="round" />
              <ellipse cx="60" cy="100" rx="9" ry="24" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
              {/* Íris e Pupila */}
              <rect x="58" y="70" width="4" height="12" fill="#0f172a" />
              <rect x="58" y="118" width="4" height="12" fill="#0f172a" />
              {/* Retina e Fóvea */}
              <path d="M 125,65 C 150,85 150,115 125,135" stroke="#ea580c" strokeWidth="6" fill="none" strokeLinecap="round" />
              {/* Nervo Óptico */}
              <path d="M 145,100 L 190,100" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
              <text x="105" y="175" textAnchor="middle" fontSize="10" fill="#475569">
                Cones e Bastonetes (Fóvea)
              </text>
            </g>

            {/* 2. AUDIÇÃO & EQUILÍBRIO - Orelha e Cóclea */}
            <g transform="translate(290, 40)">
              <rect width="220" height="190" rx="12" fill="#ffffff" stroke="#fde68a" strokeWidth="2" />
              <text x="110" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b45309">
                Audição & Equilíbrio
              </text>
              {/* Pavilhão e Meato */}
              <path d="M 30,70 Q 15,100 30,130" stroke="#f59e0b" strokeWidth="5" fill="none" strokeLinecap="round" />
              <line x1="30" y1="100" x2="70" y2="100" stroke="#cbd5e1" strokeWidth="6" />
              {/* Tímpano & Ossículos */}
              <line x1="72" y1="85" x2="72" y2="115" stroke="#ef4444" strokeWidth="3" />
              <circle cx="85" cy="95" r="5" fill="#64748b" />
              <line x1="85" y1="95" x2="100" y2="100" stroke="#64748b" strokeWidth="3" />
              {/* Canais semicirculares (Equilíbrio) */}
              <path d="M 115,85 C 115,60 145,60 145,85" stroke="#d97706" strokeWidth="4" fill="none" />
              <path d="M 130,85 C 130,65 160,75 150,95" stroke="#d97706" strokeWidth="4" fill="none" />
              {/* Cóclea em espiral (Caracol) */}
              <path d="M 130,100 C 160,90 170,125 145,135 C 125,140 120,120 135,115 C 145,112 145,122 140,124" stroke="#d97706" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Nervo Vestibulococlear VIII */}
              <line x1="155" y1="115" x2="195" y2="115" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              <text x="110" y="175" textAnchor="middle" fontSize="10" fill="#475569">
                Órgão de Corti & Otólitos
              </text>
            </g>

            {/* 3. OLFATO - Epitélio e Bulbo Olfatório */}
            <g transform="translate(550, 40)">
              <rect width="210" height="190" rx="12" fill="#ffffff" stroke="#e9d5ff" strokeWidth="2" />
              <text x="105" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7e22ce">
                Olfato (Quimiorrecepção)
              </text>
              {/* Bulbo Olfatório e Lâmina Crivosa */}
              <rect x="50" y="55" width="110" height="18" rx="8" fill="#c084fc" stroke="#7e22ce" strokeWidth="2" />
              <line x1="40" y1="80" x2="170" y2="80" stroke="#94a3b8" strokeWidth="4" strokeDasharray="6 6" />
              {/* Cílios olfatórios na mucosa */}
              <path d="M 70,80 L 65,115 M 90,80 L 90,120 M 110,80 L 115,115 M 130,80 L 135,120 M 150,80 L 145,115" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
              <text x="105" y="150" textAnchor="middle" fontSize="10" fill="#6b21a8" fontWeight="bold">
                Receptores GPCR (G_olf)
              </text>
              <text x="105" y="175" textAnchor="middle" fontSize="9" fill="#64748b">
                Direto ao Córtex sem Tálamo
              </text>
            </g>

            {/* 4. PALADAR & LÍNGUA */}
            <g transform="translate(100, 260)">
              <rect width="280" height="200" rx="12" fill="#ffffff" stroke="#fecdd3" strokeWidth="2" />
              <text x="140" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#be123c">
                Paladar (Botões Gustativos)
              </text>
              {/* Língua e papilas */}
              <path d="M 60,150 C 40,110 80,60 140,60 C 200,60 240,110 220,150 Z" fill="#fda4af" stroke="#e11d48" strokeWidth="3" />
              {/* Papilas circunvaladas e fungiformes */}
              <circle cx="100" cy="100" r="5" fill="#be123c" />
              <circle cx="140" cy="90" r="6" fill="#be123c" />
              <circle cx="180" cy="100" r="5" fill="#be123c" />
              <circle cx="120" cy="120" r="4" fill="#e11d48" />
              <circle cx="160" cy="120" r="4" fill="#e11d48" />
              <text x="140" y="180" textAnchor="middle" fontSize="10" fill="#475569">
                5 Sabores: Doce, Salgado, Azedo, Amargo, Umami
              </text>
            </g>

            {/* 5. TATO & MECANORRECEPÇÃO */}
            <g transform="translate(420, 260)">
              <rect width="320" height="200" rx="12" fill="#ffffff" stroke="#bbf7d0" strokeWidth="2" />
              <text x="160" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803d">
                Tato & Pele (Mecanorreceptores)
              </text>
              {/* Camadas da pele */}
              <rect x="30" y="50" width="260" height="25" fill="#fde68a" stroke="#d97706" />
              <text x="45" y="66" fontSize="9" fontWeight="bold" fill="#78350f">Epiderme</text>
              <rect x="30" y="75" width="260" height="60" fill="#fed7aa" stroke="#ea580c" />
              <text x="45" y="95" fontSize="9" fontWeight="bold" fill="#9a3412">Derme</text>
              {/* Corpúsculos de Meissner e Pacini */}
              <ellipse cx="100" cy="85" rx="10" ry="6" fill="#22c55e" stroke="#15803d" />
              <text x="100" y="105" textAnchor="middle" fontSize="8" fill="#166534">Meissner (toque leve)</text>
              <circle cx="210" cy="115" r="14" fill="#86efac" stroke="#15803d" strokeDasharray="3 3" />
              <text x="210" y="142" textAnchor="middle" fontSize="8" fill="#166534">Pacini (vibração profunda)</text>
              <text x="160" y="180" textAnchor="middle" fontSize="10" fill="#475569">
                Potencial Gerador Receptor
              </text>
            </g>
          </svg>
        );

      case "digestorio":
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="liverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="stomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
            </defs>

            <rect width="800" height="500" fill="#f8fafc" rx="16" />

            {/* BOCA & GLÂNDULAS SALIVARES */}
            <g>
              <circle cx="400" cy="45" r="22" fill="#fed7aa" stroke="#f97316" strokeWidth="2" />
              <ellipse cx="400" cy="45" rx="12" ry="6" fill="#be123c" />
              <circle cx="370" cy="52" r="7" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
              <circle cx="430" cy="52" r="7" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
            </g>

            {/* ESÔFAGO */}
            <line x1="400" y1="67" x2="400" y2="160" stroke="#f472b6" strokeWidth="14" strokeLinecap="round" />
            <line x1="400" y1="67" x2="400" y2="160" stroke="#db2777" strokeWidth="3" strokeDasharray="6 6" />

            {/* FÍGADO & VESÍCULA BILIAR */}
            <g>
              <path
                d="M 230,165 C 290,140 370,160 370,220 C 370,250 310,265 240,245 C 210,225 200,185 230,165 Z"
                fill="url(#liverGrad)"
                stroke="#451a03"
                strokeWidth="3"
              />
              {/* Vesícula Biliar verde */}
              <ellipse cx="320" cy="235" rx="14" ry="20" fill="#22c55e" stroke="#15803d" strokeWidth="2.5" />
              <path d="M 320,255 Q 335,280 370,285" stroke="#15803d" strokeWidth="4" fill="none" />
            </g>

            {/* ESTÔMAGO com curvatura maior e menor */}
            <g>
              <path
                d="M 395,160 C 435,160 480,180 480,230 C 480,280 410,290 370,280 C 390,250 410,210 395,160 Z"
                fill="url(#stomachGrad)"
                stroke="#9f1239"
                strokeWidth="3"
              />
              {/* Pregas gástricas internas */}
              <path d="M 425,185 Q 445,225 430,265" stroke="#fda4af" strokeWidth="3" fill="none" />
              <path d="M 450,200 Q 465,230 450,255" stroke="#fda4af" strokeWidth="3" fill="none" />
            </g>

            {/* PÂNCREAS no C duodenal */}
            <g>
              <path
                d="M 370,280 C 420,270 470,285 490,295 C 470,305 420,310 370,295 Z"
                fill="#fde047"
                stroke="#ca8a04"
                strokeWidth="2.5"
              />
              {/* Ducto pancreático principal */}
              <line x1="375" y1="288" x2="480" y2="295" stroke="#a16207" strokeWidth="2" strokeDasharray="3 2" />
            </g>

            {/* INTESTINO GROSSO (Cólon moldura) */}
            <g>
              <path
                d="M 270,410 L 270,300 C 270,270 300,270 350,270 L 470,270 C 520,270 520,300 520,410"
                stroke="#d97706"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Haustrações do cólon */}
              <path
                d="M 270,410 L 270,300 C 270,270 300,270 350,270 L 470,270 C 520,270 520,300 520,410"
                stroke="#78350f"
                strokeWidth="2"
                strokeDasharray="14 10"
                fill="none"
              />
              {/* Apêndice Cecal */}
              <path d="M 270,425 Q 260,455 280,450" stroke="#b45309" strokeWidth="8" fill="none" strokeLinecap="round" />
            </g>

            {/* INTESTINO DELGADO (Alças ileojejunais) */}
            <g>
              <path
                d="M 360,310 C 440,310 440,340 360,340 C 320,340 320,370 440,370 C 440,400 340,400 400,430"
                stroke="#fb7185"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          </svg>
        );

      case "cardiorrespiratorio":
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
              <linearGradient id="lungGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>

            <rect width="800" height="500" fill="#f8fafc" rx="16" />

            {/* TRAQUÉIA & BRÔNQUIOS */}
            <g>
              {/* Traquéia com anéis cartilaginosos */}
              <line x1="400" y1="40" x2="400" y2="135" stroke="#cbd5e1" strokeWidth="18" strokeLinecap="round" />
              <line x1="400" y1="40" x2="400" y2="135" stroke="#475569" strokeWidth="2" strokeDasharray="6 6" />
              {/* Carina e Brônquios principais */}
              <path d="M 400,135 L 330,175 M 400,135 L 470,175" stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" />
            </g>

            {/* PULMÃO ESQUERDO & PULMÃO DIREITO */}
            {/* Pulmão Direito (3 lobos) */}
            <g>
              <path
                d="M 330,120 C 270,120 220,170 210,260 C 200,340 240,410 320,410 C 340,410 350,380 340,320 C 330,260 340,170 330,120 Z"
                fill="url(#lungGrad)"
                stroke="#2563eb"
                strokeWidth="3"
                opacity="0.8"
              />
              {/* Fissuras lobares */}
              <line x1="220" y1="230" x2="330" y2="250" stroke="#1d4ed8" strokeWidth="2" />
              <line x1="225" y1="310" x2="330" y2="280" stroke="#1d4ed8" strokeWidth="2" />
            </g>

            {/* Pulmão Esquerdo (2 lobos com incisura cardíaca) */}
            <g>
              <path
                d="M 470,120 C 530,120 580,170 590,260 C 600,340 560,410 480,410 C 450,410 450,350 460,300 C 470,250 460,170 470,120 Z"
                fill="url(#lungGrad)"
                stroke="#2563eb"
                strokeWidth="3"
                opacity="0.8"
              />
              <line x1="475" y1="260" x2="585" y2="280" stroke="#1d4ed8" strokeWidth="2" />
            </g>

            {/* CORAÇÃO CENTRAL (4 Câmaras) */}
            <g transform="translate(340, 210)">
              {/* Silhueta Cardíaca e Septo */}
              <path
                d="M 60,30 C 20,-10 -20,30 10,70 C 40,110 60,140 60,140 C 60,140 80,110 110,70 C 140,30 100,-10 60,30 Z"
                fill="url(#heartGrad)"
                stroke="#7f1d1d"
                strokeWidth="4"
              />
              {/* Septo interventricular e divisões atrioventriculares */}
              <line x1="60" y1="30" x2="60" y2="135" stroke="#fca5a5" strokeWidth="3" strokeDasharray="4 3" />
              <line x1="20" y1="55" x2="100" y2="55" stroke="#fca5a5" strokeWidth="2" />

              {/* NÓ SINOATRIAL (Marcapasso natural) */}
              <circle cx="35" cy="25" r="5" fill="#facc15" stroke="#a16207" strokeWidth="1.5" />
              <path d="M 35,25 Q 50,40 60,55" stroke="#facc15" strokeWidth="2" strokeDasharray="2 2" fill="none" />

              {/* Vasos da Base: Aorta & Artéria Pulmonar */}
              <path d="M 45,5 C 45,-30 85,-30 85,-5" stroke="#dc2626" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M 25,10 C 20,-20 -10,-10 -20,-5" stroke="#0284c7" strokeWidth="8" fill="none" strokeLinecap="round" />
            </g>

            {/* DIAFRAGMA (Músculo principal da inspiração) */}
            <path
              d="M 170,430 Q 400,370 630,430"
              stroke="#059669"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <text x="400" y="475" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">
              Músculo Diafragma (Inspiração: contração desce a cúpula)
            </text>
          </svg>
        );

      case "excretor":
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="kidneyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </linearGradient>
              <linearGradient id="bladderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            <rect width="800" height="500" fill="#f8fafc" rx="16" />

            {/* AORTA ABDOMINAL & VEIA CAVA INFERIOR */}
            <line x1="385" y1="30" x2="385" y2="350" stroke="#dc2626" strokeWidth="12" strokeLinecap="round" />
            <line x1="415" y1="30" x2="415" y2="350" stroke="#2563eb" strokeWidth="12" strokeLinecap="round" />

            {/* RIM DIREITO */}
            <g>
              {/* Artéria e Veia renais direitas */}
              <line x1="270" y1="170" x2="385" y2="170" stroke="#dc2626" strokeWidth="6" />
              <line x1="270" y1="185" x2="415" y2="185" stroke="#2563eb" strokeWidth="6" />
              {/* Formato anatômico de feijão */}
              <path
                d="M 230,120 C 270,120 280,160 265,180 C 280,200 270,240 230,240 C 190,240 180,180 190,140 C 200,125 215,120 230,120 Z"
                fill="url(#kidneyGrad)"
                stroke="#3f0e0e"
                strokeWidth="3"
              />
              {/* Pelve renal e cálices */}
              <path d="M 265,175 Q 260,185 265,195" stroke="#fde68a" strokeWidth="5" fill="none" />
            </g>

            {/* RIM ESQUERDO (Ligeiramente mais alto que o direito) */}
            <g>
              <line x1="415" y1="150" x2="530" y2="150" stroke="#2563eb" strokeWidth="6" />
              <line x1="385" y1="165" x2="530" y2="165" stroke="#dc2626" strokeWidth="6" />
              <path
                d="M 570,105 C 610,105 620,145 610,165 C 620,185 610,225 570,225 C 530,225 520,165 530,125 C 540,110 555,105 570,105 Z"
                fill="url(#kidneyGrad)"
                stroke="#3f0e0e"
                strokeWidth="3"
              />
              <path d="M 535,160 Q 540,170 535,180" stroke="#fde68a" strokeWidth="5" fill="none" />
            </g>

            {/* URETERES com ondas de peristaltismo */}
            <g>
              <path d="M 265,190 C 270,270 340,320 375,375" stroke="#f59e0b" strokeWidth="5" fill="none" strokeDasharray="8 3" />
              <path d="M 535,175 C 530,270 460,320 425,375" stroke="#f59e0b" strokeWidth="5" fill="none" strokeDasharray="8 3" />
            </g>

            {/* BEXIGA URINÁRIA com Músculo Detrusor */}
            <g>
              <ellipse cx="400" cy="405" rx="55" ry="42" fill="url(#bladderGrad)" stroke="#78350f" strokeWidth="3" />
              {/* Pregas da mucosa da bexiga */}
              <path d="M 370,400 Q 400,420 430,400" stroke="#fef3c7" strokeWidth="3" fill="none" />
            </g>

            {/* URETRA & ESFÍNCTERES */}
            <g>
              <line x1="400" y1="447" x2="400" y2="485" stroke="#d97706" strokeWidth="8" strokeLinecap="round" />
              {/* Esfíncter externo voluntário */}
              <line x1="388" y1="465" x2="412" y2="465" stroke="#dc2626" strokeWidth="4" />
            </g>

            {/* QUADRO DIDÁTICO: O NÉFRON (Detalhe ampliado) */}
            <g transform="translate(40, 270)">
              <rect width="210" height="190" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="105" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
                Esquema do Néfron
              </text>
              {/* Corpúsculo e Glomérulo */}
              <circle cx="50" cy="50" r="16" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <path d="M 45,45 Q 50,55 55,45 Q 55,55 50,50" stroke="#991b1b" strokeWidth="2" fill="none" />
              {/* Túbulo proximal */}
              <path d="M 66,50 C 90,40 100,70 85,90" stroke="#3b82f6" strokeWidth="4" fill="none" />
              {/* Alça de Henle em U */}
              <path d="M 85,90 L 85,150 C 85,170 105,170 105,150 L 105,80" stroke="#0ea5e9" strokeWidth="4" fill="none" />
              {/* Túbulo distal */}
              <path d="M 105,80 C 120,60 140,80 150,70" stroke="#6366f1" strokeWidth="4" fill="none" />
              {/* Ducto coletor */}
              <line x1="150" y1="45" x2="150" y2="170" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
              <text x="105" y="182" textAnchor="middle" fontSize="9" fill="#64748b">
                Filtração • Reabsorção • Secreção
              </text>
            </g>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="bg-white rounded-3xl border shadow-sm p-4 sm:p-6 overflow-hidden transition-all duration-300"
      style={{ borderColor: `${subject.themeColor}33` }}
    >
      {/* Diagram Title & Clinical Viewport Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-2">
            <span className="text-xl">{subject.icon}</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              {subject.title}
            </h2>
            <span 
              className="text-[10px] font-mono-data font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
              style={{
                backgroundColor: `${subject.themeColor}15`,
                borderColor: `${subject.themeColor}40`,
                color: subject.themeColor,
              }}
            >
              Atlas Anatomo-Fisiológico
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Clique nos pontos anatômicos para ouvir o mecanismo de transporte/sinalização e a aplicação clínica.
          </p>
        </div>

        {/* Viewport Actions: Grid Toggle & Audio Introduction */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setShowGrid(!showGrid)}
            title="Alternar grade milimétrica de referência"
            className={`p-1.5 rounded-xl border text-xs font-semibold transition-colors flex items-center space-x-1 ${
              showGrid 
                ? "bg-slate-100 text-slate-700 border-slate-300" 
                : "bg-white text-slate-400 border-slate-200 hover:text-slate-600"
            }`}
          >
            <Crosshair className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-[11px]">Grade</span>
          </button>

          <button
            id={`play-subject-summary-${subject.id}`}
            onClick={() => {
              speechService.speak(
                `${subject.title}. ${subject.subtitle}. ${subject.audioSummaryScript}`
              );
            }}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all shrink-0 cursor-pointer hover:brightness-95 active:scale-98"
            style={{
              backgroundColor: `${subject.themeColor}15`,
              borderColor: `${subject.themeColor}40`,
              color: subject.themeColor,
            }}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Ouvir Atlas Completo</span>
          </button>
        </div>
      </div>

      {/* Main Medical Diagram Area with Absolute Positioned Hotspots */}
      <div 
        className={`relative w-full aspect-[16/10] max-h-[520px] rounded-2xl overflow-hidden border shadow-inner transition-all ${
          showGrid ? "bg-medical-grid bg-slate-50/70" : "bg-slate-50"
        }`}
        style={{ borderColor: `${subject.themeColor}30` }}
      >
        {/* Subtle corner crosshairs */}
        <div className="absolute top-2 left-2 text-[9px] font-mono-data text-slate-400 select-none z-10 pointer-events-none">
          + 0,0
        </div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono-data text-slate-400 select-none z-10 pointer-events-none">
          Guyton & Hall • Atlas Digital
        </div>

        {/* Render SVG Illustration */}
        {renderSubjectIllustration()}

        {/* Render Hotspots Markers */}
        {subject.hotspots.map((hotspot) => {
          const isSelected = selectedHotspot?.id === hotspot.id;
          const isHovered = hoveredHotspot?.id === hotspot.id;

          return (
            <div
              key={hotspot.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              onMouseEnter={() => setHoveredHotspot(hotspot)}
              onMouseLeave={() => setHoveredHotspot(null)}
            >
              {/* Hotspot Button */}
              <button
                id={`hotspot-${hotspot.id}`}
                onClick={() => handleHotspotClick(hotspot)}
                aria-label={hotspot.title}
                className={`relative group flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isSelected ? "scale-125 z-30" : "hover:scale-110"
                }`}
              >
                {/* Glowing Radar Ripple Effect */}
                <span
                  className="absolute w-8 h-8 rounded-full opacity-60 animate-ping"
                  style={{ backgroundColor: subject.themeColor }}
                />

                {/* Core Circle Marker with Theme Color */}
                <span
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md border-2 border-white transition-all ${
                    isSelected ? "ring-4 ring-offset-2" : ""
                  }`}
                  style={{ 
                    backgroundColor: subject.themeColor,
                    borderColor: "#ffffff",
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </span>

                {/* Permanent or Hover Title Badge */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-bold text-slate-900 bg-white/95 border shadow-md whitespace-nowrap transition-all pointer-events-none backdrop-blur-xs font-display ${
                    isHovered || isSelected ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{
                    borderColor: isSelected ? subject.themeColor : "#cbd5e1",
                  }}
                >
                  {hotspot.title}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Hotspot Detail Card */}
      {selectedHotspot && (
        <div 
          className="mt-4 p-4.5 rounded-2xl border flex flex-col sm:flex-row items-start justify-between gap-4 transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: `${subject.themeColor}08`,
            borderColor: `${subject.themeColor}40`,
          }}
        >
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span
                className="w-2.5 h-2.5 rounded-full ring-2 ring-white"
                style={{ backgroundColor: subject.themeColor }}
              />
              <h3 className="text-base font-bold text-slate-900 font-display">
                {selectedHotspot.title}
              </h3>
              <span 
                className="text-[10px] font-mono-data font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border"
                style={{
                  backgroundColor: `${subject.themeColor}15`,
                  borderColor: `${subject.themeColor}30`,
                  color: subject.themeColor,
                }}
              >
                Ponto Anatômico
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedHotspot.description}
            </p>

            {/* Clinical Pearl Box */}
            <div className="flex items-start space-x-2 text-xs bg-white/80 p-3 rounded-xl border border-slate-200 text-slate-700 shadow-2xs">
              <Stethoscope className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-rose-900">Relevância Clínica & Patologia: </span>
                <span className="text-slate-700">{selectedHotspot.clinicalPearl}</span>
              </div>
            </div>
          </div>

          <button
            id={`speak-hotspot-${selectedHotspot.id}`}
            onClick={() => {
              speechService.speak(
                `${selectedHotspot.title}. ${selectedHotspot.description}. Relevância clínica: ${selectedHotspot.clinicalPearl}`
              );
            }}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-md shrink-0 transition-all hover:brightness-110 active:scale-98 cursor-pointer self-stretch sm:self-auto justify-center"
            style={{
              backgroundColor: subject.themeColor,
              boxShadow: `0 4px 12px ${subject.themeColor}40`,
            }}
          >
            <Volume2 className="w-4 h-4" />
            <span>Ouvir Explicação</span>
          </button>
        </div>
      )}

      {/* Hotspots Quick Pill Selector */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-[11px] font-mono-data font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
          ESTRUTURAS:
        </span>
        {subject.hotspots.map((h) => {
          const isSelected = selectedHotspot?.id === h.id;
          return (
            <button
              key={h.id}
              onClick={() => handleHotspotClick(h)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all whitespace-nowrap border cursor-pointer ${
                isSelected
                  ? "text-white shadow-xs font-bold"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-slate-200"
              }`}
              style={{
                backgroundColor: isSelected ? subject.themeColor : undefined,
                borderColor: isSelected ? subject.themeColor : undefined,
              }}
            >
              {h.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
