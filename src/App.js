import Login from "./pages/Login"
import Home from "./pages/Home"
import {  Routes, Route, Navigate } from "react-router-dom"
import AddRecipe from "./pages/AddRecipe"
import Recipe from "./pages/Recipe"
import Navbar from "./components/Navbar"
import { UserAuth } from "./context/AuthContext"

function App() {
  const { user } = UserAuth()

  const ProtectedRoute = ({ children }) => {
    if (user === null) {
      return <Navigate to="/login" />
    }

    return children
  }

  return (
		<div>
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<div>
								<Navbar />
								<Home />
							</div>
						</ProtectedRoute>
					}
				/>
				<Route
					path="/add"
					element={
						<ProtectedRoute>
							<div>
								<Navbar />
								<AddRecipe />
							</div>
						</ProtectedRoute>
					}
				/>
				<Route
					path="/recipe/:id"
					element={
						<ProtectedRoute>
							<div>
								<Navbar />
								<Recipe />
							</div>
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
