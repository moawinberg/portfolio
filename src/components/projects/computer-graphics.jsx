import React, { Component } from 'react'

export default class ComputerGraphics extends Component {
  render() {
    return (
      <div className="computerGraphics">
        <section className="templateux-hero" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>Computer Graphics</h1>
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
                    <strong>I. Johannesson</strong>
                  </div>
                  <div className="col-md-4">
                    <span className="caption">Course</span>
                    <strong>DD2258 Introduction to Visualization, Computer Graphics and Image/Video Processing <br />
                  DH2323 Computer Graphics and Interaction @ KTH</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-5">The two courses involved rendering objects in 3D based on the different rendering
                  methods raytracing and rasterization. The code were written in C++.</p>
                  </div>
                  <div className="col-md-6">
                    <p>Transformation such as rotation, translation and scaling were applied for the desired result.
                  Shading, depth buffer and lighting such as Phong Model were also implemented.</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p4.jpg" alt="project" className="img-fluid" /></p>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <p>In DD2258 Introduction to Visualization, Computer Graphics and Image/Video Processing, the labs were
                  created in c++ using the program Inviwo.</p>
                  </div>
                  <div className="col-md-6">
                    <p>In DH2323 Computer Graphics and Interaction the labs were created in C++ using SDL2 as a framework
                  and GLUT for our projects</p>
                  </div>
                </div>
                <p className="text-center mb-5"><img src="images/p4_large.jpg" alt="project" className="img-fluid" /></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}