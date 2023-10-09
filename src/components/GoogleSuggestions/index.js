// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChange1 = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onChange3 = value1 => {
    this.setState({
      searchInput: value1,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const List = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <div className="heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="img1"
            alt="google logo"
          />
        </div>
        <div className="bgContainer1">
          <div className="two">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="img2"
            />
            <input
              type="search"
              className="input1"
              placeholder="Search Google"
              onChange={this.onChange1}
              value={searchInput}
            />
          </div>
          <ul>
            {List.map(each => (
              <SuggestionItem
                key={each.id}
                item={each}
                onChange3={this.onChange3}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
