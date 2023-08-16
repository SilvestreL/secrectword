import "./GameOver.css";
import React from 'react'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>GameOver</h1>
      <h2> A sua Pontutação foi: <span>{score}</span></h2>
      <button onClick={retry}> Resetar o Jogo</button>
      </div>
  )
}

export default GameOver