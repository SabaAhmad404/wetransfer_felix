import React, { useState, useEffect } from 'react';

const targetDate = new Date('2023-12-31T23:59:59').getTime(); // Replace with your target date

function CountdownTimer() {
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);

      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to add leading zeros to numbers
  function addLeadingZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  return (
    <div className="count-down">
      <h1 className="timer-name">Countdown Timer</h1>
      <div className="timer-container">
        <div className="days">
          <h2>Days</h2>
          <div className="colon">
            <span className="time-remain">{addLeadingZero(timeRemaining.days)}</span>
            <span className="span-colon">:</span>
          </div>
        </div>
        <div className="days">
          <h2>Hours</h2>
          <div className="colon">
            <span className="time-remain">
              {addLeadingZero(timeRemaining.hours)}
            </span>
            <span className="span-colon">:</span>
          </div>
        </div>
        <div className="days">
          <h2>Minutes</h2>
          <div className="colon">
            <span className="time-remain">{addLeadingZero(timeRemaining.minutes)}</span>
            <span className="span-colon">:</span>
          </div>
        </div>
        <div className="days">
          <h2>Seconds </h2>
          <div className="colon">
            {' '}
            <span className="time-remain">
              {addLeadingZero(timeRemaining.seconds)}
              {' '}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
