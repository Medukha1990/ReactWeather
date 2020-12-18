import React, { useState, useEffect } from 'react';
import WeatherContent from '../WeatherContent/WeatherContent';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import generateWeatherData from '../../helpers/helpers';

export function City({ city }) {
	const [data, setData] = useState(null);
	const history = useHistory();

	useEffect(() => {
		if (city) {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f2415534b87fd096d343e68f1efec35`,
			)
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
					setData(generateWeatherData(response));
				});
		}
	}, [city]);
	return (
		<div>
			<Button inverted color='orange' onClick={() => history.goBack()}>
				Back
			</Button>
			<WeatherContent data={data} city={city} />
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		city: state.city,
	};
};

export default connect(mapStateToProps, null)(City);
