import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

import styled from 'styled-components';

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0;
	padding: 3%;
	color: #e7315d;
`;

const Header = () => {
	const [filter, setFilter] = useContext(FilterContext);

	return (
		<HeaderContainer>
			<h1>Hoteles</h1>
			{/* Acá va a tomar lo que tenga Filters en fecha */}
			<br />
			<p>
				desde el <b>{filter.checkIn}</b> hasta el <b>{filter.checkOut} </b>
				en un hotel de rango {filter.price}, de tamaño {filter.size} en {filter.country}
			</p>
		</HeaderContainer>
	);
};

export default Header;
