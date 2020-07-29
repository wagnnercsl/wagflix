import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';

import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <ButtonLink href="/">
                <img className="Logo" src={logo} alt="Wagflix logo"/>
            </ButtonLink>

            <ButtonLink className="ButtonLink" href="/">
                <p>Novo vídeo</p>
            </ButtonLink>
        </nav>
    )
}

export default Menu;