import React,{useContext} from 'react';
import '../../css/requirements.css'
import { CourseData } from '../../App';
const Requirements = (props) => {
    const course = useContext(CourseData).singleCourse;
    const reqq = course.requirements_data.items;
    let _html =``;
    for (let i = 0; i < reqq.length; i++) {
        const element = reqq[i];
        _html+=`<li>${element}</li>`;
    }
    return (
        <div className='requirements-container'>
            <div className='req-word'>Requirements</div>
            <ul className='req-items' dangerouslySetInnerHTML={{__html:_html}}>
                
            </ul>
        </div>
    );
}

export default Requirements;
