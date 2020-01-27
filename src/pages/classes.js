import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Classes = () => (
  <Layout>
    <SEO title="Mugendo Ashbourne Kickboxing Club: Classes" />
    <h1>Mugendo Ashbourne Kickboxing Club Classes</h1>

    <p>
      Classes are held on Mondays and Thursday in Ashbourne Community Center.
      You are more than welcome to drop by to one of our training sessions, see
      Mugendo at first hand … then decide if you or your family want to take
      part. There are three class ages:
    </p>

    <h4>PeeWee Classes</h4>
    <p>
      This is a fun active class for young children. During the class the kids
      learn discipline, self-respect as well as respect for their classmates,
      all in a fun, friendly, encouraging environment. All kids from age five to
      nine are welcome at all levels. Everyone can start grading at this stage.
    </p>
    <ul>
      <li>Ages 5-9 years</li>
      <li>Time 6pm-6.45pm</li>
      <li>Cost: €4</li>
    </ul>

    <h4>Junior Classes</h4>
    <p>
      This class is fun way for children and young teenagers to get fit and
      learn important skills. Kickboxing can help teenagers with their
      confidence and self-esteem as well as build core strength such discipline,
      self-respect as well as respect for their classmates.
    </p>
    <ul>
      <li>Ages 10-16 years</li>
      <li>Time 6.30-7.30pm</li>
      <li>Cost: €4</li>
    </ul>

    <h4>Adult Classes</h4>
    <p>
      The adult class is for everyone sixteen and over. Some of members are 16,
      while others are closer to sixty. All levels can attend the adults class,
      and beginners classes are run on a every Monday. Adults can grade on a
      regular basis and work to achieve their next belt status, or continue the
      classes as part of a fitness regime without grading.
    </p>
    <ul>
      <li>Ages 16 years plus</li>
      <li>Time 7.30-9pm</li>
      <li>Cost: €6</li>
    </ul>

    <Link to="/">Go to homepage</Link>
  </Layout>
)

export default Classes
