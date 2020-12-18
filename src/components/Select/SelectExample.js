import React from 'react';
import { Select } from 'semantic-ui-react';
import * as data from '../../../API/cities.json';

const SelectExample = ({ onChange }) => {
	const countryOptions = data;

	function handleChange(e, data) {
		onChange(data);
	}
	return (
		<>
			<Select
				placeholder='Select your city'
				options={countryOptions}
				onChange={handleChange}
			/>
		</>
	);
};

export default SelectExample;
