import React, { useEffect, useState } from 'react'
import WinningLine from './WinningLine'


function Matrix(props) {
    const {game, setGame} = props;
    const [grid, setGrid] = useState(Array(9).fill(''));
    const [winningLine, setWinningLine] = useState({
        show: false,
        deg: 0,
        top: 0,
        left: 0,
    });


    const verify_winner = (grid_to_verify) => {
        // verify horizontal matches : 
        let i = 0;
        while (i <= 6) {
            if (grid_to_verify[i] !== '' && grid_to_verify[i] === grid_to_verify[i+1] && grid_to_verify[i+1] === grid_to_verify[i+2]) {
                setWinningLine((oldWinning)=>({...oldWinning, show: true, deg:90, left: 50, top: -33+i*11.3}));

                return {
                    winner: grid_to_verify[i] === game.player1.letter ? game.player1 : game.player2,
                    winner_id: grid_to_verify[i] === game.player1.letter ? 0: 1,
                }
            }
            i += 3;
        }
        

        // verify vertical matches : 
        let j = 0;
        while (j < 3) {
            if (grid_to_verify[j] !== '' && grid_to_verify[j] === grid_to_verify[j+3] && grid_to_verify[j+3] === grid_to_verify[j+6]) {
                setWinningLine((oldWinning)=>({...oldWinning, show: true, deg:0, left: [16, 50, 83][j], top: 0}));
                return {
                    winner: grid_to_verify[j] === game.player1.letter ? game.player1 : game.player2,
                    winner_id: grid_to_verify[j] === game.player1.letter ? 0: 1,
                }
            }
            j += 1;
        }

        // verify cross matches : 
        if (grid_to_verify[0] !== '' && grid_to_verify[0] === grid_to_verify[4] && grid_to_verify[4] === grid_to_verify[8]) {
            setWinningLine((oldWinning)=>({...oldWinning, show: true, deg:-45, left: 50, top: 0}));
            return {
                winner: grid_to_verify[0] === game.player1.letter ? game.player1 : game.player2,
                winner_id: grid_to_verify[0] === game.player1.letter ? 0: 1,
            }
        }
        if (grid_to_verify[2] !== '' && grid_to_verify[2] === grid_to_verify[4] && grid_to_verify[4] === grid_to_verify[6]) {
            setWinningLine((oldWinning)=>({...oldWinning, show: true, deg:45, left: 50, top: 0}));
            return {
                    winner: grid_to_verify[2] === game.player1.letter ? game.player1 : game.player2,
                    winner_id: grid_to_verify[2] === game.player1.letter ? 0: 1,
                }
        }

        return {
            winner: ''
        }

    }

    const handle_turn = (index) => {
        
        if ( game.still_playing && grid[index] === '' ) {
            const newGrid = [...grid]; 
            newGrid[index] = current_player.letter; 
            setGrid(newGrid);
            setGame((old_value)=>({...old_value, current_turn: 1-old_value.current_turn}));
            const winner = verify_winner(newGrid).winner;
            const winner_id = verify_winner(newGrid).winner_id;
            if (winner !== '') {
                setGame((old_value)=>({...old_value, still_playing: false}));
                if (winner_id === 0) {
                    setGame((old_value)=>({...old_value, player1: {...old_value.player1, score: old_value.player1.score+1}}));
                }
                else {
                    setGame((old_value)=>({...old_value, player2: {...old_value.player2, score: old_value.player2.score+1}}));
                }
            }
        }
    }

    const [current_player, setCurrent_player] = useState([game.player1, game.player2][game.current_turn])

    useEffect(() => {
        setCurrent_player([game.player1, game.player2][game.current_turn]);
      }, [game])

  return (
    
    <div className="_matrix">
        {grid.map((item, index) => (
            <div key={index} onClick={() => handle_turn(index)} className="_square">{item}</div>
            ))}
        {winningLine.show ? 
            <>
                <WinningLine top={winningLine.top} left={winningLine.left} deg={winningLine.deg}  />

            </>: <></>}
            
    </div>

       
  )
}

export default Matrix