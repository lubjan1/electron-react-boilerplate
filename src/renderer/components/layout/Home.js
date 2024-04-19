import React from 'react'
import SideBar from './SideBar'
import Content from './Content'
import GameDashboard from '../GameDashboard'

const Home = () => {
  return (
    <div>
        <SideBar />
        <GameDashboard />
        {/* <Content /> */}
    </div>
  )
}

export default Home