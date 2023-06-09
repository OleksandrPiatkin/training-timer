import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

type Props = {
	expiryTimestamp: Date;
}

const Timer = ({ expiryTimestamp }: Props)  => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <p>
    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </p>
  );
};

export default Timer;