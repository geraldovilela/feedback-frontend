import React,{useEffect, useState, useCallback} from 'react';

import Feedbacks from '../../components/Feedbacks/Feedbacks';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

export default function Feedback() {
    const [feedbacks, setFeedbacks]= useState({})
    const id = localStorage.getItem('login')
    const getFeedbacks= useCallback( async ()=>{
        const data = await api.get('/feedback').then()
        setFeedbacks(data);
        
    },[]);
    
    useEffect(()=>{
        getFeedbacks()
    }, [getFeedbacks])

   


    return (
        <>
            <PageHeader />
            <div id="container">
                <main id="container">
                 
                    <Feedbacks></Feedbacks>
                
                </main>
            </div>
        </>
    )
}