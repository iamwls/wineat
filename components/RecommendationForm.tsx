
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
    <div className="bg-white rounded-[40px] shadow-2xl shadow-stone-900/5 p-8 md:p-14 -mt-24 relative z-20 border border-stone-100">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <label className="block text-lg font-bold text-stone-900 mb-4 tracking-tight">어떤 음식을 드시나요?</label>
            <input 
              type="text"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="예: 치즈가 듬뿍 들어간 라자냐"
              className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-4 focus:ring-stone-950/5 focus:border-stone-950 outline-none transition-all placeholder:text-stone-300 font-medium text-lg"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {foodCategories.map(cat => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setFood(cat.label)}
                  className="text-[12px] px-3.5 py-2 border border-stone-100 text-stone-500 rounded-full hover:bg-stone-950 hover:text-white hover:border-stone-950 transition-all font-semibold flex items-center gap-1.5"
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg font-bold text-stone-800 mb-4 tracking-tight">희망 예산 범위</label>
            <div className="relative">
              <select 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-4 focus:ring-stone-950/5 focus:border-stone-950 outline-none transition-all appearance-none font-medium text-stone-800 text-lg"
              >
                <option value="3만원 이하">3만원 이하 (합리적인 가성비)</option>
                <option value="5만원 내외">5만원 내외 (대중적인 선택)</option>
                <option value="10만원 내외">10만원 내외 (특별한 다이닝)</option>
                <option value="제한 없음">제한 없음 (프리미엄 빈티지)</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-[13px] font-medium bg-red-50 py-3 px-5 rounded-xl border border-red-100">{error}</p>}

        <button 
          type="submit"
          className="w-full bg-stone-950 hover:bg-black text-white py-5 rounded-2xl font-semibold text-xl shadow-xl shadow-stone-900/20 transition-all active:scale-[0.99] tracking-tight flex items-center justify-center gap-3"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M7 3C7 3 5 6.5 5 9C5 12.866 8.134 16 12 16C15.866 16 19 12.866 19 9C19 6.5 17 3 17 3H7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V21M12 21H9M12 21H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 8C8 8 9 9 12 9C15 9 16 8 16 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
          나만의 와잇 페어링 찾기
        </button>
      </form>
    </div>
  );
};

export default RecommendationForm;
