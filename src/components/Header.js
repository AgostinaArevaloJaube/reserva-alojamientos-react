import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0;
	padding: 3%;
	color: #e7315d;
`;

function Header() {
	return (
		<HeaderContainer>
			<h1>Hoteles</h1>
			{/* Acá va a tomar lo que tenga Filters en fecha */}
			<br/>
			<i>
				desde el <b>martes, 01 de Enero de 2019</b> hasta el{' '}
				<b>miércoles, 2 de enero de 2019</b>
			</i>
		</HeaderContainer>
	);
}

export default Header;
