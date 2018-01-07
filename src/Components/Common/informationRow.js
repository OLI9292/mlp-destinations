import React, { Component } from 'react';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

import colors from '../../Library/colors';

class InformationRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    if (window.isMobile) { this.setState({ visible: true }); }
    window.addEventListener('resize', this.resize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }  

  resize(img) {
    if (this.img) { this.setState({ width: this.img.offsetWidth, height: this.img.offsetHeight }); }
  }

  onChange(visible) {
    if (visible && !this.state.visible) { this.setState({ visible: true }); }
  }

  offsetHeight() {
    return this.img ? -this.img.offsetHeight : 0;
  }

  render() {
    const imageBlock = (() => {
      
      const [opacity, marginTop] = this.state.visible ? [1, '0px'] : [0, '15px'];
      const orientation = this.props.information.orientFrame;
      const [orientLeft, orientBottom] = [orientation[1] === 'left', orientation[0] === 'bottom']

      return <ImageBlock isMobile={window.isMobile}>
        <img
          alt={this.props.information.title}
          onLoad={this.resize.bind(this)} 
          ref={img => {this.img = img}}
          src={this.props.information.imageUrl}
          style={{height:'auto',width:'100%',zIndex:'10',opacity:opacity,marginTop:marginTop,transitionDuration:'1s'}} />

        <div style={{
            backgroundColor: this.props.information.frameColor,
            height: this.state.height,
            marginLeft: orientLeft ? '-35px' : '35px',
            position: 'absolute',
            top: orientBottom ? '35px' : '-35px',
            width: this.state.width,
            zIndex: '-15'
          }}>

          {
            this.props.information.location &&
            <LocationText orientLeft={orientLeft}>
              {this.props.information.location.toUpperCase()}
            </LocationText>
          }
        </div>
      </ImageBlock>
    })();

    const textBlock = (() => {
      return <TextBlock isMobile={window.isMobile}> 
        <p style={{fontFamily:'ATSackersGothicMedium',color:colors.red,fontSize:'0.8em',letterSpacing:'2px',lineHeight:'30px'}}>
          {this.props.information.title.toUpperCase()}
        </p>
        <p style={{fontFamily:'CardoItalic',letterSpacing:'1px',lineHeight:'25px'}}>
          {this.props.information.content}
        </p>
      </TextBlock>;
    })();

    return (
      <VisibilitySensor offset={{bottom:this.offsetHeight()}} onChange={this.onChange.bind(this)}>
        {({isVisible}) =>
          <div>
            {
              !window.isMobile && this.props.information.inverted 
              ?
              <Container>
                {textBlock}
                {imageBlock}
              </Container>
              :
              <Container isMobile={window.isMobile}>
                {imageBlock}
                {textBlock}
              </Container>
            }
          </div>
        }
      </VisibilitySensor>
    );
  }
}



const Container = styled.div`
  display: ${props => props.isMobile ? 'block' : 'flex'};
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: ${props => props.isMobile ? '100px' : '115px'};
  width: 80%;
`

const ImageBlock = styled.div`
  margin: ${props => props.isMobile ? '0 auto' : ''};
  position: relative;
  width: ${props => props.isMobile ? '80%' : '55%'};
`

const TextBlock = styled.div`
  text-align: left;
  margin: ${props => props.isMobile ? '0 auto' : ''};
  width: ${props => props.isMobile ? '80%' : '35%'};
`

const LocationText = styled.p`
  font-family: ATSackersGothicMedium;
  position: absolute;
  color: white;
  bottom: 0;
  letter-spacing: 3px;
  font-size: 0.6em;
  right: ${props => !props.orientLeft ? '0' : ''};
  left: ${props => props.orientLeft ? '0' : ''};
  margin-right: ${props => !props.orientLeft ? '35px' : ''};
  margin-left: ${props => props.orientLeft ? '35px' : ''};
` 

export default InformationRow;
