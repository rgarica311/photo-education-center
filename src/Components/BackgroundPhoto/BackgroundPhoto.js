import React, { Component } from 'react';

const bgPhotoStyle = {
  width: '100vw',
  backgroundSize: 'cover',
  backgroundImage: `url('http://creativephotoacademy.com/wp-content/uploads/2014/01/aKenya2011-5016.jpg')`,
  backgroundRepeat: 'no-repeat',
  height: 'calc(100vh - 80px)',
};

export default class BackgroundPhoto extends Component {

  render() {
    return (
      <div style={bgPhotoStyle} className='bg-photo'></div>
    );
  }

}
