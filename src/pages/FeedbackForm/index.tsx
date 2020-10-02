import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

export default function FeedbackForm(){
    return (
        <>
        <PageHeader></PageHeader>
        <div className="feedback-form" id="container">
            <form action="submit">
                <textarea name="points_improvments"
                    id="points_improvments"
                    cols={50} rows={10}
                    placeholder="ensira aqui o pontos de melhoria!!">

                </textarea>
                <textarea 
                    name="points_to_keep" 
                    id="points_to_keep" 
                    cols={50} 
                    rows={10} 
                    placeholder="ensira aqui os pontos a se manterem!">

                </textarea>
                <textarea 
                    name="points_improvments" 
                    id="points_improvments" 
                    cols={50} rows={10} 
                    placeholder="ensira aqui o pontos de melhoria!!">
                </textarea>
                <textarea 
                    name="points_improvments" 
                    id="points_improvments" 
                    cols={50} 
                    rows={10} 
                    placeholder="ensira aqui o pontos de melhoria!!">

                </textarea>
                
            </form>
        </div>
        </>
    )
}