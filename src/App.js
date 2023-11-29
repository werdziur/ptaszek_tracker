import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Users from './users/pages/Users';
// import Birds from './birds/pages/Birds';
// import Map from './map/pages/Map';

const App = () => {
	return (
		<Router>
			<Routes>
				{/* <Route path='/' element={<Map />} /> */}
				<Route path='/users' element={<Users />} />
				{/* <Route path='/birds' element={<Birds />} /> */}
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	);
};

export default App;
