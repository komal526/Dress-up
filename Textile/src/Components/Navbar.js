import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar1">
        <ul className="list-navbar1">
          {/* heading start */}
          <h2 className="list-navbar-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="animate-charcter">DressUp</h3>
                </div>
              </div>
            </div>
          </h2>
          {/* heading ends */}
          <Link to="/" className="link_list">
            <li className="list-navbar-item1">Home</li>
          </Link>
          <Link to="/about" className="link_list">
            <li className="list-navbar-item1">About</li>
          </Link>
          <Link to="/services" className="link_list">
            <li className="list-navbar-item1">Services</li>
          </Link>
          <Link to="/contact" className="link_list">
            <li className="list-navbar-item1">Measurements</li>
          </Link>

          {/* search bar starts */}
          <li className="list-navbar-item1">
            <form className="d-flex navbar-search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </li>
          {/* search bar ends */}
        </ul>
      </nav>
    </>
  );
}
