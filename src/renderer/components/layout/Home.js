import React from 'react'
import SideBar from './SideBar'
import Content from './Content'
import GameDashboard from '../GameDashboard'
import ImageSlider from '../global/imageSlider/ImageSlider'
import image1 from '../../../../assets/images/image1.jpg'
import image2 from '../../../../assets/images/image2.jpg'
import image3 from '../../../../assets/images/image3.jpg'
import image4 from '../../../../assets/images/image4.jpg'
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