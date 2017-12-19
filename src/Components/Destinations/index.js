import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

const destinations = [
  {
    name: 'Africa',
    places: 'Botswana, Ethiopia, Kenya, Madagascar, Malawi, Mauritius, Morocco, Mozambique, Namibia, Rwanda, Seychelles, South Africa, Tanzania, Uganda, Zambia, Zimbabwe',
    slug: 'africa',
    image: require('../../Library/Images/africa.jpg')
  },
  {
    name: 'Asia',
    places: 'Bhutan, Burma, Cambodia, India, Indonesia, Japan, Laos, Malaysia, Nepal, Sri Lanka, Thailand, The Maldives, Vietnam',
    slug: 'asia',
    image: require('../../Library/Images/asia.jpg')
  },
  {
    name: 'Central & South America',
    places: 'Antarctica, Argentina, Belize, Bolivia, Brazil, Chile, Colombia, Costa Rica, Cuba, Ecuador, Guatemala, Mexico, Panama, Peru, The Galapagos, Turks & Caicos, Uruguay',
    slug: 'central-and-south-america',
    image: require('../../Library/Images/central-and-south-america.jpg')
  },
  {
    name: 'Europe',
    places: 'Denmark, Finland, Greenland, Iceland, Italy, Norway, Sweden',
    slug: 'europe',
    image: require('../../Library/Images/europe.jpg')
  },
  {
    name: 'Middle East',
    places: 'Jordan, Oman, UAE',
    slug: 'middle-east',
    image: require('../../Library/Images/middle-east.jpg')
  },
  {
    name: 'USA & Canada',
    places: 'USA, Canada',
    slug: 'usa-and-canada',
    image: require('../../Library/Images/canada.jpg')
  }
]

class Destinations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      destinations: destinations
    }
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) { 
      return <Redirect push to={this.state.redirect} />;
    }

    const destinations = this.state.destinations.map((d,i) => {
      return <div key={i} style={{height:'100%',width:'100%',overflow:'hidden',position:'relative'}}>
        <DestinationContainer onClick={() => this.setState({ redirect: `/destinations/${d.slug}`})} image={d.image}>
          <Mask />    
        </DestinationContainer>

        <DestinationContent>
          <h3 style={{fontFamily:'EBGARAMOND12REGULAR',color:'white',letterSpacing:'2px',lineHeight:'25px'}}>
            {d.name.toUpperCase()}
          </h3>

          <PlacesParagraph>
            {d.places}
          </PlacesParagraph>

          <ReadMoreButton>
            <p>READ MORE</p>
          </ReadMoreButton>            
        </DestinationContent>              
      </div>
    });

    return (
      <Container>
        {destinations}
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 27.5% 27.5% 27.5%;
  grid-template-rows: 47.5% 47.5%;
  align-content: space-between;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
  height: 100vh;
`

const Mask = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background:rgba(0,0,0,0.35);
`

const DestinationContainer = styled.div`
  position: relative;
  z-index: 1;
  background: url(${props => props.image}) no-repeat center center;
  background-size: auto 100%;
  width: 100%;
  height: 100%;  
  cursor: pointer;
  transition-duration: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`

const DestinationContent = styled.div`
  padding-top: 20px;
  position: absolute;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const PlacesParagraph = styled.p`
  font-family: CardoItalic;
  font-size: 0.8em;
  width: 80%;
  margin: 0 auto;
  line-height: 25px;
  color: white;
  letter-spacing: 1px;
  padding-top: 20px;
`

const ReadMoreButton = styled.div`
  font-family: ATSackersGothicMedium;
  background-color: white;
  position: absolute;
  width: 100%;
  bottom: 0;
  margin-bottom: 20px;
  letter-spacing: 3px;
  font-size: 0.7em;
  line-height: 20px;
`

export default Destinations;
