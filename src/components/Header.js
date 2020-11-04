import React from 'react';

function Header() {
	return (
		<header>
			<h1>Hoteles</h1>
			{/* Acá va a tomar lo que tenga Filters en fecha */}
			<p>desde el <b>martes, 01 de Enero de 2019</b> hasta el <b>miércoles, 2 de enero de 2019</b>
			</p>
		</header>
	);
}

export default Header;
