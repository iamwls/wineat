
import React from 'react';
import { HistoryItem } from '../types';

interface HistoryListProps {
  history: HistoryItem[];
}

const HistoryList: React.FC<HistoryListProps> = ({ history }) => {
  if (history.length === 0) {
    return (
      <div className="text-center py-24 bg-stone-100/50 rounded-[40px] border-2 border-dashed border-stone-200">
        <p className="text-stone-400 font-medium">아직 검색 기록이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {history.map(item => (
        <div key={item.id} className="bg-white p-7 rounded-3xl border border-stone-100 flex items-center justify-between group hover:border-stone-950 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-black text-stone-950 px-2.5 py-1 bg-stone-100 rounded-full uppercase tracking-widest">PAIRED</span>
              <span className="text-[11px] text-stone-400 font-medium uppercase tracking-tighter">{item.date}</span>
            </div>
            <h4 className="font-bold text-xl text-stone-950 group-hover:translate-x-1 transition-transform">
              {item.food} <span className="text-stone-300 font-light mx-2">/</span> <span className="text-stone-400 font-medium text-base">{item.budget}</span>
            </h4>
            <div className="mt-3 flex gap-2">
              {item.wines.map(w => (
                <span key={w.name} className="text-[10px] text-stone-400 font-bold">
                  #{w.name.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-stone-50 text-stone-300 group-hover:bg-stone-950 group-hover:text-white transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
