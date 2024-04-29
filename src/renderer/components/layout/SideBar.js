import React from 'react'
import { AiFillHome, AiFillFolder, AiFillFile, AiFillDownload, AiFillPicture } from 'react-icons/ai';
import { BiMusic } from 'react-icons/bi';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <AiFillHome className="sidebar-icon" />
        <span>Home</span>
      </div>
      <div className="sidebar-item">
        <AiFillFolder className="sidebar-icon" />
        <span>Documents</span>
      </div>
      <div className="sidebar-item">
        <AiFillFile className="sidebar-icon" />
        <span>Downloads</span>
      </div>
      <div className="sidebar-item">
        <BiMusic className="sidebar-icon" />
        <span>Music</span>
      </div>
      <div className="sidebar-item">
        <AiFillPicture className="sidebar-icon" />
        <span>Pictures</span>
      </div>
      {/* Add more sidebar items as needed */}
    </div>
  )
}

export default SideBar