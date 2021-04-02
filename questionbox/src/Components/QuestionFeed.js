// import axios from 'axios'
// import { useEffect } from 'react'
import Question from './Question'
import data from '../questions2'
import React, { useState } from 'react'


const QuestionFeed = ({  }) => {
const [questions, setQuestions] = useState(data)
console.log(questions)


    return (
        <div>
            {questions.map((question) => (
            <Question
                question_title = {question.title}
                date_created = {question.date_created}
                question_body = {question.body}
                key = {question.id}
            />
            ))}
        </div>
    )
}

export default QuestionFeed