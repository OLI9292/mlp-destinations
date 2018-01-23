import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import data from './data';
import colors from '../../Library/colors';

class Navigation extends Component {  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) { 
      return <Redirect push to={this.state.redirect} />;
    }

    const destinations = data
      .map((destination) => {
        const highlight = destination.name === (this.state.isHovered || this.props.destination);
        return <DestinationSpan
          key={destination.name}
          onMouseOver={() => this.setState({ isHovered: destination.name })}
          onMouseLeave={() => this.setState({ isHovered: null })}
          onClick={() => this.setState({ redirect: `/destinations/${destination.slug}`})}
          highlight={highlight}>
          {destination.name.toUpperCase()}
        </DestinationSpan>
      })
      .reduce((prev, curr) => [prev, '/', curr]);

    return (
      <p style={{width:'80%',margin:'0 auto',marginBottom:'50px',lineHeight:'40px'}}>
        {destinations}
      </p>
    );
  }
}

const DestinationSpan = styled.span`
  color: ${props => props.highlight ? colors.red : 'black'};
  font-family: ATSackersGothicMedium;
  margin: 0px 20px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 0.75em;
  transition: 0.2s;
`

export default Navigation;
