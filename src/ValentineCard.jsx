import React from "react"

function ValentineCard({ onYesClick, onNoClick }) {
  return (
    <div className="valentine-card">
      <h1>Be My Valentine?</h1>
      <p className="romantic-message">
        In the crimson depths of my heart, your love shines like a brilliant star. Every moment with you is a treasure
        beyond compare. Will you be my valentine, now and forever?
      </p>
      <div className="button-container">
        <button className="yes-btn" onClick={onYesClick}>
          Yes, I will!
        </button>
        <button className="no-btn" onClick={onNoClick}>
          hmm..nope
        </button>
      </div>
    </div>
  )
}

export default ValentineCard

