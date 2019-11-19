import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { library, icon, findIconDefinition  } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import NavBar from './Components/NavBar/NavBar';
import BackgroundPhoto from './Components/BackgroundPhoto/BackgroundPhoto';
import HomePageCard from './Components/HomePageCard/HomePageCard';
import Review from './Components/Review/Review'
import PhotoFrame from './Components/PhotoFrame/PhotoFrame'
import Faq from './Components/Faq/Faq'
import GiftCards from './Components/GiftCards/GiftCards'
import Policies from './Components/Policies/Policies'
import ClassComponent from './Components/ClassComponent/ClassComponent'
import PhotoClasses from './Components/PhotoClasses/PhotoClasses'
import './App.css'
import CpaContext from './cpaContext'


library.add( fas );

const camera = findIconDefinition( { prefix: 'fas', iconName: 'camera' } );
const camIcon = icon( camera ).html;


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
          className: 'First Look Nikon',
          path: '/first-look-nikon'
        },

        {
          icon: camIcon[0],
          className: 'First Look Canon',
          path: '/First-Look-Canon'
        }
      ],

      intermediateCard: {
        portraits: {
          value: 'Portrait & Event',
          desc: 'Focus your efforts on capturing the emotion of your subject and controlling the environment for the very best portraits and candid people photos.',
          path: '/portraits-events'
        },

        flash: {
          value: 'Flash Photography',
          desc: 'Have fun learning to control your flash, your camera and your lens to sculpt light and create stunning images that look like you never used a flash!',
          path: '/flash-photography',
        },

        exposure: {
          value: 'Exposure and Composition',
          desc: 'Learn to apply the rules of composition and exposure to develop an artistic approach to build stunning images. Train yourself to see creatively and shoot the images you desire.',
          path: '/exposure-composition',
        },

        landscape: {
          value: 'Landscape Photography',
          desc: 'Great landscape images are built in your camera. Learn to use the light, your lens, foreground, background and filters to create stunning outdoor photos.',
          path: '/landscape-photography',
        }
      },

      advancedCard:{
        inspriational: {
          value: 'Inspirational Images: Edward Weston',
          desc: 'Each year we chose an exceptional photographer to inspire us on our creative journey. As a group, we’ll discover how the artist’s work challenges us and changes how we envision, build and create images.',
          path: '/inspirational-images'
        },

        project:{
          value: 'The Project: Concept To Presentation',
          desc: 'THE PROJECT.  Concept to Presentation will inspire you to create a personal photo project.  Conceiving a theme, transforming an idea, creating the pictures and culminating in a finished presentation will build a new focus and purpose to your photography.',
          path: '/the-project',
        }
      },

      photoEditCard: {
        online:{
          value: 'Organizing Digital Photos',
          desc: 'Organizing Digital Photos is an ONLINE beginner level class that gets you started with organizing, storing, and backing up digital photos. Managing your photos in a simple and repeatable way is a must for every photographer!',
          path: '/organizing-photos'
        },
        lightroom:{
          value: 'Lightroom',
          desc: 'Are you ready to master the art of photo editing? Our Photoshop CC and Lightroom CC classes empower you to take your pictures to the next level.',
          path: '/lightroom'
        },
        photoshop:{
          value: 'Photoshop',
          desc: 'Are you ready to master the art of photo editing? Our Photoshop CC and Lightroom CC classes empower you to take your pictures to the next level.',
          path: '/photoshop'
        }
      },

      beginnerCard: {
        nikon: {
          value: 'First Look, Nikon',
          desc: `Lorem Ipsum Probant nisi ipsum admodum quorum. Et id cillum fugiat culpa, o qui
          praetermissum expetendis ab deserunt aut nostrud ad velit an nulla
          cohaerescant appellat nulla commodo doctrina o culpa ingeniis.`,
          path: 'first-look-nikon'
        },

        canon: {
          value: 'First Look, Canon',
          desc: `Amet est nam aliqua aliquip. Id id elit labore nulla in quo arbitrantur, an
          noster ipsum enim incididunt ne veniam laboris adipisicing culpa singulis qui
          proident ea eram efflorescere aliquip elit officia o e an summis admodum ab
          enim velit ab arbitror.`,
          path: 'first-look-canon'
        },

        bootcamp: {
          value: 'Photo Boot Camp',
          desc: `Amet est nam aliqua aliquip. Id id elit labore nulla in quo arbitrantur, an
          noster ipsum enim incididunt ne veniam laboris adipisicing culpa singulis qui
          proident ea eram efflorescere aliquip elit officia o e an summis admodum ab
          enim velit ab arbitror.`,
          path: 'photo-boot-camp'
        },

        mirrorless: {
          value: 'First Look Digital Mirrorless',
          desc: 'Learn the settings and functions of your mirrorless camera. Simple step-by-step explanations perfectly designed for beginners with mirrorless cameras.',
          path: 'mirrorless-class'
        },

        manual: {
          value: 'Mastering Manual Mode',
          desc: 'ISO, F-stop, and shutter speed are the three cornerstones to better picture-taking. Learn how to operate these functions on your new camera so that you can start taking pictures like a pro. This class is an excellent prep for our beginner photography series, Photo Boot Camp.',
          path: 'manual-class'
        },

        auto: {
          value: 'Mastering auto: Making WOW Pictures Simply!',
          desc: 'Making WOW Pictures simply.  Learn to make your photos to POP! Hands on experience to learn to control your lens, flash, exposure and focus.  See examples of “with & without” settings applied and how to make good pictures even better. This is the ideal class for SLR’s, pocket and mirrorless cameras.',
          path: 'auto-class'
        }
      },

      advancedFull: {
        perspectives: {
          title: {value: 'Advanced Perspectives', label: 'Class'},
          dates: {value: 'Nov 12th 2019: 7pm - 9am', label: 'When'},
          address: {value: '23845 South Hawthorne Blvd., Torrance, California, 90505, United States', label: 'Address'},
          phone: {value: '310-375-7014', label: 'Phone'},
          price: {value:  'Free', label: 'Price'},
          classDesc: 'Join the CPA Advanced Students as they present their Year-long photo essays and portfolios. This evening is always popular as a celebration, inspiration, and springboard to your creativity. Join us for our 2020 Advanced classes: Saturday and Tuesday Sessions',
          photoUrl: `http://creativephotoacademy.com/wp-content/uploads/2019/10/JP38553v1-sep-high-str-2100-wide-300dpi-710x400.jpg`,
        },

        advanced: {

          inspirational: {
            instructor: {value: 'Edward Weston', label: 'Instructor'},
            title: {value: 'Inspirational Images', label: 'Class'},
            dates: {value: 'Saturdays 9-11am', label: 'When'} ,
            address: {value: '23845 South Hawthorne Blvd., Torrance, California, 90505, United States', label: 'Address'},
            phone: {value: '310-375-7014', label: 'Phone'},
            price: {value:  '$399.00', label: 'Price'},
            classDesc: 'Inspirational Images 2020 is dedicated to the exploration of Edward Weston’s mastery of composition and the emotion of photography. Learn how to incorporate Edward’s visions and techniques into your photography. You will be challenged and rewarded, and you will see how your image quality and expressive value will increase.',
            photoUrl: `http://creativephotoacademy.com/wp-content/uploads/2014/02/Class-First-Look-Nikon-710x400.jpg`,
          },

          project: {
            instructor: {value: 'Paul\'s Photo Staff', label: 'Instructor'},
            toBring:{ value: 'Camera, instruction manual, pen and paper', label: 'To Bring'},
            title: {value: 'The Project: Concept to Presentation', label: 'Class'},
            dates: {value: 'Nov 23rd 2019: 9am - 11am, Jan 9th 2020: 7pm to 9pm', label: 'When'} ,
            address: {value: '23845 South Hawthorne Blvd., Torrance, California, 90505, United States', label: 'Address'},
            phone: {value: '310-375-7014', label: 'Phone'},
            price: {value:  '$399.00', label: 'Price'},
            classDesc: 'THE PROJECT.  Concept to Presentation will inspire you to create a personal photo project.  Conceiving a theme, transforming an idea, creating the pictures and culminating in a finished presentation will build a new focus and purpose to your photography.  You will grow technically, develop your artistic voice and build a unique vision on this year-long journey. Creating a photo project or a personal portfolio is a worthy challenge for any photographer. Concept to Presentation utilizes monthly interactive print presentations to inspire discussion of your creative photographic process. You will focus on your photographic technique and artistic process whilst simultaneously building a collection of your best works. You will grow through personal coaching, artistic development, and by the end you will have honed your unique expression in a nurturing group environment.',
            photoUrl: `http://creativephotoacademy.com/wp-content/uploads/2014/02/Class-First-Look-Nikon-710x400.jpg`,
          }
        }
      },

      beginnerFull:{
        nikon: {
          instructor: {
            value: 'Paul\'s Photo Staff',
            label: 'Instructor'
          },
          toBring:{
            value: 'Camera, instruction manual, pen and paper',
            label: 'To Bring'
          },
          title: {
            value: 'First Look: Nikon',
            label: 'Class'
          },
          dates: {
            value: 'Nov 23rd 2019: 9am - 11am, Jan 9th 2020: 7pm to 9pm',
            label: 'When'
          } ,
          address: {
            value: '23845 South Hawthorne Blvd. Torrance, California, 90505, United States',
            label: 'Address'
          },
          phone: {
            value: '310-375-7014',
            label: 'Phone'
          },
          price: {
            value:  '$49.00',
            label: 'Price'
          },
          classDesc: 'Learn how to set-up and shoot your Digital Single Lens Reflex (DSLR) camera with ease. Includes easy explanations and a “feature tour” of today’s interchangeable lens cameras, as well as a discussion of video, still shooting, lenses, and flashes. This is a two-hour introductory class for students with Nikon DSLR cameras.',
          photoUrl: `http://creativephotoacademy.com/wp-content/uploads/2014/02/Class-First-Look-Nikon-710x400.jpg`,
        },

        canon: {
          instructor: {value: 'Paul\'s Photo Staff', label: 'Instructor'},
          toBring:{ value: 'Camera, instruction manual, pen and paper', label: 'To Bring'},
          title: {value: 'First Look: Canon', label: 'Class'},
          dates: {value: 'Nov 25th 2019: 7pm - 9pm, Jan 7th 2020: 7pm to 9pm', label: 'When'} ,
          address: {value: '23845 South Hawthorne Blvd., Torrance, California, 90505, United States', label: 'Address'},
          phone: {value: '310-375-7014', label: 'Phone'},
          price: {value:  '$49.00', label: 'Price'},
          classDesc: 'Learn how to set-up and shoot your Digital Single Lens Reflex (DSLR) camera with ease. Includes easy explanations and a “feature tour” of today’s interchangeable lens cameras, as well as a discussion of video, still shooting, lenses, and flashes. This is a two-hour introductory class for students with Canon DSLR cameras.',
        },

        photoBootcamp: {
          instructor: {value: 'Paul\'s Photo Staff', label: 'Instructor'},
          toBring:{ value: 'Camera, instruction manual, pen and paper', label: 'To Bring'},
          title: {value: 'First Look: Canon', label: 'Class'},
          dates: {value: 'Nov 25th 2019: 7pm - 9pm, Jan 7th 2020: 7pm to 9pm', label: 'When'} ,
          address: {value: '23845 South Hawthorne Blvd., Torrance, California, 90505, United States', label: 'Address'},
          phone: {value: '310-375-7014', label: 'Phone'},
          price: {value:  '$49.00', label: 'Price'},
          classDesc: 'Learn how to set-up and shoot your Digital Single Lens Reflex (DSLR) camera with ease. Includes easy explanations and a “feature tour” of today’s interchangeable lens cameras, as well as a discussion of video, still shooting, lenses, and flashes. This is a two-hour introductory class for students with Canon DSLR cameras.',
        },

        mirrorlessClass: {
          instructor: {value: 'Paul\'s Photo Staff', label: 'Instructor'},
          toBring:{ value: 'Camera, instruction manual, pen and paper', label: 'To Bring'},
          title: {value: 'First Look: Canon', label: 'Class'},
          dates: {value: 'Nov 25th 2019: 7pm - 9pm, Jan 7th 2020: 7pm to 9pm', label: 'When'} ,
          address: {value: '23845 South Hawthorne Blvd., Torrance, California, 90505, United States', label: 'Address'},
          phone: {value: '310-375-7014', label: 'Phone'},
          price: {value:  '$49.00', label: 'Price'},
          classDesc: 'Learn how to set-up and shoot your Digital Single Lens Reflex (DSLR) camera with ease. Includes easy explanations and a “feature tour” of today’s interchangeable lens cameras, as well as a discussion of video, still shooting, lenses, and flashes. This is a two-hour introductory class for students with Canon DSLR cameras.',
        },

        manualClass: {
          instructor: {value: 'Paul\'s Photo Staff', label: 'Instructor'},
          toBring:{ value: 'Camera, instruction manual, pen and paper', label: 'To Bring'},
          title: {value: 'First Look: Canon', label: 'Class'},
          dates: {value: 'Nov 25th 2019: 7pm - 9pm, Jan 7th 2020: 7pm to 9pm', label: 'When'} ,
          address: {value: '23845 South Hawthorne Blvd., Torrance, California, 90505, United States', label: 'Address'},
          phone: {value: '310-375-7014', label: 'Phone'},
          price: {value:  '$49.00', label: 'Price'},
          classDesc: 'Learn how to set-up and shoot your Digital Single Lens Reflex (DSLR) camera with ease. Includes easy explanations and a “feature tour” of today’s interchangeable lens cameras, as well as a discussion of video, still shooting, lenses, and flashes. This is a two-hour introductory class for students with Canon DSLR cameras.',
        },

        autoClass: {
          instructor: {value: 'Paul\'s Photo Staff', label: 'Instructor'},
          toBring:{ value: 'Camera, instruction manual, pen and paper', label: 'To Bring'},
          title: {value: 'First Look: Canon', label: 'Class'},
          dates: {value: 'Nov 25th 2019: 7pm - 9pm, Jan 7th 2020: 7pm to 9pm', label: 'When'} ,
          address: {value: '23845 South Hawthorne Blvd., Torrance, California, 90505, United States', label: 'Address'},
          phone: {value: '310-375-7014', label: 'Phone'},
          price: {value:  '$49.00', label: 'Price'},
          classDesc: 'Learn how to set-up and shoot your Digital Single Lens Reflex (DSLR) camera with ease. Includes easy explanations and a “feature tour” of today’s interchangeable lens cameras, as well as a discussion of video, still shooting, lenses, and flashes. This is a two-hour introductory class for students with Canon DSLR cameras.',
        },
      },



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
        }
      ],

      educators: [
        {
          name: 'Lorem Ipsum',
          about: 'Lorem ipsum dolor amet vinyl selvage roof party dreamcatcher lomo heirloom artisan church-key prism kickstarter everyday carry try-hard chartreuse glossier knausgaard.',
          photo: `${require('./markPhoto.jpg')}`,

        },
        {
          name: 'Lorem Ipsum',
          about: 'Lomo actually stumptown occupy venmo taiyaki listicle wayfarers semiotics.',
          photo: `${require('./sheryl.jpg')}`,
        },

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
        '/mirrorless-class',
        '/first-look-nikon',
        '/first-look-canon',
        '/First-Look:-Digital-Mirrorless',
        '/photo-boot-camp',
        '/Mastering-Manual',
        '/Mastering-Auto',
        '/intermediate-2019',
        '/intermediate-2020',
        '/inspirational-images',
        '/advanced-2020',
        '/advanced-perspectives',
        '/photo-editing',
        '/private-lessons',
        '/yosemite-winter-photo-adventure',
        '/death-valley-adventure',
        '/scotlan-photo-adventure',
        '/africa-cultural-safari-2020',
        '/cuba-2020',
        '/tuscany-2020',
        '/infrared-photography'
      ],

      navLinks: [],
    };

  setNavLinks = navLinks => {
    this.setState({
      navLinks,
    }, () => {
      console.log('this.state.navLinks[0]', this.state.navLinks[0]);
    })
  }

  setClassDesc = beginnerClassDesc => {
    this.setState({
      beginnerClassDesc
    }, () => {
      console.log('this.state.beginnerClassDesc in set state', this.state.beginnerClassDesc)
    })
  }

  setTitles = beginnerTitles => {
    this.setState({
      beginnerTitles
    })
  }

  getNavLinks = async () => {
    try {
      let response = await fetch('https://hidden-badlands-97660.herokuapp.com/nav')
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


  getClassDesc = async () => {
    try {
      let response = await fetch('https://hidden-badlands-97660.herokuapp.com/classdesc')
      console.log('response in get class desc', response)
      if(!response.ok){
        throw new Error(response.status)
      } else {
        this.setClassDesc(await response.json())
      }
    } catch(error) {
        console.error('error:', error);
    }
  }

  getTitles = async () => {
    try {
      let response = await fetch('https://hidden-badlands-97660.herokuapp.com/titles')
      console.log('response in get titles', response)
      if(!response.ok){
        throw new Error(response.status)
      } else {
        this.setTitles(await response.json())
      }
    } catch(error) {
        console.error('error:', error);
    }
  }

  componentDidMount() {
    console.log('component did mount')
    this.getClassDesc()
    this.getTitles()
    this.getNavLinks()
  }

  renderFeatures() {
    return (
      <div style={featureContainerStyle} className='feature-container'>
        {this.state.features.map( feature => (
          <HomePageCard key={feature.className} feature={feature}/>
        ) )}
      </div>
    );
  }

  renderNavRoutes() {

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

  renderPhotoEditingRoutes(){
    return(
      <>
        <Route path='/photo-editing' render={props => {
            return  <PhotoClasses data={this.state.photoEditCard} hitory={props.histoy}/>
        }}/>
      </>
    )
  }

  renderAdvancedRoutes(){
    return (
      <>
      <Route path='/advanced-perspectives' render={props => {
        return (
          <ClassComponent classInfo={this.state.advancedFull.perspectives}/>
        )
      }}/>
    <Route path='/advanced-2020' render={props => {
        return (
          <PhotoClasses data={this.state.advancedCard} history={props.history}/>
        )
      }}/>
    <Route path='/inspirational-images' render={props => {
        return (
        <ClassComponent classInfo={this.state.advancedFull.advanced.inspirational}/>
        )
    }}/>

      </>
    )
  }

  renderIntermediateRoutes(){
    return(
      <>
      <Route path='/intermediate-2020' render={props => {
          return (
            <PhotoClasses data={this.state.intermediateCard} history={props.history}/>
          )
        }}/>
      </>
    )
  }

  renderBeginnerRoutes(){
    return (
      <>
        <Route path='/beginner' render={props => {
            return (
              <PhotoClasses titles={this.state.beginnerTitles} descs={this.state.beginnerClassDesc} data={this.state.beginnerCard} history={props.history}/>
            )
          }}/>
        <Route path='/first-look-nikon' render={props => {
            return(
                this.state.beginnerClassDesc !== undefined && this.state.beginnerTitles !== undefined
                  ? <ClassComponent
                    photoUrl={'http://creativephotoacademy.com/wp-content/uploads/2014/02/Class-First-Look-Nikon-710x400.jpg'}
                    classDesc={this.state.beginnerClassDesc[0].class_desc}
                    title={this.state.beginnerTitles[0].title}
                    />
                  : null
            )
          }}/>
        <Route path='/first-look-canon' render={props => {
            return(
              this.state.beginnerClassDesc !== undefined && this.state.beginnerTitles !== undefined
                ?<ClassComponent
                    title={this.state.beginnerTitles[1].title}
                    classDesc={this.state.beginnerClassDesc[1].class_desc}
                    photoUrl={'http://creativephotoacademy.com/wp-content/uploads/2016/08/aMadrona2010-1021-710x400.jpg'}
                    />
                :null
            )
          }}/>
        <Route path='/photo-boot-camp' render={props => {
            return (
              this.state.beginnerClassDesc !== undefined && this.state.beginnerTitles !== undefined
                ?<ClassComponent
                    title={this.state.beginnerTitles[2].title}
                    classDesc={this.state.beginnerClassDesc[2].class_desc}
                    photoUrl={'http://creativephotoacademy.com/wp-content/uploads/2016/08/Mark-Comon-Bosque-New-Mexico-2013-710x400.jpg'}
                    />
                :null
            )
          }}/>
        <Route path='/First-Look:-Digital-Mirrorless' render={props => {
            return (
              this.state.beginnerClassDesc !== undefined && this.state.beginnerTitles !== undefined
                ?<ClassComponent
                    title={this.state.beginnerTitles[3].title}
                    classDesc={this.state.beginnerClassDesc[3].class_desc}
                    photoUrl={'http://creativephotoacademy.com/wp-content/uploads/2014/02/Class-First-Look-Pocket-Camera-710x400.jpg'}
                    />
                :null
            )
          }}/>
        <Route path='/Mastering-Manual' render={props => {
            return (
              this.state.beginnerClassDesc !== undefined && this.state.beginnerTitles !== undefined
                ?<ClassComponent
                    title={this.state.beginnerTitles[4].title}
                    classDesc={this.state.beginnerClassDesc[4].class_desc}
                    photoUrl={'http://creativephotoacademy.com/wp-content/uploads/2015/12/CPA-234-Photo-Walk-Madrona201004183953-710x400.jpg'}
                    />
                :null
            )
          }}/>
        <Route path='/Mastering-Auto' render={props => {
            return (
              this.state.beginnerClassDesc !== undefined && this.state.beginnerTitles !== undefined
                ?<ClassComponent
                    title={this.state.beginnerTitles[5].title}
                    classDesc={this.state.beginnerClassDesc[5].class_desc}
                    photoUrl={'http://creativephotoacademy.com/wp-content/uploads/2016/01/classes-162x162.jpg'}
                    />
                :null
            )
          }}/>
      </>
    )

  }

  renderMainRoutes() {
    return (
      <div>
        <Route path='/FAQ' component={Faq}/>

        <Route path='/policies' component={Policies}/>
        <Route path='/gift-cards' component={GiftCards}/>

        <Route path='/educators' render={props => {
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
    const contextValue = {
      beginnerClassDesc: this.state.beginnerClassDesc,
    }
    return (
      <CpaContext.Provider value={contextValue}>
        <div className='App'>
          { this.state.navLinks.length > 0
              ? this.renderNavRoutes()
              : null
          }
          <main className='App_main'>
            {this.renderMainRoutes()}
            {this.renderBeginnerRoutes()}
            {this.renderIntermediateRoutes()}
            {this.renderAdvancedRoutes()}
            {this.renderPhotoEditingRoutes()}
          </main>
        </div>
    </CpaContext.Provider>
    );
  }
}
