import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const LeadProtectionBadge = ({ 
  verified = true, 
  showText = true,
  size = 'default',
  darkMode = true 
}) => {
  if (!verified) return null;

  const sizeClasses = size === 'small' 
    ? 'text-[8px] px-1.5 py-0.5 gap-1' 
    : size === 'large'
    ? 'text-[10px] px-3 py-1.5 gap-1.5'
    : 'text-[9px] px-2 py-1 gap-1';

  const iconSize = size === 'small' ? 10 : size === 'large' ? 14 : 12;

  return (
    <div 
      className={`
        inline-flex items-center font-black uppercase tracking-wider rounded-full
        ${sizeClasses}
        ${darkMode 
          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
          : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
        }
      `}
    >
      {darkMode ? (
        <ShieldCheck size={iconSize} className="text-emerald-400" />
      ) : (
        <CheckCircle2 size={iconSize} className="text-emerald-600" />
      )}
      {showText && <span>Secure Lead</span>}
    </div>
  );
};

export default LeadProtectionBadge;

