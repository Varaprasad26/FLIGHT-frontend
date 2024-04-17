import React from 'react';
import Logo from '../../assets/flightlogo.jpg';
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">

      <div className='sectionContainer container grid'>
          <div className='gridOne'>
            <div className='logoDiv'>
              <img src={Logo} className='Logo' />
            </div>
            <p>Your mind should be stronger than your feelings, fly!</p>
             <div className='socialIcon flex'>
             <TiSocialFacebook className="icon"/>
             <AiOutlineTwitter  className="icon"/>
             <AiOutlineYoutube className="icon"/>
             <AiOutlineInstagram className="icon"/>
             </div>
          </div>


          <div className='footerLinks'>
            <span className='linkTitle'>Information</span>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Explore</a>
            </li>
            <li>
              <a href=''>flight status</a>
            </li>
            <li>
              <a href=''>Travel</a>
            </li>
            <li>
              <a href=''>Check-In</a>
            </li>
            <li>
              <a href=''>Manage your Booking</a>
            </li>


          </div>

          <div className='footerLinks'>
            <span className='linkTitle'>Quick Guide</span>
            <li>
              <a href=''>FAQ</a>
            </li>
            <li>
              <a href=''>Hw To</a>
            </li>
            <li>
              <a href=''>Features</a>
            </li>
            <li>
              <a href=''>Baggage</a>
            </li>
            <li>
              <a href=''>Route Map</a>
            </li>
            <li>
              <a href=''>Our Communication</a>
            </li>


          </div>

          <div className='footerLinks'>
            <span className='linkTitle'>Information</span>
            <li>
              <a href=''>Chauffuer</a>
            </li>
            <li>
              <a href=''>Our partners</a>
            </li>
            <li>
              <a href=''>Destinations</a>
            </li>
            <li>
              <a href=''>Careers</a>
            </li>
            <li>
              <a href=''>Transpotations</a>
            </li>
            <li>
              <a href=''>Programme Rules</a>
            </li>


          </div>
          
      </div>

      <div className='copyRightDiv flex'>
      <p>Courtesy Design ! developed br <a href="https://emailto-dreamboyvara144@gmail.com" 
      target='_blank'>DREAMBOY</a></p>
      </div>

    </div>
  )
}

export default Footer