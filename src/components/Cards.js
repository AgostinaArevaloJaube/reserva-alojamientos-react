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
		if (
			Object.keys(filter.checkIn).length === 0 ||
			Object.keys(filter.checkOut).length === 0 ||
			(checkInDate >= moment(hotel.availabilityFrom).format(format) &&
				checkOutDate <= moment(hotel.availabilityTo).format(format))
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
				<p className="errorMessage">
					Por favor seleccioná una fecha de check-in igual o posterior
					al día de hoy
				</p>
			);
		} else
			return hotelList.map((hotel) => (
				<Card {...hotel} key={hotel.slug} />
			));
	};

	return <CardsContainer>{displayHotels(hotelList)}</CardsContainer>;
}
