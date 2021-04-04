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
                // const data = response.data.map((dataByQuestion) => ({
                //     owner: dataByQuestion.owner,
                //     title: dataByQuestion.title,
                //     body: dataByQuestion.body,
                //     date_created: dataByQuestion.date_created,
                //     likes: dataByQuestion.likes,
                //     answered: dataByQuestion.answered,
                //     answers: dataByQuestion.answers,
                //     id: dataByQuestion.id
                // }))
            setQuestions(response.data)
            })
    }, [])

    console.log(questions)


    return (
        <div>
            {questions.map((question) => (
                <Question
                    question_title = {question.title}
                    date_created = {question.date_created}
                    owner = {question.owner}
                    answered = {question.answered}
                    answers = {question.answers}
                    key = {question.id}
                    id = {question.id}
                />
            ))}
        </div>
    )
}

export default QuestionFeed