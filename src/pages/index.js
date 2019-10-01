import React from "react"
import "../styles/app.scss"
import Descriptor from "../components/Descriptor.js"
import Layout from "../styles/Layout"


export default () => 

<Layout background={"url('/images/Scott.jpg')"}>
    
    <div id="home-container">
        <h1 style={{color: '#F0F3BD'}}><strong>Scott<br/>Malmberg</strong></h1>
        <Descriptor />
        <div className="icon-container">
            <a href="https://github.com/ScottMalmberg" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
            <a href="https://linkedin.com/in/ScottMalmberg" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
        </div>
    </div>
    
</Layout>
            