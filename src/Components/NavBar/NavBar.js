import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

console.log( 'link', Link );

const headerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  backgroundColor: 'white',
  display: 'flex',
  height: '80px',
  zIndex: '2'
};

const navStyle = {
  display: 'flex',
  textTransform: 'uppercase',
  justifyContent: 'space-evenly',
  width: '100vw',
  alignItems: 'center'
};

const homelinkStyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '1rem',
  fontFamily: 'Raleway',
  fontWeight: '900'
};

export default class NavBar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      topNav: props.topNav,
      aboutMenu: props.aboutMenu,
      classesMenu: props.classesMenu,
      hover: false
    };
  }

  handleHover(e) {
    console.log('e.target', e.target.text)
    this.setState({
      hover: true,
      target: e.target.text
    });
  }

  handleMouseEnterUl(e) {
    this.setState({
      hover: true,
    })
  }

  handleMouseLeave(){
    this.setState({
      hover: false
    })
  }

  renderMenu() {
    Object.keys(this.state.aboutMenu).forEach((key) => {
      console.log(`this.state.aboutMenu${key}: ${this.state.aboutMenu[key]}, ${typeof(this.state.aboutMenu[key])}`)
    })
    const aboutMenu = this.state.aboutMenu;
    const classesMenu = this.state.classesMenu;
    return (
      <>
      {
        this.state.target === 'About'
          ? <ul onMouseLeave={e => this.handleMouseLeave( e )} onMouseEnter={e => this.handleMouseEnterUl( e )} id='about' className='list-container'>
            {
              Object.keys(aboutMenu).map(key => {
                if(aboutMenu[key] !== null && typeof(aboutMenu[key]) !== 'number'){
                  return <Link key={aboutMenu[key]} to={`/${aboutMenu[key].split(' ').join('-')}`}><li className='dd-menu-el' key={aboutMenu[key]}>{aboutMenu[key]}</li></Link>
                }
                return null;
              })
            }
          </ul>
          : this.state.target === 'Classes'
              ? <ul onMouseLeave={e => this.handleMouseLeave( e )} onMouseEnter={e => this.handleMouseEnterUl( e )} id='classes' className='list-container'>
                {
                  Object.keys(classesMenu).map(key => {
                    if(classesMenu[key] !== null && typeof(classesMenu[key]) !== 'number'){
                      return <Link key={classesMenu[key]} to={classesMenu[key].split(' ').join('-')}><li className='dd-menu-el' key={classesMenu[key].value}>{classesMenu[key]}</li></Link>
                    }
                    return null;
                  })
                }
              </ul>
              /*: this.state.target === 'Adventures'
                  ? <ul onMouseLeave={e => this.handleMouseLeave( e )} onMouseEnter={e => this.handleMouseEnterUl( e )} id='adventures' className='list-container'>
                    {
                      Object.keys(adventuresMenu).map(key => {
                        if(adventuresMenu[key] !== null && typeof(adventuresMenu[key]) !== 'number'){
                          return <Link key={adventuresMenu[key]} to={adventuresMenu[key].split(' ').join('-')}><li className='dd-menu-el' key={adventuresMenu[key]}>{adventuresMenu[key]}</li></Link>
                        }
                      })
                    }
                  </ul>
                  : this.state.target === 'Events'
                      ? <ul onMouseLeave={e => this.handleMouseLeave( e )} onMouseEnter={e => this.handleMouseEnterUl( e )} id='events' className='list-container'>
                          {
                            Object.keys(eventsMenu).map(key => {
                              if(eventsMenu[key] !== null && typeof(eventsMenu[key]) !== 'number'){
                                return <Link key={eventsMenu[key]} to={eventsMenu[key].split(' ').join('-')}><li className='dd-menu-el' key={eventsMenu[key]}>{eventsMenu[key]}</li></Link>
                              }
                            })
                          }
                        </ul>*/
                      : null
      }
      </>

    );
  }

  render() {
    return (
      <>
        <header style={headerStyle} className='nav-bar'>
          <nav style={navStyle}>
            <Link style={homelinkStyle} to='/'><h1 className='logo'>
              PHOTO EDUCATION CENTER
            </h1>
            </Link>
            <Link onMouseLeave={e => this.handleMouseLeave( e )} onMouseOver={e => this.handleHover( e )} className='nav-link' to='/' >{this.state.topNav.col1}</Link>
            <Link onMouseLeave={e => this.handleMouseLeave( e )} onMouseOver={e => this.handleHover( e )} className='nav-link' to='/beginner'>{this.state.topNav.col2}</Link>
            {/*<Link onMouseLeave={e => this.handleMouseLeave( e )} onMouseOver={e => this.handleHover( e )} className='nav-link' to='/cuba 2020'>{this.state.topNav.col3}</Link>*/}
            {/*<Link onMouseLeave={e => this.handleMouseLeave( e )} onMouseOver={e => this.handleHover( e )} className='nav-link' to='/ready, set, nikon, shoot!'>{this.state.topNav.col4}</Link>*/}
          </nav>
        </header>
        {this.state.hover === true ? this.renderMenu() : null}
      </>
    );
  }

}
