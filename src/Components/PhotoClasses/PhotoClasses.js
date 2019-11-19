import React, { Component } from 'react'
import ClassCard from '../ClassCard/ClassCard'
import './PhotoClasses.css'

export default class BeginnerClasses extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: props.data,
      titles: props.titles,
      descs: props.descs
    }
  }

  render(){
    console.log('this.state.titles', this.state.titles)
    return(
      <>
      <div className='classesContainer'>
        {
          Object.keys(this.state.titles).map(key =>  (
            <ClassCard title={this.state.titles[key].title}
                       desc={this.state.descs[key].class_desc}
                       path={`/${this.state.titles[key].title.split(' ').join('-')}`}
                       history={this.props.history}
                       key={this.state.titles[key].title}/>
          ))
        }
      </div>
      </>
    )
  }
}
