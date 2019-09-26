import React from "react"
import "../styles/app.scss"
import Descriptor from "../components/Descriptor.js"

export default () => 

<div id="app-container">
    <div id="scott-container" className="col"></div>
    <div id="hero-container" className="col">
        <h1>Scott<br/>Malmberg</h1>
        <Descriptor />
        <div id="icon-container">
            <a href="https://github.com/ScottMalmberg" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
            <a href="https://linkedin.com/in/ScottMalmberg" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
        </div>
    </div>
</div>
