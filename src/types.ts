export type ServiceCategory = 
  | 'todos'
  | 'ar-condicionado'
  | 'geladeiras'
  | 'lavadoras'
  | 'comercial'
  | 'pecas';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  details: string[];
  badge?: string;
  urgency?: string;
  image?: string;
  iconName: string;
}

export interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  scheduleDetails: string;
  nextOpeningText: string;
}
