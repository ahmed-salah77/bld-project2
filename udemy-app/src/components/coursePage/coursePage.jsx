import React,{useContext} from 'react';
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
const CoursePage = () => {
    return (
        <div>
            <NavBar />
            <TopContent />
            <div className='main-content'>
                <div className='sub-content'>
                    <WhatYouLearn />
                    <CourseContentContainer />
                    <Requirements />
                    <Description />
                    <InstructorsContainer />
                    <StudentFeedback />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CoursePage;
