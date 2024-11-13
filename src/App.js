import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title="My Electron React App" />
      <main>
        <p>Welcome to my Electron-React application!</p>
      </main>
    </div>
  );
}

export default App;
