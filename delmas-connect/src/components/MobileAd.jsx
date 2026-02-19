import React from 'react';

const MobileAd = ({ darkMode = true }) => {
  return (
    <div className={`md:hidden fixed bottom-0 left-0 w-full ${darkMode ? 'bg-[#0a0f1d] border-white/10' : 'bg-white border-slate-200'} border-t p-1 z-[100]`}>
      <div className={`${darkMode ? 'bg-slate-900 border-white/5' : 'bg-slate-100 border-slate-200'} h-14 rounded-lg flex items-center justify-center border border-dashed`}>
         <span className={`text-[8px] font-black uppercase tracking-widest italic ${darkMode ? 'text-slate-700' : 'text-slate-400'}`}>Mobile Footer Ad Space</span>
      </div>
    </div>
  );
};

export default MobileAd;

