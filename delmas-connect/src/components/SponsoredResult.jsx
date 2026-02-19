import React, { useState } from 'react';
import { Cpu, Phone } from 'lucide-react';
import LeadProtectionBadge from './LeadProtectionBadge';
import DisputeLeadButton from './DisputeLeadButton';

const SponsoredResult = ({ 
  yardName = "Delmas Central Spares CC", 
  partName, 
  price = "R 3,500",
  onCallYard,
  onLeadCharge,
  onDisputeLead,
  isVerified = true,
  darkMode = true,
  leadId
}) => {
  const [called, setCalled] = useState(false);
  const [leadCharged, setLeadCharged] = useState(false);

  const handleCallYard = () => {
    if (!called) {
      setCalled(true);
      setLeadCharged(true);
      if (onLeadCharge) onLeadCharge({ yardName, leadId, amount: 5.00 });
      if (onCallYard) onCallYard(yardName);
    }
  };

  const handleDispute = () => {
    if (onDisputeLead) onDisputeLead({ yardName, leadId });
  };

  return (
    <div className={`bg-gradient-to-br ${darkMode ? 'from-orange-600/20 to-transparent' : 'from-orange-50 to-white'} p-4 md:p-6 rounded-2xl md:rounded-[32px] border-2 border-orange-500/50 relative shadow-md`}>
       <div className="absolute top-0 right-0 bg-orange-500 text-black text-[8px] md:text-[9px] font-black px-3 md:px-4 py-1 rounded-bl-xl uppercase tracking-widest">Sponsored</div>
       <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          <div className={`w-full md:w-32 h-20 md:h-24 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'} rounded-xl flex items-center justify-center`}>
            <Cpu className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <p className="text-[10px] md:text-xs font-black text-orange-500 uppercase">{yardName}</p>
              <LeadProtectionBadge verified={isVerified} size="small" darkMode={darkMode} />
            </div>
            <h3 className={`text-base md:text-xl font-black uppercase tracking-tighter mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{partName}</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
               <div className="flex items-center gap-2">
                 <span className={`text-xl md:text-2xl font-black italic ${darkMode ? 'text-white' : 'text-slate-900'}`}>{price}</span>
                 {called && (
                   <DisputeLeadButton 
                     onDispute={handleDispute} 
                     darkMode={darkMode} 
                     size="small" 
                     leadId={leadId}
                   />
                 )}
               </div>
               <button 
                onClick={handleCallYard}
                disabled={called}
                className={`bg-orange-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-[10px] md:text-xs font-black uppercase hover:bg-orange-500 shadow-lg shadow-orange-600/20 w-full md:w-auto flex items-center gap-2 ${called ? 'opacity-60 cursor-not-allowed' : ''}`}
               >
                 <Phone size={14} />
                 {called ? (
                   <span className="flex items-center gap-2">
                     Call Now
                     {leadCharged && <span className="text-[8px] opacity-80">(R5.00)</span>}
                   </span>
                 ) : 'Call Yard (R5.00)'}
               </button>
            </div>
          </div>
       </div>
    </div>
  );
};

export default SponsoredResult;

