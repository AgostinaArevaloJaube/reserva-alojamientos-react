import React from 'react';
import styled from 'styled-components';

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

function Cards() {
	return (
		<CardsContainer>
			{hotelsData.map((hotelData) => (
				<Card {...hotelData} key={hotelData.slug}/>
			))}
		</CardsContainer>
	);
}

export default Cards;
