import React from 'react';
import '../../css/chapter.css'

const Chapter = () => {
    const flip = ()=>{
        const lec = document.querySelector('#lec-1');
        const icon = document.querySelector('.toggle-icon');
        let toDisplay = 'block';
        if(lec.style.getPropertyValue('display') === 'block'){
            toDisplay = 'none';
            icon.classList.remove('fa-rotate-180')
        }
        else{
            icon.classList.add('fa-rotate-180')
        }
        lec.style.setProperty('display',toDisplay);
    };
    return (
        <div>
            <div className='chapter' onClick={flip}>
                <div className="fa-solid fa-caret-down toggle-icon"></div>
                <div className='chapter-title'>Python Fundamentals: Day 1 - Intro, IDEs and dealing with mistakes</div>
                <div className='chapter-info'>7 lectures • 46 min</div>
            </div>
            <ul id = 'lec-1'className='lectures-container'>
                <li className='lecture canPlay'>
                    <i className="fa-solid fa-circle-play play-icon"></i>
                     <div className='lec-title'>Introduction</div>
                     <div className='preview-lec'>Preview</div>
                     <div className='lec-duration'>00:29</div>
                </li>
                <li className='lecture canPlay'>
                    <i className="fa-solid fa-circle-play play-icon"></i>
                        <div className='lec-title'>Introduction</div>
                     <div className='preview-lec'>Preview</div>
                     <div className='lec-duration'>05:07</div>
                </li>
                <li className='lecture canPlay'>
                    <i className="fa-solid fa-circle-play play-icon"></i>
                    <div className='lec-title'>Installing Python</div>
                     <div className='preview-lec'>Preview</div>
                     <div className='lec-duration'>07:26</div>
                     </li>
                <li className='lecture canPlay'>
                    <i className="fa-solid fa-circle-play play-icon"></i>
                     <div className='lec-title'>Integrated Development Environments vs Text Editors</div>
                     <div className='preview-lec'>Preview</div>
                     <div className='lec-duration'>10:38</div>
                </li>
                <li className='lecture'>
                    <i className="fa-solid fa-circle-play play-icon"></i>
                     <div className='lec-title'>How to deal with errors</div>
                     <div className='preview-lec'></div>
                     <div className='lec-duration'>10:20</div>
                </li>
                <li className='lecture'>
                    <i className="fa-solid fa-circle-play play-icon"></i> 
                    <div className='lec-title'>Finding and fixing errors</div>
                     <div className='preview-lec'></div>
                     <div className='lec-duration'>06:10</div>
                </li>
                <li className='lecture'>
                    <i className="fa-solid fa-circle-play play-icon"></i>
                    <div className='lec-title'>Finding errors challenge walkthrough</div>
                     <div className='preview-lec'></div>
                     <div className='lec-duration'>05:47</div>
                </li>
            </ul>
        </div>
    );
}

export default Chapter;
