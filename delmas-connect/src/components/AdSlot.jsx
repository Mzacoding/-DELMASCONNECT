import React from 'react';
import { DollarSign } from 'lucide-react';

const AdSlot = ({ 
  size = 'leaderboard', // leaderboard, sidebar, skyscraper, native, mobile
  darkMode = true,
  className = ''
}) => {
  const sizeStyles = {
    leaderboard: 'h-24',
    sidebar: 'h-[300px]',
    skyscraper: 'h-[400px]',
    native: 'h-auto py-4',
    mobile: 'h-14'
  };

  const labelText = {
    leaderboard: 'Top Leaderboard Ad (728x90)',
    sidebar: 'Sidebar Ad Slot',
    skyscraper: 'Display Space',
    native: 'Native Ad Slot',
    mobile: 'Mobile Ad Space'
  };

  const darkClasses = {
    leaderboard: 'bg-slate-900/40 border-white/5 text-slate-700',
    sidebar: 'bg-slate-900/50 border-white/5 text-slate-700',
    skyscraper: 'bg-slate-800/20 border-slate-700 text-slate-700',
    native: 'bg-slate-900/30 border-slate-800 text-slate-700',
    mobile: 'bg-slate-900 border-white/5 text-slate-700'
  };

  const lightClasses = {
    leaderboard: 'bg-slate-200/50 border-slate-300 text-slate-400',
    sidebar: 'bg-slate-100 border-slate-200 text-slate-400',
    skyscraper: 'bg-slate-200/50 border-slate-300 text-slate-400',
    native: 'bg-slate-200/50 border-slate-300 text-slate-400',
    mobile: 'bg-slate-100 border-slate-200 text-slate-400'
  };

  return (
    <div className={`w-full ${sizeStyles[size]} ${darkMode ? darkClasses[size] : lightClasses[size]} rounded-2xl flex flex-col items-center justify-center text-center border border-dashed ${className}`}>
      <span className={`text-[9px] font-black uppercase mb-1 ${darkMode ? 'text-slate-700' : 'text-slate-400'}`}>
        {labelText[size]}
      </span>
      {size !== 'native' && size !== 'mobile' && (
        <div className={`text-[10px] font-bold uppercase italic ${darkMode ? 'text-slate-600' : 'text-slate-500'}`}>
          AdSense Inventory Space
        </div>
      )}
      {size === 'sidebar' && (
        <div className={`mt-4 w-full h-full ${darkMode ? 'bg-slate-800/20 border-slate-700' : 'bg-slate-200/50 border-slate-300'} rounded-xl flex flex-col items-center justify-center p-4`}>
          <DollarSign className={darkMode ? 'text-slate-700' : 'text-slate-400'} size={20} />
          <p className={`text-[9px] font-bold uppercase leading-tight ${darkMode ? 'text-slate-600' : 'text-slate-500'}`}>Display Ad Content</p>
        </div>
      )}
      {size === 'skyscraper' && (
        <div className={`mt-4 w-full h-full ${darkMode ? 'bg-slate-800/20 border-slate-700' : 'bg-slate-200/50 border-slate-300'} rounded-xl flex flex-col items-center justify-center p-4`}>
          <p className={`text-[9px] font-bold uppercase leading-tight italic ${darkMode ? 'text-slate-600' : 'text-slate-500'}`}>Skyscraper Ad Space</p>
        </div>
      )}
      {size === 'native' && (
        <div className="text-center">
          <span className={`text-[8px] font-black uppercase tracking-widest block mb-1 ${darkMode ? 'text-slate-700' : 'text-slate-400'}`}>Native Ad Slot</span>
          <div className={`text-[10px] font-bold uppercase ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>In-Feed Ad Placement</div>
        </div>
      )}
    </div>
  );
};

export default AdSlot;

