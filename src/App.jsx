import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import Anamnese from './components/Anamnese';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/anamnese" element={<Anamnese />} />
          <Route path="/login" element={<div className="min-h-screen bg-[#0A192F] text-white flex items-center justify-center"><h1 className="text-2xl">Página de Login em desenvolvimento</h1></div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
