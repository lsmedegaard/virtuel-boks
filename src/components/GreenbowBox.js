import React  from 'react'
import '../scss/main.scss'
// import Charging from './CableSVG'
// import Open from './OpenLidSVG'
import PropTypes from 'prop-types'
import '../scss/animations.scss'


GreenbowBox.propTypes = {
  settings: PropTypes.object
}

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
        <circle cx="148.38" cy="124.1" r="57.28" fill="none" strokeWidth="3" stroke={props.settings.on.value ? '#fefefe' : '' } filter={props.settings.on.value ? 'url(#shadow)' : '' } opacity="1"/>
        <circle cx="148.38" cy="124.1" r="57.28" fill="none" strokeWidth="3" stroke={props.settings.charge.value ? '#0018F4' : '' } filter={props.settings.charge.value ? 'url(#blue)' : '' } opacity="1"/> 
        <path d="M286.49,515.69h31.3l.4,18.13s-17.53,6.08-31.7,0Z" transform="translate(-153.79 -201.58)" fill="#333333" opacity="0.3"/>
        <path d="M286.49,515.69h31.3S302.78,522.35,286.49,515.69Z" transform="translate(-153.79 -201.58)" fill="#333"/>
        <g id="logo">
          <path className={props.settings.charge.value ? 'change4' : ''} d="M288.43,301.47A28.8,28.8,0,0,1,303,297.8c6.58,0,12.21,1.65,16.73,4.92a23,23,0,0,1,8.48,11.71h2.7a24.4,24.4,0,0,0-9.73-14.37q-7.35-5.19-18.07-5.19a31.54,31.54,0,0,0-15.73,3.87,27.5,27.5,0,0,0-10.75,10.8,29.29,29.29,0,0,0-2.16,4.89h2.7a27.27,27.27,0,0,1,1.29-2.72A25.92,25.92,0,0,1,288.43,301.47Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
          <path className={props.settings.charge.value ? 'change3' : ''} d="M290.65,304a25.31,25.31,0,0,1,12.3-2.95A24.51,24.51,0,0,1,317.08,305a18.52,18.52,0,0,1,7.15,9.42h3.35a22.37,22.37,0,0,0-8.19-11.22C315,300,309.45,298.4,303,298.4A28.3,28.3,0,0,0,288.72,302,25.44,25.44,0,0,0,279,312c-.42.77-.8,1.59-1.16,2.43h3.34a23.46,23.46,0,0,1,1.08-2.19A21.43,21.43,0,0,1,290.65,304Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
          <path className={props.settings.charge.value ? 'change1' : ''} d="M314.09,307.94a19.68,19.68,0,0,0-11.19-3.06,20.44,20.44,0,0,0-9.74,2.28,16.79,16.79,0,0,0-6.66,6.39c-.17.28-.32.58-.47.88h4.59a14,14,0,0,1,1.18-1.49,14.61,14.61,0,0,1,11.31-4.64,15.14,15.14,0,0,1,7.1,1.58,10.82,10.82,0,0,1,4.63,4.55h4.58A14.36,14.36,0,0,0,314.09,307.94Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
          <path className={props.settings.charge.value ? 'change2' : ''} d="M286.15,313.36a17.13,17.13,0,0,1,6.81-6.53,20.78,20.78,0,0,1,9.94-2.34,20.07,20.07,0,0,1,11.42,3.14,14.66,14.66,0,0,1,5.53,6.8h3.85a18.09,18.09,0,0,0-6.91-9A23.92,23.92,0,0,0,303,301.54a24.74,24.74,0,0,0-12.05,2.89,20.83,20.83,0,0,0-8.23,8.05,19.72,19.72,0,0,0-1,1.95h3.89C285.76,314.06,286,313.7,286.15,313.36Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
          <path d="M300.28,322v10.83h18.64a15.51,15.51,0,0,1-5.45,7.9,15,15,0,0,1-9.15,2.76q-7.9,0-12.42-4.69t-4.51-13a23.42,23.42,0,0,1,.33-4H272.65a37.62,37.62,0,0,0-.21,4,31.87,31.87,0,0,0,3.91,15.9,27.81,27.81,0,0,0,10.91,10.87,32.1,32.1,0,0,0,15.94,3.91,30.66,30.66,0,0,0,13.58-2.92,29.3,29.3,0,0,0,9.92-7.65,28.77,28.77,0,0,0,5.54-10.23V322Z" transform="translate(-153.79 -201.58)" fill="#231f20"/>
        </g>
      </svg>
      
      <svg className={props.settings.open.value ? '' : 'hide' } id="aabnet" viewBox="0 0 213.98 96.52">
        <defs>
          <clipPath id="clip-path" transform="translate(0 -85.97)">
            <path d="M76.06,97.42v4.7c-40.7,4.58-68,17.5-68,32.17v-4.7C8,114.93,35.36,102,76.06,97.42Z" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-2" transform="translate(0 -85.97)">
            <path d="M206,129.59v4.7c0-14.68-27.37-27.61-68.12-32.18v-4.7C178.6,102,206,114.91,206,129.59Z" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-3" transform="translate(0 -85.97)">
            <path d="M76.06,161.76v4.7C35.36,161.88,8,149,8,134.29v-4.7C8,144.26,35.36,157.18,76.06,161.76Z" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-4" transform="translate(0 -85.97)">
            <path d="M206,134.29c0,14.68-27.37,27.61-68.12,32.18v-4.7C178.6,157.2,206,144.27,206,129.59Z" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-5" transform="translate(0 -85.97)">
            <path d="M70.79,164v4.69C28.33,163.52,0,149.81,0,134.29v-4.7C0,145.11,28.33,158.82,70.79,164Z" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-6" transform="translate(0 -85.97)">
            <path d="M214,129.59v4.7c0,15.53-28.34,29.24-70.83,34.45V164C185.65,158.83,214,145.12,214,129.59Z" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-7" transform="translate(0 -85.97)">
            <path d="M135.59,173.35v4.7c-5.36.55-18,1.69-32,1.69a175,175,0,0,1-24.95-1.57v-4.7a174.94,174.94,0,0,0,24.95,1.58C117.54,175.05,130.23,173.9,135.59,173.35Z" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-8" transform="translate(0 -85.97)">
            <path d="M136.3,173.51v4.7a292,292,0,0,1-31.44,1.68,188.59,188.59,0,0,1-26.57-1.68v-4.7a188.59,188.59,0,0,0,26.57,1.68A292,292,0,0,0,136.3,173.51Z" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-9" transform="translate(0 -85.97)">
            <path d="M141,175.63v4.69a330.67,330.67,0,0,1-37.27,2.18,188.17,188.17,0,0,1-30.9-2.24v-4.7a188.17,188.17,0,0,0,30.9,2.24A334.75,334.75,0,0,0,141,175.63Z" fill="none"/>
          </clipPath>
        </defs>

        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g style={{isolation: 'isolate'}}>
              <rect x="78.82" y="2.74" width="56.26" height="4.7"/>
              <polygon points="137.84 11.44 137.84 16.14 135.08 15.83 135.08 11.13 137.84 11.44"/>
              <polygon points="78.82 11.14 78.82 15.84 76.06 16.15 76.06 11.45 78.82 11.14"/>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M76.06,97.42v4.7q-5.79.66-11.21,1.52V99q5.41-.87,11.21-1.53" transform="translate(0 -85.97)"/>
                    <path d="M64.85,99v4.69q-3.34.54-6.54,1.16v-4.7c2.13-.41,4.31-.8,6.54-1.15" transform="translate(0 -85.97)"/>
                    <path d="M58.31,100.1v4.7a166.31,166.31,0,0,0-18.7,4.66v-4.69a164.1,164.1,0,0,1,18.7-4.67" transform="translate(0 -85.97)"/>
                    <path d="M39.61,104.77v4.69q-4.15,1.32-7.82,2.79v-4.7q3.66-1.47,7.82-2.78" transform="translate(0 -85.97)"/>
                    <path d="M31.79,107.55v4.7q-2.91,1.16-5.49,2.4V110q2.58-1.24,5.49-2.4" transform="translate(0 -85.97)"/>
                    <path d="M26.3,110v4.7q-2.22,1.06-4.19,2.19v-4.7q2-1.12,4.19-2.19" transform="translate(0 -85.97)"/>
                    <path d="M22.11,112.14v4.7c-1.2.69-2.34,1.39-3.4,2.11v-4.7c1.06-.72,2.2-1.42,3.4-2.11" transform="translate(0 -85.97)"/>
                    <path d="M18.71,114.25V119c-1,.67-1.93,1.35-2.79,2v-4.7c.86-.7,1.79-1.38,2.79-2" transform="translate(0 -85.97)"/>
                    <path d="M15.92,116.3V121c-.84.67-1.61,1.35-2.31,2v-4.69a29.41,29.41,0,0,1,2.31-2" transform="translate(0 -85.97)"/>
                    <path d="M13.61,118.34V123a27.29,27.29,0,0,0-1.89,2v-4.7a25.38,25.38,0,0,1,1.89-2" transform="translate(0 -85.97)"/>
                    <path d="M11.72,120.38v4.7a19.71,19.71,0,0,0-1.5,2.08v-4.7a19.71,19.71,0,0,1,1.5-2.08" transform="translate(0 -85.97)"/>
                    <path d="M10.22,122.46v4.7a16.53,16.53,0,0,0-1.14,2.15v-4.7a16.53,16.53,0,0,1,1.14-2.15" transform="translate(0 -85.97)"/>
                    <path d="M9.08,124.61v4.7a13.46,13.46,0,0,0-.74,2.25v-4.7a13.76,13.76,0,0,1,.74-2.25" transform="translate(0 -85.97)"/>
                    <path d="M8.34,126.86v4.7A11.52,11.52,0,0,0,8,134v-4.7a11.61,11.61,0,0,1,.31-2.4" transform="translate(0 -85.97)"/>
                    <path d="M8,129.26V134c0,.11,0,.22,0,.33v-4.7c0-.11,0-.22,0-.33" transform="translate(0 -85.97)"/>
                  </g>
                </g>
              </g>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path-2)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M206,129.59v4.7c0-9-10.37-17.41-27.84-23.57V106C195.6,112.19,206,120.56,206,129.59" transform="translate(0 -85.97)"/>
                    <path d="M178.13,106v4.7c-2.53-.89-5.2-1.74-8-2.53v-4.7c2.8.79,5.47,1.64,8,2.53" transform="translate(0 -85.97)"/>
                    <path d="M170.13,103.49v4.7q-3.28-.93-6.81-1.76v-4.7c2.35.56,4.62,1.14,6.81,1.76" transform="translate(0 -85.97)"/>
                    <path d="M163.32,101.73v4.7c-2.06-.49-4.19-1-6.37-1.39v-4.69c2.18.43,4.31.89,6.37,1.38" transform="translate(0 -85.97)"/>
                    <path d="M157,100.35V105c-2-.39-4-.77-6.14-1.12v-4.7q3.13.52,6.14,1.13" transform="translate(0 -85.97)"/>
                    <path d="M150.81,99.22v4.7q-3-.49-6-.93v-4.7q3.08.43,6,.93" transform="translate(0 -85.97)"/>
                    <path d="M144.78,98.29V103q-3-.42-6-.77v-4.7q3.08.35,6,.77" transform="translate(0 -85.97)"/>
                    <path d="M138.75,97.52v4.7l-.9-.11v-4.7l.9.11" transform="translate(0 -85.97)"/>
                  </g>
                </g>
              </g>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path-3)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M76.06,161.76v4.7l-.81-.1v-4.69l.81.09" transform="translate(0 -85.97)" fill="#3d3d3d"/>
                    <path d="M75.25,161.67v4.69q-3.07-.35-6-.77v-4.7q3,.42,6,.78" transform="translate(0 -85.97)" fill="#3b3b3b"/>
                    <path d="M69.22,160.89v4.7q-3.07-.43-6-.93V160q3,.49,6,.93" transform="translate(0 -85.97)" fill="#393939"/>
                    <path d="M63.19,160v4.7c-2.09-.35-4.14-.73-6.13-1.12v-4.7c2,.4,4,.77,6.13,1.12" transform="translate(0 -85.97)" fill="#373737"/>
                    <path d="M57.06,158.84v4.7q-3.29-.66-6.38-1.39v-4.7q3.09.74,6.38,1.39" transform="translate(0 -85.97)" fill="#353535"/>
                    <path d="M50.68,157.45v4.7c-2.35-.55-4.63-1.14-6.81-1.76v-4.7c2.18.62,4.46,1.21,6.81,1.76" transform="translate(0 -85.97)" fill="#343434"/>
                    <path d="M43.87,155.69v4.7c-2.81-.79-5.48-1.64-8-2.53v-4.7c2.52.89,5.19,1.74,8,2.53" transform="translate(0 -85.97)" fill="#323232"/>
                    <path d="M35.87,153.16v4.7C18.39,151.69,8,143.32,8,134.29v-4.7c0,9,10.37,17.4,27.85,23.57" transform="translate(0 -85.97)" fill="#303030"/>
                  </g>
                </g>
              </g>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path-4)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M206,129.59v4.7c0,.11,0,.22,0,.33v-4.7c0-.11,0-.22,0-.33" transform="translate(0 -85.97)" fill="#353535"/>
                    <path d="M206,129.92v4.7a11.52,11.52,0,0,1-.31,2.4v-4.7a11.44,11.44,0,0,0,.31-2.4" transform="translate(0 -85.97)" fill="#373737"/>
                    <path d="M205.65,132.32V137a13.5,13.5,0,0,1-.75,2.25v-4.7a13.5,13.5,0,0,0,.75-2.25" transform="translate(0 -85.97)" fill="#393939"/>
                    <path d="M204.9,134.57v4.7a16.44,16.44,0,0,1-1.13,2.15v-4.7a15.83,15.83,0,0,0,1.13-2.15" transform="translate(0 -85.97)" fill="#3b3b3b"/>
                    <path d="M203.77,136.72v4.7a20.12,20.12,0,0,1-1.5,2.08v-4.7a20.12,20.12,0,0,0,1.5-2.08" transform="translate(0 -85.97)" fill="#3d3d3d"/>
                    <path d="M202.27,138.8v4.7a27.29,27.29,0,0,1-1.89,2.05v-4.7a25.47,25.47,0,0,0,1.89-2" transform="translate(0 -85.97)" fill="#3f3f3f"/>
                    <path d="M200.38,140.85v4.7c-.71.69-1.48,1.36-2.31,2v-4.7c.83-.66,1.6-1.34,2.31-2" transform="translate(0 -85.97)" fill="#404040"/>
                    <path d="M198.07,142.88v4.7c-.86.7-1.8,1.38-2.79,2.06v-4.7c1-.68,1.93-1.36,2.79-2.06" transform="translate(0 -85.97)" fill="#424242"/>
                    <path d="M195.28,144.94v4.7c-1.06.71-2.2,1.41-3.4,2.1V147c1.2-.69,2.34-1.39,3.4-2.1" transform="translate(0 -85.97)" fill="#444"/>
                    <path d="M191.88,147v4.7q-2,1.13-4.19,2.19v-4.7q2.22-1.06,4.19-2.19" transform="translate(0 -85.97)" fill="#464646"/>
                    <path d="M187.69,149.23v4.7q-2.58,1.24-5.48,2.4v-4.7q2.89-1.15,5.48-2.4" transform="translate(0 -85.97)" fill="#484848"/>
                    <path d="M182.21,151.63v4.7q-3.68,1.47-7.82,2.78v-4.7q4.14-1.31,7.82-2.78" transform="translate(0 -85.97)" fill="#4a4a4a"/>
                    <path d="M174.39,154.41v4.7a166.4,166.4,0,0,1-18.74,4.68v-4.7a164.27,164.27,0,0,0,18.74-4.68" transform="translate(0 -85.97)" fill="#4b4b4b"/>
                    <path d="M155.65,159.09v4.7c-2.12.41-4.31.79-6.54,1.15v-4.7c2.23-.36,4.42-.74,6.54-1.15" transform="translate(0 -85.97)" fill="#4d4d4d"/>
                    <path d="M149.11,160.24v4.7q-5.43.87-11.26,1.53v-4.7q5.82-.66,11.26-1.53" transform="translate(0 -85.97)" fill="#4b4b4b"/>
                  </g>
                </g>
              </g>
              <polygon points="137.84 75.79 137.84 80.49 135.04 80.81 135.04 76.11 137.84 75.79" fill="#4d4d4d"/>
              <polygon points="135.04 76.11 135.04 80.81 78.83 80.92 78.83 76.22 135.04 76.11" fill="#484848"/>
              <polygon points="78.83 76.22 78.83 80.92 76.06 80.48 76.06 75.78 78.83 76.22" fill="#3e3e3e"/>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path-5)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M70.79,164v4.69c-1.57-.19-3.12-.39-4.65-.61v-4.7c1.53.22,3.08.42,4.65.62" transform="translate(0 -85.97)"/>
                    <path d="M66.14,163.42v4.7q-3.31-.47-6.5-1v-4.7q3.18.54,6.5,1" transform="translate(0 -85.97)"/>
                    <path d="M59.64,162.42v4.7q-3.37-.57-6.6-1.21v-4.7q3.23.64,6.6,1.21" transform="translate(0 -85.97)"/>
                    <path d="M53,161.21v4.7q-3.55-.71-6.9-1.5v-4.7q3.34.79,6.9,1.5" transform="translate(0 -85.97)"/>
                    <path d="M46.14,159.71v4.7c-2.57-.61-5.06-1.25-7.44-1.92v-4.7c2.38.67,4.87,1.32,7.44,1.92" transform="translate(0 -85.97)"/>
                    <path d="M38.7,157.79v4.7c-3-.86-5.9-1.77-8.61-2.72v-4.7c2.71,1,5.59,1.86,8.61,2.72" transform="translate(0 -85.97)"/>
                    <path d="M30.09,155.07v4.7C11.21,153.1,0,144.05,0,134.29v-4.7c0,9.76,11.21,18.81,30.09,25.48" transform="translate(0 -85.97)"/>
                  </g>
                </g>
              </g>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path-6)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M214,129.59v4.7c0,.12,0,.24,0,.35V130c0-.12,0-.24,0-.36" transform="translate(0 -85.97)"/>
                    <path d="M214,130v4.69a12.69,12.69,0,0,1-.34,2.6v-4.7A12.69,12.69,0,0,0,214,130" transform="translate(0 -85.97)"/>
                    <path d="M213.64,132.54v4.7a14.7,14.7,0,0,1-.8,2.43V135a14.7,14.7,0,0,0,.8-2.43" transform="translate(0 -85.97)"/>
                    <path d="M212.84,135v4.7a17.3,17.3,0,0,1-1.23,2.32V137.3a17.4,17.4,0,0,0,1.23-2.33" transform="translate(0 -85.97)"/>
                    <path d="M211.61,137.3V142a20.47,20.47,0,0,1-1.62,2.25v-4.69a22.56,22.56,0,0,0,1.62-2.25" transform="translate(0 -85.97)"/>
                    <path d="M210,139.55v4.69a29.75,29.75,0,0,1-2,2.22v-4.7c.74-.73,1.42-1.47,2-2.21" transform="translate(0 -85.97)"/>
                    <path d="M208,141.76v4.7c-.77.74-1.6,1.47-2.5,2.2V144c.9-.73,1.73-1.46,2.5-2.2" transform="translate(0 -85.97)"/>
                    <path d="M205.45,144v4.7c-.93.75-1.94,1.49-3,2.21v-4.7c1.07-.72,2.08-1.46,3-2.21" transform="translate(0 -85.97)"/>
                    <path d="M202.44,146.17v4.7c-1.15.77-2.37,1.53-3.67,2.27v-4.7c1.3-.74,2.52-1.49,3.67-2.27" transform="translate(0 -85.97)"/>
                    <path d="M198.77,148.44v4.7q-2.13,1.22-4.53,2.37v-4.7q2.4-1.16,4.53-2.37" transform="translate(0 -85.97)"/>
                    <path d="M194.24,150.81v4.7q-2.81,1.35-6,2.61v-4.7q3.15-1.26,6-2.61" transform="translate(0 -85.97)"/>
                    <path d="M188.29,153.42v4.7q-4,1.59-8.49,3v-4.7q4.5-1.42,8.49-3" transform="translate(0 -85.97)"/>
                    <path d="M179.8,156.44v4.7a181,181,0,0,1-21.19,5.22v-4.7a181,181,0,0,0,21.19-5.22" transform="translate(0 -85.97)"/>
                    <path d="M158.61,161.66v4.7q-2.56.48-5.22.92v-4.7q2.66-.44,5.22-.92" transform="translate(0 -85.97)"/>
                    <path d="M153.39,162.58v4.7q-5,.81-10.23,1.46V164q5.26-.64,10.23-1.46" transform="translate(0 -85.97)"/>
                  </g>
                </g>
              </g>
              <polygon points="135.59 87.37 135.59 92.07 135.04 80.92 135.04 76.22 135.59 87.37" fill="#080808"/>
              <polygon points="78.83 76.1 78.83 80.79 78.29 92.23 78.29 87.53 78.83 76.1"/>
              <polygon points="78.83 76.22 78.83 80.92 78.65 92.19 78.65 87.49 78.83 76.22" fill="#090909"/>
              <polygon points="136.3 87.53 136.3 92.23 135.57 80.92 135.57 76.22 136.3 87.53"/>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path-7)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M135.59,173.35v4.7c-1.6.16-3.84.38-6.57.6V174c2.73-.22,5-.44,6.57-.6" transform="translate(0 -85.97)" fill="#424242"/>
                    <path d="M129,174v4.7c-3.18.26-7,.53-11.27.74v-4.7c4.25-.21,8.09-.48,11.27-.74" transform="translate(0 -85.97)" fill="#404040"/>
                    <path d="M117.75,174.69v4.7c-2.6.12-5.35.23-8.2.29V175c2.85-.06,5.6-.17,8.2-.29" transform="translate(0 -85.97)" fill="#3e3e3e"/>
                    <path d="M109.55,175v4.7c-2,0-3.94.06-6,.06h-.52v-4.69h.52c2,0,4,0,6-.07" transform="translate(0 -85.97)" fill="#3d3d3d"/>
                    <path d="M103.08,175.05v4.69c-1.77,0-3.56,0-5.35-.07V175c1.79.05,3.58.07,5.35.08" transform="translate(0 -85.97)" fill="#3b3b3b"/>
                    <path d="M97.73,175v4.7c-1.52,0-3-.09-4.57-.16v-4.7c1.52.07,3,.13,4.57.16" transform="translate(0 -85.97)" fill="#3a3a3a"/>
                    <path d="M93.16,174.81v4.7c-1.34-.06-2.67-.14-4-.23v-4.7c1.32.09,2.65.17,4,.23" transform="translate(0 -85.97)" fill="#383838"/>
                    <path d="M89.17,174.58v4.7c-1.19-.08-2.37-.18-3.54-.29V174.3c1.17.1,2.35.2,3.54.28" transform="translate(0 -85.97)" fill="#363636"/>
                    <path d="M85.63,174.3V179c-1.07-.09-2.14-.2-3.2-.33V174c1.06.13,2.13.24,3.2.34" transform="translate(0 -85.97)" fill="#353535"/>
                    <path d="M82.43,174v4.7c-1-.11-2-.24-3-.37v-4.7c1,.13,2,.26,3,.37" transform="translate(0 -85.97)" fill="#333"/>
                    <path d="M79.48,173.59v4.7l-.83-.12v-4.7l.83.12" transform="translate(0 -85.97)" fill="#323232"/>
                  </g>
                </g>
              </g>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path-8)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M136.3,173.51v4.7c-.3,0-2.86.33-7,.67v-4.7c4.13-.33,6.69-.64,7-.67" transform="translate(0 -85.97)" fill="#0c0c0c"/>
                    <path d="M129.31,174.18v4.7c-2.74.23-6.16.47-10.07.66v-4.7c3.91-.19,7.33-.43,10.07-.66" transform="translate(0 -85.97)" fill="#0c0c0c"/>
                    <path d="M119.24,174.84v4.7c-2.51.12-5.23.22-8.09.28v-4.7c2.86-.06,5.58-.16,8.09-.28" transform="translate(0 -85.97)" fill="#0c0c0c"/>
                    <path d="M111.15,175.12v4.7q-3,.08-6.29.07h-.54v-4.7h.54q3.24,0,6.29-.07" transform="translate(0 -85.97)" fill="#0b0b0b"/>
                    <path d="M104.32,175.19v4.7c-1.83,0-3.7,0-5.58-.07v-4.7c1.88,0,3.75.07,5.58.07" transform="translate(0 -85.97)" fill="#0b0b0b"/>
                    <path d="M98.74,175.12v4.7c-1.61,0-3.22-.1-4.84-.18V175c1.62.07,3.23.13,4.84.17" transform="translate(0 -85.97)" fill="#0b0b0b"/>
                    <path d="M93.9,175v4.69q-2.15-.09-4.29-.24v-4.7c1.43.1,2.86.18,4.29.25" transform="translate(0 -85.97)" fill="#0b0b0b"/>
                    <path d="M89.61,174.7v4.7c-1.28-.09-2.57-.2-3.85-.31v-4.7c1.28.12,2.57.22,3.85.31" transform="translate(0 -85.97)" fill="#0a0a0a"/>
                    <path d="M85.76,174.39v4.7c-1.18-.11-2.35-.23-3.52-.37V174c1.17.14,2.34.26,3.52.37" transform="translate(0 -85.97)" fill="#0a0a0a"/>
                    <path d="M82.24,174v4.7c-1.1-.13-2.2-.27-3.28-.42v-4.7c1.08.16,2.18.3,3.28.42" transform="translate(0 -85.97)" fill="#0a0a0a"/>
                    <path d="M79,173.6v4.7l-.67-.09v-4.7l.67.09" transform="translate(0 -85.97)" fill="#090909"/>
                  </g>
                </g>
              </g>
              <path d="M214,129.59c0,15.53-28.34,29.24-70.83,34.45l.54,11.25-2.69.34a334.75,334.75,0,0,1-37.27,2.17,188.17,188.17,0,0,1-30.9-2.24l-2.23-.38L70.79,164C28.33,158.82,0,145.11,0,129.59s28.33-29.24,70.81-34.45V86H143.1v9.16C185.63,100.34,214,114.06,214,129.59Zm-76.14,32.18C178.6,157.2,206,144.27,206,129.59S178.6,102,137.85,97.41l-2.77-.3V88.72H78.82v8.39l-2.76.31C35.36,102,8,114.93,8,129.59s27.34,27.59,68,32.17l2.77.31-.54,11.44a188.59,188.59,0,0,0,26.57,1.68,292,292,0,0,0,31.44-1.68l-.73-11.31,2.28-.43" transform="translate(0 -85.97)"/>
              <path d="M135.08,88.72v8.39l2.77.3C178.6,102,206,114.91,206,129.59s-27.37,27.61-68.12,32.18l-2.81.31-56.21.12-2.77-.44c-40.7-4.58-68-17.5-68-32.17s27.34-27.59,68-32.17l2.76-.31V88.72Z" transform="translate(0 -85.97)" fill="#444"/>
              <path d="M135,162.2l.55,11.15c-5.36.55-18,1.7-32,1.7a174.94,174.94,0,0,1-24.95-1.58l.18-11.27Z" transform="translate(0 -85.97)" fill="#3c3c3c"/>
              <path d="M135.57,162.2l.73,11.31a292,292,0,0,1-31.44,1.68,188.59,188.59,0,0,1-26.57-1.68V162.2h.54l-.18,11.27a174.94,174.94,0,0,0,24.95,1.58c13.94,0,26.63-1.15,32-1.7L135,162.2Z" transform="translate(0 -85.97)" fill="#0b0b0b"/>
              <polygon points="72.84 89.59 72.84 94.29 70.61 93.91 70.61 89.21 72.84 89.59"/>
              <polygon points="143.69 89.32 143.69 94.02 141.01 94.35 141.01 89.65 143.69 89.32"/>
              <g style={{isolation: 'isolate'}}>
                <g clipPath="url(#clip-path-9)">
                  <g style={{isolation: 'isolate'}}>
                    <path d="M141,175.63v4.69c-.49.07-4.37.54-10.35,1v-4.7c6-.49,9.86-1,10.35-1" transform="translate(0 -85.97)"/>
                    <path d="M130.66,176.65v4.7c-3.34.27-7.33.55-11.74.77v-4.7c4.41-.22,8.4-.5,11.74-.77" transform="translate(0 -85.97)"/>
                    <path d="M118.92,177.42v4.7c-2.76.13-5.69.24-8.73.3v-4.69c3-.07,6-.18,8.73-.31" transform="translate(0 -85.97)"/>
                    <path d="M110.19,177.73v4.69c-2.1.05-4.26.08-6.45.08h-.57v-4.7h.57c2.19,0,4.35,0,6.45-.07" transform="translate(0 -85.97)"/>
                    <path d="M103.17,177.8v4.7c-2,0-3.92,0-5.91-.08v-4.7c2,.05,4,.07,5.91.08" transform="translate(0 -85.97)"/>
                    <path d="M97.26,177.72v4.7q-2.54-.06-5.1-.18v-4.7q2.57.12,5.1.18" transform="translate(0 -85.97)"/>
                    <path d="M92.16,177.54v4.7c-1.5-.07-3-.16-4.51-.27v-4.69c1.5.1,3,.19,4.51.26" transform="translate(0 -85.97)"/>
                    <path d="M87.65,177.28V182c-1.35-.09-2.71-.2-4.05-.32V177c1.34.12,2.7.23,4.05.33" transform="translate(0 -85.97)"/>
                    <path d="M83.6,177v4.7c-1.24-.12-2.47-.24-3.69-.38v-4.7c1.22.14,2.45.27,3.69.38" transform="translate(0 -85.97)"/>
                    <path d="M79.91,176.57v4.7c-1.16-.14-2.31-.28-3.45-.45v-4.69c1.14.16,2.29.3,3.45.44" transform="translate(0 -85.97)"/>
                    <path d="M76.46,176.13v4.69c-1.11-.15-2.2-.32-3.28-.5v-4.7c1.08.18,2.17.35,3.28.51" transform="translate(0 -85.97)"/>
                    <path d="M73.18,175.62v4.7l-.34-.06v-4.7l.34.06" transform="translate(0 -85.97)"/>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg className={props.settings.open.value ? '' : 'hide' } id="opladerIndgang" viewBox="0 0 393.98 319.94">
        <circle cx="127.93" cy="255.01" r="55" stroke="#000" strokeMiterlimit="10" strokeWidth="19.87"/>
        <circle cx="266.93" cy="255.01" r="55" stroke="#000" strokeMiterlimit="10" strokeWidth="19.87"/>
        <circle cx="196.93" cy="133.01" r="55" stroke="#000" strokeMiterlimit="10" strokeWidth="19.87"/>
        <circle cx="329.04" cy="133.01" r="55" stroke="#000" strokeMiterlimit="10" strokeWidth="19.87"/>
        <circle cx="64.93" cy="132.01" r="55" stroke="#000" strokeMiterlimit="10" strokeWidth="19.87"/>
        <circle cx="127.93" cy="36.01" r="30.5" stroke="#000" strokeMiterlimit="10" strokeWidth="11.02"/>
        <circle cx="266.93" cy="36.01" r="30.5" stroke="#000" strokeMiterlimit="10" strokeWidth="11.02"/>
        <circle cx="128.93" cy="37.01" r="1" stroke="#000" strokeMiterlimit="10" strokeWidth="19.87"/>
        <circle cx="127.93" cy="36.01" r="3" fill="#ccc"/>
        <circle cx="64.93" cy="132.01" r="3" fill="#ccc"/>
        <circle cx="197.12" cy="133.09" r="3" fill="#ccc"/>
        <circle cx="329.04" cy="134.1" r="3" fill="#ccc"/>
        <circle cx="128.11" cy="255.12" r="3" fill="#ccc"/>
        <circle cx="267.13" cy="255.11" r="3" fill="#ccc"/>
        <circle cx="267.93" cy="36.01" r="3" fill="#ccc"/>
      </svg>
      <svg id="oplader" className={props.settings.cable.value ? '' : 'hide' }viewBox="0 0 191.75 424">
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
export default GreenbowBox