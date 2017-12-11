import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import colors from '../../Library/colors';
import { media } from '../../Library/breakpoints';

class Footer extends Component {
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
        <SiteMapHeader>
          Site Map.
        </SiteMapHeader>

        <InnerContainer>
          <LinksContainer>
            <Link onClick={() => this.setState({ redirect: '/services' })}>
              services
            </Link>

            <Link onClick={() => this.setState({ redirect: '/destinations' })}>
              destinations
            </Link>

            <Link onClick={() => this.setState({ redirect: '/about' })}>
              about
            </Link>

            <Link onClick={() => this.setState({ redirect: '/contact' })}>
              contact
            </Link>            
          </LinksContainer>
          <Email>
            MIRANDA@MLPDESTINATIONS.COM
          </Email>
        </InnerContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${colors.red};
  width: 100%;
  height: 150px;
  text-align: left;
  ${media.phone`
    height: 100px;
  `}  
`

const InnerContainer = styled.div`
  margin: -10px 0px 0px 50px;
  ${media.phone`
    margin: 0 auto;
    text-align: center;
  `}  
`

const SiteMapHeader = styled.p`
  font-family: CardoItalic;
  color: white;
  margin-left: 50px;
  padding-top: 50px;
  display: inline-block;
  ${media.phone`
    display: none;
  `}    
`

const Link = styled.p`
  display: inline-block;
  color: white;
  font-family: ATSackersGothicMedium;
  font-size: 0.7em;
  margin-right: 30px;
  cursor: pointer;
  letter-spacing: 2px;
`

const LinksContainer = styled.div`
  display: inline-block;
  ${media.phone`
    display: none;
  `}  
`

const Email = styled.p`
  font-family: ATSackersGothicMedium;
  display: inline-block;
  color: white;
  float: right;
  margin: 5px 50px 0px 0px;
  ${media.phone`
    margin: 0 auto;
    line-height: 100px;
    float: none;
    font-size: 0.7em;
  `}  
`

export default Footer;
