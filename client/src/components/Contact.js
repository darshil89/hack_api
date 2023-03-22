import React from "react";
import "./ContactComponent.css";
export default function Contact() {
  return (
    <>
      <div className="container row row-cols-1 row-cols-md-2 my-5 d-flex justify-content-center align-items-center g-4 ">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Adarsh</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          <button type="button" className="btn btn-outline-primary link">
            More
          </button>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Darshil</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <button type="button" className="btn btn-outline-primary link">
            More
          </button>
          </div>
        </div>
        <h1 className="display-3 text-center">Developers Team</h1>

        <div className="col">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Gautam</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
            <button type="button" className="btn btn-outline-primary link">
            More
          </button>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Akash</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <button type="button" className="btn btn-outline-primary link">
            More
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
