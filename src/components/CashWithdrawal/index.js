// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}
  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const firstLetter = name.slice(0, 1)
    return (
      <div className="app-conatiner">
        <div className="name-container">
          <div className="name-log">
            <p>{firstLetter}</p>
          </div>
          <p className="name">{name}</p>
        </div>
        <div className="balance-container">
          <p class="your-balance">Your Balance</p>
          <p className="balance">
            {balance}
            <br />
            <span className="span">In Rupees</span>
          </p>
        </div>
        <p className="Withdraw">Withdraw</p>
        <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denomination-list">
          {denominationsList.map(eachList => {
            <DenominationItem
              denominationsDetails={eachList}
              key={eachList.id}
              updateBalance={this.updateBalance}
            />
          })}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
