import React from 'react'
import { Link } from 'react-router-dom'


export default function Question ({ question_title, date_created, owner, answered, answers, questions, id, owner_id, }) {

    return (
        <div className="question">
            <div className="question-question-title"><Link to={`/question/${id}`}><h3>{question_title}</h3></Link></div>
            <div className="question-question-asked-by"><p>Asked by: <Link to={`/owner/${owner_id}`}>{owner}</Link></p></div>
            <div className="question-date-created"><p>Asked at: {date_created}</p></div>
            <div className="question-answers-length"><Link to={`/question/${id}`}><p>Answers ({answers.length})</p></Link></div>
            
        </div>
    )
}
