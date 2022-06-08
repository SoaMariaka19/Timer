import React from 'react';
import { ClockClassComponent } from './Clock/Clock';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';
const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please restart</p>
      <ClockClassComponent/>
    </div>
  );
};

const ShowCounter = ({hours, minutes, seconds }) => {
  return (
    <div className="show-counter App">
      <a
        className="countdown-link"
      >
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  if (hours + minutes + seconds <= 0) {
    return <ExpiredNotice/>;
  } 
  else {
    return (
      <ShowCounter
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
