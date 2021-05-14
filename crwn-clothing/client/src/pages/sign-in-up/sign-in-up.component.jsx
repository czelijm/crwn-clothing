import React from 'react';
import './sign-in-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sing-up/sing-up.component';

const SignInUpPage = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
) 

export default SignInUpPage;