


import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

import Timer from './shared/timer';

const ForTimeTimer = () => {


  const [time, setTime] = useState(new Date(new Date(new Date().getTime() + 10 * 1000)));
  const [userInput, setUserInput] = useState(0);


  const setTimeInterval = (minutes: number) => {
    return new Date(new Date().getTime() + minutes * 60 * 1000);
  }

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: new Date(), onExpire: () => console.warn('onExpire called') });

  console.log(seconds)
  return (
    <>
      <input 
        type='number' 
        value={userInput} 
        onChange={(e) => setUserInput(parseInt(e.target.value))}
        style={
          { 
            width: '50px' 
          }}
      />
    {isRunning && 
      <p>
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </p>}
    </>);
};

export default ForTimeTimer;