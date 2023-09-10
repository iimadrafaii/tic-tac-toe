import React from 'react'

function WinningLine(props) {
  const { top, left, deg } = props;
  return (
    <div className='_winning-line' style={{left: `${left}%`, top: `${top}%`, transform: `rotate(${deg}deg)`}}></div>
  )
}

export default WinningLine