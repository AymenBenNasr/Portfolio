import React from 'react'
import {Button} from "@material-ui/core"

import './Button.css'

const CustomButton = ({link , text , icon}) => {
    return (
        <Button 
        className="custom_button" 
        endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}>

        <span className="btn_txt">{text}</span>
        </Button>
    )
}

export default CustomButton
