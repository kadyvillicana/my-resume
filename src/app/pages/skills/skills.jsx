import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './skills.scss';

class Skills extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            skills: ['REACT JS', 'REACT NATIVE', 'IONIC', 'XAMARIN', 'ANGULAR', 
            'HTML', 'CSS', 'JQUERY', 'NODE JS', 'MONGO DB', 'COUCH DB', 'MYSQL', 
            'SQL SERVER', 'PHP', 'ANDROID', 'IOS', 'LAMBDA', 'AZURE', 'AWS', 'C#',
            'NET CORE', 'UNIT TESTING', 'PYTHON', 'SCRUM', 'UX | UI', 'CI/CD'
            ]
        }
    }
   
    render(){
        const { skills } = this.state;
        return(
            <Row className='main-skills'>
                <Col xs={12} md={6}>
                    <h1>Skills <span className='amp'>&amp;</span> Experience</h1>
                </Col>
                <Col xs={12} md={6}>
                    {
                        skills.map( (skill, idx) => <p key={idx} className={`skill underlined`}>{skill}</p>)
                    }
                </Col>
            </Row>
        )
    }
}

export default Skills;