import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import SimpleHomeLogo from '../app/assets/img/logo.png';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar light sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href='/' >
          <img src={SimpleHomeLogo} alt='simplehome logo' className='float-start' />
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
      <Collapse navbar isOpen={menuOpen}>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <i className='fa fa-lg' /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/about'>
              <i className='fa fa-lg' /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/shop'>
              <i className='fa fa-lg' /> Shop
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <i className='fa fa-lg' /> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default Header;