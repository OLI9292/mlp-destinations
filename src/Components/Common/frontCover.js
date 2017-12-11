import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import logo from '../../Library/Images/logo.png';
import { media } from '../../Library/breakpoints';

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
      return <Tagline>
        <span>
          YOUR PERSONAL GUIDE
        </span>
        <br /><br />
        <TaglineSpan>
          TO PRIVATE TRAVEL...
        </TaglineSpan>
      </Tagline>;
    })();

    const centeredContent = (() => {
      return <div style={{textAlign:'center',margin:'0 auto',width:'50%',color:'white'}}>
        <h3 style={{fontFamily:'ATSackersGothicMedium'}}>
          {this.props.title}
        </h3>
        <p style={{fontFamily:'CardoItalic',letterSpacing:'1px',lineHeight:'35px',fontSize:'1.35em'}}>
          {this.props.description}
        </p>
      </div>
    })();

    return (
      <Container image={require(`../../Library/Images/${this.props.image}`)}>

        <Logo onClick={() => this.setState({ redirect: '/' })} src={logo} />

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

        {this.props.page !== 'home' && centeredContent}

        <br /><br /><br /><br />

        {this.props.page === 'home' && <LetsTalkButton>lets talk</LetsTalkButton>}
      </Container>
    );
  }
}

const Container = styled.div`
  padding-top: 20px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: 1300px auto;
  height: 500px;
  width: 100%;
  ${media.phone`
    text-align: center;
  `}
`

const Link = styled.p`
  display: inline-block;
  color: white;
  font-family: ATSackersGothicMedium;
  font-size: 0.75em;
  margin-left: 50px;
  cursor: pointer;
  letter-spacing: 2px;
  ${media.phone`
    display: none;
  `}
`

const Tagline = styled.div`
  margin: 250px 0px 0px 50px;
  font-family: EBGARAMOND12REGULAR;
  color: white;
  letter-spacing: 2px;
  ${media.phone`
    margin: 25px 0px 0px 0px;
    text-align: left;
  `}  
`

const TaglineSpan = styled.span`
  margin-left: 150px;
  ${media.phone`
    margin-left: 40px;
  `}  
`

const Logo = styled.img`
  margin-left: 40px;
  height: 150px;
  width: auto;
  display: inline-block;
  cursor: pointer;
  ${media.phone`
    display: block;
    height: 125px;
    margin: 0 auto;
    margin-top: 50px;
  `}
`

const LetsTalkButton = styled.p`
  display: none;
  ${media.phone`
    display: inline-block;
    font-family: ATSackersGothicMedium;
    background-color: rgba(156, 62, 76, 0.85);
    color: white;
    font-size: 1.2em;
    padding: 15px 20px 15px 20px;
    letter-spacing: 1px;
  `} 
`

export default FrontCover;
