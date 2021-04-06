import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { useParams } from 'react-router-dom'

export default function Question ({ question_title, date_created, owner, answered, answers, questions, id, owner_id }) {
    // const { id } = useParams()
// const [qanswered, setQAnswered] = ()

    return (
        <div>
            {/* ID still undefined */}
            <Link to={`/question/${id}`}><h3>{question_title}</h3></Link>
            <p>{date_created}</p>
            <Link to={`/owner/${owner_id}`}><p>{owner}</p></Link>
            <p>is it answered: {answered}</p>
            <p>answers: {answers.length}</p>
        </div>
    )
}
