// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import ProtectedRoute from "./components/ProtectedRoute"
import NotFound from "./pages/notfound"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterandLogout() {
  localStorage.clear()
  return <Register />
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path= '/' element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />"
      <Route path= '/login' element={<Login />} />
      <Route path= '/register' element={<RegisterandLogout />} />
      <Route path= '*' element={<NotFound />} />
      <Route path= '/logout' element={<Logout />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
