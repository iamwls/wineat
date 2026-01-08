
import React, { useState, useRef, useEffect } from 'react';
import { getWineRecommendations } from '../services/geminiService';
import { Wine } from '../types';

interface RecommendationFormProps {
  onResults: (wines: Wine[], food: string, budget: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  onStepChange: (step: number) => void;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ onResults, setIsLoading, onStepChange }) => {
  const [step, setStep] = useState(1);
  const [food, setFood] = useState('');
  const [budgetAmount, setBudgetAmount] = useState(5); // 0 to 50 range
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const sliderRef = useRef<HTMLDivElement>(null);

  // Sketchy border radius for the card and elements
  const cardSketchyRadius = "255px 15px 225px 15px/15px 225px 15px 255px";
  const buttonNormalBorder = "255px 15px 225px 15px/15px 225px 15px 255px";
  const buttonHoverBorder = "15px 225px 15px 255px/255px 15px 225px 15px";

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

  const handleNext = () => {
    if (!food.trim()) {
      setError('음식을 입력해주세요.');
      return;
    }
    setError('');
    setStep(2);
    onStepChange(2);
  };

  const handleBack = () => {
    setStep(1);
    onStepChange(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const budgetString = budgetAmount === 50 ? "50만원 이상 (제한 없음)" : `${budgetAmount}만원 내외`;

    try {
      const wines = await getWineRecommendations(food, budgetString);
      onResults(wines, food, budgetString);
    } catch (err) {
      setError('추천을 가져오는데 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  // Slider Logic (0-50 range)
  const handleSliderInteraction = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const value = Math.round(percentage * 50);
    setBudgetAmount(value);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSliderInteraction(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleSliderInteraction(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleSliderInteraction(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging) handleSliderInteraction(e.touches[0].clientX);
    };
    const onEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging]);

  return (
    <div 
      className="bg-white p-8 md:p-12 relative z-20 border-[2.5px] border-black text-left min-h-[420px] flex flex-col justify-start transition-all duration-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
      style={{ borderRadius: cardSketchyRadius }}
    >
      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <label className="block text-xl tracking-tight text-stone-900 mb-8 flex items-baseline font-normal">
            <span className="font-logo text-3xl mr-3 italic uppercase text-stone-900">Q1.</span>
            <span>
              <span className="relative inline-block">
                <span className="relative z-10">어떤 음식</span>
                <span 
                  className="absolute bottom-[-1px] left-0 w-[78%] h-2.5 bg-[#FF89C2]/15 -z-0 origin-left"
                  style={{ 
                    transform: 'rotate(-1deg) skewX(-10deg)',
                    borderRadius: '2px 4px 3px 5px' 
                  }}
                ></span>
              </span>을 드시나요?
            </span>
          </label>
          <input 
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            placeholder="ex) 치즈가 듬뿍 들어간 라자냐"
            className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-stone-100 focus:border-black outline-none transition-all placeholder:text-stone-300 font-normal text-2xl"
            onKeyDown={(e) => e.key === 'Enter' && handleNext()}
            autoFocus
          />
          <div className="mt-8 flex flex-wrap gap-[6px]">
            {foodCategories.map((cat) => {
              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setFood(cat.label)}
                  className="text-[13px] px-4 py-2 transition-all duration-300 font-normal flex items-center gap-2 group active:scale-95 border-[1px] border-stone-200 text-stone-400 bg-white hover:border-stone-400 hover:text-stone-700"
                  style={{ 
                    borderRadius: '100px',
                    transform: 'rotate(0deg)'
                  }}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {cat.emoji}
                  </span>
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="mt-12 flex justify-end">
            <button 
              onClick={handleNext}
              className="px-10 py-4 bg-black text-white font-logo italic text-xl tracking-tighter hover:bg-stone-800 transition-colors flex items-center gap-2"
              style={{ borderRadius: "15% 85% 15% 85% / 85% 15% 85% 15%" }}
            >
              Next Step
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4 duration-500">
          <label className="block text-xl tracking-tight text-stone-900 mb-8 flex items-baseline font-normal">
            <span className="font-logo text-3xl mr-3 italic uppercase text-stone-900">Q2.</span>
            <span>
              원하는 <span className="relative inline-block">
                <span className="relative z-10">가격대</span>
                <span 
                  className="absolute bottom-[-1px] left-0 w-full h-2.5 bg-[#FF89C2]/15 -z-0 origin-left"
                  style={{ 
                    transform: 'rotate(-1deg) skewX(-10deg)',
                    borderRadius: '2px 4px 3px 5px' 
                  }}
                ></span>
              </span>를 설정해주세요!
            </span>
          </label>
          
          <div className="w-full px-0 py-4 border-b-2 border-stone-100 font-normal text-2xl text-stone-900 transition-colors">
            {budgetAmount === 50 ? "제한 없음 (50만원+)" : `${budgetAmount}만원`}
          </div>

          {/* Draggable Progress Bar / Slider (Range 0-50) */}
          <div className="mt-5 mb-4 px-2 relative h-16 flex flex-col justify-center">
            {/* Slider Track */}
            <div 
              ref={sliderRef}
              className="relative h-1.5 w-full bg-stone-100 rounded-full cursor-pointer"
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
            >
              {/* Active Fill */}
              <div 
                className="absolute left-0 top-0 h-full bg-black rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(budgetAmount / 50) * 100}%` }}
              />

              {/* Draggable Handle - Solid Black Circle */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-black shadow-sm transition-transform ${isDragging ? 'scale-110 shadow-lg' : 'hover:scale-105'}`}
                style={{ 
                  left: `${(budgetAmount / 50) * 100}%`,
                  borderRadius: "50%",
                  transition: isDragging ? 'none' : 'left 0.3s ease-out, transform 0.2s ease-in-out'
                }}
              />
            </div>

            {/* Labels below slider */}
            <div className="mt-6 flex justify-between w-full pointer-events-none px-1">
              {[0, 10, 20, 30, 40, 50].map((val) => (
                <span 
                  key={val} 
                  className={`font-instrument-sans text-[11px] font-medium tracking-wider transition-all duration-300 ${Math.abs(budgetAmount - val) < 5 ? 'text-black opacity-100' : 'text-stone-300 opacity-60'}`}
                >
                  {val === 50 ? '50+' : val}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-[110px] flex justify-between gap-4">
            <button 
              type="button"
              onClick={handleBack}
              className="px-8 py-4 border border-stone-200 text-stone-400 font-logo italic text-xl tracking-tighter hover:bg-stone-50 transition-colors"
              style={{ borderRadius: "85% 15% 85% 15% / 15% 85% 15% 85%" }}
            >
              Back
            </button>

            <div 
              className="relative group flex-grow max-w-xs cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button 
                type="submit"
                className="relative w-full py-4 font-serif-regular text-2xl tracking-tight flex items-center justify-center gap-3 transition-all duration-300 ease-in-out active:scale-[0.98] z-10 text-stone-800 bg-white lowercase"
                style={{
                  border: '2px solid #1D1717',
                  borderRadius: isHovered ? buttonHoverBorder : buttonNormalBorder,
                  boxShadow: isHovered ? '4px 6px 0px 0px #1D1717' : '0px 0px 0px 0px rgba(0,0,0,0)',
                  transform: isHovered ? 'translate(-2px, -2px)' : 'translate(0, 0)'
                }}
              >
                find pairing!
              </button>
            </div>
          </div>
        </form>
      )}

      {error && <p className="mt-6 text-red-500 text-[13px] font-medium bg-red-50 py-3 px-5 rounded-none border border-red-100">{error}</p>}
    </div>
  );
};

export default RecommendationForm;
