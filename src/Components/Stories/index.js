import React, { Component } from "react"
import styled from "styled-components"

import { media } from "../../Library/breakpoints"
import colors from "../../Library/colors"
import Header from "../Common/header"
import CTA from "../Common/cta"
import Footer from "../Common/footer"
import FrontCover from "../Common/frontCover"

const DATA_URL =
  "https://docs.google.com/spreadsheets/d/1mHWf6x0f8oB-EkEOAFZ0dDmAH5_0-xdY3u4MrOGaZcw/export?format=csv&id=1mHWf6x0f8oB-EkEOAFZ0dDmAH5_0-xdY3u4MrOGaZcw&gid=0"

class Stories extends Component {
  constructor(props) {
    super(props)
    this.state = { stories: [] }
  }

  componentDidMount() {
    this.loadStories()
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  parseLine(line) {
    const components = line
      .split(",")
      .map(str => str.trim())
      .filter(str => str)
    if (components.length !== 4) return

    const title = components[0]
    const date = components[1] + ", " + components[2]
    const url = components[3]

    return { title, date, url }
  }

  loadStories() {
    fetch(DATA_URL)
      .then(res => res.text())
      .then(rows => {
        const stories = rows
          .split("\n")
          .slice(1)
          .reverse()
          .map(this.parseLine)
          .filter(story => story)
        this.setState({ stories })
      })
  }

  render() {
    const link = data => (
      <Text
        style={{
          fontFamily: "EBGARAMOND12",
          fontSize: "1.15em",
          letterSpacing: "1px"
        }}
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
        <FrontCover darkened={0.1} image={"stories.jpg"} />

        <div style={{ textAlign: "center", margin: "75px 0px" }}>
          <Header>STORIES</Header>
          <Text>
            I am a regular contributor for{" "}
            <a
              style={{ textDecoration: "none", color: colors.red }}
              href="https://www.lustre.net"
              target="_blank"
            >
              Lustre.net
            </a>
            , a platform which redefines the image of retirement for professional women worldwide.
            <br />
            <br />
            Below are my stories:
          </Text>
        </div>

        {this.state.stories.map(link)}

        <CTA />

        <Footer />
      </div>
    )
  }
}

const Link = styled.a`
  color: black;
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
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 30px;
  ${media.phone`
    width: calc(100% - 40px);
  `}
`

export default Stories
