// dependencies
import React, { useContext, useState, useEffect } from 'react';
import { FilterContext } from './FilterContext';
import moment from 'moment';
import styled from 'styled-components';

// components
import Card from './Card';
import DateErrorModal from './DateErrorModal';

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
	const today = moment().format(format);
	const [open, setOpen] = useState(true);

	const compareDates = (availabilityFrom, availabilityTo) => {
		return (
			checkInDate >= moment(availabilityFrom).format(format) &&
			checkOutDate <= moment(availabilityTo).format(format)
		);
	};
	const compareSmallSize = (rooms) => {
		return filter.size === 'Hotel pequeño' && rooms <= 10;
	};

	const compareMediumSize = (rooms) => {
		return filter.size === 'Hotel mediano' && rooms <= 20 && rooms >= 10;
	};

	const compareBigSize = (rooms) => {
		return filter.size === 'Hotel grande' && rooms >= 20;
	};

	// filters functions
	const filterDate = (hotel) => {
		return (
			Object.keys(filter.checkIn).length === 0 ||
			Object.keys(filter.checkOut).length === 0 ||
			compareDates(hotel.availabilityFrom, hotel.availabilityTo)
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
			compareSmallSize(hotel.rooms) ||
			compareMediumSize(hotel.rooms) ||
			compareBigSize(hotel.room)
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

	const handleCloseModal = () => {
		setOpen(false);
	};

	useEffect(() => {
		return () => {
			setOpen(true);
		};
	}, [filter.checkIn]);

	const displayHotels = (hotelList) => {
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
					Por favor seleccioná una fecha de check-out posterior a
					lafecha de check-in
				</p>
			);
		} else if (checkInDate < today) {
			return (
				<DateErrorModal handleClose={handleCloseModal} open={open} />
			);
		} else
			return hotelList.map((hotel) => (
				<Card {...hotel} key={hotel.slug} />
			));
	};

	return <CardsContainer>{displayHotels(hotelList)}</CardsContainer>;
}
