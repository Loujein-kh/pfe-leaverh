import React from 'react';
import { SignupLeftSide } from '../../components/SignupLeftSide/SignupLeftSide';
import SignupRightSide from '../../components/SignupRightSide/SignupRightSide';

const Signup = () => {
    return (
        <div className="flex w-full h-screen">
            <SignupLeftSide />
            <SignupRightSide />
        </div>
    );
};

export default Signup;
