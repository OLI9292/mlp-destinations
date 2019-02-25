import React, { Component } from "react"
import styled from "styled-components"

import { media } from "../../Library/breakpoints"
import colors from "../../Library/colors"
import Header from "../Common/header"
import CTA from "../Common/cta"
import Footer from "../Common/footer"
import FrontCover from "../Common/frontCover"

import { mirandaOnTravelText, articles } from "./data"

class Stories extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const link = data => (
      <Text
        style={{ marginTop: "15px", marginBottom: "15px" }}
        underline
        onClick={() => this.setState({ redirect: data.url })}
      >
        <Link target="_blank" href={data.url}>
          {data.title}
        </Link>

        <span style={{ float: "right", color: colors.gray }}>{data.date}</span>
      </Text>
    )

    return (
      <div style={{ backgroundColor: colors.beige }}>
        <FrontCover darkened={0.1} image={"about/painting.jpg"} />

        <div style={{ textAlign: "center", margin: "75px 0px" }}>
          <Header>STORIES</Header>
          <Text>{mirandaOnTravelText}</Text>
        </div>

        {articles.map(link)}

        <CTA />

        <Footer />
      </div>
    )
  }
}

const Link = styled.a`
  color: ${colors.red};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Text = styled.p`
  font-family: CardoItalic;
  width: 65%;
  max-width: 600px;
  margin: 0 auto;
  letter-spacing: 2px;
  line-height: 30px;
  ${media.phone`
    width: 80%;
  `}
`

export default Stories
