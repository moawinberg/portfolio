import React, { Component } from 'react'
import ContactBanner from './contact-banner'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="templateux-hero overlay" data-scrollax-parent="true">
          <div className="cover">
            <img style={{ left: '0' }} alt="me" src="images/person_1.jpg" />
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>About Me</h1>
                <p className="lead">
                  Front-end Developer and UI/UX Enthusiast</p>
                <a href="#next" className="go-down js-smoothscroll"></a>
              </div>
            </div>
          </div>
        </section>

        <section className="templateux-section" id="next">
          <div className="container py-5" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12 clearfix mb-3">
                <h2>Hi, I'm Moa.</h2>
              </div>
              <div className="col-md-6">
                <p>I am a developer based in Stockholm. My main area is
                front-end development for web, but I am also experienced of back-end in Ruby on Rails and interaction design.</p>
              </div>

              <div className="col-md-6">
                <p>Currently MSc student in Interactive Media Technology at KTH - Royal Institute of Technology until June
                2021, and employee at <a href="https://codedesign.se/">Code & Design</a>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="templateux-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4" data-aos="fade-up">
                <h2 className="section-heading mt-3">What I Do</h2>
              </div>
              <div className="col-md-8" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="mb-5">My services and skills.</h2>
                  </div>
                </div>
                <div className="row  pt-sm-0 pt-md-5 mb-5">
                  <div className="col-lg-6">
                    <div className="media templateux-media mb-4">
                      <div className="mr-4 icon">
                        <span className="icon-monitor display-3"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="h5">Front-end development</h3>
                        <p>
                          JavaScript, HTML, CSS, AngularJS, ReactJS.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="media templateux-media mb-4">
                      <div className="mr-4 icon">
                        <span className="icon-layers2 display-3"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="h5">Back-end development</h3>
                        <p>Python, Ruby on Rails, SQL and database relations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row clearfix">
                  <div className="col-lg-6">
                    <div className="media templateux-media mb-4">
                      <div className="mr-4 icon">
                        <span className="icon-aperture display-3"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="h5">Design</h3>
                        <p>Prototyping in Sketch and Figma.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="media templateux-media mb-4">
                      <div className="mr-4 icon">
                        <span className="icon-package display-3"></span>
                      </div>
                      <div className="media-body">
                        <h3 className="h5">Project Planning</h3>
                        <p>Working with sprints in Jira/Trello.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactBanner />
      </div>
    )
  }
}