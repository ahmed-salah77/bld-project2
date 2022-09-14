import React, { Component } from "react";
import Course from "./course";
import data from "../coursesData.json";
import "./courseContainer.css";

function CourseContainer() {
  const info = data.course;
  const courses = info.map(function (course) {
    return <Course key={course.id} course = {course} />;
  });


  return (
    <div className="course-container row">{courses}</div>
  );
}

export default CourseContainer;
