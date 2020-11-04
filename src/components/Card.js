import React from 'react';

function Card(props) {
	return (
		<section>
			<img src={props.photo} alt="" />
			<h1>{props.name}</h1>
			<p>{props.description}</p>

			<div>
				{/* Falta el ícono */}
				<p>
					{props.city}, {props.country}
				</p>
			</div>

			<div>
				{/* Falta el ícono */}
				<p>{props.rooms} Habitaciones</p>
			</div>

			<div>
				{/* Falta el ícono */}
				<p>{props.price}</p>
			</div>

			<button>Reservar</button>
		</section>
	);
}

export default Card;
