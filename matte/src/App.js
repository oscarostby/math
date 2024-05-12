import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faTimes, faExpand } from '@fortawesome/free-solid-svg-icons';

// Define the list of games with their respective images
const games = [
  { name: "Krunker.io", url: "https://krunker.io", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw63Ca6vv8ZZcli0YQv_0UE6bmCjVgDHsAUmp5ItYLiw&s" },
  { name: "Zombs Royale", url: "https://zombsroyale.io", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjr5SWCrzbvPdNS3UINCpgO4Wp7KWhDKr4trjLGwWw0A&s" },
  { name: "Powerline.io", url: "https://powerline.io", image: "https://play-lh.googleusercontent.com/PZang3VRK1IIFtw-CBzA3KHXZAdCb-x3lD_n-c2yL_vP22jNOSc87kiQKI9Ww6M90g" },
  { name: "Skribbl.io", url: "https://skribbl.io", image: "https://cdn-1.webcatalog.io/catalog/skribbl/skribbl-icon-filled-256.png?v=1675593689293" },
  { name: "Ev.io", url: "https://ev.io", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhgQShSf7C97UfINLLbQU7JwyIyBpDzZNXv-7SQ4HkQ&s" },
  { name: "Voxiom.io", url: "https://voxiom.io", image: "https://cdn-1.webcatalog.io/catalog/voxiom-io/voxiom-io-icon-filled-256.webp?v=1677038605853o" },
  { name: "Bonk.io", url: "https://bonk.io", image: "https://b.thumbs.redditmedia.com/9p8-wn2_KPdgjPTaR9fx-NIVgFhvsgBL0WPdbv5GMkA.png" },
  { name: "Mope.io", url: "https://mope.io", image: "https://cdn2.steamgriddb.com/icon/bc6413b0348aeeed0bbc0836604acc75.png" },
  { name: "Wings.io", url: "https://wings.io", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqT7GlS7rVweXu0YxZaQaoIvy6JLvymfIXRx4mF2s1KQ&s" },
  { name: "Surviv.io", url: "https://surviv.io", image: "https://cm1.aminoapps.com/6915/c23fd2d38749e65678ed7b95a22cf6571ecd88a9_00.jpg" },
  { name: "Brutal.io", url: "https://brutal.io", image: "https://play-lh.googleusercontent.com/g3saDGVxEsAgig7lTI3-Pvu25XOvgORn8ub1hegVM-1BQ0YOTByiZl9T6w3Pp1Rh7tMU" },
  { name: "Gats.io", url: "https://gats.io", image: "https://kevin.games/assets/images/games/gats-io.jpg" },
  { name: "Doge2048", url: "https://doge2048.com", image: "https://gamaddy.com/_ipx/w_800&f_webp/doge2048.png" },
  { name: "Paperio2", url: "https://paper-io.com", image: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-684971-52.jpg" },
  { name: "Bloxd.io", url: "https://bloxd.io", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Bloxd.io_Logo.jpeg/1200px-Bloxd.io_Logo.jpeg" },
  { name: "Wormate.io", url: "https://wormate.io", image: "https://i.pinimg.com/474x/27/2d/a4/272da4cdd93aa4c9a6f9a104f6cd0630.jpg" },
  { name: "Brutalmania.io", url: "https://brutalmania.io", image: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/73/52/e8/7352e8cb-52ab-6f24-8489-1d1183ea4565/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/512x512bb.jpg" },
  { name: "Shellshock Live", url: "https://shellshocklive.com", image: "https://img.xboxachievements.com/images/2019/03/08/icon/d921e53de6f2eac8aeeb6191b4ce33ac-l.png" },
  { name: "Shellshock.io", url: "https://shellshock.io", image: "https://kevin.games/assets/images/games/shell-shockers.jpg" },
  { name: "Splix.io", url: "https://splix.io", image: "https://kevin.games/assets/images/games/splix-io.jpg" },
  { name: "Wilds.io", url: "https://wilds.io", image: "https://kevin.games/assets/images/games/wilds-io.jpg" },
  { name: "Pokémon Showdown", url: "https://pokemonshowdown.com", image: "https://asset.brandfetch.io/idNvwjVFpG/id2BZHDKr9.jpeg" },
  { name: "Town of Salem", url: "https://www.blankmediagames.com", image: "https://dl.vgmdownloads.com/soundtracks/town-of-salem-original-sound-track-2017/AlbumArtwork.png" },
  { name: "Betrayal.io", url: "https://betrayal.io", image: "https://pbs.twimg.com/profile_images/1309945495985553408/uTq81LtO_400x400.jpg" },
  { name: "Curve Fever", url: "https://curvefever.pro", image: "https://pbs.twimg.com/profile_images/1047899006016393216/1fXxMWk6_400x400.jpg" },
  { name: "Stab Fish", url: "https://stabfish.io", image: "https://cdn-1.webcatalog.io/catalog/stabfish-io/stabfish-io-icon-filled-256.webp?v=1677038605767" },

];

// Define themes
const lightTheme = {
  body: '#FFF',
  fontColor: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  cardBg: '#f5f5f5',
};

const darkTheme = {
  body: '#363537',
  fontColor: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  cardBg: '#333',
};

// Global styles
const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); // Adjusted for larger card size
  grid-gap: 32px; // Increased gap between cards
  justify-content: center; // Center the grid horizontally
`;

const GameCard = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
  background-image: url(${(props) => props.gameImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 200px; // Increase the width of the cards
  height: 200px; // Increase the height of the cards

  &:hover {
    transform: scale(1.05);
  }
`;

const GameName = styled.h3`
  margin: 0;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 1.2rem; // Increase the font size
  font-weight: bold; // Make the text bold
  text-transform: uppercase; // Convert the text to uppercase
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const GameIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const PopupControls = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
`;

const FullscreenButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.8rem 1.2rem;
  margin-bottom: 30px;
`;

function App() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const [sortedGames, setSortedGames] = useState(games);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  const sortGames = () => {
    const sorted = [...games].sort((a, b) => a.name.localeCompare(b.name));
    setSortedGames(sorted);
  };

  const openPopup = (gameUrl) => {
    setSelectedGame(gameUrl);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedGame(null);
  };

  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
    sortGames();
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <ThemeToggle onClick={toggleTheme}>
          <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
          {isDarkTheme ? ' Light Mode' : ' Dark Mode'}
        </ThemeToggle>
        <Title>Online Games</Title>
        <GameGrid>
          {sortedGames.map((game, index) => (
            <GameCard
              key={index}
              onClick={() => openPopup(game.url)}
              gameImage={game.image}
            >
              <GameName>{game.name}</GameName>
            </GameCard>
          ))}
        </GameGrid>
        {isPopupOpen && (
          <Popup>
            <PopupContent>
              <GameIframe src={selectedGame} title="Game" />
              <PopupControls>
                <CloseButton onClick={closePopup}>
                  <FontAwesomeIcon icon={faTimes} />
                </CloseButton>
                <FullscreenButton onClick={toggleFullscreen}>
                  <FontAwesomeIcon icon={faExpand} />
                </FullscreenButton>
              </PopupControls>
            </PopupContent>
          </Popup>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;