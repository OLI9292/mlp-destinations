import React, { Component } from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase';

import colors from '../../Library/colors';
import { media } from '../../Library/breakpoints';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';

const firebaseConfig = {
  apiKey: 'AIzaSyDU5km1KpZIcDjt-lJAMianskQgPDYGT8o',
  authDomain: 'mlp-destinations.firebaseapp.com',
  databaseURL: 'https://mlp-destinations.firebaseio.com',
  storageBucket: 'mlp-destinations.appspot.com'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const saveForm = data => {
  if (!data.name) { return; }
  const date = new Date();
  
  const object = {
    name: data.name || '',
    number: data.number || '',
    destination: data.destination || '',
    people: data.people || '',
    message: data.message || '',
    date: date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  };

  firebaseApp.database().ref().child(Date.now()).set(object);
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  formError() {
    if (!this.state.name)   { return 'Please enter your name.'; }
    if (!this.state.number) { return 'Please enter a contact number.'; }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formError = this.formError();

    if (formError) {
      this.setState({ formMessage: formError, formError: true });
    } else {
      const thankYou = 'Thank you.  I will be in touch soon.';
      this.setState({ formMessage: thankYou, formError: false, submitted: true });
      window.sendMail(e);
      saveForm(this.state);      
    }
  }
    
  render() {
    const form = (() => {
      return <Form id="form" onSubmit={(e) => this.handleSubmit(e)}>
        <InputHeader>NAME :</InputHeader>
        <Input type='text' id="form-name"
          value={this.state.name || ''}
          onChange={(e) => this.setState({ name: e.target.value })} />

        <InputHeader>CONTACT NUMBER :</InputHeader>
        <Input type='text' id="form-number"
          value={this.state.number || ''}
          onChange={(e) => this.setState({ number: e.target.value })} />

        <InputHeader>WHERE DO YOU WANT TO TRAVEL ?</InputHeader>
        <Input type='text' id="form-destination"
          value={this.state.destination || ''}
          onChange={(e) => this.setState({ destination: e.target.value })} />

        <InputHeader>HOW MANY PEOPLE ?</InputHeader>
        <Input type='text' id="form-people"
          value={this.state.people || ''}
          onChange={(e) => this.setState({ people: e.target.value })} />

        <InputHeader>BRIEF MESSAGE :</InputHeader>
        <Textarea type='text' id="form-message"
          value={this.state.message || ''}
          onChange={(e) => this.setState({ message: e.target.value })} />

        <Submit type='submit' value='SEND' />    
      </Form>
    })();

    return (
      <div style={{backgroundColor:colors.beige}}>
        <FrontCover darkened={0.5} image={'contact/monk.jpg'} />
        
        {form}

        <FormMessage
          isVisible={this.state.formMessage}
          isError={this.state.formError}
          disable={this.state.submitted}>
          {this.state.formMessage || 'blank'}
        </FormMessage>
        
        <Footer />
      </div>
    );
  }
}

const FormMessage = styled.p`
  pointer-events: ${props => props.disable ? 'none' : 'auto'};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  color: ${props => props.isError ? colors.red : 'black'};
  text-align: center;
  margin-bottom: 60px;
  font-family: CardoItalic;
  letter-spacing: 2px;
  ${media.phone`
    margin-top: 230px;
    margin-bottom: 35px;
  `}; 
`

const Form = styled.form`
  background-color: ${colors.green};
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: -150px;
  padding: 40px 0px 40px 0px;
  position: relative;
  text-align: center;
  width: 550px;
  z-index: 101;

  ${media.phone`
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 14%;
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
  border-radius: 0px;
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
  border: 0;
  -webkit-appearance: none;
  outline: 0;
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
