// import axios from 'axios'
// import { useEffect } from 'react'
import Question from './Question'
import data from '../questions2'
import React, { useState, useEffect } from 'react'
import axios from 'axios'



const QuestionFeed = ({  }) => {
const [questions, setQuestions] = useState(data)


    // useEffect(() => {
    //     axios
    //         .get('http://swordtail.herokuapp.com/questions/')
    //         .then((response) => {
    //             console.log('rendering:',response.data)
    //             setQuestions(response.data)
    //         })
    // }, [])


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
            />
            ))}
        {/* <p>{questions}</p> */}
        </div>
    )
}

export default QuestionFeed