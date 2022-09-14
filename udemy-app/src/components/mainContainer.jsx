import React, { Component } from "react";
import CourseContainer from "./courseContainer";
import BannerContainer from "./bannerContainer";
import './mainContainer.css'

function MainContainer() {
    return (
      <div className="main-container">
        <div className="collector">
          <BannerContainer />
          <CourseContainer />
        </div>
      </div>
    );
}

export default MainContainer;
