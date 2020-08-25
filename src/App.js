import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom'

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
import UrbanKultur from './components/projects/urban-kultur'
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
        <Route exact path='/urban-kultur' component={UrbanKultur}></Route>
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

class Navbar extends Component {
  // FIXME: handle classname for active link
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      page: 'home'
    };
  }

  handleClick() {
    this.setState({ page: 'home' });
  }

  componentDidMount() {
    const location = window.location.href;
    if (location.endsWith('about')) {
      this.setState({ page: 'about' });
    } else if (
      location.endsWith('work') ||
      location.endsWith('urban-kultur') ||
      location.endsWith('tag-ar') ||
      location.endsWith('vibb') ||
      location.endsWith('thunderball') ||
      location.endsWith('insulin-pump') ||
      location.endsWith('information-visualization') ||
      location.endsWith('computer-graphics')
    ) {
      this.setState({ page: 'work' });
    } else if (location.endsWith('contact')) {
      this.setState({ page: 'contact' });
    } else {
      this.setState({ page: 'home' });
    }
  }
  //
  
  render() {
    return (
      <header className={this.state.page === 'about' ? 'templateux-navbar navbar-light' : "templateux-navbar"} data-aos="fade-down">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-3">
              <div className="site-logo"><NavLink className="animsition-link" onClick={this.handleClick} to="/">MW</NavLink></div>
            </div>
            <div className="col-sm-9 col-9 text-right">
              <button className="hamburger hamburger--spin toggle-menu ml-auto js-toggle-menu" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav className="templateux-menu js-templateux-menu" role="navigation">
                <ul className="list-unstyled">
                  <li className={this.state.page === 'home' ? 'active' : null}><NavLink className="animsition-link" onClick={this.handleClick} to="/">Home</NavLink></li>
                  <li className={this.state.page === 'work' ? 'active' : null}><NavLink className="animsition-link" to="/work">Work</NavLink></li>
                  <li className={this.state.page === 'about' ? 'active' : null}><NavLink className="animsition-link" to="/about">About</NavLink></li>
                  <li className={this.state.page === 'contact' ? 'active' : null}><NavLink className="animsition-link" to="/contact">Contact</NavLink></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
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

export default App;

