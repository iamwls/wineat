
import React from 'react';
import { Wine } from '../types';
import WineCard from './WineCard';

interface FavoritesListProps {
  favorites: Wine[];
  onToggleFavorite: (wine: Wine) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites, onToggleFavorite }) => {
  if (favorites.length === 0) {
    return (
      <div className="text-center py-32 bg-stone-100/50 rounded-[40px] border-2 border-dashed border-stone-200">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-stone-200 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <p className="text-stone-400 font-medium leading-relaxed">저장된 와인이 없습니다.<br /><span className="text-sm font-normal opacity-70">마음에 드는 와인에 하트를 눌러보세요.</span></p>
      </div>
    );
  }

  return (
    <div className="grid gap-8">
      {favorites.map(wine => (
        <WineCard 
          key={wine.name} 
          wine={wine} 
          isFavorite={true} 
          onToggleFavorite={onToggleFavorite} 
        />
      ))}
    </div>
  );
};

export default FavoritesList;
