
import React, { useState } from 'react';
import { getWineRecommendations } from '../services/geminiService';
import { Wine } from '../types';

interface RecommendationFormProps {
  onResults: (wines: Wine[], food: string, budget: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ onResults, setIsLoading }) => {
  const [food, setFood] = useState('');
  const [budget, setBudget] = useState('5만원 내외');
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const foodCategories = [
    { label: "삼겹살", emoji: "🥓" },
    { label: "스테이크", emoji: "🥩" },
    { label: "연어", emoji: "🐟" },
    { label: "파스타", emoji: "🍝" },
    { label: "치즈", emoji: "🧀" },
    { label: "초밥", emoji: "🍣" },
    { label: "치킨", emoji: "🍗" },
    { label: "피자", emoji: "🍕" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!food.trim()) {
      setError('음식을 입력해주세요.');
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      const wines = await getWineRecommendations(food, budget);
      onResults(wines, food, budget);
    } catch (err) {
      setError('추천을 가져오는데 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-none shadow-none p-8 md:p-12 relative z-20 border border-black text-left">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <label className="block text-lg uppercase tracking-tight text-stone-900 mb-3 flex items-baseline">
              <span className="font-logo text-3xl mr-3 italic uppercase">Q1.</span>
              <span className="font-thin">
                <span className="relative inline-block">
                  <span className="relative z-10 px-1">어떤 음식</span>
                  <span 
                    className="absolute bottom-[-1px] left-0 w-[105%] h-2.5 bg-[#C34482]/10 -z-0 origin-left"
                    style={{ 
                      transform: 'rotate(-1.8deg) skewX(-12deg)',
                      borderRadius: '1px 3px 2px 4px' 
                    }}
                  ></span>
                </span>을 드시나요?
              </span>
            </label>
            <input 
              type="text"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="예: 치즈가 듬뿍 들어간 라자냐"
              className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-none focus:ring-4 focus:ring-stone-950/5 focus:border-black outline-none transition-all placeholder:text-stone-300 font-medium text-lg"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {foodCategories.map(cat => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setFood(cat.label)}
                  className="text-[11px] px-3 py-1.5 border border-stone-100 text-stone-400 rounded-none hover:bg-stone-950 hover:text-white hover:border-black transition-all font-bold flex items-center gap-1.5"
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg uppercase tracking-tight text-stone-900 mb-3 flex items-baseline">
              <span className="font-logo text-3xl mr-3 italic uppercase">Q2.</span>
              <span className="font-thin">희망 예산 범위</span>
            </label>
            <div className="relative">
              <select 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-none focus:ring-4 focus:ring-stone-950/5 focus:border-black outline-none transition-all appearance-none font-medium text-stone-800 text-lg"
              >
                <option value="3만원 이하">3만원 이하</option>
                <option value="5만원 내외">5만원 내외</option>
                <option value="10만원 내외">10만원 내외</option>
                <option value="제한 없음">제한 없음</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-[13px] font-medium bg-red-50 py-3 px-5 rounded-none border border-red-100">{error}</p>}

        <div 
          className="relative group max-w-md mx-auto cursor-pointer mt-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="absolute inset-0 border-[1.2px] border-stone-400 -z-0 pointer-events-none transition-all duration-500 ease-in-out"
            style={{
              borderRadius: isHovered 
                ? '140px 170px 130px 180px / 125px 105px 140px 110px'
                : '0px',
              transform: isHovered ? 'rotate(1.5deg) scale(1.05)' : 'rotate(0deg) scale(1)',
              opacity: isHovered ? 0.8 : 0
            }}
          ></div>

          <button 
            type="submit"
            className="relative w-full py-5 font-logo uppercase text-lg tracking-tighter flex items-center justify-center gap-3 transition-all duration-500 ease-in-out active:scale-[0.98] z-10 text-stone-800 bg-white"
            style={{
              border: isHovered ? '2px solid #1D1717' : '1px solid #000',
              borderRadius: isHovered 
                ? '145px 160px 150px 155px / 125px 115px 130px 110px'
                : '0px',
              boxShadow: isHovered ? '6px 8px 0px 0px #1D1717' : '0px 0px 0px 0px rgba(0,0,0,0)',
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
            }}
          >
            Find My Pairing
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecommendationForm;
