
import React from 'react';
import { Wine } from '../types';

interface WineCardProps {
  wine: Wine;
  rank?: number;
  isFavorite: boolean;
  onToggleFavorite: (wine: Wine) => void;
}

const WineCard: React.FC<WineCardProps> = ({ wine, rank, isFavorite, onToggleFavorite }) => {
  // Enhanced hand-drawn sketchy border radius
  const outerSketchyRadius = "255px 15px 225px 15px/15px 225px 15px 255px";
  const innerSketchyRadius = "240px 20px 210px 25px/25px 210px 20px 240px";
  const badgeRadius = "45% 55% 48% 52% / 55% 45% 52% 48%";

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
    <div className="relative group">
      {/* Hand-drawn shadow layer */}
      <div 
        className="absolute inset-0 border-[1.5px] border-stone-200 -z-10 translate-x-2 translate-y-2 opacity-60 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"
        style={{ borderRadius: outerSketchyRadius }}
      ></div>

      <div 
        className="bg-white p-7 md:p-10 border-[2.5px] border-black transition-all duration-500 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.02)]"
        style={{ 
          borderRadius: outerSketchyRadius,
        }}
      >
        {rank && (
          <div className="absolute top-0 left-0 w-24 h-24 flex items-center justify-center pointer-events-none opacity-20">
            <span className="font-logo italic font-bold text-6xl text-stone-200 -rotate-12 select-none">{rank}</span>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] ${getTypeColor(wine.type)}`}
                style={{ borderRadius: badgeRadius }}>
                {wine.type}
              </span>
              <span className="text-[13px] font-bold text-stone-900">{wine.priceRange}</span>
              <div className="ml-auto flex items-center gap-2 px-3 py-1">
                <span className="text-[10px] text-stone-300 font-black uppercase tracking-widest">Match</span>
                <span className="text-xl font-logo italic text-[#FF89C2]">{wine.score}%</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-stone-950 mb-5 tracking-tight group-hover:text-stone-700 transition-colors">
              {wine.name}
            </h3>
            
            <div className="relative">
              <p className="text-stone-500 leading-relaxed max-w-2xl font-light text-base pl-8 italic border-l-2 border-stone-100 py-1">
                <span className="absolute left-0 top-0 text-stone-200 text-5xl font-serif select-none">“</span>
                {wine.pairingReason}
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center justify-between gap-5 md:min-w-[130px]">
            <button 
              onClick={() => onToggleFavorite(wine)}
              className={`p-4.5 transition-all duration-300 border-[2.5px] ${
                isFavorite 
                ? 'bg-stone-950 border-stone-950 text-white shadow-md' 
                : 'border-stone-100 text-stone-200 hover:border-black hover:text-stone-950 hover:bg-stone-50'
              }`}
              style={{ borderRadius: "50% 50% 50% 50% / 15% 85% 15% 85%" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="flex-grow md:flex-none px-6 py-3.5 bg-stone-50 text-stone-950 text-[11px] font-black uppercase tracking-widest border-[1.5px] border-stone-200 hover:bg-stone-950 hover:text-white hover:border-black transition-all duration-300 active:scale-95"
              style={{ borderRadius: innerSketchyRadius }}>
              VIEW DETAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
