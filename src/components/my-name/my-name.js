import React from 'react';

import './my-name.scss';
import ButtonLink from '../button-link/button-link';


const MyName = (props) => {
    const  { name } = props; 
    return (
        <div className='typewriter'>
            <h1>Hello,</h1> 
            <h1>I am <span>{name || 'Kady.'}</span></h1>
            <h2>Full-stack developer <br/> based in&nbsp;
                <span id='green'>Me</span>
                <span id='white'>xi</span>
                <span>co</span>.
            </h2>
            <div>
                <ButtonLink route='/contact' name='CONTACT ME' />
            </div>
        </div>
    );
}

export default MyName;