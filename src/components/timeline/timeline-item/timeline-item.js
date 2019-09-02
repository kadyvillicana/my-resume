import React from 'react';
import '../timeline.scss';

const TimeLineItem = (props) => {
    const {date, description, project, place} = props.data;
    return(
        <div className='timeline-item'>
            <div className='timeline-item-content'>
                <div style={{padding:10}}>
                    <p id='project'>{project}</p>
                    <p id='place'>{place}</p>
                    <p id='description'>{description}</p>
                    <p id="date">{date}</p>
                </div>
            </div>
            <span className="circle" />
        </div>
    )
}

export default TimeLineItem;