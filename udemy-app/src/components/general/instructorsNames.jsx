import React from 'react';

const InstructorsNames = (props) => {
    let title = props.instructors[0].display_name;
    console.log(title);
    for (let i = 1; i < props.instructors.length; i++) {
        const element = props.instructors[i].display_name;
        title+=','+element;
    }
    return (
        <div>
            {title}
        </div>
    );
}

export default InstructorsNames;
