import React, { Component } from 'react'

export default class TagAr extends Component {
  render() {
    return (
      <div className="tagAr">
        <section className="templateux-hero" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>tagAR</h1>
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
                    <strong>Developer</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Team</span>
                    <strong>E. Lindberg, P. Hjorth, S. Blomkvist</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Course</span>
                    <strong>DT2140 Multimodal Interaction and Interfaces @ KTH</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-5">tagAr is a virtual graffiti application. The goal of the
                    project was to explore how different feedback modalities such as audio and haptics affected the
                  user experience.</p>
                  </div>
                  <div className="col-md-6">
                    <p>Patric and I implemented the application in Swift, using ARKit. Erik and Sebastian performed the user
                  experience and the visual media.</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p2.jpg" alt="project" className="img-fluid" /></p>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <p>The more redundant feedback modalities which occurs in the natural activity is mimicked, the better.
                </p>
                  </div>
                  <div className="col-md-6">
                    <p>The project was created in the course DT2140 Multimodal Interaction and Interfaces at KTH.</p>
                  </div>
                </div>
                <video style={{ marginBottom: '5vh'}} className="img-fluid" controls>
                  <source src="videos/tagAR.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}