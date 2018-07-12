import React from "react";
import "./Nav.css";


const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <a className="navbar-brand" href="/">
    <img class="brandLogo" src={require('./got-logo.png')} />
    <img class="brandLogo2" src={require('./memory.png')} />
    </a>
    <div className="nav-item mx-auto">
        <h4>{props.message}</h4>
      </div>
    <ul className="navbar-nav">
      <li className="nav-item ml-auto">
        <h3>Score: {props.score}</h3>
        <h3>High Score: {props.highScore}</h3>
      </li>
    </ul>
  </nav>
);

export default Nav;
