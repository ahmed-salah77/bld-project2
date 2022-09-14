import React, { Component } from "react";
import "./course.css";

function getStars(rate) {
  let stars = "";
  const full = `<span class='fa fa-star star' style = 'color:#E59819'></span>`;
  const half = `<span class='fa fa-star-half-o  star' style = 'color:#E59819'></span>`;
  const empty = `<span class='fa fa-star-o  star' style = 'color:#E59819'></span>`;
  var cnt = Math.floor(rate);
  for (var j = 0; j < cnt; ++j) {
    stars += full;
  }
  if (rate !== cnt) {
    stars += half;
    cnt++;
  }
  for (j = cnt; j < 5; ++j) {
    stars += empty;
  }
  return stars;
}
function Course(props) {
  const stars = getStars(props.course.rating);
  return (
    <div className="card">
      <a href={props.course.url}>
        <figure>
          <img
            className="course-img"
            src={props.course.image}
            alt="course image"
          />
          <figcaption className="course-title">{props.course.title}</figcaption>
          <figcaption className="creator">
            {props.course.instructors}
          </figcaption>
          <figcaption>
            <span className='rate'> {props.course.rating.toFixed(1)}</span>
            <span dangerouslySetInnerHTML={{ __html: stars }}></span>
            <span className="cnt">({props.course.reviews.toLocaleString('en', {useGrouping:true})
        })</span>
          </figcaption>
          <figcaption className="price">
            {props.course.is_paid ? props.course.price:"Free"}
          </figcaption>
          <figcaption>
            <div>
              {props.course.bestSeller ? <div className='best-seller'>Bestseller</div>: ''}
            </div>
          </figcaption>
        </figure>
      </a>
    </div>
  );
}
export default Course;
