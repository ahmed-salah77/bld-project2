import React,{useContext} from 'react';
import '../../css/studentFeedback.css';
import {CourseData} from '../../App';
import Stars from '../general/stars';
const StudentFeedback = (props) => {
    const course = useContext(CourseData).singleCourse;
    const rateFrequency=[course.rating_distribution[0].count,
                        course.rating_distribution[1].count,
                        course.rating_distribution[2].count,
                        course.rating_distribution[3].count,
                        course.rating_distribution[4].count];
    console.log(rateFrequency);
    const getBars=()=>{
        let totalSum = rateFrequency.reduce((a, b) => a + b, 0);
        let _html=``;
        for (let i = 4 ; i >= 0 ; i--) {
            const element = rateFrequency[i];
            _html+=`<div class='rate-bar'>
                        <div class='bar'>
                            <div class='filled-part' style='width:${Math.ceil(element/totalSum*100)}%'></div>
                        </div>
                    </div>`;
        }
        return _html;
    }
    const getPrecents = ()=>{
        let totalSum = rateFrequency.reduce((a, b) => a + b, 0);
        let _html=``;
        for (let i = 4 ; i >= 0 ; i--) {
            const element = rateFrequency[i];
            _html+=`<div class='precent-num'>
                        ${(element/totalSum*100).toFixed(2)}%
                    </div>`
        }
        return _html;
    }
    return (
        <div className='student-feedback-container'>
            <div className='instructor-word'>Student feedback</div>
            <div className='rate-and-rate-distribution d-flex'>
                <div className='rating-container'>
                    <div className='rate big-rate'>{course.avg_rating.toFixed(1)}</div>
                    <div className='feedback-stars'><Stars rate={course.avg_rating}/></div>
                    <div className='rate'>course rating</div>
                </div>
                <div className='rate-bars-container' dangerouslySetInnerHTML={{__html:getBars()}}>
                    
                </div>
                <div className='right-stars'>
                    <div><Stars rate={5} /></div>
                    <div><Stars rate={4} /></div>
                    <div><Stars rate={3} /></div>
                    <div><Stars rate={2} /></div>
                    <div><Stars rate={1} /></div>
                </div>
                <div className='precents' dangerouslySetInnerHTML={{__html:getPrecents()}}>
                </div>
            </div>
        </div>
    );
}

export default StudentFeedback;
