import React, {useState} from 'react';
import {connect} from 'react-redux'

import '../form-input/form-input.component';
import '../custom-button/custom-button.component';

import './sing-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {singUpStart} from '../../redux/user/user.action'

const SingUp = ({singUpStart}) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const {displayName,email,password,confirmPassword} = userCredentials;
    
    const handleSubmit = async (event) =>{ 
        event.preventDefault();

        // const {singUpStart} = this.props;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;  
        }

        singUpStart(email,password,displayName);
    }

    const hanleChange = event =>{
        const{name,value} = event.target;
        setUserCredentials({...userCredentials, [name]:value});
    }

    return(
        <div className='sing-up'>
            <h2 className='title'>I do not have account</h2>
            <span>Sign up with your email and password</span>
            <form className='sing-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={hanleChange}
                    label='Display name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={hanleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={hanleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={hanleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </div>
    )
      
}

const mapDispatchToProps = dispatch => ({
    singUpStart: (email,password,displayName) => dispatch(singUpStart({email,password,displayName}))
})

export default connect(null,mapDispatchToProps)(SingUp);