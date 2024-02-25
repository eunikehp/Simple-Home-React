import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        message: ''
      }}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor='firstname' md='2'>
            First name
          </Label>
          <Col md='10'>
          </Col>
          <Field 
              name='firstName'
              placeholder='Enter first name...'
              className='form-control'/>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='lastname' md='2'>
            Last name
          </Label>
          <Col md='10'>
          </Col>
          <Field 
              name='lastName'
              placeholder='Enter last name...'
              className='form-control'/>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md='2'>
            Email address
          </Label>
          <Col md='10'>
          </Col>
          <Field 
              name='email'
              placeholder='Email address...'
              className='form-control'/>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='message' md='2'>
            Your message
          </Label>
          <Col md='10'>
          </Col>
          <Field 
              name='message'
              placeholder='Enter message...'
              as='textarea'
              rows='12'
              className='form-control'/>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button type='submit' color='primary'>
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  )
};

export default ContactForm;