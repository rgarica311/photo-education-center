import React, { Component } from 'react';
import './Review.css';

export default function Review(props) {
  return (
    <div className='reviewContainer'>
      <span className='reviewContent'>
        {props.review.content}
      </span>
      <span  className='reviewBy'>
        {props.review.by}
      </span>
      <span className='reviewFrom'>
          {props.review.from}
      </span>
    </div>
  );
};
