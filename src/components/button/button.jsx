import React from 'react';
import './button.styles.scss';

const Button = ({children, isGoogleSignIn,inverted,...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} custom-button`}
     {...otherProps}>
        {children}
    </button>
);

export default Button;