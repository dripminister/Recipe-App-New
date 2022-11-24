import { createContext, useContext, useEffect, useState } from "react"
import { auth, provider } from "../firebase"
import { signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export function AuthContextProvider({children}){

    const navigate = useNavigate()
    const [user,setUser] = useState({})

    const logIn = async () => {
        await signInWithPopup(auth, provider)
        navigate("/")
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    })

    return(
        <AuthContext.Provider value={{ logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}