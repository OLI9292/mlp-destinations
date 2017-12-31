import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import logo from '../../Library/Images/logo.png';
import colors from '../../Library/colors';
import { media } from '../../Library/breakpoints';
import MobileMenu from './mobileMenu';

class FrontCover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMobileMenu: false
    };
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
    return type === 'blur' ? `${Math.floor(value)}px` : `${value}s`;
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
      return <Tagline hide={this.state.displayMobileMenu} loaded={this.state.loaded}>
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
        
        <Burger 
          hide={this.state.displayMobileMenu}
          src={require(`../../Library/Images/${this.state.displayMobileMenu ? 'exit.png' : 'burger.png'}`)}
          onClick={() => this.setState({ displayMobileMenu: !this.state.displayMobileMenu })} />

        <MobileMenu display={this.state.displayMobileMenu}/>
        
        <Mask darkened={this.props.darkened + (this.state.displayMobileMenu ? 0.2 : 0)} />

        <InnerContainer>

          <LogoContainer hide={this.state.displayMobileMenu}>
            <span style={{display:'inline-block',verticalAlign:'middle',height:'100%'}}></span>
            <Logo onClick={() => this.setState({ redirect: '/' })} src={logo} />
          </LogoContainer>

          <LinksContainer>
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
          </LinksContainer>
        </InnerContainer>

        {this.props.page === 'home' ? homeContent : centeredContent}

        {
          this.props.page === 'home' && 
          <div style={{display:'flex',width:'100%',justifyContent:'center',position:'absolute',top:'75%'}}>
            <LetsTalkButton hide={this.state.displayMobileMenu}>lets talk</LetsTalkButton>
          </div>
        }
      </Container>
    );
  }
}

const Container = styled.div`
  z-index: 1;
  background: url(${props => props.image}) no-repeat center center;
  background-size: 100% auto;
  height: 550px;
  width: 100%;
  position: relative;
  ${media.phone`
    height: 100vh;
    background-size: auto 100%;
    text-align: center;
  `}
`

const Burger = styled.img`
  height: 5%;
  background-color: rgba(156,62,76,0.85);
  padding: 7.5px;
  width: auto;
  position: absolute;
  top: 1.5%;
  left: 2.5%;
  ${media.phone`
    transition-duration: 0.35s;
  `}
`

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

const LogoContainer = styled.div`
  margin-left: 50px;
  width: 30%;
  height: 200px;
  white-space: nowrap;
  ${media.phone`
    transition-duration: 0.35s;
    opacity: ${props => props.hide ? '0' : '1'};
    width: 70%;
    margin: 0 auto;
    height: 0px;
  `}  
`

const Logo = styled.img`
  margin-left: 5%;
  width: 100%;
  cursor: pointer;
  vertical-align: middle;
  ${media.phone`
    display: block;
    margin: 0 auto;
    margin-top: 50px;
  `}
`

const LinksContainer = styled.div`
  display: flex;
  margin-left: 2.5%;
  width: 65%;
  justify-content: space-evenly;
  float: right;
  font-size: 0.95em;
  margin-top: 80px
`

const InnerContainer = styled.div`
  display: flex;
  padding-top: 10px;
  ${media.phone`
    display: block;
  `}  
`

const Link = styled.p`
  display: inline-block;
  color: white;
  font-family: ATSackersGothicMedium;
  font-size: 0.7em;
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
  margin-top: 150px;
  margin-left: 42.5%;
  font-family: EBGARAMOND12REGULAR;
  font-size: 1.2em;
  color: white;
  letter-spacing: 4px;
  ${media.phone`
    transition-duration: 0.35s;
    opacity: ${props => props.hide ? '0' : '1'};
    position: absolute;
    width: 100%;
    margin: 0 auto;
    top: 60%;
  `}  
`

const TaglineSpan = styled.span`
  margin-left: 160px;
  ${media.phone`
    margin: 0px;
  `}  
`

const LetsTalkButton = styled.p`
  display: none;
  cursor: pointer;
  ${media.phone`
    display: inline-block;
    transition-duration: 0.35s;
    opacity: ${props => props.hide ? '0' : '1'};
    font-family: ATSackersGothicMedium;
    background-color: rgba(156, 62, 76, 0.85);
    color: white;
    padding: 15px 20px 15px 20px;
    letter-spacing: 1px;
  `} 
`

export default FrontCover;
