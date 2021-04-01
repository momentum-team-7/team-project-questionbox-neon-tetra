import React, { useState } from 'react'
import QuestionFeed from './QuestionFeed'
import data from '../questions'



export default function Home() {
    const [questions, setQuestion] = useState(data)

    return (
        <div>
            <h1>Question Feed</h1>
                {questions.map((question, index) => (
                    <QuestionFeed
                    key = {index}
                    question_title = {question.question_title}
                    created_at = {question.created_at}
                    question_text = {question.question_text}
                    id = {question.id}
                    />
                ))}
        </div>
    )
}


