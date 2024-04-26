import React from 'react';
import game1 from '../../../../assets/images/image1.jpg';


const Contet = () => {
  const games = [
    {
      id: 1,
      name: 'Nexus Scarlet',
      path: "C:/Games/Scarlet Nexus/ScarletNexus.exe",
    },
    { id: 2, name: 'Game 2', path: "/" },
    { id: 3, name: 'Game 3', src: 'path/to/game3' },
  ];
  // C:/Program Files (x86)/games/Glamour Puzzle/game.exe
  const launchGame = (gamePath) => {
    console.log(`Launching game: ${gamePath}`);
    electron.ipcRenderer.send('launch-game',gamePath)
  }

  return (
    <main className="content ">
      <p className='text-red-900'>asadasd</p>
      {games.map((game) => (
        <div key={game.id} onDoubleClick={()=>launchGame(game.path)} className="game-box">
          <h3>{game.name}</h3>
          <img src={game.src} alt={game.name} />
        </div>
      ))}
    </main>
  );
};

export default Contet;
