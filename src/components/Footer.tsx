import React from 'react';
import { ShieldCheck, Heart, Snowflake } from 'lucide-react';
import { COMPANY_NAME, COMPANY_SLOGAN, FORMATTED_PHONE, COMPANY_ADDRESS } from '../data/servicesData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-md px-4 pt-6 pb-24 text-center flex flex-col items-center">
      {/* Decorative divider */}
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent mb-4" />

      {/* Trust badges */}
      <div className="flex items-center gap-2 text-xs text-cyan-300/80 mb-2 font-medium">
        <ShieldCheck className="w-4 h-4 text-cyan-400" />
        <span>Garantia em Peças & Serviços · Técnicos Capacitados</span>
      </div>

      <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
        {COMPANY_NAME} — {COMPANY_ADDRESS}.
      </p>

      <p className="text-[11px] text-cyan-400/70 italic mt-1 font-medium">
        &ldquo;{COMPANY_SLOGAN}&rdquo;
      </p>

      <div className="mt-4 text-[10px] text-slate-500 flex flex-col items-center gap-1">
        <span>© {currentYear} {COMPANY_NAME} · Todos os direitos reservados.</span>
        <span className="flex items-center gap-1">
          Feito com <Snowflake className="w-3 h-3 text-cyan-400" /> para Pinhão e Região
        </span>
      </div>
    </footer>
  );
};
