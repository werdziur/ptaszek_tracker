import React from 'react';

import ObservationsList from '../components/ObservationsList';

const Observations = props => {
	const OBSERVATIONS = [
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
	return <ObservationsList items={OBSERVATIONS} />;
};

export default Observations;
