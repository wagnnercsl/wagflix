import React from 'react';
import logo from '../../assets/img/logo.png';
//import './styles.css';

function ButtonLink({className, href, children}) {
    return (
            <a className={className} href={href}>
                {children}
            </a>
    )
}

export default ButtonLink;