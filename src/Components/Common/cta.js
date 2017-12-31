import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

import colors from '../../Library/colors';
import { media } from '../../Library/breakpoints';

const ANIMATED_TEXT = 'Let\'s talk ...';

class CTA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedText: '',
      contactOpacity: 0,
      paragraphOpacity: 0
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem('ctaAnimated')) {
      this.setState({
        animatedText: ANIMATED_TEXT,
        contactOpacity: 1,
        hideCursor: true,
        paragraphOpacity: 1
      })
    }
  }

  animateText() {
    setTimeout(() => {
      setInterval(() => {
        ANIMATED_TEXT === this.state.animatedText
          ? this.setState({ hideCursor: true }, this.revealContact)
          : this.setState({ animatedText: ANIMATED_TEXT.slice(0, this.state.animatedText.length + 1) });
      }, 130);
    }, 650);
  }

  onChange(visible) {
    const didAnimate = sessionStorage.getItem('ctaAnimated');

    if (visible && !didAnimate) {
      sessionStorage.setItem('ctaAnimated', true);
      this.animateText();
    }
  }

  revealContact() {
    this.setState({ paragraphOpacity: 1 });
    setTimeout(() => { this.setState({ contactOpacity: 1 }) }, 500);
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) { 
      return <Redirect push to={this.state.redirect} />;
    }
    
    return (
      <VisibilitySensor onChange={this.onChange.bind(this)}>
        {({isVisible}) =>

          <Container>

            <h1 style={{fontFamily:'CardoItalic',letterSpacing:'2px',lineHeight:'15px'}}>
              {this.state.animatedText}<Cursor hide={this.state.hideCursor}>|</Cursor>
            </h1>

            <Paragraph opacity={this.state.paragraphOpacity}>
              BOOK A PRIVATE CONSULTATION TODAY TO DISCUSS YOUR NEXT TRIP.
            </Paragraph>

            <ContactButton 
              onClick={() => this.setState({ redirect: '/contact'})} 
              opacity={this.state.contactOpacity}>
              CONTACT
            </ContactButton>  

          </Container>
        }
      </VisibilitySensor>
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

const Cursor = styled.span`
  font-family: EBGARAMOND12REGULAR;
  animation: 0.7s blink step-end infinite;
  visibility: ${props => props.hide ? 'hidden' : 'visible'};
`

const Paragraph = styled.p`
  font-family: ATSackersGothicMedium;
  letter-spacing: 2px;
  line-height: 25px;
  font-size: 0.75em;
  transition-duration: 1s;
  opacity: ${props => props.opacity};
  ${media.phone`
    font-size: 0.6em;
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
  transition-duration: 1s;
  opacity: ${props => props.opacity};
`

export default CTA;
