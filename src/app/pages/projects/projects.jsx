import React from 'react';
import TimeLine from '../../../components/timeline/timeline';
import { withFirebase } from '../../../config/firebase';

import { PROJECTS } from '../../../config/defaultdata';

class Projects extends React.Component {

    _isMounted = false;

    constructor(props){
        super(props);

        this.state = {
            projects: PROJECTS
        }
    }

    componentDidMount() {
        this._isMounted = true;

        this.props.firebase.infoRef().doc('experience')
            .onSnapshot((doc) => {
                if(this._isMounted) {
                    const data = doc.data();
                    if(data.projects) {
                        this.setState({projects: data.projects})
                    }
                }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
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

export default withFirebase(Projects);