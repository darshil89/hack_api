import React from "react";
import './GifComponent.css';
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <h2>T4T</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <Link to="/loginacc" style={{textDecoration:"none"}}>
            <button className="btn btn-outline-info mx-2 d-flex" type="submit"  >LogIn</button>
            </Link> 
            <Link to="/signin" style={{textDecoration:"none"}}>
            <button className="btn btn-outline-info  d-flex" type="submit"  >SignUp</button>            
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
