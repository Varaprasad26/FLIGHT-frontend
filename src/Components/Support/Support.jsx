import React from 'react';
import gridImage from '../../assets/images-Grid.jpg';

const Support = () => {
  return (
    <div className='support container section'>
<div className='sectionContainer'>
  <div className='titlesDiv'>
    <small>Travel Support</small>
    <h2>Plan your travel with confidence</h2>
    <p>find help with booking and travel plans, see what to expect along the journey</p>
  </div>
    
    <div className='infoDiv grid'>
      <div className='textDiv grid'>

        <div className='singleInfo'>
          <span className='number'>01</span>
          <h4>Travel requirements for Dubai</h4>
          <p>
            find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
          </p>
        </div>

        <div className='singleInfo'>
          <span className='number colorOne'>02</span>
          <h4>chauffeur services at your arrival</h4>
          <p>
            find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
          </p>
        </div>

        <div className='singleInfo'>
          <span className='number colorTwo'>03</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
          </p>
        </div>
      

      </div>

      <div className='imgDiv'>
        <img src={gridImage}/>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Support