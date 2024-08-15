import React from 'react'
import { useState , useEffect } from 'react';



const Timer = () => {
    const countdownDate = new Date('10/24/2024');
    //end date
    const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  //state variable to store days, hours, minutes and seconds
  
    useEffect(() => {
      const interval = setInterval(() => setNewTime(), 1000);
      //indicating function to rerun every 1000 milliseconds (1 second)
  
      if(state.seconds < 0){
        clearInterval(interval)
      //Stop the rerun once state.seconds is less than zero
      }
    }, []);
  
    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date();
        //get current time now in milliseconds
        const distanceToDate = countdownDate - currentTime;
        //get difference dates in milliseconds
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        // get number of days from the difference in dates
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        // get number of minutes from the remaining time after removing hours
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
        // number of hours from the remaining time after removing seconds
  
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
        // a logic to add 0 in front of numbers such that 1 will be 01, 2 will be 02, and so on.
  
        setState({ days, hours, minutes, seconds });
        //Updating the state variable.
      }
    };


  return (
    <div className="p-28 ml-36 trick-or-treats font-bold">
    {state.second<0?
        <div>Happy Hacking!</div>:
        <div className='flex gap-3'>
            <p>{state.days || '00'} Days :</p>
            <p>{state.hours || '00'} Hours :</p>
            <p>{state.minutes || '00'} Minutes :</p>
            <p>{state.seconds || '00'} Seconds</p>
        </div>
    }

    </div>
  )
}

export default Timer