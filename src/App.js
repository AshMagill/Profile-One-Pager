import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Contact from './pages/Contact';
import Video from './pages/Video';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/contact' element={<Contact />} exact />
        <Route path='/video' element={<Video />} exact />
      </Routes>
    </Router>
  );
}

export default App;
