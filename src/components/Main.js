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
      changeText: 'Sluk',
      class: 'on-underline'
    },
    open: {
      name: 'open',
      value: false,
      startFunction: () => {},
      stopFunction: () => {},
      duration: null,
      timer: false,
      class: 'on-underline',
      dependencies: [
        {
          setting: 'cable',
          requiredValue: false,
          message: 'Du skal fjerne kablet, før du lukker lågen'
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
      class: 'cable-underline',
      dependencies: [
        {
          setting: 'open',
          requiredValue: true,
          message: 'Du skal åbne lågen, før du kan indsætte kablet'
        },
        {
          setting: 'charge',
          requiredValue: false,
          message: 'Du skal stoppe opladningen, før du fjerner kablet'
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
      defaultText: 'Tilslut til bil',
      changeText: 'Afmonter fra bil',
      class: 'connect-underline'
    },
    charge: {
      name: 'charge',
      value: false,
      startFunction: startCharging,
      stopFunction: stopCharging,
      duration: null,
      timer: true,
      class: 'charge-underline',
      dependencies: [{
        setting: 'connect',
        requiredValue: true,
        message: 'Du skal tilslutte kablet til bilen, før opladningen kan starte'
      }, {
        setting: 'on',
        requiredValue: true,
        message: 'Du skal først tænde boksen, før opladningen kan starte'
      }, {
        setting: 'cable',
        requiredValue: true,
        message: 'Du skal tilslutte kablet til boksen, før opladningen kan starte'
      }, {
        setting: 'open',
        requiredValue: true,
        message: 'Du skal åbne lågen, før opladningen kan starte'
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