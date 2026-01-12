
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecommendationForm from './components/RecommendationForm';
import WineResultList from './components/WineResultList';
import HistoryList from './components/HistoryList';
import FavoritesList from './components/FavoritesList';
import ProgressBar from './components/ProgressBar';
import SNSShareButton from './components/SNSShareButton';
import { Wine, HistoryItem, ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [discoveryStep, setDiscoveryStep] = useState(1);
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
    setView('results');
    
    const newHistoryItem: HistoryItem = {
      id: Date.now().toString(),
      food,
      budget,
      date: new Date().toLocaleDateString(),
      wines
    };
    setHistory(prev => [newHistoryItem, ...prev].slice(0, 20));
    setIsSearching(false);
  };

  const toggleFavorite = (wine: Wine) => {
    setFavorites(prev => {
      const isFav = prev.some(f => f.name === wine.name);
      if (isFav) return prev.filter(f => f.name !== wine.name);
      return [...prev, wine];
    });
  };

  const resetToHome = () => {
    setView('home');
    setDiscoveryStep(1);
    setRecommendations([]);
    setIsSearching(false);
  };

  const handleDiscoveryStart = () => {
    setDiscoveryStep(1);
    setView('discovery');
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#1D1717] selection:text-white bg-white">
      <Header currentView={view} setView={setView} onHomeClick={resetToHome} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <Hero onStart={handleDiscoveryStart} />
        )}

        {view === 'discovery' && (
          <div className="max-w-4xl mx-auto px-4 pt-[72px] pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ProgressBar currentStep={discoveryStep} />
            <div className="mt-0">
              <RecommendationForm 
                onResults={handleRecommend} 
                setIsLoading={setIsSearching}
                isLoading={isSearching}
                onStepChange={setDiscoveryStep}
              />
            </div>
          </div>
        )}

        {view === 'results' && (
          <div className="max-w-4xl mx-auto px-4 pt-[72px] pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ProgressBar currentStep={3} />
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-[#1D1717] mb-2 tracking-tight">
                  "{lastSearch.food}"에 어울리는 추천 와인
                </h2>
                <p className="text-stone-500 text-sm font-medium">예산 {lastSearch.budget} 내외의 최상의 마리아주입니다.</p>
              </div>
              <div className="flex flex-col items-end gap-3">
                <SNSShareButton food={lastSearch.food} wine={recommendations[0]} />
                <button 
                  onClick={handleDiscoveryStart}
                  className="text-[11px] font-black uppercase tracking-widest text-stone-400 hover:text-stone-950 transition-colors flex items-center gap-2 border-b border-stone-200 pb-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  다시 검색하기
                </button>
              </div>
            </div>
            <WineResultList 
              wines={recommendations} 
              favorites={favorites} 
              onToggleFavorite={toggleFavorite} 
            />
          </div>
        )}

        {view === 'history' && (
          <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            <h2 className="text-3xl font-logo tracking-tighter text-[#1D1717] mb-10">history</h2>
            <HistoryList history={history} />
          </div>
        )}

        {view === 'favorites' && (
          <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-500">
            <h2 className="text-3xl font-logo tracking-tighter text-[#1D1717] mb-10">favorites</h2>
            <FavoritesList 
              favorites={favorites} 
              onToggleFavorite={toggleFavorite} 
            />
          </div>
        )}
      </main>

      <footer className="bg-[#1D1717] py-5 px-6 mt-[70px]">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="text-stone-500 text-[10px] uppercase tracking-[0.25em] font-medium opacity-80">
            © 2026 Wineat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
