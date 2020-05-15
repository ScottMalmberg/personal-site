import React from "react"
import Layout from "../styles/Layout"
import Helmet from "react-helmet"

export default () => (
  <Layout image="url('/images/Fam.JPG')">
    <Helmet
      title="About | Scott Malmberg | JavaScript Developer"
      meta={[
        {
          name: "description",
          content:
            "Learn about where I came from, how I got here, and what I'm up to.",
        },
        {
          name: "keywords",
          content:
            "scott malmberg, javascript developer, react developer, full-stack developer, HTML/CSS developer",
        },
      ]}
    />
    <div className="content-container">
      <h1>Hi There</h1>
      <p>
        My name is Scott. I was born and raised in Texas, but fell madly in love
        with nature when I moved to Utah. I'm currently living in Nashville,
        Tennessee working as a Full-Stack JavaScript Developer at Aloompa.
      </p>
      <p>I have experience with:
      <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Serverless Framework</li>
            <li>AWS</li>
            <li>GraphQL</li>
            <li>And more...</li>
      </ul>
      </p>
      <p>
        After spending the first four years of my career in the digital ads
        space, I started to realize I enjoyed the tech side of marketing more
        than anything else. I started diving into automation, using tools like
        Zapier and Infusionsoft to help streamline my client's business
        processes. I was hooked.
      </p>
      <p>
        From there, I got into web design. This started with WordPress themes
        and moved to using builders like Thrive Architect to customize
        pages/sites from scratch. While learning what goes into making a good
        webpage, I started teaching myself HTML, CSS, and JavaScript through
        FreeCodeCamp.
      </p>
      <p>
        Honestly, I was caught off-guard by how much I enjoyed learning to code.
        The feeling of solving a problem after struggling with it for a while
        has become addicting. So, I decided to keep learning.
      </p>
      <p>
        Besides programming, I try to spend as much time as I can outside
        hiking, camping, and exploring with my wife and our two dogs. I've
        played guitar since I was 9 years old, and have since picked up a
        variety of other instruments. I also love to cook, bake, and eat. My
        dream is to live on a solar-powered farm growing fresh fruit and
        vegetables.
      </p>
    </div>
  </Layout>
)
