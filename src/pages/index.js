import React from "react"
import Descriptor from "../components/Descriptor.js"
import Layout from "../styles/Layout"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
require("../styles/app.scss")

library.add(fab);

export default () => 

<Layout image={"url('/images/Scott.jpg')"}>
    
    <div id="home-container">
        <h1 style={{color: '#F0F3BD'}}><strong>Scott<br/>Malmberg</strong></h1>
        <Descriptor />
        <div className="icon-container">
            <a href="https://github.com/ScottMalmberg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","github"]}/></a>
            <a href="https://linkedin.com/in/ScottMalmberg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","linkedin"]}/></a>
        </div>
    </div>
    
</Layout>
            