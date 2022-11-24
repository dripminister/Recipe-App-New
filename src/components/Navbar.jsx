import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"

export default function Navbar() {

    const navigate = useNavigate()
    const { logOut } = UserAuth()

    const loggingOut = async () => {
        await logOut()
        navigate("/login")
    }

  return (
    <nav>
        <div>
            <Link to="/">Home</Link>
            <Link to="/add">Add Recipe</Link>
        </div>
        <button className='sign-out' onClick={loggingOut}>Sign Out</button>
    </nav>
  )
}
