import React from 'react';

import Dates from './Dates';

function Filters() {
	return (
		<nav>
			<Dates />
			<Dates />
			<select name="countries">
				<option>Todos los Paises</option>
				<option>Argentina</option>
				<option>Brasil</option>
				<option>Chile</option>
				<option>Uruguay</option>
			</select>

			<select name="prices">
				<option>Cualquier precio</option>
				<option>$</option>
				<option>$$</option>
				<option>$$$</option>
				<option>$$$$</option>
			</select>
			<select name="hotel-size">
				<option>Cualquier tamaño</option>
				<option>Hotel pequeño</option>
				<option>Hotel mediano</option>
				<option>Hotel grande</option>
			</select>
		</nav>
	);
}

export default Filters;
