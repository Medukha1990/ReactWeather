import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SelectExample from '../Select/SelectExample';
import WeatherContent from '../WeatherContent/WeatherContent';
import { useHistory } from 'react-router-dom';
import generateWeatherData from '../../helpers/helpers';

export function Home({ setSelectedCity }) {
	const [geolocation, setGeolocation] = useState(null);
	const [data, setData] = useState(null);
	const [city, setCity] = useState('');

	const history = useHistory();

	useEffect(() => {
		if (geolocation) {
			fetch(
				`http://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=0f2415534b87fd096d343e68f1efec35`,
			)
				.then((response) => response.json())
				.then((response) => {
					setData(generateWeatherData(response));
				});
		}
	}, [geolocation]);

	useEffect(() => {
		if (geolocation) {
			fetch(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geolocation.latitude}&longitude=${geolocation.longitude}&localityLanguage=en`,
			)
				.then((response) => response.json())
				.then((response) => setCity({ location: response.city }));
		}
	}, [geolocation]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((item) => {
			setGeolocation({
				latitude: item.coords.latitude,
				longitude: item.coords.longitude,
			});
		});
	}, []);

	const onSelectChange = (data) => {
		const { value } = data;
		setSelectedCity(value);
		history.push('/city');
	};

	return (
		<div className='content-center main-modal'>
			<WeatherContent data={data} city={city.location} />
			<h1>SELECT CITY</h1>
			<SelectExample onChange={onSelectChange} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		city: state.city,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setSelectedCity: (value) =>
			dispatch({ type: 'SET_CITY', payload: value }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
