import React, { Component } from 'react';

const bgPhotoStyle = {
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundImage: `url('http://creativephotoacademy.com/wp-content/uploads/2014/01/aKenya2011-5016.jpg')`,
  backgroundRepeat: 'no-repeat'
};

export default class BackgroundPhoto extends Component {
  constructor( props ) {
    super( props );

  };

  render() {
    return (
      <div style={bgPhotoStyle} className='bg-photo'></div>
    );
  }

}
