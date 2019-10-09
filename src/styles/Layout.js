import React from 'react'
import Nav from "../components/Nav"
import MobileNav from '../components/MobileNav'
import Helmet from 'react-helmet'
import favicon from '../../public/favicon.ico'
require("../styles/app.scss")



export default ({children, image}) => 
    
    <div className="app-container">
        <Helmet 
            title="Scott Malmberg" 
            meta={[
                {
                    name: "description",
                    content: "Scott Malmberg - Front-End Developer"
                }
            ]}
            link={[{rel:"shortcut icon", type: "image/x-icon", href: `${favicon}`},]}
        />
            
        <div className="image-container" style={{backgroundImage: image}}>
            <MobileNav />
        </div>
        <div className="main-container">
            <Nav />
            <div className="content-container">
                {children}
            </div>
        </div>
    </div>
      



