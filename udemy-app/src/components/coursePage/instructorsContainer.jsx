import React,{useContext} from 'react';
import Instructor from './instructor';
import '../../css/instructorsContainer.css'
import { CourseData } from '../../App';

const InstructorsContainer = (props) => {
    const course = useContext(CourseData).singleCourse;
    const instructors = course.visible_instructors;
    let idx = 0;
    const getInstructors = instructors.map((instructor)=>{
        idx++;
        console.log(idx);
        return <Instructor key = {idx} instructor = {instructor} idx={idx}/>
    })
    return (
        <div className='instructors-container'>
            <div className='instructor-word'>Instructor</div>
            {getInstructors}
        </div>
    );
}

export default InstructorsContainer;
