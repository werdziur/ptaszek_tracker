import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './BirdsList.scss';
import BirdItem from './BirdItem';

const BirdsList = props => {
	if (props.items.length === 0) {
		return (
			<div className='birds-list center'>
				<Card className='bird-item'>
					<h2>No birds found. Try again.</h2>
				</Card>
			</div>
		);
	}
	return (
		<div className='birds-list'>
			{props.items.map(bird => (
				<BirdItem key={bird.id} id={bird.id} image={bird.image} name={bird.name} />
			))}
		</div>
	);
};

export default BirdsList;
