import React, {useState} from 'react';
import {connect} from 'react-redux'

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'


const SignIn = ({emailSignInStart,googleSignInStart}) =>{
    // constructor(props){
    //     super(props);

    //     this.state={
    //         email:'',
    //         password:''
    //     }
    // }

    const [userCredentials, setCredentials] = useState({
        email:'',
        password:''
    });

    const {email,password} = userCredentials;

    const handleSubmit = async (event) =>{
        //prevent default submit action to fireup
        event.preventDefault();

        // const {emailSignInStart} = this.props;

        emailSignInStart(email,password);
    }

    const handleChange = (event) =>{
        const {value, name}= event.target;

        //dynamic set property name and value
        setCredentials({...userCredentials, [name]:value});
    }
        // const {googleSignInStart} = this.props;
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} handleChange={handleChange} label='email' required />
                <FormInput name='password' type='password' value={password} handleChange={handleChange} label='password' required />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>{' '}Sign with Google{' '}</CustomButton>
                </div>
            </form>
        </div>
    )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);


// class to hook conversion
// this.state ->  read state ex. as userCredentials, write the state setCredentials
//props as arguments in functions 
//methods -> internal functions, this.handleSubmit -> handleSubmit
//this.state.email -> email
