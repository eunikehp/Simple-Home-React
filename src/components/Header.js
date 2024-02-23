import { Navbar, NavbarBrand } from "reactstrap";
import SimpleHomeLogo from '../app/assets/img/logo.png';

const Header = () => {
  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
      <NavbarBrand href='/'>
          <img src={SimpleHomeLogo} alt='simplehome logo' />
      </NavbarBrand>
    </Navbar>
  )
};

export default Header;