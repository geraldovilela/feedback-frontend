import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/imgs/feedLogo.png';
import Logout from '../../assets/icons/log-out.svg';
import Plus from '../../assets/icons/plus-circle.svg';

import './styles.css'

const PageHeader = () => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/" className="logout">
                    <img src={Logout} alt="sair"/>
                </Link>
                <img src={Logo} alt="Feedback" />

                <Link to='/newfeedback'>
                <img src={Plus} alt="Adicionar novo Feedback" />
            </Link>


            </div>
        </header>
    )
}

export default PageHeader;