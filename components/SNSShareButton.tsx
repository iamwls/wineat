
import React, { useState } from 'react';
import { Wine } from '../types';

interface SNSShareButtonProps {
  food: string;
  wine: Wine;
}

const SNSShareButton: React.FC<SNSShareButtonProps> = ({ food, wine }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAndDownload = async () => {
    setIsGenerating(true);
    
    // Create hidden canvas for high-quality output
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Texture/Grain (Optional but adds "senior" touch)
    ctx.fillStyle = 'rgba(29, 23, 23, 0.02)';
    for (let i = 0; i < 5000; i++) {
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }

    // 3. Load Fonts (Ensure they are ready)
    await document.fonts.ready;

    // 4. Logo "wineat!"
    ctx.fillStyle = '#1D1717';
    ctx.font = 'italic 80px "Instrument Serif", serif';
    ctx.textAlign = 'center';
    ctx.fillText('wineat!', canvas.width / 2, 180);

    // 5. Hero Tagline
    ctx.font = 'italic 36px "Instrument Sans", sans-serif';
    ctx.fillStyle = '#A8A29E'; // stone-400
    ctx.fillText('wine + eat = wineat. . . !', canvas.width / 2, 250);

    // 6. Draw Cat Image
    const catImg = new Image();
    catImg.crossOrigin = "anonymous";
    // We use a simplified proxy or the direct link if possible. Notion links are tough.
    // If it fails, we'll draw a cute placeholder.
    catImg.src = "https://file.notion.so/f/f/b7de9f98-6fe4-4491-bbd8-6dff9b3fbe0b/149f515f-fe75-4ede-a23e-fa11c9e4635c/waeat.png?table=block&id=2e1cf5e8-edac-8059-8c77-e710e974b705&spaceId=b7de9f98-6fe4-4491-bbd8-6dff9b3fbe0b&expirationTimestamp=1768248000000&signature=ARqJGyODWMw_PNL5sUJElLtKZUtYZGyLQBQqYVUGg3k&downloadName=waeat.png";

    await new Promise((resolve) => {
      catImg.onload = () => {
        const aspect = catImg.width / catImg.height;
        const targetWidth = 600;
        const targetHeight = targetWidth / aspect;
        ctx.drawImage(catImg, (canvas.width - targetWidth) / 2, 400, targetWidth, targetHeight);
        resolve(null);
      };
      catImg.onerror = () => {
        // Fallback: draw a big "!" or a circle if image fails to load via crossOrigin
        ctx.beginPath();
        ctx.arc(canvas.width / 2, 600, 100, 0, Math.PI * 2);
        ctx.strokeStyle = '#1D1717';
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillText('🐾', canvas.width / 2, 620);
        resolve(null);
      };
    });

    // 7. Divider Line
    ctx.strokeStyle = '#E7E5E4'; // stone-200
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(200, 850);
    ctx.lineTo(880, 850);
    ctx.stroke();

    // 8. Result Text
    ctx.fillStyle = '#1D1717';
    ctx.font = '700 48px "Pretendard Variable", sans-serif';
    ctx.fillText('오늘의 페어링 결과', canvas.width / 2, 950);

    // 9. Food Item with Highlight
    const foodText = `"${food}"`;
    ctx.font = '700 90px "Pretendard Variable", sans-serif';
    const textWidth = ctx.measureText(foodText).width;
    
    // Underline effect
    ctx.fillStyle = 'rgba(255, 137, 194, 0.2)'; // pink highlight
    ctx.fillRect((canvas.width - textWidth) / 2, 1080, textWidth, 30);
    
    ctx.fillStyle = '#1D1717';
    ctx.fillText(foodText, canvas.width / 2, 1100);

    ctx.font = '400 36px "Instrument Sans", sans-serif';
    ctx.fillStyle = '#A8A29E';
    ctx.fillText('WITH', canvas.width / 2, 1180);

    // 10. Wine Recommendation
    ctx.fillStyle = '#1D1717';
    ctx.font = '700 64px "Pretendard Variable", sans-serif';
    ctx.fillText(wine.name, canvas.width / 2, 1280);

    ctx.font = 'italic 50px "Instrument Serif", serif';
    ctx.fillStyle = '#FF89C2';
    ctx.fillText(`Match Score: ${wine.score}%`, canvas.width / 2, 1360);

    // 11. Footer / QR-like area
    ctx.fillStyle = '#1D1717';
    ctx.font = 'black 24px "Instrument Sans", sans-serif';
    ctx.fillText('WINEAT.AI', canvas.width / 2, 1800);
    ctx.font = '400 18px "Instrument Sans", sans-serif';
    ctx.fillStyle = '#A8A29E';
    ctx.fillText('AI SOMMELIER CURATION', canvas.width / 2, 1830);

    // Download
    const link = document.createElement('a');
    link.download = `wineat-pairing-${food}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    setIsGenerating(false);
  };

  return (
    <button 
      onClick={generateAndDownload}
      disabled={isGenerating}
      className="flex items-center gap-2 px-6 py-3 bg-[#1D1717] text-white text-[12px] font-black uppercase tracking-widest hover:bg-stone-800 transition-all active:scale-95 disabled:opacity-50"
      style={{ borderRadius: "10% 90% 12% 88% / 85% 15% 82% 18%" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {isGenerating ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        )}
      </svg>
      {isGenerating ? '이미지 생성 중...' : '인스타용 이미지 저장'}
    </button>
  );
};

export default SNSShareButton;
