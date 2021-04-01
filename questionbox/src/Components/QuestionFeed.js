import axios from 'axios'
import { useEffect } from 'react'


const QuestionFeed = ({ question_title, id, created_at, question_text }) => {



    return (
        <div>
            <h3>{question_title}</h3>
            <p>{created_at}</p>
            <p>{question_text}</p>
        </div>
    )
}

export default QuestionFeed