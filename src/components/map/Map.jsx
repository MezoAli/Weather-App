import { useState } from "react";
import "./Map.css";

function MapComponent() {
	const [temp, setTemp] = useState({});
	const [location, setLocation] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	function handleForm(e) {
		e.preventDefault();
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4ed61d836273e839631b530335cecf00`
		)
			.then((res) => res.json())
			.then((data) => setTemp(data))
			.catch((err) => console.log(err));
		setIsLoading(false);
		setLocation("");
	}
	return (
		<>
			<form onSubmit={(e) => handleForm(e)}>
				<input
					className="input"
					type="text"
					value={location}
					placeholder="Enter City Name ..."
					onChange={(e) => setLocation(e.target.value)}
				/>
				<button className="btn btn-submit" type="submit">
					Submit
				</button>
			</form>
			<div className="data-container">
				{isLoading ? null : (
					<div className="name-temp-container">
						<div className="name-temp-container__main">
							<h1>{temp?.name}</h1>
							{temp.main ? (
								<p>{Math.round(temp?.main?.temp - 273)} Celisus</p>
							) : null}
						</div>
						<div className="name-temp-container__submain">
							<p>{temp.weather ? temp.weather[0].main : null}</p>
						</div>
					</div>
				)}
				{temp.main && temp.wind ? (
					<div className="fell-humidity-container">
						<div className="feels">
							<p>{Math.round(temp?.main?.feels_like - 273)}</p>
							<p>Feels Like</p>
						</div>
						<div className="humidity">
							<p>{temp?.main?.humidity} %</p>
							<p>Humidity</p>
						</div>
						<div className="wind">
							<p>{temp?.wind?.speed} MPH</p>
							<p>Winds</p>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
}

export default MapComponent;
