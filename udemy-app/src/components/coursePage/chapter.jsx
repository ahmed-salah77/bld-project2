import React from 'react';
import '../../css/chapter.css'

const Chapter = (props) => {
    const section = props.section;
    if(!section)
        return<h1>Loading</h1>;
    console.log(section);
    const idx=props.idx;
    let num_lectures =0,durationInSeconds = 0;
    section.forEach(element => {
        if(element._class === 'lecture')
            num_lectures++;
    });

    let _html = ``;
    for (let i = 1; i < section.length; i++) {
        const element = section[i];
        if(element._class == 'lecture'){
            const time = element.content_summary;
            durationInSeconds+=parseInt(time.substr(0,2))*60;
            durationInSeconds+=parseInt(time.substr(3,2));
        }
        _html+=
        `<li key = '${element.id}' class='lecture ${element.can_be_previewed ? 'canPlay':''}'>
            ${element.asset  && element.asset.asset_type === 'Video' ? `<i class="fa-solid fa-circle-play play-icon"></i>`:''}
            ${element.asset  && element.asset.asset_type === 'Article' ? `<i class="fa-regular fa-file play-icon"></i>`:''}
            ${!element.asset  ? `<i class="fa-regular fa-circle-question play-icon"></i>`:''}
            <div class='lec-title'>${element.title}</div>
            <span style="flex: 1 1 0%;"></span>
            ${element.can_be_previewed ? `<div class='preview-lec'>Preview</div>`:''}
            <div class='lec-duration'>${element.content_summary ? element.content_summary:element.estimated_duration}</div>
        </li>`;
    }
    const flip = ()=>{
        const lec = document.querySelector('#lec-'+idx);
        const icon = document.querySelector('#toggle-icon-'+idx);
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
    const display = (idx >= 10 ? 'extra-section d-none':'');
    return (
        <div className={'section '+display}>
            <div className='chapter' onClick={flip}>
                <div id ={"toggle-icon-"+idx} className={"fa-solid fa-caret-down toggle-icon"}></div>
                <div className='chapter-title'>{section[0].title}</div>
                <span style={{flex: "1 1 0%"}}></span>
                <div className='chapter-info'>{num_lectures} lectures • {parseInt(durationInSeconds/60/60) ? parseInt(durationInSeconds/60/60)+'hr':''} {parseInt(durationInSeconds%3600/60)} min</div>
            </div>
            <ul id = {'lec-'+idx} className='lectures-container ' dangerouslySetInnerHTML={{__html:_html}}>
                
            </ul>
        </div>
    );
}

export default Chapter;
