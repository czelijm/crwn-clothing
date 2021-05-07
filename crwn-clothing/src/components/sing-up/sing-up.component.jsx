import React from 'react';
import {connect} from 'react-redux'

import '../form-input/form-input.component';
import '../custom-button/custom-button.component';

import './sing-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {singUpStart} from '../../redux/user/user.action'

class SingUp extends React.Component{
    constructor(){
        super(); 
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };
    }

    handleSubmit = async (event) =>{ 
        event.preventDefault();

        const {singUpStart} = this.props;
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;  
        }

        singUpStart(email,password,displayName);

        // const {displayName,email,password,confirmPassword} = this.state;

        // if(password !== confirmPassword){
        //     alert("passwords don't match");
        //     return;  
        // }

        // try {
        //     const {user} = await auth.createUserWithEmailAndPassword(email,password);
        //     await createUserProfileDocument(user,{displayName});

        //     //this will clear our form
        //     this.setState({
        //         displayName:'',
        //         email:'',
        //         password:'',
        //         confirmPassword:''
        //     });

        // } catch (error) {
        //     console.error(error);
        // }
    }

    hanleChange = event =>{
        const{name,value} = event.target;
        this.setState({[name]:value});
    }

    render(){
    
        const {displayName,email,password,confirmPassword} = this.state;

        return(
            <div className='sing-up'>
                <h2 className='title'>I do not have account</h2>
                <span>Sign up with your email and password</span>
                <form className='sing-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.hanleChange}
                        label='Display name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.hanleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.hanleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.hanleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>
                    {/* <CustomButton type='button' onClick={password===confirmPassword?singUpStart:null}> */}
                        SIGN UP
                    </CustomButton>
                </form>
            </div>
        )
    }  
}

const mapDispatchToProps = dispatch => ({
    singUpStart: (email,password,displayName) => dispatch(singUpStart({email,password,displayName}))
})

export default connect(null,mapDispatchToProps)(SingUp);