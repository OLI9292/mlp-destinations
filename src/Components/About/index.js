import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../Library/colors';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';
import InformationRow from '../Common/informationRow';

const informations = [
  {
    title: 'GETTING TO GRIPS WITH A NEW PLACE',
    content: 'I always like to get the lay of the land when arriving somewhere for the first time and this is usually best done on foot. If you are in a location long enough I recommend slipping into a local church service as this will give you a real flavor of the language, dress and culture.',
    imageUrl: require('../../Library/Images/about/dancing-girl.png'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: false
  },
  {
    title: 'PERSONAL PACKING PHILOSOPHY',
    content: 'Never pack more than you can carry. I usually only take enough for a week regardless of the length of the trip as most places provide laundry. Always take a swimsuit as I\'ve missed out on some great pools in the past.',
    imageUrl: require('../../Library/Images/about/clothes.png'),
    frameColor: colors.red,
    orientFrame: ['top', 'right'],
    inverted: true
  },
  {
    title: 'TRAVELLING WITH TEENAGERS',
    content: 'From experience with two very different boys don\'t overload them with detail before you travel so there is an element of surprise, include a bit of spoiling as they\'ll notice and pace the culture element with plenty of down-time and good meals. Remember it\'s their vacation too.',
    imageUrl: require('../../Library/Images/about/lake.png'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: false
  },
  {
    title: 'FAVOURITE PLACES TO STAY',
    content: 'I prefer independent hotels, the reason being they have the personal flair of the owner who is often not in the travel industry and treats you more like a house guest. I recently stayed in a charming posada in Argentina and while having dinner the owner came to join me from her house across the vineyard. She shared some extraordinary stories of her family\'s fascinating history and then proceeded to open a bottle of the house special reserve with a label designed by her sister depicting their grandfather\'s musical score composed for a Pope\'s visit.',
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

class About extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
    
  render() {
    return (
      <div>
        <FrontCover darkened={0.35} image={'about/painting.jpg'} />

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
