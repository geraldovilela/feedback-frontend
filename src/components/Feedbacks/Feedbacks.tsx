import React from 'react';
import { Link } from 'react-router-dom';
import Edit from '../../assets/icons/edit.svg';

import './styles.css'

const Feedbacks = () => {
    return (
        <article>
            <div className="feedback-item">
                <header className="feedback-header">
                    <div>
                        <strong className="titles">Usuario Avaliado</strong>
                        <p>Fulaninho</p>
                    </div>
                    <div>
                        <p><strong>Data:</strong> 05/05/2005</p>

                        <Link to="/edit">
                            <img src={Edit} alt="Editar Feedback" />
                        </Link>
                    </div>
                </header>
                <div id="feedback-container">
                    <strong className="titles">Pontos a melhorar</strong>
                    <p className="content">loreypsum</p>

                    <strong className="titles">Pontos a manter</strong>
                    <p className="content">loreypsum</p>

                    <strong className="titles">Sugestões</strong>
                    <p className="content">loreypsumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

                    <strong className="titles">Feedback Final</strong>
                    <p className="content">loreypsum</p>
                </div>

            </div>
        </article>
    )
}

export default Feedbacks;