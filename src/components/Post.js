import React, { useState } from 'react'
import { useProducts } from '../hooks/useProducts'

async function sendPost(title, body) {
    const response = await useProducts()
    const responseBody = await response.json()
    console.log("== response body:", responseBody)
}

function Post() {
    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")

    return (
        // <form onSubmit={e => {
        //     e.preventDefault()
        //     sendPost(title, body)
        // }}>
        //     <div>
        //         <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        //     </div>
        //     <div>
        //         <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
        //     </div>
        //     <div>
        //         <button>Submit</button>
        //     </div>
        // </form>
        <div>
            <p>Post</p>
        </div>
    )
}

export default Post