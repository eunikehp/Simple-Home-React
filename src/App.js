// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
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
          <Route path='about' element={<AboutPage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
