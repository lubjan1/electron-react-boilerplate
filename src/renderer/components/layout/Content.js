import React from 'react';
import game1 from '../../../../assets/images/image4.jpg';
import { MainInput } from '../global/inputs/MainInput';

const Content = () => {
  const games = [
    {
      id: 1,
      name: 'Nexus Scarlet',
      path: 'C:/Program Files (x86)/games/Glamour Puzzle/game.exe',
      img: 'https://images5.alphacoders.com/108/1082103.jpg',
    },
    {
      id: 2,
      name: 'League of Legends',
      path: '/',
      img: 'https://images2.alphacoders.com/611/611981.jpg',
    },
    {
      id: 3,
      name: 'Need for speed payback',
      path: '/',
      img: 'https://images7.alphacoders.com/513/513808.jpg',
    },
    {
      id: 4,
      name: 'Need For Speed: Most Wanted',
      path: '/',
      img: 'https://images8.alphacoders.com/107/1078888.png',
    },
    {
      id: 5,
      name: `Assassin's Creed Valhalla`,
      path: '/',
      img: 'https://images5.alphacoders.com/108/1088618.png',
    },
    {
      id: 6,
      name: `Assassin's Creed Valhalla`,
      path: '/',
      img: 'https://images5.alphacoders.com/108/1088618.png',
    },
    {
      id: 8,
      name: `Assassin's Creed Valhalla`,
      path: '/',
      img: 'https://images5.alphacoders.com/108/1088618.png',
    },
    {
      id: 9,
      name: `Assassin's Creed Valhalla`,
      path: '/',
      img: 'https://images5.alphacoders.com/108/1088618.png',
    },
    {
      id: 10,
      name: `Assassin's Creed Valhalla`,
      path: '/',
      img: 'https://images5.alphacoders.com/108/1088618.png',
    },
    {
      id: 11,
      name: `Assassin's Creed Valhalla`,
      path: '/',
      img: 'https://images5.alphacoders.com/108/1088618.png',
    },
  ];
  // C:/Program Files (x86)/games/Glamour Puzzle/game.exe
  // C:/Games/Scarlet Nexus/ScarletNexus.exe
  const launchGame = (gamePath) => {
    console.log(`Launching game: ${gamePath}`);
    electron.ipcRenderer.send('launch-game', gamePath);
  };

  return (
    <div>
    
      <main className="content">
        {games.map((game) => (
          <div
            key={game.id}
            onDoubleClick={() => launchGame(game.path)}
            className="game-box"
          >
            <h3 className='game-title'>{game.name}</h3>
            <img src={game.img} alt={game.name} className="game-image" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Content;
