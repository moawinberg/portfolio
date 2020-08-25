import React, { Component } from 'react'

export default class WorkHeader extends Component {
  render() {
    return (
      <div className="workHeader">
        <section className="templateux-hero" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>Portfolio</h1>
                <p className="lead">Check out my latest work</p>
                <a href="#next" className="go-down js-smoothscroll"></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}