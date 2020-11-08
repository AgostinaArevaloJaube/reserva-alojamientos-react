import React from 'react';

import Header from './components/Header';
import Filters from './components/Filters';
import Cards from './components/Cards';
import { FilterProvider } from './components/FilterContext';

const App = () => {
	return (
		<>
			<FilterProvider>
				<Header />
				<Filters />
				<Cards />
			</FilterProvider>
		</>
	);
};

export default App;
