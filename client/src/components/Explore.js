import React from "react";
import './ContactComponent.css';
import { Link } from "react-router-dom";
export default function Explore() {
  return (
    <>
    <div className="container my-5">
        <p className="plan">PLAN YOUR TRIP</p>
        <h1 className="where">Where to next?</h1>
      <div className="card mb-3 my-3">
        <img src="https://picsum.photos/id/342/1920/700" className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">Pack Your Bags</h5>
          <p className="card-text">
          The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience and to discovery is certainly the liveliest that the mind of man can ever feel.
          </p>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
            <label htmlFor="btnradio3"><Link style={{textDecoration:"none"}} to="/Place"  className="btn btn-outline-primary"> Explore </Link></label>
          </div>
          <p className="card-text">
            <small className="text-muted">Go Beyond Limit</small>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
