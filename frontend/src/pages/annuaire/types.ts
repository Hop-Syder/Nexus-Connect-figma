// Types pour l'annuaire

export type ProfileStatus = 
  | 'entreprise' 
  | 'pme' 
  | 'mpe' 
  | 'agence-cabinet' 
  | 'ong' 
  | 'freelancer' 
  | 'artisan' 
  | 'etudiant' 
  | 'benevole';

export type SubscriptionTier = 'free' | 'freemium' | 'premium';

export type Country = 
  | 'Bénin' 
  | 'Nigeria' 
  | 'Sénégal' 
  | 'Côte d\'Ivoire' 
  | 'Ghana' 
  | 'Togo' 
  | 'Mali' 
  | 'Burkina Faso';

export interface Profile {
  id: string;
  name: string;
  title: string;
  city: string;
  country: Country;
  tags: string[];
  rating: number; // 0-5
  reviewCount: number;
  status: ProfileStatus;
  tier: SubscriptionTier;
  whatsapp: string;
  email: string;
  avatar?: string;
  isNewMember?: boolean; // Inscrit il y a moins de 30 jours
  joinDate: Date;
}

export interface FilterState {
  search: string;
  countries: Country[];
  statuses: ProfileStatus[];
  tags: string[];
  newMembers: boolean;
  tiers: SubscriptionTier[];
}
