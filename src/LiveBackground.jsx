import React from "react"

function LiveBackground() {
  return (
    <div className="live-background">
      {[...Array(40)].map((_, index) => (
        <div
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.1 + Math.random() * 0.1,
            transform: `scale(${0.5 + Math.random()}) rotate(45deg)`,
          }}
        ></div>
      ))}
    </div>
  )
}

export default LiveBackground

