import React, { Component } from 'react'
import Projects from './projects'
import ContactBanner from './contact-banner'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Projects />
        <ContactBanner />
      </div>
    );
  }
}