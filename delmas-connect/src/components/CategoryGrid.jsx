import React from 'react';
import { Users, Car, Truck, Cpu, Settings, Activity } from 'lucide-react';

const CATEGORIES = [
  { id: 'taxis', name: "Taxi Parts", icon: <Users size={20} className="md:size-24"/> },
  { id: 'cars', name: "Car Spares", icon: <Car size={20} className="md:size-24"/> },
  { id: 'trucks', name: "Truck Parts", icon: <Truck size={20} className="md:size-24"/> },
  { id: 'engine', name: "Engines", icon: <Cpu size={20} className="md:size-24"/> },
  { id: 'trans', name: "Gearboxes", icon: <Settings size={20} className="md:size-24"/> },
  { id: 'braking', name: "Brakes", icon: <Activity size={20} className="md:size-24"/> },
];

const CategoryGrid = ({ onCategoryClick }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 mb-8 md:mb-12">
      {CATEGORIES.map(cat => (
        <button 
          key={cat.id} 
          onClick={() => onCategoryClick && onCategoryClick(cat.name)}
          className="bg-white/5 p-3 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 hover:border-orange-500 hover:scale-[1.02] transition-all group text-center shadow-sm"
        >
          <div className="text-orange-500 mb-1 md:mb-2 flex justify-center group-hover:scale-110 transition-transform">{cat.icon}</div>
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-tighter text-white">{cat.name}</p>
        </button>
      ))}
    </div>
  );
};

const CategoryGridLight = ({ onCategoryClick }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 mb-8 md:mb-12">
      {CATEGORIES.map(cat => (
        <button 
          key={cat.id} 
          onClick={() => onCategoryClick && onCategoryClick(cat.name)}
          className="bg-white border border-slate-200 p-3 md:p-6 rounded-2xl md:rounded-3xl hover:border-orange-500 hover:scale-[1.02] transition-all group text-center shadow-sm"
        >
          <div className="text-orange-500 mb-1 md:mb-2 flex justify-center group-hover:scale-110 transition-transform">{cat.icon}</div>
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-tighter text-slate-700">{cat.name}</p>
        </button>
      ))}
    </div>
  );
};

export { CategoryGrid, CategoryGridLight, CATEGORIES };
export default CategoryGrid;

