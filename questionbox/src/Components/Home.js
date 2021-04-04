import React, { useState } from 'react'
import QuestionFeed from './QuestionFeed'
import data from '../questions2'



export default function Home() {
    const [questions, setQuestion] = useState(data)



    return (
        <div>
            <h1>Question Feed</h1>
                    <QuestionFeed
                    />
        </div>
    )
}


