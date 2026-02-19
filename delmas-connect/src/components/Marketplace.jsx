import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Map as MapIcon, SlidersHorizontal, Filter, X } from 'lucide-react';
import Header from './Header';
import AdSlot from './AdSlot';
import MobileAd from './MobileAd';

const Marketplace = ({ onSearch, onBackToLanding, onOpenPortal, onShowResults, darkMode = false, onToggleTheme }) => {
  const [distance, setDistance] = useState(25);
  const [searchQuery, setSearchQuery] = useState('VW Polo Gearbox');
  const [showFilters, setShowFilters] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Theme classes
  const themeClasses = darkMode 
    ? {
        bg: 'bg-[#0a0f1d]',
        bgSecondary: 'bg-[#0f172a]/50',
        bgTertiary: 'bg-slate-900/40',
        text: 'text-slate-200',
        textMuted: 'text-slate-400',
        textPrimary: 'text-orange-500',
        border: 'border-white/10',
        borderLight: 'border-white/5',
        input: 'bg-slate-800/50 border-white/10 text-slate-200',
        card: 'bg-slate-900/40 border-white/5',
        cardHover: 'hover:border-white/10 hover:bg-slate-800/40',
        nav: 'bg-[#0a0f1d]/95 border-white/5',
      }
    : {
        bg: 'bg-slate-50',
        bgSecondary: 'bg-white',
        bgTertiary: 'bg-slate-100',
        text: 'text-slate-700',
        textMuted: 'text-slate-500',
        textPrimary: 'text-primary-600',
        border: 'border-slate-200',
        borderLight: 'border-slate-200',
        input: 'bg-slate-100 border-slate-200 text-slate-700',
        card: 'bg-white border-slate-200',
        cardHover: 'hover:border-slate-300 hover:shadow-md',
        nav: 'bg-white/95 border-slate-200',
      };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onShowResults) onShowResults(searchQuery);
  };

  const MOCK_PARTS = [
    { id: 1, yard: "Delmas Auto Parts", title: "VW Polo Gearbox (2014-2016) - Manual", price: "R3,950", distance: "3.1 km away", status: "IN STOCK", image: "https://images.unsplash.com/photo-1486006396113-ad75047f25a9?auto=format&fit=crop&q=80&w=300", isStock: true, verified: true },
    { id: 2, yard: "Mpumalanga Breakers", title: "VW Polo Gearbox (2012-2015) - TSi", price: "Call for Price", distance: "5.8 km away", status: "REQUEST PRICE", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=300", isStock: false, verified: true },
    { id: 3, yard: "Highveld Spares", title: "VW Polo Gearbox - 1.4 TSi", price: "R2,800", distance: "8.2 km away", status: "IN STOCK", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=300", isStock: true, verified: false },
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} font-sans`}>
      {/* Header with Dark Mode Toggle */}
      <Header 
        darkMode={darkMode}
        toggleTheme={onToggleTheme}
        onBackToLanding={onBackToLanding}
        onLoginClick={() => {}}
        onOpenPortal={onOpenPortal}
        user={null}
      />

      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 md:gap-8 p-2 md:p-6">
        {/* Desktop Sidebar with Ad */}
        <aside className="hidden lg:block space-y-4 md:space-y-6">
          <div className="flex items-center gap-2 font-semibold mb-2">
            <SlidersHorizontal size={18} className={themeClasses.textPrimary} />
            <span className={darkMode ? 'text-white' : 'text-slate-800'}>Filters</span>
          </div>
          
          {/* Distance Filter */}
          <div className={`${themeClasses.card} rounded-2xl p-4 md:p-6 shadow-sm`}>
            <h3 className={`text-sm font-medium mb-4 md:mb-6 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Max Distance (km)</h3>
            <div className="px-2">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={distance} 
                onChange={(e) => setDistance(e.target.value)} 
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between mt-3 md:mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>0km</span>
                <span className="text-orange-500 text-xs">{distance}km</span>
                <span>100km</span>
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className={`${themeClasses.card} rounded-2xl p-4 md:p-6 shadow-sm`}>
            <h3 className={`text-sm font-medium mb-3 md:mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Price Range (R)</h3>
            <div className="flex gap-2 md:gap-3">
              <input 
                type="text" 
                placeholder="Min" 
                className={`flex-1 ${themeClasses.input} rounded-xl px-3 py-2.5 md:py-3 text-xs focus:outline-none focus:border-orange-500`}
              />
              <input 
                type="text" 
                placeholder="Max" 
                className={`flex-1 ${themeClasses.input} rounded-xl px-3 py-2.5 md:py-3 text-xs focus:outline-none focus:border-orange-500`}
              />
            </div>
          </div>

          {/* Top Yards Filter */}
          <div className={`${themeClasses.card} rounded-2xl p-4 md:p-6 shadow-sm`}>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-3 md:mb-4">Top Yards</h3>
            <div className="space-y-3 md:space-y-4">
              {["Total Spares Delmas", "Delmas Auto Parts", "Mpumalanga Breakers"].map((yard, i) => (
                <label key={yard} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" defaultChecked={i === 0} className="peer hidden" />
                    <div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all flex items-center justify-center">
                      <div className="w-2.5 h-1.5 border-l-2 border-b-2 border-white -rotate-45 mb-1 hidden peer-checked:block"></div>
                    </div>
                  </div>
                  <span className={`text-xs md:text-sm ${darkMode ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-600 group-hover:text-slate-900'} transition-colors`}>{yard}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sidebar Ad Slot */}
          <AdSlot size="sidebar" darkMode={darkMode} />
        </aside>

        {/* Main Content */}
        <section className="space-y-3 md:space-y-4 relative pb-24 md:pb-8">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <h2 className="text-sm md:text-base font-semibold">
              Showing results for <span className="text-orange-500">"{searchQuery}"</span>
            </h2>
            <span className={`text-xs md:text-sm ${themeClasses.textMuted}`}>{MOCK_PARTS.length} results</span>
          </div>

          {/* Leaderboard Ad at Top */}
          <AdSlot size="leaderboard" darkMode={darkMode} className="mb-4" />

          {/* Results */}
          {MOCK_PARTS.map((part) => (
            <div 
              key={part.id} 
              className={`${themeClasses.card} rounded-xl md:rounded-[24px] p-3 md:p-5 flex flex-col md:flex-row gap-3 md:gap-6 transition-all shadow-sm ${themeClasses.cardHover}`}
            >
              {/* Image */}
              <div className="relative w-full md:w-[180px] lg:w-[220px] h-[140px] md:h-[180px] shrink-0">
                <img 
                  src={part.image} 
                  className="w-full h-full object-cover rounded-lg md:rounded-2xl" 
                  alt={part.title} 
                />
                <div className="absolute top-2 left-2">
                  <span className={`text-[8px] md:text-[9px] font-black px-2 py-1 rounded-md tracking-wider ${part.isStock ? 'bg-green-500 text-white' : darkMode ? 'bg-slate-800/90 text-slate-300' : 'bg-white/90 text-slate-700'}`}>
                    {part.status}
                  </span>
                </div>
                {part.verified && (
                  <div className="absolute top-2 right-2">
                    <span className="text-[7px] md:text-[8px] font-black px-2 py-1 rounded-md bg-orange-600 text-white">VERIFIED</span>
                  </div>
                )}
                {!part.isStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] rounded-lg md:rounded-2xl">
                    <span className="text-[9px] md:text-[10px] font-black text-white tracking-[3px] uppercase">Request Price</span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1 md:mb-2">
                    <div>
                      <h4 className="text-orange-500 font-bold text-sm md:text-lg mb-0.5">{part.yard}</h4>
                      <h2 className={`text-base md:text-xl font-medium tracking-tight ${darkMode ? 'text-white' : 'text-slate-800'}`}>{part.title}</h2>
                    </div>
                    <div className="text-right ml-2">
                      <span className={`text-lg md:text-2xl font-black ${part.isStock ? 'text-orange-500' : 'text-slate-400 italic'}`}>
                        {part.price}
                      </span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs md:text-sm mt-2 md:mt-3 ${themeClasses.textMuted}`}>
                    <MapPin size={14} className="text-orange-500" />
                    <span>{part.distance}</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-6">
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 md:gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-3 px-4 md:px-6 rounded-xl text-xs md:text-sm transition-all shadow-lg shadow-green-500/20 min-h-touch">
                    <MessageSquare size={16} className="md:w-[18px] md:h-[18px]" />
                    <span>{part.isStock ? 'WhatsApp' : 'Enquire'}</span>
                  </button>
                  <button className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 md:gap-2 border font-bold py-3 md:py-3 px-4 md:px-6 rounded-xl text-xs md:text-sm transition-all min-h-touch ${darkMode ? 'bg-slate-800 border-white/10 text-slate-300 hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'}`}>
                    <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                    <span className="hidden xs:inline">Call Yard</span>
                    <span className="xs:hidden">Call</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Native Ad between results */}
          <AdSlot size="native" darkMode={darkMode} className="my-6" />

          {/* Map Button - Desktop */}
          <button className="hidden md:flex fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3.5 rounded-full font-bold items-center gap-3 shadow-xl shadow-orange-500/30 transform hover:scale-105 transition-all z-50">
            <MapIcon size={20} />View Map
          </button>
        </section>
      </main>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-30">
        <button 
          onClick={() => setShowMobileFilters(true)} 
          className={`flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold shadow-sm min-h-touch ${darkMode ? 'bg-slate-800 border border-white/10 text-slate-300' : 'bg-white border border-slate-200 text-slate-600'}`}
        >
          <Filter size={16} />Filters
        </button>
      </div>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowMobileFilters(false)} />
          <div className={`absolute bottom-0 left-0 right-0 border-t p-4 md:p-6 max-h-[80vh] overflow-y-auto pb-safe ${darkMode ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Filters</h3>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="p-2 text-slate-400 min-h-touch min-w-touch flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Distance Filter */}
            <div className="mb-6">
              <h3 className={`text-sm font-medium mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Max Distance (km)</h3>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={distance} 
                onChange={(e) => setDistance(e.target.value)} 
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between mt-2 text-xs font-bold text-slate-400">
                <span>0km</span>
                <span className="text-orange-500">{distance}km</span>
                <span>100km</span>
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className={`text-sm font-medium mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Price Range (R)</h3>
              <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="Min" 
                  className={`flex-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 ${themeClasses.input}`}
                />
                <input 
                  type="text" 
                  placeholder="Max" 
                  className={`flex-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 ${themeClasses.input}`}
                />
              </div>
            </div>

            {/* Top Yards */}
            <div className="mb-6">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[2px] mb-3">Top Yards</h3>
              <div className="space-y-3">
                {["Total Spares Delmas", "Delmas Auto Parts", "Mpumalanga Breakers"].map((yard, i) => (
                  <label key={yard} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked={i === 0} className="w-4 h-4 accent-orange-500" />
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{yard}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setShowMobileFilters(false)}
              className="w-full bg-orange-600 py-4 rounded-xl font-bold text-white hover:bg-orange-500 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Mobile Ad - Fixed at Bottom */}
      <MobileAd darkMode={darkMode} />

      <div className={`mt-8 md:mt-12 text-center text-[10px] text-slate-400 font-bold tracking-[4px] uppercase pb-20 md:pb-8 px-2 ${darkMode ? 'text-slate-500' : ''}`}>
        DelmasConnect • South Africa's Auto Hub
      </div>
    </div>
  );
};

export default Marketplace;

