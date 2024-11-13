import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useAuthStore } from './store/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Router>
      <div className="flex h-screen bg-discord-dark text-white">
        <Sidebar />
        <Routes>
          <Route path="/channels/:serverId/:channelId" element={<Chat />} />
          <Route path="/" element={
            <div className="flex-1 flex items-center justify-center">
              <h1 className="text-2xl text-gray-400">Select a channel to start chatting</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;