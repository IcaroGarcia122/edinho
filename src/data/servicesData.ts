import { ServiceItem, BusinessStatus } from '../types';

export const COMPANY_PHONE = '42999091021';
export const FORMATTED_PHONE = '(42) 99909-1021';
export const COMPANY_NAME = 'REFRIGELAR';
export const COMPANY_SUBTITLE = 'Refrigeração, Climatização & Assistência Técnica';
export const COMPANY_SLOGAN = 'Conforto na temperatura certa';
export const COMPANY_ADDRESS = 'Centro, Pinhão - PR';
export const INSTAGRAM_HANDLE = '@refrigelar';
export const INSTAGRAM_URL = 'https://instagram.com/refrigelar';
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Refrigelar+Refrigeração+Pinhão+PR';
export const GOOGLE_REVIEWS_URL = 'https://search.google.com/local/writereview?placeid=ChIJrefrigelarPinhaoPR';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'instalacao-ar',
    title: 'Instalação de Ar-Condicionado Split & Inverter',
    category: 'ar-condicionado',
    shortDesc: 'Instalação padrão com bomba de vácuo, suportes adequados e garantia técnica.',
    details: [
      'Modelos Hi-Wall, Inverter, Cassete e Piso Teto',
      'Processo de vácuo rigoroso que preserva a vida útil do compressor',
      'Tubulação de cobre dimensionada e isolamento térmico blindado',
      'Teste de estanqueidade e regulagem eletrônica de gás'
    ],
    badge: 'Mais Solicitado',
    urgency: 'Atendimento Rápido',
    iconName: 'Wind'
  },
  {
    id: 'higienizacao-ar',
    title: 'Higienização & Limpeza Antibacteriana',
    category: 'ar-condicionado',
    shortDesc: 'Eliminação de ácaros, fungos, mofo e bactérias com bactericida profissional certificado.',
    details: [
      'Desmontagem técnica da carenagem e limpeza da turbina',
      'Aplicação de produto biodegradável homologado pela ANVISA',
      'Desobstrução do dreno e higienização da serpentina',
      'Reduz consumo elétrico e melhora imediata da qualidade do ar'
    ],
    badge: 'Saúde & Conforto',
    iconName: 'Sparkles'
  },
  {
    id: 'manutencao-ar',
    title: 'Conserto & Manutenção de Ar-Condicionado',
    category: 'ar-condicionado',
    shortDesc: 'Diagnóstico de vazamentos, carga de gás (R410A / R32) e reparo de placas eletrônicas.',
    details: [
      'Resolução de problemas de não gelar ou pingando água',
      'Substituição de capacitor, ventilador e sensores de degelo',
      'Reparo de códigos de erro em aparelhos Inverter',
      'Atendimento no local residencial e comercial'
    ],
    urgency: 'Plantão Técnico',
    iconName: 'Wrench'
  },
  {
    id: 'geladeiras-conserto',
    title: 'Conserto de Geladeiras & Refrigeradores Frost Free',
    category: 'geladeiras',
    shortDesc: 'Especialista em refrigeradores Brastemp, Electrolux, Consul, Panasonic e importadas.',
    details: [
      'Troca de motor compressor com vácuo e carga de gás',
      'Diagnóstico quando a parte de baixo não gela ou congela tudo',
      'Substituição de termostato, bimetal, resistência e ventilador',
      'Conserto ou reprogramação de placa eletrônica de controle'
    ],
    badge: 'Conserto em Domicílio',
    iconName: 'Refrigerator'
  },
  {
    id: 'borracha-vedacao',
    title: 'Troca de Borracha (Gaxeta) de Geladeiras e Freezers',
    category: 'geladeiras',
    shortDesc: 'Vedação perfeita para economizar energia e evitar perda de frio.',
    details: [
      'Gaxetas magnéticas originais sob medida',
      'Ajuste e nivelamento da porta para vedação hermética',
      'Elimina formação excessiva de gelo e condensação externa',
      'Aumenta o rendimento térmico do motor'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'maquinas-lavar',
    title: 'Conserto de Máquinas de Lavar e Lava & Seca',
    category: 'lavadoras',
    shortDesc: 'Manutenção completa de lavadoras Brastemp, Consul, Electrolux, Colormaq e Samsung.',
    details: [
      'Troca do mecanismo / câmbio, retentores e rolamentos (barulho ao centrifugar)',
      'Substituição de eletrobomba de drenagem e válvula de entrada de água',
      'Reparo da placa de potência / placa interface e atuador',
      'Troca de correia, tirantes de suspensão e trava de segurança'
    ],
    badge: 'Diagnóstico Preciso',
    iconName: 'RotateCcw'
  },
  {
    id: 'higienizacao-lavadoras',
    title: 'Higienização Interna de Máquinas de Lavar',
    category: 'lavadoras',
    shortDesc: 'Desmontagem completa do cesto para remoção de lodo, fiapos e calcário acumulado.',
    details: [
      'Remoção de resíduos que mancham roupas e causam mau cheiro',
      'Limpeza com jato de pressão e desinfecção de componentes internos',
      'Lubrificação preventiva das articulações e verificação de desgaste',
      'Deixa a máquina limpa como nova'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'balcoes-camaras',
    title: 'Refrigeração Comercial & Câmaras Frigoríficas',
    category: 'comercial',
    shortDesc: 'Assistência técnica para supermercados, açougues, panificadoras e distribuidoras de bebidas.',
    details: [
      'Manutenção de balcões refrigerados, expositores e cervejeiras',
      'Montagem e reparo de câmaras frias de congelados e resfriados',
      'Contrato de manutenção preventiva e periódica para empresas',
      'Carga de gás refrigerante e ajuste fino de controladores digitais'
    ],
    badge: 'Linha Comercial',
    urgency: 'Prioridade Comercial',
    iconName: 'Store'
  },
  {
    id: 'microondas-eletros',
    title: 'Conserto de Micro-ondas & Eletros em Geral',
    category: 'comercial',
    shortDesc: 'Reparo seguro de magnetron, fusíveis térmicos, capacitores de alta e teclado de membrana.',
    details: [
      'Diagnóstico quando liga mas não esquenta',
      'Substituição de prato giratório e motor de arraste',
      'Revisão do circuito de alta voltagem com normas de segurança',
      'Orçamento transparente na bancada da loja'
    ],
    iconName: 'Zap'
  },
  {
    id: 'pecas-controles',
    title: 'Peças & Controles Remotos de Ar-Condicionado',
    category: 'pecas',
    shortDesc: 'Venda de controles novos, peças de reposição e acessórios para instalação.',
    details: [
      'Controles remotos universais e modelos originais testados',
      'Suportes reforçados de condensadora em aço e fibra',
      'Capacitores, filtros, tubulações de cobre e fitas isolantes',
      'Consulte a disponibilidade para seu modelo específico'
    ],
    badge: 'Pronta Entrega',
    iconName: 'Package'
  }
];

export function getBusinessStatus(): BusinessStatus {
  // Calculate based on America/Sao_Paulo time (GMT-3)
  const now = new Date();
  // UTC offset calculation for Brazil
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const brazilDate = new Date(utc - 3 * 3600000);
  
  const day = brazilDate.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = brazilDate.getHours();
  const minute = brazilDate.getMinutes();
  const currentMinutes = hour * 60 + minute;

  // Mon-Fri: 08:00 - 18:00 (480 min to 1080 min)
  // Sat: 08:00 - 12:00 (480 min to 720 min)
  // Sun: Closed
  const isWeekday = day >= 1 && day <= 5;
  const isSaturday = day === 6;

  if (isWeekday) {
    if (currentMinutes >= 480 && currentMinutes < 1080) {
      return {
        isOpen: true,
        statusText: 'Aberto Agora',
        scheduleDetails: 'Segunda a Sexta das 08h às 18h',
        nextOpeningText: 'Fechamento às 18:00'
      };
    } else if (currentMinutes < 480) {
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        scheduleDetails: 'Segunda a Sexta das 08h às 18h',
        nextOpeningText: 'Abre hoje às 08:00'
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        scheduleDetails: 'Segunda a Sexta das 08h às 18h',
        nextOpeningText: day === 5 ? 'Abre sábado às 08:00' : 'Abre amanhã às 08:00'
      };
    }
  }

  if (isSaturday) {
    if (currentMinutes >= 480 && currentMinutes < 720) {
      return {
        isOpen: true,
        statusText: 'Aberto Agora',
        scheduleDetails: 'Sábado das 08h às 12h',
        nextOpeningText: 'Fechamento às 12:00'
      };
    } else if (currentMinutes < 480) {
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        scheduleDetails: 'Sábado das 08h às 12h',
        nextOpeningText: 'Abre hoje às 08:00'
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        scheduleDetails: 'Reabre segunda às 08h',
        nextOpeningText: 'Atendimento via WhatsApp aberto para agendamentos'
      };
    }
  }

  // Sunday
  return {
    isOpen: false,
    statusText: 'Fechado aos Domingos',
    scheduleDetails: 'Segunda a Sexta das 08h às 18h',
    nextOpeningText: 'Abre segunda-feira às 08:00'
  };
}

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/55${COMPANY_PHONE}?text=${encoded}`;
}
