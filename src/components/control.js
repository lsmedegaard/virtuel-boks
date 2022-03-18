import React from "react";
import Button from "./button";
import "../scss/control.scss"
import NotConnected from "./NotConnected";
import Connected from "./Connected";
import { useState } from "react";



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
            setError(false)
            return false
        }
    }


    return (
    <div className="control-container">
        <div>
            <div className="controls">
            <Button updateSettings={updateSettings('on')} defaultText={'Tænd'} changeText={'Sluk'} />
            <Button updateSettings={updateSettings('open')} defaultText={'Åben'} changeText={'Luk'} />
            <Button updateSettings={updateSettings('cable')} defaultText={'Indsæt oplader'} changeText={'Fjern oplader'} />
            <Button updateSettings={updateSettings('connect')} defaultText={'Tilslut bil'} changeText={'Afmonter fra bil'} />
            <Button updateSettings={updateSettings('charge')} defaultText={'Start opladning'} changeText={'Stop opladning'} />
            <NotConnected settings={props.settings}/>
            <Connected settings={props.settings}/>
            </div>
            <div className="">
                <div className="popUp" style={{visibility: error ? 'visible' : 'hidden'}}>{error}</div>
            </div>
        </div>
    </div>

    )
}

export default Control
