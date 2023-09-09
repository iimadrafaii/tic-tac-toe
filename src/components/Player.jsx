import React from 'react'

function Player(props) {
    const { name } = props;
  return (
    <div className='_player'>{name}</div>
  )
}

export default Player