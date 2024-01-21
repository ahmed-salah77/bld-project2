import React from "react";
import CourseContainer from "./courseContainer";
import HeadshotBanner from "./headshotBanner";
import CoursesHeadline from "./coursesHeadline";
import TabsNav from "./tabsNav";
import { useState } from "react";
import "../../css/mainContainer.css";
function MainContainer(props) {
  const [bannerId,setBannerId] = useState(0);
  return (
    <div className="main-container">
      <div className="sub-container1">
        <CoursesHeadline />
        <TabsNav setBannerId = {setBannerId}/>
        <div className="sub-container1-1">
          <HeadshotBanner bannerId = {bannerId}/>
          <CourseContainer/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
