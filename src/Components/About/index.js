import React, { Component } from 'react';
import styled from 'styled-components';

import { media } from '../../Library/breakpoints';
import colors from '../../Library/colors';
import Header from '../Common/header';
import CTA from '../Common/cta';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';
import InformationRow from '../Common/informationRow';

const informations = [
  {
    title: 'ON ARRIVAL',
    content: 'I always like to get the lay of the land when arriving somewhere for the first time and this is usually best done on foot. If you are in a location long enough I recommend slipping into a local church service as this will give you a real flavor of the language, dress and culture.',
    imageUrl: require('../../Library/Images/about/dancing-girl.png'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: false
  },
  {
    title: 'PACKING PHILOSOPHY',
    content: 'Never pack more than you can carry. I usually only take enough for a week regardless of the length of the trip as most places provide laundry. Always take a swimsuit as I\'ve missed out on some great pools in the past.',
    imageUrl: require('../../Library/Images/about/clothes.png'),
    frameColor: colors.red,
    orientFrame: ['top', 'right'],
    inverted: true
  },
  {
    title: 'TRAVELING WITH TEENAGERS',
    content: 'From experience with my two very different boys don\'t overload them with detail before you travel so there is an element of surprise, include a bit of spoiling as they\'ll notice and pace the culture element with plenty of down-time and good meals.',
    imageUrl: require('../../Library/Images/about/lake.png'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: false
  },
  {
    title: 'FAVORITE PLACES TO STAY',
    content: 'I prefer independent hotels, the reason being they have the personal flair of the owner who is often not in the travel industry and treats you more like a house guest. I recently stayed in a charming posada in Argentina and while having dinner the owner came to join me from her house across the vineyard. She shared some extraordinary stories of her family\'s fascinating history and then proceeded to open a bottle of the house special reserve.',
    imageUrl: require('../../Library/Images/about/mirror.jpg'),
    frameColor: colors.red,
    orientFrame: ['top', 'right'],
    inverted: true
  },
  {
    title: 'TRAVEL MANTRA',
    content: 'Don\'t overdo it. Moving around and being away from home can be tiring. A well-balanced itinerary is so important, and you will get far more out of being selective than racing around trying to see every tourist site.',
    imageUrl: require('../../Library/Images/about/rocks.png'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: false
  }
]

const generalText = 'I have spent the last 40 years traveling extensively as well as working in the travel business, ' +
  'and there is nothing I enjoy more than using the knowledge I have acquired to help advise others. When not on a ' +
  'research trip I divide my time between North America and the UK. Below are some personal insights I have picked up ' +
  'along the way:';

class About extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
    
  render() {
    return (
      <div style={{backgroundColor:colors.beige}}>
        <FrontCover darkened={0.35} image={'about/painting.jpg'} />

        <div style={{textAlign:'center',margin:'75px 0px 150px 0px'}}>
          <Header>
            ABOUT
          </Header>

          <ImageCropper>
            <Headshot src={require('../../Library/Images/about/miranda.jpg')} />
          </ImageCropper>

          <Text>
            {generalText}
          </Text>
        </div>
          
        {informations.map((i,idx) => <InformationRow last={idx+1 === informations.length} key={i.title} information={i} />)}

        <CTA />

        <Footer />
      </div>
    );
  }
}

const ImageCropper = styled.div`
  width: 125px;
  height: 125px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50%;
  margin: 0 auto;
  border: 3px solid ${colors.red};
  margin-top: 40px;
  margin-bottom: 40px;
`

const Headshot = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`

const Text = styled.p`
  font-family: CardoItalic;
  width: 65%;
  margin: 0 auto;
  letter-spacing: 2px;
  line-height: 30px;
  margin-bottom: 75px;
  ${media.phone`
    width: 80%;
  `}    
`

export default About;
