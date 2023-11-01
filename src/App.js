import React from 'react';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Media from './components/media';
import About from './components/about';
import Home from './components/home';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const App = () => {
  return (
    <>
      <div className="App">
        <AppHeader />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/media" element={<Media />}></Route>
        </Routes>
        {/* <RouterProvider router={router}/> */}
        <div className="footer"><AppFooter /></div>
      </div>
    </>
  );
}

export default App;
