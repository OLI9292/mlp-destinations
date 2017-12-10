import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import colors from '../../Library/colors';

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
        <h1 style={{fontFamily:'CardoItalic'}}>
          Let's talk...
        </h1>

        <p style={{fontFamily:'ATSackersGothicMedium'}}>
          book a private consultation today to discuss your next trip.
        </p>

        <p style={{color:colors.green,fontFamily:'ATSackersGothicMedium',textDecoration:'underline',cursor:'pointer'}}>
          contact
        </p>      
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export default CTA;
