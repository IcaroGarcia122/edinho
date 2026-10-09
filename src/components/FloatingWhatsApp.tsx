import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl, FORMATTED_PHONE, COMPANY_NAME } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const message = `Olá! Vim pelo site da Refrigelar e gostaria de informações e atendimento.`;
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 relative bg-slate-900 border border-emerald-500/40 text-white rounded-2xl p-2.5 shadow-xl max-w-[210px] text-xs animate-bounce flex items-start gap-2">
          <div>
            <p className="font-bold text-emerald-400">Plantão Refrigelar ❄️</p>
            <p className="text-[11px] text-slate-300">Precisa de conserto urgente? Fale conosco agora!</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.6)] hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/20"
        title={`Chamar no WhatsApp (${FORMATTED_PHONE})`}
        aria-label="Chamar no WhatsApp"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Unread badge dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border-2 border-slate-900 items-center justify-center text-[9px] font-bold text-slate-950">
            1
          </span>
        </span>
      </button>
    </div>
  );
};
