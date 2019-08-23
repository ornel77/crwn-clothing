import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custon-button.component'


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = e => {
        e.preventDefault() //we want full control of what the submit is gonna do
        this.setState({email:'', password:''})
    }

    handleChange = e => {
        const { name, value} = e.target
        this.setState({ [name]: value})
    }

    render() {
        const { email, password } = this.state
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        value={email} 
                        name="email" 
                        handleChange={this.handleChange}
                        label="email" 
                        required/>

                    <FormInput 
                        type="password" 
                        value={password} 
                        name='password' 
                        handleChange={this.handleChange} 
                        label='password'
                        required/>

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
                
            </div>
        )
    }
}

export default SignIn
