// dependencies
import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';
import styled from 'styled-components';
import Filters from './Filters';

// moment.js
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const HeroContainer = styled.section`
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
		return country === 'Todos los paises' ? false : ` en ${country}`;
	};

	const setFilterPriceText = (price) => {
		switch (price) {
			case '1':
				return ' de precios económicos';
			case '2':
				return ' de precios standards';
			case '3':
				return ' de precios distinguidos';
			case '4':
				return ' de precios lujosos';
			default:
				return false;
		}
	};

	const setFilterSizeText = (size) => {
		switch (size) {
			case 'Hotel pequeño':
				return ' y de tamaños pequeños';
			case 'Hotel mediano':
				return ' y de tamaños medianos';
			case 'Hotel grande':
				return ' y de tamaños grandes';
			default:
				return false;
		}
	};

	return (
		<header>
			<HeroContainer>
				<h1>Hoteles</h1>
				<br />
				<p>
					desde el <b>{checkInDateFormat}</b> hasta el{' '}
					<b>{checkOutDateFormat}</b>
					{setFilterCountryText(filter.country)}
					{setFilterPriceText(filter.price)}
					{setFilterSizeText(filter.size)}.
				</p>
			</HeroContainer>
			<Filters />
		</header>
	);
};

export default Header;
