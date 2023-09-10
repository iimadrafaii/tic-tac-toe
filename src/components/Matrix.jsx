import React, { useEffect, useState } from 'react'
import WinningLine from './WinningLine'


function Matrix(props) {
    const {game, setGame} = props;
    
    const [winningLine, setWinningLine] = useState({
        show: false,
        deg: 0,
        top: 0,
        left: 0,
    });


    const verify_winner = (newGrid) => {
        // verify horizontal matches : 
        let i = 0;
        while (i <= 6) {
            if (newGrid[i] !== '' && newGrid[i] === newGrid[i+1] && newGrid[i+1] === newGrid[i+2]) {
                setWinningLine((oldWinning)=>({...oldWinning, show: true, deg:90, left: 50, top: -33+i*11.3}));

                return {
                    winner: newGrid[i] === game.player1.letter ? game.player1 : game.player2,
                    winner_id: newGrid[i] === game.player1.letter ? 0: 1,
                }
            }
            i += 3;
        }
        
        // verify vertical matches : 
        let j = 0;
        while (j < 3) {
            if (newGrid[j] !== '' && newGrid[j] === newGrid[j+3] && newGrid[j+3] === newGrid[j+6]) {
                setWinningLine((oldWinning)=>({...oldWinning, show: true, deg:0, left: [16, 50, 83][j], top: 0}));
                return {
                    winner: newGrid[j] === game.player1.letter ? game.player1 : game.player2,
                    winner_id: newGrid[j] === game.player1.letter ? 0: 1,
                }
            }
            j += 1;
        }

        // verify cross matches : 
        if (newGrid[0] !== '' && newGrid[0] === newGrid[4] && newGrid[4] === newGrid[8]) {
            setWinningLine((oldWinning)=>({...oldWinning, show: true, deg:-45, left: 50, top: 0}));
            return {
                winner: newGrid[0] === game.player1.letter ? game.player1 : game.player2,
                winner_id: newGrid[0] === game.player1.letter ? 0: 1,
            }
        }

        if (newGrid[2] !== '' && newGrid[2] === newGrid[4] && newGrid[4] === newGrid[6]) {
            setWinningLine((oldWinning)=>({...oldWinning, show: true, deg:45, left: 50, top: 0}));
            return {
                    winner: newGrid[2] === game.player1.letter ? game.player1 : game.player2,
                    winner_id: newGrid[2] === game.player1.letter ? 0: 1,
                }
        }

        if (newGrid.every((element) => element !== '')) {
            // setGame((old_value)=>({...old_value, still_playing: false, winner: 2}));
            
            return {
                winner: '',
                winner_id: 2,
            }
        }

        return {
            winner: '',
            winner_id: 0,
        }

    }

    const handle_turn = (index) => {
        
        setGame((old_value)=>{
            // console.log(old_value);
            if ( old_value.still_playing && old_value.grid[index] === '' ) {
                
                const newGrid = [...old_value.grid]; 
                newGrid[index] = current_player.letter; 
                
                console.log(newGrid);
                let  winner = verify_winner(newGrid).winner;
                let  winner_id = verify_winner(newGrid).winner_id;
                let  still_playing = true;
                
                let  player1 = {...old_value.player1};
                let  player2 = {...old_value.player2};

                if (winner !== '') {
                    still_playing = false;
                    // console.log(still_playing);
                    if (winner_id === 0) {
                        player1 = {...old_value.player1, score: old_value.player1.score+1};
                    }
                    else {
                        player2 = {...old_value.player2, score: old_value.player2.score+1};
                    }
                }
                else if (winner_id === 2) {
                    still_playing = false;
                }
                
                return {...old_value, current_turn: 1-old_value.current_turn, grid: newGrid, player1, player2, still_playing, winner: winner_id}

            }
            return old_value;
        });

        // if ( game.still_playing && game.grid[index] === '' ) {
        //     setGame((old_value)=>{
        //         const newGrid = [...old_value.grid]; 
        //         newGrid[index] = current_player.letter; 

        //         winner = verify_winner(newGrid).winner;
        //         winner_id = verify_winner(newGrid).winner_id;

        //         return {...old_value, current_turn: 1-old_value.current_turn, grid: newGrid}
        //     });
        //     // console.log('winner');
        //     // console.log(winner);
        //     // console.log('winner_id');
        //     // console.log(winner_id);
            
        //     if (winner !== '') {
        //         setGame((old_value)=>({...old_value, still_playing: false, winner: winner_id}));
        //         if (winner_id === 0) {
        //             setGame((old_value)=>({...old_value, player1: {...old_value.player1, score: old_value.player1.score+1}}));
        //         }
        //         else {
        //             setGame((old_value)=>({...old_value, player2: {...old_value.player2, score: old_value.player2.score+1}}));
        //         }
        //     }
        // }
    }

    const [current_player, setCurrent_player] = useState([game.player1, game.player2][game.current_turn])

    useEffect(() => {
        setCurrent_player([game.player1, game.player2][game.current_turn]);
      }, [game])

  return (
    
    <div className="_matrix">
        {game.grid.map((item, index) => (
            <div key={index} onClick={() => handle_turn(index)} className="_square">{item}</div>
            ))}
        {!game.still_playing && game.winner !== 2? 
            <>
                <WinningLine top={winningLine.top} left={winningLine.left} deg={winningLine.deg} />
            </>: <></>}
            
    </div>

       
  )
}

export default Matrix