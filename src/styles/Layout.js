import React from 'react'
import Nav from "../components/Nav"
import "../styles/app.scss"
import MobileNav from '../components/MobileNav'



export default ({children, image}) => 
    
    <div className="app-container">
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
      



