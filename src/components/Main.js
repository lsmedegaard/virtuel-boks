import React from 'react'
import SVG from './GreenbowBox'
import Control from './Control'
import '../scss/main.scss'
import { useState } from 'react'


function Main () {

  const startCharging = () => {
    console.log('opladning startet')
  }

  const stopCharging = () => {
    console.log('opladning stoppet')
  }

  const [settings, setSettings] = useState({
    on: {
      name: 'on',
      value: false,
      startFunction:  () => {},
      stopFunction:  () => {},
      duration: null,
      timer: false,
      dependencies: [],
      defaultText: 'Tænd',
      changeText: 'Sluk'
    },
    open: {
      name: 'open',
      value: false,
      startFunction: () => {},
      stopFunction: () => {},
      duration: null,
      timer: false,
      dependencies: [
        {
          setting: 'cable',
          requiredValue: false,
          message: 'you must remove the cable before closing the lid'
        }
      ],
      defaultText: 'Åben',
      changeText: 'Luk'
    },
    cable: {
      name: 'cable',
      value: false,
      startFunction: () => {},
      stopFunction: () => {},
      duration: null,
      timer: false,
      dependencies: [
        {
          setting: 'open',
          requiredValue: true,
          message: 'You must open the lid before you can insert cable'
        },
        {
          setting: 'charge',
          requiredValue: false,
          message: 'You must stop charging before removing the cable'
        }
      ],
      defaultText: 'Indsæt oplader',
      changeText: 'Fjern oplader'
    },
    connect: {
      name: 'connect',
      value: false,
      startFunction: () => {},
      stopFunction: () => {},
      duration: null,
      timer: false,
      dependencies: [],
      defaultText: 'Tilslut bil',
      changeText: 'Afmonter fra bil'
    },
    charge: {
      name: 'charge',
      value: false,
      startFunction: startCharging,
      stopFunction: stopCharging,
      duration: null,
      timer: true,
      dependencies: [{
        setting: 'connect',
        requiredValue: true,
        message: 'You must connect the cable to the car before charging can start'
      }, {
        setting: 'on',
        requiredValue: true,
        message: 'You must turn on the box before you can charge'
      }, {
        setting: 'cable',
        requiredValue: true,
        message: 'You must insert cable to box before charging'
      }, {
        setting: 'open',
        requiredValue: true,
        message: 'Lid not open'
      }],
      defaultText: 'Start opladning',
      changeText: 'Stop opladning'
    }
  })




  return (
    
    <div className="grid">
      <SVG settings={settings}/> 
      <Control settings={settings} setSettings={setSettings}/>
    </div>


  )
}

export default Main