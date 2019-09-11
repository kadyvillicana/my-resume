import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';

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

    componentDidMount() {
        window.scrollTo(0, 0)
    }
   
    render(){
        const { skills } = this.state;
        return(
            <Grid fluid>
                <Row middle='xs'>
                    <Col xs={12} md={6}>
                        <div className='main-skills'>
                            <h1>Skills <span className='amp'>&amp;</span> Experience</h1>
                            <p>
                                I've always like to be involved in most of the software development phases. Starting from requirements analysis to the product maintance. <br/><br/>
                                It's thanks to my curiosity that I have strong knowledge in many different front-end and back-end languages, 
                                responsive frameworks, databases, unit testing and best code practices. <br/><br/>
                            </p>

                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        {
                            skills.map( (skill, idx) => <p key={idx} className={`skill underlined`}>{skill}</p>)
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Skills;