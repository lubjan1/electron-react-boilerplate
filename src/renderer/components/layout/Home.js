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

  const images = [
    {img: image1, alt: "First slide"},
    {img: image2, alt: "Second slide"},
    {img: image3, alt: "third slide"},
    {img: image4, alt: "forth slide"}
  ]

  const test = async () => {
      return await axios.get("http://localhost:3000/api/test")
      .then(res=>{
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  };


  return (
    <div>
        <div>
          <button onClick={test}>test request</button>
        </div>
        <div className='home-content'>

          <SideBar /> 
          <Content />
        </div>
    </div>
  )
}

export default Home