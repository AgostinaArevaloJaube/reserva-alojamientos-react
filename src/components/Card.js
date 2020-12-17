// dependencies
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMapMarkerAlt,
	faBed,
	faDollarSign
} from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.article`
	margin: 2%;
	width: 28%;
	height: 100%;
	border-radius: 4px;
	border: 2px solid #dbdbdb;
	box-shadow: 5px 5px 29px 7px rgba(199, 199, 199, 0.71);

	@media (max-width: 1000px) {
		width: 40%;
		margin: 2% auto;
		justify-content: center;
	}

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
		font-size: 1.2em;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 0.9em;
	}

	.image {
		width: 100%;
		border-radius: 4px;
	}

	.button {
		padding: 5%;
		color: white;
		font-size: 1.1em;
		width: 100%;
		background-color: #457b9d;
		border: none;
		cursor: pointer;
	}

	.locactionContainer {
		margin: 2%;
		display: flex;
		flex-direction: column;

		p {
			text-align: center;
		}
	}

	.iconContainer {
		width: 90%;
		display: flex;
		align-items: center;
		padding: 0.5rem;

		p {
			padding: 0.3em;
		}

		@media (max-width: 1200px) {
			width: 100%;
			flex-direction: column;
		}
	}

	.icon {
		width: 18%;
		height: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #457b9d;
		border-radius: 5px;
	}

	.price {
		width: 100%;
		margin: 0 auto;
		padding: 0.5rem;

		@media (max-width: 1200px) {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.priceIcon {
		width: 25%;
		height: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #457b9d;
		border-radius: 5px;

		@media (max-width: 1200px) {
			width: 35%;
		}
	}

	.size {
		font-size: 17px;
		padding: 1px;
	}
`;

function Card(props) {
	return (
		<CardContainer>
			<img
				className="image"
				src={props.photo}
				alt={`Imagenes del hotel ${props.name}`}
			/>

			<div className="infoContainer">
				<h2 className="title">{props.name}</h2>
				<p>{props.description}</p>

				<div className="locactionContainer">
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

					<div className="price">
						<span className="priceIcon">
							<FontAwesomeIcon
								icon={faDollarSign}
								color={props.price >= 1 ? 'white' : '#cccccc'}
								className="size"
							/>
							<FontAwesomeIcon
								icon={faDollarSign}
								color={props.price >= 2 ? 'white' : '#cccccc'}
								className="size"
							/>
							<FontAwesomeIcon
								icon={faDollarSign}
								color={props.price >= 3 ? 'white' : '#cccccc'}
								className="size"
							/>
							<FontAwesomeIcon
								icon={faDollarSign}
								color={props.price >= 4 ? 'white' : '#cccccc'}
								className="size"
							/>
						</span>
					</div>
				</div>
			</div>

			<button className="button">Reservar</button>
		</CardContainer>
	);
}

export default Card;
