import React, { useEffect, useState } from 'react'
import WinningLine from './WinningLine'

function Matrix(props) {
    const {game, setGame} = props;
    const [grid, setGrid] = useState(Array(9).fill(''));

    const verify_winner = (grid_to_verify) => {
        // verify horizontal matches : 
        // if (grid_to_verify[0] !== '' && grid_to_verify[0] === grid_to_verify[1] && grid_to_verify[1] === grid_to_verify[2]) {
        //     console.log('imad');
        // }
        // if (grid_to_verify[3] !== '' && grid_to_verify[3] === grid_to_verify[4] && grid_to_verify[4] === grid_to_verify[5]) {
        //     console.log('imad');
        // }
        // if (grid_to_verify[6] !== '' && grid_to_verify[6] === grid_to_verify[7] && grid_to_verify[7] === grid_to_verify[8]) {
        //     console.log('imad');
        // }

        let i = 0;
        while (i <= 6) {
            if (grid_to_verify[i] !== '' && grid_to_verify[i] === grid_to_verify[i+1] && grid_to_verify[i+1] === grid_to_verify[i+2]) {
                console.log('winner !!');
            }
            i += 3;
            
        }
        

        // verify vertical matches : 
        // if (grid_to_verify[0] !== '' && grid_to_verify[0] === grid_to_verify[1] && grid_to_verify[1] === grid_to_verify[2]) {
        //     console.log('imad');
        // }
        // if (grid_to_verify[3] !== '' && grid_to_verify[3] === grid_to_verify[4] && grid_to_verify[4] === grid_to_verify[5]) {
        //     console.log('imad');
        // }
        // if (grid_to_verify[6] !== '' && grid_to_verify[6] === grid_to_verify[7] && grid_to_verify[7] === grid_to_verify[8]) {
        //     console.log('imad');
        // }
        let j = 0;
        while (j <= 6) {
            if (grid_to_verify[j] !== '' && grid_to_verify[j] === grid_to_verify[j+1] && grid_to_verify[j+1] === grid_to_verify[j+2]) {
                console.log('winner !!');
            }
            j += 3;
            
        }

        
        // verify cross matches : 
    }

    const handle_turn = (index) => {
        if ( grid[index] === '' ) {
            const newGrid = [...grid]; 
            newGrid[index] = current_player.letter; 
            setGrid(newGrid);
            setGame((old_value)=>({...old_value, current_turn: 1-old_value.current_turn}));
            verify_winner(newGrid);
        }
    }

    const [current_player, setCurrent_player] = useState([game.player1, game.player2][game.current_turn])

    useEffect(() => {
        setCurrent_player([game.player1, game.player2][game.current_turn]);
      }, [game])

  return (
    <div className='_matrix'>
        {grid.map((item, index) => (
            <div key={index} onClick={() => handle_turn(index)} className="_square">{item}</div>
        ))}
        <WinningLine />
    </div>
  )
}

export default Matrix