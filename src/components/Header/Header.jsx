import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import DarkTheme from './DarkTheme'
import logo from './../../images/logo.png'
import home from "../../SVG_buttons/home.svg"
import about from "../../SVG_buttons/About.svg"
import menu from "../../SVG_buttons/Menu_svg.svg"
import photo from "../../SVG_buttons/camera-outline.svg"

export default function Header() {
  return (
    <div className='header'>
      <DarkTheme/>
        <div className='header_container'>
        <NavLink to="/"><img className='header_img' src={logo} alt="" /></NavLink>
            <div className='header_list'>
                <ul className='list'>
                    <li ><NavLink className='lists' to="/"> 
                    <div className='home_hover'>
                      <img className='home' src={home} alt="" />HOME</div> </NavLink></li>
                    <li><NavLink className='lists' to="/menu">
                      <div className='Menu_hover'>
                        <img className='menu' src={menu} alt="" />
                      Menu </div></NavLink></li>
                    <li><NavLink className='lists' to="/about">
                      <div className='About_hover'>
                      <img className='About' src={about} alt="" />About</div></NavLink></li>
                    <li><NavLink className='lists' to="/photogallery">
                      <div className='Photo_hover'>
                           <img className='Photo' src={photo} alt="" />
                          Photo
                      </div></NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
