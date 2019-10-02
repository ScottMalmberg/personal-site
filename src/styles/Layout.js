import React from 'react'
import Nav from "../components/Nav"
import "../styles/app.scss"



export default ({children, background}) => 
    
    <div className="app-container">
        <div className="image-container" style={{backgroundImage: background}}/>
        <div className="main-container">
            <Nav />
            <div className="content-container">
                {children}
            </div>
        </div>
    </div>
      



