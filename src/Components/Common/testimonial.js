import React, { Component } from 'react';
import styled from 'styled-components';

import lantern from '../../Library/Images/lantern.jpg';
import { media } from '../../Library/breakpoints';

class Testimonial extends Component {
  render() {
    return (
      <Container>
        <TestimonialParagraph>
          {this.props.text}
          <br /><br />
          <span style={{fontFamily:'CardoItalic',fontSize:'1.25em'}}>
            {this.props.from}
          </span>
        </TestimonialParagraph>
      </Container>
    );
  }
}

const Container = styled.div`
  background: url(${lantern}) no-repeat center center;
  background-size: 100% auto;
  color: white;
  text-align: center;
  display: flex;
  font-family: ATSackersGothicMedium;
  height: 400px;
  margin-top: 150px;
  width: 100%;
  ${media.phone`
    margin-top: 50px;
    height: 300px;
  `}    
`

const TestimonialParagraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50%;
  width: 40%;
  letter-spacing: 2px;
  line-height: 25px;
  ${media.phone`
    margin-left: 0px;
    width: 80%;
    margin: 0 auto;
    line-height: 20px;
    font-size: 0.8em;
  `}   
`
export default Testimonial;
