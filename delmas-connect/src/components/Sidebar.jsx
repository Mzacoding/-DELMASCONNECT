import React from 'react';
import { DollarSign, History, Lock, Building2 } from 'lucide-react';
import LeadHistory from './LeadHistory';

const Sidebar = ({ 
  darkMode = false, 
  onOpenYardPortal,
  showAuthPrompt = false 
}) => {
  const sidebarAdClasses = 'bg-white border-slate-200';
    
  const pillClasses = 'bg-slate-50 border-slate-200';
    
  const subtextClasses = 'text-slate-500';
  
  const innerBoxClasses = 'bg-slate-50 border-slate-200';
    
  const iconClasses = 'text-slate-300';
  const textClasses = 'text-slate-400';

  const handleYardPortalClick = () => {
    if (onOpenYardPortal) {
      onOpenYardPortal();
    }
  };

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Yard Portal Button */}
        <button 
          onClick={handleYardPortalClick}
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 p-4 rounded-2xl shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Building2 size={20} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-white text-xs font-black uppercase">Yard Portal</p>
              <p className="text-primary-100 text-[10px] font-medium">Manage your yard</p>
            </div>
          </div>
        </button>

        {/* Lead History for Yard Owners */}
        <LeadHistory darkMode={false} maxItems={4} />

        <div className={`${sidebarAdClasses} rounded-2xl p-4 h-[200px] flex flex-col items-center justify-center text-center border border-dashed shadow-sm`}>
          <span className={`text-[9px] font-black uppercase mb-4 tracking-widest ${subtextClasses}`}>Sidebar Ad Slot</span>
          <div className={`w-full h-full ${innerBoxClasses} rounded-xl flex flex-col items-center justify-center p-4`}>
            <DollarSign className={iconClasses} size={20} />
            <p className={`text-[9px] font-bold uppercase leading-tight ${textClasses}`}>Display Ad Content</p>
          </div>
        </div>
        <div className={`p-4 rounded-2xl border ${pillClasses} text-center shadow-sm`}>
           <p className="text-[10px] font-black uppercase text-primary-600 mb-2 underline decoration-primary-500/20">Guest Mode Active</p>
           <p className={`text-[9px] font-medium leading-tight ${subtextClasses}`}>No account needed for customers. Browse and connect with Delmas yards instantly.</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

