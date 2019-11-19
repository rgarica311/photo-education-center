import React, { Component } from 'react'
import './ClassCard.css'

export default class ClassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: this.props.history
    }
  }


  async componentDidMount() {
    try {
      let response = await fetch('https://blooming-garden-38714.herokuapp.com/frameworks')
      if(!response.ok){
        throw new Error(response.status)
      } else {
        this.setState({
          frameworks: await response.json()

        })
      }
    } catch(error) {
      console.error('error', error)
    }


  }

  handleClick(path){
    console.log('path', path)
    this.state.history.push(`${path}`)
  }

  render(){
    return (
        <div className='frameWorkCard'>
          <div className='cardTop'>
            {this.props.title}
          </div>
          <div className='cardImg'></div>
          <div className='cardBottom'>
            {this.props.desc}
          </div>
          <button id='hero' onClick={e => this.handleClick(this.props.path)} className='download'>Click for Details</button>
      </div>
      )
  }
}
