import React from 'react';
import { Link } from 'react-router-dom';

import transparentDiv from './transparentDiv.png';
import './HomePageCard.css'



const spanStyle = {
  fontFamily: 'Kadwa, serif',
  color: 'white',
  fontSize: '1.4rem',
  lineHeight: '1.2em',
  marginBottom: '15px',
  textTransform: 'uppercase',
};

const content = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '20px',
  marginTop: '30px',
  position: 'relative',
};

const viewMoreContainer = {
  postion: 'absolute',
  bottom: '3px'
}

const svgStyle = {
  color: 'red',
  marginTop: '30px',
  marginLeft: '20px'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'red',
  position: 'absolute',
  bottom: '15px'
}

export default function HomePageCard( props ) {
  console.log( 'home page card props', props.feature.icon );
  return (
    <>
      <div className='home-page-card'>
        <svg style={ svgStyle }
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="camera"
            className="svg-inline--fa fa-camera fa-3x"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
            fill="currentColor"
            d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z">
            </path>
        </svg>
        <div style={content} className='contentFeature'>
          <span style={spanStyle}>{props.feature.className}</span>
          <Link style={linkStyle} to={props.feature.path}>View More</Link>
        </div>
      </div>

    </>
  );
}
