import React from 'react';
import { Link} from 'react-router-dom';
import Edit from '../../assets/icons/edit.svg';

import './styles.css'

interface FeedbacksProps {
    feedback: {
        feedback_id:string;
        user_post: string;
        user_evaluated: string;
        points_improvments: string;
        points_to_keep: string;
        sugestions: string;
        final_feedback: string;
        created_at: Date;
    }
}

const Feedbacks: React.FC<FeedbacksProps> = ({ feedback }) => {
   
    return (
        <div>
            <div className="feedback-item" id={feedback.feedback_id}>
                <header className="feedback-header">
                    <div>
                        <strong className="titles">Usuario Avaliado</strong>
                        <p>{feedback.user_evaluated}</p>
                    </div>
                    <div>
                        <p><strong>Data:</strong> {feedback.created_at}</p>

                        <Link to="/edit" id={feedback.feedback_id}>
                            <img src={Edit} alt="Editar Feedback" />
                        </Link>
                    </div>
                </header>
                <div id="feedback-container">
                    <strong className="titles">Pontos a melhorar</strong>
                    <p className="content">{feedback.points_improvments}</p>

                    <strong className="titles">Pontos a manter</strong>
                    <p className="content">{feedback.points_to_keep}</p>

                    <strong className="titles">Sugestões</strong>
                    <p className="content">{feedback.sugestions}</p>

                    <strong className="titles">Feedback Final</strong>
                    <p className="content">{feedback.final_feedback}</p>
                </div>

            </div>
        </div>
    )
}

export default Feedbacks;