export default function generateWeatherData(response) {
	const kelvin = 273.15;
	const meters = 1000;
	const dataItem = {
		feelsLike: response.main.feels_like / kelvin,
		humidity: response.main.humidity,
		pressure: response.main.pressure,
		temp: response.main.temp / kelvin,
		tempMax: response.main.temp_max,
		tempMin: response.main.temp_min,
		windSpeed: response.wind.speed,
		description: response.weather[0].description,
		main: response.weather[0].main,
		visibility: response.visibility / meters,
	};
	return dataItem;
}
