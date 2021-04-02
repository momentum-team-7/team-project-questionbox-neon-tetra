// import axios from 'axios'
// import { useEffect } from 'react'
import QuestionDetail from './QuestionDetail'


const QuestionFeed = ({ question_title, created_at, question_text }) => {



    return (
        <div>
            <QuestionDetail
                question_title = {question_title}
                created_at = {created_at}
                question_text = {question_text}
            />
        </div>
    )
}

export default QuestionFeed