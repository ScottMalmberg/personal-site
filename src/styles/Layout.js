import React from "react"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
require("../styles/app.scss")

export default ({ children, image }) => (
  <div className="app-container">
    <div className="image-container" style={{ backgroundImage: image }}>
    </div>
    <div className="main-container">
      <Nav />
      {children}
    </div>
      <MobileNav />
  </div>
)
