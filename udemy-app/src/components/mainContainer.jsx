import React, { Component } from "react";
import Course from "./course";
import CourseContainer from "./courseContainer";
import BannerContainer from "./bannerContainer";

import './mainContainer.css'
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="collector">
        <BannerContainer />
        <CourseContainer />
        </div>
      </div>
    );
  }
}

export default MainContainer;
