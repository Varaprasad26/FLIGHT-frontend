import React from 'react';
import Paris from '../../assets/paris.jpg';
import traveler1 from '../../assets/traveller1.jpg';

import London from '../../assets/london.jpg';
import Dubai from '../../assets/dubai.jpg';
import Image from '../../assets/images.jpg';


const travelers = [
  {
    id: 1,
    destinationImage: Paris,
    travelerImage: traveler1,
    travelerName: 'PRASAD',
    socialLink: '@prasad123'
  },

  {
    id: 2,
    destinationImage: London,
    travelerImage: traveler1,
    travelerName: 'VARAPRASAD',
    socialLink: '@Varaprasad123'
  },

  {
    id: 3,
    destinationImage: Dubai,
    travelerImage: traveler1,
    travelerName: 'SHAKE',
    socialLink: '@DubaiSHake12'
  },

  {
    id: 3,
    destinationImage: Image,
    travelerImage: traveler1,
    travelerName: 'SHAKE',
    socialLink: '@DubaiSHake12'
  },
]

const Travelers = () => {
  return (
    <div className='travelers container section'>
<div className='sectionContainer'>
  <h2>Top travelers in this month!</h2>

  <div className='travelersContainer grid'>


   
   {
    travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
      return(
       // {/* single traveller card */}

        <div key={id} className="singleTraveler">

        <img src={destinationImage} className='destinationImage' />
  
        <div className='travelerDetails'>
          <div className='travelerPicture'>
            <img src={travelerImage} alt="ON THE WAY" className='travelerImage' />
          </div>
         <div className='travelerName'>
          <span>{travelerName}</span>
          <p>{socialLink}</p>
         </div>
        </div>
        
      </div>
  
      )
    })
   }

  </div>
</div>
    </div>
  )
}

export default Travelers