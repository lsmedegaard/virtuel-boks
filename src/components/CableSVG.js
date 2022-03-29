import React from 'react'
import '../scss/main.scss'
import '../scss/animations.scss'

Charging.propTypes = {
  settings: Object
}

function Charging (props) {
  return (
    <div id="charging">
      <svg className={props.settings.cable.value ? 'kabelPlads' : 'kabelGone' }viewBox="0 0 191.75 424">
        <defs>
          <linearGradient id="linear-gradient" x1="87.09" y1="376" x2="107.09" y2="376" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4d4d4d"/>
            <stop offset="0.35" stopColor="#4b4b4b"/>
            <stop offset="0.55" stopColor="#434343"/>
            <stop offset="0.71" stopColor="#353535"/>
            <stop offset="0.84" stopColor="#212121"/>
            <stop offset="0.97" stopColor="#080808"/>
            <stop offset="1"/>
          </linearGradient>
        </defs>
        <g id="kabel">
          <rect x="87.09" y="328" width="20" height="96" fill="url(#linear-gradient)"/>
          <path d="M1189.25,488.8H1023.88s-56.06,102.53,54.94,145.53l-.9,164h8v1h-8l0,3h7.93v1h-7.93l0,3h8v1h-8l0,9h57v-9h-8v-1h8v-3h-8v-1h8v-3h-8v-1h8v-164S1235.69,597.27,1189.25,488.8Z" transform="translate(-1009.72 -488.33)" fill="#4d4d4d"/>
          <path d="M1129.82,624.51s84.74-34.68,45.73-136.18H1036.61s-47.1,95.94,46.16,136.18" transform="translate(-1009.72 -488.33)" fill="#444"/>
          <path d="M1086.64,623.31l-.71,186h40.89v-186" transform="translate(-1009.72 -488.33)" fill="#444"/>
        </g>
      </svg>
    </div>
   
  )
}

export default Charging
