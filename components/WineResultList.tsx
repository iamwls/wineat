
import React from 'react';
import { Wine } from '../types';
import WineCard from './WineCard';

interface WineResultListProps {
  wines: Wine[];
  favorites: Wine[];
  onToggleFavorite: (wine: Wine) => void;
  foodName?: string;
  isCaptureMode?: boolean;
}

const WineResultList: React.FC<WineResultListProps> = ({ wines, onToggleFavorite, isCaptureMode = false }) => {
  return (
    <div className="flex flex-col">
      <div className="grid gap-6">
        {wines.map((wine, idx) => (
          <WineCard 
            key={wine.name} 
            wine={wine} 
            rank={idx + 1}
            isFavorite={false}
            onToggleFavorite={onToggleFavorite}
            isCaptureMode={isCaptureMode}
          />
        ))}
      </div>
    </div>
  );
};

export default WineResultList;
