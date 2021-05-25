import { useState, useEffect } from "react"

import "./Timer.scss";

const Timer = () => {

  const [ timer, setTimer ] = useState(20)

  useEffect(() => {

  })

  return (
    <div className="timer">
      <span className="timer__number">
        {timer}
      </span>
    </div>
  )
}

export default Timer;