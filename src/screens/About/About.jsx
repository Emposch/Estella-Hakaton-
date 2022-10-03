import React from 'react'
import './About.css'
import chef from './../../images/chef.jpeg'
import barman from './../../images/barman.jpeg'
import waiters from './../../images/waiters.jpeg'
import beka from './../../images/beka.jpeg'
import aruuke from './../../images/aruuke.jpeg'
import emir from './../../images/emir.jpeg'

export default function About() {
  let url = 'https://www.google.com/maps/d/embed?mid=1onWkyiHWR3hl2iPTdCSvm2Ti5Ogj3P8q&ll=42.87192946884302%2C74.60406348824688&z=18'
  return (
    <div className='about'>
        <div className='about_container'>
          <div className='about_chef'>
            <img className='chef_img' src={chef} alt="" />
            <div className='chef_info'>
              <h1>Radga Bagimov</h1>
              <p>Raja Bagimov is our chef, who has been with us for many years.<br/> His work experience has already exceeded 8 years.<br/> He knows a lot of different and delicious dishes, so he will never upset your taste!</p>
            </div>
          </div>
            <div className='about_barman'>
              <div className='barman_info'>
              <h1>Dmitriy Hanslov</h1>
              <p>Dmitriy Hanslov is our barman, who has been with us for many years.<br/> His work experience has already exceeded 11 years.<br/> He knows a lot of different and delicious drinks, so he will never upset your taste!</p>
              </div>
              <img className='barman_img' src={barman} alt="" />
            </div>
            <div className='about_waiters'>
              <img className='waiters_img' src={waiters} alt="" />
              <div className='waiters_info'>
                <h1>This is our team of waiters</h1>
                <p>Our team of waiters has been with us for many years.<br/> Theirs work experience has already exceeded 5 years.<br/> They will bring your food as fast as possible</p>
              </div>
            </div>
            <div className='about_creators'>
              <h1>Creators</h1>
              <div className='creators_img'>
                <img className='creator' src={emir} alt="" />
                <img className='creator' src={aruuke} alt="" />
                <img className='creator' src={beka} alt="" />
              </div>
            </div>
          <div className='about_location'>
            <h1>Location</h1>
            <p>We located on Razzakov 32 street</p>
            <iframe src={url} className='iframe_map'></iframe>
          </div>
        </div>
    </div>
  )
}
