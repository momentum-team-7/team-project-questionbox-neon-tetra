import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AnswerQuestion({ question_id, token, handleDone }) {
    const [body, setBody] = useState('')

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
            .then((data) => {
                handleDone(data.data)
            setBody('')
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for='answer-body'></label>
                    <textarea 
                    id='answer-body'
                    value={body}
                    type='text'
                    placeholder='Enter your answer'
                    onChange={(event) => setBody(event.target.value)}></textarea>
                </div>
                <div>
                    <button
                    className="btn btn-primary" 
                    type='submit'>
                        Submit your answer
                    </button>
                </div>
            </form>
        </div>
    )
}
