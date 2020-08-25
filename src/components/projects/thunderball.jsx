import React, { Component } from 'react'

export default class Thunderball extends Component {
  render() {
    return (
      <div className="thunderball">
        <section className="templateux-hero" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>Thunderball</h1>
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
                    <strong>Front-end developer, Website</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Team</span>
                    <strong>A. Andersen, F. Lundkvist, H. Bennet, I. Johannesson, M. Larsson
                </strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Course</span>
                    <strong>DH2321 Information Visualization @ KTH</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-5">Thunderball is a weather forecast visualization service. The goal of the application was
                    to help the energy sector with predictions by providing a visualization of different weather forecast.
                </p>
                  </div>
                  <div className="col-md-6">
                    <p>The data used in the visualization is provided by <a
                      href="https://greenlytics.io/">Greenlytics.io</a> through their weather
                  forecast API. The application was created in ReactJS using D3.js and mapbox.</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p1.jpg" alt="project" className="img-fluid" /></p>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <p>Thunderball allows the user to see temperature and wind speed at different times of the day,
                  as predicted by different weather forecasts.</p>
                  </div>
                  <div className="col-md-6">
                    <p>The user can zoom and pan around the map, search for locations using the search bar, get
                  details by hovering different areas and switch between different models by the timeline.</p>
                  </div>
                </div>
                <video style={{ marginBottom: '5vh' }} className="img-fluid" controls>
                  <source src="videos/video.mp4" type="video/mp4" />
                </video>
                <p className="text-center"><a href="https://moawinberg.github.io/thunderball-pages/"
                  className="button button--red">Visit Website</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}