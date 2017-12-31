import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import { media } from '../../Library/breakpoints';

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) { 
      return <Redirect push to={this.state.redirect} />;
    }

    return (
      <Container display={this.props.display}>
        <Text onClick={() => this.setState({ redirect: '/' })}>HOME</Text>
        <Text onClick={() => this.setState({ redirect: '/services' })}>SERVICES</Text>
        <Text onClick={() => this.setState({ redirect: '/destinations' })}>DESTINATIONS</Text>
        <Text onClick={() => this.setState({ redirect: '/about' })}>ABOUT</Text>
        <Text onClick={() => this.setState({ redirect: '/contact' })}>CONTACT</Text>
      </Container>
    );
  }
}

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  opacity: ${props => props.display ? '1' : '0'};
  pointer-events: ${props => props.display ? 'auto' : 'none'};
  transition-duration: 0.35s;
  margin: 33% 0% 0% 25%;
  text-align: left;
`

const Text = styled.p`
  letter-spacing: 1px;
  cursor: pointer;
  line-height: 100%;
  color: white;
  font-family: ATSackersGothicMedium;
  margin: 25% 0% 25% 0%;
`

export default MobileMenu;
