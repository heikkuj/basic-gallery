import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Signup } from './pages/Signup'
import { AuthProvider } from './context/auth'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/signup' element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } />
      </Routes>
    </AuthProvider>
  )
}

export default App
