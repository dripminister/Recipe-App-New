import React from 'react'
import { UserAuth } from '../context/AuthContext'

export default function Login() {

    const { logIn } = UserAuth()

    const signIn = async () => {
      try{
        await logIn()
      }catch(err){
        alert(err.message)
      }
    }


  return (
    <div className='login'>
        <div className='login-card'>
            <h1>Recipe App</h1>
            <button onClick={signIn}>Sign In with Google</button>
        </div>
    </div>
  )
}
