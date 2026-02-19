import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import LeadProtectionBadge from './LeadProtectionBadge';
import DisputeLeadButton from './DisputeLeadButton';

const YardResult = ({ 
  yardName = "Highveld Breakers Yard", 
  partName, 
  price = "R 1,950",
  onShowNumber,
  onLeadCharge,
  onDisputeLead,
  isVerified = true,
  darkMode = true,
  leadId 
}) => {
  const [showPhone, setShowPhone] = useState(false);
  const [leadCharged, setLeadCharged] = useState(false);

  const handleShowNumber = () => {
    if (!showPhone) {
      // First time showing number - charge the lead
      setShowPhone(true);
      setLeadCharged(true);
      if (onLeadCharge) onLeadCharge({ yardName, leadId, amount: 5.00 });
      if (onShowNumber) onShowNumber(yardName);
    }
  };

  const handleDispute = () => {
    if (onDisputeLead) onDisputeLead({ yardName, leadId });
  };

  return (
    <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'} p-4 md:p-6 rounded-2xl md:rounded-[32px] border shadow-sm`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mb-3 md:mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>{yardName}</p>
            <LeadProtectionBadge verified={isVerified} size="small" darkMode={darkMode} />
          </div>
          <h3 className={`text-base md:text-lg font-black uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>{partName} (Used)</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-lg md:text-lg font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>{price}</span>
          {showPhone && (
            <DisputeLeadButton 
              onDispute={handleDispute} 
              darkMode={darkMode} 
              size="small" 
              leadId={leadId}
            />
          )}
        </div>
      </div>
      <button 
        onClick={handleShowNumber}
        disabled={showPhone}
        className={`w-full ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'} py-3 md:py-3 rounded-xl text-[10px] font-black uppercase hover:opacity-80 flex items-center justify-center gap-2 transition-all ${showPhone ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        <Phone size={14}/> 
        {showPhone ? (
          <span className="flex items-center gap-2">
            +27 82 123 4567
            {leadCharged && <span className="text-[8px] text-orange-500">(R5.00 charged)</span>}
          </span>
        ) : 'Show Number (R5.00)'}
      </button>
    </div>
  );
};

export default YardResult;

