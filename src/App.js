import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <h2>Hello, this is my portfolio!</h2>
      <div className="content"><AppContent /></div>
      <div className="footer"><AppFooter />
      </div>
    </div>
  );
}

export default App;
