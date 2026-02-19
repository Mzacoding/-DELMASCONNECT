import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Package, X, Check, Image, Tag, DollarSign, Layers, AlertCircle } from 'lucide-react';

const InventoryManager = ({ inventory = [], onUpdateInventory, darkMode = true }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  // Default inventory if empty
  const defaultInventory = [
    { id: 1, name: 'Toyota Hilux 2.7 Engine', category: 'Engines', price: 8500, condition: 'Used', quantity: 1, image: null },
    { id: 2, name: 'Ford Ranger Doors (Front Left)', category: 'Body Parts', price: 1200, condition: 'Used', quantity: 2, image: null },
    { id: 3, name: 'Honda Civic Transmission', category: 'Transmission', price: 4500, condition: 'Refurbished', quantity: 1, image: null },
    { id: 4, name: 'Nissan NP200 Headlight', category: 'Lights', price: 650, condition: 'Used', quantity: 3, image: null },
    { id: 5, name: 'VW Golf Alternator', category: 'Electrical', price: 1100, condition: 'Used', quantity: 2, image: null },
  ];

  const items = inventory.length > 0 ? inventory : defaultInventory;

  // Filter items
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['all', ...new Set(items.map(item => item.category))];

  const themeClasses = darkMode 
    ? {
        bg: 'bg-slate-900',
        card: 'bg-white/5 border-white/10',
        input: 'bg-slate-800 border-slate-700',
        text: 'text-white',
        subtext: 'text-slate-400',
        accent: 'text-orange-400',
        button: 'bg-orange-600 hover:bg-orange-500',
        danger: 'bg-red-600 hover:bg-red-500'
      }
    : {
        bg: 'bg-slate-50',
        card: 'bg-white border-slate-200',
        input: 'bg-white border-slate-300',
        text: 'text-slate-900',
        subtext: 'text-slate-600',
        accent: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        danger: 'bg-red-600 hover:bg-red-700'
      };

  const handleDelete = (id) => {
    const newInventory = items.filter(item => item.id !== id);
    if (onUpdateInventory) onUpdateInventory(newInventory);
    setShowDeleteConfirm(null);
  };

  const getConditionColor = (condition) => {
    switch(condition?.toLowerCase()) {
      case 'new': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'refurbished': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'used': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className={`${themeClasses.bg} rounded-2xl border ${themeClasses.card} overflow-hidden`}>
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 p-2 rounded-xl">
              <Package size={18} className="text-white" />
            </div>
            <div>
              <h3 className={`text-sm font-black uppercase ${themeClasses.text}`}>Inventory</h3>
              <p className={`text-[10px] ${themeClasses.subtext}`}>{items.length} parts listed</p>
            </div>
          </div>
          
          <button 
            onClick={() => setShowAddModal(true)}
            className={`${themeClasses.button} text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 transition-colors`}
          >
            <Plus size={14} />
            Add Part
          </button>
        </div>

        {/* Search & Filter */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
            <input
              type="text"
              placeholder="Search parts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full ${themeClasses.input} rounded-xl pl-9 pr-4 py-2 text-xs ${themeClasses.text} placeholder:text-slate-500 focus:outline-none focus:border-orange-500`}
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className={`${themeClasses.input} rounded-xl px-4 py-2 text-xs ${themeClasses.text} focus:outline-none`}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className={`${themeClasses.card} border rounded-xl p-3 hover:border-orange-500/30 transition-colors group`}
          >
            {/* Item Image Placeholder */}
            <div className={`aspect-video ${darkMode ? 'bg-slate-800' : 'bg-slate-100'} rounded-lg mb-3 flex items-center justify-center relative overflow-hidden`}>
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              ) : (
                <Package size={24} className="text-slate-600" />
              )}
              {/* Quick Actions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button 
                  onClick={() => setEditingItem(item)}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
                >
                  <Edit2 size={14} className="text-white" />
                </button>
                <button 
                  onClick={() => setShowDeleteConfirm(item.id)}
                  className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/30"
                >
                  <Trash2 size={14} className="text-red-400" />
                </button>
              </div>
            </div>

            {/* Item Details */}
            <div>
              <h4 className={`text-xs font-bold ${themeClasses.text} truncate`}>{item.name}</h4>
              <div className="flex items-center gap-2 mt-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getConditionColor(item.condition)}`}>
                  {item.condition}
                </span>
                <span className={`text-[10px] ${themeClasses.subtext}`}>
                  Qty: {item.quantity}
                </span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className={`text-sm font-black ${themeClasses.accent}`}>
                  R {item.price?.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Delete Confirmation */}
            {showDeleteConfirm === item.id && (
              <div className="absolute inset-0 bg-black/80 rounded-xl flex items-center justify-center p-3">
                <div className="text-center">
                  <AlertCircle size={24} className="text-red-400 mx-auto mb-2" />
                  <p className="text-white text-[10px] font-bold mb-2">Delete this item?</p>
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-lg"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(null)}
                      className="px-3 py-1 bg-slate-600 text-white text-[10px] font-bold rounded-lg"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="col-span-full text-center py-8">
            <Package size={40} className="text-slate-600 mx-auto mb-3" />
            <p className={`text-sm ${themeClasses.subtext}`}>No parts found</p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingItem) && (
        <InventoryModal
          item={editingItem}
          onClose={() => {
            setShowAddModal(false);
            setEditingItem(null);
          }}
          onSave={(data) => {
            if (editingItem) {
              // Update existing
              const newInventory = items.map(i => i.id === editingItem.id ? { ...i, ...data } : i);
              if (onUpdateInventory) onUpdateInventory(newInventory);
            } else {
              // Add new
              const newItem = { ...data, id: Date.now() };
              if (onUpdateInventory) onUpdateInventory([...items, newItem]);
              else {
                // Just show in UI (demo mode)
              }
            }
            setShowAddModal(false);
            setEditingItem(null);
          }}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

// Add/Edit Modal Component
const InventoryModal = ({ item, onClose, onSave, darkMode }) => {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    category: item?.category || 'Body Parts',
    price: item?.price || '',
    condition: item?.condition || 'Used',
    quantity: item?.quantity || 1,
    description: item?.description || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: parseFloat(formData.price) || 0,
      quantity: parseInt(formData.quantity) || 1
    });
  };

  const themeClasses = darkMode 
    ? {
        input: 'bg-slate-800 border-slate-700 text-white',
        label: 'text-slate-400'
      }
    : {
        input: 'bg-white border-slate-300 text-slate-900',
        label: 'text-slate-600'
      };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className={`relative w-full max-w-md ${darkMode ? 'bg-slate-900' : 'bg-white'} rounded-2xl border ${darkMode ? 'border-slate-700' : 'border-slate-200'} p-6`}>
        <button onClick={onClose} className="absolute top-4 right-4">
          <X size={18} className="text-slate-500 hover:text-white" />
        </button>

        <h3 className={`text-lg font-black uppercase mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          {item ? 'Edit Part' : 'Add New Part'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-[10px] font-bold uppercase mb-1 ${themeClasses.label}`}>Part Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full ${themeClasses.input} rounded-lg px-3 py-2 text-sm border`}
              placeholder="e.g. Toyota Hilux Engine"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`block text-[10px] font-bold uppercase mb-1 ${themeClasses.label}`}>Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className={`w-full ${themeClasses.input} rounded-lg px-3 py-2 text-sm border`}
              >
                <option>Body Parts</option>
                <option>Engines</option>
                <option>Transmission</option>
                <option>Electrical</option>
                <option>Interior</option>
                <option>Lights</option>
                <option>Wheels</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className={`block text-[10px] font-bold uppercase mb-1 ${themeClasses.label}`}>Condition</label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({...formData, condition: e.target.value})}
                className={`w-full ${themeClasses.input} rounded-lg px-3 py-2 text-sm border`}
              >
                <option>New</option>
                <option>Refurbished</option>
                <option>Used</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`block text-[10px] font-bold uppercase mb-1 ${themeClasses.label}`}>Price (R)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className={`w-full ${themeClasses.input} rounded-lg px-3 py-2 text-sm border`}
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className={`block text-[10px] font-bold uppercase mb-1 ${themeClasses.label}`}>Quantity</label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                className={`w-full ${themeClasses.input} rounded-lg px-3 py-2 text-sm border`}
                min="1"
              />
            </div>
          </div>

          <div>
            <label className={`block text-[10px] font-bold uppercase mb-1 ${themeClasses.label}`}>Description (Optional)</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className={`w-full ${themeClasses.input} rounded-lg px-3 py-2 text-sm border h-20 resize-none`}
              placeholder="Add details about the part..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase py-3 rounded-xl text-sm"
          >
            {item ? 'Update Part' : 'Add Part'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InventoryManager;

