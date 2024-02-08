// import React, { useEffect, useState } from 'react';
import ShowMap from '../components/loadMap';
// import { createPortal } from 'react-dom';

const Map = props => {
	// const [currLocation, setCurrLocation] = useState({});

	// useEffect(() => {
	// 	getLocation();
	// }, []);

	// const getLocation = function () {
	// 	if (navigator.geolocation)
	// 		navigator.geolocation.getCurrentPosition(
	// 			position => setCurrLocation(position.coords),
	// 			function () {
	// 				alert('Could not get your position. Try again!');
	// 			}
	// 		);
	// };

	return <ShowMap />;
	// return createPortal(<ShowMap />, document.getElementById('map'));
};
export default Map;
