import React from 'react';
import '../../css/courseContentContainer.css'
import Chapter from './chapter';
const CourseContentContainer = () => {
    return (
        <div className='content-container'>
            <div className='content-headline'>Course content</div>
            <div className='info-and-expand-btn'>
                <span className='content-info'>9 sections • 88 lectures • 11h 31m total length</span>
                <button className='expand-btn'>Expand all sections</button>
            </div>
            <div className='chapter-containers'>
                <Chapter/>
            </div>
        </div>
    );
}

export default CourseContentContainer;
