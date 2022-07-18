import "./App.css";
import Map from "./components/map/Map";

function App() {
	return (
		<>
			<div className="container">
				<Map />
			</div>
		</>
	);
}

export default App;

// const options = {
// 		method: "GET",
// 		headers: {
// 			"X-RapidAPI-Key": "7191d0e4bfmsh294e03e008625edp11a573jsncd94462ef84c",
// 			"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
// 		},
// 	};
// 	useEffect(() => {
// 		fetch(
// 			"https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km",
// 			options
// 		)
// 			.then((response) => response.json())
// 			.then((response) => console.log(response))
// 			.catch((err) => console.error(err));
// 	}, []);
// }
