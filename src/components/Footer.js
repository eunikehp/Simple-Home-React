import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className= 'site-footer'>
      <Container>
        <Row className='text-center'>
          <Col  sm='6' md='6' lg='4' >
            <h5>Location</h5>
            <p>
              Bronkhorststraat 30
              <br />
              2718 AT Den Haag, The Netherlands
            </p>
            <h5>Opening Hours</h5>
            <p>
              Monday - Saturday 10.00-18.00
              <br />
              Sunday 12.00-18.00
            </p>
          </Col>
          <Col sm='6' md='6' lg='4' className='text-center'>
            <h5>Contact us:</h5>
            <a
                role='button'
                className='btn btn-link'
                href='tel:+31120334445'
            >
                <i className='fa fa-phone' /> (+31) 120 334 445
            </a>
            <br />
            <a
                role='button'
                className='btn btn-link'
                href='mailto:hello@simplehome.nl'
            >
                <i className='fa fa-envelope-o' /> hello@simplehome.nl
            </a>
            <h5>Follow us:</h5>
            <a
                className='btn btn-social-icon btn-instagram'
                href='http://instagram.com/'
            >
                <i className='fa fa-instagram' />
            </a>{' '}
            <a
                className='btn btn-social-icon btn-facebook'
                href='http://www.facebook.com/'
            >
                <i className='fa fa-facebook' />
            </a>{' '}
            <a
                className='btn btn-social-icon btn-twitter'
                href='http://twitter.com/'
            >
                <i className='fa fa-twitter' />
            </a>{' '}
            <a
                className='btn btn-social-icon btn-google'
                href='http://youtube.com/'
            >
                <i className='fa fa-youtube' />
            </a>
          </Col>
          <Col  sm='12' md='6' lg='4' >
              <ul className='list-unstyled text-center'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/catalog'>Catalog</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
          </Col>
          <p className='text-center'>2024 Simple Home. Site by Eunike Hedriani Pardede</p>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;