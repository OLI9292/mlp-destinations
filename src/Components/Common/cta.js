import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import colors from '../../Library/colors';
import { media } from '../../Library/breakpoints';

class CTA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) { 
      return <Redirect push to={this.state.redirect} />;
    }
    
    return (
      <Container>
        <h1 style={{fontFamily:'CardoItalic',letterSpacing:'2px',lineHeight:'15px'}}>
          Let's talk ...
        </h1>

        <p style={{fontFamily:'ATSackersGothicMedium',letterSpacing:'2px',lineHeight:'25px',fontSize:'0.75em'}}>
          BOOK A PRIVATE CONSULTATION TODAY TO DISCUSS YOUR NEXT TRIP.
        </p>

        <ContactButton>
          CONTACT
        </ContactButton>      
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: 40%;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  ${media.phone`
    width: 90%;
    margin: 0 auto;
    line-height: 25px;
  `};
`

const ContactButton = styled.p`
  color: ${colors.green};
  font-family: ATSackersGothicMedium;
  border-bottom: ${`1px solid ${colors.green}`};
  cursor: pointer;
  line-height: 10px;
  width: max-content;
  font-size: 0.8em;
  margin: 0 auto;
  margin-top: 15px;
  height: 17px;
`

export default CTA;
