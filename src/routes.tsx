import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Feedback from './pages/Feedback';
import FeedbackForm from './pages/FeedbackForm';
import Landing from './pages/Landing';
import Register from './pages/Register';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route path="/main" component={Feedback}/>
            <Route path="/newfeedback" component={FeedbackForm}/>
        </BrowserRouter>
    )
}