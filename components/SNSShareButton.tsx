import React, { useState } from 'react';
import { Wine } from '../types';
import { toPng } from 'https://esm.sh/html-to-image';

interface SNSShareButtonProps {
  food: string;
  wine: Wine;
}

const SNSShareButton: React.FC<SNSShareButtonProps> = ({ food }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSaveImage = async () => {
    const element = document.getElementById('capture-area');
    if (!element) return;

    setIsGenerating(true);
    try {
      // 캡처 전 폰트 로드 대기
      await document.fonts.ready;
      
      const dataUrl = await toPng(element, {
        backgroundColor: '#ffffff',
        cacheBust: true,
        pixelRatio: 2, // 고해상도 저장
      });

      const link = document.createElement('a');
      link.download = `wineat-pairing-${food}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('이미지 저장 중 오류 발생:', err);
      alert('이미지 저장에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsGenerating(false);
    }
  };

  const WineIcon = () => (
    <svg width="18" height="22" viewBox="0 0 45 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
      <path d="M35.6096 4.29866C35.9086 4.07362 36.3157 3.6865 36.8462 3.07046C37.1237 2.72561 37.418 2.3153 37.6824 1.98564C37.9469 1.65598 38.1726 1.4194 38.5358 1.06081" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M37.9922 8.18003C38.0173 8.18003 38.0424 8.18003 38.8319 8.17028C39.6215 8.16053 41.1748 8.14103 43.0607 8.14703" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M2.24406 11.0596C2.24406 11.0829 2.26655 11.3306 2.44593 11.7747C2.54365 12.0167 2.89348 12.1574 5.69505 12.6926C8.49662 13.2277 13.8003 14.1186 17.5739 14.597C21.3474 15.0753 23.4302 15.114 25.706 15C30.3975 14.765 33.0708 14.2923 33.4835 14.166C33.9151 14.0339 34.2776 13.6983 34.564 13.302C35.1473 12.495 34.6708 11.1629 34.2448 10.2341C34.0512 9.81218 33.4718 9.57077 31.8473 9.19842C30.5376 8.89822 28.1834 8.66653 23.4685 8.59365C18.7536 8.52077 11.7343 8.68899 7.98764 8.79839C3.97991 8.95331 3.49039 9.08687 3.08128 9.29378C2.89266 9.414 2.7426 9.56515 2.58471 9.79557" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18.0614 39.1951C18.0578 39.2227 18.0543 39.2503 17.7575 42.958C17.4607 46.6657 16.8708 54.0527 16.2629 61.6635" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M7.87491 62.6444C8.0805 62.6355 8.28609 62.6265 12.3703 62.3472C16.4545 62.068 24.4111 61.5186 32.6392 60.9346" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M5.66386 23.7028C6.66504 23.7268 8.66587 23.7747 10.6054 23.8437C12.5448 23.9127 14.3624 24.0014 15.3219 24.1229C16.2815 24.2444 16.3281 24.396 16.3393 24.5313C16.3832 25.0573 15.787 25.687 15.002 26.3805C14.5852 26.7487 12.9448 27.4902 10.7757 28.5337C9.71997 29.0415 9.41383 29.4184 9.18983 29.6813C8.99284 29.9125 8.93762 30.1799 8.94171 30.417C8.94381 30.5389 9.01793 30.6573 9.13725 30.7688C9.40518 31.0193 10.4667 31.258 12.0192 31.5309C14.4071 31.9506 16.0752 31.249 17.4689 30.5754C18.4726 30.0904 19.9776 29.1189 21.1765 28.4408C22.3755 27.7626 23.1972 27.3572 24.1644 26.6583C25.1316 25.9594 26.2194 24.9793 26.7661 24.6135C27.3129 24.2478 27.2857 24.526 27.2002 24.8255C26.8036 26.2143 25.5812 27.6179 24.0719 29.1275C23.7815 29.3896 23.6834 29.461 23.4009 29.6105C23.1184 29.7601 22.6545 29.9855 22.1076 30.2624" stroke="white" strokeWidth="10" strokeLinecap="round"/>
      <path d="M1.12281 11.5784C1.12281 11.5903 1.01311 14.3398 1.08526 20.1237C1.12325 23.1695 1.74385 26.4188 2.13327 28.5899C2.94678 33.1252 3.73789 34.1132 4.555 35.1518C5.44935 36.2886 6.87893 37.0884 7.98873 37.6484C8.85195 38.0839 12.5279 38.0237 17.9721 37.7105C21.3644 37.5153 23.2411 36.2596 25.0099 35.127C27.3419 33.6337 28.7329 32.0076 29.6454 30.761C31.2003 28.6369 32.1309 26.6535 32.6721 25.0114C33.0451 23.8798 33.4268 22.084 33.6306 20.0646" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <button 
      onClick={handleSaveImage}
      disabled={isGenerating}
      className="group flex items-center justify-center gap-2 px-6 md:px-10 py-4 bg-[#1D1717] text-white text-[12px] md:text-[13px] font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-stone-800 transition-all active:scale-95 disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] whitespace-nowrap"
      style={{ borderRadius: "10% 90% 15% 85% / 85% 15% 90% 10%" }}
    >
      {isGenerating ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ) : (
        <WineIcon />
      )}
      {isGenerating ? '저장 중' : '와잇 저장하기'}
    </button>
  );
};

export default SNSShareButton;