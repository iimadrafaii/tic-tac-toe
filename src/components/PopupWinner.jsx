import React from 'react'

function PopupWinner() {
  return (
    <div className='_popup_wrapper'>
        <div className='_popup_overlay'></div>
        <div className='_popup_content'>
            <div className='_popup_content_header'> 
                <div className='_popup_content_header_winner'>
                    <h4> The winner is : </h4> <h2> Ilyes </h2>
                </div>
                <div className='_button'>X</div>
            </div>
            <div className='_popup_content_body'>
                <button className='_popup_content_body_restart _button'> Restart </button>
            </div>
        </div>
    </div>
  )
}

export default PopupWinner