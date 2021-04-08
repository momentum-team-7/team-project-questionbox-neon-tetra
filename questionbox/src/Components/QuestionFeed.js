import Question from './Question'
import React, { useState, useEffect } from 'react'
import axios from 'axios'



const QuestionFeed = () => {
const [questions, setQuestions] = useState([])



    useEffect(() => {
        axios
            .get('http://swordtail.herokuapp.com/questions/')
            .then((response) => {
                console.log('rendering:',response.data)
            setQuestions(response.data)
            })
    }, [])

    console.log(questions)


    return (
        <div className="question-feed-wrapper">
            <ul>
            {questions.map((question) => (
                <li key={question.id}>
                <Question
                    question_title = {question.title}
                    date_created = {question.date_created}
                    owner = {question.owner}
                    answered = {question.answered}
                    answers = {question.answers}
                    key = {question.id}
                    id = {question.id}
                    owner_id = {question.owner_id}
                />
                </li>
            ))}
            </ul>
        </div>
    )
}

export default QuestionFeed