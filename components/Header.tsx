
import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView, onHomeClick }) => {
  const navItems = [
    { id: 'home' as const, label: 'home' },
    { id: 'history' as const, label: 'my' },
    { id: 'favorites' as const, label: '❤!' },
  ];

  // Helper to determine active state
  const isActive = (id: string) => {
    if (id === 'home') return currentView === 'home' || currentView === 'discovery' || currentView === 'results';
    return currentView === id;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={onHomeClick}
        >
          <span className="text-2xl font-logo text-[#1D1717] hover:scale-105 transition-transform">wineat!</span>
        </div>
        
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center justify-center h-full">
              <button 
                onClick={() => item.id === 'home' ? onHomeClick() : setView(item.id)}
                className={`text-lg font-logo tracking-tighter transition-all px-1 ${
                  isActive(item.id)
                  ? (item.id === 'favorites' ? 'text-[#FF89C2]' : 'text-[#1D1717]') 
                  : `text-stone-300 ${item.id === 'favorites' ? 'hover:text-[#FF89C2]' : 'hover:text-[#1D1717]'}`
                }`}
              >
                {item.label}
              </button>
              {isActive(item.id) && (
                <div 
                  className={`absolute -bottom-1 w-1.5 h-1.5 ${item.id === 'favorites' ? 'bg-[#FF89C2]' : 'bg-[#1D1717]'}`} 
                  style={{ borderRadius: '50%' }}
                />
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
