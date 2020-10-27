import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route, useLocation } from 'react-router-dom'
import { withRouter } from "react-router";

import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'

import ComputerGraphics from './components/projects/computer-graphics'
import InformationVisualization from './components/projects/information-visualization'
import InsulinPump from './components/projects/insulin-pump'
import TagAr from './components/projects/tag-ar'
import Thunderball from './components/projects/thunderball'
import Krets from './components/projects/krets'
import Vibb from './components/projects/vibb'
import ScrollToTop from './components/scroll-to-top'

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/work' component={Work}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/krets-studio' component={Krets}></Route>
        <Route exact path='/tag-ar' component={TagAr}></Route>
        <Route exact path='/thunderball' component={Thunderball}></Route>
        <Route exact path='/computer-graphics' component={ComputerGraphics}></Route>
        <Route exact path='/vibb' component={Vibb}></Route>
        <Route exact path='/information-visualization' component={InformationVisualization}></Route>
        <Route exact path='/insulin-pump' component={InsulinPump}></Route>
      </Switch>
    )
  }
}

function Navbar() {
  const location = useLocation();
  return (
    <header style={location.pathname === '/' ? { position: 'relative' } : { position: 'absolute' }} className={location.pathname === '/about' ? "templateux-navbar navbar-light" : "templateux-navbar"} data-aos="fade-down">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-6">
            <div className="site-logo"><NavLink to="/">MOA WINBERG</NavLink></div>
          </div>
          <div className="col-sm-6 col-6 text-right">
            <button className="hamburger hamburger--spin toggle-menu ml-auto js-toggle-menu" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <nav className="templateux-menu js-templateux-menu" role="navigation">
              <ul className="list-unstyled">
                <li><NavLink activeClassName="active" exact to="/">Portfolio</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

class App extends Component {
  render() {
    return (
      <div className="js-animsition animsition" data-animsition-in-class="fade-in" data-animsition-out-class="fade-out">
        <ScrollToTop>
          <Navbar />
          <Main />
          <Footer />
        </ScrollToTop>
      </div>
    );
  }
}

export default withRouter(App);

