import React from 'react'
import SideBar from './SideBar'
import Content from './Content'
import GameDashboard from '../GameDashboard'
import ImageSlider from '../global/imageSlider/ImageSlider'

import axios from 'axios'

const Home = () => {

  return (
    <div>
        <div className='home-content'>
          <SideBar /> 
          <Content />
        </div>
    </div>
  )
}

export default Home