import React, { Component } from 'react';

import CTA from '../Common/cta';
import Footer from '../Common/footer';
import FrontCover from '../Common/frontCover';
import Destinations from '../Destinations/index';

class AllDestinationsPage extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
    
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <FrontCover 
          darkened={0.65}
          description={'Lorem ipsum'}
          title='Destinations.' 
          image={'leaf-header.jpg'} />  

        <div style={{marginTop:'75px'}}>
          <Destinations />  
        </div>

        <CTA />

        <Footer   />
      </div>
    );
  }
}

export default AllDestinationsPage;
