import React, { useState } from 'react'
import '../../scss/buttons.scss'
import PropTypes from 'prop-types'
import '../../scss/animations.scss'

ClickButton.propTypes = {
  settings: PropTypes.object,
  updateDuration: PropTypes.func,
  updateSettings: PropTypes.func
}

function ClickButton(props) {
  const [show, setShow] = useState(false)

  const onClick = () => {
    const error = props.updateSettings()
    if (error) return
    setShow(!show)
  }

  const onChange = (event) => {
    props.updateDuration(event.target.value)
  }
  
  const classes = [
    props.settings.name,
    props.settings.class,
    'buttons-container',
  ]

  return (
    <div className={classes.join(' ')}>
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

export default ClickButton
