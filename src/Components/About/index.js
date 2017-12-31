import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../Library/colors';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';
import InformationRow from '../Common/informationRow';

const informations = [
  {
    title: 'NEW DESTINATION?',
    content: 'I always like to get the lay of the land on arrival and this is best done on foot. If you are in a location long enough I recommend slipping into a local church service as this will give you a real flavor of the language, dress, and culture.',
    imageUrl: require('../../Library/Images/new-destination.jpg'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: false
  },
  {
    title: 'PACKING PHILOSOPHY?',
    content: 'Never pack more than you can carry.  I usually only take enough for a week regardless of the length of the trip as most places provide laundry.  Always take a swimsuit as I\'ve missed out on some great pools in the past.',
    imageUrl: require('../../Library/Images/packing-philosophy.jpg'),
    frameColor: colors.red,
    orientFrame: ['top', 'right'],
    inverted: true
  },
  {
    title: 'TRAVELLING WITH TEENS?',
    content: 'From experience with two very different boys; don’t overload them with detail before you travel so there is an element of surprise, include a bit of luxury as they\'ll notice and appreciate it. And pace the culture element with some down-time.',
    imageUrl: require('../../Library/Images/traveling-with-teens.jpg'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: false
  },
  {
    title: 'FAVOURITE PLACES TO STAY?',
    content: 'I always favor independent hotels, the reason being they have the personal flair of the owner who is often not in the travel industry and treats you more like a house guest. I stayed in a hotel in Panama City once which was completely without water for 36 hours but the way the owner and the staff managed the situation was so exemplary it remains one of my favorites to this day.',
    imageUrl: require('../../Library/Images/favourite-places-to-stay.jpg'),
    frameColor: colors.red,
    orientFrame: ['top', 'right'],
    inverted: true
  },
  {
    title: 'TRAVEL MANTRA?',
    content: 'Don\'t overdo it. Moving around and being away from home can be tiring. A well-balanced itinerary is so important, and you will get far more out of being selective than racing around trying to see every tourist site.',
    imageUrl: require('../../Library/Images/hamock.jpg'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: false
  }
]

const description = 'Having spent my life travelling and experiencing the world, ' +
  'I now want to share my knowledge with you, here are a few things I\'ve learnt along the way.';

class About extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
    
  render() {
    return (
      <div>
        <FrontCover 
          darkened={0.65}
          description={description}
          title='ABOUT.' 
          image={'leaf-header.jpg'} />

        <Whitespace />
          
        {informations.map((i) => <InformationRow key={i.title} information={i} />)}

        <Footer />
      </div>
    );
  }
}

const Whitespace = styled.div`
  width: 100%;
  height: 125px;
`

export default About;
