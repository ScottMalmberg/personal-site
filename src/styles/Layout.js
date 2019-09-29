import React from 'react'
import Nav from "../components/Nav"
import "../styles/app.scss"



export default ({children, background}) => 
    
    <div className="app-container">
        <div className="col image-container" style={{backgroundImage: background}}/>
        <div className="col main-container">
            <Nav />
            <div className="content-container">
                {children}
            </div>
        </div>
    </div>
      



