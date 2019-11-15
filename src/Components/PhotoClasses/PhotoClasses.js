import React, { Component } from 'react'
import ClassCard from '../ClassCard/ClassCard'
import './PhotoClasses.css'

export default class BeginnerClasses extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: props.data
    }
  }



  render(){
    console.log('this.state.data', this.state.data)
    return(
      <>
      <div className='classesContainer'>
        {
          Object.keys(this.state.data).map(key =>  (
            console.log('this.state.data[key]', this.state.data.auto),
            <ClassCard path={this.state.data[key].path} history={this.props.history} key={this.state.data[key].value} data={this.state.data[key]}/>
          ))
        }
      </div>
      </>
    )
  }
}
