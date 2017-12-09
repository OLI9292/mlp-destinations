import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import colors from '../../Library/colors';

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
        <p style={{fontFamily:'CardoItalic',color:'white',marginLeft:'50px',paddingTop:'50px'}}>
          Site Map.
        </p>
        <div style={{margin:'-10px 0px 0px 50px'}}>
          <div style={{display:'inline-block'}}>
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
          </div>
          <p style={{fontFamily:'ATSackersGothicMedium',display:'inline-block',color:'white',float:'right',margin:'5px 50px 0px 0px'}}>
            MIRANDA@MLPDESTINATIONS.COM
          </p>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${colors.red};
  width: 100%;
  height: 150px;
  text-align: left;
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

export default Footer;
