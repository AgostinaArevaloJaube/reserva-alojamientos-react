import React from 'react';
import Card from './Card';

import hotelsData from '../data';
import imagen from '../assets/images/la-bamba-de-areco.jpg';



function Cards() {
	return hotelsData.map((hotelData) => (
		<Card {...hotelData} imagen={imagen} />
	));
}

export default Cards;
