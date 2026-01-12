
import React, { useState } from 'react';

const AnimatedLogo: React.FC = () => {
  const letters = "wineat!".split("");
  return (
    <div className="flex justify-center items-center">
      {letters.map((char, i) => (
        <span 
          key={i} 
          className={`${char === '!' ? 'animate-thump-special' : 'animate-thump'} text-6xl md:text-9xl font-logo tracking-tighter text-[#1D1717]`}
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  // Hand-drawn wobbly border for that "cute" sketch look
  const normalBorder = '255px 25px 225px 35px/35px 225px 25px 255px';

  return (
    <section className="bg-white pt-[80px] pb-0 flex flex-col items-center overflow-hidden min-h-[70vh] justify-center">
      <div className="text-center px-4 max-w-4xl w-full">
        <div className="mb-12">
          <AnimatedLogo />
        </div>
        
        {/* Cat Image Section with wine/eat text */}
        <div className="relative flex items-center justify-between w-full mb-12">
          <span className="font-logo text-xl md:text-3xl text-stone-300 select-none tracking-tight relative -top-8 md:-top-16">wine</span>
          
          <img
            src="https://file.notion.so/f/f/b7de9f98-6fe4-4491-bbd8-6dff9b3fbe0b/149f515f-fe75-4ede-a23e-fa11c9e4635c/waeat.png?table=block&id=2e1cf5e8-edac-8059-8c77-e710e974b705&spaceId=b7de9f98-6fe4-4491-bbd8-6dff9b3fbe0b&expirationTimestamp=1768248000000&signature=ARqJGyODWMw_PNL5sUJElLtKZUtYZGyLQBQqYVUGg3k&downloadName=waeat.png"
            alt="고양이 와인 그림"
            className="w-64 md:w-[400px] animate-doodle-jitter z-10"
          />      
          
          <span className="font-logo text-xl md:text-3xl text-stone-300 select-none tracking-tight relative -top-8 md:-top-16">eat</span>
        </div>
        
        <div className="w-full flex flex-col items-center">
          <div 
            className="relative group max-w-[250px] w-full cursor-pointer animate-in fade-in zoom-in duration-700 delay-300"
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            onClick={onStart}
          >
            {/* Tagline above button */}
            <p className="mb-6 text-stone-400 text-base md:text-lg font-instrument-sans italic animate-pulse tracking-wide">
              wine + eat = wineat. . . !
            </p>

            <div className="relative">
              <button 
                className="relative w-full py-3.5 font-serif-regular lowercase text-3xl md:text-4xl tracking-tighter flex items-center justify-center transition-all duration-500 ease-in-out active:scale-[0.96] z-10 bg-white text-stone-800"
                style={{
                  border: '2px solid #1D1717',
                  borderRadius: normalBorder,
                  transform: isBtnHovered ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                <span className="relative inline-block">
                  start pairing!
                  {/* Light Pink Underline Animation */}
                  <span 
                    className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FFD1DC]/60 -z-10 transition-transform duration-500 ease-out origin-left"
                    style={{ 
                      transform: isBtnHovered ? 'scaleX(1) rotate(-1deg)' : 'scaleX(0) rotate(-1deg)',
                      borderRadius: '20% 80% 30% 70% / 60% 40% 60% 40%' 
                    }}
                  ></span>
                </span>
              </button>

              {/* Hand-drawn shadow layer for cute depth */}
              <div 
                className="absolute inset-0 border border-stone-100 -z-0 pointer-events-none transition-all duration-300"
                style={{
                  borderRadius: normalBorder,
                  transform: isBtnHovered ? 'translate(3px, 3px)' : 'translate(1.5px, 1.5px)',
                  opacity: isBtnHovered ? 0 : 1
                }}
              ></div>
            </div>
            
            {/* Minimal hand-drawn underline for the button container */}
            <div 
              className="mt-4 mx-auto w-1/4 h-[1px] bg-stone-100 rounded-full transition-all duration-500"
              style={{ width: isBtnHovered ? '40%' : '15%', opacity: isBtnHovered ? 1 : 0.5 }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
