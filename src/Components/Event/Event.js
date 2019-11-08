import React, { Component } from 'react';
import './Event.css'

export default class Event extends Component {
  render(){
    return (
      <>
        <div className='eventPhoto bannerPhoto'>Ready, Set, Nikon, Shoot!</div>
        <div className='dateDetailsRow'>
          <div className='dateColumnAdventure'>
            <span className='boldSpan'>Telephoto Test Drive!</span>
            <span>November 9, 2019</span>
            <span>12:00PM - 2:00PM</span>
          </div>
          <div className='dateColumnAdventure'>
            <span className='boldSpan'>Nikon Sports Photography</span>
            <span>November 9, 2019</span>
            <span>3:00PM - 5:00PM</span>
          </div>
        </div>
        <div className='flexColumn'>
        <span className='largeBoldSpanEvent'>TELEPHOTO TEST DRIVE!</span>
        <span className='boldSPan'>Saturday November 9, Noon to 2pm</span>
        </div>
        <ul className='padUl'>
          <li className='liColor'>Try a BIG LENS from NIKON</li>
          <li className='liColor'>We'll have flight or rapotrs (birds) to photograph</li>
          <li className='liColor'>Bring your NIKON camera and try a telephoto lens</li>
          <li className='liColor'>Bring your SD card and try a Nikon camera and lens</li>
        </ul>
        <div className='flexColumn'>
        <span className='largeBoldSpanEvent'>SPORTS PHOTOGRAPHY</span>
        <span className='boldSPan'>Saturday November 9, 3 to 5pm</span>
        </div>
        <ul className='padUl'>
          <li className='liColor'>Learn the magic of sports photography</li>
          <li className='liColor'>Capture your all-star and make magazine quality photos</li>
          <li className='liColor'>Techniques to get sharp focus and freeze action</li>
          <li className='liColor'>Controlling light and background to get amazing pictures</li>
          <li className='liColor'>How to use the right lens to capture the emotion</li>
          <li className='liColor'>How to take crisp pictures outdoors, indoors or under-the-lights</li>
        </ul>

      </>
    )
  }
}
