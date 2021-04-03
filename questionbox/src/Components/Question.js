import React from 'react'

export default function Question ({ question_title, date_created, owner, answered, answers, questions }) {
// const [qanswered, setQAnswered] = ()

    return (
        <div>
            <h3>{question_title}</h3>
            <p>{date_created}</p>
            <p>owner ID: {owner}</p>
            <p>is it answered: {answered}</p>
            <p>answers: {answers.length}</p>
        </div>
    )
}
