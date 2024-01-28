// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from './Pages/Home';
import Authentiction from './Pages/Authentication';
import ProductsComponent from './Pages/Products';
import "./index.css"


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Authentiction />} />
      <Route path="/products" element={<ProductsComponent />} />
      </Routes>
  
    </Router>
  );
};
export default App;
