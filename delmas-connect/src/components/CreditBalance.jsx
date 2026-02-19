import React from 'react';
import { CreditCard, Zap, Wallet } from 'lucide-react';

const CreditBalance = ({ 
  balance = 50.00,
  freeCredits = 10,
  darkMode = true,
  showDetails = true
}) => {
  const leadPrice = 5.00;
  const totalLeadsAvailable = Math.floor(balance / leadPrice) + freeCredits;
  const usedFreeCredits = 0; // Would come from backend in real app
  
  const themeClasses = darkMode 
    ? {
        bg: 'bg-gradient-to-br from-emerald-600/20 to-emerald-800/10',
        border: 'border-emerald-500/20',
        text: 'text-emerald-400',
        subtext: 'text-emerald-400/60',
        iconBg: 'bg-emerald-500/20',
        button: 'bg-emerald-600 hover:bg-emerald-500 text-white',
        pill: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
      }
    : {
        bg: 'bg-gradient-to-br from-emerald-50 to-white',
        border: 'border-emerald-200',
        text: 'text-emerald-600',
        subtext: 'text-emerald-600/70',
        iconBg: 'bg-emerald-100',
        button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        pill: 'bg-emerald-50 border-emerald-200 text-emerald-600'
      };

  return (
    <div className={`
      ${themeClasses.bg} border ${themeClasses.border} 
      rounded-2xl p-4 md:p-6
    `}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 ${themeClasses.iconBg} rounded-lg`}>
            <CreditCard size={18} className={themeClasses.text} />
          </div>
          <span className={`text-[10px] font-black uppercase tracking-widest ${themeClasses.text}`}>
            Lead Credits
          </span>
        </div>
        <div className={`px-2 py-1 rounded-full text-[8px] font-black uppercase ${themeClasses.pill} border`}>
          <Zap size={10} className="inline mr-1" />
          Fair Play
        </div>
      </div>

      {/* Balance Display */}
      <div className="text-center mb-4">
        <p className={`text-[10px] font-bold uppercase tracking-wider ${themeClasses.subtext} mb-1`}>
          Available Balance
        </p>
        <p className={`text-3xl md:text-4xl font-black italic ${themeClasses.text}`}>
          R {balance.toFixed(2)}
        </p>
      </div>

      {/* Stats Row */}
      {showDetails && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className={`
            ${darkMode ? 'bg-white/5' : 'bg-white/50'} 
            rounded-xl p-3 text-center
          `}>
            <p className={`text-[9px] font-bold uppercase ${themeClasses.subtext}`}>
              Free Leads
            </p>
            <p className={`text-lg font-black ${themeClasses.text}`}>
              {freeCredits}
            </p>
          </div>
          <div className={`
            ${darkMode ? 'bg-white/5' : 'bg-white/50'} 
            rounded-xl p-3 text-center
          `}>
            <p className={`text-[9px] font-bold uppercase ${themeClasses.subtext}`}>
              Paid Leads
            </p>
            <p className={`text-lg font-black ${themeClasses.text}`}>
              {Math.floor(balance / leadPrice)}
            </p>
          </div>
        </div>
      )}

      {/* Price Info */}
      <div className={`
        flex items-center justify-between text-[9px] font-bold
        ${darkMode ? 'text-slate-500' : 'text-slate-500'}
        mb-4 px-2
      `}>
        <span>1 Lead =</span>
        <span className="text-orange-500">R {leadPrice.toFixed(2)}</span>
      </div>

      {/* CTA Button */}
      <button className={`
        w-full py-2.5 md:py-3 rounded-xl text-[10px] font-black uppercase 
        flex items-center justify-center gap-2 shadow-lg
        ${themeClasses.button}
      `}>
        <Wallet size={14} />
        Recharge Now
      </button>

      {/* Fair Play Notice */}
      <p className={`text-[8px] text-center mt-3 ${themeClasses.subtext}`}>
        🔒 Unique Lead Protection: You only pay once per customer per day
      </p>
    </div>
  );
};

export default CreditBalance;

