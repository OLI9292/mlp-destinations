import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../Library/colors';
import { media } from '../../Library/breakpoints';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';

class Contact extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
    
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
        <Input extraMargin type='text' />

        <InputHeader>BRIEF MESSAGE :</InputHeader>
        <Textarea />

        <Submit type='submit' value='SEND' />    
      </Form>
    })();

    return (
      <div style={{backgroundColor:colors.beige}}>
        <FrontCover darkened={0.5} image={'contact.jpg'} />
        {form}
        <Footer />
      </div>
    );
  }
}

const Form = styled.form`
  background-color: ${colors.green};
  margin: 0 auto;
  margin-bottom: 120px;
  margin-top: -150px;
  padding: 40px 0px 40px 0px;
  position: relative;
  text-align: center;
  width: 550px;
  z-index: 100;

  ${media.phone`
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 10%;
  `}     
`

const Input = styled.input`
  background-color: ${colors.beige};
  letter-spacing: 2px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: CardoItalic;
  outline: none;
  border: none;
  height: 40px;
  font-size: 1.05em;
  margin-bottom: ${props => props.extraMargin ? '25px' : '10px'};
`

const Submit = styled.input`
  position: absolute;
  bottom: -100px;
  width: 100%;
  left: 0;
  height: 50px;
  line-height: 50px;
  border: none;
  margin-bottom: 30px;
  background-color: ${colors.red};
  color: white;
  font-size: 1.1em;
  font-family: ATSackersGothicMedium;
  letter-spacing: 2px;
  cursor: pointer;
  ${media.phone`
    bottom: -50px;
    margin-bottom: 0px;
  `};  
`

const Textarea = styled.textarea`
  background-color: ${colors.beige};
  width: 80%;
  margin: 0 auto;
  font-family: CardoItalic;
  height: 300px;
  font-size: 1.05em;
  outline: none;
  letter-spacing: 2px;
  border: none;
  padding: 20px 30px 20px 30px;
  box-sizing: border-box;
  ${media.phone`
    margin-bottom: 30px;
  `};
`

const InputHeader = styled.p`
  color: white;
  font-family: EBGARAMOND12REGULAR;
  font-size: 0.75em;
  letter-spacing: 2px;
`

export default Contact;
