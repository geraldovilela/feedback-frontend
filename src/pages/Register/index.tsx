import React, { ChangeEvent, FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import './styles.css'

function Register() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name:'',
        login:'',
        email:'',
        password:''
    })
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
       const {name,value} = event.target;
      
       setFormData({...formData, [name]:value});
       
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const {name, email, login, password} = formData;

        const data = {
            name, email, login, password
        }

        await api.post('/user/create', data)
        alert("user has been created.")
        history.push('/');
    }
    return (
        <>
            <PageHeader></PageHeader>
            <div id="register">

                <form className="register" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="input">Nome</label>
                    <input type="text" name="name"id="name" onChange={handleInputChange}/>
                    <label htmlFor="login" className="input">Login</label>
                    <input type="text" name="login"id="login" onChange={handleInputChange} />
                    <label htmlFor="email" className="input">Email</label>
                    <input type="email" name="email" id="email" onChange={handleInputChange} />
                    <label htmlFor="password" className="input">Senha</label>
                    <input type="text" name="password" id="password" onChange={handleInputChange} />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </>
    )
}
export default Register;