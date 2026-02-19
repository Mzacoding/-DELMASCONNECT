import React, { useState } from 'react';
import { ThumbsDown, AlertTriangle } from 'lucide-react';

const DisputeLeadButton = ({ 
  onDispute, 
  darkMode = true,
  size = 'default',
  leadId 
}) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [disputed, setDisputed] = useState(false);

  const handleDisputeClick = () => {
    if (showConfirm) {
      // Confirm the dispute
      setDisputed(true);
      if (onDispute) onDispute(leadId);
      setShowConfirm(false);
      // Reset after 3 seconds
      setTimeout(() => setDisputed(false), 3000);
    } else {
      setShowConfirm(true);
    }
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const sizeClasses = size === 'small' 
    ? 'p-1.5 text-[8px]' 
    : size === 'large'
    ? 'p-3 text-xs'
    : 'p-2 text-[10px]';

  const iconSize = size === 'small' ? 12 : size === 'large' ? 18 : 14;

  if (disputed) {
    return (
      <div className={`
        flex items-center gap-1.5 font-black uppercase tracking-wider rounded-lg
        ${sizeClasses}
        ${darkMode 
          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
          : 'bg-amber-50 text-amber-600 border border-amber-200'
        }
      `}>
        <AlertTriangle size={iconSize} />
        <span>Disputed</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {showConfirm ? (
        <div className={`
          flex items-center gap-2 p-2 rounded-lg border
          ${darkMode 
            ? 'bg-red-500/10 border-red-500/30' 
            : 'bg-red-50 border-red-200'
          }
        `}>
          <button
            onClick={handleDisputeClick}
            className={`
              flex items-center gap-1.5 font-black uppercase tracking-wider rounded-lg
              ${sizeClasses}
              ${darkMode 
                ? 'bg-red-600 text-white hover:bg-red-500' 
                : 'bg-red-600 text-white hover:bg-red-500'
              }
            `}
          >
            <ThumbsDown size={iconSize} />
            <span>Confirm</span>
          </button>
          <button
            onClick={handleCancel}
            className={`
              flex items-center gap-1.5 font-black uppercase tracking-wider rounded-lg
              ${sizeClasses}
              ${darkMode 
                ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }
            `}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={handleDisputeClick}
          title="Report Fake Lead"
          className={`
            flex items-center gap-1.5 font-black uppercase tracking-wider rounded-lg
            ${sizeClasses}
            ${darkMode 
              ? 'bg-white/5 text-slate-500 hover:bg-red-500/20 hover:text-red-400 border border-white/10' 
              : 'bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600 border border-slate-200'
            }
            transition-all
          `}
        >
          <ThumbsDown size={iconSize} />
          <span className="hidden sm:inline">Dispute</span>
        </button>
      )}
    </div>
  );
};

export default DisputeLeadButton;

