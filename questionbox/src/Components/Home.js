import React, { useState } from 'react'
import QuestionFeed from './QuestionFeed'
import data from '../questions2'



export default function Home() {
    const [questions, setQuestion] = useState(data)

    return (
        <div>
            <h1>Question Feed</h1>
                {questions.map((question) => (
                    <QuestionFeed
                    key = {question.id}
                    question_title = {question.title}
                    date_created = {question.date_created}
                    question_body = {question.body}
                    question_id = {question.id}
                    />
                ))}
        </div>
    )
}


