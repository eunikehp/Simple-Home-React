import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
  const handleSubmit = ( values, {resetForm} ) => {
    console.log('form values', values);
    console.log('in JSON format', JSON.stringify(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor='firstName' md='2'>
            First name
          </Label>
          <Col md='10'>
            <Field 
                name='firstName'
                placeholder='Enter first name...'
                className='form-control'/>
            <ErrorMessage name='firstName'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='lastName' md='2'>
            Last name
          </Label>
          <Col md='10'>
            <Field 
                name='lastName'
                placeholder='Enter last name...'
                className='form-control'/>
            <ErrorMessage name='lastName'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md='2'>
            Email address
          </Label>
          <Col md='10'>
            <Field 
              name='email'
              placeholder='Email address...'
              className='form-control'/>
            <ErrorMessage name='email'>
              {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='phone' md='2'>
            Phone
          </Label>
          <Col md='10'>
            <Field 
              name='phone'
              placeholder='Enter phone number...'
              className='form-control'/>
            <ErrorMessage name='phone'>
              {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='message' md='2'>
            Your message
          </Label>
          <Col md='10'>
            <Field 
              name='message'
              placeholder='Enter message...'
              as='textarea'
              rows='12'
              className='form-control'/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button 
              type='submit' 
              style={{ backgroundColor: "#463F3A" }}
            >
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  )
};

export default ContactForm;