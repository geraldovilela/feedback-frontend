import React,{useEffect, useState, useCallback} from 'react';

import Feedbacks from '../../components/Feedbacks/Feedbacks';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

import './styles.css'

export default function Feedbaack() {
    const [feedbacks, setFeedbacks]= useState([])
    const getFeedbacks= useCallback( async ()=>{
        const data = await api.get('/feedback').then()
        setFeedbacks(data.data);
        
    },[]);
    
    useEffect(()=>{
        getFeedbacks()
    }, [getFeedbacks])

   


    return (
        <>
            <PageHeader />
            <div id="container">
                <main id="container">
                 {feedbacks.map(feedback=>{
                     return (<Feedbacks feedback={feedback}/>)
                 })}
                   
                
                </main>
            </div>
        </>
    )
}