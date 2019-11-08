import React, {Component} from 'react';
import './EditNav.css';

export default class EditNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkName: '',
      subMenu: null
    };
  }

  updateLinkName(linkName){
    this.setState({
      linkName: linkName
    });
  }

  updateSubMenu(subMenu){
    let subMenuList = [];
    subMenuList.push(subMenu.split(','));
    this.setState({
      subMenu: subMenuList
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {linkName, subMenu} = this.state;
    const data = {linkName: linkName, subMenu: subMenu};
    console.log('data:', JSON.stringify(data));
    fetch('http://localhost:8080/nav', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(error => console.error('Error:', error));
  }

  render(){
    return(
      <div className='add-nav-element-container'>
        <form className='add-nav-element-form' onSubmit={e => this.handleSubmit(e)}>
          <h2>Add Navigation Element</h2>
          <div className='addNavFormGroup'>
            <label htmlFor='name'>Link Name:</label>
            <input required type='text' className='add-nav-control' name='name' onChange={e => this.updateLinkName(e.target.value)}/>
            <label htmlFor='subMenu'>Sub Menu Items:</label>
            <input type='text' className='add-nav-control' name='subMenu' onChange={e => this.updateSubMenu(e.target.value)}/>
          </div>
          <button type='submit' className='add-link-button'>Add Link</button>
        </form>
      </div>
    )
  }
}
