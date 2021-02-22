import React, { Component } from 'react'

export default class InformationVisualization extends Component {
  render() {
    return (
      <div className="informationVisualization">
        <section className="templateux-hero" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>Information Visualization</h1>
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
                    <strong>Front-end developer</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Team</span>
                    <strong>Individual work</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Course</span>
                    <strong>DH2321 Information Visualization @ KTH</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-5">The goal of the project was to define and explore a research question with help from
                    data from WVS data base. The data was transformed, mapped and represented with D3.js parallel
                  coordinates. </p>
                  </div>
                  <div className="col-md-6">
                    <p>The user can click on item in list to focus, drag vertically along an axis to brush, reorder, invert
                    and remove axis.
                </p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p5.jpg" alt="project" className="img-fluid" /></p>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <p>The research questions explored was "What priorities in life are important in order to maintain a
                    good physical and mental health?"
                </p>
                  </div>
                  <div className="col-md-6">
                    <p>Read more in the discovery process below:</p>
                  </div>
                </div>
                <iframe style={{ width: '100%', height: '500px', marginBottom: '5vh' }}
                  src="https://docs.google.com/presentation/d/e/2PACX-1vTTdGQkTJ6-1GZ8HvSUa64I3ZXuIS7k6vD6j2xJDaVcXy0-RORMkoQN_N3PzxBY52A9i76lfJxnFca0/embed?start=false&loop=false&delayms=3000"
                  frameBorder="0" allowFullScreen={true}></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}