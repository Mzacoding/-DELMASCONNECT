import React from 'react';
import { Link2, Lock, DollarSign, Zap } from 'lucide-react';
import CreditBalance from './CreditBalance';

const RightSidebar = ({ 
  darkMode = true, 
  onOpenYardPortal,
  showAuthPrompt = false 
}) => {
  const sidebarAdClasses = darkMode 
    ? 'bg-slate-900/50 border-white/5' 
    : 'bg-slate-100 border-slate-200';
    
  const subtextClasses = darkMode ? 'text-slate-500' : 'text-slate-600';
  
  const innerBoxClasses = darkMode 
    ? 'bg-slate-800/20 border-slate-700' 
    : 'bg-slate-200/50 border-slate-300';
    
  const textClasses = darkMode ? 'text-slate-600' : 'text-slate-500';

  const handleYardPortalClick = () => {
    if (onOpenYardPortal) {
      onOpenYardPortal();
    }
  };

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Yard Owner CTA Card */}
        <div className="bg-orange-600 p-6 rounded-[32px] shadow-2xl shadow-orange-600/20 relative overflow-hidden">
           <div className="relative z-10 text-center">
             <h4 className="font-black uppercase italic leading-tight mb-2 text-white">Yard Owner?</h4>
             <p className="text-[10px] text-orange-100 font-medium mb-4">List inventory and grow your customer connections.</p>
             <button 
               onClick={handleYardPortalClick}
               className="w-full bg-white text-orange-600 py-3 rounded-xl text-[10px] font-black uppercase shadow-sm flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors"
             >
               <Lock size={12}/> Yard Portal
             </button>
           </div>
           <div className="absolute -bottom-4 -right-4 opacity-10 rotate-12">
              <Link2 size={120} className="text-white" />
           </div>
        </div>

        {/* Credit Balance Card - Fair Play System */}
        <CreditBalance 
          balance={50.00} 
          freeCredits={10} 
          darkMode={darkMode}
        />

        {/* Skyscraper Ad */}
        <div className={`${sidebarAdClasses} rounded-[32px] p-6 h-[400px] flex flex-col items-center justify-center text-center border border-dashed`}>
           <span className={`text-[9px] font-black uppercase mb-4 tracking-widest flex items-center gap-1 ${subtextClasses}`}>
             <DollarSign size={10}/> Display Space
           </span>
           <div className={`w-full h-full ${innerBoxClasses} rounded-xl flex flex-col items-center justify-center p-4`}>
             <p className={`text-[9px] font-bold uppercase leading-tight italic ${textClasses}`}>Skyscraper Ad Space</p>
           </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;

