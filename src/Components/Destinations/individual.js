import React, { Component } from 'react';
import styled from 'styled-components';

import data from './data';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';
import Header from '../Common/header';
import colors from '../../Library/colors';
import InformationRow from '../Common/informationRow';
import { media } from '../../Library/breakpoints';

class IndividualDestinationPage extends Component {  
  constructor(props) {
    super(props)
    
    const slug = window.location.href.split('/').reverse()[0];
    const destination = data.filter((d) => d.slug === slug)[0];
    this.state = destination;
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }  

  render() {
    return (
      <div style={{textAlign:'center',backgroundColor:colors.beige}}>

        <FrontCover 
          destination={this.state} 
          darkened={this.state.darkenImage} 
          image={this.state.imagePath} />

        <Header>
          OVERVIEW
        </Header>

        <Text>
          {this.state.description}
        </Text>

        <Header italic>
          recent finds...
        </Header>

        {this.state.informations.map((i) => <InformationRow key={i.title} information={i} />)}

        <Footer />
      </div>
    );
  }
}

const Text = styled.p`
  font-family: CardoItalic;
  width: 55%;
  margin: 0 auto;
  letter-spacing: 2px;
  line-height: 30px;
  margin-bottom: 75px;
  ${media.phone`
    width: 80%;
  `}    
`

export default IndividualDestinationPage;
