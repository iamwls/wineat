
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecommendationForm from './components/RecommendationForm';
import WineResultList from './components/WineResultList';
import ProgressBar from './components/ProgressBar';
import SNSShareButton from './components/SNSShareButton';
import { Wine, ViewState } from './types';

const ResultIcon = () => (
  <svg width="100" height="40" viewBox="0 0 109 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M103.339 2.66106C103.525 2.52175 103.777 2.28211 104.105 1.90075" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M84.8016 14.6732C85.4213 14.688 86.66 14.7177 87.8606 14.7604" stroke="#310A38" strokeWidth="6" strokeLinecap="round"/>
    <path d="M81.9905 7.16756C81.9905 7.17494 81.9225 8.87703 81.9672 12.4576" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [discoveryStep, setDiscoveryStep] = useState(1);
  const [recommendations, setRecommendations] = useState<Wine[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [lastSearch, setLastSearch] = useState({ food: '', budget: '' });

  const handleRecommend = (wines: Wine[], food: string, budget: string) => {
    setRecommendations(wines);
    setLastSearch({ food, budget });
    setView('results');
    setIsSearching(false);
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
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1D1717]">
      <Header currentView={view} setView={setView} onHomeClick={resetToHome} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <Hero onStart={handleDiscoveryStart} />
        )}

        {view === 'discovery' && (
          <div className="max-w-4xl mx-auto px-4 pt-[72px] animate-in fade-in duration-500">
            <ProgressBar currentStep={discoveryStep} />
            <RecommendationForm 
              onResults={handleRecommend} 
              setIsLoading={setIsSearching}
              isLoading={isSearching}
              onStepChange={setDiscoveryStep}
            />
          </div>
        )}

        {view === 'results' && (
          <div className="max-w-3xl mx-auto px-4 pt-12 animate-in fade-in duration-500">
            {/* 캡처 전용 영역 (Hidden) */}
            <div 
              id="wineat-capture-target" 
              className="fixed -left-[9999px] top-0 bg-white w-[500px] flex flex-col items-center"
              style={{ paddingBottom: '60px' }}
            >
              <div className="w-full py-12 text-center border-b border-stone-50 mb-10">
                <h1 className="text-5xl font-logo italic text-[#1D1717] mb-2">wineat!</h1>
                <p className="text-stone-400 font-instrument-sans italic">wine + eat = wineat. . . !</p>
              </div>
              <div className="px-8 flex flex-col items-center">
                <ResultIcon />
                <h2 className="text-3xl font-bold mt-6 mb-10 text-center">
                  "{lastSearch.food}"에 어울리는 추천 와인
                </h2>
                <WineResultList wines={recommendations} favorites={[]} onToggleFavorite={() => {}} isCaptureMode={true} />
              </div>
              <div className="mt-12 flex flex-col items-center opacity-40">
                <span className="font-logo italic text-2xl">wineat!</span>
              </div>
            </div>

            {/* 실제 화면 표시 영역 */}
            <div className="flex flex-col items-center text-center mb-10">
              <ResultIcon />
              <h2 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight">
                "{lastSearch.food}" 추천 페어링
              </h2>
              <p className="text-stone-400 mt-2">예산 {lastSearch.budget} 내외</p>
            </div>

            <div className="mb-10">
              <WineResultList wines={recommendations} favorites={[]} onToggleFavorite={() => {}} isCaptureMode={false} />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleDiscoveryStart}
                className="px-8 py-4 bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 transition-all active:scale-95 text-sm font-medium uppercase tracking-wider"
                style={{ borderRadius: "15% 85% 15% 85% / 85% 15% 85% 15%" }}
              >
                다시 하기
              </button>
              <SNSShareButton food={lastSearch.food} wine={recommendations[0]} />
            </div>
          </div>
        )}
      </main>

      {/* 모든 화면 공통 푸터 여백 60px 적용 */}
      <footer className="bg-[#1D1717] py-6 mt-[60px]">
        <div className="text-center text-stone-600 text-[10px] tracking-[0.3em] uppercase">
          © 2024 WINEAT. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default App;
