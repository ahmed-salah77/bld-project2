import React from 'react';
import Instructor from './instructor';
import '../../css/instructorsContainer.css'

const InstructorsContainer = (props) => {
    const course = props.course;
    const instructors = course.visible_instructors;
    let idx = 0;
    const getInstructors = instructors.map((instructor)=>{
        idx++;
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
