
import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView, onHomeClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-start">
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={onHomeClick}
        >
          <span className="text-2xl font-logo text-[#1D1717] hover:scale-105 transition-transform">wineat!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
