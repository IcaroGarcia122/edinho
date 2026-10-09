import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calculator, 
  MessageCircle, 
  Wind, 
  Refrigerator, 
  RotateCcw, 
  Store, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Sparkles
} from 'lucide-react';
import { buildWhatsAppUrl, COMPANY_NAME } from '../data/servicesData';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const APPLIANCES = [
  { id: 'ar', label: 'Ar-Condicionado', icon: Wind, desc: 'Split, Inverter, Janela' },
  { id: 'geladeira', label: 'Geladeira / Freezer', icon: Refrigerator, desc: 'Frost Free, Duplex' },
  { id: 'lavadora', label: 'Máquina de Lavar', icon: RotateCcw, desc: 'Lavadora, Lava & Seca' },
  { id: 'comercial', label: 'Comercial / Balcão', icon: Store, desc: 'Cervejeira, Câmara' },
  { id: 'microondas', label: 'Micro-ondas', icon: Zap, desc: 'Eletrodomésticos' },
];

const SERVICE_TYPES = [
  'Conserto / Não funciona',
  'Higienização & Limpeza',
  'Instalação Nova',
  'Carga de Gás / Manutenção',
];

const COMMON_ISSUES: Record<string, string[]> = {
  ar: ['Não está gelando', 'Pingando água dentro', 'Barulho no ventilador', 'Código de erro no painel', 'Higienização preventiva', 'Preciso instalar'],
  geladeira: ['Parte de baixo não gela', 'Não gela nada / motor parado', 'Formando muito gelo', 'Vazando água no chão', 'Troca de borracha/porta', 'Fazendo estalos/barulho'],
  lavadora: ['Não centrifuga', 'Barulho alto ao girar', 'Não entra água', 'Não solta água/não drena', 'Vazamento por baixo', 'Placa não liga'],
  comercial: ['Temperatura subindo', 'Ventilador travado', 'Alarme de temperatura', 'Revisão periódica', 'Carga de gás'],
  microondas: ['Não esquenta', 'Não liga no painel', 'Faíscas por dentro', 'Prato não gira', 'Botões não respondem'],
};

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({ isOpen, onClose }) => {
  const [selectedAppliance, setSelectedAppliance] = useState('ar');
  const [serviceType, setServiceType] = useState('Conserto / Não funciona');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [customDetail, setCustomDetail] = useState('');
  const [userName, setUserName] = useState('');
  const [userNeighborhood, setUserNeighborhood] = useState('');

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

  const currentIssues = COMMON_ISSUES[selectedAppliance] || [];
  const selectedApplianceObj = APPLIANCES.find(a => a.id === selectedAppliance);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parts = [
      `*SOLICITAÇÃO DE ORÇAMENTO / CHAMADO - REFRIGELAR* ❄️`,
      `-----------------------------------------`,
      `🔧 *Equipamento:* ${selectedApplianceObj?.label || 'Eletrodoméstico'}`,
      `📋 *Tipo de Serviço:* ${serviceType}`,
      selectedIssue ? `⚠️ *Sintoma/Problema:* ${selectedIssue}` : '',
      customDetail ? `📝 *Observações:* ${customDetail}` : '',
      userName ? `👤 *Cliente:* ${userName}` : '',
      userNeighborhood ? `📍 *Bairro/Local:* ${userNeighborhood} (Pinhão - PR)` : '',
      `-----------------------------------------`,
      `Olá! Poderiam me passar uma estimativa de valor e disponibilidade para atendimento?`
    ].filter(Boolean);

    const fullMessage = parts.join('\n');
    window.open(buildWhatsAppUrl(fullMessage), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto backdrop-blur-md bg-black/80">
      <div 
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col rounded-3xl frost-modal overflow-hidden text-slate-100 shadow-2xl border border-cyan-500/30"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cyan-500/20 flex items-center justify-between bg-slate-900/70 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 id="quote-title" className="text-lg font-bold text-white tracking-tight">
                Simulador de Chamado & Orçamento
              </h2>
              <p className="text-xs text-cyan-300/80">
                Preencha em 30 segundos e envie ao WhatsApp
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar simulador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {/* Step 1: Equipamento */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
              1. Qual é o equipamento?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {APPLIANCES.map((app) => {
                const Icon = app.icon;
                const isSelected = selectedAppliance === app.id;
                return (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => {
                      setSelectedAppliance(app.id);
                      setSelectedIssue('');
                    }}
                    className={`flex flex-col items-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600/30 border-cyan-400 text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                        : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:bg-slate-850 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                    <span className="text-xs font-bold leading-tight">{app.label}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{app.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Tipo de Serviço */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
              2. O que você precisa?
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SERVICE_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setServiceType(type)}
                  className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                    serviceType === type
                      ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-sm'
                      : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Sintoma comum */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
              3. Sintoma mais comum (ou selecione abaixo):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {currentIssues.map((issue) => (
                <button
                  key={issue}
                  type="button"
                  onClick={() => setSelectedIssue(issue === selectedIssue ? '' : issue)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedIssue === issue
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'bg-slate-850 text-slate-300 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {issue}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Detalhes adicionais & Local */}
          <div className="space-y-2.5 pt-1">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Marca / Modelo ou detalhe adicional (opcional):
              </label>
              <input
                type="text"
                placeholder="Ex: Samsung 12.000 BTU, Electrolux Frost Free, etc."
                value={customDetail}
                onChange={(e) => setCustomDetail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950/70 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Seu Nome:
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950/70 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Seu Bairro em Pinhão:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Centro, Invernadinha..."
                  value={userNeighborhood}
                  onChange={(e) => setUserNeighborhood(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950/70 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/70 transition-all cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enviar Chamado no WhatsApp da Refrigelar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Você será direcionado diretamente ao WhatsApp com os dados preenchidos. Sem compromisso!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
