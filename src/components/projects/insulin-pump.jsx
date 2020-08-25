import React, { Component } from 'react'

export default class InsulinPump extends Component {
  render() {
    return (
      <div className="insulinPump">
        <section className="templateux-hero" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>Insulin Pump UI</h1>
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
                    <strong>Designer</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Team</span>
                    <strong>I. Johannesson, M. Tavakoli, G. Westman</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Course</span>
                    <strong>DM2582 Media Lab, @ KTH</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-5">The goal of the project was to explore how the UI of the insulin pump could be improved
                    using a a supplementary smartphone application. We believed that the insulin pump is rejected by users
                  due to a non-user-friendly design.</p>
                  </div>
                  <div className="col-md-6">
                    <p>The prototype of the smartphone application we created was made with HTML, JavaScript and CSS using
                  AngularJS as a framework.</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p3.jpg" alt="project" className="img-fluid" /></p>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <p>"How can a smartphone application be used in conjunction with
                    an insulin pump to improve the user interactions?". In order to answer the question, we conducted a
                    study with 70 participants, asking about their thoughts on an insulin pump. We then created a
                    prototype which was tested on approximately 30 users.
                </p>
                  </div>
                  <div className="col-md-6">
                    <p>The results showed that the users that participated in the
                    test are currently
                    not satisfied with the interaction with their insulin pump and that a smartphone application could be
                    a supplement to
                  the device. Although the prototype lacks some important functions in order to be used every day.</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p3_large.jpg" alt="project" className="img-fluid" /></p>
                <p className="text-center"><a href="pdfs/ProjectReportG1.pdf" className="button button--red">View Report</a></p>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}