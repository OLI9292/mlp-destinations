import React, { Component } from "react"
import { Redirect } from "react-router"
import styled from "styled-components"

import colors from "../../Library/colors"
import { media } from "../../Library/breakpoints"

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) {
      return <Redirect push to={this.state.redirect} />
    }

    return (
      <Container>
        <InnerContainer>
          <LinksContainer>
            <Link onClick={() => this.setState({ redirect: "/travel" })}>TRAVEL</Link>

            <Link onClick={() => this.setState({ redirect: "/destinations" })}>DESTINATIONS</Link>

            <Link onClick={() => this.setState({ redirect: "/about" })}>ABOUT</Link>

            {/* <Link onClick={() => this.setState({ redirect: "/stories" })}>STORIES</Link> */}

            <Link onClick={() => this.setState({ redirect: "/contact" })}>CONTACT</Link>
          </LinksContainer>
          <ContactInfo>
            <a style={{ textDecoration: "none", color: "white" }} href="mailto:miranda@mlpdestinations.com">
              MIRANDA@MLPDESTINATIONS.COM
            </a>
            <br />
            <br />
            1-203-564-3974
          </ContactInfo>
        </InnerContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: ${colors.red};
  width: 100%;
  height: 135px;
  text-align: left;
  ${media.phone`
    height: 100px;
  `}
`

const InnerContainer = styled.div`
  padding-top: 60px;
  margin-left: 5%;
  ${media.phone`
    margin: 0 auto;
    padding-top: 0px;
    text-align: center;
  `}
`

const Link = styled.p`
  display: inline-block;
  color: white;
  font-family: ATSackersGothicMedium;
  font-size: 0.6em;
  margin-right: 30px;
  cursor: pointer;
  letter-spacing: 2px;
`

const LinksContainer = styled.div`
  display: inline-block;
  margin-top: 5px;
  ${media.phone`
    display: none;
  `}
`

const ContactInfo = styled.p`
  font-family: ATSackersGothicMedium;
  display: inline-block;
  color: white;
  float: right;
  letter-spacing: 2px;
  font-size: 0.6em;
  margin-right: 5%;
  margin-top: 15px;
  text-align: right;
  ${media.phone`
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
    float: none;
    font-size: 0.55em;
  `}
`

export default Footer
