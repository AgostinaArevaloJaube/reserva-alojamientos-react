import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faSignOutAlt,
	faGlobe,
	faBed,
	faDollarSign
} from '@fortawesome/free-solid-svg-icons';

const Navbar = styled.nav`
	margin: 0 auto;
	background-color: #e7315d;
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;

	@media (max-width: 768px) {
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

	@media (max-width: 768px) {
		margin: 1% auto;
		justify-content: flex-start;
		min-width: 60%;
	}

	input,
	select {
		outline: none;
		border: none;
		color: gray;

		&:active {
			outline: none;
		}
	}
`;

function Filters() {
	return (
		<Navbar>
			<Filter>
				<FontAwesomeIcon icon={faSignInAlt} color="#a3a2a2" />
				<input type="date" />
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faSignOutAlt} color="#a3a2a2" />
				<input type="date" />
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faGlobe} color="#a3a2a2" />
				<select name="countries">
					<option>Todos los Paises</option>
					<option>Argentina</option>
					<option>Brasil</option>
					<option>Chile</option>
					<option>Uruguay</option>
				</select>
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faDollarSign} color="#a3a2a2" />
				<select name="prices">
					<option>Cualquier precio</option>
					<option>$</option>
					<option>$$</option>
					<option>$$$</option>
					<option>$$$$</option>
				</select>
			</Filter>

			<Filter>
				<FontAwesomeIcon icon={faBed} color="#a3a2a2" />
				<select name="hotel-size">
					<option>Cualquier tamaño</option>
					<option>Hotel pequeño</option>
					<option>Hotel mediano</option>
					<option>Hotel grande</option>
				</select>
			</Filter>
		</Navbar>
	);
}

export default Filters;
