import React from 'react';

import BirdsList from '../components/BirdsList';

const Birds = props => {
	const BIRDS = [
		{
			id: 'w1',
			name: 'Kos',
			birdId: 'b1',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			id: 'w2',
			name: 'Ptak',
			birdId: 'b2',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			id: 'w3',
			name: 'Kukułka',
			birdId: 'b3',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			id: 'w4',
			name: 'Gołąb',
			birdId: 'b4',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			id: 'w5',
			name: 'Strzyżyk',
			birdId: 'b3',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
	];
	return <BirdsList items={BIRDS} />;
};

export default Birds;
