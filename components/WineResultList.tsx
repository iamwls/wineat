
import React from 'react';
import { Wine } from '../types';
import WineCard from './WineCard';

interface WineResultListProps {
  wines: Wine[];
  favorites: Wine[];
  onToggleFavorite: (wine: Wine) => void;
}

const WineResultList: React.FC<WineResultListProps> = ({ wines, favorites, onToggleFavorite }) => {
  return (
    <div className="grid gap-6">
      {wines.map((wine, idx) => (
        <WineCard 
          key={wine.name} 
          wine={wine} 
          rank={idx + 1}
          isFavorite={favorites.some(f => f.name === wine.name)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default WineResultList;
