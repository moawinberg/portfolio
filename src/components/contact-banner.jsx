import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class ContactBanner extends Component {
  render() {
    return (
      <NavLink data-aos="fade-up" className="templateux-section templateux-cta animsition-link mt-5" to="/contact">
        <div className="container-fluid">
          <div className="cta-inner">
            <h2><span className="words-1">Get in touch.</span> <span className="words-2">Contact me.</span></h2>
          </div>
        </div>
      </NavLink>
    )
  }
}