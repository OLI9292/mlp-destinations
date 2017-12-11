import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../Library/colors';

class InformationRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const imageBlock = (() => {
      return <div>
        <img
          alt={this.props.information.imageUrl}
          src={this.props.information.imageUrl}
          style={{width:'300px',height:'auto'}} />
      </div>;
    })();

    const textBlock = (() => {
      return <div style={{marginLeft:'30px'}}> 
        <p style={{fontFamily:'ATSackersGothicMedium',color:colors.red}}>
          {this.props.information.title.toUpperCase()}
        </p>
        <p style={{fontFamily:'CardoItalic',fontSize:'1.1em',letterSpacing:'1px',lineHeight:'30px'}}>
          {this.props.information.content}
        </p>
      </div>;
    })();

    return (
      <div>
        {
          this.props.information.inverted
          ?
          <Container>
            {textBlock}
            {imageBlock}
          </Container>
          :
          <Container>
            {imageBlock}
            {textBlock}
          </Container>
        }
      </div>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`

export default InformationRow;
