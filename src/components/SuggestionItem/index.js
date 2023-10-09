// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, onChange3} = props
  const {suggestion} = item
  const onChange2 = () => {
    onChange3(suggestion)
  }
  return (
    <li className="one1">
      <p className="heading">{suggestion}</p>
      <button type="button" onClick={onChange2} className="btn2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="img3"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
