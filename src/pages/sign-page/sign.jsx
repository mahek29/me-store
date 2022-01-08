import React from 'react';
import './sign.styles.scss';
import SignIn from '../../components/sign-in/sign-in.jsx';
import SignUp from '../../components/sign-up/sign-up.jsx'; 

const SignPage = () => (
    <div className = 'sign-in-and-sign-up'>
    <SignIn />
    <SignUp/>
    </div>
);
export default SignPage;