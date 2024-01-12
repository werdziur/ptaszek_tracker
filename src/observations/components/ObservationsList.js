import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './ObservationsList.scss';
import ObservationItem from './ObservationItem';

const ObservationsList = props => {
	if (props.items.length === 0) {
		return (
			<div className='observation-list center'>
				<Card className='observation-item'>
					<h2>No birds found. Maybe create one?</h2>
				</Card>
			</div>
		);
	}
	return (
		<div className='observation-list'>
			{props.items.map(observ => (
				<ObservationItem
					key={observ.id}
					id={observ.id}
					image={observ.image}
					name={observ.name}
					creatorId={observ.creator}
					coordinates={observ.location}
				/>
			))}
		</div>
	);
};

export default ObservationsList;
