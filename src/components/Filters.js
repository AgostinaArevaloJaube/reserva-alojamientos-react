// dependencies
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
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 980px) {
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

	@media (max-width: 980px) {
		margin: 1% auto;
		justify-content: flex-start;
		min-width: 60%;
	}

	input,
	select,
	button {
		width: 100%;
		outline: none;
		border: none;
		color: gray;
		cursor: pointer;

		&:active {
			outline: none;
		}
	}

	.button {
		background-color: #f08080;
	}
`;

const Button = styled.div`
	margin: 0.5rem;
	padding: 0.5rem;
	max-width: 40%;
	background-color: #f08080;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 980px) {
		margin: 1% auto;
		justify-content: flex-start;
		min-width: 40%;
		text-align: center;
	}

	button {
		width: 100%;
		outline: none;
		border: none;
		color: white;
		cursor: pointer;

		&:active {
			outline: none;
		}
	}

	.button {
		background-color: #f08080;
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
			checkIn: {},
			checkOut: {},
			country: 'Todos los paises',
			price: 'Cualquier precio',
			size: 'Cualquier tamaño'
		});
	};

	return (
		<Navbar>
			<Filter>
				<FontAwesomeIcon icon={faSignInAlt} color="#a3a2a2" />
				<input
					type="date"
					name="checkIn"
					onChange={handleFilters}
					value={
						Object.keys(filter.checkIn).length === 0
							? {}
							: moment(filter.checkIn).format('YYYY[-]MM[-]DD')
					}
				/>
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faSignOutAlt} color="#a3a2a2" />
				<input
					type="date"
					name="checkOut"
					onChange={handleFilters}
					value={
						Object.keys(filter.checkOut).length === 0
							? {}
							: moment(filter.checkOut).format('YYYY[-]MM[-]DD')
					}
				/>
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faGlobe} color="#a3a2a2" />
				<select
					name="country"
					onChange={handleFilters}
					value={filter.country}
				>
					<option value="Todos los paises">Todos los Paises</option>
					<option value="Argentina">Argentina</option>
					<option value="Brasil">Brasil</option>
					<option value="Chile">Chile</option>
					<option value="Uruguay">Uruguay</option>
				</select>
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faDollarSign} color="#a3a2a2" />
				<select
					name="price"
					onChange={handleFilters}
					value={filter.price}
				>
					<option value="Cualquier precio">Cualquier precio</option>
					<option value="1">$</option>
					<option value="2">$$</option>
					<option value="3">$$$</option>
					<option value="4">$$$$</option>
				</select>
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faBed} color="#a3a2a2" />
				<select
					name="size"
					onChange={handleFilters}
					value={filter.size}
				>
					<option value="Cualquier tamaño">Cualquier tamaño</option>
					<option value="Hotel pequeño">Hotel pequeño</option>
					<option value="Hotel mediano">Hotel mediano</option>
					<option value="Hotel grande">Hotel grande</option>
				</select>
			</Filter>

			<Button>
				<button className="button" onClick={handleReset}>
					Reset
				</button>
			</Button>
		</Navbar>
	);
};

export default Filters;
