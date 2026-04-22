import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './pages/product';
import GhostExplorer from './pages/ghostexplorer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pages/product" element={<ProductPage />} />
        <Route path="/"/>
        <Route path="/ghost-explorer" element={<GhostExplorer />} />
      </Routes>
    </Router>
  );
};

export default App;
