import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { library, icon, findIconDefinition  } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import NavBar from './Components/NavBar/NavBar';
import BackgroundPhoto from './Components/BackgroundPhoto/BackgroundPhoto';
import HomePageCard from './Components/HomePageCard/HomePageCard';
import Admin from './Components/Admin/Admin'
import EditNav from './Components/EditNav/EditNav'
import Review from './Components/Review/Review'
import PhotoFrame from './Components/PhotoFrame/PhotoFrame'
import Faq from './Components/Faq/Faq'
import GiftCards from './Components/GiftCards/GiftCards'
import Policies from './Components/Policies/Policies'
import BeginnerClass from './Components/BeginnerClass/BeginnerClass'
import Adventure from './Components/Adventure/Adventure'
import Event from './Components/Event/Event'
import './App.css'

//import MainComponents from './Components/MainComponents/MainComponents.js'

library.add( fas );

const camera = findIconDefinition( { prefix: 'fas', iconName: 'camera' } );
const camIcon = icon( camera ).html;
//const camIcon = camIconDef.icon[4];
console.log('camIcon', camIcon[0])

const featureContainerStyle = {
  position: 'absolute',
  display: 'flex',
  margin: '0',
  justifyContent: 'space-evenly',
  width: '100vw',
  bottom: '10vh'
};

export default class App extends Component {
  state = {
      features: [
        {
          icon: camIcon[0],
          className: 'Begginer Photo Class',
          path: '/beginner'
        },

        {
          icon: camIcon[0],
          className: 'Cuba 2020',
          path: '/cuba 2020'
        },

        {
          icon: camIcon[0],
          className: 'Ready, Set, Nikon, Shoot!',
          path: '/ready, set, nikon, shoot!'
        }
      ],

      reviews: [
        {
          content: 'I just can’t speak highly enough about the classes at Creative Photo Academy.  I recently nought a new camera and thought I was doing great using the Auto mode.  Just a few hours in a Beginners Class with Kenny  opened my eyes to moving beyond that.  Kenny was a great teacher and covered a lot of material in just a few hours.',
          by: '-Cathie E',
          from: 'yelp'
        },

        {
          content: 'I just can’t speak highly enough about the classes at Creative Photo Academy.  I recently nought a new camera and thought I was doing great using the Auto mode.  Just a few hours in a Beginners Class with Kenny  opened my eyes to moving beyond that.  Kenny was a great teacher and covered a lot of material in just a few hours.',
          by: '-Lisa E',
          from: 'yelp'
        },

        {
          content: 'I just can’t speak highly enough about the classes at Creative Photo Academy.  I recently nought a new camera and thought I was doing great using the Auto mode.  Just a few hours in a Beginners Class with Kenny  opened my eyes to moving beyond that.  Kenny was a great teacher and covered a lot of material in just a few hours.',
          by: '-Sashi E',
          from: 'yelp'
        },
      ],

      educators: [
        {
          name: 'Lorem Ipsum',
          about: 'Lorem ipsum dolor amet vinyl selvage roof party, dreamcatcher lomo heirloom artisan church-key prism kickstarter everyday carry try-hard chartreuse glossier knausgaard.',
          photo: `${require('./markPhoto.jpg')}`,

        },
        {
          name: 'Lorem Ipsum',
          about: 'Lomo actually stumptown occupy venmo taiyaki listicle wayfarers semiotics.',
          photo: `${require('./sheryl.jpg')}`,
        },,

        {
          name: 'Lorem Ipsum',
          about: 'Brunch quinoa VHS health goth tattooed four dollar toast pinterest tousled hammock offal meh subway tile',
          photo: `${require('./lucy.jpg')}`,
        }
      ],

      routePaths: [
        '/',
        '/about-us',
        '/classes',
        '/adventures',
        '/events',
        '/fundraisers',
        '/galleries',
        '/calendar',
        '/educators',
        '/reviews',
        '/FAQ',
        '/gift-cards',
        '/policies',
        '/contact-us',
        '/beginner',
        '/photo-boot-camp',
        '/intermediate-2019',
        '/intermediate-2020',
        '/advanced-2020',
        '/photo-editing',
        '/private-lessons',
        '/yosemite-winter-photo-adventure',
        '/death-valley-adventure',
        '/scotlan-photo-adventure',
        '/africa-cultural-safari-2020',
        '/cuba 2020',
        '/tuscany2020',
        '/ready, set, nikon, shoot!'
      ],

      navLinks: [
        {
          col1: "About",
          col2: "Classes",
          col3: "Adventures",
          col4: "Events",
        },

        {
          col1: "Educators",
          col2: "Reviews",
          col3: "FAQ",
          col4: "Gift-Cards",
          col5: "Policies",
        },

        {
          col1: "Beginner",
        },

        {
          col1: "Cuba 2020"
        },

        {
          col1: "Ready, Set, Nikon, Shoot!"
        },


      ],
    };

