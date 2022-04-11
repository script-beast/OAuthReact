import React from 'react'
import { posts } from '../Data'
import { useParams } from 'react-router-dom'

export default function Posts() {

    const { id } = useParams()
    const post = posts[id-1]

    if(post == undefined)
    return "404"

    return (
        <div className="col d-flex justify-content-center">
            <div className="card my-3" style={{ width: "90vw" }} >
                <img src={post.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.longDesc}</p>
                </div>
            </div>
        </div>
    )
}
