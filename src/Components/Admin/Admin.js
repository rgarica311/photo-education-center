import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Admin.css';

export default class Admin extends Component {
  constructor(props) {
    super(props);

  }
  render(){
    return (
      <div className='adminMain'>
        <nav className='adminNav'>
          <ul className='admin-link-container'>
            <li><Link to='/admin/edit-nav'>Edit Nav</Link></li>
            <li><Link to='/admin/edit-features'>Edit Features</Link></li>
          </ul>
        </nav>
      </div>
    )
  }

}
