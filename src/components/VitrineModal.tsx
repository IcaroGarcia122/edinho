import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Search, 
  MessageCircle, 
  Check, 
  Wind, 
  Sparkles, 
  Wrench, 
  Refrigerator, 
  ShieldCheck, 
  RotateCcw, 
  Store, 
  Zap, 
  Package, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { SERVICES_DATA, buildWhatsAppUrl, COMPANY_NAME } from '../data/servicesData';
import { ServiceCategory, ServiceItem } from '../types';

interface VitrineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'todos', label: 'Todos os Serviços' },
  { id: 'ar-condicionado', label: 'Ar-Condicionado' },
  { id: 'geladeiras', label: 'Geladeiras & Freezers' },
  { id: 'lavadoras', label: 'Lavadoras de Roupas' },
  { id: 'comercial', label: 'Comercial & Câmaras' },
  { id: 'pecas', label: 'Peças & Acessórios' },
];

export const VitrineModal: React.FC<VitrineModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-400" />;
      case 'Refrigerator':
        return <Refrigerator className="w-5 h-5 text-teal-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'RotateCcw':
        return <RotateCcw className="w-5 h-5 text-indigo-400" />;
      case 'Store':
        return <Store className="w-5 h-5 text-cyan-300" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Package':
        return <Package className="w-5 h-5 text-blue-300" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleConsultWhatsApp = (item: ServiceItem) => {
    const message = `Olá! Gostaria de consultar sobre o serviço "${item.title}" da Refrigelar. Como funciona o orçamento/agendamento?`;
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto backdrop-blur-md bg-black/75">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl frost-modal overflow-hidden text-slate-100 shadow-2xl border border-cyan-500/30"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vitrine-title"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cyan-500/20 flex items-center justify-between bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/30 border border-blue-400/30 text-cyan-300">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <h2 id="vitrine-title" className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Vitrine de Serviços & Especialidades
              </h2>
              <p className="text-xs text-cyan-300/80">
                {COMPANY_NAME} · Pinhão - PR e Região
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar vitrine"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Categories Tabs */}
        <div className="p-4 bg-slate-900/40 border-b border-white/5 space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar serviço (ex: ar condicionado, gás, motor, placa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-950/60 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categories Tab Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services List Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 flex-1 divide-y divide-white/5">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-10 h-10 text-slate-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-300">Nenhum serviço encontrado</p>
              <p className="text-xs text-slate-400 mt-1">
                Tente buscar por outro termo ou selecione outra categoria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('todos');
                  setSearchQuery('');
                }}
                className="mt-3 px-3 py-1.5 text-xs text-cyan-300 underline font-medium"
              >
                Ver todos os serviços
              </button>
            </div>
          ) : (
            filteredServices.map((item) => (
              <div
                key={item.id}
                className="pt-3.5 first:pt-0 group flex flex-col gap-3 rounded-2xl p-3 sm:p-4 bg-slate-900/50 hover:bg-slate-850 border border-cyan-500/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0">
                      {renderIcon(item.iconName)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-cyan-200 transition-colors">
                          {item.title}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                            {item.badge}
                          </span>
                        )}
                        {item.urgency && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300">
                            {item.urgency}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-1 sm:pl-12 text-[11px] sm:text-xs text-slate-300">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Action Button */}
                <div className="flex items-center justify-end pt-1">
                  <button
                    onClick={() => handleConsultWhatsApp(item)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950/40 transition-all cursor-pointer active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Consultar no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-slate-900/80 border-t border-cyan-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span>Não encontrou seu equipamento? Atendemos sob medida.</span>
          <a
            href={buildWhatsAppUrl('Olá! Tenho um equipamento diferente e gostaria de saber se a Refrigelar faz manutenção.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 font-semibold underline flex items-center gap-1"
          >
            Falar com Técnico no WhatsApp
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
