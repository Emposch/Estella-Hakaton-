import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import pizza from '../../images/Picture/Pizza/Ferm-Pizza.jpg'
import chicken from '../../images/Picture/Chiken/Adob.jpg'
import salad from '../../images/Picture/Salad/Cezar.jpg'
import sushi from '../../images/Picture/Sushi/Maki.jpg'
import fastfood from '../../images/Picture/Fast-food/Samsa.jpg'

export default function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <div className="home_column">
            {/* <NavLink className='home_title' to='/menu'>
              <div className='home_block'>
                <img className='home_img' src='https://nambafood.kg/new_design/static/img/food.jpg?1646365898' alt="" />
                <h1>Food</h1>
              </div>
            </NavLink> */}
            <NavLink className='home_title' to='/menu'>
              <div className='home_block'>
                <img className='home_img' src={pizza} alt="" />
                <h1>Pizza</h1>
              </div>
            </NavLink>
            <NavLink className='home_title' to='/menu'>
              <div className='home_block'>
                <img className='home_img' src={fastfood} alt="" />
                <h1>Fast Food</h1>
              </div>
            </NavLink>
            <NavLink className='home_title' to='/menu'>
              <div className='home_block'>
                <img className='home_img' src={salad} alt="" />
                <h1>Salad</h1>
              </div>
            </NavLink>
        </div>
        <div className="home_column">
            <NavLink className='home_title' to='/menu'>
              <div className='home_block'>
                <img className='home_img' src={sushi} alt="" />
                <h1>Sushi</h1>
              </div>
            </NavLink>
            {/* <NavLink className='home_title' to='/menu/drinks'>
              <div className='home_block'>
                <img className='home_img' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg?crop=0.540xw:0.810xh;0.232xw,0.0745xh&resize=640:*' alt="" />
                <h1>Drinks</h1>
              </div>
            </NavLink> */}
            <NavLink className='home_title' to='/menu'>
              <div className='home_block'>
                <img className='home_img' src={chicken} alt="" />
                <h1>Chicken</h1>
              </div>
            </NavLink>
            {/* <NavLink className='home_title' to='/menu'>
              <div className='home_block'>
                <img className='home_img' src={desert} alt="" />
                <h1>Deserts</h1>
              </div>
            </NavLink> */}
        </div>
      </div>
    </div>
  )
}
