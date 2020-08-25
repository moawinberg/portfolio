import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="templateux-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-md-left text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com"
                  className="text-primary">Colorlib</a>
              </p>
            </div>
            <div className="col-md-6 text-md-right text-center footer-social">
              <a href="https://www.linkedin.com/in/moawinberg/" className="p-3"><span className="icon-linkedin2"></span></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}