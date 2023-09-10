import { useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./App.css";
import Footer from "./components/Footer";
import Matrix from "./components/Matrix";
import Players from "./components/Players";
import PopupWinner from "./components/PopupWinner";
import Score from "./components/Score";
import Title from "./components/Title";
import logo from "./logo.svg";

function App() {
    const [game, setGame] = useState({
        player1: {
            name: "Imad",
            score: 0,
            letter: "X",
        },
        player2: {
            name: "Ilyes",
            score: 0,
            letter: "O",
        },
        current_turn: 0,
        still_playing: true,
        winner: 0,
        grid: Array(9).fill(''),
    });
    const { width, height } = useWindowSize();

    return (
        <div className="App">
            {!game.still_playing ? (
              <>
                <Confetti width={width} height={height} />
                <PopupWinner game={game} setGame={setGame} />
              </>
            ) : (
                <></>
            )}
            
            <Title />
            <Score
                score_p1={game.player1.score}
                score_p2={game.player2.score}
            />
            <Matrix setGame={setGame} game={game} />
            <Players name_p1={game.name_p1} name_p2={game.name_p2} />
            <Footer game={game} />
        </div>
    );
}

export default App;
