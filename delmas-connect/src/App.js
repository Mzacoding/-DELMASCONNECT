import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Marketplace from './components/Marketplace';
import YardPortal from './components/YardPortal';
import LoginModal from './components/LoginModal';

const App = () => {
  // App State: 'landing', 'marketplace', or 'portal'
  const [view, setView] = useState('landing');
  
  // Theme State: true = dark, false = light
  const [darkMode, setDarkMode] = useState(false);
  
  // Auth State
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Fair Play Lead System State
  const [creditBalance] = useState(50.00);

  // Inventory State
  const [inventory, setInventory] = useState([
    { id: 1, name: 'VW Polo Gearbox (2016)', category: 'Transmission', price: 3500, condition: 'Used', quantity: 1 },
    { id: 2, name: 'Toyota Hilux GD6 Engine', category: 'Engines', price: 12000, condition: 'Used', quantity: 1 },
    { id: 3, name: 'Golf 7 Headlight R', category: 'Lights', price: 850, condition: 'Used', quantity: 2 },
    { id: 4, name: 'Ford Ranger Tailgate', category: 'Body Parts', price: 1500, condition: 'Used', quantity: 1 },
  ]);

  // Handle Login
  const handleLogin = (userData) => {
    setUser(userData);
    setView('portal');
  };

  const handleLogout = () => {
    setUser(null);
    setView('marketplace');
  };

  // Handle navigation from Landing Page
  const handleLandingSearch = (term) => {
    setView('marketplace');
  };

  const handleListYard = () => {
    setShowLoginModal(true);
  };

  const handleLearnMore = () => {
    setShowLoginModal(true);
  };

  // Handle opening Yard Portal (show login if not logged in)
  const handleOpenYardPortal = () => {
    if (user) {
      setView('portal');
    } else {
      setShowLoginModal(true);
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Render Landing Page
  if (view === 'landing') {
    return (
      <>
        <LandingPage 
          onSearch={handleLandingSearch}
          onListYard={handleListYard}
          onLearnMore={handleLearnMore}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />
        <LoginModal 
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          darkMode={darkMode}
        />
      </>
    );
  }

  // Render Marketplace
  if (view === 'marketplace') {
    return (
      <>
        <Marketplace 
          onBackToLanding={() => setView('landing')}
          onOpenPortal={handleOpenYardPortal}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />
        <LoginModal 
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          darkMode={darkMode}
        />
      </>
    );
  }

  // Render Yard Portal
  return (
    <YardPortal 
      user={user}
      onLogout={handleLogout}
      creditBalance={creditBalance}
      inventory={inventory}
      onUpdateInventory={setInventory}
      darkMode={darkMode}
      onToggleTheme={toggleTheme}
    />
  );
};

export default App;

