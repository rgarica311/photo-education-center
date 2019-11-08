import React, { Component } from 'react';
import './Adventure.css'

export default class Adventure extends Component {
  render(){
    return (
      <>
      <div className='adventurePhoto bannerPhoto'>Cuba 2020</div>
      <div className='datesDetailsColumn'>
          <div className='dateColumnAdventure'>
            <span className='boldSpan'>Cuba Tour</span>
            <span>March 23, 2020 - March 30th, 2020</span>
            <span>12:00AM</span>
        </div>
      </div>
        <p className='adventureDetail'>Creative Photo Academy returns to Cuba to explore historic Old Havana, photograph the classic cars and
capture iconic images of the wonderfully warm & friendly people. Our people-to-people exchange will focus on the unique Cuban culture and offer unparalleled access to fantastic photo ops. Pack your bags and join us for an amazing adventure curious travelers and photo enthusiasts.</p>

        <div className='flexColumn'>
        <span className='largeBoldSpan'>Tour Highlights</span>

        <p><span className='boldSpanAdventure'>Old Havana</span>There is no place or no experience on earth like La Habana de Cuba.
         Walking the streets, meeting the people and photographing Old Havana is amazing.
         Stops at Park Central, old Partigas cigar factory, Hemmingway’s favorite bar and famous Old Car Square will allow us to
         experience great moments and even greater pictures. Our tour will take us to new Havana, the famous Hotel Nacional and
         the always colorful vegetable market. Lodging at the historic Hotel Sevilla in Havana.</p>
        <p><span className='boldSpanAdventure'>Vinales</span>
        Our tour takes us into the country and capture the beauty of Western Cuba.
        Unique colonial architecture, historic streets and painted houses create fantastic photos.
        We’ll visit tobacco fields and a working cigar factory and see farming done the Cuban way, by hand and oxen!</p>
        <p><span className='boldSpanAdventure'>Boxing & Ballet</span>
        CPA offers “behind the scenes” and special access to unique venues and fantastic photo opportunities.
        You will get up close and make amazing pictures of two of Cuba’s favorite pastimes: boxing and ballet.
        We might even sneak in some baseball for the Cuban tri-fecta!</p>
        </div>
        </>
    )
  }
}
