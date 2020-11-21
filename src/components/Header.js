import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

import styled from 'styled-components';

// Moment.js
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const HeaderContainer = styled.header`
	margin: 0;
	padding: 3%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #457b9d;
	text-align: center;
`;

const Header = () => {
	const [filter, setFilter] = useContext(FilterContext);
	const format = 'dddd[,] D [de] MMMM [de] YYYY';
	const checkInDateFormat = moment(filter.checkIn).format(format);
	const checkOutDateFormat = moment(filter.checkOut).format(format);

	return (
		<HeaderContainer>
			<h1>Hoteles</h1>
			{/* Acá va a tomar lo que tenga Filters en fecha */}
			<br />
			<p>
				desde el <b>{checkInDateFormat}</b> hasta el{' '}
				<b>{checkOutDateFormat} </b>
				en un hotel de rango {filter.price}, de tamaño {filter.size} en{' '}
				{filter.country}
			</p>
		</HeaderContainer>
	);
};

export default Header;
