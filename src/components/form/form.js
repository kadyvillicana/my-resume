import React from 'react';
import './form.scss';
import { withFirebase } from '../../config/firebase';

const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <p style={{color: 'white'}} key={i}> <span className='contrast'>{fieldName}</span> {formErrors[fieldName]}</p>
                )        
            }
            return '';
        })}
    </div>


class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            formErrors: {email: '', name: '', message: ''},
            validFields: {email: false, name: false, message: false},
            formValid: false,
            sending: false
        }
    }

    handleUserInput = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    validateField = (fieldName, value) => {
        let {formErrors, validFields } = this.state;
      
        switch(fieldName) {
            case 'email':
                validFields.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                formErrors.email = validFields.email ? '' : ' is invalid';
                break;
            case 'name':
            case 'message':
                validFields[fieldName] = value.length >= 6;
                formErrors[fieldName] = validFields[fieldName] ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors, validFields}, this.validateForm);
      }
    
    validateForm = () => {
        const { validFields } = this.state;
        this.setState({formValid: validFields.email && validFields.name && validFields.message});
    }

    submit = (e) => {
        e.preventDefault();

        const {email, name, message} = this.state;

        this.setState({sending: true});
        this.props.firebase.contactRef().add({
            email,
            name,
            message,
            createdAt: new Date().toISOString()
        });
    }

    render() {
        const {email, name, message, validFields, formValid, formErrors, sending} = this.state;

        if(sending) {
            return (
                <h2 style={{color: 'white', textAlign:'center'}}>Thanks for contact me. I will reach you as soon as possible.</h2>
            );
        }
        
        return (
            <div className='form'>
                <form onSubmit={this.submit}>
                    <div className="container-input">
                        <input className="input" name="name" type="text" placeholder="First Name"
                            value={name}
                            onChange={(event) => this.handleUserInput(event)}/>
                        <span className={`border ${validFields.name ? 'valid-field' : ''}`}></span>
                    </div>
                    <div className="container-input">
                        <input className="input" name="email" type="email" placeholder="Email" 
                            value={email}
                            onChange={(event) => this.handleUserInput(event)}/>
                        <span className={`border ${validFields.email ? 'valid-field' : ''}`}></span>
                    </div>
                    <div className='container-input'>
                        <textarea name='message' placeholder='Write something...'
                        value={message}
                        onChange={(event) => this.handleUserInput(event)} 
                        className='textarea input' />
                        <span className={`border ${validFields.message ? 'valid-field' : ''}`}></span>
                    </div>
                    <div className='panel panel-default'>
                        {
                            Object.values(formErrors).filter(e => e !== '').length > 0 ? <p style={{color: 'white'}}>I cannot contact you if your information is not correct</p> : null
                        }
                        <FormErrors formErrors={formErrors} />
                    </div>
                    <div style={{textAlign: 'center', marginTop: '20px'}}>
                        <button className='button-link'
                            disabled={!formValid}>CONTACT ME</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withFirebase(FormComponent);