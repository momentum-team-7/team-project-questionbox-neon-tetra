import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AnswerQuestion( {question_id} ) {
    const [body, setBody] = useState('')
    const token = 'ae60a41a7a7c2881b7b3dc9aecb029a78ef37957'


    const handleSubmit = (event) => {
        console.log(token)
        console.log('question ID is', {question_id})
        event.preventDefault()
        axios
            .post('http://swordtail.herokuapp.com/answers/',
            {
                body: body,
                question: `${question_id}`,
            },
            {
                headers: { Authorization: `Token ${token}`},
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for='answer-body'></label>
                    <textarea 
                    id='answer-body'
                    type='text'
                    onChange={(event) => setBody(event.target.value)}></textarea>
                </div>
                <div>
                    <button 
                    type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
