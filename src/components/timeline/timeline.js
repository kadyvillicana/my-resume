import React from 'react';
import TimeLineItem from './timeline-item/timeline-item';
import './timeline.scss';

const TimeLine = (props) => {
    const  { projects } = props; 
    return (
        <div className='timeline-container'>
            {
                projects && projects.length > 0 && projects.map((project, idx) => 
                    <TimeLineItem key={idx} project={project}/>
                )
            }
        </div>
    );
}

export default TimeLine;