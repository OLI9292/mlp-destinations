import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import colors from '../../Library/colors';
import coffee from '../../Library/Images/coffee.jpg';
import lantern from '../../Library/Images/lantern.jpg';
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
    return (
      <div>
        <FrontCover page={'home'} />

        <div style={{textAlign:'center'}}>
          <p style={{fontFamily:'ATSackersGothicMedium',color:colors.red,fontSize:'0.8em',margin:'40px 0px 20px 0px'}}>
            concept
          </p>
          
          <p style={{fontFamily:'CardoItalic',width:'50%',margin:'0 auto',letterSpacing:'1px',lineHeight:'25px'}}>
            {conceptText}
          </p>

          <ConceptImage />

          <p style={{fontFamily:'CardoItalic',width:'50%',margin:'0 auto',letterSpacing:'1px',lineHeight:'25px'}}>
            {destinationText}
          </p>

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

          <ContactContainer>
            <h1 style={{fontFamily:'CardoItalic'}}>
              Let's talk...
            </h1>

            <p style={{fontFamily:'ATSackersGothicMedium'}}>
              book a private consultation today to discuss your next trip.
            </p>

            <p style={{color:colors.green,fontFamily:'ATSackersGothicMedium',textDecoration:'underline',cursor:'pointer'}}>
              contact
            </p>
          </ContactContainer>

          <Footer />
        </div>
      </div>
    );
  }
}

const ConceptImage = styled.div`
  background-image: url(${coffee});
  background-repeat: no-repeat;
  background-size: 800px auto;
  width: 800px;
  height: 400px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
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
`

const TestimonialParagraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50%;
  width: 45%;
  letter-spacing: 1px;
  line-height: 25px;
`

const ContactContainer = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: center;
`

export default Home;
