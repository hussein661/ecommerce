import React from 'react';
import './custom-button.scss'

const CustomButton = ({children,isGoogleSignIn,...otherButtonProps}) => {
    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherButtonProps}>
            {children}
        </button>
    );
};

export default CustomButton;