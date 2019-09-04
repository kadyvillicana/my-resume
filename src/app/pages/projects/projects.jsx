import React from 'react';
import TimeLine from '../../../components/timeline/timeline';

import { PROJECTS } from '../../../config/defaultdata';

class Projects extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            projects: PROJECTS
        }
    }

    componentDidMount() {
    }
   
    render(){
        const { projects } = this.state;
        return(
            <div style={{height: '90vh', overflow: 'auto', marginTop: '30px'}}>
                <TimeLine projects={projects}/>
            </div>
        )
    }
}

export default Projects;