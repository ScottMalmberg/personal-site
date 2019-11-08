import React from "react"
import Descriptor from "../components/Descriptor.js"
import Layout from "../styles/Layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Helmet from 'react-helmet'
require("../styles/app.scss")

library.add(fab, faEnvelope);

export default () => 

<Layout image={"url('/images/Scott.jpg')"}>
    <Helmet 
        title="Home | Scott Malmberg | Front-End Developer" 
        meta={[
            {
                name: "description",
                content: "Hi! I'm Scott Malmberg - a front-end developer, hiker, camper, and lots of other things. Check out my site and connect with me here."
            },
            {
                name: "keywords",
                content: "scott malmberg, front-end developer, react developer, javascript developer, HTML/CSS developer"
            }
        ]}
    />
    <div className="icon-container">
            <img src="/images/Name.PNG" height="350px"></img>
    </div>

    <div id="home-container">
        <Descriptor />
        <div className="icon-container">
            <a href="https://github.com/ScottMalmberg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","github"]}/></a>
            <a href="https://linkedin.com/in/ScottMalmberg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","linkedin"]}/></a>
            <a href="mailto:scott@scottmalmberg.com"><FontAwesomeIcon icon="envelope"/></a>
        </div>
    </div>
    
</Layout>
            