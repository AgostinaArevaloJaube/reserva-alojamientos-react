import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMapMarkerAlt,
	faBed,
	faDollarSign
} from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.section`
	margin: 2%;
	width: 25%;
	height: 100%;
	border-radius: 3px;
	border: 2px solid #a3a2a2;
	box-shadow: 5px 5px 29px 7px rgba(199, 199, 199, 0.71);

	@media (max-width: 768px) {
		width: 80%;
		margin: 2% auto;
		justify-content: center;
	}

	.infoContainer {
		padding: 3%;
		color: #5e5d5d;
		text-align: left;
	}

	.title {
		font-size: 1.5em;
		margin-bottom: 0.5rem;
	}

	.image {
		width: 100%;
	}

	.button {
		padding: 5%;
		color: white;
		font-size: 1.1em;
		width: 100%;
		background-color: #e7315d;
		border: none;
	}
`;

const Location = styled.div`
	display: flex;
`;

function Card(props) {
	return (
		<CardContainer>
			<img className="image" src={props.photo} alt="" />

			<section className="infoContainer">
				<h1 className="title">{props.name}</h1>
				<p>{props.description}</p>

				<Location>
					<span>
						<FontAwesomeIcon icon={faMapMarkerAlt} />
					</span>
					<p>
						{props.city}, {props.country}
					</p>
				</Location>

				<Location>
					<span>
						<FontAwesomeIcon icon={faBed} />
					</span>
					<p>{props.rooms} Habitaciones</p>
				</Location>

				<Location>
					{/* {props.price} */}
					{/* Acá hay que hacer cambiar de color a cada $ dependiendo el precio */}
					<span>
						<FontAwesomeIcon
							icon={faDollarSign}
							color="ligthGray"
						/>
						<FontAwesomeIcon
							icon={faDollarSign}
							color="ligthGray"
						/>
						<FontAwesomeIcon
							icon={faDollarSign}
							color="ligthGray"
						/>
						<FontAwesomeIcon icon={faDollarSign} color="gray" />
						<FontAwesomeIcon icon={faDollarSign} color="gray" />
					</span>
				</Location>
			</section>

			<button className="button">Reservar</button>
		</CardContainer>
	);
}

export default Card;
