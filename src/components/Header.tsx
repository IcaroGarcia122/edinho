import React, { useState } from 'react';
import { 
  Share2, 
  Info, 
  Phone, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  COMPANY_SLOGAN, 
  COMPANY_SUBTITLE, 
  FORMATTED_PHONE, 
  getBusinessStatus 
} from '../data/servicesData';
import logoRefrigelar from '../assets/images/Logo REFRIGELAR com fundo transparente.png';

interface HeaderProps {
  onOpenStoreInfo: () => void;
  onShowToast: (msg: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenStoreInfo,
  onShowToast
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const status = getBusinessStatus();

  const handleShare = async () => {
    const shareData = {
      title: `${COMPANY_NAME} — Refrigeração & Climatização`,
      text: `Contatos, orçamentos e serviços da Refrigelar em Pinhão - PR. Conforto na temperatura certa!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        onShowToast('Página compartilhada com sucesso!');
      } catch (err) {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    onShowToast('Link da Refrigelar copiado!');
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(FORMATTED_PHONE);
    setCopiedPhone(true);
    onShowToast('Telefone copiado para a área de transferência!');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <header className="relative w-full pt-4 pb-6 px-4 flex flex-col items-center text-center">
      {/* Top Floating Control Bar */}
      <div className="w-full max-w-md flex items-center justify-between mb-5 px-1">
        {/* Live Business Status Pill (clickable to open info) */}
        <button
          onClick={onOpenStoreInfo}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-medium text-slate-200 hover:border-cyan-400 hover:bg-slate-800/90 transition-all shadow-sm backdrop-blur-md cursor-pointer"
          title="Ver horários de funcionamento"
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide">
            {status.statusText}
          </span>
          <Info className="w-3.5 h-3.5 text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity ml-0.5" />
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-white transition-all backdrop-blur-md active:scale-95 shadow-sm cursor-pointer"
          title="Compartilhar página"
          aria-label="Compartilhar"
        >
          <Share2 className="w-4 h-4 text-slate-300" />
        </button>
      </div>

      {/* Main Brand Emblem: Official Transparent Logo without card container */}
      <div 
        className="relative group cursor-pointer mb-2 flex items-center justify-center transition-transform duration-300 hover:scale-105" 
        onClick={onOpenStoreInfo}
      >
        <img
          src={logoRefrigelar}
          alt="Logo REFRIGELAR"
          className="w-44 h-44 sm:w-52 sm:h-52 object-contain filter drop-shadow-[0_12px_28px_rgba(2,132,199,0.55)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(2,132,199,0.5)] flex items-center gap-1.5">
          <span className="bg-gradient-to-b from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent font-black tracking-wider">
            {COMPANY_NAME}
          </span>
        </h1>

        {/* Subtitle / Services tag */}
        <p className="text-xs sm:text-sm text-cyan-200/90 font-medium tracking-wide mt-1 max-w-xs sm:max-w-md">
          {COMPANY_SUBTITLE}
        </p>

        {/* Slogan */}
        <p className="text-xs text-cyan-400/80 italic font-semibold mt-1 tracking-wide">
          &ldquo;{COMPANY_SLOGAN}&rdquo;
        </p>
      </div>

      {/* Quick Phone Call & Copy Badge */}
      <div className="mt-3.5 flex items-center gap-2">
        <a
          href={`tel:${FORMATTED_PHONE.replace(/\D/g, '')}`}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/40 text-cyan-200 hover:text-white hover:border-cyan-300 transition-all text-xs font-semibold shadow-inner"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          <span>{FORMATTED_PHONE}</span>
        </a>

        <button
          onClick={handleCopyPhone}
          className="p-1.5 rounded-full bg-slate-900/70 border border-slate-700/60 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
          title="Copiar telefone"
          aria-label="Copiar telefone"
        >
          {copiedPhone ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </header>
  );
};
