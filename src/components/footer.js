import React from "react"

const Footer = () => (
  <footer
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <p>
      Mugendo Ashbourne Kickboxing Club | Ashbourne Community Centre, Ashbourne,
      Co. Meath
    </p>
    <p>
      <a href="https://www.facebook.com/mugendo.imka">Connect on Facebook</a>
    </p>

    <p>
      <a href="mailto:info@mugendo-ashbourne.ie">Email Mugendo Ashbourne</a> |
      Tel: 087 412 3694
    </p>
    <p>
      © {new Date().getFullYear()}, site by
      {` `}
      <a href="http://www.daraclare.com/index.html">daraclare</a>
    </p>
  </footer>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
