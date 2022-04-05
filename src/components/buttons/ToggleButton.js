import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/animations.scss'

ToggleButton.propTypes = {
  settings: PropTypes.object,
  updateSettings: PropTypes.func
}

function ToggleButton (props) {

  const onClick = () => {
    props.updateSettings()
  }
  

  
  return (
    <svg id="toggleKnap" onClick={onClick} viewBox="0 0 228 74">
      <g id="baggrund-slider">
        <g id="baggrund"  >
          <path  d="M37,73.5a36.5,36.5,0,0,1,0-73H191a36.5,36.5,0,0,1,0,73Z" fill={props.settings.value ? 'green' : 'red' }/>
          <path d="M191,1a36,36,0,0,1,0,72H37A36,36,0,0,1,37,1H191m0-1H37A37,37,0,0,0,0,37H0A37,37,0,0,0,37,74H191a37,37,0,0,0,37-37h0A37,37,0,0,0,191,0Z"/>
        </g>
        <text transform="translate(125.85 48.81)" fontSize="40" fill="#fff" fontFamily="Poppins-Regular, Poppins">OFF</text>
        <text transform="translate(36.57 48.87)" fontSize="40" fill="#fff" fontFamily="Poppins-Regular, Poppins">ON</text>
        <g className={props.settings.value ? 'slide' : 'slideBack'} id="slider">
          <path d="M37,73.65A36.65,36.65,0,0,1,37,.35H77a36.65,36.65,0,0,1,0,73.3Z" fill="#b3b3b3"/>
          <path d="M77,.71a36.29,36.29,0,0,1,0,72.58H37A36.29,36.29,0,0,1,37,.71H77M77,0H37A37,37,0,0,0,0,37H0A37,37,0,0,0,37,74H77a37,37,0,0,0,37-37h0A37,37,0,0,0,77,0Z"/>
        </g>
      </g>
    </svg>
  )
}

export default ToggleButton