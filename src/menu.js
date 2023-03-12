import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Menu(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode === 'dark'? 'light' : 'dark'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode === 'dark'? 'light' : 'dark'}`} aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item"> */}
          {/* <Link className={`nav-link active text-${props.mode === 'dark'? 'light' : 'dark'}`} aria-current="page" to="/About">About</Link> */}
        {/* </li> */}
              
      </ul>
      </div>
      <div className="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.changemode} />
  <label className={`form-check-label text-${props.mode === 'dark'? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'dark'? 'Enable Light Mode' : 'Enable Dark Mode'}</label>

    </div>
  </div>
</nav>

    </div>
  );
}

Menu.propTypes = {
    title: PropTypes.string
  }


Menu.defaultProps = {
    title: 'React'
  };