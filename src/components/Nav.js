import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <div id="nav-container">
                <nav> 
                    <strong><a href="#">Words About Me</a> | 
                    <a href="#"> Things I've Made</a> | 
                    <a href="#"> Ways to Talk to Me</a></strong>
                </nav>
            </div>
        )
    }
}

export default Nav
