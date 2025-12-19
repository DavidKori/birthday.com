import React from 'react'
import './redButton.css'

const redButton = ({action, props,value}) => {
  return (
    <div >
      <button className="redButton" onClick={action} value={value}>{props}</button>
    </div>
  )
}

export default redButton
