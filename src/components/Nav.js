import React, { Component } from 'react'
import {Link} from 'gatsby'

export class Nav extends Component {
    render() {
        return (
            <div id="nav-container">
                <nav> 
                    <strong><Link to="/about">Words About Me</Link> | 
                    <Link to="#"> Things I've Made</Link> | 
                    <Link to="#"> Ways to Talk to Me</Link></strong>
                </nav>
            </div>
        )
    }
}

export default Nav
