import React from 'react';
import Feedbacks from '../../components/Feedbacks/Feedbacks';
import PageHeader from '../../components/PageHeader';


export default function Feedback() {
    return (
        <>
            <PageHeader />
            <div id="container">
                <main id="container">
                    <Feedbacks></Feedbacks>
                    <Feedbacks></Feedbacks>
                    <Feedbacks></Feedbacks>
                    <Feedbacks></Feedbacks>
                </main>
            </div>
        </>
    )
}