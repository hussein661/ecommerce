import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn,inverted, ...otherButtonProps }) => {
	return (
        <button className={
        `${inverted ? 'inverted' : ''}
         custom-button
        ${isGoogleSignIn ?  'google-sign-in' : ''}`

        
        } {...otherButtonProps} >
			{children}
		</button>
	);
};

export default CustomButton;
