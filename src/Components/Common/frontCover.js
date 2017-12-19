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

  componentDidMount() {
    setTimeout(() => { 
      this.setState({ loaded: true }) 
    }, 750);
  }  

  random(type) {
    const [min, max] = {
      delay: [0.1, 0.5],
      duration: [1.5, 2],
      blur: [2, 6]
    }[type];

    const value = (Math.random() * (min - max) + max).toFixed(4);
    return type === 'blur' 
      ? `${Math.floor(value)}px`
      : `${value}s`;
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) { 
      return <Redirect push to={this.state.redirect} />;
    }

    const blurred = (text) => {
      return <BlurredSpan
        key={text}
        delay={this.random('delay')}
        duration={this.random('duration')}
        blur={this.random('blur')}
        loaded={this.state.loaded}
      >{text}</BlurredSpan>
    }

    const homeContent = (() => {
      return <Tagline loaded={this.state.loaded}>
        {['YOUR ', 'PERSONAL ', 'GUIDE'].map((text) => blurred(text))}
        <br /><br />
        <TaglineSpan>
          {['TO ', 'PRIVATE ', 'TRAVEL...'].map((text) => blurred(text))}
        </TaglineSpan>
      </Tagline>;
    })();

    const centeredContent = (() => {
      return <div style={{textAlign:'center',margin:'0 auto',width:'45%',color:'white',marginTop:'50px',letterSpacing:'4px',fontSize:'0.8em'}}>
        <h3 style={{fontFamily:'ATSackersGothicMedium'}}>
          {this.props.title}
        </h3>
        <p style={{fontFamily:'CardoItalic',letterSpacing:'2px',lineHeight:'25px',fontSize:'1.5em'}}>
          {this.props.description}
        </p>
      </div>
    })();

    return (
      <Container onLoad={this.handleImageLoaded} image={require(`../../Library/Images/${this.props.image}`)}>
        <Mask darkened={this.props.darkened} />
        <Logo onClick={() => this.setState({ redirect: '/' })} src={logo} />

        <div style={{display:'inline-block',marginTop:'50px',verticalAlign:'top'}}>
        
          <Link onClick={() => this.setState({ redirect: '/services' })}>
            SERVICES
          </Link>

          <Link onClick={() => this.setState({ redirect: '/destinations' })}>
            DESTINATIONS
          </Link>

          <Link onClick={() => this.setState({ redirect: '/about' })}>
            ABOUT
          </Link>

          <Link onClick={() => this.setState({ redirect: '/contact' })}>
            CONTACT
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

const Mask = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background:rgba(0,0,0,${props => props.darkened});
`

const Container = styled.div`
  z-index: 1;
  background: url(${props => props.image}) no-repeat center center;
  background-size: 100% auto;
  height: 500px;
  width: 100%;
  position: relative;
  ${media.phone`
    text-align: center;
  `}
`

const Link = styled.p`
  display: inline-block;
  color: white;
  font-family: ATSackersGothicMedium;
  font-size: 0.7em;
  margin-left: 50px;
  cursor: pointer;
  letter-spacing: 3px;
  ${media.phone`
    display: none;
  `}
`

const BlurredSpan = styled.span`
  visibility: ${props => props.loaded ? 'visible' : 'hidden'};
  filter: ${props => props.loaded ? 'blur(0px)' : `blur(${props.blur})`};
  transition-duration: ${props => props.duration};
  transition-delay: ${props => props.delay};
`

const Tagline = styled.div`
  margin: 250px 0px 0px 50px;
  font-family: EBGARAMOND12REGULAR;
  color: white;
  letter-spacing: 4px;
  ${media.phone`
    margin: 25px 0px 0px 0px;
    text-align: left;
  `}  
`

const TaglineSpan = styled.span`
  margin-left: 160px;
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
