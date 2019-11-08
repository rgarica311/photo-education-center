import React, { Component } from 'react';
import './BeginnerClass.css'


export default class BeginnerClass extends Component {
  render() {
    return (
      <>
        <div className='classPhoto bannerPhoto'>First Look: Nikon DSLR</div>
        <div className='datesDetailsColumn'>
          <div className='datesContainerRow'>
            <div className='dateColumn'>
              <span className='boldSpan'>First Look: Nikon</span>
              <span>November 23, 2019</span>
              <span>9:00AM - 11:00AM</span>
            </div>
            <div className='dateColumn'>
              <span className='boldSpan'>First Look: Nikon</span>
              <span>January 9, 2020</span>
              <span>7:00PM - 9:00PM</span>

            </div>
          </div>
          <p className='beginnerClassDetail'>Learn how to set-up and shoot your Digital Single Lens Reflex (DSLR) camera with ease. Includes easy explanations and a “feature tour” of today’s interchangeable lens cameras, as well as a discussion of video, still shooting, lenses, and flashes. This is a two-hour introductory class for students with Nikon DSLR cameras.</p>
          <div className='flexColumn'>
            <div className='flexRow'>
              <span className='boldSpan'>Instructor:</span>
              <span>Staff Member</span>
            </div>
            <div classNme='flexRow'>
              <span className='boldSpan'>To Bring:</span>
              <span>Camera, instruction manual, pen and paper for taking notes</span>
            </div>
            <span className='boldSpan sReviews'>Student Reviews:</span>
            <p>I just can’t speak highly enough about the classes at Creative Photo Academy. I recently bought a new camera and thought I was doing great using the Auto mode. Just a few hours in a Beginners Class with Kenny opened my eyes to moving beyond that. Kenny was a great teacher and covered a lot of material in just a few hours. –Cathie E.</p>
            <span className='largeBoldSpan'>Venue:</span><span>TBD</span>
          </div>
        </div>
      </>
    )
  }
}
