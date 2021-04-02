import React from 'react'

export default function QuestionDetail({ question_title, date_created, question_body, question_id }) {
    return (
        <div>
            <h3>{question_title}</h3>
            <p>{date_created}</p>
            <p>{question_body}</p>
            <p>{question_id}</p>
        </div>
    )
}
