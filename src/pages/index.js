import React from "react"
import Descriptor from "../components/Descriptor.js"
import Layout from "../styles/Layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Helmet from "react-helmet"
require("../styles/app.scss")

library.add(fab, faEnvelope)

export default () => (
  <Layout image={"url('/images/Scott.jpg')"}>
    <Helmet
      title="Home | Scott Malmberg | JavaScript Developer"
      meta={[
        {
          name: "description",
          content:
            "Hi! I'm Scott Malmberg - a JavaScript developer, hiker, camper, and lots of other things. Check out my site and connect with me here.",
        },
        {
          name: "keywords",
          content:
            "scott malmberg, javascript developer, react developer, full-stack developer, HTML/CSS developer",
        },
      ]}
    />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div id="home-container">
        <div className="icon-container">
          <img
            src="/images/Name.PNG"
            height="350px"
            alt="Scott Malmberg logo"
          ></img>
        </div>
        <Descriptor />
        <div className="icon-container">
          <a
            href="https://github.com/ScottMalmberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://linkedin.com/in/ScottMalmberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a href="mailto:scott@scottmalmberg.com">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)
