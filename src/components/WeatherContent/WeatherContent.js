import React from 'react';

export default function WeatherContent({ data, city }) {
	return (
		<>
			{data && city ? (
				<div className='content-center weather-content'>
					<h1>{city}</h1>
					<ul className='description-items'>
						<li>Feels like {Math.round(data.feelsLike)}°C.</li>
						<li>{data.description}.</li>
						<li>{data.main}</li>
					</ul>
					<h2>{Math.round(data.temp)}°C</h2>
					<ul className='weather-items'>
						<li>{data.windSpeed}m/s N</li>
						<li>{data.pressure}hPa</li>
						<li>humidity: {data.humidity}%</li>
						<li>Dew point: {Math.round(data.temp)}°C</li>
						<li>visibility: {data.visibility}.0km</li>
					</ul>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
}
