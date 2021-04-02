import React from 'react'

export default function QuestionDetail({ question_title, created_at, question_text }) {
    return (
        <div>
            <h3>{question_title}</h3>
            <p>{created_at}</p>
            <p>{question_text}</p>
        </div>
    )
}
