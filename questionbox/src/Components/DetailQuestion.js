import React, { useState, useEffect } from 'react'
import Question from './Question'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DetailQuestion({ question }) {
    const { id } = useParams()
    const [questionDetail, setQuestionDetail] = useState([])
    // const [loading, setLoading] = useState(false)


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

    // if (loading) {
    //     return <p>Data is loading...</p>;
    // }
    
    return (
        <div className='question-detail'>
            <div>
                <h1>Question Details</h1>
                <p>Question: {questionDetail.title}</p>
                
            </div>

            <div className='question-answers'>
                <ul>
                    {questionDetail.answers.map((answer) => (
                        <li key={questionDetail.id}>{answer.body}</li>
                    ))}
                    
                </ul>
                {/* <p>[{questionDetail.answers}]</p> */}
                


            </div>

        </div>
    )
}
