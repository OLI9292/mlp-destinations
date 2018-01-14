import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../Library/colors';
import { media } from '../../Library/breakpoints';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }
    
  render() {
    const form = (() => {
      return <Form id="form">
        <InputHeader>NAME:</InputHeader>
        <Input type='text' id="form-name"
          value={this.state.name || ''}
          onChange={(e) => this.setState({ name: e.target.value })} />

        <InputHeader>CONTACT NUMBER:</InputHeader>
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
