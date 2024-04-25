import React from 'react'
import game1 from '../../../../assets/images/image1.jpg'

const Contet = () => {
  const games = [
    { id: 1, name: 'Game 1', src: 'path/to/game1' },
    { id: 2, name: 'Game 2', src: 'path/to/game2' },
    { id: 3, name: 'Game 3', src: 'path/to/game3' },
  ];

  return (
    <main className="content">
      {games.map((game) => (
        <div key={game.id} className="game-box">
          <h3>{game.name}</h3>
          <img src={game.src} alt={game.name} />
        </div>
      ))}
    </main>
  );
}

export default Contet