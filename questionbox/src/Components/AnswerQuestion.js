import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AnswerQuestion( question, token ) {
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [questionId, setQuestionId] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post('http://swordtail.herokuapp.com/answers/',
            {
                title:title,
                body: body,
                question: `{question.id}`,
            },
            {
                headers: { Authorization: `Token ${token}`},
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <div>
                    <label for='answer-title'></label>
                    <input 
                    id='answer-title' 
                    type='text'
                    onChange={(event) => setTitle(event.target.value)}></input>
                </div> */}
                <div>
                    <label for='answer-body'></label>
                    <input 
                    id='answer-body'
                    type='text'
                    onChange={(event) => setBody(event.target.value)}></input>
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
