import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Mugendo Ashbourne Kickboxing" />
    <h1>Mugendo Ashbourne Kickboxing</h1>
    <p>
      Welcome to the official website of Mugendo Ashbourne. Mugendo Kickboxing
      as a martial art can grow with your evolving needs, whether you are
      initially looking to improve your fitness, learn self-defence or
      interested in competing, then Mugendo Kickboxing should be seriously
      considered.
    </p>
    <p>
      As you grow in confidence with this martial art why not get into the ring
      for some light or semi-contact sparring. Then in time you may choose to
      compete at light, semi or even full contact kickboxing as many others have
      done before.
    </p>
    <p>
      For more information browse this site and please feel free to get in
      contact.
    </p>

    <Link to="/about/">About Mugendo Kickboxing Ashbourne</Link>
  </Layout>
)

export default IndexPage
