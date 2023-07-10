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
        <p className="score-heading">Score</p>
        <p className="score-display">{score}</p>
      </div>
    </div>
  )
}

export default GameScoreView
