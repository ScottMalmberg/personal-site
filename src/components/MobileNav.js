import React from 'react'
import {Link} from 'gatsby'

export default () =>
        
        <div className="nav-container" id="mobile-nav">
            <nav> 
                <strong><Link to="/" activeStyle={{color: '#F0F3BD'}}>Home</Link> |
                <Link to="/about" activeStyle={{color: '#F0F3BD'}}> Words About Me</Link> | 
                <Link to="/portfolio" activeStyle={{color: '#F0F3BD'}}> Things I've Made</Link> | 
                <Link to="/contact" activeStyle={{color: '#F0F3BD'}}> Ways to Talk to Me</Link></strong>
            </nav>
        </div>