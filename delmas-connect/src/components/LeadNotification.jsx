import React, { useState, useEffect } from 'react';
import { Receipt, X, CheckCircle2, AlertTriangle } from 'lucide-react';

const LeadNotification = ({ 
  show, 
  amount = 5.00,
  yardName = '',
  type = 'charge', // 'charge', 'refund', 'warning'
  onClose,
  darkMode = true
}) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Auto hide after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isVisible) return null;

  const themeClasses = darkMode 
    ? {
        bg: 'bg-slate-900',
        border: 'border-white/10',
        text: 'text-white',
        subtext: 'text-slate-400'
      }
    : {
        bg: 'bg-white',
        border: 'border-slate-200',
        text: 'text-slate-900',
        subtext: 'text-slate-500'
      };

  const typeConfig = {
    charge: {
      icon: <Receipt size={16} />,
      bg: 'bg-orange-500',
      text: 'Lead Charged',
      amount: `R ${amount.toFixed(2)}`
    },
    refund: {
      icon: <CheckCircle2 size={16} />,
      bg: 'bg-emerald-500',
      text: 'Lead Refunded',
      amount: `+R ${amount.toFixed(2)}`
    },
    warning: {
      icon: <AlertTriangle size={16} />,
      bg: 'bg-amber-500',
      text: 'Insufficient Credits',
      amount: 'Top Up Required'
    }
  };

  const config = typeConfig[type] || typeConfig.charge;

  return (
    <div className={`
      fixed bottom-24 md:bottom-20 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-auto 
      ${themeClasses.bg} border ${themeClasses.border}
      rounded-2xl shadow-2xl z-[110] overflow-hidden
      animate-bounce
    `}>
      <div className="flex items-center gap-3 p-3 md:p-4">
        {/* Icon */}
        <div className={`${config.bg} p-2 rounded-xl text-white shadow-lg`}>
          {config.icon}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <p className={`text-[10px] font-bold uppercase tracking-wider ${themeClasses.subtext}`}>
            {config.text}
          </p>
          <p className={`text-sm font-black ${themeClasses.text}`}>
            {config.amount}
          </p>
          {yardName && (
            <p className={`text-[8px] font-medium ${themeClasses.subtext}`}>
              {yardName}
            </p>
          )}
        </div>

        {/* Close Button */}
        <button 
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
          className={`p-1.5 rounded-lg ${darkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'} transition-colors`}
        >
          <X size={14} className={themeClasses.subtext} />
        </button>
      </div>

      {/* Footer */}
      <div className={`
        px-3 md:px-4 py-2 text-[8px] font-medium
        ${darkMode ? 'bg-white/5 text-slate-500' : 'bg-slate-50 text-slate-400'}
      `}>
        🔒 Unique Lead Protection: One charge per customer per day
      </div>
    </div>
  );
};

export default LeadNotification;

