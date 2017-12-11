import React, { Component } from 'react';
import styled from 'styled-components';

const destinations = [
  {
    name: 'Africa',
    places: 'Botswana, Ethiopia, Kenya, Madagascar, Malawi, Mauritius, Morocco, Mozambique, Namibia, Rwanda, Seychelles, South Africa, Tanzania, Uganda, Zambia, Zimbabwe',
    imageUrl: require('../../Library/Images/africa.jpg')
  },
  {
    name: 'Asia',
    places: 'Bhutan, Burma, Cambodia, India, Indonesia, Japan, Laos, Malaysia, Nepal, Sri Lanka, Thailand, The Maldives, Vietnam',
    imageUrl: require('../../Library/Images/asia.jpg')
  },
  {
    name: 'Central & South America',
    places: 'Antarctica, Argentina, Belize, Bolivia, Brazil, Chile, Colombia, Costa Rica, Cuba, Ecuador, Guatemala, Mexico, Panama, Peru, The Galapagos, Turks & Caicos, Uruguay',
    imageUrl: require('../../Library/Images/central-and-south-america.jpg')
  },
  {
    name: 'Europe',
    places: 'Denmark, Finland, Greenland, Iceland, Italy, Norway, Sweden',
    imageUrl: require('../../Library/Images/europe.jpg')
  },
  {
    name: 'Middle East',
    places: 'Jordan, Oman, UAE',
    imageUrl: require('../../Library/Images/middle-east.jpg')
  },
  {
    name: 'USA & Canada',
    places: 'USA, Canada',
    imageUrl: require('../../Library/Images/canada.jpg')
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
    const destinations = this.state.destinations.map((d) => {
      return <Destination img={d.imageUrl}>
        <h3 style={{fontFamily:'EBGARAMOND12REGULAR',color:'white',letterSpacing:'2px',paddingTop:'20px'}}>
          {d.name.toUpperCase()}
        </h3>

        <PlacesParagraph>
          {d.places}
        </PlacesParagraph>

        <ReadMoreButton>
          <p>read more</p>
        </ReadMoreButton>
      </Destination>
    });

    return (
      <Container>
        {destinations}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  padding: 20px;
`

const Destination = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 300px auto;
  cursor: pointer;
  height: 360px;
  width: 240px;
  margin: 15px;
  position: relative;
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
  letter-spacing: 2px;
  font-size: 0.7em;
  line-height: 20px;
`

export default Destinations;
