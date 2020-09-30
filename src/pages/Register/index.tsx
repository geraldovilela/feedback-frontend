import React from 'react';

import './styles.css'

export default function Register(){
    return (
        <div id="register">
            <form className="register">
                <label htmlFor="name" className="nome">Nome</label>
                <input type="text" id="name"/>
                <label htmlFor="login" className="nome">Login</label>
                <input type="text" id="login"/>
                <label htmlFor="email" className="nome">Email</label>
                <input type="email" id="email"/>
                <label htmlFor="pass" className="nome">Senha</label>
                <input type="text" id="pass"/>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}