
export interface Wine {
  name: string;
  type: 'Red' | 'White' | 'Sparkling' | 'Rosé' | 'Dessert';
  priceRange: string;
  pairingReason: string;
  score: number;
}

export interface RecommendationResult {
  ranking: Wine[];
}

export interface HistoryItem {
  id: string;
  food: string;
  budget: string;
  date: string;
  wines: Wine[];
}

export type ViewState = 'home' | 'discovery' | 'results' | 'history' | 'favorites';
