// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  buttontext = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getbuttontext = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttontext = this.getbuttontext()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h1 className="message">Thank You! Happy Learning</h1>
        <button className="button" type="button" onClick={this.buttontext}>
          {buttontext}
        </button>
      </div>
    )
  }
}

export default Welcome
