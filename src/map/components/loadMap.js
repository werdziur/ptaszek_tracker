import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './loadMap.scss';

const ShowMap = props => {
	const [currLocation, setCurrLocation] = useState({});

	useEffect(() => {
		getLocation();
	}, []);

	const getLocation = function () {
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(
				position => setCurrLocation(position.coords),
				function () {
					alert('Could not get your position. Try again!');
				}
			);
	};

	return (
		<div className='map'>
			<MapContainer center={currLocation.coords} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
			</MapContainer>
		</div>
	);
};

export default ShowMap;
