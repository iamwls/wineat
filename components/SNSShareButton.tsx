
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
    const element = document.getElementById('wineat-capture-target');
    if (!element) return;

    setIsGenerating(true);
    try {
      // 폰트가 로드될 때까지 대기하여 글자 깨짐 방지
      await document.fonts.ready;
      
      const dataUrl = await toPng(element, {
        backgroundColor: '#ffffff',
        pixelRatio: 2.5, // 선명도를 위해 배율 조정
        skipFonts: false,
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = `wineat_${food.replace(/\s+/g, '_')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Save error:', err);
      alert('이미지를 저장하는 중에 문제가 발생했습니다.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button 
      onClick={handleSaveImage}
      disabled={isGenerating}
      className="flex items-center justify-center gap-2 px-10 py-4 bg-[#1D1717] text-white text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-all active:scale-95 disabled:opacity-50"
      style={{ borderRadius: "10% 90% 15% 85% / 85% 15% 90% 10%" }}
    >
      {isGenerating ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          저장 중...
        </span>
      ) : '결과 저장하기'}
    </button>
  );
};

export default SNSShareButton;
