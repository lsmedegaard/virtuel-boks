import React from 'react'
import Button from './buttons/Button'
import '../scss/control.scss'
import Connected from './CarSVG'
import { useState } from 'react'
import PropTypes from 'prop-types'

Control.propTypes = {
  settings: PropTypes.object,
  setSettings: PropTypes.func,
  messageQueue: PropTypes.array
}

function Control (props) {
  const [error, setError] = useState(false)

  const updateSettings = (setting) => {
    return () => {
      for (const dependency of props.settings[setting].dependencies) {
        if (props.settings[dependency.setting].value !== dependency.requiredValue) {
          setError(dependency.message)
          return true
        } 
      }
      props.setSettings({
        ...props.settings,
        [setting]: {
          ...props.settings[setting],
          value: !props.settings[setting].value
        }
      })
      props.settings[setting].value
        ? props.settings[setting].stopFunction(props.messageQueue)
        : props.settings[setting].startFunction(props.messageQueue)
      if (props.settings[setting].duration) {
        setTimeout(() => {
          props.setSettings({
            ...props.settings,
            [setting]: {
              ...props.settings[setting],
              value: false
            }
          })
          props.settings[setting].stopFunction(props.messageQueue)
        }, props.settings[setting].duration)
      }
      setError(false)
      return false
    }
  }

  const updateDuration = (setting) => {
    return (duration) => {
      props.setSettings({
        ...props.settings,
        [setting]: {
          ...props.settings[setting],
          duration: duration
        }
      })
    }
  }

  const buttons = []


  for (const setting in props.settings) {
    buttons.push(
      <Button key={setting} updateDuration={updateDuration(setting)} updateSettings={updateSettings(setting)} settings={props.settings[setting]} />
    )
  }



  return (
    <div className="control-container">
      <div className="controls">
        <Connected settings={props.settings}/>
        <div className="line-wrapper">
          <div className="line"></div>
        </div>
        <div className="boxID">
          <h3>Box ID</h3>
          <input type="text" />
        </div>
        <div className="authentication">
          <h3>Authentication</h3>
          <input type="text" />
        </div>
        {buttons}
      </div>
      <div>
        <div className="popUp" style={{visibility: error ? 'visible' : 'hidden'}}>{error}</div>
      </div>
    </div>

  )
}

export default Control
