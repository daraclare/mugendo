import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Mugendo Ashbourne Kickboxing Club" />
    <h2>About Mugendo Ashbourne Kickboxing Club</h2>
    <p>
      Mugendo Kickboxing Ashbourne is a member and an associate club of the
      Irish Mugendo Kickboxing Association (IMKA). Our Irish Headquarters are
      based in Channel College in Coolock, Dublin.
    </p>
    <ul>
      <li>
        All IMKA clubs are members of the All Styles Kickboxing Association of
        Ireland (AKAI) the National governing body for Kickboxing in Ireland.
      </li>
      <li>
        All IMKA clubs are also members of the Irish Martial Arts Commission
        (IMAC) the National governing body for Martial arts in Ireland.
      </li>
      <li>
        All Irish Martial Arts Commission (IMAC) clubs http://www.martialarts.ie
        are aligned to the Irish Sports Council (ISC) Coaching Qualifications
        http://www.irishsportscouncil.ie
      </li>
      <li>
        All our Coaches are fully qualified IMKA Black Belt Instructors and
        ISC/IMAC qualified Coaches.
      </li>
    </ul>
    <h2>Kickboxing Classes</h2>
    <p>
      Kickboxing classes for peewees (under 9s), juniors (10-16yrs) and adults
      (16yrs and over) are held in Ashbourne Community Centre on both Mondays
      and Thursdays. Beginners are always welcome at all ages in all classes.
    </p>
    <p>
      Updates to the class timetable for seasonal periods such as Summer and
      Christmas will be updated on the Club's Facebook page.
    </p>
    <Link to="/">Go to homepage</Link>
  </Layout>
)

export default About
