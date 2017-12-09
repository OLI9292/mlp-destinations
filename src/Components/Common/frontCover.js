import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import leaves from '../../Library/Images/leaf-header.jpg';
import logo from '../../Library/Images/logo.png';

class FrontCover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) { 
      return <Redirect push to={this.state.redirect} />;
    }

    const homeContent = (() => {
      return <div style={{margin:'250px 0px 0px 50px',fontFamily:'EBGARAMOND12REGULAR',color:'white',letterSpacing:'2px'}}>
        <span>
          YOUR PERSONAL GUIDE
        </span>
        <br /><br />
        <span style={{marginLeft:'150px'}}>
          TO PRIVATE TRAVEL...
        </span>
      </div>;
    })();

    const aboutContent = (() => {
      return <div style={{textAlign:'center',margin:'0 auto',width:'50%',color:'white'}}>
        <h3 style={{fontFamily:'ATSackersGothicMedium'}}>
          ABOUT.
        </h3>
        <p style={{fontFamily:'CardoItalic',letterSpacing:'1px',lineHeight:'35px',fontSize:'1.35em'}}>
          Having spent my life travelling and experiencing the world, I now want to share my knowledge with you, here are a few things I've learnt along the way.
        </p>
      </div>
    })();

    const dynamicContent = (() => {
      switch (this.props.page) {
        case 'home': return homeContent;
        case 'about': return aboutContent;
        default: return;
      }
    })();

    return (
      <Container>
        <div style={{paddingTop:'20px'}}>
          <img
            onClick={() => this.setState({ redirect: '/' })}
            src={logo} 
            style={{marginLeft:'40px',height:'150px',width:'auto',display:'inline-block',cursor:'pointer'}} />

          <div style={{display:'inline-block',marginTop:'50px',verticalAlign:'top'}}>
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
            {this.props.page === 'home' && homeContent}
          </div>
          {dynamicContent}
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  background-image: url(${leaves});
  background-repeat: no-repeat;
  background-size: 1300px auto;
  height: 500px;
  width: 100%;
`

const Link = styled.p`
  display: inline-block;
  color: white;
  font-family: ATSackersGothicMedium;
  font-size: 0.75em;
  margin-left: 50px;
  cursor: pointer;
  letter-spacing: 2px;
`

export default FrontCover;
