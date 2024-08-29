import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, totalCount: 0, isHead: true}

  onTossCoin = () => {
    const {totalCount, headsCount, tailsCount} = this.state
    this.setState({
      totalCount: totalCount + 1,
    })
    const tossResult = Math.floor(Math.random() * 2)
    const outcome = tossResult === 0 ? 'heads' : 'tails'
    if (outcome === 'heads') {
      this.setState({
        headsCount: headsCount + 1,
        isHead: true,
      })
    } else {
      this.setState({
        tailsCount: tailsCount + 1,
        isHead: false,
      })
    }
  }

  render() {
    const {headsCount, tailsCount, totalCount, isHead} = this.state
    return (
      <div className="bg-container">
        <div className="toss-coin-card-container">
          <h1>Coin Toss Game</h1>
          <p className="outcome">Heads (or) Tails</p>
          {isHead && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          )}
          {!isHead && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="toss-results-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
