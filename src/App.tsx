import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QRGenerator from './components/QRGenerator';
import Menu from './components/Menu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<QRGenerator />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;