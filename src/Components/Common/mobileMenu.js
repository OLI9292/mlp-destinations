import React, { Component } from "react"
import { Redirect } from "react-router"
import styled from "styled-components"

class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) {
      return <Redirect push to={this.state.redirect} />
    }

    return (
      <OuterContainer show={this.props.display}>
        <InnerContainer>
          <Text onClick={() => this.setState({ redirect: "/" })}>HOME</Text>
          <Text onClick={() => this.setState({ redirect: "/travel" })}>TRAVEL</Text>
          <Text onClick={() => this.setState({ redirect: "/destinations" })}>DESTINATIONS</Text>
          <Text onClick={() => this.setState({ redirect: "/about" })}>ABOUT</Text>
          {/* <Text onClick={() => this.setState({ redirect: "/stories" })}>STORIES</Text> */}
          <Text onClick={() => this.setState({ redirect: "/contact" })}>CONTACT</Text>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

const OuterContainer = styled.div`
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
  display: ${(props) => (props.show ? "" : "none")};
  position: fixed;
  width: 100vh;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 999999999;
`

const InnerContainer = styled.div`
  cursor: pointer;
  transition-duration: 0.35s;
  margin: 20% 0% 0% 17.5%;
  text-align: left;
  z-index: 999999999;
`

const Text = styled.p`
  letter-spacing: 1px;
  cursor: pointer;
  line-height: 100%;
  color: white;
  font-family: ATSackersGothicMedium;
  margin: 10% 0% 10% 0%;
`

export default MobileMenu
