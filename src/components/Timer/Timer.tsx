import "./Timer.scss";

interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {

  return (
    <div className='timer'>
      <h5 className="timer__number">
        {timer}
      </h5>
      <div className='hold left'>
        <div className='fill'></div>
      </div>
      <div className='hold right'>
        <div className='fill'></div>
      </div>
    </div>
  )
}

export default Timer;