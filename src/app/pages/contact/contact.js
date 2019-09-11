import React from 'react';
import './contact.scss';
import FormComponent from '../../../components/form/form';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <Grid fluid>
                <Row middle='xs'>
                    <Col xs={12} md={6}>
                        <div className="contact">
                            <h1>Contact <span className='contrast'>Me</span></h1>
                            <FormComponent />
                        </div>
                    </Col>
                    <Col md={6} className='contact-message' >
                        <h2>
                            I would <span className='contrast'>love</span> to join to your team
                        </h2>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Contact;