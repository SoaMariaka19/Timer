import React from 'react';
import CountdownTimer from './CountdownTimer';
import { Start } from './starter';
import './App.css';
import { ClockClassComponent } from './Clock/Clock';
export default function App() {
  const date_en_ms =  60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTime = NOW_IN_MS +date_en_ms;
  return (
    <div className='App'>
      <h1>Timer React</h1>
      <CountdownTimer targetDate={dateTime} />
      <Start/>
     {
    /* <>
    <ClockClassComponent></ClockClassComponent>
    </> */}
    </div>
  );

  }
