import React from 'react'

const SideBar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar-label">This PC</div>
    <ul className="submenu">
      <li>Documents</li>
      <li>Downloads</li>
      <li>Music</li>
      <li>Photos</li>
    </ul>
    <div className="sidebar-label">Games</div>
    <ul className="submenu">
      <li>Game 1</li>
      <li>Game 2</li>
      <li>Game 3</li>
      {/* Add more games as needed */}
    </ul>
    <div className="sidebar-label">Info</div>
    <div className="info">
      Description about the company internet cafe games.
    </div>
  </div>
  )
}

export default SideBar