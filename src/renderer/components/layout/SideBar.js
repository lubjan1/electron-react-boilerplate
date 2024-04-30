import React, { useEffect, useState } from 'react'
import { AiFillHome, AiFillFolder, AiFillFile, AiFillDownload, AiFillPicture } from 'react-icons/ai';
import { FaComputer } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BiMusic } from 'react-icons/bi';
import Google from '../../../../assets/background-icons/icons8-chrome-94.png'
import Pictures from '../../../../assets/background-icons/icons8-pictures-folder-94.png'
import Music from '../../../../assets/background-icons/icons8-music-folder-94.png'
import Downloads from '../../../../assets/background-icons/icons8-downloads-folder-96.png'
import Pc from '../../../../assets/background-icons/icons8-workstation-96.png'
import Documents from '../../../../assets/background-icons/icons8-folder-96.png'

const SideBar = () => {
  const [folders, setFolders] = useState([]);

  const createFolderWithName = (desiredFolderPath, folderName) => {
    electron.ipcRenderer.send('create-folder', desiredFolderPath);

    // Update the sidebar with the new folder
    setFolders((prevFolders) => [...prevFolders, { name: folderName, path: desiredFolderPath }]);
  };

  useEffect(() => {
    electron.ipcRenderer.on('create-folder-with-name', (event, desiredFolderPath, folderName) => {
      createFolderWithName(desiredFolderPath, folderName);
    });

    // Clean up the listener
    return () => {
      electron.ipcRenderer.removeAllListeners('create-folder-with-name');
    };
  }, []);

  // ...

  return (
    <div className="sidebar">
    <div className="sidebar-item">
      <img width="30px" src={Pc} />
      <span>My pc</span>
    </div>
    <div className="sidebar-item">
      <img width="30px" src={Documents} />
      <span>Documents</span>
    </div>
    <div className="sidebar-item">
      <img width="30px" src={Downloads} />
      <span>Downloads</span>
    </div>
    <div className="sidebar-item">
      <img width="30px" src={Music} />
      <span>Music</span>
    </div>
    <div className="sidebar-item">
      <img width="30px" src={Pictures} />
      <span>Pictures</span>
    </div>
    <div className="sidebar-item">
      <img width="30px" src={Google} />
      <span>Google</span>
    </div>
    {folders.map((folder) => (
      <div className="sidebar-item" key={folder.path}>
        <AiFillFolder size={30} />
        <span>{folder.name}</span>
      </div>
    ))}
  </div>
  )
}

export default SideBar