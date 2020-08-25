import React, { Component } from 'react'
import ContactBanner from './contact-banner'
import WorkHeader from './work-header'
import Projects from './projects'

export default class Work extends Component {
  render() {
    return (
      <div className="work">
        <WorkHeader />
        <Projects />
        <ContactBanner />
      </div>
    )
  }
}