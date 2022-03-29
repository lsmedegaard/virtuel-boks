import React, { useState } from 'react'
import '../scss/buttons.scss'

Button.propTypes = {
  settings: Object,
  updateDuration: Function,
  updateSettings: Function
}

function Button(props) {
  const [show, setShow] = useState(false)

  const onClick = () => {
    const error = props.updateSettings()
    if (error) return
    setShow(!show)
  }

  const onChange = (event) => {
    props.updateDuration(event.target.value)
  }

  return (
    <div className={`${props.settings.name} buttons-container`}>
      <button onClick={onClick}>
        {props.settings.value
          ? props.settings.changeText
          : props.settings.defaultText}
      </button>
      <div
        id="input-container"
        style={{ display: props.settings.timer ? 'block' : 'none' }}
      >
        <input
          type="text"
          onChange={onChange}
          value={props.settings.duration}
          placeholder="Oplad i x minutter"
        />
      </div>
    </div>
  )
}

export default Button
