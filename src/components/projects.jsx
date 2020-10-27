import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Projects extends Component {
  render() {
    return (
      <div className="projects" style={{ marginTop: '10vh' }}>
        <section className="templateux-portfolio-overlap" id="next">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up">
                <NavLink className="project" to="/krets-studio">
                  <figure>
                    <img alt="project" src="images/p6.png" className="img-fluid" />
                  </figure>
                  <div className="project-hover">
                    <div className="project-hover-inner">
                      <h2>Krets Studio</h2>
                      <span>View Project</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <NavLink className="project" to="/tag-ar">
                  <figure>
                    <img alt="project" src="images/p2.jpg" className="img-fluid" />
                  </figure>
                  <div className="project-hover">
                    <div className="project-hover-inner">
                      <h2>tagAR</h2>
                      <span>View Project</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="fade-up">
                <NavLink className="project" to="/thunderball">
                  <figure>
                    <img alt="project" src="images/p1.jpg" className="img-fluid" />
                  </figure>
                  <div className="project-hover">
                    <div className="project-hover-inner">
                      <h2>Thunderball</h2>
                      <span>View Project</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <NavLink className="project" to="/information-visualization">
                  <figure>
                    <img alt="project" src="images/p5.jpg" className="img-fluid" />
                  </figure>
                  <div className="project-hover">
                    <div className="project-hover-inner">
                      <h2>Information Visualization</h2>
                      <span>View Project</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <NavLink className="project" to="/computer-graphics">
                  <figure>
                    <img alt="project" src="images/p4.jpg" className="img-fluid" />
                  </figure>
                  <div className="project-hover">
                    <div className="project-hover-inner">
                      <h2>Computer Graphics</h2>
                      <span>View Project</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6" data-aos="fade-up">
                <NavLink className="project" to="/insulin-pump">
                  <figure>
                    <img alt="project" src="images/p3.jpg" className="img-fluid" />
                  </figure>
                  <div className="project-hover">
                    <div className="project-hover-inner">
                      <h2>Insulin Pump UI</h2>
                      <span>View Project</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <NavLink className="project" to="/vibb">
                  <figure>
                    <img alt="project" src="images/p8.jpg" className="img-fluid" />
                  </figure>
                  <div className="project-hover">
                    <div className="project-hover-inner">
                      <h2>Vibb</h2>
                      <span>View Project</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
