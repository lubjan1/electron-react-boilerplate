import React from 'react';
import { AiFillHome, AiFillFolder, AiFillFile, AiFillDownload, AiFillPicture } from 'react-icons/ai';
import { FaComputer } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BiMusic } from 'react-icons/bi';
import Google from '../../../../assets/background-icons/icons8-chrome-94.png';
import Pictures from '../../../../assets/background-icons/icons8-pictures-folder-94.png';
import Music from '../../../../assets/background-icons/icons8-music-folder-94.png';
import Downloads from '../../../../assets/background-icons/icons8-downloads-folder-96.png';
import Pc from '../../../../assets/background-icons/icons8-workstation-96.png';
import Documents from '../../../../assets/background-icons/icons8-folder-96.png';

const SideBar = () => {
  const openFile = (filePath) => {
    electron.ipcRenderer.send('open-file', filePath);
  };
  
  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={() => openFile('C:/Users/gjidi/Desktop/Auth')}> 
        <img width="30px" src={Pc} alt="My PC" />
        <span>My pc</span>
      </div>
      <div className="sidebar-item" onClick={() => openFile('C:/Users/gjidi/Documents')}> 
        <img width="30px" src={Documents} alt="Documents" />
        <span>Documents</span>
      </div>
      <div className="sidebar-item" onClick={() => openFile('C:/Users/gjidi/Downloads')}>
        <img width="30px" src={Downloads} alt="Downloads" />
        <span>Downloads</span>
      </div>
      <div className="sidebar-item" onClick={() => openFile('C:/Users/gjidi/Music')}> 
        <img width="30px" src={Music} alt="Music" />
        <span>Music</span>
      </div>
      <div className="sidebar-item" onClick={() => openFile('C:/Users/gjidi/Pictures')}>
        <img width="30px" src={Pictures} alt="Pictures" />
        <span>Pictures</span>
      </div>
      <div className="sidebar-item" onClick={() => openFile("C:/Program Files/Google/Chrome/Application/chrome.exe")}>
      <img width="30px" src={Google} alt="Google" />
      <span>Google</span>
    </div>
    </div>
  );
};

export default SideBar;
