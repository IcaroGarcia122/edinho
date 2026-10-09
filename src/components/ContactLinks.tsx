import React from 'react';
import { 
  MessageCircle, 
  Layers, 
  Instagram, 
  Star, 
  MapPin, 
  Clock, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { 
  FORMATTED_PHONE, 
  INSTAGRAM_URL, 
  INSTAGRAM_HANDLE, 
  GOOGLE_MAPS_URL, 
  GOOGLE_REVIEWS_URL, 
  buildWhatsAppUrl 
} from '../data/servicesData';

interface ContactLinksProps {
  onOpenVitrine: () => void;
  onOpenStoreInfo: () => void;
}

export const ContactLinks: React.FC<ContactLinksProps> = ({
  onOpenVitrine,
  onOpenStoreInfo
}) => {
  const primaryWhatsAppMessage = `Olá! Vim pelo site da Refrigelar e gostaria de solicitar um atendimento/orçamento para meus equipamentos.`;

  return (
    <nav className="w-full max-w-md flex flex-col gap-3 px-4" aria-label="Nossos contatos e serviços">
      {/* 1. WHATSAPP PRINCIPAL - HIGH IMPACT PRIMARY CTA */}
      <a
        href={buildWhatsAppUrl(primaryWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex w-full items-center gap-3.5 sm:gap-4 rounded-2xl p-3.5 sm:p-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.99] border border-emerald-400/50"
      >
        {/* Glow backdrop */}
        <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-md group-hover:scale-105 transition-transform">
          <MessageCircle className="h-6 w-6 fill-current" />
        </div>

        <div className="flex flex-col min-w-0 text-left flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm sm:text-base leading-tight tracking-tight">
              WhatsApp Atendimento & Orçamentos
            </span>
            <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] font-bold bg-white/20 text-white rounded-md uppercase tracking-wider">
              Online
            </span>
          </div>
          <span className="text-xs text-emerald-100 truncate mt-0.5">
            {FORMATTED_PHONE} · Atendimento Rápido
          </span>
        </div>

        <ChevronRight className="h-5 w-5 text-emerald-100 shrink-0 group-hover:translate-x-1 transition-transform" />
      </a>

      {/* 2. VITRINE VIRTUAL & CATÁLOGO DE SERVIÇOS */}
      <button
        onClick={onOpenVitrine}
        className="group relative flex w-full items-center gap-3.5 sm:gap-4 rounded-2xl p-3.5 sm:p-4 frost-card text-left transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-900/40 group-hover:scale-105 transition-transform">
          <Layers className="h-6 w-6" />
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-bold text-sm sm:text-base text-white leading-tight">
            Vitrine & Catálogo de Serviços
          </span>
          <span className="text-xs text-slate-300/80 truncate mt-0.5">
            Ar-Condicionado, Geladeiras, Lavadoras & Peças
          </span>
        </div>

        <ChevronRight className="h-5 w-5 text-slate-400 shrink-0 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* 3. INSTAGRAM OFICIAL */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex w-full items-center gap-3.5 sm:gap-4 rounded-2xl p-3.5 sm:p-4 frost-card text-left transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md shadow-rose-900/30 group-hover:scale-105 transition-transform">
          <Instagram className="h-6 w-6" />
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-bold text-sm sm:text-base text-white leading-tight">
            Instagram {INSTAGRAM_HANDLE}
          </span>
          <span className="text-xs text-slate-300/80 truncate mt-0.5">
            Siga nosso perfil · Fotos de serviços & novidades
          </span>
        </div>

        <ExternalLink className="h-4 w-4 text-slate-400 shrink-0 group-hover:text-rose-400 transition-colors" />
      </a>

      {/* 4. AVALIAR NO GOOGLE */}
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex w-full items-center gap-3.5 sm:gap-4 rounded-2xl p-3.5 sm:p-4 frost-card text-left transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-800 shadow-md shadow-white/10 group-hover:scale-105 transition-transform">
          {/* Google G icon */}
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm sm:text-base text-white leading-tight">
              Avalie no Google
            </span>
            <div className="flex text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
            </div>
          </div>
          <span className="text-xs text-slate-300/80 truncate mt-0.5">
            Sua opinião nos ajuda a crescer · 5 Estrelas
          </span>
        </div>

        <ExternalLink className="h-4 w-4 text-slate-400 shrink-0 group-hover:text-amber-400 transition-colors" />
      </a>

      {/* 5. COMO CHEGAR À REFRIGELAR */}
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex w-full items-center gap-3.5 sm:gap-4 rounded-2xl p-3.5 sm:p-4 frost-card text-left transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-md shadow-red-900/30 group-hover:scale-105 transition-transform">
          <MapPin className="h-6 w-6" />
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-bold text-sm sm:text-base text-white leading-tight">
            Como Chegar à Loja
          </span>
          <span className="text-xs text-slate-300/80 truncate mt-0.5">
            Centro, Pinhão - PR · Abrir rota no Maps
          </span>
        </div>

        <ExternalLink className="h-4 w-4 text-slate-400 shrink-0 group-hover:text-rose-400 transition-colors" />
      </a>

      {/* 6. HORÁRIO DE ATENDIMENTO & DADOS DA EMPRESA */}
      <button
        onClick={onOpenStoreInfo}
        className="group relative flex w-full items-center gap-3.5 sm:gap-4 rounded-2xl p-3.5 sm:p-4 frost-card text-left transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 text-cyan-300 shadow-md group-hover:scale-105 transition-transform">
          <Clock className="h-6 w-6" />
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-bold text-sm sm:text-base text-white leading-tight">
            Horários de Atendimento & Info
          </span>
          <span className="text-xs text-slate-300/80 truncate mt-0.5">
            Seg à Sex: 08h-18h · Sáb: 08h-12h · Pagamentos
          </span>
        </div>

        <ChevronRight className="h-5 w-5 text-slate-400 shrink-0 group-hover:translate-x-1 transition-transform" />
      </button>
    </nav>
  );
};
