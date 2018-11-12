import React, { Component } from 'react'

class App extends Component {
state ={
  mood: "happy"
}

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}

export default App
