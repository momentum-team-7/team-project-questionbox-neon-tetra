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
            
    },[id])
    
    
    
    return (
        <div className='question-detail'>
            <div>
                <h1>Question Details</h1>
                <p>Question: {questionDetail.title}</p>
                
            </div>

            <div className='question-answers'>
                


            </div>

        </div>
    )
}
