// dependencies
import React from 'react';

// components
import Header from './components/Header';
import Cards from './components/Cards';
import { FilterProvider } from './components/FilterContext';

const App = () => {
	return (
			<FilterProvider>
				<Header />
				<Cards />
			</FilterProvider>
	);
};

export default App;
