import React from 'react'
import './Faq.css'

export default function Faq(props) {
  return (
    <>
    <div className='faqPhoto bannerPhoto'>FAQ</div>
    <div className='faqContainer'>
      <h2 className='faqH2'>Frequently Asked Questions</h2>
      <span className='subhead'>Answers to your frequently asked questions..</span>
      <ul className='faqList'>
        <li className='faqElement'>
          <span className='question'>Where are you located?</span>
          <span className='answer'>We are located in the same building as Paul’s Photo.  We are located at 23845 S. Hawthorne Blvd. in Torrance, CA, 90505.  We are just south of Pacific Coast Highway.  Look for our gold building with blue stripe on west side of the street</span>
        </li>
        <li className='faqElement'>
          <span className='question'>How can I register for classes, workshops or Adventures?</span>
          <span className='answer'>You may register any of three ways. The first option is right here at creativephotoacademy.com. You may also call us at 310-375-7014, or if you’re in the neighborhood, stop by to register in person at Paul’s Photo.</span>
        </li>
        <li className='faqElement'>
          <span className='question'>Where should I park? </span>
          <span className='answer'>There is parking for you at the rear of the building.  If overflow parking is needed, you may park at the Sylvia Square lot next door to Creative Photo Academy.</span>
        </li>
        <li className='faqElement'>
          <span className='question'>How do I enter the Academy?</span>
          <span className='answer'>For classes held between the hours of 9am-6pm Monday through Saturday and 12pm-5pm Sunday, you may enter the Academy through Paul’s Photo.   Outside of those hours, you will use the entrance at the center, rear of the building.  The door will open 15 minutes prior to the start of class.</span>
        </li>
        <li className='faqElement'>
          <span className='question'>What do I need to bring to class?</span>
          <span className='answer'>Check the class description at our website.  Once your registration is confirmed, we’ll send you an email with additional details for your class</span>
        </li>
        <li className='faqElement'>
          <span className='question'>What do I need to know for each class or workshop?</span>
          <span className='answer'>Requirements for our classes are outlined on our REQUIREMENTS page.  To get the most out of your experience, make sure you meet the requirements outlined for your class.  Most workshops do not have suggested requirements but equipment may be needed.  This will be confirmed in your confirmation email.  If you have questions prior to registration please email us at info@creativephotoacademy.com or call 310-375-7014</span>
        </li>
        <li className='faqElement'>
          <span className='question'>What is required on Adventures?</span>
          <span className='answer'>The best thing to bring to our adventures is a happy spirit and adventurous heart.  We have a great time, learn a lot and immerse ourselves into photography and fun!  You’ll meet other talented and eager people and become part of our family.  Each locale is different so we’ll let you know by email what to bring and exactly what to expect.</span>
        </li>
        <li className='faqElement'>
          <span className='question'>I’m a beginner, should I attend an Adventure?</span>
          <span className='answer'>Absolutely!  If you want to learn and hone your skills quickly, the best way to do that is by jumping in with both feet.  We usually have photographers of all skill levels on our Adventures.</span>
        </li>
        <li className='faqElement'>
          <span className='question'>What is your Adventure Lite series all about?</span>
          <span className='answer'>Our Adventure Lite series focuses on the beauty of Southern California.  These Adventures will give photographers of any skill level the opportunity to experience locale shoots without the commitment of hotels or lengthy travel.  Classroom time is removed but instruction is readily available in the field.  The Adventure Lite series is no less adventurous than others yet provides flexibility for photographers with limited time or budget.</span>
        </li>
      </ul>
    </div>
    </>
  )
}
