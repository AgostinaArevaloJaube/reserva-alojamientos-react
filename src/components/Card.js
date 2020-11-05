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

	.locactionContainer {
		margin: 4%;
		display: flex;
		flex-direction: column;
	}

	.iconContainer {
		width: 70%;
		display: flex;
		align-items: center;
		padding: 0.5rem;
	}

	.icon {
		width: 20%;
		height: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #e7315d;
		border-radius: 5px;
	}

	.price {
		width: 90%;
	}
`;

function Card(props) {
	return (
		<CardContainer>
			<img className="image" src={props.photo} alt="" />

			<section className="infoContainer">
				<h1 className="title">{props.name}</h1>
				<p>{props.description}</p>

				<section className="locactionContainer">
					<div className="iconContainer">
						<span className="icon">
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								color="white"
							/>
						</span>
						<p className="text">
							{props.city}, {props.country}
						</p>
					</div>

					<div className="iconContainer">
						<span className="icon">
							<FontAwesomeIcon icon={faBed} color="white" />
						</span>
						<p>{props.rooms} Habitaciones</p>
					</div>

					<div className="iconContainer price">
						{/* {props.price} */}
						{/* Acá hay que hacer cambiar de color a cada $ dependiendo el precio */}
						<span className="icon">
							<FontAwesomeIcon
								icon={faDollarSign}
								color="white"
							/>
							<FontAwesomeIcon
								icon={faDollarSign}
								color="white"
							/>
							<FontAwesomeIcon
								icon={faDollarSign}
								color="white"
							/>
							<FontAwesomeIcon
								icon={faDollarSign}
								color="white"
							/>
							<FontAwesomeIcon
								icon={faDollarSign}
								color="white"
							/>
						</span>
					</div>
				</section>
			</section>

			<button className="button">Reservar</button>
		</CardContainer>
	);
}

export default Card;
