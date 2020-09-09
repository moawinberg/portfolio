import React, { Component } from 'react'

export default class Krets extends Component {
  render() {
    return (
      <div className="krets">
        <section className="templateux-hero" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>Krets Studio</h1>
                <a href="#next" className="go-down js-smoothscroll"></a>
              </div>
            </div>
          </div>
        </section>

        <section className="templateux-portfolio-overlap mb-5" id="next">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row work-detail">
                  <div className="col-md-4 ">
                    <span className="caption">Role</span>
                    <strong>Web Developer</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Team</span>
                    <strong>Krets Studio</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Company</span>
                    <strong>Krets Studoi</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-5">The goal with this project was to create a simple website for Krets Studio to enable
                  promotion for the project and recrution of new members.</p>
                  </div>
                  <div className="col-md-6">
                    <p>Krets is a project funded by Allmäna Arvsfonden.
                    The aim is to develop young people's self-organization and leadership in the
                    field of culture.</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p6.png" alt="project" className="img-fluid" /></p>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <p>The website was created in HTML, CSS and JavaScript with AngularJS and NodeJS. The team at Krets Studio provided the design.</p>
                  </div>
                  <div className="col-md-6">
                    <p>Instagram images and videos from Krets account are fetched with the Instagram API and
                    displayed at the home page in order to give the visitors a visual presentation of what the project work with.</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p6_large.png" alt="project" className="img-fluid" /></p>
                <p className="text-center"><a href="https://www.krets.studio/" className="button button--red">Visit
                Website</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}