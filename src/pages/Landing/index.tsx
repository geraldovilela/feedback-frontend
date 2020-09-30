import React from 'react';

import './styles.css'

export default function Landing() {
    return (

        <div id="container">
            <form className="login">
                <label htmlFor="">Loguin:</label>
                <input type="text" className="login" />
                <label htmlFor="" className="password">Senha:</label>
                <input type="password" className="login" />
                <a href="/register">Cadastre-se</a>
            </form>
            
            
        </div>
    )
}

