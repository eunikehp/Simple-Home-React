import { Container, Col, Row } from 'reactstrap';


const Footer = () => {
  return (
    <footer className= 'site-footer'>
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm='2'>
            <h5>this will be site navigation!</h5>
          </Col>
          <Col xs='6' sm='3' className='text-center'>
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
          <Col sm='4' className='text-center'>
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
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;