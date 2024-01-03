import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './BirdList.scss';

const BirdList = props => {
	if (props.item.length === 0) {
		return (
			<div className='bird-list center'>
				<Card>
					<h2>No birds found. Maybe create one?</h2>
				</Card>
			</div>
		);
	}
};

export default BirdList;
