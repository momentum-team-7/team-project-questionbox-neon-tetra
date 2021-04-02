// import axios from 'axios'
// import { useEffect } from 'react'
import QuestionDetail from './QuestionDetail'


const QuestionFeed = ({ question_title, date_created, question_body, question_id }) => {



    return (
        <div>
            <QuestionDetail
                question_title = {question_title}
                date_created = {date_created}
                question_body = {question_body}
                question_id = {question_id}
            />
        </div>
    )
}

export default QuestionFeed