import React, { useState } from "react";
import { usePWAInstall } from "../utils/usePWAInstall";
import { Download, Smartphone, CheckCircle, Share2, HelpCircle, X, ExternalLink, Laptop, FileCode } from "lucide-react";
import { exportStandaloneHTML } from "../utils/htmlExporter";

interface PWAInstallButtonProps {
  onOpenShareModal?: () => void;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ onOpenShareModal }) => {
  const { isInstallable, isInstalled, isIOS, isInIframe, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [showIframeGuide, setShowIframeGuide] = useState(false);
  const [showDesktopGuide, setShowDesktopGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  const handleInstallClick = async () => {
    if (isInstalled) return;

    if (isInstallable) {
      const ok = await install();
      if (ok) {
        setJustInstalled(true);
        return;
      }
    }

    if (isInIframe) {
      setShowIframeGuide(true);
      return;
    }

    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    // Se estiver em aba normal de desktop mas o navegador não disparou o evento automático
    setShowDesktopGuide(true);
  };

  const handleOpenInNewTab = () => {
    const currentUrl = window.location.href;
    window.open(currentUrl, "_blank");
    setShowIframeGuide(false);
  };

  if (isInstalled || justInstalled) {
    return (
      <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span className="hidden sm:inline">App Instalado</span>
      </div>
    );
  }

  return (
    <>
      <button
        id="pwa-install-header-btn"
        onClick={handleInstallClick}
        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-sm shadow-emerald-500/20 transition-all hover:scale-102 active:scale-98 cursor-pointer"
        title="Instalar FisioGuia no seu celular ou computador"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Instalar no Celular/PC</span>
        <span className="sm:hidden">Instalar</span>
      </button>

      {/* Modal para quem está dentro do iframe do AI Studio */}
      {showIframeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 text-slate-900 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Instalar FisioGuia no Aparelho
                  </h3>
                  <span className="text-[11px] text-emerald-600 font-semibold">
                    1 Clique fora do preview
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowIframeGuide(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Você está na <strong>janela de testes do AI Studio</strong>. Por segurança do navegador (Chrome/Edge/Safari), a instalação de aplicativos só é autorizada quando a página é aberta em uma <strong>aba própria</strong>.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
              <button
                onClick={handleOpenInNewTab}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir em Nova Aba para Instalar Agora</span>
              </button>

              <div className="text-[11px] text-slate-500 text-center">
                Na nova aba, basta clicar no ícone <strong>Instalar</strong> na barra do navegador ou no botão do app!
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between border-t border-slate-100 text-xs">
              <button
                onClick={() => {
                  setShowIframeGuide(false);
                  exportStandaloneHTML();
                }}
                className="text-amber-700 font-semibold hover:underline flex items-center space-x-1"
              >
                <FileCode className="w-4 h-4 text-amber-600" />
                <span>Ou baixar 1 arquivo HTML offline</span>
              </button>
              <button
                onClick={() => setShowIframeGuide(false)}
                className="px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-100 font-medium"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para instalação no Desktop (Chrome/Edge) */}
      {showDesktopGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 text-slate-900 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Instalar no PC / Mac
                  </h3>
                  <span className="text-[11px] text-indigo-600 font-semibold">
                    Google Chrome, Edge ou Brave
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowDesktopGuide(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              O FisioGuia pode ser instalado como aplicativo de computador, abrindo em janela própria com ícone na área de trabalho e barra de tarefas:
            </p>

            <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  1
                </span>
                <span>
                  Olhe para a <strong>barra de endereços</strong> do navegador (onde fica o link no topo direito).
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  2
                </span>
                <span>
                  Clique no ícone de <strong>Instalar App (monitor com seta para baixo)</strong>.
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  3
                </span>
                <span>
                  Ou clique nos <strong>3 pontinhos do Chrome/Edge</strong> &gt; <strong>"Transmitir, salvar e compartilhar"</strong> &gt; <strong>"Instalar FisioGuia"</strong>.
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setShowDesktopGuide(false);
                  exportStandaloneHTML();
                }}
                className="text-amber-700 font-semibold text-xs hover:underline flex items-center space-x-1"
              >
                <FileCode className="w-4 h-4 text-amber-600" />
                <span>Baixar HTML 100% offline</span>
              </button>
              <button
                onClick={() => setShowDesktopGuide(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* iOS Safari Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 text-slate-900 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold">Instalar no iPhone / iPad</h3>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              O Safari no iOS não permite instalação automática com 1 clique, mas você pode adicionar em 5 segundos:
            </p>

            <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  1
                </span>
                <span>
                  Toque no ícone de <strong>Compartilhar</strong> (quadrado com seta para cima no rodapé do Safari).
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  2
                </span>
                <span>
                  Role a lista para baixo e toque em <strong>"Adicionar à Tela de Início"</strong>.
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  3
                </span>
                <span>
                  Toque em <strong>"Adicionar"</strong> no topo. Pronto! O FisioGuia funcionará como app nativo em tela cheia.
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
};

