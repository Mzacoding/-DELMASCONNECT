import React from 'react';
import { Link2, Facebook, Twitter, Instagram, Mail, Phone, MapPin, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const themeClasses = darkMode 
    ? {
        footer: 'bg-[#050810] border-white/5',
        subtext: 'text-slate-500',
        pill: 'bg-white/5 border-white/10',
        border: 'border-white/5'
      }
    : {
        footer: 'bg-slate-200 border-slate-300',
        subtext: 'text-slate-600',
        pill: 'bg-slate-100 border-slate-200',
        border: 'border-slate-300'
      };

  return (
    <footer className={`mt-20 border-t ${themeClasses.footer} px-6 pt-16 pb-24 md:pb-16`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-orange-600 p-1.5 rounded-lg">
                <Link2 size={18} className="text-white" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-lg font-black uppercase italic tracking-tighter leading-none">
                  DELMAS<span className="text-orange-500">Connect</span>
                </span>
                <span className="text-[8px] font-bold tracking-[0.2em] text-slate-500">SPARES</span>
              </div>
            </div>
            <p className={`text-xs font-medium leading-relaxed ${themeClasses.subtext}`}>
              The #1 parts directory for the Delmas community. No account required. Browse, search, and connect with local scrap yards instantly.
            </p>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className={`p-2 rounded-lg border ${themeClasses.pill} hover:text-orange-500 transition-colors shadow-sm`}><Facebook size={18}/></a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className={`p-2 rounded-lg border ${themeClasses.pill} hover:text-orange-500 transition-colors shadow-sm`}><Twitter size={18}/></a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className={`p-2 rounded-lg border ${themeClasses.pill} hover:text-orange-500 transition-colors shadow-sm`}><Instagram size={18}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-orange-500">Business Hub</h4>
            <ul className={`text-xs space-y-4 font-bold ${themeClasses.subtext}`}>
              <li className="hover:text-orange-500 cursor-pointer flex items-center gap-2 text-orange-500 italic underline decoration-orange-500/30"><Lock size={12}/> Yard Owner Portal</li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center gap-2"><ArrowRight size={12}/> List Your Yard</li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center gap-2"><ArrowRight size={12}/> Ad Space Booking</li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center gap-2"><ArrowRight size={12}/> Inventory API</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-orange-500">Safety Center</h4>
            <ul className={`text-xs space-y-4 font-bold ${themeClasses.subtext}`}>
              <li className="hover:text-orange-500 cursor-pointer flex items-center gap-2"><ShieldCheck size={12}/> Safe Connections</li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center gap-2"><ShieldCheck size={12}/> Verified Yards Only</li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center gap-2"><ShieldCheck size={12}/> Report a Yard</li>
              <li className="hover:text-orange-500 cursor-pointer flex items-center gap-2"><ShieldCheck size={12}/> Privacy Shield</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-orange-500">Delmas Contact</h4>
            <div className={`space-y-4 text-xs font-bold ${themeClasses.subtext}`}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-600/10 text-orange-500 rounded-lg"><Mail size={16}/></div>
                <span>hello@delmasconnect.co.za</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-600/10 text-orange-500 rounded-lg"><Phone size={16}/></div>
                <span>+27 (0) 13 665 1234</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-600/10 text-orange-500 rounded-lg"><MapPin size={16}/></div>
                <span>CBD, Delmas, 2210</span>
              </div>
            </div>
          </div>

        </div>

        <div className={`pt-8 border-t ${themeClasses.border} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`text-[10px] font-black uppercase tracking-widest ${themeClasses.subtext}`}>
            © 2026 DELMASConnectSPARES. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-medium uppercase tracking-tighter ${themeClasses.subtext}`}>Powered By</span>
            <span className="text-orange-500 font-black italic uppercase tracking-tighter text-xs">MzaTechSolutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

