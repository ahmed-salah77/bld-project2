import React from 'react';
import '../../css/instructor.css';
const Instructor = (props) => {
    const description = props.instructor.description;
    const idx =props.idx;
    const showMore = ()=>{
        // increase height of the container
        const contentBox = document.querySelector('.instructor-description'+idx);
        contentBox.style.setProperty('height', 'auto');
        contentBox.style.setProperty('-webkit-mask-image', 'none');
        // show "show less button"
        const showLess = document.querySelector('.show-less'+idx);
        showLess.style.setProperty('display','block');
        // hide "show more button"
        const showMore = document.querySelector('.show-more'+idx);
        showMore.style.setProperty('display','none');
    }
    const showLess = ()=>{
        // put fixed height 
        const contentBox = document.querySelector('.instructor-description'+idx);
        contentBox.style.setProperty('height', '240px');
        contentBox.style.setProperty('-webkit-mask-image', 'linear-gradient(#fff,#fff,rgba(255,255,255,0))');
        // hide "show less button"
        const showLess = document.querySelector('.show-less'+idx);
        showLess.style.setProperty('display','none');
        // show "show more button"
        const showMore = document.querySelector('.show-more'+idx);
        showMore.style.setProperty('display','block');
    }
    return (
        <div className='instructor-card'>
            <a href='exampl.com' className='instructor-name'>{props.instructor.display_name}</a>
            <div className='instructor-job'>{props.instructor.job_title}</div>
            <div className='image-and-career'>
                <img className = 'instructor-image'src={props.instructor.image_100x100} alt='instructor'/>
                <div className='instructor-stats'>
                    <div className='stat'>
                        <span className='stat-icon fa-solid fa-star'></span>
                        <span className='stat-text'>{props.instructor.avg_rating.toFixed(1)} Instructor Rating</span>
                    </div >
                    <div className='stat'>
                        <span className='stat-icon fa-solid fa-award ps-1'></span>
                        <span className='stat-text'>{props.instructor.total_num_reviews.toLocaleString('en', {useGrouping:true})} Reviews</span>
                    </div>
                    <div className='stat'>
                        <span className='stat-icon fa-solid fa-user-group'></span>
                        <span className='stat-text'>{props.instructor.total_num_students.toLocaleString('en', {useGrouping:true})} Students</span>
                    </div>
                    <div className='stat'>
                        <span className='stat-icon fa-solid fa-circle-play'></span>
                        <span className='stat-text'>{props.instructor.num_published_courses} Courses</span>
                    </div>
                </div>
            </div>
            <div className={'instructor-description'+idx+' instructor-description'} dangerouslySetInnerHTML={{ __html: description}}></div>
            <button className={'show-more-btn show-more'+idx} onClick={showMore}>Show more <i className="fa-solid fa-chevron-down mx-1 fa-xs"></i></button>
            <button className={'show-less-btn show-less'+idx} onClick={showLess}>Show less <i className="fa-solid fa-chevron-up mx-1 fa-xs"></i></button>
        </div>
    );
}

export default Instructor;
