import logo from './logo.svg';
import './App.css';
import Matrix from './components/Matrix';
import Players from './components/Players';
import Footer from './components/Footer';
import Score from './components/Score';
import Title from './components/Title';
import { useState } from 'react';


function App() {
  
  

  const [game, setGame] = useState({

    player1: {
      name: 'imad',
      score: 17,
      letter: 'X',
    },

    player2: {
      name: 'ilyes',
      score: 10,
      letter: 'O',
    },

    current_turn: 0,
    
    
  });


  return (
    <div className="App">
      <Title />
      <Score score_p1={game.score_p1} score_p2={game.score_p2} />
      <Matrix setGame={setGame} game={game} />
      <Players name_p1={game.name_p1} name_p2={game.name_p2} />
      <Footer game={game} />
    </div>
  );
}

export default App;
