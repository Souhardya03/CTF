
import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
	const countdownDate = new Date('2024-10-24T09:00:00');
	//end date
	const [state, setState] = useState(new Date());
	//state variable to store days, hours, minutes and seconds

	useEffect(() => {
		const interval = setInterval(() => setNewTime(), 1000);
		//indicating function to rerun every 1000 milliseconds (1 second)

		if (state.seconds < 0) {
			clearInterval(interval);
			//Stop the rerun once state.seconds is less than zero
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				(distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			// get number of minutes from the remaining time after removing hours
			let minutes = Math.floor(
				(distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
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
		<div className="lg:mt-20 animate-scale mt-10 text-[0.89rem] md:text-lg lg:text-lg trick-or-treats font-bold">
			{state.second < 0 ? (
				<div>Happy Hacking!</div>
			) : (
				<div className="flex items-center gap-1 lg:gap-3">
					<div className="flex p-4 rounded-md flex-col justify-center items-center bg-[#1a1919b5]">
						<div>{state.days || "00"}</div>
						<div className="text-yellow-400 text-xs">Days</div>
					</div>
					<div>:</div>
					<div className="flex p-4 rounded-md flex-col justify-center items-center bg-[#1a1919b5]">
						<div>{state.hours || "00"}</div>
						<div className="text-yellow-400 text-xs">Hours</div>
					</div>
					<div>:</div>
					<div className="flex p-4 rounded-md flex-col justify-center items-center bg-[#1a1919b5]">
						<div>{state.minutes || "00"}</div>
						<div className="text-yellow-400 text-xs">Minutes</div>
					</div>
					<div>:</div>
					<div className="flex p-4 rounded-md flex-col justify-center items-center bg-[#1a1919b5]">
						<div>{state.seconds || "00"}</div>
						<div className="text-yellow-400 text-xs">Seconds</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Timer;
