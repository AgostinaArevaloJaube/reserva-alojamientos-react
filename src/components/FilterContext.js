import React, { useState, createContext } from 'react';
import moment from 'moment';

export const FilterContext = createContext();

export const FilterProvider = (props) => {
	const [filter, setFilter] = useState({
		checkIn: moment(),
		checkOut: moment().add(1, 'days'),
		country: undefined,
		price: undefined,
		size: undefined
	});

	return (
		<FilterContext.Provider value={[filter, setFilter]}>
			{props.children}
		</FilterContext.Provider>
	);
};
