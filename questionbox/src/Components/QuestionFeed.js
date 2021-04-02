// import axios from 'axios'
// import { useEffect } from 'react'
import QuestionDetail from './QuestionDetail'
import data from '../questions2'
import React, { useState } from 'react'


const QuestionFeed = ({  }) => {
const [questions, setQuestions] = useState(data)
console.log(questions)


    return (
        <div>
            {questions.map((question) => (
            <QuestionDetail
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