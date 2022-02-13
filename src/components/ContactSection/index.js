import React from 'react';
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

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>proshops.co.nz</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Get in touch</FormH1>
              <FormLabel>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel>Message</FormLabel>
              <MessageInput type='message' required />
              <FormButton type='submit'>Send Message</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
