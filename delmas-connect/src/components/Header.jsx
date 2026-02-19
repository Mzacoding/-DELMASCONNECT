import React from 'react';
import { Link2, Sun, Moon, MapPin, User, Building2, Store, ArrowLeft } from 'lucide-react';

const Header = ({ 
  darkMode, 
  toggleTheme, 
  location = "Delmas Hub",
  viewMode = 'marketplace',
  onViewModeChange,
  user,
  onLoginClick,
  onBackToLanding
}) => {
  const themeClasses = darkMode 
    ? {
        header: 'bg-[#0a0f1d]/90 border-white/5',
        pill: 'bg-white/5 border-white/10',
        subtext: 'text-slate-500',
        button: 'bg-white/5 border-white/10 text-orange-400',
        modeActive: 'bg-orange-600 text-white',
        modeInactive: 'bg-white/5 text-slate-400 hover:text-white'
      }
    : {
        header: 'bg-white/90 border-slate-200 shadow-sm',
        pill: 'bg-slate-100 border-slate-200',
        subtext: 'text-slate-600',
        button: 'bg-white border-slate-200 text-slate-600 shadow-sm',
        modeActive: 'bg-orange-600 text-white',
        modeInactive: 'bg-slate-100 text-slate-600 hover:text-slate-900'
      };

  return (
    <header className={`px-3 md:p-4 flex justify-between items-center border-b ${themeClasses.header} backdrop-blur-md sticky top-0 z-50`}>
      <div className="flex items-center gap-2 md:gap-3">
        {/* Back to Landing Button */}
        {onBackToLanding && (
          <button 
            onClick={onBackToLanding}
            className={`p-1.5 md:p-2 rounded-lg ${themeClasses.button} mr-1`}
            title="Back to Home"
          >
            <ArrowLeft size={16} />
          </button>
        )}
        
        <div className="bg-orange-600 p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-lg shadow-orange-600/40 flex items-center justify-center">
          <Link2 size={18} className="text-white" />
        </div>
        <div className="flex flex-col -space-y-0.5 md:-space-y-1">
          <span className="text-base md:text-xl font-black uppercase italic tracking-tighter leading-none">
            DELMAS<span className="text-orange-500 underline decoration-2 underline-offset-2 md:underline-offset-4">Connect</span>
          </span>
          <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-slate-500 uppercase">SPARES</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-3">
        {/* Mode Toggle */}
        <div className={`hidden md:flex items-center gap-1 p-1 rounded-full ${themeClasses.pill}`}>
          <button
            onClick={() => onViewModeChange && onViewModeChange('marketplace')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              viewMode === 'marketplace' ? themeClasses.modeActive : themeClasses.modeInactive
            }`}
          >
            <Store size={12} />
            Marketplace
          </button>
          <button
            onClick={() => onViewModeChange && onViewModeChange('portal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              viewMode === 'portal' ? themeClasses.modeActive : themeClasses.modeInactive
            }`}
          >
            <Building2 size={12} />
            Yard Portal
          </button>
        </div>

        {/* Mobile Mode Toggle */}
        <div className="md:hidden flex items-center">
          <select
            value={viewMode}
            onChange={(e) => onViewModeChange && onViewModeChange(e.target.value)}
            className={`bg-transparent text-[10px] font-bold uppercase ${themeClasses.subtext} border-none focus:outline-none`}
          >
            <option value="marketplace">Marketplace</option>
            <option value="portal">Yard Portal</option>
          </select>
        </div>

        <button 
          onClick={toggleTheme}
          className={`p-1.5 md:p-2 rounded-full border transition-all ${themeClasses.button}`}
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* User / Login Button */}
        {user ? (
          <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border ${themeClasses.pill}`}>
            <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
              <User size={12} className="text-white" />
            </div>
            <span className={`text-[10px] font-bold uppercase ${themeClasses.subtext}`}>
              {user.yardName}
            </span>
          </div>
        ) : (
          <button 
            onClick={onLoginClick}
            className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border ${themeClasses.pill} hover:border-orange-500/50 transition-colors`}
          >
            <User size={12} className="text-orange-400" />
            <span className="text-[10px] font-bold uppercase text-orange-400">Login</span>
          </button>
        )}

        <div className={`hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border ${themeClasses.pill}`}>
          <MapPin size={12} className="text-orange-500" />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${themeClasses.subtext}`}>{location}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

