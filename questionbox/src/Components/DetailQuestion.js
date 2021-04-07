import React, { useState, useEffect } from 'react'
import Question from './Question'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AnswerQuestion from './AnswerQuestion'
import { Link } from 'react-router-dom'


export default function DetailQuestion({ token }) {
    const { id } = useParams()
    const [questionDetail, setQuestionDetail] = useState([])
    const [answers, setAnswers] = useState([])
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        axios
            .get(`http://swordtail.herokuapp.com/questions/${id}`)
            .then((data) => {
                setQuestionDetail(data.data)
            })
            return () => setAnswers(questionDetail.answers)
    },[id, answers]);
    
    const handleDone = (newAnswers) => {
        setAnswers([...answers, newAnswers])
    }

    const deleteQuestion = () => {
        axios
            .delete(`http://swordtail.herokuapp.com/questions/${id}`,
            {
                headers: { Authorization: `Token ${token}`},
            }
            )
            .then((response) => {
                console.log('delete', response)
                if(response.data != null) {
                    alert('Question was deleted successfully');
                }
            },
            )}


    function likeAnswer(id) {
        axios
        .put(`http://swordtail.herokuapp.com/answers/${id}/`,
        {
            
        },
        {
            headers: { Authorization: `Token ${token}`},
        })
    }

    
    
    
    return (
        <div className='question-detail-container'>
            <div className='question-detail'>
                <h1>Question Details</h1>
                <h4>Question: "{questionDetail.title}?"</h4>
                <p>Asked By: <Link to={`/owner/${questionDetail.owner_id}`}>{questionDetail.owner}</Link></p>
                <p>Date Asked: {questionDetail.date_created}</p>
                <p>Question Body: {questionDetail.body}</p>
                <button
                onClick={(event) => deleteQuestion(id, event)}
                >Delete this question</button>


            </div>

            <AnswerQuestion 
            question_id={questionDetail.id}
            token={token}
            handleDone={handleDone}
            />

            {questionDetail.answers ? (
                <div className='question-answers'>
                    <h3 className='answers-header'>Answers:</h3>
                    <ul>
                        {questionDetail.answers.map((answer) => (
                            <div>
                                <li key={questionDetail.id}>
                                <p>{answer.body}</p>
                                <p>Author: <Link to={`/owner/${answer.owner_id}`}>{answer.owner}</Link></p>
                                <p>&#128077;: {answer.likers.length} </p>
                                <button
                                value={answer.id}
                                onClick={(event) => (likeAnswer(event.target.value))}
                                >
                                    Like
                                </button>
                                </li>
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
