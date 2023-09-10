import React from "react";

function PopupWinner(props) {
    const { game, setGame } = props;
    const restart = () => {
        setGame((old_value)=>({...old_value, still_playing: true, grid: Array(9).fill('')}));
    }

    return (
        <div className="_popup_wrapper">
            <div className="_popup_overlay"></div>
            <div className="_popup_content">
                <div className="_popup_content_header">
                    <div className="_popup_content_header_winner">
                        {game.winner !== 2? 
                        (<>
                            <h4> The winner is : </h4> <h2> {game.winner === 0 ? game.player1.name: game.player2.name} </h2></>):
                            <h4> ta3adul hh ! </h4>
                        }
                    </div>
                </div>
                <div className="_popup_content_body">
                    <button onClick={restart} className="_popup_content_body_restart _button">
                        <span> Restart the game </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PopupWinner;
