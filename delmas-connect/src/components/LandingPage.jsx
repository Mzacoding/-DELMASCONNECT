import React, { useState } from 'react';
import { 
  Search, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Instagram,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

const LandingPage = ({ onSearch, onListYard, onLearnMore, darkMode = false, onToggleTheme }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category);
    if (onSearch) onSearch(category);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Theme-based classes
  const bgMain = darkMode ? 'bg-[#0a0f1d]' : 'bg-slate-50';
  const bgNav = darkMode ? 'bg-[#0a0f1d]/95' : 'bg-white/95';
  const bgCard = darkMode ? 'bg-[#111827]' : 'bg-white';
  const borderCard = darkMode ? 'border-gray-800' : 'border-slate-200';
  const textMain = darkMode ? 'text-white' : 'text-slate-800';
  const textMuted = darkMode ? 'text-gray-400' : 'text-slate-600';
  const textHeading = darkMode ? 'text-white' : 'text-slate-900';
  const navBorder = darkMode ? 'border-gray-800/50' : 'border-slate-200';

  return (
    <div className={`min-h-screen ${bgMain} ${textMain} font-sans selection:bg-primary-100`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${bgNav} backdrop-blur-md border-b ${navBorder} ${darkMode ? 'shadow-none' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-3 md:px-6 h-14 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-1.5 h-4 md:h-6 bg-primary-600 rounded-full"></div>
              <div className="w-1.5 h-4 md:h-6 bg-primary-500 rounded-full"></div>
              <div className="w-1.5 h-4 md:h-6 bg-primary-400 rounded-full"></div>
            </div>
            <span className={`font-black text-lg md:text-2xl tracking-tighter ${textHeading}`}>DelmasConnect</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex gap-6 lg:gap-10 items-center text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
            <button onClick={() => scrollToSection('search')} className={`hover:${textHeading} transition-colors`}>Search</button>
            <button onClick={() => scrollToSection('yards')} className={`hover:${textHeading} transition-colors`}>For Yards</button>
            <button onClick={() => scrollToSection('how-it-works')} className={`hover:${textHeading} transition-colors`}>How it Works</button>
            <button onClick={() => scrollToSection('contact')} className={`hover:${textHeading} transition-colors`}>Contact</button>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={onToggleTheme}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-slate-100'} transition-colors`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            
            <button 
              onClick={onListYard}
              className="bg-primary-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/20 active:scale-95 text-xs md:text-sm"
            >
              List Your Yard
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onToggleTheme}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-slate-100'} transition-colors md:hidden`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 min-h-touch min-w-touch flex items-center justify-center ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${bgCard} border-t ${navBorder} px-3 py-4 space-y-2 ${darkMode ? '' : 'shadow-lg'}`}>
            <button 
              onClick={() => scrollToSection('search')} 
              className={`w-full text-left px-4 py-3 rounded-xl ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-slate-600 hover:bg-slate-100'} transition-colors font-medium`}
            >
              Search
            </button>
            <button 
              onClick={() => scrollToSection('yards')} 
              className={`w-full text-left px-4 py-3 rounded-xl ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-slate-600 hover:bg-slate-100'} transition-colors font-medium`}
            >
              For Yards
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className={`w-full text-left px-4 py-3 rounded-xl ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-slate-600 hover:bg-slate-100'} transition-colors font-medium`}
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`w-full text-left px-4 py-3 rounded-xl ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-slate-600 hover:bg-slate-100'} transition-colors font-medium`}
            >
              Contact
            </button>
            <button 
              onClick={onListYard}
              className="w-full bg-primary-600 text-white px-4 py-3 rounded-xl font-bold mt-4"
            >
              List Your Yard
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="search" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 md:pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="hero2.jpg" 
            className={`w-full h-full object-cover ${darkMode ? 'grayscale opacity-30' : 'opacity-30'} scale-105`}
            alt="Scrap yard background"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-[#0a0f1d]/60 via-[#0a0f1d]/90 to-[#0a0f1d]' : 'from-slate-50/80 via-slate-100/90 to-slate-50'}`}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-3 md:px-6">
          <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 tracking-tighter leading-[0.9] ${textHeading}`}>
            Find the part. <br/>
            <span className="text-primary-600">Fast.</span>
          </h1>
          <p className={`${textMuted} text-sm md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed`}>
            The hyper-local spares marketplace for Delmas. Connect directly with local yards and get back on the road today.
          </p>

          {/* Search Form - Stacks on mobile */}
          <form onSubmit={handleSearch} className={`max-w-2xl mx-auto ${darkMode ? 'bg-[#1a2333]/80' : 'bg-white/80'} backdrop-blur-xl p-2 md:p-2 rounded-xl md:rounded-2xl ${darkMode ? 'border border-gray-700/50' : 'border border-slate-200'} shadow-xl flex flex-col md:flex-row gap-2`}>
            <div className="flex-1 relative">
              <Search className={`absolute left-3 md:left-4 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-slate-400'}`} size={18} />
              <input 
                type="text" 
                placeholder="Search e.g., VW Polo Gearbox..."
                className={`w-full bg-transparent border-none outline-none py-3 md:py-4 pl-10 md:pl-12 pr-4 text-sm md:text-base ${textHeading} placeholder:${darkMode ? 'text-gray-500' : 'text-slate-400'}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="bg-primary-600 hover:bg-primary-500 text-white font-black px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all uppercase tracking-widest text-xs md:text-sm shadow-xl shadow-primary-600/20 active:scale-95 min-h-touch"
            >
              Search
            </button>
          </form>
          
          {/* Popular Searches */}
          <div className={`mt-4 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] ${darkMode ? 'text-gray-500' : 'text-slate-400'}`}>
            <span>Popular:</span>
            <button onClick={() => handleCategoryClick('Brake Pads')} className={`${darkMode ? 'text-gray-300 hover:text-primary-400' : 'text-slate-600 hover:text-primary-600'} underline ${darkMode ? 'decoration-gray-700' : 'decoration-slate-300'} underline-offset-4`}>Brake Pads</button>
            <button onClick={() => handleCategoryClick('Alternators')} className={`${darkMode ? 'text-gray-300 hover:text-primary-400' : 'text-slate-600 hover:text-primary-600'} underline ${darkMode ? 'decoration-gray-700' : 'decoration-slate-300'} underline-offset-4`}>Alternators</button>
            <button onClick={() => handleCategoryClick('Headlights')} className={`${darkMode ? 'text-gray-300 hover:text-primary-400' : 'text-slate-600 hover:text-primary-600'} underline ${darkMode ? 'decoration-gray-700' : 'decoration-slate-300'} underline-offset-4`}>Headlights</button>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="yards" className="max-w-6xl mx-auto px-3 md:px-6 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* For Buyers */}
        <div className={`${bgCard} border ${borderCard} rounded-2xl md:rounded-[2rem] p-6 md:p-10 hover:border-primary-200 hover:shadow-xl transition-all group ${darkMode ? '' : 'shadow-sm'}`}>
          <div className="w-12 md:w-14 bg-primary-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
            <Search className="text-primary-600" size={24} />
          </div>
          <h2 className={`text-xl md:text-3xl font-black mb-3 md:mb-4 ${textHeading}`}>For Buyers</h2>
          <p className={`${textMuted} mb-6 md:mb-8 leading-relaxed text-sm md:text-base`}>
            Stop wasting petrol driving yard-to-yard. Search all Delmas yards in seconds from your phone and find exactly what you need.
          </p>
          <ul className="space-y-3 md:space-y-4 mb-8 md:10">
            <li className={`flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              <CheckCircle2 size={16} className="text-primary-500 shrink-0" /> Instant inventory search
            </li>
            <li className={`flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              <CheckCircle2 size={16} className="text-primary-500 shrink-0" /> Save time and fuel costs
            </li>
          </ul>
          <button 
            onClick={() => scrollToSection('search')}
            className="w-full bg-primary-600 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-primary-500 transition-all active:scale-[0.98]"
          >
            Start Searching
          </button>
        </div>

        {/* For Yard Owners */}
        <div className={`${bgCard} border ${borderCard} rounded-2xl md:rounded-[2rem] p-6 md:p-10 hover:border-primary-200 hover:shadow-xl transition-all group ${darkMode ? '' : 'shadow-sm'}`}>
          <div className="w-12 md:w-14 bg-primary-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
            <TrendingUpIcon />
          </div>
          <h2 className={`text-xl md:text-3xl font-black mb-3 md:mb-4 ${textHeading}`}>For Yard Owners</h2>
          <p className={`${textMuted} mb-6 md:mb-8 leading-relaxed text-sm md:text-base`}>
            Turn your inventory into leads. Reach thousands of local buyers. Only pay <span className={`${textHeading} font-bold`}>R5.00</span> when a customer contacts you.
          </p>
          <div className={`mt-auto pt-6 md:pt-10 border-t ${darkMode ? 'border-gray-800/50' : 'border-slate-100'}`}>
             <button 
              onClick={onLearnMore}
              className="flex items-center gap-2 text-primary-600 font-black uppercase tracking-widest text-xs md:text-sm group-hover:gap-4 transition-all"
            >
               Learn about Partner Portal <ArrowRight size={16} />
             </button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className={`${bgCard} py-16 md:py-32 px-3 md:px-6`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 italic uppercase tracking-tighter ${textHeading}`}>How it Works</h2>
          <p className={`${darkMode ? 'text-gray-500' : 'text-slate-500'} mb-12 md:mb-20 font-bold uppercase tracking-widest text-[10px] md:text-xs`}>Simple 3-step process to get your car back on the road.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 md:w-20 bg-primary-50 border border-primary-100 rounded-full flex items-center justify-center mb-6 md:mb-8 relative z-10">
                <Search className="text-primary-600" size={28} />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 italic ${textMain}`}>1. Search</h3>
              <p className={`${darkMode ? 'text-gray-500' : 'text-slate-500'} text-xs md:text-sm leading-relaxed px-4 md:px-6 font-medium`}>
                Enter the specific part you're looking for. Our system queries all local yard inventories instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 md:w-20 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mb-6 md:mb-8 relative z-10">
                <MessageCircle className="text-green-600" size={28} />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 italic ${textMain}`}>2. Connect</h3>
              <p className={`${darkMode ? 'text-gray-500' : 'text-slate-500'} text-xs md:text-sm leading-relaxed px-4 md:px-6 font-medium`}>
                Click to connect instantly via WhatsApp. Confirm availability and price directly with the yard owner.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 md:w-20 bg-primary-50 border border-primary-100 rounded-full flex items-center justify-center mb-6 md:mb-8 relative z-10">
                <CheckCircle2 className="text-primary-600" size={28} />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 italic ${textMain}`}>3. Get Parts</h3>
              <p className={`${darkMode ? 'text-gray-500' : 'text-slate-500'} text-xs md:text-sm leading-relaxed px-4 md:px-6 font-medium`}>
                Collect your parts at the yard in Delmas or arrange for local delivery to your workshop.
              </p>
            </div>

            {/* Connecting Line (Desktop) */}
            <div className={`hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent ${darkMode ? 'via-gray-800' : 'via-slate-200'} to-transparent`}></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={`${darkMode ? 'bg-[#0a0f1d]' : 'bg-slate-100'} border-t ${navBorder} pt-16 md:pt-24 pb-8 md:pb-12 px-3 md:px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-12 md:mb-20">
            {/* Info */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-primary-600 rounded-full"></div>
                  <div className="w-1 h-4 bg-primary-400 rounded-full"></div>
                </div>
                <span className={`font-black text-lg tracking-tighter ${textHeading}`}>DelmasConnect</span>
              </div>
              <p className={`${darkMode ? 'text-gray-500' : 'text-slate-500'} text-sm leading-relaxed max-w-xs font-medium`}>
                The ultimate marketplace for auto parts in Delmas, South Africa. Connecting yards and buyers since 2023.
              </p>
              <div className="flex gap-3 md:4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-500 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-primary-600 hover:border-primary-300'} transition-colors`}>
                  <Twitter size={18}/>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-500 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-primary-600 hover:border-primary-300'} transition-colors`}>
                  <Instagram size={18}/>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${darkMode ? 'text-gray-600' : 'text-slate-400'} mb-1 md:mb-2`}>Quick Links</h4>
              <button onClick={() => scrollToSection('search')} className={`text-sm font-bold text-left ${darkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Search Inventory</button>
              <button onClick={() => scrollToSection('yards')} className={`text-sm font-bold text-left ${darkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>List Your Yard</button>
              <button 
                onClick={onLearnMore}
                className={`text-sm font-bold text-left ${darkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Yard Dashboard
              </button>
              <a href="#" className={`text-sm font-bold ${darkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Success Stories</a>
            </div>

            {/* Contact */}
            <div className="space-y-4 md:space-y-6">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${darkMode ? 'text-gray-600' : 'text-slate-400'} mb-1 md:mb-2`}>Contact Delmas</h4>
              <div className="flex gap-3 md:gap-4">
                <MapPin className="text-primary-600 shrink-0" size={16} />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>Sarel Cilliers St, Delmas, 2210</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <Phone className="text-primary-600 shrink-0" size={16} />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>+27 13 665 1234</span>
              </div>
              <div className="flex gap-3 md:gap-4">
                <Mail className="text-primary-600 shrink-0" size={16} />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>hello@delmasconnect.co.za</span>
              </div>
            </div>
          </div>

          <div className={`pt-8 md:pt-12 border-t ${navBorder} flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6`}>
            <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${darkMode ? 'text-gray-600' : 'text-slate-400'}`}>&copy; 2024 DelmasConnect. All rights reserved.</p>
            <div className={`flex gap-6 md:gap-8 text-[10px] font-black uppercase tracking-[0.2em] ${darkMode ? 'text-gray-600' : 'text-slate-400'}`}>
              <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Simple icon component to match the "Yard Owners" trend icon in image
const TrendingUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

export default LandingPage;

