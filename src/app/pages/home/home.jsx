import React from 'react';
import MyName from '../../../components/my-name/my-name';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withFirebase } from '../../../config/firebase';

import './home.scss';


class Home extends React.Component {
   
    render(){
        return(
            <Grid fluid>
                <Row middle='xs'>
                    <Col xs={12} md={6}>
                        <MyName/>
                    </Col>
                    <Col className='hide-on-mobile' md={6}>
                        <div id='image'>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default withFirebase(Home);