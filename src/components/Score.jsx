import React from 'react'
import Result from './Result'

function Score(props) {
    const { score_p1, score_p2} = props;
  return (
    <div className='_scoreboard'>
        <Result result={score_p1} />
        <Result result={score_p2} />
    </div>
  )
}

export default Score