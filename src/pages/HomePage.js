import { Container, Row, Col, Button } from 'reactstrap';
import Cover from '../app/assets/img/cover.jpg';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
  return (
    <Container>
      <SubHeader current='Home' detail={true} />
      <Row>
      <img src={Cover} alt='simplehome cover' className='cover-image' />
      </Row>
      <Row>
        <Col className='subscribe-col'>
          <h3>Subscribe to Simple Home newsletter</h3>
          <p>Be the first to get update the latest news, special offers, new products, and other promotions</p>
          <input type='text' placeholder='Enter your email address' />
          <Button>Subscribe</Button>
          <p>Notif</p>
        </Col>   
      </Row>
    </Container>
  );
};

export default HomePage;