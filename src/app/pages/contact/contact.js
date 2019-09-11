import React from 'react';
import './contact.scss';

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p style={{color: 'white'}} key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      }
      return '';
    })}
  </div>

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            formErrors: {email: '', name: '', message: ''},
            validFields: {email: false, name: false, message: false},
            formValid: false
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
        this.setState({formValid: validFields.email && validFields.name});
    }

    render() {
        const {email, name, message, validFields} = this.state;
        return(
            <div className="contact">
                
                <h1>Contact <span id='contrast'>Me</span></h1>

                <div>
                    <form>
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
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;