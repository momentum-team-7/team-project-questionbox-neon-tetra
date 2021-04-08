import React, { useState } from 'react'
import QuestionFeed from './QuestionFeed'
import data from '../questions2'
import AskQuestion from './AskQuestion'



export default function Home() {

    return (
        <div>
            <div className="questionfeed-header"><h1>What our users are asking...</h1></div>
                    <QuestionFeed
                    />
            {/* <AskQuestion />         */}
        </div>
    )
}


