
import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => setView('home')}
        >
          <span className="text-3xl font-script font-bold text-stone-900 tracking-tight">wineat!</span>
        </div>
        
        <nav className="flex items-center gap-8">
          {(['home', 'history', 'favorites'] as const).map((v) => (
            <button 
              key={v}
              onClick={() => setView(v)}
              className={`text-[13px] font-bold tracking-tight transition-all relative py-1 ${
                currentView === v 
                ? 'text-stone-950 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-stone-950' 
                : 'text-stone-400 hover:text-stone-950'
              }`}
            >
              {v === 'home' ? 'HOME' : v === 'history' ? 'HISTORY' : 'FAVORITES'}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
