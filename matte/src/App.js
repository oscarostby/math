import React, { useState } from 'react';
import styled from 'styled-components';

// Define the list of games
const games = [
  { name: "Krunker.io", url: "https://krunker.io" },
  { name: "Zombs Royale", url: "https://zombsroyale.io" },
  { name: "Powerline.io", url: "https://powerline.io" },
  { name: "Skribbl.io", url: "https://skribbl.io" },
  { name: "Ev.io", url: "https://ev.io" },
  { name: "Voxiom.io", url: "https://voxiom.io" },
  { name: "Bonk.io", url: "https://bonk.io" },
  { name: "Mope.io", url: "https://mope.io" },
  { name: "Wings.io", url: "https://wings.io" },
  { name: "Surviv.io", url: "https://surviv.io" },
  { name: "Brutal.io", url: "https://brutal.io" },
  { name: "Gats.io", url: "https://gats.io" },
  { name: "Doge2048", url: "https://doge2048.com" },
  { name: "Krunker", url: "https://krunker.io/" },
  { name: "Paperio2", url: "https://paper-io.com" },
  { name: "Bloxd.io", url: "https://bloxd.io" },
  { name: "Wormate.io", url: "https://wormate.io" },
  { name: "Brutalmania.io", url: "https://brutalmania.io" },
  { name: "Shellshock Live", url: "https://shellshocklive.com" },
  { name: "Shellshock.io", url: "https://shellshock.io" },
  { name: "Splix.io", url: "https://splix.io" },
  { name: "Wilds.io", url: "https://wilds.io" },
  { name: "Pokémon Showdown", url: "https://pokemonshowdown.com" },
  { name: "Town of Salem", url: "https://www.blankmediagames.com" },
  { name: "Skribbl", url: "https://skribbl.io/?room=royale" },
  { name: "Betrayal.io", url: "https://betrayal.io" },
  { name: "Curve Fever", url: "https://curvefever.pro" },
];
// Styled components
const GameButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  z-index: 9999;
`;

const PopupContent = styled.div`
  width: 80vw;
  height: 80vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const GameList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState({});

  const openGame = (game) => {
    setCurrentGame(game);
    setIsOpen(true);
  };

  const closeGame = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Online Games</h1>
      {games.map((game, index) => (
        <GameButton key={index} onClick={() => openGame(game)}>
          {game.name}
        </GameButton>
      ))}
      {isOpen && (
        <Popup>
          <PopupContent>
            <CloseButton onClick={closeGame}>X</CloseButton>
            <iframe src={currentGame.url} title={currentGame.name} width="100%" height="100%" />
          </PopupContent>
        </Popup>
      )}
    </div>
  );
};

export default GameList;
