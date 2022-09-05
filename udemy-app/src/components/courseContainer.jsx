import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Course from "./course";
import BannerContainer from "./bannerContainer";
import "./courseContainer.css";

class CourseContainer extends Component {
  render() {
    return (
      <div className="course-container">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    );
  }
}

export default CourseContainer;
