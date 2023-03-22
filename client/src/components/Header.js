import React from "react";
import "./GifComponent.css";
export default function Header() {
  return (
    // <div className='classB'>
    // {/* <img  src={header1} className="gif zoom" alt="" /> */}
    // <div className='classIn t'> Trek &nbsp; <span><p className=' four'>4</p></span> &nbsp;Travellers</div>
    // </div>
    <>
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="
            https://picsum.photos/id/327/1920/900" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block ">
            <div className="classIn t"> Trek &nbsp;
              <span><p className=' four'>4</p></span>
               &nbsp;
               Travellers</div>
              
              
            </div>
          </div>
          <div className="carousel-item">
            <img src="
            https://picsum.photos/id/319/1920/900" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Explore the world by Yourself</h2>
              
              
            </div>
          </div>
          <div className="carousel-item">
            <img src="
            https://picsum.photos/id/1024/1920/900" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Conqure Your Dreams</h2>
              <p>Its not the mountain we conquer but ourselves</p>
              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </>
    
   
  );
}
