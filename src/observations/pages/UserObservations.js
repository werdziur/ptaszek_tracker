import React from 'react';
import { useParams } from 'react-router-dom';

import ObservationsList from '../components/ObservationsList';

const Observations = props => {
	const OBSERVATIONS = [
		{
			id: 'w1',
			name: 'Kos',
			birdId: 'b1',
			date: new Date().toJSON().slice(0, 10),
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			creator: 'c1',
			location: {
				lat: 50.0170752,
				lng: 19.90656,
			},
		},
		{
			id: 'w2',
			name: 'Ptak',
			birdId: 'b2',
			date: new Date().toJSON().slice(0, 10),
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			creator: 'c1',
			location: {
				lat: 50.0170752,
				lng: 19.90656,
			},
		},
		{
			id: 'w3',
			name: 'Kukułka',
			birdId: 'b3',
			date: new Date().toJSON().slice(0, 10),
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			creator: 'c2',
			location: {
				lat: 50.0170752,
				lng: 19.90656,
			},
		},
		{
			id: 'w4',
			name: 'Gołąb',
			birdId: 'b4',
			date: new Date().toJSON().slice(0, 10),
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			creator: 'c3',
			location: {
				lat: 50.0170752,
				lng: 19.90656,
			},
		},
		{
			id: 'w5',
			name: 'Kukułka',
			birdId: 'b3',
			date: new Date().toJSON().slice(0, 10),
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			creator: 'c1',
			location: {
				lat: 50.0170752,
				lng: 19.90656,
			},
		},
	];

	const userId = useParams().userId;
	const filteredObservations = OBSERVATIONS.filter(observation => observation.creator === userId);
	return <ObservationsList items={filteredObservations} />;
};

export default Observations;
