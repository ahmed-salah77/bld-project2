
import Course from "./course";
import "../../css/courseContainer.css";
import React, {useContext} from 'react';
import {CourseData} from '../../App';

function CourseContainer(props) {
  const {courses,} =  useContext(CourseData);
  console.log(courses);
  const getCourses = courses?.map(function (course) {
    return <Course key={course.id} course = {course} />;
  });
  return (
    <div className="course-container">
      {getCourses}
    </div>
  );
}

export default CourseContainer;