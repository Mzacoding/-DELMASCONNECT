import React from 'react';
import { History, Phone, AlertTriangle, CheckCircle2, Clock, ThumbsDown, ThumbsUp } from 'lucide-react';

const LeadHistory = ({ 
  leads = [],
  darkMode = true,
  maxItems = 5
}) => {
  // Mock data for demonstration
  const mockLeads = leads.length > 0 ? leads : [
    {
      id: 1,
      customerName: 'John D.',
      phone: '+27 82 *** **67',
      part: 'Toyota Hilux Engine',
      date: '2 mins ago',
      status: 'connected',
      disputed: false,
      yardName: 'Highveld Breakers'
    },
    {
      id: 2,
      customerName: 'Mike S.',
      phone: '+27 83 *** **89',
      part: 'Honda Civic Transmission',
      date: '15 mins ago',
      status: 'connected',
      disputed: false,
      yardName: 'Highveld Breakers'
    },
    {
      id: 3,
      customerName: 'Unknown',
      phone: '+27 72 *** **34',
      part: 'Ford Ranger Doors',
      date: '1 hour ago',
      status: 'disputed',
      disputed: true,
      yardName: 'Highveld Breakers'
    },
    {
      id: 4,
      customerName: 'Sarah K.',
      phone: '+27 84 *** **12',
      part: 'Nissan NP200 Parts',
      date: '2 hours ago',
      status: 'connected',
      disputed: false,
      yardName: 'Highveld Breakers'
    },
    {
      id: 5,
      customerName: 'Peter M.',
      phone: '+27 81 *** **56',
      part: 'VW Golf Body Parts',
      date: '3 hours ago',
      status: 'expired',
      disputed: false,
      yardName: 'Highveld Breakers'
    }
  ];

  const displayedLeads = mockLeads.slice(0, maxItems);

  const themeClasses = darkMode 
    ? {
        bg: 'bg-slate-900/30',
        border: 'border-white/10',
        text: 'text-white',
        subtext: 'text-slate-500',
        success: 'text-emerald-400',
        warning: 'text-amber-400',
        error: 'text-red-400',
        pill: 'bg-white/5'
      }
    : {
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        text: 'text-slate-900',
        subtext: 'text-slate-500',
        success: 'text-emerald-600',
        warning: 'text-amber-600',
        error: 'text-red-600',
        pill: 'bg-slate-100'
      };

  const getStatusConfig = (status, disputed) => {
    if (disputed || status === 'disputed') {
      return {
        icon: <ThumbsDown size={10} />,
        text: 'Disputed',
        className: themeClasses.error,
        bgClass: darkMode ? 'bg-red-500/10' : 'bg-red-50'
      };
    }
    if (status === 'connected') {
      return {
        icon: <CheckCircle2 size={10} />,
        text: 'Connected',
        className: themeClasses.success,
        bgClass: darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'
      };
    }
    if (status === 'expired') {
      return {
        icon: <Clock size={10} />,
        text: 'Expired',
        className: themeClasses.warning,
        bgClass: darkMode ? 'bg-amber-500/10' : 'bg-amber-50'
      };
    }
    return {
      icon: <Clock size={10} />,
      text: 'Pending',
      className: themeClasses.subtext,
      bgClass: darkMode ? 'bg-slate-500/10' : 'bg-slate-100'
    };
  };

  return (
    <div className={`${themeClasses.bg} border ${themeClasses.border} rounded-2xl overflow-hidden`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <History size={14} className={themeClasses.subtext} />
          <span className={`text-[10px] font-black uppercase tracking-widest ${themeClasses.subtext}`}>
            Recent Leads
          </span>
        </div>
        <span className={`text-[8px] font-bold ${themeClasses.subtext}`}>
          Last 24 hours
        </span>
      </div>

      {/* Lead List */}
      <div className="divide-y divide-white/5">
        {displayedLeads.map((lead) => {
          const status = getStatusConfig(lead.status, lead.disputed);
          return (
            <div key={lead.id} className="p-3 hover:bg-white/5 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold ${themeClasses.text} truncate`}>
                      {lead.customerName}
                    </span>
                    <span className={`text-[8px] ${themeClasses.subtext}`}>
                      {lead.date}
                    </span>
                  </div>
                  <p className={`text-[9px] font-medium truncate ${themeClasses.subtext}`}>
                    {lead.part}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Phone size={10} className={themeClasses.subtext} />
                    <span className={`text-[8px] ${themeClasses.subtext}`}>
                      {lead.phone}
                    </span>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className={`
                  flex items-center gap-1 px-2 py-1 rounded-full text-[8px] font-black uppercase
                  ${status.bgClass} ${status.className}
                `}>
                  {status.icon}
                  {status.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="p-3 border-t border-white/5">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className={`text-[9px] font-bold ${themeClasses.success}`}>
              {mockLeads.filter(l => l.status === 'connected' && !l.disputed).length}
            </p>
            <p className={`text-[7px] font-bold uppercase ${themeClasses.subtext}`}>Connected</p>
          </div>
          <div>
            <p className={`text-[9px] font-bold ${themeClasses.warning}`}>
              {mockLeads.filter(l => l.status === 'expired').length}
            </p>
            <p className={`text-[7px] font-bold uppercase ${themeClasses.subtext}`}>Expired</p>
          </div>
          <div>
            <p className={`text-[9px] font-bold ${themeClasses.error}`}>
              {mockLeads.filter(l => l.disputed).length}
            </p>
            <p className={`text-[7px] font-bold uppercase ${themeClasses.subtext}`}>Disputed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadHistory;

