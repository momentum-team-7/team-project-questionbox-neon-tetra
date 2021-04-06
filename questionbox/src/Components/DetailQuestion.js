import React, { useState, useEffect } from 'react'
import Question from './Question'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AnswerQuestion from './AnswerQuestion'
import { Link } from 'react-router-dom'


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
                <p>Asked By: <Link to={`/owner/${questionDetail.owner_id}`}>{questionDetail.owner}</Link></p>
                <p>Date Asked: {questionDetail.date_created}</p>
                <p>Question Body: {questionDetail.body}</p>


            </div>

            <AnswerQuestion 
            question_id={questionDetail.id}
            />

            {questionDetail.answers ? (
                <div className='question-answers'>
                    <h3 className='answers-header'>Answers:</h3>
                    <ul>
                        {questionDetail.answers.map((answer) => (
                            <div>
                                <li key={questionDetail.id}>{answer.body}</li>
                                <p>Author: <Link to={`/owner/${answer.owner_id}`}>{answer.owner}</Link></p>
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
