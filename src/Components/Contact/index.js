import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../Library/colors';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';

class Contact extends Component {
  render() {
    const form = (() => {
      return <Form>
        <InputHeader>NAME:</InputHeader>
        <Input type='text' />

        <InputHeader>CONTACT NUMBER:</InputHeader>
        <Input type='text' />

        <InputHeader>WHERE DO YOU WANT TO TRAVEL ?</InputHeader>
        <Input type='text' />

        <InputHeader>WHEN DO YOU WANT TO GO ?</InputHeader>
        <Input type='text' />

        <InputHeader>HOW MANY PEOPLE ?</InputHeader>
        <Input type='text' />

        <InputHeader>BRIEF MESSAGE</InputHeader>
        <Textarea />        
      </Form>
    })();

    return (
      <div style={{backgroundColor:colors.beige}}>
        <FrontCover
          darkened={0.55}
          image={'contact.jpg'} />
        {form}
        <Footer />
      </div>
    );
  }
}

const Form = styled.form`
  background-color: ${colors.green};
  width: 550px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: -200px;
  padding: 40px 0px 40px 0px;
  z-index: 100;
`

const Input = styled.input`
  background-color: ${colors.beige};
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: CardoItalic;
  outline: none;
  border: none;
  height: 40px;
  font-size: 1.2em;
  margin-bottom: 10px;
`

const Textarea = styled.textarea`
  background-color: ${colors.beige};
  width: 80%;
  margin: 0 auto;
  font-family: CardoItalic;
  height: 300px;
  font-size: 1.2em;
  outline: none;
  border: none;
  padding: 10px;
  box-sizing: border-box;
`

const InputHeader = styled.p`
  color: white;
  font-family: EBGARAMOND12REGULAR;
  font-size: 0.8em;
  letter-spacing: 2px;
`

export default Contact;
