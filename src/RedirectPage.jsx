import React, { useState, useEffect } from "react"
import LiveBackground from "./LiveBackground"
import "./RedirectPage.css"

const messages = [
  "You've made my heart skip a beat! 💓",
  "Get ready for a lovely surprise! 🎁",
  "I can't wait to see your smile! 😊",
  "Adventure awaits us, my dear! 🌟",
  "Prepare for a day filled with love! ❤️",
]

function RedirectPage() {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length)
    }, 3000)

    return () => {
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <div className="redirect-page">
      <LiveBackground />
      <div className="content">
        <h1>You said yes! 🎉</h1>
        <div className="message-container">
          <p className="message">{messages[currentMessage]}</p>
        </div>
        <div className="heart-animation">
          <div className="heart"></div>
        </div>
        <div className="poem-container">
          <h2>A Poem for You</h2>
          <p className="poem">
          In your eyes, I see my home
            <br />
            A love so deep, it’s all I’ve known.
            <br />
            Your touch, a warmth that lights my way,
            <br />
            In your heart, I wish to stay.
            <br />
            Every moment with you feels like fate,
            <br />
            A love that time can’t separate.
            <br />
            Forever yours, I’ll always be,
            <br />
            For you are my eternity.
          
          </p>
        </div>
        <p className="instructions">Keep your phone handy for a special message with all the details!</p>
      </div>
    </div>
  )
}

export default RedirectPage

