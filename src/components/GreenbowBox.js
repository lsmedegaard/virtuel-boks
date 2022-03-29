import React  from 'react'
import '../scss/main.scss'
import Charging from './CableSVG'
import Open from './OpenLidSVG'

function GreenbowBox (props) {
  return (
    <div className="svg-container">
      <svg id="baggrund" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.76 402.08">
        <filter id="shadow">
          <feFlood result="flood" floodColor="#ffffff" floodOpacity="1"></feFlood>
          <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
          <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
          <feGaussianBlur in="dilated" result="blurred" stdDeviation="4"></feGaussianBlur>
          <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <filter id="blue">
          <feFlood result="flood" floodColor="#0018F4" floodOpacity="1"></feFlood>
          <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
          <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
          <feGaussianBlur in="dilated" result="blurred" stdDeviation="4"></feGaussianBlur>
          <feMerge>
            <feMergeNode in="blurred"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
  

        <rect width="296.76" height="402.08" rx="7.71" fill="#6e716f"/>
        <rect x="59.51" y="40.28" width="177.75" height="304.49" rx="84.03" fill="#464444"/>
        <path d="M284.27,517.23a57.31,57.31,0,0,1,0-108.86V394.1H320v14.26a57.3,57.3,0,0,1,0,108.88l.3,18.32s-20.94,7.62-36.16,0Z" transform="translate(-153.79 -201.58)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="4.46" opacity="0.4"/>
        <circle cx="148.38" cy="124.1" r="57.28" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4.46" opacity="0.4"/>
        <circle cx="148.38" cy="124.1" r="57.28" fill="none" strokeWidth="3" stroke={props.settings.on.value ? '#fefefe' : '' } filter={props.settings.on ? 'url(#shadow)' : '' } opacity="1"/>
        <circle cx="148.38" cy="124.1" r="57.28" fill="none" strokeWidth="3" stroke={props.settings.charge.value ? '#0018F4' : '' } filter={props.settings.charge ? 'url(#blue)' : '' } opacity="1"/> 
        <path d="M286.49,515.69h31.3l.4,18.13s-17.53,6.08-31.7,0Z" transform="translate(-153.79 -201.58)" fill="#333333" opacity="0.3"/>
        <path d="M286.49,515.69h31.3S302.78,522.35,286.49,515.69Z" transform="translate(-153.79 -201.58)" fill="#333"/>
        <g id="logo">
          <path d="M288.43,301.47A28.8,28.8,0,0,1,303,297.8c6.58,0,12.21,1.65,16.73,4.92a23,23,0,0,1,8.48,11.71h2.7a24.4,24.4,0,0,0-9.73-14.37q-7.35-5.19-18.07-5.19a31.54,31.54,0,0,0-15.73,3.87,27.5,27.5,0,0,0-10.75,10.8,29.29,29.29,0,0,0-2.16,4.89h2.7a27.27,27.27,0,0,1,1.29-2.72A25.92,25.92,0,0,1,288.43,301.47Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
          <path d="M290.65,304a25.31,25.31,0,0,1,12.3-2.95A24.51,24.51,0,0,1,317.08,305a18.52,18.52,0,0,1,7.15,9.42h3.35a22.37,22.37,0,0,0-8.19-11.22C315,300,309.45,298.4,303,298.4A28.3,28.3,0,0,0,288.72,302,25.44,25.44,0,0,0,279,312c-.42.77-.8,1.59-1.16,2.43h3.34a23.46,23.46,0,0,1,1.08-2.19A21.43,21.43,0,0,1,290.65,304Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
          <path d="M314.09,307.94a19.68,19.68,0,0,0-11.19-3.06,20.44,20.44,0,0,0-9.74,2.28,16.79,16.79,0,0,0-6.66,6.39c-.17.28-.32.58-.47.88h4.59a14,14,0,0,1,1.18-1.49,14.61,14.61,0,0,1,11.31-4.64,15.14,15.14,0,0,1,7.1,1.58,10.82,10.82,0,0,1,4.63,4.55h4.58A14.36,14.36,0,0,0,314.09,307.94Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
          <path d="M286.15,313.36a17.13,17.13,0,0,1,6.81-6.53,20.78,20.78,0,0,1,9.94-2.34,20.07,20.07,0,0,1,11.42,3.14,14.66,14.66,0,0,1,5.53,6.8h3.85a18.09,18.09,0,0,0-6.91-9A23.92,23.92,0,0,0,303,301.54a24.74,24.74,0,0,0-12.05,2.89,20.83,20.83,0,0,0-8.23,8.05,19.72,19.72,0,0,0-1,1.95h3.89C285.76,314.06,286,313.7,286.15,313.36Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
          <path d="M300.28,322v10.83h18.64a15.51,15.51,0,0,1-5.45,7.9,15,15,0,0,1-9.15,2.76q-7.9,0-12.42-4.69t-4.51-13a23.42,23.42,0,0,1,.33-4H272.65a37.62,37.62,0,0,0-.21,4,31.87,31.87,0,0,0,3.91,15.9,27.81,27.81,0,0,0,10.91,10.87,32.1,32.1,0,0,0,15.94,3.91,30.66,30.66,0,0,0,13.58-2.92,29.3,29.3,0,0,0,9.92-7.65,28.77,28.77,0,0,0,5.54-10.23V322Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
        </g>
      </svg> 
      <Open settings={props.settings}/>
      <Charging settings={props.settings}/>
            
    </div>
        
  )
}
export default GreenbowBox