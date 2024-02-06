import React, { Component } from "react"
import { Redirect } from "react-router"
import styled from "styled-components"

import logo from "../../Library/Images/logo.png"
import underline from "../../Library/Images/brush-stroke.svg"
import { media } from "../../Library/breakpoints"
import MobileMenu from "./mobileMenu"

class FrontCover extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMobileMenu: false,
    }
  }

  render() {
    if (this.state.redirect && !window.location.href.endsWith(this.state.redirect)) {
      return <Redirect push to={this.state.redirect} />
    }

    const path = window.location.pathname

    return (
      <Container onLoad={this.handleImageLoaded} image={require(`../../Library/Images/${this.props.image}`)} isContact={path.includes("contact")}>
        <Burger
          src={require(`../../Library/Images/${this.state.displayMobileMenu ? "exit.png" : "burger.png"}`)}
          onClick={() => this.setState({ displayMobileMenu: !this.state.displayMobileMenu })}
        />

        <MobileMenu display={this.state.displayMobileMenu} />

        <Mask isContact={path.includes("contact")} darkened={this.props.darkened} />

        <InnerContainer>
          <LogoContainer hide={path.includes("destinations/") || path.includes("contact")}>
            <span
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                height: "100%",
              }}
            />
            <Logo onClick={() => this.setState({ redirect: "/" })} src={logo} />
          </LogoContainer>

          <LinksContainer>
            <Link flex={1} onClick={() => this.setState({ redirect: "/travel" })}>
              TRAVEL
              <img alt={"underline"} src={underline} style={{ display: path.includes("travel") ? "" : "none" }} />
            </Link>

            <Link flex={1.2} onClick={() => this.setState({ redirect: "/destinations" })}>
              DESTINATIONS
              <img alt={"underline"} src={underline} style={{ display: path.includes("destinations") ? "" : "none" }} />
            </Link>

            <Link flex={0.85} onClick={() => this.setState({ redirect: "/about" })}>
              ABOUT
              <img alt={"underline"} src={underline} style={{ display: path.includes("about") ? "" : "none" }} />
            </Link>

            {/* <Link flex={1} onClick={() => this.setState({ redirect: "/stories" })}>
              STORIES
              <img alt={"underline"} src={underline} style={{ display: path.includes("stories") ? "" : "none" }} />
            </Link> */}

            <Link flex={1} onClick={() => this.setState({ redirect: "/contact" })}>
              CONTACT
              <img alt={"underline"} src={underline} style={{ display: path.includes("contact") ? "" : "none" }} />
            </Link>
          </LinksContainer>
        </InnerContainer>

        {this.props.destination ? (
          <div
            style={{
              textAlign: "center",
              margin: "0 auto",
              width: "45%",
              color: "white",
              marginTop: "50px",
              letterSpacing: "3px",
            }}
          >
            <h3 style={{ fontFamily: "ATSackersGothicMedium", fontSize: "1.3em" }}>{this.props.destination.name.toUpperCase()}</h3>
            <Places>{this.props.destination.places}</Places>
          </div>
        ) : (
          <Tagline hide={path.includes("contact")}>
            YOUR PERSONAL GUIDE
            <br />
            <br />
            <TaglineSpan>TO PRIVATE TRAVEL...</TaglineSpan>
          </Tagline>
        )}

        {this.props.page === "home" && (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              position: "absolute",
              top: "75%",
            }}
          >
            <LetsTalkButton onClick={() => this.setState({ redirect: "/contact" })}>lets talk</LetsTalkButton>
          </div>
        )}
      </Container>
    )
  }
}

const Container = styled.div`
  z-index: 100;
  background: url(${(props) => props.image}) no-repeat center center;
  background-size: 100% auto;
  height: 550px;
  width: 100%;
  position: relative;
  ${media.phone`
    height: 100vh;
    background-size: auto 100%;
    pointer-events: ${(props) => (props.isContact ? "none" : "auto")};
    z-index: ${(props) => (props.isContact ? "150" : "100")};
    background: ${(props) => (props.isContact ? "none" : `url(${(props) => props.image}) no-repeat center center`)};
    text-align: center;
  `}
`

const Places = styled.p`
  font-family: CardoItalic;
  line-height: 30px;
  ${media.phone`
    margin-top: 20%;
  `}
`

const Burger = styled.img`
  pointer-events: auto;
  height: 5%;
  background-color: rgba(156, 62, 76, 0.99);
  padding: 7.5px;
  width: auto;
  position: fixed;
  top: 3.5%;
  left: 4.5%;
  display: none;
  transition-duration: 0.35s;
  z-index: 99999999999;
  ${media.phone`
    display: inline-block;
  `}
`

const Mask = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, ${(props) => props.darkened});
  ${media.phone`
    background: rgba(0,0,0,${(props) => (props.isContact ? 0 : props.darkened)});
  `}
`

const LogoContainer = styled.div`
  margin-left: 50px;
  width: 30%;
  height: 200px;
  white-space: nowrap;
  ${media.phone`
    display: ${(props) => (props.hide ? "none" : "")}; 
    transition-duration: 0.35s;
    width: 70%;
    margin: 0 auto;
    height: 0px;
  `}
`

const Logo = styled.img`
  margin-left: 5%;
  width: 100%;
  cursor: pointer;
  vertical-align: middle;
  ${media.phone`
    display: block;
    margin: 0 auto;
    margin-top: 50px;
  `}
`

const LinksContainer = styled.div`
  display: flex;
  margin-left: 2.5%;
  width: 65%;
  justify-content: space-evenly;
  float: right;
  font-size: 0.95em;
  margin-top: 80px;
`

const InnerContainer = styled.div`
  display: flex;
  padding-top: 10px;
  ${media.phone`
    display: block;
  `}
`

const Link = styled.p`
  display: inline-block;
  color: white;
  font-family: ATSackersGothicMedium;
  font-size: 0.7em;
  cursor: pointer;
  letter-spacing: 3px;
  width: 130px;
  text-align: center;
  flex: ${(props) => props.flex};
  ${media.phone`
    display: none;
  `}
`

const Tagline = styled.div`
  margin-top: 150px;
  margin-left: 42.5%;
  font-family: EBGARAMOND12REGULAR;
  font-size: 1.2em;
  color: white;
  letter-spacing: 4px;
  display: ${(props) => (props.hide ? "none" : "")};
  ${media.phone`
    transition-duration: 0.35s;
    position: absolute;
    width: 100%;
    margin: 0 auto;
    top: 60%;
  `}
`

const TaglineSpan = styled.span`
  margin-left: 160px;
  ${media.phone`
    margin: 0px;
  `}
`

const LetsTalkButton = styled.p`
  display: none;
  cursor: pointer;
  ${media.phone`
    display: inline-block;
    transition-duration: 0.35s;
    font-family: ATSackersGothicMedium;
    background-color: rgba(156, 62, 76, 0.85);
    color: white;
    padding: 15px 20px 15px 20px;
    letter-spacing: 1px;
  `}
`

export default FrontCover
