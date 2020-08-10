import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Gallery_img1 from "../../images/Gallery_img1.jpeg";
import Gallery_img2 from "../../images/Gallery_img2.jpeg";
import Gallery_img3 from "../../images/Gallery_img3.jpeg";
import Gallery_img4 from "../../images/Gallery_img4.jpeg";
import Gallery_img5 from "../../images/Gallery_img5.jpeg";
import Gallery_img6 from "../../images/Gallery_img6.jpeg";
import Gallery_img7 from "../../images/Gallery_img7.jpeg";
import Gallery_img8 from "../../images/Gallery_img8.jpeg";

function Gallery() {
  return (
    <div>
      <Header />
      <div className="container mb-3" >
      <div
        className="alert alert-secondary container"
        role="alert"
        style={{
          marginTop: "7rem",
          width: "100%",
          borderRadius: "10px",
          zIndex: "100",
          textAlign: "center"
        }}
      >
        <h2 style={{fontSize:"2.5rem"}}>Monthly Winners</h2>
      </div>
        <div className="row">
          <div className="col">
            <div className="gallery-container">
              <div className="gallery-box">
                <img src={Gallery_img1} />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src={Gallery_img2} />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src={Gallery_img3} />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src={Gallery_img4} />
                <span>Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax parallax-bg">
        {/* use for bg images fixed */}
      </div>
      <div
        className="alert alert-secondary container"
        role="alert"
        style={{
          marginTop: "7rem",
          width: "100%",
          borderRadius: "10px",
          zIndex: "100",
          textAlign: "center"
        }}
      >
        <h2 style={{fontSize:"2.5rem"}}>Previous Winners</h2>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col">
            <div className="gallery-container">
              <div className="gallery-box">
                <img src={Gallery_img5} />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src={Gallery_img6} />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src={Gallery_img7} />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src={Gallery_img8} />
                <span>Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
