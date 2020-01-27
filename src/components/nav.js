import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about/">ABOUT</Link>
      </li>
      <li>
        <Link to="/classes/">CLASSES</Link>
      </li>
    </ul>
  </nav>
)

Nav.propTypes = {}

Nav.defaultProps = {}

export default Nav
