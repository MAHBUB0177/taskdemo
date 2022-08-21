import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className=" fot-bar">
      <div className="item">
        <div className='first'>
          <h2 className='text'>we provide the best service</h2>
          <p className='textdata'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolore. Cum, repellat, nisi iure libero rem eos</p>
        </div>
      </div>

      <div className="item">
        <div className='cards'>
        <h2 className='text'> Company service Time</h2>
        <p className='textdata'>address:dhanmondi32,bridge<br/>
        open hour: 24/7<br/>
        contact email:m@gmail.com
        phone:01776879668</p>
        </div>
        <div className='cards'>
        <h2 className='text'>company Terms&Policy</h2>
        <p className='textdata'>Product Owner<br/>
        Product Specialist<br/>
        UI/UX Designers<br/>
        React.js Developers</p>
        </div>
        <div className='cards'>
        <h2 className='text'> Company About </h2>
        <p className='textdata'>About Us<br/>
        Protfolio<br/>
        Our Blog<br/>
        Contact Us</p>
        </div>
      </div>

    </div>
  )
}

export default Footer;