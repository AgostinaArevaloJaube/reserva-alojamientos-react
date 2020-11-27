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

	/*
		1- Traer el estado. ok
		2- Generar una función validadora que llame a todas las funciones filtros
		3- Esas funciones filtros tienen que comparar el estado actual vs hotelsData, devolviendo true en caso de que la condición se cumpla
		4- Luego, hacer un filter dentro de una variable, que llame a la funcion validadora y pase como parámetro un hotel traido del hotelsData
	*/
	const filterDate = (hotel) => {
		if (
			filter.checkIn >= moment(hotel.availabilityFrom) &&
			filter.checkOut <= moment(hotel.availabilityTo)
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
		return filterCountry(hotel) && filterPrice(hotel) && filterSize(hotel);
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
