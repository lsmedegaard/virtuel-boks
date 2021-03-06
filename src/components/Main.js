import React from 'react'
import SVG from './GreenbowBox'
import Control from './Control'
import '../scss/main.scss'
import { useState } from 'react'

let interval
let meterInterval

function Main () {

  const startTransaction = (messageQueue) => {
    const transaction = [{
      connectorId: null, //integer connectorId > 0
      idTag: 'idToken', //idToken
      meterStart: null, // integer
      timestamp: null, // dateTime
      reservationId: [] // integer array? 
    }]
    setMessageQueue([...messageQueue, transaction])
    
    // meterInterval = setInterval(() => 
    // {
    //   const meterValues = [{
    //     connectorId: null, //interger connectorId >= 0
    //     meterValue: 'meterValue', // meterValue
    //     transactionId: [] // interger
    //   }] 
    //   setMessageQueue([...messageQueue, meterValues])
    // }, 2000)

  }

  const stopTransaction = (messageQueue) => {
    console.log(messageQueue, 'opladning stoppet')
    clearInterval(meterInterval)
  }

  

  const powerUp = (messageQueue) => {
    const bootNotification = [
      2,
      'xxx',
      'BootNotification',
      {
        chargeBoxSerialNumber: '',
        chargePointModel: '',
        chargePointSerialNumber: '',
        chargePointVendor: '',
        firmwareVersion: '',
        iccid: '',
        imsi: '',
        meterSerialNumber: '',
        meterType: ''
      }
    ]
    setMessageQueue([...messageQueue, bootNotification])

    interval = setInterval(() => 
    {
      const heartbeat = [
        2,
        'xxx',
        'Heartbeat',
        {}
      ]
      setMessageQueue([...messageQueue, heartbeat])
    }, 1000)
  }
  

  const powerDown = () => {
    clearInterval(interval)
  }



  const [messageQueue, setMessageQueue] = useState([])
   
  const [settings, setSettings] = useState({
    on: {
      name: 'on',
      value: false,
      startFunction: messageQueue => powerUp(messageQueue),
      stopFunction:  powerDown,
      duration: '',
      timer: false,
      dependencies: [],
      defaultText: 'T??nd',
      changeText: 'Sluk',
      type: 'toggle'
    },
    open: {
      name: 'open',
      value: false,
      startFunction: () => {},
      stopFunction: () => {},
      duration: '',
      timer: false,
      dependencies: [
        {
          setting: 'cable',
          requiredValue: false,
          message: 'Du skal fjerne kablet, f??r du lukker l??gen'
        }
      ],
      defaultText: '??ben',
      changeText: 'Luk'
    },
    cable: {
      name: 'cable',
      value: false,
      startFunction: () => {},
      stopFunction: () => {},
      duration: '',
      timer: false,
      dependencies: [
        {
          setting: 'open',
          requiredValue: true,
          message: 'Du skal ??bne l??gen, f??r du kan inds??tte kablet'
        },
        {
          setting: 'charge',
          requiredValue: false,
          message: 'Du skal stoppe opladningen, f??r du fjerner kablet'
        }
      ],
      defaultText: 'Inds??t oplader',
      changeText: 'Fjern oplader'
    },
    connect: {
      name: 'connect',
      value: false,
      startFunction: () => {},
      stopFunction: () => {},
      duration: '',
      timer: false,
      dependencies: [],
      defaultText: 'Tilslut til bil',
      changeText: 'Afmonter fra bil',
    },
    charge: {
      name: 'charge',
      value: false,
      startFunction: messageQueue => startTransaction(messageQueue),
      stopFunction: messageQueue => stopTransaction(messageQueue),
      duration: '',
      timer: true,
      dependencies: [{
        setting: 'connect',
        requiredValue: true,
        message: 'Du skal tilslutte kablet til bilen, f??r opladningen kan starte'
      }, {
        setting: 'on',
        requiredValue: true,
        message: 'Du skal f??rst t??nde boksen, f??r opladningen kan starte'
      }, {
        setting: 'cable',
        requiredValue: true,
        message: 'Du skal tilslutte kablet til boksen, f??r opladningen kan starte'
      }, {
        setting: 'open',
        requiredValue: true,
        message: 'Du skal ??bne l??gen, f??r opladningen kan starte'
      }],
      defaultText: 'Start opladning',
      changeText: 'Stop opladning'
    }
  })

  return (
    
    <div>
      <div onClick={() => console.log(messageQueue)}>se messageQueue</div>
      <div className="grid">
        <SVG settings={settings}/> 
        <Control messageQueue={messageQueue} settings={settings} setSettings={setSettings}/>
      </div>
    </div>


  )
}

export default Main