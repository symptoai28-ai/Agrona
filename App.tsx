
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import FullPageChat from './components/chat/FullPageChat';

const App: React.FC = () => {
  const [isFullPageChat, setIsFullPageChat] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsFullPageChat(params.get('chat') === 'full');
  }, []);

  return (
    <div className="font-sans">
      {isFullPageChat ? <FullPageChat /> : <HomePage />}
    </div>
  );
};

export default App;
