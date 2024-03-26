// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails

  const onDenomination = () => {
    updateBalance(value)
  }
  return (
    <li className="list-container">
      <button type="button" className="btn" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
