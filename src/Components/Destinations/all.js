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
      <div>
        <FrontCover darkened={0.6} image={'destinations/footprints.png'} />  

        <div style={{marginTop:'75px',textAlign:'center'}}>
          <Destinations />  
        </div>

        <CTA />

        <Footer   />
      </div>
    );
  }
}

export default AllDestinationsPage;
