import React from 'react'
import './footer.css'
import logo from '../../assets/eye-pixel.png'
 const Footer = () => {
  return (
    <div className='company__footer section__padding'>
        <div className='company__footer-heading'>
          <h1 className='gradient__text'>Do you want to see everything?</h1>
        </div>
        <div className='company__footer-btn'>
          <p>Request early for a viewing!</p>
        </div>
          <div className='company__footer-links_logo'>
            <img src={logo} alt='logo'/>
            {/* <p>Middle-earth, All rights reserved by Sauron.</p> */}
          </div>
          <div className='company__footer-links'>
          <div className='company__footer-links_div'>
            <h4>Locations</h4>
            <p>Minas Tirith</p>
            <p>Minas Morgul</p>
            <p>Osgiliath</p>
            <p>Bree</p>
          </div>

          <div className='company__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy</p>
            <p>Contract</p>
          </div>
          
          <div className='company__footer-links_div'>
            <h4>Contact us</h4>
            <p>Middle Earth</p>
            <p>WhatsApp +44 1954 002907</p>
            <p>sauroneyetours@tourism-middle-earth.co.uk</p>
          </div>
        </div>

        <div className='company__footer-copyright'>
          <p>&copy; 1955 Middle-earth, All rights reserved by Sauron.</p>
        </div>
    </div>
  )
}
export default Footer
