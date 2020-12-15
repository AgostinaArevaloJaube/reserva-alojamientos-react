// dependencies
import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

export const FilterProvider = (props) => {
	const [filter, setFilter] = useState({
		checkIn: {},
		checkOut: {},
		country: "Todos los paises",
		price: "Cualquier precio",
		size: "Cualquier tamaño",
	});

	return (
		<FilterContext.Provider value={[filter, setFilter]}>
			{props.children}
		</FilterContext.Provider>
	);
};
