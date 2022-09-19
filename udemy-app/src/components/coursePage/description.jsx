import React,{useContext} from 'react';
import '../../css/description.css'
import { CourseData } from '../../App';
const Description = (props) => {
    const course = useContext(CourseData).singleCourse;
    const descriptionContent = course.description;
    const showMore = ()=>{
        // increase height of the container
        const contentBox = document.querySelector('.description-content');
        contentBox.style.setProperty('height', 'auto');
        contentBox.style.setProperty('-webkit-mask-image', 'none');
        // show "show less button"
        const showLess = document.querySelector('.show-less');
        showLess.style.setProperty('display','block');
        // hide "show more button"
        const showMore = document.querySelector('.show-more');
        showMore.style.setProperty('display','none');
    }
    const showLess = ()=>{
        // put fixed height 
        const contentBox = document.querySelector('.description-content');
        contentBox.style.setProperty('height', '185px');
        contentBox.style.setProperty('-webkit-mask-image', 'linear-gradient(#fff,#fff,rgba(255,255,255,0))');
        // hide "show less button"
        const showLess = document.querySelector('.show-less');
        showLess.style.setProperty('display','none');
        // show "show more button"
        const showMore = document.querySelector('.show-more');
        showMore.style.setProperty('display','block');
    }
    return (
        <div className='description-container'>
            <div className='des-word'>Description</div>
            <div className='description-content' dangerouslySetInnerHTML={{ __html: descriptionContent }}>
                
            </div>
    
            <button className='show-more show-more-btn' onClick={showMore}>Show more <i class="fa-solid fa-chevron-down mx-1 fa-xs"></i></button>
            <button className='show-less show-less-btn' onClick={showLess}>Show less <i class="fa-solid fa-chevron-up mx-1 fa-xs"></i></button>
        </div>
    );
}

export default Description;
