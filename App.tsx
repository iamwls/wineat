
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecommendationForm from './components/RecommendationForm';
import WineResultList from './components/WineResultList';
import ProgressBar from './components/ProgressBar';
import SNSShareButton from './components/SNSShareButton';
import { Wine, ViewState } from './types';

const ResultIcon = () => (
  <svg width="140" height="52" viewBox="0 0 109 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-900">
    <path d="M103.339 2.66106C103.525 2.52175 103.777 2.28211 104.105 1.90075C104.277 1.68727 104.459 1.43327 104.623 1.22919C104.786 1.02512 104.926 0.878665 105.151 0.656677" stroke="currentColor" strokeWidth="1.31338" strokeLinecap="round"/>
    <path d="M104.814 5.06385C104.83 5.06385 104.845 5.06385 105.334 5.05781C105.823 5.05178 106.785 5.03971 107.952 5.04342" stroke="currentColor" strokeWidth="1.31338" strokeLinecap="round"/>
    <path d="M82.6846 6.84645C82.6846 6.86087 82.6985 7.01418 82.8095 7.28913C82.87 7.4389 83.0866 7.52601 84.8209 7.85731C86.5552 8.18861 89.8384 8.74012 92.1744 9.03622C94.5105 9.33232 95.7998 9.35629 97.2087 9.28573C100.113 9.14026 101.768 8.84761 102.023 8.76942C102.29 8.68763 102.515 8.47989 102.692 8.23459C103.053 7.73499 102.758 6.91037 102.495 6.33541C102.375 6.07421 102.016 5.92476 101.01 5.69426C100.2 5.50842 98.7423 5.36499 95.8235 5.31988C92.9048 5.27477 88.5594 5.3789 86.2401 5.44663C83.7591 5.54252 83.4561 5.62521 83.2028 5.75329C83.0861 5.82772 82.9932 5.92129 82.8954 6.06393" stroke="currentColor" strokeWidth="1.31338" strokeLinecap="round"/>
    <path d="M92.4762 24.2636C92.474 24.2807 92.4719 24.2978 92.2881 26.5931C92.1044 28.8883 91.7392 33.4612 91.3629 38.1727" stroke="currentColor" strokeWidth="1.31338" strokeLinecap="round"/>
    <path d="M86.1703 38.7799C86.2976 38.7743 86.4249 38.7688 88.9532 38.5959C91.4815 38.423 96.4071 38.083 101.501 37.7214" stroke="currentColor" strokeWidth="1.31338" strokeLinecap="round"/>
    <path d="M84.8016 14.6732C85.4213 14.688 86.66 14.7177 87.8606 14.7604C89.0612 14.8031 90.1864 14.858 90.7804 14.9333C91.3744 15.0085 91.4032 15.1023 91.4102 15.186C91.4374 15.5117 91.0683 15.9015 90.5823 16.3308C90.3243 16.5587 89.3088 17.0178 87.966 17.6637C87.3125 17.9781 87.123 18.2114 86.9843 18.3741C86.8624 18.5173 86.8282 18.6828 86.8307 18.8296C86.832 18.9051 86.8779 18.9783 86.9518 19.0474C87.1176 19.2024 87.7748 19.3502 88.7358 19.5191C90.2141 19.7789 91.2467 19.3446 92.1095 18.9277C92.7308 18.6274 93.6624 18.026 94.4047 17.6062C95.1469 17.1864 95.6556 16.9354 96.2543 16.5028C96.853 16.0701 97.5264 15.4634 97.8649 15.237C98.2034 15.0105 98.1865 15.1828 98.1336 15.3682C97.8881 16.2279 97.1314 17.0968 96.1971 18.0313C96.0172 18.1936 95.9565 18.2378 95.7816 18.3303C95.6068 18.4229 95.3196 18.5625 94.981 18.7339" stroke="#310A38" strokeWidth="6.56689" strokeLinecap="round"/>
    <path d="M81.9905 7.16756C81.9905 7.17494 81.9225 8.87703 81.9672 12.4576C81.9907 14.343 82.3749 16.3545 82.616 17.6985C83.1196 20.5061 83.6093 21.1177 84.1151 21.7606C84.6688 22.4644 85.5538 22.9595 86.2408 23.3061C86.7752 23.5757 89.0507 23.5385 92.421 23.3446C94.521 23.2238 95.6827 22.4464 96.7777 21.7453C98.2213 20.8209 99.0824 19.8142 99.6473 19.0425C100.61 17.7276 101.186 16.4998 101.521 15.4832C101.752 14.7827 101.988 13.671 102.114 12.4209C102.24 11.1708 102.219 9.80674 102.166 8.79598C102.113 7.78523 102.028 7.16917 101.966 6.48819" stroke="currentColor" strokeWidth="1.31338" strokeLinecap="round"/>
    <path d="M11.2901 14.6467C11.2901 14.6431 11.5659 12.3413 12.0775 8.49213C12.284 6.93862 12.5009 6.21369 12.8995 6.65046C14.4446 8.34375 14.6321 10.5425 14.9659 10.9897C15.5322 11.7006 15.9382 12.2482 16.0519 12.5139C16.1102 12.5139 16.1699 12.8488 16.2752 13.1368" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M15.7855 11.5265C15.7942 11.5265 15.8029 11.5265 17.4598 11.6018C19.1168 11.6772 22.4217 11.828 25.8268 11.9834" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M25.8109 14.6979C25.8109 14.6959 25.8109 14.6939 25.9661 13.1637C26.1213 11.6334 26.4317 8.5749 26.6107 6.90768C26.8484 4.69428 27.1644 4.11017 27.5801 3.68321C27.8398 3.41644 28.7499 5.19184 29.9513 7.63476C30.5275 8.86031 31.0356 10.0572 31.3715 10.7937C31.7074 11.5302 31.8557 11.77 32.0722 12.1787" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M18.8247 19.336L18.8614 19.3396" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M23.1953 19.247V19.2513" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M20.8268 24.0809C20.6359 24.1292 20.0285 24.4486 19.7835 24.9413C19.7271 25.0546 19.8293 25.1913 19.9251 25.2634C20.1651 25.3528 20.4379 25.3411 20.6731 25.2509C20.7842 25.1902 20.8784 25.0993 20.9694 24.8903" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M23.7068 23.888C23.7461 23.8631 23.7853 23.8381 25.2372 23.085C26.6891 22.3319 29.5525 20.8514 31.1257 20.0745C32.6988 19.2976 32.8949 19.2692 33.1023 19.245" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M25.3962 26.6791C25.5275 26.6801 25.6587 26.6811 27.9178 26.9038C30.177 27.1265 34.56 27.571 38.952 28.0468" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M24.0599 29.5154C24.0983 29.5594 24.1366 29.6034 25.6821 30.8842C27.2275 32.1651 30.2788 34.6815 33.4693 37.305" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M2.03235 19.7337C2.06697 19.7381 2.10158 19.7425 4.15235 20.2848C6.20312 20.8271 10.269 21.9072 14.4372 23.0259" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M0.951996 27.2861C0.957738 27.2861 0.963481 27.2861 3.05064 27.1547C5.1378 27.0233 9.30621 26.7605 13.6009 26.4897" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M3.78683 35.222C3.92399 35.2 5.69092 34.7772 8.51664 34.0102C10.1573 33.3675 11.7898 32.2271 13.594 30.8713C14.2924 30.3602 14.5498 30.2081 14.8409 30.0226" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M13.5214 34.5622C13.772 34.7142 15.8033 35.4731 17.4432 35.8678C18.1776 35.9086 18.6395 35.8596 19.0366 35.7317C19.2981 35.6338 19.6815 35.4689 20.1541 35.1896" stroke="currentColor" strokeWidth="1.904" strokeLinecap="round"/>
    <path d="M51.1726 20.223C51.1789 20.223 51.1851 20.223 53.3291 20.1958C55.473 20.1687 59.7544 20.1145 64.1423 20.0546" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M56.8589 14.0093C56.8589 14.0172 56.8589 14.0252 57.0798 15.8807C57.3007 17.7362 57.7426 21.4391 58.0111 23.5454C58.2797 25.6517 58.3615 26.0493 58.4535 26.5272" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
    <div className="min-h-screen flex flex-col selection:bg-[#1D1717] selection:text-white bg-white">
      <Header currentView={view} setView={setView} onHomeClick={resetToHome} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <Hero onStart={handleDiscoveryStart} />
        )}

        {view === 'discovery' && (
          <div className="max-w-4xl mx-auto px-4 pt-[72px] pb-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
          <div className="max-w-3xl mx-auto px-4 pt-11 pb-0 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
            
            {/* [HIDDEN CAPTURE AREA] 저장 시에만 사용되는 오프스크린 영역 */}
            <div 
              id="wineat-capture-target" 
              className="fixed -left-[5000px] top-0 bg-white w-[600px] flex flex-col items-center"
              style={{ paddingBottom: '60px' }}
            >
              {/* 캡처본 최상단: 로고 및 슬로건 */}
              <div className="w-full pt-12 pb-10 text-center border-b border-stone-100 mb-8">
                <h1 className="text-5xl font-logo italic text-[#1D1717] mb-3">wineat!</h1>
                <p className="text-stone-400 text-lg font-instrument-sans italic tracking-wide">
                  wine + eat = wineat. . . !
                </p>
              </div>

              {/* 캡처본 본문: 결과 아이콘 및 타이틀 */}
              <div className="flex flex-col items-center text-center px-8">
                <div className="mb-[20px]">
                   <ResultIcon />
                </div>
                
                <div className="mb-10 flex flex-col items-center gap-[8px]">
                  <h2 className="text-3xl font-bold text-[#1D1717] tracking-tight">
                    <span className="relative inline-block">
                      <span className="relative z-10">"{lastSearch.food}"</span>
                      <span 
                        className="absolute bottom-1 left-0 w-full h-3 bg-[#FF89C2]/20 -z-0"
                        style={{ borderRadius: '2px 4px 3px 5px' }}
                      ></span>
                    </span>
                    에 어울리는 추천 와인
                  </h2>
                  <p className="text-stone-500 text-lg font-medium">
                    예산 {lastSearch.budget} 최고의 와인들이에요!
                  </p>
                </div>
              </div>

              {/* 캡처본 본문: 와인 리스트 (버튼 제거 모드) */}
              <div className="w-full px-8 mb-4">
                <WineResultList 
                  wines={recommendations} 
                  favorites={[]} 
                  onToggleFavorite={() => {}} 
                  foodName={lastSearch.food}
                  isCaptureMode={true}
                />
              </div>

              {/* 캡처본 하단: 브랜드 로고 (사용자 요청: 하단 여백 60 및 로고 가독성 강화) */}
              <div className="mt-8 mb-4 flex flex-col items-center">
                <span className="font-logo italic text-3xl text-[#1D1717] opacity-60">wineat!</span>
                <p className="text-[10px] text-stone-300 uppercase tracking-widest mt-1">wine pairing guide</p>
              </div>
            </div>

            {/* [WEB UI AREA] 실제 화면에 보이는 영역 */}
            <div id="capture-area" className="bg-white rounded-none">
              <div className="flex flex-col items-center justify-center text-center px-4 pt-6">
                <div className="mb-[20px]">
                   <ResultIcon />
                </div>
                
                <div className="mb-10 flex flex-col items-center gap-[8px]">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1D1717] tracking-tight">
                    <span className="relative inline-block">
                      <span className="relative z-10">"{lastSearch.food}"</span>
                      <span 
                        className="absolute bottom-1 left-0 w-full h-3 bg-[#FF89C2]/20 -z-0 origin-left"
                        style={{ 
                          transform: 'rotate(-0.5deg) skewX(-15deg)',
                          borderRadius: '2px 4px 3px 5px' 
                        }}
                      ></span>
                    </span>
                    에 어울리는 추천 와인
                  </h2>
                  <p className="text-stone-500 text-base md:text-lg font-medium">
                    예산 {lastSearch.budget} 최고의 와인들이에요!
                  </p>
                </div>
              </div>

              <div className="mb-8 px-4">
                <WineResultList 
                  wines={recommendations} 
                  favorites={[]} 
                  onToggleFavorite={() => {}} 
                  foodName={lastSearch.food}
                  isCaptureMode={false}
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-3 md:gap-5 mt-4">
              <button 
                onClick={handleDiscoveryStart}
                className="group flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-4 bg-white border border-stone-200 text-stone-400 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-stone-50 hover:text-stone-600 hover:border-stone-300 transition-all active:scale-95 whitespace-nowrap"
                style={{ borderRadius: "15% 85% 15% 85% / 85% 15% 85% 15%" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                다른 페어링 찾기
              </button>

              <SNSShareButton food={lastSearch.food} wine={recommendations[0]} />
            </div>
          </div>
        )}
      </main>

      <footer className="bg-[#1D1717] py-5 px-6 mt-[60px]">
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
