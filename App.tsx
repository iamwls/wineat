
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecommendationForm from './components/RecommendationForm';
import WineResultList from './components/WineResultList';
import HistoryList from './components/HistoryList';
import FavoritesList from './components/FavoritesList';
import SommelierLoader from './components/SommelierLoader';
import { Wine, HistoryItem, ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [recommendations, setRecommendations] = useState<Wine[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [favorites, setFavorites] = useState<Wine[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [lastSearch, setLastSearch] = useState({ food: '', budget: '' });

  useEffect(() => {
    const savedHistory = localStorage.getItem('wineat_history');
    const savedFavorites = localStorage.getItem('wineat_favorites');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem('wineat_history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('wineat_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleRecommend = (wines: Wine[], food: string, budget: string) => {
    setRecommendations(wines);
    setLastSearch({ food, budget });
    
    const newHistoryItem: HistoryItem = {
      id: Date.now().toString(),
      food,
      budget,
      date: new Date().toLocaleDateString(),
      wines
    };
    setHistory(prev => [newHistoryItem, ...prev].slice(0, 20));
  };

  const toggleFavorite = (wine: Wine) => {
    setFavorites(prev => {
      const isFav = prev.some(f => f.name === wine.name);
      if (isFav) return prev.filter(f => f.name !== wine.name);
      return [...prev, wine];
    });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-900 selection:text-white">
      <Header currentView={view} setView={setView} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <div id="recommend" className="max-w-4xl mx-auto px-4 py-4">
              <RecommendationForm 
                onResults={handleRecommend} 
                setIsLoading={setIsSearching}
              />
              
              {isSearching ? (
                <div className="mt-20">
                  <SommelierLoader />
                </div>
              ) : (
                recommendations.length > 0 && (
                  <div className="mt-20">
                    <h2 className="text-2xl font-bold text-stone-900 mb-2 tracking-tight">
                      "{lastSearch.food}"에 어울리는 추천 와인
                    </h2>
                    <p className="text-stone-500 mb-10 text-sm">예산 {lastSearch.budget} 내외의 최상의 마리아주입니다.</p>
                    <WineResultList 
                      wines={recommendations} 
                      favorites={favorites} 
                      onToggleFavorite={toggleFavorite} 
                    />
                  </div>
                )
              )}
            </div>
          </>
        )}

        {view === 'history' && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-10 tracking-tight">나의 검색 히스토리</h2>
            <HistoryList history={history} />
          </div>
        )}

        {view === 'favorites' && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-10 tracking-tight">즐겨찾는 와인</h2>
            <FavoritesList 
              favorites={favorites} 
              onToggleFavorite={toggleFavorite} 
            />
          </div>
        )}
      </main>

      <footer className="bg-stone-950 text-stone-500 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-script text-3xl text-stone-100 mb-4">wineat!</h1>
          <p className="text-mm font-light tracking-wide">"wine + eat = wineat...!"</p>
          <div className="mt-12 border-t border-stone-900 pt-8 text-[11px] uppercase tracking-widest opacity-50">
            © 2026 Wineat. All rights reserved. | Powered by Gemini AI
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
