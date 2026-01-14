
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

const HeroCatSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 319 211" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M32.5176 36.2688C32.5176 36.2584 33.3119 29.629 34.7855 18.5426C35.3802 14.0682 36.0049 11.9803 37.1528 13.2383C41.6032 18.1152 42.1432 24.4479 43.1046 25.7361C44.7355 27.7835 45.905 29.3607 46.2323 30.126C46.4003 30.561 46.5723 31.0907 46.8756 31.92" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M45.4651 27.282C45.4901 27.282 45.5152 27.282 50.2875 27.4991C55.0598 27.7162 64.5786 28.1505 74.3859 28.5979" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M74.3401 36.4163C74.3401 36.4106 74.3401 36.405 74.7871 31.9975C75.2341 27.5901 76.1281 18.781 76.6438 13.9791C77.3283 7.6041 78.2385 5.92175 79.4358 4.69202C80.1838 3.92369 82.8051 9.03715 86.2654 16.0732C87.9248 19.603 89.3883 23.0502 90.3558 25.1714C91.3233 27.2927 91.7504 27.9835 92.3738 29.1607" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M54.2185 49.7748L54.3202 49.7848" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M66.8067 49.5185V49.5304" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M59.9849 63.4412C59.4351 63.5801 57.6859 64.5001 56.9802 65.9192C56.8178 66.2457 57.1122 66.6391 57.388 66.847C58.0792 67.1045 58.8649 67.0706 59.5425 66.8108C59.8624 66.6361 60.1336 66.3743 60.3959 65.7724" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M68.2801 62.8856C68.393 62.8138 68.506 62.7419 72.6878 60.5729C76.8695 58.4038 85.1168 54.1396 89.6477 51.902C94.1786 49.6644 94.7432 49.5827 95.3408 49.5128" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M73.1458 70.9245C73.5238 70.9273 73.9019 70.9301 80.4085 71.5717C86.9152 72.2132 99.5391 73.4933 112.189 74.8637" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M69.2968 79.0936C69.4074 79.2203 69.5179 79.3469 73.969 83.0361C78.4201 86.7252 87.2084 93.973 96.3976 101.529" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M5.85353 50.9204C5.95324 50.9331 6.05294 50.9459 11.9595 52.5078C17.8661 54.0697 29.5766 57.1805 41.5817 60.4026" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M2.74193 72.6729C2.75847 72.6729 2.77501 72.6729 8.78641 72.2943C14.7978 71.9158 26.8036 71.1588 39.1732 70.3789" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M10.9068 95.5294C11.3019 95.4661 16.3909 94.2483 24.5295 92.0392C29.255 90.1883 33.9569 86.9036 39.1533 82.9988C41.1647 81.5266 41.9061 81.0886 42.7444 80.5542" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M38.9441 93.6292C39.6658 94.0669 45.5164 96.2529 50.2396 97.3897C52.3547 97.5071 53.6852 97.366 54.8288 96.9975C55.582 96.7155 56.6864 96.2406 58.0475 95.4363" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M106.044 24.3236C106.049 24.3236 106.054 24.3236 110.427 22.0406C114.8 19.7575 123.542 15.1914 130.135 12.2522C136.728 9.31306 140.907 8.13928 144.395 7.38575C147.882 6.63222 150.55 6.33453 156.496 6.57408C162.442 6.81364 171.584 7.59947 179.857 8.97961C188.13 10.3597 195.257 12.3104 201.97 13.405C208.683 14.4997 214.766 14.6793 221.157 14.462C227.547 14.2448 234.062 13.6253 240.856 12.4147C247.65 11.2041 254.526 9.42123 259.752 7.82374C268.44 5.1675 272.598 3.29268 274.215 2.97483C275.883 2.64718 277.795 2.61231 282.516 3.216C286.237 3.69179 292.564 5.08608 297.553 6.32041C310.324 9.47945 311.988 11.4161 313.327 13.2444C315.355 16.013 315.801 20.2395 316.058 23.5967C316.15 24.8064 315.593 25.6919 315.135 26.341C314.695 26.9643 311.891 28.0783 306.941 29.8469C301.83 31.6728 295.924 31.9525 291.137 32.1496C286.285 32.3492 280.748 30.9099 278.604 31.051C276.25 31.206 275.075 33.1598 273.796 34.9053C273.004 35.9858 272.051 39.6485 270.234 48.81C268.998 55.0365 267.938 64.6126 267.122 70.1153C265.796 79.05 263.663 82.258 261.295 85.2836C260.297 86.5591 258.259 88.0972 254.921 90.266C251.583 92.4349 246.848 95.0466 243.634 96.6654C240.419 98.2842 238.87 98.8309 236.445 99.7722" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M72.9296 115.137C72.7699 115.252 68.7211 118.347 61.6233 124.078C58.4082 126.674 56.3159 129.041 54.3701 131.358C50.6068 135.84 48.36 139.859 47.0762 143.156C44.4447 149.914 46.0754 156.383 47.547 160.537C48.1258 162.171 50.3321 162.461 52.0019 162.565C52.807 162.616 53.5318 162.379 57.4105 160.548C61.2892 158.717 68.3012 155.226 73.1869 152.52C80.7975 148.305 84.7328 144.769 87.6033 141.932C89.0418 140.511 90.214 138.903 90.7495 139.464C95.8145 144.765 91.4096 151.34 92.4419 154.709C92.8365 155.997 93.8327 157.217 94.9136 158.529C95.824 159.633 97.2298 160.088 98.7057 160.284C99.9936 160.456 101.491 160.064 103.132 159.477C104.674 158.924 108.465 154.758 113.733 149.117C116.451 145.984 117.534 144.443 119.077 140.891C120.255 137.94 122.234 132.655 124.969 126.736" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M239.098 111.989C239.135 112 239.171 112.01 242.693 113.591C246.214 115.171 253.219 118.322 257.444 120.334C264.752 123.816 265.858 125.754 267.087 127.807C268.452 130.088 268.843 132.899 268.654 136.468C268.587 137.715 267.407 138.438 266.038 139.168C264.302 140.092 258.95 140.53 250.755 140.79C243.077 141.033 238.597 139.798 237.38 139.321C235.706 138.666 235.554 136.755 235.295 135.835C235.172 135.401 234.954 135.069 234.891 135.8C234.449 140.922 234.231 143.762 232.935 146.336C231.597 148.992 228.483 149.894 226.031 150.455C221.763 151.432 215.8 148.791 211.433 144.375C210.515 143.335 210.177 142.884 209.958 142.37C209.738 141.855 209.647 141.291 209.553 140.644" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M226.766 56.4988C227.539 55.9172 228.591 54.9166 229.962 53.3242C230.679 52.4329 231.44 51.3723 232.123 50.5202C232.807 49.6681 233.391 49.0566 234.329 48.1297" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M232.924 66.5313C232.989 66.5313 233.054 66.5313 235.095 66.5061C237.136 66.4809 241.15 66.4305 246.025 66.446" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M140.523 73.9744C140.523 74.0346 140.582 74.6747 141.045 75.8227C141.298 76.4481 142.202 76.8118 149.443 78.1951C156.685 79.5784 170.394 81.8812 180.147 83.1175C189.901 84.3539 195.285 84.454 201.167 84.1593C213.293 83.552 220.204 82.33 221.27 82.0035C222.386 81.662 223.323 80.7946 224.063 79.7704C225.571 77.6844 224.339 74.2413 223.238 71.8406C222.738 70.75 221.24 70.126 217.041 69.1635C213.656 68.3876 207.571 67.7887 195.384 67.6003C183.197 67.412 165.053 67.8468 155.369 68.1296C145.01 68.53 143.745 68.8752 142.687 69.41C142.2 69.7208 141.812 70.1115 141.404 70.707" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M181.408 146.698C181.398 146.769 181.389 146.841 180.622 156.424C179.855 166.008 178.33 185.102 176.759 204.774" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M155.078 207.309C155.609 207.286 156.141 207.263 166.697 206.541C177.254 205.819 197.82 204.399 219.088 202.89" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
    <path d="M149.363 106.654C151.951 106.716 157.122 106.84 162.135 107.018C167.149 107.197 171.846 107.426 174.327 107.74C176.807 108.054 176.927 108.446 176.956 108.795C177.07 110.155 175.529 111.783 173.5 113.575C172.422 114.527 168.182 116.444 162.576 119.141C159.847 120.453 159.056 121.428 158.477 122.107C157.967 122.705 157.825 123.396 157.835 124.009C157.841 124.324 158.032 124.63 158.341 124.918C159.033 125.566 161.777 126.182 165.79 126.888C171.962 127.973 176.274 126.159 179.876 124.418C182.47 123.164 186.36 120.653 189.46 118.901C192.559 117.148 194.683 116.1 197.183 114.293C199.682 112.487 202.494 109.954 203.907 109.008C205.321 108.063 205.25 108.782 205.029 109.556C204.004 113.146 200.845 116.774 196.943 120.676C196.193 121.353 195.939 121.538 195.209 121.924C194.479 122.311 193.28 122.893 191.866 123.609" stroke="#310A38" strokeWidth="27.4194" strokeLinecap="round"/>
    <path d="M137.625 75.3153C137.625 75.3461 137.342 82.453 137.528 97.4031C137.626 105.276 139.231 113.674 140.237 119.286C142.34 131.009 144.385 133.562 146.497 136.247C148.808 139.186 152.504 141.253 155.372 142.7C157.603 143.826 167.105 143.67 181.177 142.861C189.945 142.356 194.796 139.111 199.368 136.183C205.395 132.323 208.991 128.12 211.35 124.898C215.369 119.408 217.774 114.281 219.173 110.036C220.137 107.112 221.123 102.47 221.65 97.2502C222.177 92.0305 222.088 86.3349 221.866 82.1146C221.644 77.8943 221.291 75.322 221.031 72.4786" stroke="black" strokeWidth="5.48387" strokeLinecap="round"/>
  </svg>
);

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
          
          <HeroCatSVG 
            className="w-64 md:w-[450px] animate-doodle-jitter z-10" 
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
