import React, { useState } from 'react';
import { Send } from '@material-ui/icons'
import { mobile } from "../responsive";
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import './ImpCss.css'; 
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor:pointer;
  
`;
 const Form =styled.form`
  flex: 1;
  display:flex;
 `
const Newsletter = () => {
 const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };

  function sendEmail(e) {
    e.preventDefault();   
    console.log(process.env.REACT_APP_SERVICE_ID)
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target,process.env.REACT_APP_PUBLIC_API).then((result) => {
          window.location.reload()  
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
        <Form onSubmit={sendEmail}>
        <Input placeholder="Your email" name="from_email" onChange={validateEmail}/>
        <Button>
        <Send/>
        </Button>
         </Form>
        </InputContainer>
         <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
    </Container>
  )
}

export default Newsletter