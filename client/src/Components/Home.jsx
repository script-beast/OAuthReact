import React from 'react'
import {posts} from '../Data'
import {Link} from 'react-router-dom'

export default function Home() {
  const makecards = () => (
    posts.map(post => (
      <div key={post.id} className="col-md-4">
        <div className="card">
          <img src={post.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.desc}</p>
            <Link to={`/post/${post.id}`} className="btn btn-sm btn-primary">Read More</Link>
          </div>
        </div>
      </div>
    ))
  )

  return (
    <div className="row m-2">
      {makecards()}
    </div>
  )
}
