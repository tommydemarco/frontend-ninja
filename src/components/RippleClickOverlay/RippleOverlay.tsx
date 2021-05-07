import { useState, useEffect } from "react"

import "./RippleOverlay.scss"

const RippleOverlay: React.FC<React.ReactNode> = ({ children }) => {

    const [ clicked, setClicked ] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setClicked(false)
        }, 300)
    }, [clicked])

    const onClickRipple = () => {
        setClicked(true)
    }

    const classes = ["ripple-overlay"]
    if(clicked) classes.push("clicked")

    return (
        <div onClick={onClickRipple} className={classes.join(" ")}>
            <style>
                
            </style>
            {children}
        </div>
    )
}

export default RippleOverlay
