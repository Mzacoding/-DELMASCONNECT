import React, { useState } from 'react';
import { LayoutDashboard, Package, History, PlusCircle, ShieldCheck, Wallet, ArrowUpRight, X, Edit2, Trash2 } from 'lucide-react';
import Header from './Header';
import AdSlot from './AdSlot';
import MobileAd from './MobileAd';

const YardPortal = ({ user, onLogout, creditBalance = 485.00, freeCredits = 10, leadHistory = [], inventory = [], onUpdateInventory, darkMode = false, onToggleTheme }) => {
  const [walletBalance, setWalletBalance] = useState(creditBalance);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme classes
  const themeClasses = darkMode 
    ? {
        bg: 'bg-[#0a0f1d]',
        bgSecondary: 'bg-slate-900/40',
        bgTertiary: 'bg-slate-900',
        text: 'text-slate-200',
        textMuted: 'text-slate-400',
        textPrimary: 'text-orange-500',
        textDark: 'text-white',
        border: 'border-white/10',
        borderLight: 'border-white/5',
        input: 'bg-slate-800/50 border-white/10 text-slate-200',
        card: 'bg-slate-900/40 border-white/5',
        cardHover: 'hover:border-white/10 hover:bg-slate-800/40',
        nav: 'bg-[#0a0f1d]/95 border-white/5',
        gradient: 'from-orange-500/20 to-transparent',
      }
    : {
        bg: 'bg-slate-50',
        bgSecondary: 'bg-white',
        bgTertiary: 'bg-slate-50',
        text: 'text-slate-700',
        textMuted: 'text-slate-500',
        textPrimary: 'text-primary-600',
        textDark: 'text-slate-900',
        border: 'border-slate-200',
        borderLight: 'border-slate-200',
        input: 'bg-slate-50 border-slate-200 text-slate-700',
        card: 'bg-white border-slate-200',
        cardHover: 'hover:border-primary-200 hover:shadow-md',
        nav: 'bg-white/95 border-slate-200',
        gradient: 'from-primary-50 to-transparent',
      };

  const defaultInventory = [
    { id: 1, name: 'VW Polo Gearbox (2016)', category: 'Transmission', price: 3500, condition: 'Used', quantity: 1 },
    { id: 2, name: 'Toyota Hilux GD6 Engine', category: 'Engines', price: 12000, condition: 'Used', quantity: 1 },
    { id: 3, name: 'Golf 7 Headlight R', category: 'Lights', price: 850, condition: 'Used', quantity: 2 },
    { id: 4, name: 'Ford Ranger Tailgate', category: 'Body Parts', price: 1500, condition: 'Used', quantity: 1 },
  ];

  const inventoryItems = inventory.length > 0 ? inventory : defaultInventory;

  const mockLeads = [
    { id: 1, buyer: "User_8842", part: "VW Polo Gearbox (2016)", type: "WhatsApp", fee: 5.00, status: "Billed", time: "12 mins ago" },
    { id: 2, buyer: "User_1190", part: "Toyota Hilux GD6 Engine", type: "Call", fee: 0.00, status: "FREE (Repeat)", time: "1 hour ago" },
    { id: 3, buyer: "User_9021", part: "Golf 7 Headlight R", type: "WhatsApp", fee: 5.00, status: "Billed", time: "3 hours ago" },
    { id: 4, buyer: "User_4432", part: "Ford Ranger Tailgate", type: "WhatsApp", fee: 5.00, status: "Billed", time: "Yesterday" },
  ];

  const leads = leadHistory.length > 0 ? leadHistory : mockLeads;

  const handleSignOut = () => { if (onLogout) onLogout(); };

  const getConditionColor = (condition) => {
    switch(condition?.toLowerCase()) {
      case 'new': return 'bg-emerald-100 text-emerald-600 border-emerald-200';
      case 'refurbished': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'used': return 'bg-amber-100 text-amber-600 border-amber-200';
      default: return darkMode ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} font-sans`}>
      {/* Header */}
      <Header 
        darkMode={darkMode}
        toggleTheme={onToggleTheme}
        onBackToLanding={() => {}}
        onLoginClick={() => {}}
        user={user}
      />

      <main className="pt-14 md:pt-20 min-h-screen pb-20 md:pb-8">
        {activeTab === 'dashboard' && (
          <div className="max-w-6xl mx-auto px-3 md:px-6 py-4 md:py-8 space-y-6 md:space-y-10">
            {/* Hero Banner */}
            <div className={`bg-gradient-to-r ${themeClasses.gradient} border ${themeClasses.border} rounded-2xl md:rounded-[2rem] p-4 md:p-8`}>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2">
                Welcome back, <span className="text-orange-500">{user?.yardName || 'Total Spares'}</span>
              </h1>
              <p className={themeClasses.textMuted + ' text-sm'}>Here's what's happening with your yard today.</p>
            </div>

            {/* Stats Grid with Ad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className={`${themeClasses.card} rounded-2xl p-4 md:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow`}>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${themeClasses.textMuted}`}>Available Balance</p>
                <h3 className={`text-3xl md:text-4xl font-black italic mb-4 md:mb-6 ${themeClasses.textDark}`}>R{walletBalance.toFixed(2)}</h3>
                <button onClick={() => setActiveTab('wallet')} className="bg-orange-600 text-white font-bold text-xs md:text-[10px] uppercase tracking-widest px-4 md:px-6 py-2 md:py-3 rounded-xl hover:bg-orange-500 transition-all">Top Up</button>
              </div>
              <div className={`${themeClasses.card} rounded-2xl p-4 md:p-8 shadow-sm`}>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${themeClasses.textMuted}`}>Total Leads (Monthly)</p>
                <h3 className={`text-3xl md:text-4xl font-black italic mb-1 md:mb-2 ${themeClasses.textDark}`}>142</h3>
                <p className="text-green-500 text-xs font-bold flex items-center gap-1"><ArrowUpRight size={14} /> +12% from last month</p>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-4 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-2xl font-black italic uppercase leading-none mb-1 md:mb-2 text-white">List New Parts</h3>
                  <p className="text-orange-100/60 text-xs">Boost your sales.</p>
                </div>
                <button onClick={() => { setActiveTab('inventory'); setShowAddModal(true); }} className="w-full bg-white text-orange-700 font-bold text-xs uppercase tracking-widest py-2 md:py-3 rounded-xl hover:bg-gray-100 transition-all mt-3 md:mt-4 flex items-center justify-center gap-1 md:gap-2">
                  <PlusCircle size={14} className="md:hidden" style={{width:14,height:14}} />
                  <PlusCircle size={16} className="hidden md:block" style={{width:16,height:16}} /> 
                  Add Inventory
                </button>
              </div>
            </div>

            {/* Leaderboard Ad */}
            <AdSlot size="leaderboard" darkMode={darkMode} />

            {/* Recent Leads Table */}
            <div className={`${themeClasses.card} rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm`}>
              <div className={`p-4 md:p-8 border-b ${themeClasses.borderLight}`}>
                <h3 className={`text-lg md:text-2xl font-black italic uppercase ${themeClasses.textDark}`}>Recent Leads</h3>
                <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${themeClasses.textMuted}`}>R5.00 connections</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead>
                    <tr className={darkMode ? 'bg-slate-800/50 text-slate-400' : 'bg-slate-50 text-slate-400'}>
                      <th className="px-3 md:px-8 py-3 md:py-5 text-[10px] font-black uppercase tracking-[0.2em]">Buyer</th>
                      <th className="px-3 md:px-8 py-3 md:py-5 text-[10px] font-black uppercase tracking-[0.2em]">Part</th>
                      <th className="px-3 md:px-8 py-3 md:py-5 text-[10px] font-black uppercase tracking-[0.2em]">Fee</th>
                      <th className="px-3 md:px-8 py-3 md:py-5 text-right text-[10px] font-black uppercase tracking-[0.2em]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.map((lead) => (
                      <tr key={lead.id} className={`${darkMode ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50'} transition-colors`}>
                        <td className="px-3 md:px-8 py-3 md:py-4">
                          <div className={`font-mono text-xs md:text-sm font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{lead.buyer}</div>
                          <div className={`text-[10px] font-black uppercase ${themeClasses.textMuted}`}>{lead.time}</div>
                        </td>
                        <td className={`px-3 md:px-8 py-3 md:py-4 font-bold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{lead.part}</td>
                        <td className={`px-3 md:px-8 py-3 md:py-4 font-black italic ${themeClasses.textDark}`}>R{lead.fee.toFixed(2)}</td>
                        <td className="px-3 md:px-8 py-3 md:py-4 text-right">
                          <span className={`px-2 md:px-4 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase ${lead.status === 'Billed' ? (darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500') : (darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-primary-50 text-primary-600')}`}>
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fair Play Protection */}
            <div className={`bg-gradient-to-r from-transparent to-transparent border ${themeClasses.border} rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-sm`}>
              <div className={`p-4 md:p-6 rounded-2xl ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                <ShieldCheck size={40} style={{ width: 40, height: 40 }} className="text-orange-500" />
              </div>
              <div className="text-center md:text-left">
                <h4 className={`text-base md:text-xl font-black italic uppercase mb-1 ${themeClasses.textDark}`}>Fair-Play Protection</h4>
                <p className={`text-xs md:text-sm ${themeClasses.textMuted}`}>Saved you <span className={`font-bold ${themeClasses.textDark}`}>R45.00</span> this week.</p>
              </div>
            </div>

            {/* Sidebar Ad on Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2"></div>
              <div className="hidden lg:block">
                <AdSlot size="sidebar" darkMode={darkMode} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="max-w-6xl mx-auto px-3 md:px-6 py-4 md:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
              <div>
                <h2 className={`text-xl md:text-3xl font-black italic uppercase ${themeClasses.textDark}`}>My Inventory</h2>
                <p className={`${themeClasses.textMuted} text-sm`}>{inventoryItems.length} parts listed</p>
              </div>
              <button onClick={() => setShowAddModal(true)} className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs md:text-sm uppercase px-4 md:px-6 py-2 md:py-3 rounded-xl flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm">
                <PlusCircle size={16} />Add Part
              </button>
            </div>
            
            {/* Ad between inventory items */}
            <AdSlot size="native" darkMode={darkMode} className="mb-6" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {inventoryItems.map((item) => (
                <div key={item.id} className={`${themeClasses.card} rounded-2xl p-3 md:p-4 transition-colors group shadow-sm ${themeClasses.cardHover}`}>
                  <div className={`aspect-video rounded-xl mb-3 flex items-center justify-center ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                    <Package size={32} style={{ width: 32, height: 32 }} className={themeClasses.textMuted} />
                  </div>
                  <h4 className={`font-bold text-sm truncate ${themeClasses.textDark}`}>{item.name}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getConditionColor(item.condition)}`}>{item.condition}</span>
                    <span className={`text-[10px] ${themeClasses.textMuted}`}>Qty: {item.quantity}</span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-base md:text-lg font-black text-orange-500">R {item.price?.toLocaleString()}</span>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className={`p-1.5 md:p-2 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                        <Edit2 size={14} style={{ width: 14, height: 14 }} className={themeClasses.textMuted} />
                      </button>
                      <button className="p-1.5 md:p-2 bg-red-50 rounded-lg">
                        <Trash2 size={14} style={{ width: 14, height: 14 }} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="max-w-6xl mx-auto px-3 md:px-6 py-4 md:py-8">
            <h2 className={`text-xl md:text-3xl font-black italic uppercase mb-6 md:mb-8 ${themeClasses.textDark}`}>Lead History</h2>
            <div className={`${themeClasses.card} rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm`}>
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className={darkMode ? 'bg-slate-800/50 text-slate-400' : 'bg-slate-50 text-slate-400'}>
                    <th className="px-3 md:px-8 py-3 md:py-5 text-[10px] font-black uppercase tracking-[0.2em]">Buyer</th>
                    <th className="px-3 md:px-8 py-3 md:py-5 text-[10px] font-black uppercase tracking-[0.2em]">Part</th>
                    <th className="px-3 md:px-8 py-3 md:py-5 text-[10px] font-black uppercase tracking-[0.2em]">Fee</th>
                    <th className="px-3 md:px-8 py-3 md:py-5 text-right text-[10px] font-black uppercase tracking-[0.2em]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr key={lead.id} className={`${darkMode ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50'} transition-colors`}>
                      <td className="px-3 md:px-8 py-3 md:py-4">
                        <div className={`font-mono text-xs md:text-sm font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{lead.buyer}</div>
                        <div className={`text-[10px] font-black uppercase ${themeClasses.textMuted}`}>{lead.time}</div>
                      </td>
                      <td className={`px-3 md:px-8 py-3 md:py-4 font-bold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{lead.part}</td>
                      <td className={`px-3 md:px-8 py-3 md:py-4 font-black italic ${themeClasses.textDark}`}>R{lead.fee.toFixed(2)}</td>
                      <td className="px-3 md:px-8 py-3 md:py-4 text-right">
                        <span className={`px-2 md:px-4 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase ${lead.status === 'Billed' ? (darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500') : (darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-primary-50 text-primary-600')}`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'wallet' && (
          <div className="max-w-6xl mx-auto px-3 md:px-6 py-4 md:py-8 space-y-6 md:space-y-8">
            <h2 className={`text-xl md:text-3xl font-black italic uppercase ${themeClasses.textDark}`}>Wallet & Billing</h2>
            
            {/* Ad at top of wallet */}
            <AdSlot size="leaderboard" darkMode={darkMode} />
            
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-6 md:p-10 shadow-xl">
              <p className="text-orange-200 text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Available Balance</p>
              <h3 className="text-4xl md:text-6xl font-black italic mb-4 md:mb-6 text-white">R{walletBalance.toFixed(2)}</h3>
              <button className="bg-white text-orange-700 font-bold uppercase px-6 md:px-8 py-2 md:py-3 rounded-xl hover:bg-gray-100 transition-all text-sm md:text-base">Top Up Now</button>
            </div>
            <div className={`${themeClasses.card} rounded-2xl p-4 md:p-6 shadow-sm`}>
              <h4 className={`font-bold uppercase mb-3 md:mb-4 text-sm md:text-base ${themeClasses.textDark}`}>Quick Top Up</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                {[50, 100, 200, 500].map(amount => (
                  <button key={amount} className={`p-3 md:p-4 border rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transition-colors text-center ${themeClasses.border}`}>
                    <p className="text-base md:text-lg font-black text-orange-500">R{amount}</p>
                    <p className={`text-[10px] ${themeClasses.textMuted}`}>{amount/5} leads</p>
                  </button>
                ))}
              </div>
            </div>
            <div className={`${themeClasses.card} rounded-2xl p-4 md:p-6 shadow-sm`}>
              <h4 className={`font-bold uppercase mb-3 md:mb-4 text-sm md:text-base ${themeClasses.textDark}`}>Billing History</h4>
              <div className="space-y-2 md:space-y-3">
                {[{ date: 'Today', desc: 'Lead charge', amount: -5.00 }, { date: 'Yesterday', desc: 'Wallet Top Up', amount: 50.00 }, { date: 'Jan 15', desc: 'Lead charge', amount: -5.00 }].map((item, i) => (
                  <div key={i} className={`flex justify-between py-2 md:py-3 border-b ${themeClasses.borderLight} last:border-0`}>
                    <div>
                      <p className={`font-bold text-xs md:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item.desc}</p>
                      <p className={`text-[10px] ${themeClasses.textMuted}`}>{item.date}</p>
                    </div>
                    <span className={`font-black text-sm md:text-base ${item.amount > 0 ? 'text-green-500' : themeClasses.textDark}`}>{item.amount > 0 ? '+' : ''}R{item.amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className={`md:hidden fixed bottom-0 w-full px-2 py-2 flex justify-around items-center z-40 shadow-lg ${darkMode ? 'bg-slate-900 border-t border-white/10' : 'bg-white border-t border-slate-200'}`}>
        <button onClick={() => setActiveTab('dashboard')} className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'dashboard' ? 'text-orange-500' : themeClasses.textMuted}`}>
          <LayoutDashboard size={18} />
          <span className="text-[9px] font-bold uppercase">Home</span>
        </button>
        <button onClick={() => setActiveTab('inventory')} className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'inventory' ? 'text-orange-500' : themeClasses.textMuted}`}>
          <Package size={18} />
          <span className="text-[9px] font-bold uppercase">Stock</span>
        </button>
        <button onClick={() => setActiveTab('leads')} className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'leads' ? 'text-orange-500' : themeClasses.textMuted}`}>
          <History size={18} />
          <span className="text-[9px] font-bold uppercase">Leads</span>
        </button>
        <button onClick={() => setActiveTab('wallet')} className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'wallet' ? 'text-orange-500' : themeClasses.textMuted}`}>
          <Wallet size={18} />
          <span className="text-[9px] font-bold uppercase">Wallet</span>
        </button>
      </div>

      {/* Mobile Ad */}
      <MobileAd darkMode={darkMode} />

      {/* Add Part Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowAddModal(false)} />
          <div className={`relative w-full max-w-md rounded-2xl p-4 md:p-6 max-h-[90vh] overflow-y-auto shadow-xl ${darkMode ? 'bg-slate-900 border border-white/10' : 'bg-white border border-slate-200'}`}>
            <button onClick={() => setShowAddModal(false)} className="absolute top-3 right-3 text-slate-400">
              <X size={20} />
            </button>
            <h3 className={`text-lg md:text-xl font-black uppercase mb-4 ${themeClasses.textDark}`}>Add New Part</h3>
            <form className="space-y-3 md:space-y-4">
              <input type="text" placeholder="Part Name" className={`w-full rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm ${themeClasses.input}`} />
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <select className={`rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm ${themeClasses.input}`}>
                  <option>Category</option>
                  <option>Engines</option>
                  <option>Transmission</option>
                  <option>Body Parts</option>
                  <option>Lights</option>
                </select>
                <input type="number" placeholder="Price (R)" className={`rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm ${themeClasses.input}`} />
              </div>
              <select className={`w-full rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm ${themeClasses.input}`}>
                <option>Condition</option>
                <option>New</option>
                <option>Refurbished</option>
                <option>Used</option>
              </select>
              <button type="submit" className="w-full bg-orange-600 py-2.5 md:py-3 rounded-xl font-bold uppercase text-sm text-white hover:bg-orange-500 transition-colors">Add Part</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default YardPortal;

