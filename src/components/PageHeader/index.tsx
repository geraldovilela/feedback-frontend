import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/imgs/feedLogo.png';
import Logout from '../../assets/icons/log-out.svg';
import './styles.css'

const PageHeader = () => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/" className="logout">
                    <img src={Logout} alt="sair"/>
                </Link>
                <img src={Logo} alt="Feedback" />

            </div>
        </header>
    )
}

export default PageHeader;