import React, {Component} from 'react';
import './PhotoFrame.css'

let photoFrame = require('./photoFrame.png')

const photoFrameStyle = {
  backgroundImage: `url(${photoFrame})`,
  height: '305px',
  width: '251px',
  backgroundSize: 'cover',
  position: 'relative'

}


export default class PhotoFrame extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.educator.name,
      photo: props.educator.photo,
      about: props.educator.about,
      displayContent: 'none',
      hover: false
    }
  }

  handleHover(e) {
    e.stopPropagation()
    console.log('hadle hover')
    this.setState({
      displayContent: 'flex'
    })
  }

  handleLeave(e) {
    e.stopPropagation()
    console.log('handle leave')
    this.setState({
      displayContent: 'none'
    })
  }

  render() {
    return (
      <>
        <div style={photoFrameStyle} className='photoFrame'>
          {
            this.state.displayContent === 'none'
              ? <img alt='edu member' onMouseLeave={e => this.handleLeave( e )} onMouseEnter={e => this.handleHover( e )} className='eduPhoto' height='227px' width='222px' src={this.state.photo}/>

            : <img alt='blurred edu member' onMouseLeave={e => this.handleLeave( e )} onMouseEnter={e => this.handleHover( e )} className='eduPhotoBlur' height='227px' width='222px' src={this.state.photo}/>

          }

            <span style={{display: this.state.displayContent}} className='contentSpan content'>
              {this.state.about}
            </span>
          <span className='bySpan'>{this.state.name}</span>
        </div>
      </>
    )
  }

}
