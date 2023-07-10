import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import PlayAgainView from '../PlayAgainView'
import GameScoreView from '../GameScoreView'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameView extends Component {
  state = {
    gameResultView: true,
    resultText: '',
    score: 0,
    myChoiceUrl: '',
    randomChoiceUrl: '',
  }

  toggleGame = () => {
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
    }))
  }

  choiceDone = each => {
    const {score} = this.state
    let textDisplay = ''

    const selectImageId = each.imageUrl
    const randomNum = Math.floor(Math.random() * 3)
    const generatedNewImageId = choicesList[randomNum].imageUrl

    const selectedId = each.id
    const newId = choicesList[randomNum].id
    let newScore = 0
    if (
      (selectedId === 'SCISSORS' && newId === 'PAPER') ||
      (selectedId === 'ROCK' && newId === 'SCISSORS') ||
      (selectedId === 'PAPER' && newId === 'ROCK')
    ) {
      newScore = score + 1
    } else if (selectedId === newId) {
      newScore = score
    } else {
      newScore = score - 1
    }

    if (score > newScore) {
      textDisplay = 'YOU LOSE'
    } else if (score < newScore) {
      textDisplay = 'YOU WON'
    } else {
      textDisplay = 'IT IS DRAW'
    }
    console.log(selectedId, newId, newScore, textDisplay)
    this.setState(prevState => ({
      gameResultView: !prevState.gameResultView,
      score: newScore,
      resultText: textDisplay,
      myChoiceUrl: selectImageId,
      randomChoiceUrl: generatedNewImageId,
    }))
  }

  renderChoicesView = () => (
    <ul className="game-choices-container">
      {choicesList.map(each => {
        const symbol = each.id
        const newString = `${symbol.toLowerCase()}Button`
        console.log(newString)
        return (
          <li key={each.id} className="list-item">
            <button
              data-testid={newString}
              onClick={() => this.choiceDone(each)}
              className="choice-image-button"
              type="button"
            >
              <img className="choice-image" src={each.imageUrl} alt={each.id} />
            </button>
          </li>
        )
      })}
    </ul>
  )

  render() {
    const {
      gameResultView,
      score,
      resultText,
      myChoiceUrl,
      randomChoiceUrl,
    } = this.state
    const playAgainProp = {
      display: resultText,
      my: myChoiceUrl,
      opponent: randomChoiceUrl,
    }

    return (
      <div className="game-view-main-container">
        <GameScoreView score={score} />
        {gameResultView ? (
          this.renderChoicesView()
        ) : (
          <PlayAgainView
            toggleGame={this.toggleGame}
            playAgainProp={playAgainProp}
          />
        )}
        <Popup
          modal
          trigger={
            <button type="button" className="rules-button">
              RULES
            </button>
          }
        >
          {close => (
            <div className="pop-up-view">
              <button
                type="button"
                className="trigger-button-close"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                className="rules-image"
                alt="rules"
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default GameView
