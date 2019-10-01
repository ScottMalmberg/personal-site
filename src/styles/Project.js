import React from 'react'
import "../styles/app.scss"



export default ({children, image, name}) => 

    <div className="project-container">
        <h2>{name}</h2>       
        <img src={image} alt={"A screenshot of" + {name} + "."} />
        {children}
    </div>