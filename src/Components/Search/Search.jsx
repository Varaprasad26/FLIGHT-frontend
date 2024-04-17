import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";


const Search = () => {
  return (
    <div className="search container section">
      <div className='sectionContainer grid'>

        <div className='btns flex'>

          <div className='singleBtn'>
            <span>Economy</span>
          </div>

          <div className='singleBtn'>
            <span>Bussiness class</span>
          </div>

          <div className='singleBtn'>
            <span>First class</span>
          </div>

        </div>

<div className="searchInputs flex">
{/*single input*/}
    <div className='singleInput flex'>
      <div className="iconDiv">
      <HiOutlineLocationMarker className='icon'/>
        </div>
          <div className='texts'>
            <h4>Location</h4>
            <input type='text' placeholder='where do you want to go?'/>
          </div>
          </div>

{/*single input 2*/}
          <div className='singleInput flex'>
      <div className="iconDiv">
      <RiAccountPinCircleLine className='icon'/>
        </div>
          <div className='texts'>
            <h4>Travelers</h4>
            <input type='text' placeholder='Add Guests'/>
          </div>
          </div>

{/*single input 3*/}
          <div className='singleInput flex'>
      <div className="iconDiv">
      <RxCalendar className='icon'/>
        </div>
          <div className='texts'>
            <h4>Check In</h4>
            <input type='text' placeholder='Add Date'/>
          </div>
          </div>

          {/*single input 4*/}
          <div className='singleInput flex'>
      <div className="iconDiv">
      <RxCalendar className='icon'/>
        </div>
          <div className='texts'>
            <h4>Check Out</h4>
            <input type='text' placeholder='Add Date'/>
          </div>
          </div>

<button className="btn btnBlock flex">Search Flight</button>


         </div>
      </div>

    </div>
  )
}

export default Search