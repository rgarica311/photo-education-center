import React, { Component } from 'react';
import './Detail.css'

export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
    classDesc: props.classDesc,
    title: props.title
    }
  }

  render(){
    console.log('this.state.classDesc', this.state.classDesc)
    return(
      <>
      <ul className='detailsContainerCol'>
        <div className='detailPhoto'></div>
        <li className='detailListEl'>Instructor: Paul's Photo Staff</li>
        
        {
          this.state.classDesc ? <li className='detailListEl'>Description: {this.state.classDesc}</li> : null
        }
        {
          this.state.title ? <li className='detailListEl'>Title: {this.state.title}</li> : null
        }
        <li className='detailListEl'>Venue: Creative Photo Academy at Paul's Photo</li>
        <li className='detailListEl'>Address: 23845 South Hawthorne Blvd., Torrance, California, 90505, United States</li>
        <li className='detailListEl'>Phone: 310-375-7014</li>

      </ul>
      </>
    )
  }
}
