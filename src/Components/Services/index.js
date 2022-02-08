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
  "It’s simple. Following an initial discussion about the type of trip you are looking for I provide an idea of the possibilities; if it is to one of the areas I cover, which are primarily in South America, we can explore in detail otherwise I connect you directly with the appropriate country specialist. They will then become your primary contact and plan your travel from start to finish but with me always in the background for additional support. In certain situations where it is possible for you to self-book I am happy to provide direction."

const testimonialText =
  "Miranda assessed our wishes and tailored a trip that fully met these, " +
  "providing a perfect balance between private tours and activities we love, like horseback riding, " +
  "tennis and enjoying gourmet meals."

const informations = [
  {
    title: "SMALL GROUP TRIPS",
    content:
      "I spend part of each year researching new locations with the purpose of introducing them to clients and writing travel articles. This travel has inspired trips for small groups both with and without me. The itineraries are often based on individual’s particular interests and have included landscape photography, textiles, hiking and horseback riding. Group size ranges from 3 to 6. Past destinations have been Chile, the Bolivian Salt Flats, Cuba, Uruguay, Argentina and Mexico. Proposed adventures are a road trip from Kashmir to Ladakh, an exploration into the weaving history of Guatemalan textiles and discovering the culture and art of Canada’s First Nations.",
    imageUrl: require("../../Library/Images/services/sandals.jpg"),
    frameColor: colors.green,
    orientFrame: ["top", "left"],
    inverted: true,
  },
  {
    title: "SCHEDULED GROUP DEPARTURES",
    content:
      "I work with a small company called Arcadia Expeditions who redefine the concept of group travel. Their trips are suited to experienced travelers with an interest in ancient cultures. Each group is accompanied by an expert be it historian, archaeologist or other specialist who will lead you on a trail of discovery far deeper than a regular tour guide. Comfort is not compromised and personal time is included. Please contact me directly for details on their departures.",
    imageUrl: require("../../Library/Images/services/Scheduled-Group-Departures.jpg"),
    frameColor: colors.red,
    orientFrame: ["top", "right"],
    inverted: false,
  },
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
          <Header>TRAVEL</Header>
          <Text>{generalText}</Text>
        </div>

        {informations.map((i, idx) => (
          <InformationRow last={idx + 1 === informations.length} key={i.title} information={i} />
        ))}

        <Testimonial text={testimonialText} from={"Paul Deutschman, Montreal"} />

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
