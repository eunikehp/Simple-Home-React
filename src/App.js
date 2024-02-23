// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsCatalogPage from './pages/ProductsCatalogPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='catalog' element={<ProductsCatalogPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
