import React, { Component } from 'react';
import styled from 'styled-components';

import { media } from '../../Library/breakpoints';
import colors from '../../Library/colors';
import lantern from '../../Library/Images/lantern.jpg';

import CTA from '../Common/cta';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';
import Destinations from '../Destinations/index';

const conceptText = 'To act as an \'internet\' filter to navigate you through ' +
  'the maze of travel providers and link you to the right individual to plan your ' +
  'trip.  Over the years I have built up a network of true specialists who only ' +
  'cover one region or country; they all run their own business and have over 15 ' +
  'years of experience.';

const destinationText = 'This specialization is key to being able to provide you with ' +
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
      <div>
        <FrontCover page={'home'} darkened={0.4} image={'leaf-header.jpg'} />

        <div style={{textAlign:'center'}}>
          <p style={{fontFamily:'ATSackersGothicMedium',color:colors.red,fontSize:'0.7em',margin:'50px 0px 40px 0px',letterSpacing:'3px'}}>
            CONCEPT
          </p>
          
          <Paragraph>
            {conceptText}
          </Paragraph>

          <ConceptImage image={require('../../Library/Images/coffee.jpg')} />

          <Paragraph>
            {destinationText}
          </Paragraph>
          
          <div style={{marginTop:'75px'}}>
            <Destinations />
          </div>

          <TestimonialContainer>
            <TestimonialParagraph>
              {testimonialText}
              <br /><br />
              <span style={{fontFamily:'CardoItalic',fontSize:'1.25em'}}>
                Emily, London, UK
              </span>
            </TestimonialParagraph>
          </TestimonialContainer>

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
    width: 70%;
  `}    
`

const ConceptImage = styled.div`
  background: url(${props => props.image}) no-repeat center center;
  background-size: 100% auto;
  height: 400px;
  width: 75%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  ${media.phone`
    width: 80%;
  `}      
`

const TestimonialContainer = styled.div`
  background: url(${lantern}) no-repeat center center;
  background-size: 100% auto;
  color: white;
  display: flex;
  font-family: ATSackersGothicMedium;
  height: 400px;
  margin-top: 150px;
  width: 100%;
  ${media.phone`
    height: 250px;
  `}    
`

const TestimonialParagraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50%;
  width: 40%;
  letter-spacing: 2px;
  line-height: 25px;
  ${media.phone`
    margin-left: 0px;
    width: 80%;
    margin: 0 auto;
    line-height: 20px;
    font-size: 0.75em;
  `}   
`

export default Home;
