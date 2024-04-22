import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import Credits from './Credits';
import Menu from './Menu';
import Level from './Level';
import Main from './Main';
import Favorites from './Favorites';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/level" element={<Level />} />
      <Route path="/main/:level" element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
