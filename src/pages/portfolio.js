import React from 'react'
import Layout from '../styles/Layout'
import Project from '../styles/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Helmet from 'react-helmet'

export default () => 

    <Layout image="url('/images/Tree.JPG')">
        <Helmet 
            title="Porfolio | Scott Malmberg | JavaScript Developer" 
            meta={[
                {
                    name: "description",
                    content: "Check out some of my projects! I like building clean, simple user interfaces."
                },
                {
                    name: "keywords",
                    content: "scott malmberg, javascript developer, react developer, full-stack developer, HTML/CSS developer"
                }
            ]}
        />
        <h1>Here Are Some Things</h1>
        <div id="portfolio-container">
            <Project name="Pug Latin" image="/images/Pug Latin.png">
                <p>
                    The idea for Pug Latin was based on FreeCodeCamp's Pig Latin Translator project in their JavaScript course. 
                    I wanted to build something different than just another Pig Latin Translator, so Pug Latin happened.
                    I learned:
                </p>
                <ul>
                    <li>How HTML, CSS, and JS all work together to create a user experience.</li>
                    <li>How to trigger a function by interacting with the UI (clicking the button, passing through the text.)</li>
                    <li>That there are so many different ways to build something, which is both exciting and daunting.</li>
                </ul>
                <p className="icon-caption">View project:</p>
                <div className="icon-container">
                    <a href="https://codepen.io/scottmalmberg/pen/QXYmZo" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={["fab", "codepen"]}/>
                    </a>
                </div>
            </Project>
            <Project name="Pack" image="/images/Pack.png">
                <p>
                    Pack was my first React project. I camp a lot and am constantly consulting a note in my phone to make sure I packed everything for my trips. 
                    So, instead of making a classic to-do list project, I decided to make a camping packing list. 
                    I also wanted to be able to see the weather where I was going, so I hooked it up to WeatherBit's API.
                    I learned:
                </p>
                <ul>
                    <li>How to set up and work within a local development environment (I use VS Code.)</li>
                    <li>How to work with Git and GitHub, setting up remotes via SSH, and deploying to GitHub Pages.</li>
                    <li>Mobile breakpoints and how to test on multiple screen sizes to ensure a consistently nice user experience.</li>
                    <li>I really enjoy working with SASS.</li>
                    <li>Project organization (folders, class/id names, etc.)</li>
                    <li>How to connect to an external API and manipulate JSON data.</li>
                </ul>
                <p className="icon-caption">View project:</p>
                <div className="icon-container">
                    <a href="https://scottmalmberg.github.io/pack/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "github"]}/>
                    </a>
                </div>
            </Project>
            <Project name="This Site" image="/images/Personal.png">
                <p>
                    I wanted to build a clean, fast, modern personal portfolio site that felt familiar, but still unique.
                    To accomplish this, I used Gatsby which made navigation incredibly quick and built a layout componenet to keep the overall style of the site consistent across pages.
                    I also wanted to showcase my love for nature across the site by using pictures of me outside in some of my favorite places. 
                    I learned:
                </p>
                <ul>
                    <li>How to work with Gatsby including creating layout components and using Links.</li>
                    <li>How to use the setInterval() function to run the function that picks physical and personality characteristics and displays them on the site's homepage.</li>
                    <li>How to deploy to Netlify.</li>
                </ul>
                <p className="icon-caption">View project:</p>
                <div className="icon-container">
                    <a href="https://github.com/ScottMalmberg/personal-site" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "github"]}/>
                    </a>
                </div>
            </Project>
        </div>
        
    </Layout>

