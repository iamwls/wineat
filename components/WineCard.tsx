import React from 'react';
import { Wine } from '../types';

interface WineCardProps {
  wine: Wine;
  rank?: number;
  isFavorite: boolean;
  onToggleFavorite: (wine: Wine) => void;
}

const WineCard: React.FC<WineCardProps> = ({ wine, rank, isFavorite, onToggleFavorite }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Red': return 'bg-stone-900 text-white';
      case 'White': return 'bg-stone-100 text-stone-800';
      case 'Sparkling': return 'bg-stone-50 text-stone-500 border border-stone-200';
      case 'Rosé': return 'bg-stone-100 text-stone-600';
      default: return 'bg-stone-100 text-stone-800';
    }
  };

  return (
    <div className="bg-white rounded-none p-7 md:p-10 border border-black shadow-none transition-all duration-300 relative overflow-hidden group">
      {rank && (
        <div className="absolute top-0 left-0 w-20 h-20 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-stone-950 opacity-[0.03] -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <span className="relative z-10 font-serif font-bold text-4xl text-stone-200">{rank}</span>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className={`px-3 py-1 rounded-none text-[10px] font-black uppercase tracking-[0.15em] ${getTypeColor(wine.type)}`}>
              {wine.type}
            </span>
            <span className="text-[13px] font-bold text-stone-900">{wine.priceRange}</span>
            <div className="ml-auto flex items-center gap-1.5 bg-stone-50 px-3 py-1 rounded-none border border-stone-100">
              <span className="text-[10px] text-stone-400 font-black uppercase tracking-widest">Match</span>
              <span className="text-sm font-black text-stone-950">{wine.score}%</span>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-stone-950 mb-4 tracking-tight group-hover:text-stone-700 transition-colors">
            {wine.name}
          </h3>
          
          <p className="text-stone-500 leading-relaxed max-w-2xl font-light text-base">
            <span className="text-stone-300 mr-2 text-2xl font-serif">“</span>
            {wine.pairingReason}
          </p>
        </div>

        <div className="flex flex-row md:flex-col items-center justify-between gap-4 md:min-w-[120px]">
          <button 
            onClick={() => onToggleFavorite(wine)}
            className={`p-4 rounded-none border transition-all duration-300 ${
              isFavorite 
              ? 'bg-stone-950 border-stone-950 text-white' 
              : 'border-stone-200 text-stone-300 hover:border-black hover:text-stone-950'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="flex-grow md:flex-none px-6 py-3 bg-stone-50 text-stone-950 text-[11px] font-black uppercase tracking-widest rounded-none border border-stone-200 hover:bg-stone-950 hover:text-white hover:border-black transition-all duration-300">
            VIEW DETAIL
          </button>
        </div>
      </div>
    </div>
  );
};

export default WineCard;