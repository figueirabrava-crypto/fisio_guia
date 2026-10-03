import React, { useState, useEffect, useRef, useMemo } from "react";
import QRCode from "qrcode";
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  Smartphone, 
  Laptop, 
  Download, 
  QrCode, 
  FileCode, 
  ExternalLink,
  MessageCircle,
  Send,
  Sparkles,
  CheckCircle2,
  BookOpen,
  HelpCircle
} from "lucide-react";
import { exportStandaloneHTML } from "../utils/htmlExporter";

interface ShareAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareAppModal: React.FC<ShareAppModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [exported, setExported] = useState(false);
  const [linkType, setLinkType] = useState<"app" | "apostila" | "quiz">("app");

  // Determine the guaranteed public URL that works for external users without requiring login
  const defaultCloudUrl = "https://ais-pre-4bhwfcqcexjuwf4awus652-331443853501.us-east1.run.app";
  const publicBaseUrl = useMemo(() => {
    if (typeof window === "undefined") return defaultCloudUrl;
    let origin = window.location.origin || "";
    if (origin.includes("localhost")) return defaultCloudUrl;
    // CRITICAL: Replace internal dev container URL (ais-dev-) with public preview URL (ais-pre-)
    // so any student or external user outside the author's account can open it without Google login barrier
    if (origin.includes("ais-dev-")) {
      origin = origin.replace("ais-dev-", "ais-pre-");
    }
    return origin || defaultCloudUrl;
  }, []);

  const shareUrl = useMemo(() => {
    if (linkType === "apostila") return `${publicBaseUrl}/?tab=teoria`;
    if (linkType === "quiz") return `${publicBaseUrl}/?quiz=true`;
    return `${publicBaseUrl}/`;
  }, [publicBaseUrl, linkType]);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        shareUrl,
        {
          width: 190,
          margin: 1.5,
          color: {
            dark: "#0f172a",
            light: "#ffffff",
          },
        },
        (error) => {
          if (error) console.error("Error generating QR code:", error);
        }
      );
    }
  }, [isOpen, shareUrl]);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "FisioGuia - Fisiologia Humana & Quiz Interativo",
          text: "Acesse o FisioGuia para estudar Fisiologia Humana com 312 questões oficiais, atlas anatômico e quiz por voz!",
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      handleCopyLink();
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Olá! Estou usando o FisioGuia para estudar Fisiologia Humana com mais de 300 questões oficiais e simulação por voz. Você pode acessar e instalar no seu celular ou PC aqui:\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleTelegramShare = () => {
    const text = encodeURIComponent(
      `FisioGuia - Fisiologia Humana com 312 questões, áudio e atlas interativo:`
    );
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${text}`, "_blank");
  };

  const handleExportHTML = () => {
    exportStandaloneHTML();
    setExported(true);
    setTimeout(() => setExported(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/30">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono-data uppercase tracking-wider text-emerald-400 font-bold">
                  ACESSO UNIVERSAL & INSTALAÇÃO
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Autor: Figueirabrava
                </span>
              </div>
              <h2 className="text-xl font-bold font-display">
                Compartilhar & Instalar o FisioGuia
              </h2>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2 max-w-lg leading-relaxed">
            Feito para estudantes e professores usarem em qualquer celular, tablet ou computador, mesmo sem conhecimento técnico e até sem internet!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Important Notice regarding Google Account Login Barrier */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 space-y-2">
            <div className="flex items-center space-x-2 font-bold text-amber-900 text-sm">
              <span className="text-base">🔓</span>
              <span>Como usar e compartilhar sem exigir sua conta Google:</span>
            </div>
            <p className="text-amber-800 leading-relaxed text-[11px]">
              O link de testes do Google AI Studio (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono">*.run.app</code>) fica protegido pelo Google e vinculado ao seu email de criador (<code className="font-semibold text-amber-900">figueirabrava@gmail.com</code>). Para que qualquer estudante, colega ou você em outro celular use <strong>sem pedir login de conta Google nem senha</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
              <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200 space-y-1">
                <span className="font-bold text-emerald-800 flex items-center space-x-1">
                  <span>📁</span>
                  <span>Opção 1: Enviar Arquivo HTML (Mais Rápido)</span>
                </span>
                <p className="text-slate-600">
                  Baixe o arquivo HTML abaixo e envie no WhatsApp/email. Abre com 2 cliques em qualquer computador ou celular, 100% offline e sem login!
                </p>
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200 space-y-1">
                <span className="font-bold text-indigo-800 flex items-center space-x-1">
                  <span>🌐</span>
                  <span>Opção 2: Tornar Link Público no AI Studio</span>
                </span>
                <p className="text-slate-600">
                  No canto superior direito da tela do AI Studio, clique em <strong>"Share"</strong> &gt; selecione <strong>"Public (Anyone with link)"</strong> para liberar o acesso web para todos.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Direct Link & QR Code */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-6">
            {/* QR Code Canvas */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 shrink-0 text-center">
              <canvas ref={canvasRef} className="rounded-lg mx-auto" />
              <div className="mt-2 text-[11px] text-slate-500 font-medium flex items-center justify-center space-x-1">
                <QrCode className="w-3.5 h-3.5 text-slate-400" />
                <span>Aponte a câmera do celular</span>
              </div>
            </div>

            {/* Link & Social Sharing */}
            <div className="flex-1 space-y-3 w-full">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Destino do Link:
                  </label>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Acesso 100% Livre (Sem Login)
                  </span>
                </div>

                {/* Destination Selector Tabs */}
                <div className="grid grid-cols-3 gap-1.5 mb-2.5 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setLinkType("app")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${
                      linkType === "app"
                        ? "bg-white text-indigo-700 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>📱 App Geral</span>
                  </button>

                  <button
                    onClick={() => setLinkType("apostila")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${
                      linkType === "apostila"
                        ? "bg-white text-indigo-700 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Apostila</span>
                  </button>

                  <button
                    onClick={() => setLinkType("quiz")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${
                      linkType === "quiz"
                        ? "bg-white text-indigo-700 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Simulado</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    readOnly
                    value={shareUrl}
                    className="flex-1 bg-white border border-slate-300 text-xs text-slate-700 px-3 py-2 rounded-xl font-mono-data select-all outline-none focus:border-indigo-500"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all flex items-center space-x-1 shrink-0 shadow-xs cursor-pointer active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                  <a
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-all flex items-center space-x-1 shrink-0 shadow-xs cursor-pointer"
                    title="Abrir em Nova Aba"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Abrir</span>
                  </a>
                </div>
              </div>

              {/* Social Buttons Grid */}
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={handleWhatsAppShare}
                  className="flex-1 min-w-[130px] py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>No WhatsApp</span>
                </button>

                <button
                  onClick={handleTelegramShare}
                  className="flex-1 min-w-[130px] py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-2xs"
                >
                  <Send className="w-4 h-4" />
                  <span>No Telegram</span>
                </button>

                {"share" in navigator && (
                  <button
                    onClick={handleNativeShare}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-2xs"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Outros Apps</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Standalone 1-File HTML Exporter */}
          <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-50 border border-amber-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-xs">
                  <FileCode className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-bold text-slate-900 font-display">
                      Baixar em 1 Único Arquivo HTML (Offline Total)
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">
                      Super Fácil
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Gera o arquivo completo <code className="font-mono-data bg-amber-100 px-1 py-0.5 rounded text-amber-900">FisioGuia_Completo_Offline_Figueirabrava.html</code> com <strong>todas as 312 questões</strong>, <strong>Apostila Teórica</strong> com fórmulas, <strong>Atlas Anatômico Interativo</strong> com hotspots, <strong>Constantes Clínicas</strong> e <strong>Tutor de Fisiologia Offline</strong> com narração por voz.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              💡 <strong>Como usar:</strong> Você pode enviar esse arquivo único por email, pendrive ou WhatsApp. O estudante só precisa dar <strong>2 cliques no arquivo</strong> e ele abre instantaneamente no Google Chrome, Edge, Safari ou celular, sem precisar de internet nem instalar nada!
            </p>

            <button
              onClick={handleExportHTML}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
            >
              <Download className="w-4 h-4" />
              <span>{exported ? "Arquivo HTML Gerado e Baixado! ✅" : "Baixar FisioGuia em 1 Arquivo HTML Agora"}</span>
            </button>
          </div>

          {/* Section 3: Como Instalar no Celular e PC */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Como Instalar como Aplicativo (PWA):</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {/* Android */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center space-x-2 text-emerald-600 font-bold">
                  <Smartphone className="w-4 h-4" />
                  <span>Android (Chrome)</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Abra o link no Google Chrome. Um aviso <strong>"Adicionar FisioGuia à tela inicial"</strong> aparecerá automaticamente, ou toque nos 3 pontinhos e escolha <strong>"Instalar aplicativo"</strong>.
                </p>
              </div>

              {/* iPhone / iOS */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center space-x-2 text-blue-600 font-bold">
                  <Smartphone className="w-4 h-4" />
                  <span>iPhone / iPad (Safari)</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Abra o link no Safari. Toque no botão de <strong>Compartilhar</strong> (quadrado com seta) no rodapé e selecione <strong>"Adicionar à Tela de Início"</strong>.
                </p>
              </div>

              {/* Computador PC / Mac */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center space-x-2 text-indigo-600 font-bold">
                  <Laptop className="w-4 h-4" />
                  <span>PC / Mac (Chrome/Edge)</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  No topo direito da barra de endereços do navegador, clique no ícone de <strong>instalar app (monitor com seta)</strong> para rodar em janela nativa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            FisioGuia • Versão Web & PWA Standalone
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
