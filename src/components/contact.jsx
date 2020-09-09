import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <section className="templateux-hero mb-5" data-scrollax-parent="true">
          <div className="container">
            <div className="row align-items-center justify-content-center intro">
              <div className="col-md-10" data-aos="fade-up">
                <h1>Get in touch</h1>
                <p className="lead">Contact me</p>
                <a href="#next" className="go-down js-smoothscroll"></a>
              </div>
            </div>
          </div>
        </section>

        <section className="templateux-portfolio-overlap mb-5" data-aos="fade-up" id="next">
          <div className="container">
            <div className="mr-4 icon">
              <span className="icon-mail" style={{ marginRight: '3px' }}></span>
              <a href="mailto:moa.winberg@outlook.com">moa.winberg@outlook.com</a>
            </div>
            <div className="mr-4 icon">
              <span className="icon-phone2" style={{ marginRight: '3px' }}></span>
              +46 70 35 38 662
            </div>
          </div>
        </section>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.490000269576!2d18.068258816195065!3d59.32477271842987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e2605c0b5b%3A0x6f7ac4c3208c1e7f!2sSkomakargatan%2024A%2C%20111%2029%20Stockholm!5e0!3m2!1sen!2sse!4v1597995301126!5m2!1sen!2sse"
          title="google map" style={{ width: '100%', height: '500px', border: '0' }} frameBorder="0" allowFullScreen="" aria-hidden="false"
          tabIndex="0"></iframe>
      </div>
    )
  }
}
