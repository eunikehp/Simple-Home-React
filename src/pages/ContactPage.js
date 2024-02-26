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
            Do you rather wish to reach our customer service through phone? Please call (+31) 120 334 445 on weekdays.
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