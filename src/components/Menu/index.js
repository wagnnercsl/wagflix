import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './styles.css';

import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Wagflix logo"/>
            </Link>

            <Link className="ButtonLink" to="/cadastro/video">
                <p>Novo vídeo</p>
            </Link>
        </nav>
    )
}

export default Menu;