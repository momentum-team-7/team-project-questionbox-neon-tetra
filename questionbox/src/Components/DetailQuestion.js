import React, { useState, useEffect } from 'react'
import Question from './Question'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DetailQuestion({ question }) {
    const { id } = useParams()
    const [questionDetail, setQuestionDetail] = useState([])

    useEffect(() => {
        axios
            .get(`http://swordtail.herokuapp.com/questions/${id}`)
            // {
            //     headers: {
            //         Authorization: `Token ${token}`,
            //     },
            // })
            .then((data) => {
                console.log('questionDetail:', data.data)
                setQuestionDetail(data.data)
            })
            
    },[id]);

    
    
    console.log('post-render', questionDetail.answers)
    
    return (
        <div className='question-detail-container'>
            <div className='question-detail'>
                <h1>Question Details</h1>
                <h4>Question: "{questionDetail.title}?"</h4>
                <p>Asked By: {questionDetail.owner}</p>
                <p>Date Asked: {questionDetail.date_created}</p>
                
            </div>

            {questionDetail.answers ? (
                <div className='question-answers'>
                    <h3 className='answers-header'>Answers:</h3>
                    <ul>
                        {questionDetail.answers.map((answer) => (
                            <div>
                                <li key={questionDetail.id}>{answer.body}</li>
                                <p>Author: {answer.owner}</p>
                            </div>    
                        ))}
                        
                    </ul>
                </div>
                ) : (
                    <p>Still loading...</p>
                )}
                
        </div>
    )
}
