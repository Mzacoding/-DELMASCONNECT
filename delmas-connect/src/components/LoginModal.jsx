import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, MapPin, Eye, EyeOff, Building2, CheckCircle } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    yardName: '',
    location: 'Delmas'
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Min 6 characters';
    
    if (isRegisterMode) {
      if (!formData.name) newErrors.name = 'Business name is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.yardName) newErrors.yardName = 'Yard name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const user = {
      email: formData.email,
      name: isRegisterMode ? formData.name : formData.yardName || 'Highveld Breakers',
      yardName: formData.yardName || 'Highveld Breakers',
      phone: formData.phone || '+27 82 123 4567',
      location: formData.location
    };
    
    setIsLoading(false);
    
    if (isRegisterMode) {
      setSuccess('Account created successfully!');
      setTimeout(() => {
        onLogin(user);
        onClose();
      }, 1000);
    } else {
      onLogin(user);
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-[#12161d] border border-slate-800 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8 text-center flex-shrink-0">
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="bg-white/20 p-3 md:p-4 rounded-2xl">
              <Building2 size={28} className="text-white" style={{ width: 28, height: 28 }} />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white uppercase italic">
            {isRegisterMode ? 'Join DelmasConnect' : 'Partner Portal'}
          </h2>
          <p className="text-blue-200 text-xs md:text-sm mt-1">
            {isRegisterMode ? 'Create your seller account' : 'Sign in to manage your yard'}
          </p>
        </div>

        <button onClick={onClose} className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <X size={18} style={{ width: 18, height: 18 }} className="text-white" />
        </button>

        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
          {success && (
            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-3 flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
              <span className="text-green-400 text-xs md:text-sm font-bold">{success}</span>
            </div>
          )}

          {isRegisterMode && (
            <>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 md:mb-2">Business Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={14} style={{ width: 14, height: 14 }} />
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-4 py-2.5 md:py-3 pl-9 md:pl-10 text-sm focus:outline-none focus:border-blue-500 text-white" placeholder="Your Name" />
                </div>
                {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 md:mb-2">Yard Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={14} style={{ width: 14, height: 14 }} />
                  <input type="text" name="yardName" value={formData.yardName} onChange={handleChange}
                    className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-4 py-2.5 md:py-3 pl-9 md:pl-10 text-sm focus:outline-none focus:border-blue-500 text-white" placeholder="e.g. Total Spares Delmas" />
                </div>
                {errors.yardName && <p className="text-red-400 text-[10px] mt-1">{errors.yardName}</p>}
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 md:mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={14} style={{ width: 14, height: 14 }} />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-4 py-2.5 md:py-3 pl-9 md:pl-10 text-sm focus:outline-none focus:border-blue-500 text-white" placeholder="+27 82 123 4567" />
                </div>
                {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
              </div>
            </>
          )}

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 md:mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={14} style={{ width: 14, height: 14 }} />
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-4 py-2.5 md:py-3 pl-9 md:pl-10 text-sm focus:outline-none focus:border-blue-500 text-white" placeholder="you@yard.com" />
            </div>
            {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 md:mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={14} style={{ width: 14, height: 14 }} />
              <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange}
                className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-4 py-2.5 md:py-3 pl-9 md:pl-10 text-sm focus:outline-none focus:border-blue-500 text-white" placeholder="••••••••" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400">
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-[10px] mt-1">{errors.password}</p>}
          </div>

          {isRegisterMode && (
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 md:mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={14} style={{ width: 14, height: 14 }} />
                <select name="location" value={formData.location} onChange={handleChange}
                  className="w-full bg-[#0d1117] border border-slate-800 rounded-xl px-4 py-2.5 md:py-3 pl-9 md:pl-10 text-sm focus:outline-none focus:border-blue-500 text-white">
                  <option value="Delmas">Delmas</option>
                  <option value="Witbank">Witbank</option>
                  <option value="Middleburg">Middleburg</option>
                  <option value="Benoni">Benoni</option>
                  <option value="Springs">Springs</option>
                </select>
              </div>
            </div>
          )}

          <button type="submit" disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 md:py-3 rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                <span className="text-xs md:text-sm">Processing...</span>
              </span>
            ) : <span className="text-sm">{isRegisterMode ? 'Create Account' : 'Sign In'}</span>}
          </button>

          <div className="text-center pt-1 md:pt-2">
            <button type="button" onClick={() => { setIsRegisterMode(!isRegisterMode); setErrors({}); setSuccess(''); }}
              className="text-slate-500 hover:text-blue-400 text-xs md:text-sm font-medium transition-colors">
              {isRegisterMode ? <>Already have an account? <span className="text-blue-400 font-bold">Sign In</span></> : <>Don't have an account? <span className="text-blue-400 font-bold">Register</span></>}
            </button>
          </div>
        </form>

        {isRegisterMode && (
          <div className="px-4 md:px-6 pb-4 md:pb-6">
            <div className="bg-[#0d1117] rounded-xl p-3 md:p-4 border border-slate-800">
              <p className="text-[10px] font-black uppercase text-slate-500 mb-2 md:mb-3">Seller Benefits</p>
              <ul className="space-y-1.5 md:space-y-2">
                <li className="flex items-center gap-2 text-xs md:text-sm text-slate-400"><CheckCircle size={12} className="text-blue-500 flex-shrink-0" /><span>List unlimited parts inventory</span></li>
                <li className="flex items-center gap-2 text-xs md:text-sm text-slate-400"><CheckCircle size={12} className="text-blue-500 flex-shrink-0" /><span>Track every customer connection</span></li>
                <li className="flex items-center gap-2 text-xs md:text-sm text-slate-400"><CheckCircle size={12} className="text-blue-500 flex-shrink-0" /><span>R50 free credits for new yards</span></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;

