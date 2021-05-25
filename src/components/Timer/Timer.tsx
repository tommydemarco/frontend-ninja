import "./Timer.scss";

interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {

  return (
    <div className="timer">
      <h5 className="timer__number">
        {timer}
      </h5>
    </div>
  )
}

export default Timer;