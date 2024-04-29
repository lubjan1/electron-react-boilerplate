import React from 'react'
import SideBar from './SideBar'
import Content from './Content'
import GameDashboard from '../GameDashboard'
import ImageSlider from '../global/imageSlider/ImageSlider'
import NavBar from './NavBar'

import axios from 'axios'

const Home = () => {

  return (
        <div className='home-content'>
          {/* <NavBar /> */}
          <SideBar /> 
          <Content />
        </div>
  )
}

export default Home