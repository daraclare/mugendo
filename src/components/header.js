import React from "react"
import Nav from "./nav"
import mugendoLogo from "../images/mugendo-logo.svg"

const Header = () => (
  <header
    style={{
      background: `linear-gradient(90deg, rgba(153,0,0,1) 0%, rgba(216,31,47,1) 50%, rgba(153,0,0,1) 100%)`,
      marginBottom: `1.45rem`,
    }}
  >
    <Nav />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        textAlign: `center`,
      }}
    >
      <img alt="Mugendo Logo" width="300px" src={mugendoLogo} />
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
