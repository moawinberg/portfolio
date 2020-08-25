import React, { Component } from 'react'
import ContactBanner from './contact-banner'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="templateux-hero overlay" data-scrollax-parent="true">
          <div className="cover" data-scrollax="properties: { translateY: '30%' }">
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
                front-end development but I also work with database relations and back-end in
            Ruby on Rails.</p>
              </div>

              <div className="col-md-6">
                <p>Currently MSc student in Interactive Media Technology at KTH - Royal Institute of Technology until June
                2021, and employee at <a href="https://codedesign.se/">Code & Design</a>.</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" data-aos="fade-up">
                <div className="owl-carousel dots-overlap wide-slider">
                  <div className="item"><img src="images/hero_1.jpg" alt="Free Template" className="img-fluid" /></div>
                  <div className="item"><img src="images/hero_3.jpg" alt="Free Template" className="img-fluid" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="templateux-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 clearfix mb-5" data-aos="fade-up">
                <h2>My skills</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="media templateux-media mb-4">
                  <div className="mr-4 icon">
                    <span className="icon-monitor display-3"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="h5">Tools</h3>
                    <p>Sketch, GitHub, Terminal, Bootstrap</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="media templateux-media mb-4">
                  <div className="mr-4 icon">
                    <span className="icon-command display-3"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="h5">Languages</h3>
                    <p>CSS, Sass, HTML, JavaScript Swift, Ruby, Python, MATLAB</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="media templateux-media mb-4">
                  <div className="mr-4 icon">
                    <span className="icon-feather display-3"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="h5">Frameworks</h3>
                    <p>AngularJS, ReactJS, Rails</p>
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