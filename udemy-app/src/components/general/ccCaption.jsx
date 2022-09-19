import React from 'react';
import '../../css/ccCaption.css';
const CcCaption = (props) => {
    let _html =`<div class='toBottom d-none w-0'></div><span class="cc-icon fa-solid fa-closed-captioning"></span> <span>${props.ccLang[0]}</span>`;
    console.log(props.ccLang);
    for (let i = 1; i < props.ccLang.length; i++) {
        const element = props.ccLang[i];
        if(i < 2){
            _html+=`<span>, ${element}</span>`;
        }
        else
            _html+=`<span class = 'showMe d-none'>, ${element}</span>`;
    }
    const showMoreCC = ()=>{
        var hiddenCC = document.querySelectorAll('.showMe');
        [].forEach.call(hiddenCC, function(el) {
            el.classList.remove("d-none");
        });
        const btn = document.querySelector('.more-cc');
        btn.classList.add('d-none');
        const toBottom = document.querySelector('.toBottom');
        toBottom.classList.remove('d-none');
    }
    console.log(_html);
    return (
        <span>
        <span dangerouslySetInnerHTML={{__html:_html}}>
         
        </span>
        { props.ccLang.length>2?
            <><span>, </span><button onClick = {showMoreCC} className='more-cc'>{props.ccLang.length-2} more</button></>:''}
        </span>
    );
}

export default CcCaption;
