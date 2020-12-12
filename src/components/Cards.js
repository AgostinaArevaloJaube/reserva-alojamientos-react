// dependencies
import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';
import moment from 'moment';
import styled from 'styled-components';

// components
import Card from './Card';

// data
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

	.errorMessage {
		color: #f08080;
		text-align: center;
	}
`;

export default function Cards() {
	const [filter] = useContext(FilterContext);
	const format = 'YYYY-MM-DD';
	const checkInDate = moment(filter.checkIn).format(format);
	const checkOutDate = moment(filter.checkOut).format(format);

	const filterDate = (hotel) => {
		return (
			Object.keys(filter.checkIn).length === 0 ||
			Object.keys(filter.checkOut).length === 0 ||
			(checkInDate >= moment(hotel.availabilityFrom).format(format) &&
				checkOutDate <= moment(hotel.availabilityTo).format(format))
		);
	};
	const filterCountry = (hotel) => {
		return (
			filter.country === 'Todos los paises' ||
			filter.country === hotel.country
		);
	};

	const filterPrice = (hotel) => {
		return (
			filter.price === 'Cualquier precio' ||
			Number(filter.price) === hotel.price
		);
	};

	const filterSize = (hotel) => {
		return (
			filter.size === 'Cualquier tamaño' ||
			(filter.size === 'Hotel pequeño' && hotel.rooms <= 10) ||
			(filter.size === 'Hotel mediano' &&
				hotel.rooms <= 20 &&
				hotel.rooms >= 10) ||
			(filter.size === 'Hotel grande' && hotel.rooms >= 20)
		);
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

	const displayHotels = (hotelList) => {
		const today = moment().format(format);

		if (hotelList.length === 0) {
			return (
				<p className="errorMessage">
					No hay hoteles que coincidan con la búsqueda seleccionada.
					Por favor, ¡seguí buscando!
				</p>
			);
		} else if (checkOutDate < checkInDate) {
			return (
				<p className="errorMessage">
					Por favor seleccioná una fecha de check-out posterior a la
					fecha de check-in
				</p>
			);
		} else if (checkInDate < today) {
			return (
				alert('Por favor seleccioná una fecha de check-in igual o posterior al día de hoy')
			);
		} else
			return hotelList.map((hotel) => (
				<Card {...hotel} key={hotel.slug} />
			));
	};

	return <CardsContainer>{displayHotels(hotelList)}</CardsContainer>;
}
