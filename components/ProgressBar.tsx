
import React from 'react';

interface ProgressBarProps {
  currentStep: number; // 1, 2, or 3
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  // Hand-drawn wobbly border-radius for doodle effect
  const doodleRadius = "48% 52% 50% 50% / 55% 45% 55% 45%";
  const steps = [1, 2, 3];

  // Nodding Cat Icon
  const NoddingCat = () => (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-10 pointer-events-none flex justify-center">
      <div className="animate-cat-nod w-full">
        <svg
          viewBox="0 0 27 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <path d="M7.51396 7.94783C7.51396 7.94543 7.69751 6.41355 8.03802 3.85177C8.17545 2.81785 8.31979 2.33539 8.58505 2.62608C9.61342 3.75302 9.7382 5.21634 9.96035 5.51399C10.3372 5.98711 10.6075 6.35154 10.6831 6.52839C10.7219 6.62891 10.7617 6.75131 10.8317 6.94294"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M10.5058 5.87122C10.5116 5.87122 10.5174 5.87122 11.6201 5.92139C12.7229 5.97156 14.9224 6.07191 17.1886 6.1753"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M17.178 7.98191C17.178 7.9806 17.178 7.97929 17.2813 6.96085C17.3846 5.9424 17.5912 3.90686 17.7104 2.79726C17.8685 1.32417 18.0789 0.935422 18.3555 0.651264C18.5284 0.473722 19.1341 1.65531 19.9337 3.28116C20.3171 4.09681 20.6553 4.89336 20.8788 5.38352C21.1024 5.87368 21.2011 6.03332 21.3452 6.30533"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M12.5285 11.0687L12.5529 11.0711"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M15.4373 11.0095V11.0128"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M13.8609 14.2267C13.7339 14.2588 13.3297 14.4713 13.1666 14.7993C13.1291 14.8747 13.1971 14.9656 13.2609 15.0137C13.4206 15.0732 13.6021 15.0653 13.7587 15.0053C13.8326 14.9649 13.8953 14.9044 13.9559 14.7653"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M15.7777 14.0983C15.8038 14.0817 15.8299 14.0651 16.7962 13.5638C17.7625 13.0626 19.6682 12.0773 20.7152 11.5602C21.7622 11.0432 21.8927 11.0243 22.0308 11.0081"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M16.9021 15.9558C16.9894 15.9565 17.0768 15.9572 18.5803 16.1054C20.0838 16.2536 23.0009 16.5494 25.9239 16.8661"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M16.0127 17.8435C16.0382 17.8728 16.0638 17.902 17.0923 18.7545C18.1208 19.607 20.1516 21.2817 22.275 23.0278"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M1.3526 11.3334C1.37564 11.3364 1.39868 11.3393 2.76354 11.7002C4.12839 12.0611 6.83437 12.7799 9.60845 13.5245"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M0.633591 16.3598C0.637412 16.3598 0.641234 16.3598 2.03031 16.2724C3.41939 16.1849 6.19361 16.01 9.0519 15.8298"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M2.52028 21.6414C2.61156 21.6268 3.78752 21.3454 5.66813 20.8349C6.76006 20.4072 7.84656 19.6482 9.04729 18.7459C9.51208 18.4057 9.6834 18.3045 9.87712 18.181"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
          <path d="M8.99896 21.2023C9.16573 21.3034 10.5177 21.8086 11.6091 22.0712C12.0978 22.0984 12.4053 22.0658 12.6695 21.9806C12.8436 21.9155 13.0987 21.8057 13.4133 21.6199"
            stroke="#1D1717"
            strokeWidth="1.26718"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-sm mx-auto mb-8 px-12 relative h-10 flex items-center">
      {/* Hand-drawn Connecting Line (SVG) - Improved visibility */}
      <div className="absolute inset-0 px-[52px] z-0 flex items-center">
        <svg 
          className="w-full h-4 overflow-visible" 
          viewBox="0 0 320 20" 
          preserveAspectRatio="none"
        >
          {/* Base Sketchy Line (Stone-200 for better visibility) */}
          <path 
            d="M 0 10 Q 80 8.5, 160 10 T 320 11.5" 
            stroke="#E7E5E4" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round" 
          />
          
          {/* Active Sketchy Line (Brand Dark) */}
          <path 
            d="M 0 10 Q 80 8.5, 160 10 T 320 11.5" 
            stroke="#1D1717" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            strokeDasharray="320"
            strokeDashoffset={320 - (320 * ((currentStep - 1) / 2))}
            style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
      </div>

      <div className="w-full flex justify-between items-center relative">
        {steps.map((stepNum) => {
          const isPast = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div key={stepNum} className="relative flex items-center justify-center">
              {/* Active Cat Animation - Perfectly Centered Above Node */}
              {isCurrent && <NoddingCat />}

              {/* Doodle Circle Node - Small Size */}
              <div 
                className={`w-6 h-6 flex items-center justify-center transition-all duration-500 bg-white border-[2.5px] ${
                  isCurrent 
                    ? 'border-stone-900 scale-125 z-10' 
                    : isPast 
                      ? 'border-stone-900 bg-stone-950 shadow-sm' 
                      : 'border-stone-200 bg-stone-50'
                }`}
                style={{ borderRadius: doodleRadius }}
              >
                {/* Past state indicator */}
                {isPast && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                
                {/* Visual pulse for current step */}
                {isCurrent && (
                   <div className="w-1.5 h-1.5 bg-[#FF89C2] rounded-full animate-pulse" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
