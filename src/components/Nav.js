import React from 'react'
import {Link} from 'gatsby'

export default ({background}) =>
        
        <div className="nav-container" id="desktop-nav">
            <nav> 
                <strong><Link to="/" activeStyle={{color: '#0093CA'}}>Home</Link> |
                <Link to="/about" activeStyle={{color: '#0093CA'}}> Words About Me</Link> | 
                <Link to="/portfolio" activeStyle={{color: '#0093CA'}}> Things I've Made</Link></strong>
            </nav>
        </div>
 

