import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './Menu.css'
import Pizza from './menu_components/Pizza/Pizza'
import Sushi from './menu_components/Sushi/Sushi/Sushi'
import Chicken from './menu_components/Chiken/Chiken'
import Salad from './menu_components/Salad/Salad'
import Fastfood from './menu_components/FastFood/Fast-food/Fastfood'
// import Desert from './menu_components/Dessert/Dessert'

export default function Menu() {
  return (
    <div className='menu'>
      <div className='menu_column'>
        <Pizza/>
        <Sushi/>
        <Chicken/>
        <Salad/>
        <Fastfood/>
        {/* <Desert/> */}
      </div>




      {/* <div>
        <div>
          <ul className='menu_list'>
            <li><NavLink to='/menu'>Pizza</NavLink></li>
            <li><NavLink to='/menu/sushi'>Sushi</NavLink></li>
            <li><NavLink to='/menu/chicken'>Chicken</NavLink></li>
            <li><NavLink to='/menu/salad'>Salad</NavLink></li>
            <li><NavLink to='/menu/fastfood'>Fast food</NavLink></li>
            <li><NavLink to='/menu/desert'>Desert</NavLink></li>
          </ul>
        </div>
        <Routes>
          <Route path={'menu'} element={<Pizza/>} />
          <Route path={'/menu/sushi'} element={<Sushi/>} />
          <Route path={'/menu/chicken'} element={<Chicken/>} />
          <Route path={'/menu/salad'} element={<Salad/>} />
          <Route path={'/menu/fastfood'} element={<Fastfood/>} />
          <Route path={'/menu/desert'} element={<Desert/>} />
        </Routes>
      </div> */}
    </div>
  )
}
