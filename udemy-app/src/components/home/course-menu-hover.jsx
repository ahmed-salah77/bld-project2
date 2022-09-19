import React from 'react';
import '../../css/course-menu-hover.css'
const CourseMenuHover = (props) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date(props.course.last_update_date);
    const objectives = props.course.objectives_summary?.map((element) =>{
        return (
        <li>
            <span className="check-icon"><i className='fa-solid fa-check '></i></span>
            <span>{element}</span>
        </li>
        );
    });
    return (
        <div className='info-container'>
            <div className='course-title-hover'>{props.course.title}</div>
            <div className='update-date'>
                <span style={{fontWeight:"500"}}>Updated </span>
                <span style={{fontWeight:"700"}}>{monthNames[date.getMonth()]} {props.course.last_update_date.substring(0,4)}</span>
            </div>
            <div className='duration-and-level-container'>
            <span className='total-hours'>{props.course.content_info} · </span>
            <span className='course-level'>{props.course.instructional_level} · </span>
            <span className='subtitles'>Subtitles</span>
            </div>
            <div className='short-description'>
                <p>{props.course.headline}</p>
            </div>
            <ul className='course-benefits'>
                {
                    objectives
                }
            </ul>
            <div className='add-btn-and-wish-container'>
                <button className='add-btn'>
                    Add to cart
                </button>
                <button className='add-to-wishlist-btn'>
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>
        </div>
    );
}

export default CourseMenuHover;
