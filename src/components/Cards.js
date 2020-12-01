import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';
import styled from 'styled-components';
import moment from 'moment';

import Card from './Card';
import hotelsData from '../scripts/data';

const CardsContainer = styled.section`
	margin: 0 auto;
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 3rem 3rem;

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		width: 100%;
	}
`;

export default function Cards() {
	const [filter, setFilter] = useContext(FilterContext);

	const filterDate = (hotel) => {
		// guardar el format
		if (
			Object.keys(filter.checkIn).length === 0 ||
			Object.keys(filter.checkOut).length === 0 ||
			(filter.checkIn.format('YYYY-MM-DD') >=
				moment(hotel.availabilityFrom).format('YYYY-MM-DD') &&
				filter.checkOut.format('YYYY-MM-DD') <=
					moment(hotel.availabilityTo).format('YYYY-MM-DD'))
		) {
			return true;
		}
	};
	const filterCountry = (hotel) => {
		if (
			filter.country === 'Todos los paises' ||
			filter.country === hotel.country
		) {
			return true;
		} else {
			return false;
		}
	};

	const filterPrice = (hotel) => {
		if (
			filter.price === 'Cualquier precio' ||
			Number(filter.price) === hotel.price
		) {
			return true;
		} else {
			return false;
		}
	};

	const filterSize = (hotel) => {
		if (
			filter.size === 'Cualquier tamaño' ||
			(filter.size === 'Hotel pequeño' && hotel.rooms <= 10) ||
			(filter.size === 'Hotel mediano' &&
				hotel.rooms <= 20 &&
				hotel.rooms >= 10) ||
			(filter.size === 'Hotel grande' && hotel.rooms >= 20)
		) {
			return true;
		}
	};

	const validate = (hotel) => {
		return (
			filterDate(hotel) &&
			filterCountry(hotel) &&
			filterPrice(hotel) &&
			filterSize(hotel)
		);
	};

	const hotelList = hotelsData.filter(validate);

	return (
		<CardsContainer>
			{hotelList.length > 0 ? (
				hotelList.map((hotel) => <Card {...hotel} key={hotel.slug} />)
			) : (
				<p>No hay hoteles disponibles</p>
			)}
		</CardsContainer>
	);
}
