import React, { Component } from "react"
import styled from "styled-components"

import colors from "../../Library/colors"
import { media } from "../../Library/breakpoints"

import CTA from "../Common/cta"
import Footer from "../Common/footer"
import FrontCover from "../Common/frontCover"
import Destinations from "../Destinations/index"
import Testimonial from "../Common/testimonial"

const conceptText =
  "Based on the belief that a travel planner can only truly advise on countries they are personally familiar with I restrict my coverage to those and for other destinations I work alongside a small group of specialists who follow a similar approach. This focus is key to being able to provide you with the best service and most up to date information on the following destinations......"

const testimonialText =
  "Miranda has a unique gift for listening to and understanding " +
  "her clients. She knows that the terms holiday, travel, and exploration do not mean " +
  "'one size fits all',"

class Home extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div style={{ backgroundColor: colors.beige }}>
        <FrontCover page={"home"} darkened={0.35} image={"home/elephant.jpg"} />

        <div style={{ textAlign: "center", margin: "75px 0px 100px 0px" }}>
          <Text>{conceptText}</Text>
        </div>

        <Destinations />

        <Testimonial text={testimonialText} from={"Elizabeth Morgan, London"} />

        <CTA />

        <Footer />
      </div>
    )
  }
}

const Text = styled.p`
  font-family: CardoItalic;
  width: 65%;
  max-width: 600px;
  margin: 0 auto;
  letter-spacing: 2px;
  line-height: 30px;
  margin-bottom: 75px;
  ${media.phone`
    width: 80%;
  `}
`

export default Home