  setNavLinks = navLinks => {
    this.setState({
      navLinks,
    }, () => {
      console.log('this.state.navLinks[0]', this.state.navLinks[0]);
    })
  }

  getNavLinks = async () => {
    try {
      let response = await fetch('http://localhost:8080/nav')
      console.log('response in get nav links', response)
      if(!response.ok){
        throw new Error(response.status)
      } else {
        this.setNavLinks(await response.json())
      }
    } catch(error) {
        console.error('error:', error);
    }
  }

  /*componentDidMount() {
    this.getNavLinks()
  }*/

  renderFeatures() {
    const { features } = this.state;
    return (
      <div style={featureContainerStyle} className='feature-container'>
        {this.state.features.map( feature => (
          <HomePageCard key={feature.className} feature={feature}/>
        ) )}
      </div>
    );
  }

  renderNavRoutes() {
    console.log('this.state.navLinks', this.state.navLinks)
    console.log('this.state.navLinks[0]', this.state.navLinks[0])
    return (
        <>
          {this.state.routePaths.map(path => (
            <Route exact key={path} path={path} render={props => {
                return ( <NavBar topNav={this.state.navLinks[0]}
                          aboutMenu={this.state.navLinks[1]}
                          classesMenu={this.state.navLinks[2]}
                          adventuresMenu={this.state.navLinks[3]}
                          eventsMenu={this.state.navLinks[4]}
                          fundraisersMenu={this.state.navLinks[5]}
                          />)
              }}/>
          ))}
        </>
    );
  }

  renderMainRoutes() {
    return (
      <div>
        <Route path='/cuba 2020' component={Adventure}/>
        <Route path='/Ready, Set, Nikon, Shoot!' component={Event}/>
        <Route path='/beginner' component={BeginnerClass}/>
        <Route path='/FAQ' component={Faq}/>
        <Route path='/policies' component={Policies}/>
        <Route path='/gift-cards' component={GiftCards}/>
        <Route exact path='/admin' component={Admin}/>
        <Route path='/admin/edit-nav' component={Admin}/>
        <Route path='/admin/edit-nav' component={EditNav}/>
        <Route path='/admin/edit-feautres' component={Admin}/>
        <Route path='/educators' render={props => {
            const educatorsStyle= {
              backgroundColor: 'black',
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              height: 'calc(100vh - 80px)',
              width: '100vw',
              alignItems: 'center',
              position: 'relative',
              top: '80px'

            }
            return (
              <>
              <div className='educatorsContainer'>
                {this.state.educators.map(educator => (
                  <PhotoFrame key={educator.name} educator={educator}/>
                ))}
              </div>
              </>
            )
          }}/>
        <Route path='/reviews' render={props => {
            const reviewsContainerStyle = {
              display: 'flex',
              justifyContent: 'space-evenly',
              position: 'relative',
              top: '20vh',
            }


            return (
              <>
              <div className='reviewPhoto bannerPhoto'>REVIEWS</div>
              <div style={reviewsContainerStyle} className='reviewsContainer'>
                {this.state.reviews.map(review => (
                  <Review key={review.by} review={review}/>
                ))}
              </div>
              </>
            )
          }}/>

        <Route exact path='/' render={props => {
            const { features } = this.state;
            return (
              <>
              <BackgroundPhoto/>
              <div style={featureContainerStyle} className='feature-container'>
                {features.map( feature => (
                  <HomePageCard key={feature.className} feature={feature}/>
                ) )}
              </div>
              </>
            )
          }}/>
      </div>
    );
  }
  render() {
    return (
      <div className='App'>
        { this.state.navLinks.length > 0
            ? this.renderNavRoutes()
            : null
        }
        <main className='App_main'>
          {this.renderMainRoutes()}
        </main>
      </div>
    );
  }
}
