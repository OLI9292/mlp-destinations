import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import destinations from './data';
import colors from '../../Library/colors';

class Destinations extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      destinations: destinations,
      mobileIndex: 0
    }
  }

  move(left) {
    const mobileIndex = this.state.mobileIndex + (left ? -1 : 1);
    this.setState({ mobileIndex });
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) { 
      return <Redirect push to={this.state.redirect} />;
    }

    const Navigation = (() => {
      return <div>
        <MoveButton 
          left
          disabled={this.state.mobileIndex === 0}
          onClick={() => this.move('left')}
          src={require('../../Library/Images/arrow-right.png')} />
        <MoveButton 
          onClick={() => this.move()}
          disabled={this.state.mobileIndex === this.state.destinations.length - 1}
          src={require('../../Library/Images/arrow-right.png')} />
      </div>
    })()

    const destinationBlocks = () => {
      const destinations = window.isMobile
        ? [this.state.destinations[this.state.mobileIndex]]
        : this.state.destinations;

      return destinations.map((d,i) => {
        return <div key={i} style={{height:'100%',width:'100%',overflow:'hidden',position:'relative'}}>
          <DestinationContainer 
            image={d.image}
            mobile={window.isMobile}
            onClick={() => this.setState({ redirect: `/destinations/${d.slug}`})}>
            <Mask />    
          </DestinationContainer>

          {window.isMobile && Navigation}

          <DestinationContent mobile={window.isMobile}>
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
      })
    }

    const Container = window.isMobile ? SingleContainer : MultiContainer;

    return (
      <Container>
        {destinationBlocks()}
      </Container>
    );
  }
}

const MoveButton = styled.img`
  position: absolute;
  left: ${props => props.left ? '0' : ''};
  right: ${props => !props.left ? '0' : ''};
  transform: ${props => props.left ? 'scaleX(-1)' : ''};
  opacity: ${props => props.disabled ? '0.7' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  top: 40%;
  height: 7.5%;
  z-index: 10;
  cursor: pointer;
`

const MultiContainer = styled.div`
  display: grid;
  grid-template-columns: 27.5% 27.5% 27.5%;
  grid-template-rows: 47.5% 47.5%;
  align-content: space-between;
  min-height: 850px;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
  height: 100vh;
`

const SingleContainer = styled.div`
  align-content: space-between;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  height: 75vh;
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
  z-index: 0;
  background: url(${props => props.image}) no-repeat center center;
  background-size: auto 100%;
  width: ${props => props.mobile ? '80%' : '100%'};
  margin: 0 auto;
  height: 100%;  
  cursor: pointer;
  transition-duration: ${props => props.mobile ? '0' : '0.7s'};
  &:hover {
    transform: scale(1.1);
  }
`

const DestinationContent = styled.div`
  padding-top: 20px;
  position: absolute;
  margin: 0 auto;
  top: 0;
  width: ${props => props.mobile ? '80%' : '100%'};
  margin-left: ${props => props.mobile ? '10%' : ''};
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
  background-color: ${colors.beige};
  position: absolute;
  width: 100%;
  bottom: 0;
  margin-bottom: 20px;
  letter-spacing: 3px;
  font-size: 0.7em;
  line-height: 20px;
`

export default Destinations;
