import React from 'react';

import Header from './components/Header';
import Filters from './components/Filters';
import Cards from './components/Cards';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Filters />
			<Cards />
		</React.Fragment>
	);
}

export default App;
