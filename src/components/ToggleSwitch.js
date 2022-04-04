import React from 'react'
import '../scss/buttons.scss'

function ToggleSwitch () {
  return (
    <label className="switch">
      <input type="checkbox"/>
      <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch