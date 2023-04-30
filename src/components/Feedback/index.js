import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: true,
  }

  isFeedbackSelectedChange = () => {
    this.setState({isFeedbackSelected: false})
  }

  change1 = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    console.log(loveEmojiUrl)
    return (
      <div className="tankes-card">
        <img src={loveEmojiUrl} className="emoji1" alt="emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
        <button type="submit" onClick={this.change1}>
          back
        </button>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satified are you with our customer support performance?
        </h1>
        <ul className="imglist">
          {emojis.map(eachItam => (
            <li key={eachItam.id}>
              <button type="submit" className="emoji-btn">
                <img
                  src={eachItam.imageUrl}
                  className="emoji"
                  alt="name"
                  onClick={this.isFeedbackSelectedChange}
                />
                <p>{eachItam.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
