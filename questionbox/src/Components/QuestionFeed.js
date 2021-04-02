// import axios from 'axios'
// import { useEffect } from 'react'
import Question from './Question'
import React, { useState } from 'react'
import data from '../questions2'


const QuestionFeed = ({ question_title, date_created, question_body, question_id }) => {
    const [questions, setQuestion] = useState(data)



    return (
        <div>
            {questions.map((question, index) => (
                <Question
                key = {index}
                question_title = {question.question_title}
                date_created = {question.date_created}
                question_body = {question.question_body}
                question_id = {question.question_id}
                />
            ))}
        </div>
    )
}

export default QuestionFeed