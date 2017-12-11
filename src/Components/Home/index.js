import React, { Component } from 'react';
import styled from 'styled-components';

import { media } from '../../Library/breakpoints';
import colors from '../../Library/colors';
import coffee from '../../Library/Images/coffee.jpg';
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
  'the best service and most up to date information on where you want to go.';

const testimonialText = 'Miranda has a unique gift for listening to and understanding ' +
  'her clients.  She knows that the terms holiday, travel, and exploration do not mean ' +
  '\'one size fits all\',';

class Home extends Component {
  render() {
    console.log(media.phone ? '80%' : '800px')
    return (
      <div>
        <FrontCover page={'home'} image={'leaf-header.jpg'} />

        <div style={{textAlign:'center'}}>
          <p style={{fontFamily:'ATSackersGothicMedium',color:colors.red,fontSize:'0.8em',margin:'40px 0px 20px 0px'}}>
            concept
          </p>
          
          <Paragraph>
            {conceptText}
          </Paragraph>

          <ConceptImage src={coffee} />

          <Paragraph>
            {destinationText}
          </Paragraph>

          <Destinations />

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
  width: 50%;
  margin: 0 auto;
  letter-spacing: 1px;
  line-height: 25px;
  ${media.phone`
    width: 70%;
  `}    
`

const ConceptImage = styled.img`
  width: 800px;
  height: auto;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  ${media.phone`
    width: 80%;
  `}      
`

const TestimonialContainer = styled.div`
  background-image: url(${lantern});
  background-repeat: no-repeat;
  background-size: 1300px auto;
  color: white;
  display: flex;
  font-family: ATSackersGothicMedium;
  height: 400px;
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
  width: 45%;
  letter-spacing: 1px;
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
