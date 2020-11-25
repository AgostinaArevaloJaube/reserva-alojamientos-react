// Acá importar el el state y el usecontext
import React, { useContext } from 'react';
import { FilterContext } from './FilterContext';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faSignOutAlt,
	faGlobe,
	faBed,
	faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const Navbar = styled.nav`
	margin: 0 auto;
	background-color: #457b9d;
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;

	@media (max-width: 900px) {
		flex-direction: column;
		margin: 2% auto;
		padding: 1rem;
	}
`;

const Filter = styled.section`
	margin: 0.5rem;
	padding: 0.5rem;
	max-width: 40%;
	background-color: #fff;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 900px) {
		margin: 1% auto;
		justify-content: flex-start;
		min-width: 60%;
	}

	input,
	select, button {
		outline: none;
		border: none;
		color: gray;
		
		&:active {
			outline: none;
		}
	}

	.button {
		
	}
`;

const Filters = () => {
	const [filter, setFilter] = useContext(FilterContext);

	const handleFilters = (event) => {
		let { name, value } = event.target;
		if (name === 'checkIn' || name === 'checkOut') {
			value = moment(value);
		}
		const newData = { ...filter, [name]: value };
		setFilter(newData);
	};

	const handleReset = (event) => {
		setFilter({
			checkIn: moment(),
			checkOut: moment().add(1, 'days'),
			country: undefined,
			price: undefined,
			size: undefined
		});
	};

	return (
		<Navbar>
			<Filter>
				<FontAwesomeIcon icon={faSignInAlt} color="#a3a2a2" />
				<input type="date" name="checkIn" onChange={handleFilters} />
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faSignOutAlt} color="#a3a2a2" />
				<input type="date" name="checkOut" onChange={handleFilters} />
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faGlobe} color="#a3a2a2" />
				<select name="country" onChange={handleFilters}>
					<option>Todos los Paises</option>
					<option>Argentina</option>
					<option>Brasil</option>
					<option>Chile</option>
					<option>Uruguay</option>
				</select>
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faDollarSign} color="#a3a2a2" />
				<select name="price" onChange={handleFilters}>
					<option value="0">Cualquier precio</option>
					<option value="1">$</option>
					<option value="2">$$</option>
					<option value="3">$$$</option>
					<option value="4">$$$$</option>
				</select>
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faBed} color="#a3a2a2" />
				<select name="size" onChange={handleFilters}>
					<option value="0">Cualquier tamaño</option>
					<option value="1">Hotel pequeño</option>
					<option value="2">Hotel mediano</option>
					<option value="3">Hotel grande</option>
				</select>
			</Filter>

			<Filter>
				<button class="button" onClick={handleReset}>
					Reset
				</button>
			</Filter>
		</Navbar>
	);
};

export default Filters;
