import React, { useState, createContext } from 'react';
import moment from 'moment';

export const FilterContext = createContext();

export const FilterProvider = (props) => {
	const [filter, setFilter] = useState({
		checkIn: moment(),
		checkOut: moment().add(1, 'days'),
		country: "Todos los paises",
		price: "Cualquier precio",
		size: "Cualquier tamaño"
	});

	return (
		<FilterContext.Provider value={[filter, setFilter]}>
			{props.children}
		</FilterContext.Provider>
	);
};
