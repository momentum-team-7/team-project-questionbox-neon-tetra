import React, { useState } from 'react'
import QuestionFeed from './QuestionFeed'
import data from '../questions2'
import AskQuestion from './AskQuestion'



export default function Home() {

    return (
        <div>
            <h1 className='feed-header'>Question Feed</h1>
                    <QuestionFeed
                    />
            {/* <AskQuestion />         */}
        </div>
    )
}


