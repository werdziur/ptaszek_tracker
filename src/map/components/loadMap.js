import React from 'react';

import './loadMap.scss';

const ShowMap = props => {
	return (
		<div>
			<h1>YOUR CURRENT LOCATION</h1>
			<p>Latitude: {props.latitude} </p>
			<p>Longitude: {props.longitude} </p>
		</div>
	);
};

export default ShowMap;
