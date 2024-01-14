import './App.scss';
import './index.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Users from './users/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Birds from './birds/pages/Birds';
import Bird from './birds/pages/Bird';
import Observations from './observations/pages/UserObservations';
// import Map from './map/pages/Map';

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<Routes>
				{/* <Route path='/' element={<Map />} /> */}
				<Route path='/users' element={<Users />} />
				<Route path='/birds' element={<Birds />} />
				<Route path='/:userId/observations' element={<Observations />} />
				<Route path='/birds/:birdId' element={<Bird />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	);
};

export default App;
