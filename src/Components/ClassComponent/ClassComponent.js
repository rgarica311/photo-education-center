import React, { Component } from 'react';
import './ClassComponent.css';
import Detail from '../Detail/Detail';
import CpaContext from '../../cpaContext'
export default class ClassComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      classDesc: props.classDesc,
      photoUrl: this.props.photoUrl,
      title: this.props.title
    }
  }
  render() {
    console.log('this.state.classDesc class component', this.state.classDesc)
    return (
      <CpaContext.Consumer>
        {(context) => (
          <div className='classDetail'>
          {this.state.photoUrl
            ? <div style={{backgroundImage: `url(${this.state.photoUrl})`}} className='classPhoto bannerPhoto'>{this.state.title}</div>
            : null }

            <div className='datesDetailsRow'>
              <div className='photo'></div>
              <p className='beginnerClassDetail'>{this.state.classDesc}</p>
              {this.state.classDesc !== undefined ? <Detail title={this.state.title} classDesc={this.state.classDesc} /> : null}
            </div>
          </div>
        )}
    </CpaContext.Consumer>
    )
  }
}
