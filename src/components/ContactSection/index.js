import React from "react";
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
  Text,
} from "./ContactElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">proshops.co.nz</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Get in touch</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <MessageInput type="message" required />
              <FormButton type="submit">Send Message</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

//import React, { useState } from "react";
//import Button from "../ButtonElement";
//import Navbar from "../Navbar";
//import Sidebar from "../Sidebar";

//import {
//Container,
//FormWrap,
//FormContent,
//Form,
//FormH1,
//FormLabel,
//FormInput,
//FormButton,
//MessageInput,
//} from "./ContactElements";

//const Contact = () => {
//const [isOpen, SetIsOpen] = useState(false);

//const toggle = () => {
//SetIsOpen(!isOpen);
//};
//return (
//<>
//<Sidebar isOpen={isOpen} toggle={toggle} />
//<Navbar toggle={toggle} />
//<Container>
//<FormWrap>
//<FormContent>
//<Form action="#">
//<FormH1>Get In Touch</FormH1>
//<FormLabel htmlFor="for">Name</FormLabel>
//<FormInput type="email" required />
//<FormLabel htmlFor="for">Email</FormLabel>
//<FormInput type="password" required />r{" "}
//<FormLabel htmlFor="for">Message</FormLabel>
//<MessageInput type="message" required />
//<FormButton type="submit">Send</FormButton>
//<FormButton type="reset">Reset</FormButton>
//</Form>
//</FormContent>
//</FormWrap>
//</Container>
//</>
//);
//};

//export default Contact;
