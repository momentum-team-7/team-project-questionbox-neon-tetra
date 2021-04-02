import React, { useState } from 'react'

const handleSubmit = (event) => {
    // this function, once the api url is added, should post the question to the database
    
    event.preventDefault()
    axios
        .post(
        '//apiurlgoeshere',
        {
            title: title,
            body: body,
        },
        {
            headers: { Authorization: `Token ${token}`},
        }
    )
    .then((data) => {
        handleDone(data.data)
    })
}


export default function AskQuestion() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    return (
        <div>
            <h2>Ask a Question--</h2>
            <form onSubmit={handleSubmit}>
                <div className="question-title">
                    <label for="question-title"></label>
                    <input id="question-title"
                    type="text"
                    onChange={(event) => setTitle(event.target.value)}>
                    </input>
                </div>
                <div className="question-body">
                    <label for="question-body"></label>
                    <textarea id="question-body"
                    type="text"
                    onChange={(event) => setBody(event.target.value)}>
                    </textarea>
                    <button type="submit">Ask it!</button>
                </div>            
            </form>
        </div>
    )
}
