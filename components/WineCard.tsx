
import React from 'react';
import { Wine } from '../types';

interface WineCardProps {
  wine: Wine;
  rank?: number;
  isFavorite: boolean;
  onToggleFavorite: (wine: Wine) => void;
  topRightAction?: React.ReactNode;
  isCaptureMode?: boolean;
}

const WineCard: React.FC<WineCardProps> = ({ wine, rank, isCaptureMode = false }) => {
  const outerSketchyRadius = "255px 15px 225px 15px/15px 225px 15px 255px";
  const innerSketchyRadius = "240px 20px 210px 25px/25px 210px 20px 240px";
  const badgeRadius = "45% 55% 48% 52% / 55% 45% 52% 48%";

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'Red': return 'bg-stone-900 text-white';
      case 'White': return 'bg-stone-100 text-stone-800';
      case 'Sparkling': return 'bg-stone-50 text-stone-500 border border-stone-200';
      case 'Rosé': return 'bg-stone-100 text-stone-600';
      default: return 'bg-stone-100 text-stone-800';
    }
  };

  const handleSearchDetail = () => {
    const query = encodeURIComponent(`${wine.nameKo} ${wine.name}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <div className="relative group">
      {/* Hand-drawn shadow layer */}
      <div 
        className="absolute inset-0 border-[1.5px] border-stone-200 -z-10 translate-x-1.5 translate-y-1.5 opacity-40 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
        style={{ borderRadius: outerSketchyRadius }}
      ></div>

      <div 
        className={`bg-white border-[2px] border-black transition-all duration-500 relative overflow-hidden flex flex-col shadow-sm ${isCaptureMode ? 'pb-2' : ''}`}
        style={{ borderRadius: outerSketchyRadius }}
      >
        {/* Content Section */}
        <div className="flex-grow p-5 md:p-7 relative">
          {rank && (
            <div className="absolute top-4 right-6 md:top-6 md:right-8 pointer-events-none opacity-[0.07]">
              <span className="font-logo italic font-bold text-6xl md:text-8xl text-stone-900 -rotate-6 select-none leading-none">{rank}</span>
            </div>
          )}

          <div className="flex-grow relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em] ${getTypeStyles(wine.type)}`}
                style={{ borderRadius: badgeRadius }}>
                {wine.type}
              </span>
              <span className="text-[12px] font-bold text-stone-900">{wine.priceRange}</span>
            </div>
            
            <div className="mb-3 max-w-[80%]">
              <h3 className="text-xl md:text-2xl font-bold text-stone-950 tracking-tight group-hover:text-stone-700 transition-colors leading-tight mb-1">
                {wine.nameKo}
              </h3>
              <p className="text-[11px] md:text-xs text-stone-400 font-medium tracking-wide uppercase opacity-70">
                {wine.name}
              </p>
            </div>
            
            <div className="relative mb-6">
              <p className="text-stone-500 leading-relaxed max-w-2xl font-light text-[14px] md:text-[15px] pl-6 italic border-l-[1.5px] border-stone-100 py-1">
                <span className="absolute left-0 top-0 text-stone-200 text-4xl font-serif select-none">“</span>
                {wine.pairingReason}
              </p>
            </div>
          </div>

          {!isCaptureMode && (
            <div className="flex flex-row items-center justify-between gap-4 relative z-10">
              <button 
                onClick={handleSearchDetail}
                className="w-full px-6 py-2.5 bg-stone-50 text-stone-950 text-[10px] font-black uppercase tracking-widest border-[1.5px] border-stone-100 hover:bg-stone-950 hover:text-white hover:border-black transition-all duration-300 active:scale-95"
                style={{ borderRadius: innerSketchyRadius }}
              >
                VIEW DETAIL
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WineCard;
