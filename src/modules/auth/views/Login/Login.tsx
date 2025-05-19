import React from 'react';
import { LoginLeftSide } from '../../components/LoginLeftSide';
import LoginRightSide from '../../components/LoginRightSide/LoginRightSide';

const Login = () => {
    return (
       <div className="flex w-full h-screen">
          <LoginLeftSide />
          <LoginRightSide />
        </div>
        );
};

export default Login;

