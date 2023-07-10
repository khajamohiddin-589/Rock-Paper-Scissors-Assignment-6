import './index.css'

const GameScoreView = props => {
  const {score} = props

  return (
    <div className="score-card-main-container">
      <h1 className="game-name-heading">
        Rock
        <br /> Paper
        <br /> Scissors
      </h1>
      <div className="score-card-container">
        <h1 className="score-heading">Score</h1>
        <h1 className="score-display">{score}</h1>
      </div>
    </div>
  )
}

export default GameScoreView
