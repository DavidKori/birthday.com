import React from 'react'
import './loveReasonCard.css'

const LoveReasonCard = ({classNameTwo, props}) => {
  return (
    <div className='loveReasonContainer'>
      <p className={`loveReason  ${{classNameTwo}} ceaveat`} >{props}</p>
    </div>
  )
}

export default LoveReasonCard;
