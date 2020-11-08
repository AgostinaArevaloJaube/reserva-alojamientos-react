import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

export const FilterProvider = (props) => {
	const [filter, setFilter] = useState({
		checkIn: 'hola',
		checkOut: 'hola',
		country: 'hola',
		price: 'react',
		size: 'mmgvo'
	});

	return (
		<FilterContext.Provider value={[filter, setFilter]}>
			{props.children}
		</FilterContext.Provider>
	);
};
