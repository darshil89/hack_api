import React from "react";
import { Link } from "react-router-dom";

export default function Place() {
  return (
    <>
      <div className="container ">
        <h1 className="display-2 my-4">Places To Explore</h1>
        <hr />

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={process.env.PUBLIC_URL + '/nandiHills.webp'} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nandi Hills</h5>
                <p className="card-text">
                Nandi Hills (Anglicised forms include Nandidurg and Nandydoorg) is an ancient hill station built by Ganga Dynasty in the Chikkaballapur district of Karnataka state. It is 10 km from Chickballapur town and approximately 60 km from Bengaluru. The hills are near the town Nandi.
                </p>
                <Link to="/LoginPage">
                <button type="button" className="btn btn-outline-info">Let's GO</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
