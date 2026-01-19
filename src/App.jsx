import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [activeGroup, setActiveGroup] = useState(null);

  const handleLogin = () => {
    setCurrentScreen('dashboard');
  };

  const handleOpenChat = (groupName) => {
    setActiveGroup(groupName);
    setCurrentScreen('chat');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    setActiveGroup(null);
  };

  return (
    <div className="app-container">


      {currentScreen === 'login' && (
        <Login onLogin={handleLogin} />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard onOpenChat={handleOpenChat} />
      )}

      {currentScreen === 'chat' && (
        <Chat groupName={activeGroup} onBack={handleBackToDashboard} />
      )}
    </div>
  );
}

export default App;
