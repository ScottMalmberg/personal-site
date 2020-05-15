import React from 'react'
import {Link} from 'gatsby'

export default () =>
        
        <div className="nav-container" id="mobile-nav">
            <nav> 
                <strong><Link to="/" activeStyle={{color: '#86953D'}}>Home</Link> |
                <Link to="/about" activeStyle={{color: '#86953D'}}> Words</Link> | 
                <Link to="/portfolio" activeStyle={{color: '#86953D'}}> Things</Link>
                </strong>
            </nav>
        </div>