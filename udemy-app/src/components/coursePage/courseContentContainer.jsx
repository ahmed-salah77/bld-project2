import React from 'react';
import '../../css/courseContentContainer.css'
import Chapter from './chapter';
const CourseContentContainer = (props) => {
    const courseContent = props.courseContent;
    let num_sections = 0, num_lectures = 0,durationInSeconds = 0;
    let sections=[];
    let singleSection = [];
    courseContent.forEach(element => {
        if(element._class === 'chapter'){
            if(singleSection.length){
                sections.push(singleSection);
                singleSection=[];
            }
            num_sections++;
        }
        singleSection.push(element);
        if(element._class === 'lecture'){
            num_lectures++;
            const time =element.content_summary;
            durationInSeconds+=parseInt(time.substr(0,2))*60;
            durationInSeconds+=parseInt(time.substr(3,2));
        }
    });
    sections.push(singleSection); // push last one
    const hours = Math.floor(durationInSeconds/60/60);
    const minutes = Math.floor((durationInSeconds-hours*60*60)/60);
    let idx = 0;
    const getChapters = sections?.map((element)=>{
        return <Chapter key = {idx} section = {element} idx = {idx++}/>;
    })
    const showSections = ()=>{
        let extraSections = document.querySelectorAll('.extra-section');
        extraSections.forEach(element => {
            element.classList.remove('d-none');
        });
        let btn = document.querySelector('.more-sections');
        btn.classList.add('d-none');
    }
    const expand=()=>{
        let idx1 = 0;
        const chapters = document.querySelectorAll('.chapter');
        chapters.forEach(element => {
            const lec = document.querySelector('#lec-'+idx1);
                if(lec.style.getPropertyValue('display') !== 'block'){
                element.click();
            }
            idx1++;
        });
        document.querySelector('.more-sections').click();
        document.querySelector('#expand-btn').classList.add('d-none');
        document.querySelector('#collapse-btn').classList.remove('d-none');
    }
    const collapse=()=>{
        let idx1 = 0;
        const chapters = document.querySelectorAll('.chapter');
        chapters.forEach(element => {
            const lec = document.querySelector('#lec-'+idx1);
            if(lec.style.getPropertyValue('display') === 'block'){
                element.click();
            }
            idx1++;
        });
        document.querySelector('#expand-btn').classList.remove('d-none');
        document.querySelector('#collapse-btn').classList.add('d-none');
    }
    return (
        <div className='content-container'>
            <div className='content-headline'>Course content</div>
            <div className='info-and-expand-and-collapse-btn'>
                <span className='content-info'>{num_sections} sections • {num_lectures} lectures • {hours ? hours+'h':''} {minutes ? minutes+'m':''} total length</span>
                <button id = 'expand-btn' className='expand-and-collapse-btn' onClick={expand}>Expand all sections</button>
                <button id = 'collapse-btn' className='expand-and-collapse-btn d-none' onClick={collapse}>Collapse all sections</button>
            </div>
            <div className='chapter-containers'>
                {getChapters}
            </div>
            {num_sections > 10 ? <button className='more-sections' onClick={showSections}>{num_sections-10} more sections</button>:''}
        </div>
    );
}

export default CourseContentContainer;
