import React, { useEffect, useState } from 'react';
import { 
  X, 
  Nfc, 
  Smartphone, 
  Instagram, 
  MessageCircle, 
  Star, 
  QrCode, 
  CheckCircle2, 
  Sparkles,
  Wifi
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  COMPANY_SLOGAN, 
  FORMATTED_PHONE, 
  INSTAGRAM_URL, 
  GOOGLE_REVIEWS_URL, 
  buildWhatsAppUrl 
} from '../data/servicesData';

interface NfcModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const NfcModal: React.FC<NfcModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [activeTab, setActiveTab] = useState<'nfc' | 'qr'>('nfc');
  const [isSimulatingNfc, setIsSimulatingNfc] = useState(false);
  const [nfcSuccess, setNfcSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSimulateNfcTap = () => {
    setIsSimulatingNfc(true);
    setNfcSuccess(false);

    setTimeout(() => {
      setIsSimulatingNfc(false);
      setNfcSuccess(true);
      onShowToast('Conexão NFC estabelecida com sucesso!');
      setTimeout(() => setNfcSuccess(false), 3000);
    }, 1200);
  };

  // SVG QR Code generator (dynamic URL representation)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://refrigelar.com';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto backdrop-blur-md bg-black/80">
      <div 
        className="relative w-full max-w-md flex flex-col rounded-3xl frost-modal overflow-hidden text-slate-100 shadow-2xl border border-cyan-400/40"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nfc-title"
      >
        {/* Top Banner Ribbon */}
        <div className="relative bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 p-4 text-center text-white">
          <button
            onClick={onClose}
            className="absolute right-3.5 top-3.5 p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-cyan-200 font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{COMPANY_NAME} · REFRIGERAÇÃO E CLIMATIZAÇÃO</span>
          </div>
          <h2 id="nfc-title" className="text-2xl font-black tracking-tight text-white uppercase drop-shadow">
            APROXIME E ACESSE
          </h2>
          <p className="text-xs text-cyan-100 font-medium italic mt-0.5">
            &ldquo;{COMPANY_SLOGAN}&rdquo;
          </p>
        </div>

        {/* Tab switch between NFC & QR Code */}
        <div className="flex p-2 bg-slate-900/70 border-b border-cyan-500/20 text-xs gap-2">
          <button
            onClick={() => setActiveTab('nfc')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-2 font-bold transition-all cursor-pointer ${
              activeTab === 'nfc'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Nfc className="w-4 h-4" />
            <span>Aproximação NFC</span>
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-2 font-bold transition-all cursor-pointer ${
              activeTab === 'qr'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>QR Code</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 flex flex-col items-center text-center">
          {activeTab === 'nfc' ? (
            <div className="flex flex-col items-center w-full">
              {/* NFC Sensor Graphic (as in the poster) */}
              <div 
                onClick={handleSimulateNfcTap}
                className="relative my-4 cursor-pointer group"
                title="Toque para testar a leitura NFC"
              >
                {/* Concentric Signal Waves */}
                <div className={`absolute -inset-4 rounded-full bg-cyan-500/20 blur-md transition-all ${
                  isSimulatingNfc ? 'animate-ping' : 'animate-pulse'
                }`} />

                {/* Outer Circular Disk */}
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-500 p-1 shadow-2xl flex items-center justify-center border-2 border-white/20 transition-transform group-hover:scale-105 active:scale-95">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0a1e3f] to-[#040e20] flex flex-col items-center justify-center text-white relative">
                    {/* Animated waves icon */}
                    <div className="relative flex items-center justify-center">
                      <Wifi className="w-12 h-12 text-cyan-300 rotate-90" />
                      <Smartphone className="w-7 h-7 text-white absolute" />
                    </div>
                    <span className="text-sm font-black tracking-widest text-cyan-300 mt-1">
                      NFC
                    </span>
                  </div>
                </div>

                {nfcSuccess && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold flex items-center gap-1 shadow-lg animate-bounce">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Lido com sucesso!</span>
                  </div>
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-1">
                Aproxime seu celular da placa
              </h3>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-4">
                Encoste a parte traseira do seu smartphone com tecnologia NFC ativada na placa da Refrigelar para acessar instantaneamente sem digitar nada.
              </p>

              <button
                onClick={handleSimulateNfcTap}
                disabled={isSimulatingNfc}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all"
              >
                <Nfc className="w-4 h-4" />
                <span>{isSimulatingNfc ? 'Detectando sinal...' : 'Simular Aproximação de Celular'}</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              {/* QR Code Container */}
              <div className="my-3 p-4 rounded-2xl bg-white shadow-xl flex flex-col items-center border-4 border-cyan-500/30">
                {/* SVG QR Code Mockup with Brand Center */}
                <div className="relative w-48 h-48 bg-white flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    {/* QR Code Matrix Elements */}
                    {/* Corner 1 */}
                    <rect x="5" y="5" width="25" height="25" rx="3" fill="#0B1E38" />
                    <rect x="9" y="9" width="17" height="17" rx="2" fill="white" />
                    <rect x="13" y="13" width="9" height="9" rx="1" fill="#0284C7" />
                    
                    {/* Corner 2 */}
                    <rect x="70" y="5" width="25" height="25" rx="3" fill="#0B1E38" />
                    <rect x="74" y="9" width="17" height="17" rx="2" fill="white" />
                    <rect x="78" y="13" width="9" height="9" rx="1" fill="#0284C7" />

                    {/* Corner 3 */}
                    <rect x="5" y="70" width="25" height="25" rx="3" fill="#0B1E38" />
                    <rect x="9" y="74" width="17" height="17" rx="2" fill="white" />
                    <rect x="13" y="78" width="9" height="9" rx="1" fill="#0284C7" />

                    {/* Data Pixels Pattern */}
                    <rect x="36" y="8" width="6" height="6" fill="#0B1E38" />
                    <rect x="46" y="8" width="8" height="6" fill="#0B1E38" />
                    <rect x="58" y="12" width="6" height="6" fill="#0B1E38" />
                    <rect x="36" y="20" width="6" height="6" fill="#0B1E38" />
                    <rect x="48" y="24" width="6" height="6" fill="#0B1E38" />

                    <rect x="8" y="36" width="6" height="6" fill="#0B1E38" />
                    <rect x="20" y="44" width="6" height="6" fill="#0B1E38" />
                    <rect x="8" y="54" width="6" height="6" fill="#0B1E38" />

                    <rect x="70" y="36" width="6" height="6" fill="#0B1E38" />
                    <rect x="82" y="42" width="6" height="6" fill="#0B1E38" />
                    <rect x="74" y="54" width="6" height="6" fill="#0B1E38" />
                    <rect x="86" y="60" width="6" height="6" fill="#0B1E38" />

                    <rect x="36" y="72" width="6" height="6" fill="#0B1E38" />
                    <rect x="46" y="80" width="8" height="6" fill="#0B1E38" />
                    <rect x="58" y="74" width="6" height="6" fill="#0B1E38" />
                    <rect x="40" y="88" width="6" height="6" fill="#0B1E38" />
                    <rect x="72" y="74" width="6" height="6" fill="#0B1E38" />
                    <rect x="84" y="84" width="6" height="6" fill="#0B1E38" />

                    {/* Center Brand Badge */}
                    <rect x="36" y="36" width="28" height="28" rx="6" fill="#0284C7" />
                    <text x="50" y="54" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                      ❄️ RF
                    </text>
                  </svg>
                </div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                  Refrigelar · Pinhão PR
                </span>
              </div>

              <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-4">
                Aponte a câmera do celular para abrir o site oficial, WhatsApp e contatos da Refrigelar.
              </p>
            </div>
          )}

          {/* Quick Access Icons Row (Exactly like the 3rd image) */}
          <div className="w-full pt-4 border-t border-cyan-500/20">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-300 mb-3">
              Acesse Diretamente Nossos Canais
            </p>
            <div className="grid grid-cols-3 gap-2 w-full">
              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all hover:scale-105"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-white">Instagram</span>
              </a>

              {/* WhatsApp */}
              <a
                href={buildWhatsAppUrl('Olá! Acessei via NFC/QR da Refrigelar e gostaria de atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all hover:scale-105"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[11px] font-bold text-white">WhatsApp</span>
              </a>

              {/* Google Reviews */}
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all hover:scale-105"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white">Avaliar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
