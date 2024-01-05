import React from 'react';

import BirdsList from '../components/BirdsList';

const Birds = props => {
	const BIRDS = [
		{
			id: 'w1',
			name: 'Kos',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			id: 'w1',
			name: 'Ptak',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			id: 'w1',
			name: 'Kukułka',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
	];
	return <BirdsList items={BIRDS} />;
};

export default Birds;
