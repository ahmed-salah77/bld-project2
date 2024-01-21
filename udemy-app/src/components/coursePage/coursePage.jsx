import {React,useContext,} from 'react';
import CourseContentContainer from './courseContentContainer';
import NavBar from '../general/navBar';
import TopContent from './topContent';
import WhatYouLearn from './whatYouLearn';
import Requirements from './requirements';
import Description from './description';
import InstructorsContainer from './instructorsContainer';
import StudentFeedback from './studentFeedback';
import Footer from '../general/footer';
import '../../css/coursePage.css';
import SideBar from './sideBar';
import { CourseData } from '../../App';
const CoursePage = (props) => {
    const course = useContext(CourseData).singleCourse;
    const courseContent = useContext(CourseData).courseContent;
    return (
        <div>
            <NavBar />
            <TopContent course={course}/>
            <div className='main-content'>
                <div className='sub-content'>
                    <WhatYouLearn course = {course}/>
                    <CourseContentContainer courseContent = {courseContent}/>
                    <Requirements course = {course}/>
                    <Description course = {course}/>
                    <InstructorsContainer course = {course}/>
                    <StudentFeedback course = {course}/>
                </div>
                <SideBar course={course}/>
            </div>
            <Footer />
        </div>
    );
}

export default CoursePage;
