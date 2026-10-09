import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  MapPin, 
  Phone, 
  CreditCard, 
  ShieldCheck, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Navigation
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  FORMATTED_PHONE, 
  COMPANY_ADDRESS, 
  GOOGLE_MAPS_URL, 
  getBusinessStatus 
} from '../data/servicesData';

interface StoreInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const StoreInfoModal: React.FC<StoreInfoModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [copied, setCopied] = useState(false);
  const status = getBusinessStatus();

  // Close on Escape key
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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(FORMATTED_PHONE);
    setCopied(true);
    onShowToast('Telefone copiado!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`Refrigelar - ${COMPANY_ADDRESS}`);
    onShowToast('Endereço copiado!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto backdrop-blur-md bg-black/75">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] flex flex-col rounded-3xl frost-modal overflow-hidden text-slate-100 shadow-2xl border border-cyan-500/30"
        role="dialog"
        aria-modal="true"
        aria-labelledby="store-info-title"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cyan-500/20 flex items-center justify-between bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-600/30 border border-cyan-400/30 text-cyan-300">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 id="store-info-title" className="text-lg font-bold text-white tracking-tight">
                Informações da Empresa
              </h2>
              <p className="text-xs text-cyan-300/80">
                {COMPANY_NAME} · Pinhão - PR
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar informações"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {/* Status Banner */}
          <div className={`p-3.5 rounded-2xl border flex items-center justify-between ${
            status.isOpen 
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
          }`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-3 h-3 rounded-full animate-ping ${status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <div>
                <p className="text-sm font-bold tracking-tight">{status.statusText}</p>
                <p className="text-xs opacity-90">{status.nextOpeningText}</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-white/10">
              {status.isOpen ? 'Atendendo' : 'WhatsApp Aberto'}
            </span>
          </div>

          {/* Horários de Atendimento */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/10 space-y-2.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Horário de Atendimento</span>
            </div>
            <div className="text-xs space-y-1.5 text-slate-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="font-medium text-slate-200">Segunda a Sexta-feira:</span>
                <span className="font-semibold text-cyan-300">08:00 às 18:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="font-medium text-slate-200">Sábado:</span>
                <span className="font-semibold text-cyan-300">08:00 às 12:00</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium text-slate-400">Domingo e Feriados:</span>
                <span className="text-slate-400 italic">Plantão via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Localização & Endereço */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Endereço & Localização</span>
              </div>
              <button
                onClick={handleCopyAddress}
                className="text-[11px] text-slate-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>Copiar</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
              {COMPANY_ADDRESS} — Atendimento em nossa oficina técnica e em domicílio na cidade e região.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Abrir rota no Maps</span>
              </a>
              <a
                href={`https://waze.com/ul?q=Refrigelar+Pinhao+PR`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
              >
                <span>Waze</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Contato Telefônico */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/10 space-y-2.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <Phone className="w-4 h-4" />
              <span>Telefone & WhatsApp Direto</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-white tracking-wide">
                {FORMATTED_PHONE}
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href={`tel:${FORMATTED_PHONE.replace(/\D/g, '')}`}
                  className="px-3 py-1 rounded-lg bg-cyan-600/40 hover:bg-cyan-600/60 text-cyan-200 text-xs font-semibold border border-cyan-400/30 transition-all"
                >
                  Ligar
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  title="Copiar telefone"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Formas de Pagamento & Garantia */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/10 space-y-2.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <CreditCard className="w-4 h-4" />
              <span>Formas de Pagamento Aceitas</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>PIX (Instantâneo)</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Cartão em até 12x</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Cartão de Débito</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Dinheiro / Boleto</span>
              </div>
            </div>
          </div>

          {/* Selo de Garantia */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-cyan-500/30 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">Serviço com Garantia Técnica</p>
              <p className="text-slate-300">Peças originais, laudo e garantia em todos os consertos e instalações.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
