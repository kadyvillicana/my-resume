import React from 'react';
import TimeLineItem from './timeline-item/timeline-item';

const TimeLine = () => {
    const data = [
        { 
            place:'Morelia Mich. Mx', 
            project: 'Empanadas Luptia', 
            description:'Responsible to sell and prepare empanadas',
            date: '10/19/2019'
        }
    ]
    return(
        data && data.length > 0 && (
            <div className='timeline-container'>
                {data.map((d, idx) => (
                    <TimeLineItem data={d} key={idx} />
                ))}
            </div>
        )
    )
}

export default TimeLine;