import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './timeline.scss';

class TimeLine extends React.Component {

    render() {
        return (
            <Grid>
                <Row className='timeline-container-v2'>
                    <Col xs={2} className='bottom'>
                        <div className='circle text-center'>2019</div>
                    </Col>
                    <Col xs={10}>
                        <p>Project Name</p>
                        <p>Project Description</p>
                    </Col>
                </Row>
                <Row className='timeline-path-v2'>
                    <Col xs={2}>
                        <div className='corner top-right'></div>
                    </Col>
                    <Col xs={8}>
                        <hr />
                    </Col>
                    <Col xs={2}>
                        <div className='corner left-bottom'></div>
                    </Col>
                </Row>
                <Row className='timeline-container-v2 flex-end'>
                    <Col xs={10} className='text-right'>
                        <p>Project Name</p>
                        <p>Project Description</p>
                    </Col>
                    <Col xs={2} className='text-center full'>
                        <div className='circle'>2019</div>
                    </Col>
                </Row>
                <Row className='timeline-path-v2'>
                    <Col xs={2}>
                        <div className='corner right-bottom'></div>
                    </Col>
                    <Col xs={8}>
                        <hr />
                    </Col>
                    <Col xs={2}>
                        <div className='corner top-left'></div>
                    </Col>
                </Row>
                <Row className='timeline-container-v2'>
                    <Col xs={2} className='text-center top'>
                        <div className='circle'>2019</div>
                    </Col>
                    <Col xs={10}>
                        <p>Project Name</p>
                        <p>Project Description</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default TimeLine;