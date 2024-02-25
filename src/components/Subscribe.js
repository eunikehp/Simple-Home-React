import { Container, Section, Col, Row, Button } from 'reactstrap';


const Subscribe = () => {
  return (
    <Container>
      <Row className='subscribe-col'>
          <h3>Subscribe to Simple Home newsletter</h3>
          <p>Be the first to get update the latest news, special offers, new products, and other promotions</p>
          <input type='text' placeholder='Enter your email address' />
          <Button>Subscribe</Button>
      </Row>   
    </Container>
  );
};

export default Subscribe;
