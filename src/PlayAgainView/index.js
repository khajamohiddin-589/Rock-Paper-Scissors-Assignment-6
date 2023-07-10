import './index.css'

const PlayAgainView = props => {
  const {playAgainProp, toggleGame} = props

  const onClickPlayAgain = () => {
    toggleGame()
  }

  const {display, my, opponent} = playAgainProp
  return (
    <div className="play-again-view-container-with-results">
      <div className="play-again-view-container">
        <div className="you-container">
          <h1 className="player-name-heading">YOU</h1>
          <img src={my} alt="my-choice" className="choice-image-play-agin" />
        </div>
        <div className="you-container">
          <h1 className="player-name-heading">OPPONENT</h1>
          <img
            src={opponent}
            alt="my-choice"
            className="choice-image-play-agin"
          />
        </div>
      </div>
      <h1 className="result-display-text">{display}</h1>
      <button
        onClick={onClickPlayAgain}
        className="play-again-button"
        type="button"
      >
        PLAY AGAIN
      </button>
    </div>
  )
}

export default PlayAgainView
