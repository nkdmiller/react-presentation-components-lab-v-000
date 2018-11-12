import React, { Component } from 'react'

class App extends Component {
state ={
  mood: "happy"
}

  handleClick = () =>{
    if (this.state.mood === "happy"){
      this.setState(() =>{
        mood: "sad"}
      )
    }
  }
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }

}

export default App
