import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import SimpleHomeLogo from './app/assets/img/logo.png'
import ProductsList from './features/products/ProductsList';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
            <NavbarBrand href='/'>
                <img src={SimpleHomeLogo} alt='simplehome logo' />
            </NavbarBrand>
        </Container>
    </Navbar>
    <ProductsList />
    </div>
  );
}

export default App;
