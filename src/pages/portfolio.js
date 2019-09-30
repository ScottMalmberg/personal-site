import React from 'react'
import Layout from '../styles/Layout'

export default () => 

    <Layout background="url('/images/Tree.JPG')">
        <h1>Here Are Some Things</h1>
        <div id="portfolio-container">
            <div className="project-container">
                <h2>Pug Latin</h2>
                <img src="/images/Pug Latin.png" alt="A screenshot of Pug Latin."/>
                <p>
                    The idea for Pug Latin was based on FreeCodeCamp's Pig Latin Translator project in their JavaScript course. 
                    I wanted to build something different than just another Pig Latin Translator, so Pug Latin happened.
                    I learned:
                </p>
                <ul>
                    <li>How HTML, CSS, and JS all work together to create a user experience.</li>
                    <li>How to trigger a function by interacting with the UI (clicking the button, passing through the text.)</li>
                    <li>That there are so many different ways to build something.</li>
                </ul>
                <div className="icon-container">
                    <a href="https://codepen.io/scottmalmberg/pen/QXYmZo" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a>
                </div>
            </div>
            <div className="project-container">
                <h2>Pack</h2>
            </div>
        </div>
        
    </Layout>

