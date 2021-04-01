// import axios from 'axios'
// import { useEffect } from 'react'
import Question from './Question'


const QuestionFeed = ({ question_title, created_at, question_text }) => {



    return (
        <div>
            <Question
                question_title = {question_title}
                created_at = {created_at}
                question_text = {question_text}
            />
        </div>
    )
}

export default QuestionFeed