import React from 'react';
import {Link} from 'react-router-dom'

import './styles.css'
import Logo from '../../assets/imgs/feedLogo.png';

export default function Landing() {
    return (

        <div id="container">
            <img src={Logo} alt="Feedback"/>
            <form className="login">
                <label htmlFor="">Loguin:</label>
                <input type="text" className="login" />
                <label htmlFor="" className="password">Senha:</label>
                <input type="password" className="login" />
                <Link className="link" to="/main">Acessar</Link>
                <Link className="link" to="/register">Cadastre-se</Link>
            </form>
            
            
        </div>
    )
}

