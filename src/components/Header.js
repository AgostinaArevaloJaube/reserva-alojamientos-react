// dependencies
import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';
import styled from 'styled-components';

// moment.js
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
	const [filter] = useContext(FilterContext);
	const format = 'dddd[,] D [de] MMMM [de] YYYY';
	const checkInDateFormat = moment(filter.checkIn).format(format);
	const checkOutDateFormat = moment(filter.checkOut).format(format);

	const setFilterCountryText = (country) => {
		return country === 'Todos los paises' ? false : `Destino: ${country}`;
	};

	const setFilterPriceText = (price) => {
		switch (price) {
			case '1':
				return 'Precio de los hoteles: económicos ';
			case '2':
				return 'Precio de los hoteles: standards';
			case '3':
				return 'Precio de los hoteles: distinguidos';
			case '4':
				return 'Precio de los hoteles: lujosos ';
			default:
				return false;
		}
	};

	const setFilterSizeText = (size) => {
		switch (size) {
			case 'Hotel pequeños':
				return 'Tamaño de los hoteles: pequeños ';
			case 'Hotel mediano':
				return 'Tamaño de los hoteles: medianos ';
			case 'Hotel grande':
				return 'Tamaño de los hoteles: grandes ';
			default:
				return false;
		}
	};

	return (
		<HeaderContainer>
			<h1>Hoteles</h1>
			<br />
			<p>
				desde el <b>{checkInDateFormat}</b> hasta el{' '}
				<b>{checkOutDateFormat} </b>
			</p>
			<b>{setFilterCountryText(filter.country)}</b>
			<b>{setFilterPriceText(filter.price)}</b>
			<b>{setFilterSizeText(filter.size)}</b>
		</HeaderContainer>
	);
};

export default Header;
