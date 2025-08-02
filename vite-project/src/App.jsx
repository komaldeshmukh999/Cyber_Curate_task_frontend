import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StaffFormPage from './pages/StaffFormPage'
import ProfilePage from './pages/ProfilePage'
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<StaffFormPage/>
     } />
        <Route path="/Profilepage" element={ <ProfilePage/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
