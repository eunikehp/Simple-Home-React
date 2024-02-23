import React from 'react';
import './App.css';
import ProductsCatalogPage from './pages/ProductsCatalogPage';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <ProductsCatalogPage />
      <Footer />
    </div>
  );
}

export default App;
