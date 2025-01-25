import React, { useState } from "react"
import ValentineCard from "./ValentineCard"
import LiveBackground from "./LiveBackground"
import PopUp from "./PopUp"
import { useNavigate } from "react-router-dom"
import "./App.css"

function App() {
  const [showPopUp, setShowPopUp] = useState(false)
  const navigate = useNavigate()

  const handleNoClick = () => {
    setShowPopUp(true)
    setTimeout(() => {
      setShowPopUp(false)
      navigate("/redirect") // Changed to match our route
    }, 3000)
  }

  const handleYesClick = () => {
    navigate("/redirect") // Changed to match our route
  }

  return (
    <div className="app">
      <LiveBackground />
      <ValentineCard onYesClick={handleYesClick} onNoClick={handleNoClick} />
      {showPopUp && (
        <PopUp message="Haha too funny, you're mine, you got no choice 💖" />
      )}
    </div>
  )
}

export default App

