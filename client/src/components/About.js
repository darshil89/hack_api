import React from "react";
import './ContactComponent.css';
export default function About(props) {
  return (
    <>
    <div className="container my-3">
    <h1 className="display-3">Why <del>not</del> to use T4T ?</h1>     
    <hr />

    <div
        className="row featurette d-flex justify-content-center align-items-center"
      >
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Oh yeah, it’s that good.
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an inpm rudea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://picsum.photos/id/1065/500/500"
            alt=""
          />
        </div>
      </div>
      <div
        className="row featurette d-flex justify-content-center align-items-center"
      >
        <div className="col-md-7 order-md-1">
          <h2 className="featurette-heading">
            Oh yeah, it’s that good.
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://picsum.photos/id/1005/500/500"
            alt=""
          />
        </div>
      </div>
      <div
        className="row featurette d-flex justify-content-center align-items-center"
      >
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Oh yeah, it’s that good.
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://picsum.photos/id/1010/500/500"
            alt=""
          />
        </div>
      </div>
      
      </div>
    </>
  );
}
