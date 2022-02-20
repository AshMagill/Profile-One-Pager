import React, { useState } from 'react';
import { send } from 'emailjs-com';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  MessageInput,
} from './ContactElements';

const SERVICE_ID = 'service_pkfoe6o';
const TEMPLATE_ID = 'template_dw6qj0n';
const USER_ID = 'user_sV424rDcNiK8zdAEz0n3C';

const SignIn = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>proshops.co.nz</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Get in touch</FormH1>
              <FormLabel>Email</FormLabel>
              <FormInput
                type='email'
                name='user_email'
                placeholder='Email…'
                required
                onChange={handleChange}
              />
              <FormLabel>Message</FormLabel>
              <MessageInput
                type='text'
                name='user_message'
                placeholder='Message…'
                required
                onChange={handleChange}
              />
              <FormButton type='submit' onClick={onSubmit}>
                Message
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
