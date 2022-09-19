import React,{useContext} from 'react';
import '../../css/topContent.css';
import Stars from '../general/stars'
import InstructorsNames from '../general/instructorsNames'
import {CourseData} from '../../App';
import CcCaption from '../general/ccCaption';
const TopContent = (props) => {
    const course = useContext(CourseData).singleCourse;
    const date = new Date(course.last_update_date);
    return (
        <div className='top-content dark-background'>
            <div className='outer-contianer'>
                <div className='about-course'>
                    <div className='category-path'>
                        <span className='_category-title'>{course.primary_category.title}</span>
                        <span class="arrow fa-solid fa-chevron-right"></span>
                        <span className='_category-title'>{course.primary_subcategory.title}</span>
                    </div>
                    <div className='big-course-title'>
                    {course.title}
                    </div>
                    <div className='course-headline'>
                        {course.headline}
                    </div>
                    <div className='rate-and-students'>
                        {course.badges.length &&  course.badges[0].badge_family==='bestseller' ? <span className='best-seller'>Bestseller</span>: ''}
                        <span className='_rate'>{course.avg_rating.toFixed(1)}</span>
                        <span className='top-content-stars'><Stars rate={course.avg_rating}/></span>
                        <span className="rating-num">({course.num_reviews.toLocaleString('en', {useGrouping:true})} ratings)</span>
                        <span className='students-num'>{course.num_subscribers.toLocaleString('en', {useGrouping:true})} students</span>
                    </div>
                    <div className='created-by d-flex'>
                        <div>Created by </div>
                        <div className='creator-name'><InstructorsNames instructors={course.visible_instructors}/></div>
                    </div>
                    <div className='last-update-and-language'>
                        <span>
                            <span className="exclamation-icon fa-solid fa-circle-exclamation"></span>
                            <span className='last-update-date'>Last updated {date.getMonth()}/{date.getFullYear()}</span>
                        </span>
                        <span>
                            <span className="fa-solid fa-globe"></span>
                            <span className='course-language'>{course.locale.english_title}</span>
                        </span>
                        {course.caption_languages.length ? <CcCaption ccLang={course.caption_languages}/>:''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopContent;
