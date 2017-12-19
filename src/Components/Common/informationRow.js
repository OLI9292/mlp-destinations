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
    window.addEventListener('resize', this.resize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }  

  resize(img) {
    if (this.img) {
      this.setState({ width: this.img.offsetWidth, height: this.img.offsetHeight });
    }
  }

  onChange(visible) {
    if (visible && !this.state.visible) {
      this.setState({ visible: true });
    }
  }

  offsetHeight() {
    return this.img ? -this.img.offsetHeight : 0;
  }

  render() {
    const imageBlock = (() => {
      const [opacity, marginTop] = this.state.visible ? [1, '0px'] : [0, '15px'];
      return <ImageBlock>
        <img
          alt={this.props.information.title}
          onLoad={this.resize.bind(this)} 
          ref={img => {this.img = img}}
          src={this.props.information.imageUrl}
          style={{height:'auto',width:'100%',zIndex:'10',opacity:opacity,marginTop:marginTop,transitionDuration:'1s'}} />
        <div style={{
          backgroundColor: this.props.information.frameColor,
          height: this.state.height,
          marginLeft: this.props.information.orientFrame[1] === 'left' ? '-25px' : '25px',
          position: 'absolute',
          top: this.props.information.orientFrame[0] === 'bottom' ? '25px' : '-25px',
          width: this.state.width,
          zIndex: '-15'
        }}/>
      </ImageBlock>
    })();

    const textBlock = (() => {
      return <div style={{width:'35%'}}> 
        <p style={{fontFamily:'ATSackersGothicMedium',color:colors.red,fontSize:'0.8em',letterSpacing:'2px',lineHeight:'30px  '}}>
          {this.props.information.title.toUpperCase()}
        </p>
        <p style={{fontFamily:'CardoItalic',letterSpacing:'1px',lineHeight:'25px'}}>
          {this.props.information.content}
        </p>
      </div>;
    })();

    return (
      <VisibilitySensor offset={{bottom:this.offsetHeight()}} onChange={this.onChange.bind(this)}>
        {({isVisible}) =>
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
        }
      </VisibilitySensor>
    );
  }
}



const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 115px;
  width: 80%;
`

const ImageBlock = styled.div`
  position: relative;
  width: 55%;
`

export default InformationRow;
