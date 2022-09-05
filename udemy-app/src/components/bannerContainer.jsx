import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './bannerContainer.css'
class BannerContainer extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="title-type">
          Expand your career opportunities with Python
        </div>
        <div className="info">
          <p>
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to both beginners and advanced developers alike.
          </p>
        </div>
        <a href="#" className="explore">
          <span>Explore Python</span>
        </a>
      </div>
    );
  }
}

export default BannerContainer;
