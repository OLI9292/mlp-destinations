import React, { Component } from "react"
import styled from "styled-components"

import { media } from "../../Library/breakpoints"
import colors from "../../Library/colors"

import CTA from "../Common/cta"
import Footer from "../Common/footer"
import FrontCover from "../Common/frontCover"
import InformationRow from "../Common/informationRow"
import Header from "../Common/header"
import Testimonial from "../Common/testimonial"

const generalText =
  "It's simple. After an initial discussion where we talk about what sort " +
  "of trip you are looking for, and I give you an outline of the possibilities and basics " +
  "to take into consideration I then connect you directly to the specialist. I will have " +
  "sent a summary in advance so you won’t have to repeat yourself, and they will then become " +
  "your primary source of contact, and organize your travel from start to finish but with me " +
  "always in the background to refer to as additional support. In certain instances where you " +
  "do not need a specialist I can provide an outline itinerary for you to self-book your own trip."

const testimonialText =
  "Miranda assessed our wishes and tailored a trip that fully met these, " +
  "providing a perfect balance between private tours and activities we love, like horseback riding, " +
  "tennis and enjoying gourmet meals."

const informations = [
  {
    title: "SABBATICALS",
    content:
      "Similar to advising on an investment strategy, my approach to sabbaticals is to apply the right measure of diversification in terms of relaxation vs activity. I also take into account the individual's risk tolerance vis a vis going beyond the usual travel 'boundaries', such as living alongside native communities or joining a conservation or art project. The goal is to provide the right amount of 'distance' from your work life but in an environment and at a level you are comfortable with.",
    imageUrl: require("../../Library/Images/services/lake.jpg"),
    frameColor: colors.red,
    orientFrame: ["top", "right"],
    inverted: false
  },
  {
    title: "SMALL GROUP TRIPS",
    content:
      "I spend part of each year researching new locations with the purpose of introducing them to clients and writing travel articles. This travel has inspired trips for small groups both with and without me. The itineraries are often based on individual’s particular interests and have included landscape photography, textiles, hiking and horseback riding. Group size ranges from 3 to 6. Past destinations have been Chile, the Bolivian Salt Flats, Cuba, Uruguay, Argentina and Mexico. Upcoming adventures include a desert camel trek in Africa, Nov. 2019, and a road trip from Kashmir to Ladakh, 2020. Please contact me directly for details.",
    imageUrl: require("../../Library/Images/services/sandals.jpg"),
    frameColor: colors.green,
    orientFrame: ["top", "left"],
    inverted: true
  }
]

class Services extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div style={{ backgroundColor: colors.beige }}>
        <FrontCover darkened={0.3} image={"services/boat.jpg"} />

        <div style={{ textAlign: "center", margin: "75px 0px 150px 0px" }}>
          <Header>SERVICES</Header>
          <Text>{generalText}</Text>
        </div>

        {informations.map((i, idx) => (
          <InformationRow
            last={idx + 1 === informations.length}
            key={i.title}
            information={i}
          />
        ))}

        <Testimonial
          text={testimonialText}
          from={"Paul Deutschman, Montreal"}
        />

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

export default Services
