import React from 'react'
import {Link} from 'gatsby'

export default ({background}) =>
        
        <div className="nav-container" id="desktop-nav">
            <nav> 
                <strong><Link to="/" activeStyle={{color: '#00A896'}}>Home</Link> |
                <Link to="/about" activeStyle={{color: '#00A896'}}> Words About Me</Link> | 
                <Link to="/portfolio" activeStyle={{color: '#00A896'}}> Things I've Made</Link></strong>
            </nav>
        </div>
 

