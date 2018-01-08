import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../Library/colors';
import { media } from '../../Library/breakpoints';

import CTA from '../Common/cta';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';
import Header from '../Common/header';
import Destinations from '../Destinations/index';
import Testimonial from '../Common/testimonial';

const conceptText = 'To act as an \'internet\' filter to navigate you through ' +
  'the maze of travel providers and link you to the right individual to plan your ' +
  'trip.  Over the years I have built up a network of true specialists who only ' +
  'cover one region or country.  They all run their own companies and have over 15 ' +
  'years of experience.  This specialization is key to being able to provide you with ' +
  'the best service and most up to date information on where you want to go, for the ' +
  'following destinations...';

const testimonialText = 'Miranda has a unique gift for listening to and understanding ' +
  'her clients.  She knows that the terms holiday, travel, and exploration do not mean ' +
  '\'one size fits all\',';

class Home extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{backgroundColor:colors.beige}}>
        <FrontCover page={'home'} darkened={0.3} image={'home/water.png'} />

        <div style={{textAlign:'center'}}>

          <Header>
            CONCEPT
          </Header>
          
          <Paragraph>
            {conceptText}
          </Paragraph>

          <div style={{marginTop:'75px'}}>
            <Destinations />
          </div>

          <Testimonial
            text={testimonialText}
            from={'Elizabeth, London, UK'} />

          <CTA />

          <Footer />
        </div>
      </div>
    );
  }
}

const Paragraph = styled.p`
  font-family: CardoItalic;
  font-size: 1.1em;
  width: 55%;
  margin: 0 auto;
  letter-spacing: 1px;
  line-height: 30px;
  ${media.phone`
    width: 80%;
    font-size: 1em;
  `}    
`

export default Home;
