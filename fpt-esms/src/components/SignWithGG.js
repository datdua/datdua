import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import "../css/SignWithGG.css";

export function SignWithGG() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div className='loginGG'>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}