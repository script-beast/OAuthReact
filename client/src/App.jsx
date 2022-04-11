import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Posts from './Components/Posts'
import Login from './Components/Login'
import About from './Components/About'

function App() {

  const [user, setUser] = React.useState(null)

  const getUser = () => {
    fetch("http://localhost:8000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    }).then(res => {
      if (res.status === 200) return res.json()
      throw new Error("Something went wrong")
    }).then(resObject => {
      setUser(resObject.user)
    }).catch(err => {
      console.log(err)
    })
  }

  console.log(user)

  React.useEffect(() => {getUser()}, [])

  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
        <Route path="/post/:id" element={!user ? <Navigate to='/login' /> : <Posts />} />
      </Routes>
    </div>
  )
}

export default App
