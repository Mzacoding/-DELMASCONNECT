import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery, isSearching, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-6 md:mb-8 group">
      <div className="relative flex items-center bg-white border-2 border-slate-200 rounded-2xl md:rounded-3xl p-1.5 md:p-2 focus-within:border-primary-500 transition-all shadow-xl">
        <Search className="ml-3 md:ml-4 text-slate-400 w-5 h-5 md:w-6 md:h-6" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What spare part are you looking for?" 
          className="flex-1 bg-transparent py-3 md:py-4 px-3 md:px-4 text-base md:text-lg outline-none font-bold text-slate-900 placeholder:text-slate-400"
        />
        <button 
          type="submit" 
          className="bg-primary-600 hover:bg-primary-500 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-black uppercase tracking-tighter transition-transform active:scale-95 shadow-lg shadow-primary-600/30 whitespace-nowrap"
        >
          {isSearching ? "..." : "SEARCH"}
        </button>
      </div>
    </form>
  );
};

// Light mode version (now same as default)
const SearchBarLight = ({ searchQuery, setSearchQuery, isSearching, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-6 md:mb-8 group">
      <div className="relative flex items-center bg-white border-2 border-slate-200 rounded-2xl md:rounded-3xl p-1.5 md:p-2 focus-within:border-primary-500 transition-all shadow-xl">
        <Search className="ml-3 md:ml-4 text-slate-400 w-5 h-5 md:w-6 md:h-6" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What spare part are you looking for?" 
          className="flex-1 bg-transparent py-3 md:py-4 px-3 md:px-4 text-base md:text-lg outline-none font-bold text-slate-900 placeholder:text-slate-400"
        />
        <button 
          type="submit" 
          className="bg-primary-600 hover:bg-primary-500 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-black uppercase tracking-tighter transition-transform active:scale-95 shadow-lg shadow-primary-600/30 whitespace-nowrap"
        >
          {isSearching ? "..." : "SEARCH"}
        </button>
      </div>
    </form>
  );
};

export { SearchBar, SearchBarLight };
export default SearchBar;

