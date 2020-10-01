import React from 'react';

export default function Feedback(){
    return(
        <div className="main" id="container">
            <div className="content">
               <label htmlFor="points_improvments">
               Pontos de Melhoria!
               </label>
               <p id="points_improvments">points_improvments</p>
               <label htmlFor="points_to_keep">
               Pontos a se manter ou melhorar!
               </label>
               <p id="points_to_keep">points_to_keep</p>
               <label htmlFor="sugestions">
               Sugestões para alcançar essas melhoras!!
               </label>
               <p id="sugestions">sugestions</p>
               <label htmlFor="final_feedback">
               feedback final para o colaborador.
               </label>
               <p id="final_feedback">final_feedback</p>
                
               <label htmlFor="user">
                usuario avaliado.
               </label>
               <p id="user_evaluated">user_evaluated</p>
                
            </div>
        </div>
    )
}