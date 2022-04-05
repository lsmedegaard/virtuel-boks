import React from 'react'
import '../../scss/buttons.scss'
import PropTypes from 'prop-types'
import '../../scss/animations.scss'
import ToggleButton from './ToggleButton'
import ClickButton from './ClickButton'

Button.propTypes = {
  settings: PropTypes.object,
  updateDuration: PropTypes.func,
  updateSettings: PropTypes.func
}

function Button(props) {


  return (
    props.settings.type === 'toggle' 
      ? <ToggleButton {...props}  /> : <ClickButton {...props} />
  )
}

export default Button
