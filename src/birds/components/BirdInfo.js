import React from 'react';

import './BirdInfo.scss';
import BirdInfoCard from '../../shared/components/UIElements/BirdInfoCard';
import BirdInfoItem from './BirdInfoItem';

const BirdInfo = props => {
	if (props.items.length === 0) {
		return (
			<div className='bird-container'>
				<BirdInfoCard className='bird-item'>
					<div>
						<div>
							<h2>No birds found</h2>
						</div>
					</div>
				</BirdInfoCard>
			</div>
		);
	}

	return (
		<div className='bird-container'>
			{props.items.map(user => (
				<BirdInfoItem key={user.id} id={user.id} image={user.image} name={user.name} description={user.description} />
			))}
		</div>
	);
};

export default BirdInfo;
