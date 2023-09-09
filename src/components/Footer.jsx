import React, { useEffect, useState } from 'react'

function Footer(props) {
  const { game } = props;

  const [current_player, setCurrent_player] = useState([game.player1, game.player2][game.current_turn])

  useEffect(() => {
    setCurrent_player([game.player1, game.player2][game.current_turn]);
  }, [game])

  return (
    <div className='_footer'>Current player is : {current_player.name} </div>
  )
}

export default Footer