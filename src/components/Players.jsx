import React from 'react'
import Player from './Player'

function Players(props) {
    const { name_p1, name_p2} = props;
  return (
    <div className='_players'>
        <Player name={name_p1} />
        <Player name={name_p2} />
    </div>
  )
}

export default Players