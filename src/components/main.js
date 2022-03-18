import React from "react";
import SVG from "./SVG";
import Control from "./control"
import "../scss/main.scss"
import { useState } from "react";


function Main () {

    const [settings, setSettings] = useState({
        on: {
            value: false,
            dependencies: []
        },
        open: {
            value: false,
            dependencies: [
                {
                    setting: "cable",
                    requiredValue: false,
                    message: "you must remove the cable before closing the lid"
                }
            ]
        },
        cable: {
            value: false,
            dependencies: [
                {
                    setting: "open",
                    requiredValue: true,
                    message: "You must open the lid before you can insert cable"
                },
                {
                    setting: "charge",
                    requiredValue: false,
                    message: "You must stop charging before removing the cable"
                }
            ]
        },
        connect: {
            value: false,
            dependencies: []
        },
        charge: {
            value: false,
            dependencies: [{
                setting: "connect",
                requiredValue: true,
                message: "You must connect the cable to the car before charging can start"
            }, {
                setting: "on",
                requiredValue: true,
                message: "You must turn on the box before you can charge"
            }, {
                setting: "cable",
                requiredValue: true,
                message: "You must insert cable to box before charging"
            }, {
                setting: "open",
                requiredValue: true,
                message: "Lid not open"
            }]

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