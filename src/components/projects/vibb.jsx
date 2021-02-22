import React, { Component } from 'react'

export default class Vibb extends Component {
  render() {
    return (
      <div className="vibb">
        <section className="templateux-hero" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>Vibb</h1>
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
                    <strong>Designer, Creator of prototype</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Team</span>
                    <strong>B. Brånemark, V. Ceder, P. Hjort, I. Johannesson</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Course</span>
                    <strong>DM2601 Media Technology and Interaction Design @ KTH</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-5">The goal of the project was to create the interaction design a virtual product product
                    of choice. We chose to create 'Vibb', a bracelet which vibrates in order to wake up the user in the
                  morning.</p>
                  </div>
                  <div className="col-md-6">
                    <p>We then created a clickable prototype for an iOS application which would be used together with the
                    bracelet.
                    The prototype was created in Sketch.
                </p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p8.jpg" alt="project" className="img-fluid" /></p>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <p>The user set's a MotionID, which is a custom made motion the user has to perform to turn of the alarm
                  in the morning. The MotionID setup is the same logic as iOS FaceID. </p>
                  </div>
                  <div className="col-md-6">
                    <p>The user can choose vibration pattern for the alarm, in the same way as a custom vibration can be
                  made for ringtone in an iOS device.</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p8_large.jpg" alt="project" className="img-fluid" /></p>
                <video style={{ marginBottom: '5vh' }} className="img-fluid" controls>
                  <source src="videos/vibb.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}