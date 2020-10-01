import React from 'react';

import './styles.css'

const Feedbacks = () => {
    return (
        <article>
            <div className="feedback-item">
                <header className="feedback-header">
                    <strong className="titles">Usuario Avaliado</strong>
                    <p><strong>Data:</strong> 05/05/2005</p><button>Editar</button>
                    
                </header>
                <div id="feedback-container">
                    <strong className="titles">Pontos a melhorar</strong>
                    <p className="content">loreypsum</p><br></br>

                    <strong className="titles">Pontos a manter</strong>
                    <p className="content">loreypsum</p><br></br>

                    <strong className="titles">Sugestões</strong>
                    <p className="content">loreypsum</p><br></br>

                    <strong className="titles">Feedback Final</strong>
                    <p className="content">loreypsum</p><br></br>
                </div>
                
            </div>
        </article>
    )
}

export default Feedbacks;