import React, { useState, useEffect } from 'react'
import Question from './Question'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AnswerQuestion from './AnswerQuestion'
import { Link, Redirect } from 'react-router-dom'
import UserFeed from './UserFeed'
import lodash from 'lodash'


export default function DetailQuestion({ token }) {
    const { id } = useParams()
    const [questionDetail, setQuestionDetail] = useState([])
    const [answers, setAnswers] = useState([])
    const [deleted, setDeleted] = useState(false)

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

    if (deleted) {
        return <Redirect to='/' />
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
                    alert('Question was deleted successfully! Press home to check');
                    setDeleted(true)
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
        .then((data) => {
            handleDone(data.data)
        })
    }

    
    
    
    return (
        <div className='question-detail-container'>
            <div className='question-detail'>
                <h4>"{questionDetail.title}?"</h4>
                <div className="question-body"><p>{questionDetail.body}</p></div>
                <div className="asked-by"><p>Asked By: <Link to={`/owner/${questionDetail.owner_id}`}>{questionDetail.owner}</Link></p></div>
                <div className="date-created"><p>Date Asked: {questionDetail.date_created}</p></div>
                <button className="btn btn-primary"
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
                    <h3 className='answers-header'>Answers({questionDetail.answers.length}):</h3>
                    <ul>
                        {lodash.orderBy(questionDetail.answers, ['likers'], ['desc']).map((answer) => (
                            <div className="answer">
                                <li key={questionDetail.id}>
                                <div className="answer-body"><p>{answer.body}</p></div>
                                <div className="answerer"><p>Answerer: <Link to={`/owner/${answer.owner_id}`}>{answer.owner}</Link></p></div>
                                <div className="likes-text"><p>Likes: {answer.likers.length} </p></div>
                                <button
                                className="like-button"
                                value={answer.id}
                                onClick={(event) => (likeAnswer(event.target.value))}
                                >
                                    &#128077;
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
