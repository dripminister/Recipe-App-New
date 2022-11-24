import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import RecipeCard from '../components/RecipeCard'
import { UserAuth } from '../context/AuthContext'

export default function Home() {

    const collectionRef = collection(db, "recipes")
    const [recipes, setRecipes] = useState([])
    const { user } = UserAuth()


    useEffect(() => {
        const getRecipes = async () => {
            const q = query(collectionRef, where("authorId", "==", user.uid))
            const data = await getDocs(q)
            setRecipes(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        getRecipes()
    }, [collectionRef])

  return (
    <div className='home'>
        <h1>Home</h1>
        <div className='recipe-display'>
            {recipes && recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    </div>
  )
}
