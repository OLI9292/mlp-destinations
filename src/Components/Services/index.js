import React, { Component } from 'react';

import colors from '../../Library/colors';

import CTA from '../Common/cta';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';
import InformationRow from '../Common/informationRow';

const description = 'This specialization is key to being able to provide you with the ' +
  'best service and most up to date information on where you want to go.';

const generalText = 'It\'s simple. After an initial discussion where we discuss what sort ' +
  'of trip you are looking for, and I give you an outline of the possibilities and basics ' +
  'to take into consideration I then connect you directly to the specialist. I shall have ' +
  'sent a summary in advance so you won’t have to repeat yourself, and they will then become ' +
  'your primary source of contact, and organize your travel from start to finish but with me ' +
  'always in the background to refer to as additional support.';

const informations = [
  {
    title: 'SABBATICALS',
    content: 'Similar to advising on an investment strategy I approach sabbaticals with a view to applying the right measure of diversification, relaxation vs activity. I also take into account the individual\'s risk tolerance vis a vis going beyond the usual travel \'boundaries\', such as living alongside native communities for a period or joining a conservation or art project. The goal is to provide the right amount of \'distance\' from your work life..',
    imageUrl: require('../../Library/Images/sabbatical.jpg'),
    frameColor: colors.red,
    orientFrame: ['top', 'right'],
    inverted: false
  },
  {
    title: 'SMALL GROUP TRIPS',
    content: 'These trips are ideal for single travelers as the average group size is 8 people and individual rooms are often available. I work with National Geographic photographer, Catherine Karnow and private yoga teacher, Andrea Curry who both lead their own trips each year to a variety of destinations. Please enquire for current schedules.',
    imageUrl: require('../../Library/Images/small-groups.jpg'),
    frameColor: colors.green,
    orientFrame: ['top', 'left'],
    inverted: true
  }
];

class Services extends Component {
  render() {
    return (
      <div>
        <FrontCover
          darkened={0.65}
          description={description}
          title='SERVICES.'
          image={'kitchen-header.jpg'} />

        <div style={{textAlign:'center'}}>
          <p style={{fontFamily:'ATSackersGothicMedium',fontSize:'1.4em',margin:'75px 0px 75px 0px',letterSpacing:'3px'}}>
            GENERAL
          </p>
          <p style={{fontFamily:'CardoItalic',width:'55%',margin:'0 auto',letterSpacing:'2px',lineHeight:'30px',marginBottom:'75px'}}>
            {generalText}
          </p>
        </div>

        {informations.map((i) => <InformationRow information={i} />)} 

        <CTA />

        <Footer />
      </div>
    );
  }
}

export default Services;
