import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {

  const logout = () => {
    window.open("http://localhost:8000/auth/logout", "_self")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand ms-lg-4" to="/">OAuth</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" >About</Link></li>
          </ul>
          {props.user ? (
            <ul className="navbar-nav mb-2 me-lg-4 mb-lg-0">
              <li class="nav-item dropdown">
                <img src={props.user.photos[0].value} width="35" height="35" class="rounded-circle me-2" />
              </li>
              <li className="nav-item"><span className="nav-link">{props.user.displayName}</span></li>
              <li className="nav-item"><span className="nav-link" onClick={logout} >Logout</span></li>
            </ul>) :
            (<ul className="navbar-nav mb-2 me-lg-4 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/login" >Login</Link></li>
            </ul>)}
        </div>
      </div>
    </nav >
  )
}
