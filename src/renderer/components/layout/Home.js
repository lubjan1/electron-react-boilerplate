import React from 'react'
import SideBar from './SideBar'
import Content from './Content'
import GameDashboard from '../GameDashboard'
import ImageSlider from '../global/imageSlider/ImageSlider'
import NavBar from './NavBar'

const Home = () => {

  return (
        <div className='home-content'>
          <NavBar />
          <div className='main-container'>
            <SideBar /> 
            <Content />
          </div>
        </div>
  )
}

export default Home