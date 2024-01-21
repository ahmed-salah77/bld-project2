
import React from "react";
import '../../css/tabsNav.css';
import bannerData from '../../bannerData.json'
import {useState,useContext} from 'react';
import {CourseData} from '../../App'

const TabsNav = (props) => {
    const setSearchText =  useContext(CourseData).setSearchText;
    const setCoures = useContext(CourseData).setCourses;
    const [lastSelected,setLastSelected] = useState(0);
    const update = (event)=>{
        setCoures(null);
        const lastSelectedBtn = document.getElementById(lastSelected);
        lastSelectedBtn.classList.remove('selected');
        const newSelectedBtn = document.getElementById(event.target.id);
        newSelectedBtn.classList.add('selected');
        setLastSelected(event.target.id);
        props.setBannerId(event.target.id);
        setSearchText(bannerData.bannerData[event.target.id].searchText);
    }
    return (
        <div className="course-type fnt">
            <button id="0" className="tab-btn selected" onClick={update}>Python</button>
            <button id="1" className="tab-btn" onClick={update}>Excel</button>
            <button id="2" className="tab-btn" onClick={update}>Web Development</button>
            <button id="3" className="tab-btn" onClick={update}>JavaScript</button>
            <button id="4" className="tab-btn" onClick={update}>Data Science</button>
            <button id="5" className="tab-btn" onClick={update}>AWS Certification</button>
            <button id="6" className="tab-btn" onClick={update}>Drawing</button>
        </div>
    );
}
export default TabsNav;