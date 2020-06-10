import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import TogglerButton from "./toggle";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="mi-header">
        <TogglerButton
          sideDrawerOpen={this.props.sideDrawerOpen}
          onToggle={() => this.props.onDrawTogglerClick()}
        />
        <div className="mi-header-inner">
          <div className="mi-header-image">
            <Link to="/">
              <img alt="brandimage" src="/images/brand-image.jpg"></img>
            </Link>
          </div>
          <ul className="mi-header-menu">
            <li>
              <NavLink to="/home">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume">
                <span>Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
                <span>Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                <span>Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
          <p className="mi-header-copyright">
            © 2020{" "}
            <b>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="www.github.com/samp-suman"
              >
                SampSuman
              </a>
            </b>
          </p>
        </div>
      </nav>
    );
  }
}

export default NavBar;
