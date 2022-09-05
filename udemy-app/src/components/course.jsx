import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./course.css";
function getStars(rate) {
  let stars = "";
  let full = `<span class='fa fa-star star' style = 'color:#E59819'></span>`;
  let half = `<span class='fa fa-star-half-o  star' style = 'color:#E59819'></span>`;
  let empty = `<span class='fa fa-star-o  star' style = 'color:#E59819'></span>`;
  var cnt = Math.floor(rate);
  for (var i = 0; i < cnt; ++i) {
    stars += full;
  }
  if (rate !== cnt) {
    stars += half;
    cnt++;
  }
  for (var i = cnt; i < 5; ++i) {
    stars += empty;
  }
  return stars;
}
function showBestSeller(bestSellerExist) {
  if (bestSellerExist) {
    return `<div class='best-seller'>Bestseller</div>`;
  }
  return "";
}
class Course extends Component {
  courseData = {
    id: "0",
    title: "The Complete 2022 Web Development Bootcamp",
    url: "",
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
    instructor: "Dr. Angela Yu",
    students: 1432,
    numberOfReviews: 134804,
    price: 1699.99,
    rating: 4.7,
    bestSeller: true,
  };

  render() {
    let stars = getStars(this.courseData.rating);
    console.log(stars);
    return (
      <div className="card">
        <a href={this.courseData.url}>
          <figure>
            <img className="course-img" src={this.courseData.image}></img>
            <figcaption className="course-title">
              {this.courseData.title}
            </figcaption>
            <figcaption className="creator">
              {this.courseData.instructor}
            </figcaption>
            <figcaption>
              <span className="rate"> {this.courseData.rating.toFixed(1)}</span>
              <span dangerouslySetInnerHTML={{ __html: stars }}></span>
              <span className="cnt">
                {" "}
                (
                {this.courseData.numberOfReviews.toLocaleString("en", {
                  useGrouping: true,
                })}
                )
              </span>
            </figcaption>
            <figcaption className="price">
              E£
              {this.courseData.price.toLocaleString("en", {
                useGrouping: true,
              })}
            </figcaption>
            <figcaption>
              <div
                dangerouslySetInnerHTML={{
                  __html: showBestSeller(this.courseData.bestSeller),
                }}
              ></div>
            </figcaption>
          </figure>
        </a>
      </div>
    );
  }
}

export default Course;
