import React,{useContext} from "react";
import CourseMenuHover from "./course-menu-hover";
import "../../css/course.css";
import { useNavigate } from "react-router-dom";
import Stars from "../general/stars";
import InstructorsNames from "../general/instructorsNames";
import {CourseData} from '../../App';

function Course(props) {
  let navigate = useNavigate();
  const setCourseId =  useContext(CourseData).setCourseId;
  const routeChange = () =>{ 
    setCourseId(props.course.id);
    let path = '/course'; 
    navigate(path);
  }
  return (
    <div className="my-card d-flex" onClick={routeChange}>
      <div className="course-pop-up">
        <CourseMenuHover key = {props.course.id} course = {props.course}/>
      </div>
      <div className="course-card">
          <img
            className="course-img"
            src={props.course.image_304x171}
            alt="course-img"
          />
          <div className="course-title">{props.course.title}</div>
          <div className="creator">
            <InstructorsNames instructors = {props.course.visible_instructors}/>
          </div>
          <div>
            <span className='rate'> {props.course.avg_rating.toFixed(1)}</span>
            <span className="course-card-stars"><Stars rate={props.course.avg_rating}/></span>
            <span className="cnt">({props.course.num_reviews.toLocaleString('en', {useGrouping:true})
        })</span>
          </div>
          <div className="price">
            {props.course.is_paid ? props.course.price:"Free"}
          </div>
          <div>
            <div>
              {props.course.badges.length &&  props.course.badges[0].badge_family==='bestseller' ? <div className='best-seller'>Bestseller</div>: ''}
            </div>
          </div>
      </div>
      
    </div>
  );
}
export default Course;
