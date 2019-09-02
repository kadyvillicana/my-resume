import React from 'react';
import TimeLine from '../../../components/timeline/timeline';

class Experience extends React.Component {
   
    render(){
        return(
            <div style={
                {
                    display: 'flex',
                    minHeight: '100vh',
                }}>
                <TimeLine />

            </div>
        )
    }
}

export default Experience;