import { Container, Row, Col, Button } from 'reactstrap';
import Cover from '../app/assets/img/cover.jpg';
import SubHeader from '../components/SubHeader';
import Subscribe from '../components/Subscribe';

const HomePage = () => {
  return (
    <>
      <Container>
        <SubHeader current='Home' detail={true} />
        <Row>
        <img src={Cover} alt='simplehome cover' className='cover-image' />
        </Row>
      </Container>
      <Container fluid>
        <Subscribe />
      </Container>
    </>
    
  );
};

export default HomePage;