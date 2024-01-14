import React from 'react';

import './BirdInfo';
import Card from '../../shared/components/UIElements/Card';
import BirdInfoItem from './BirdInfoItem';

const BirdInfo = props => {
	if (props.items.length === 0) {
		return (
			<div className='user-list'>
				<Card className='user-item'>
					<div>
						<div>
							<h2>No users found</h2>
						</div>
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div className='user-list'>
			{props.items.map(user => (
				<BirdInfoItem key={user.id} id={user.id} image={user.image} name={user.name} description={user.description} />
			))}
		</div>
	);
};

export default BirdInfo;
