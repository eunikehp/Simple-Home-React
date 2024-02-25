import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';




const ContactPage = () => {
  return (
    <Container>
      <SubHeader current='Contact'/>
      <Row>
        <Col className='text-center'>
          <div>
            <h3>Share your thoughts</h3>
            <p>
            If you have a specific question about a problem or a return, you can contact us via the contact form.
            <br />
            The response time for answering questions is currently increasing due to the influx of questions. 
            <br />
            It may take several days to a week before we can give you an answer.
            <br />
            Thank you in advance for your understanding and patience.
            </p>
          </div>
          
        </Col>
      </Row>
      <Row>
        <h3 className='text-center'>Contact Form</h3>
        <hr />
      </Row>
      <Row>
        <Col md='10'>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;