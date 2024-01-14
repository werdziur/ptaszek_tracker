import React from 'react';
import { useParams } from 'react-router-dom';
import BirdsList from '../components/BirdsList';

const Bird = props => {
	const BIRDS = [
		{
			name: 'Kos',
			birdId: 'b1',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			name: 'Ptak',
			birdId: 'b2',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			name: 'Kukułka',
			birdId: 'b3',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			name: 'Gołąb',
			birdId: 'b4',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
		{
			name: 'Kukułka',
			birdId: 'b3',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
		},
	];

	const birdId = useParams().birdId;
	const filteredBird = BIRDS.filter(observation => observation.birdId === birdId);

	return <BirdsList items={filteredBird} />;
};

export default Bird;
