import React,{useContext} from 'react';
import { CourseData } from '../../App';
import '../../css/whatYouLearn.css'
const WhatYouLearn = (props) => {
    const obj = useContext(CourseData).singleCourse.what_you_will_learn_data.items;
    let _html = ``;
    obj.forEach(element => {
        _html+=
        `<li class='objective-item'>
            <span class="check-icon"><i class='fa-solid fa-check '></i></span>
            ${element}
        </li>`
    });
    return (
        <div className='what-you-learn-container'>
            <div className='wyl-headline'>What you'll learn</div>
            <div className='wyl-content'>
                <ul className='wyl-items' dangerouslySetInnerHTML={{__html:_html}}>
                    
                </ul>
            </div>
        </div>
    );
}

export default WhatYouLearn;
