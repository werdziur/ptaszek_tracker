import React from 'react';
import BirdInfoCard from '../../shared/components/UIElements/BirdInfoCard';

import './BirdInfoItem.scss';

const BirdInfoItem = props => {
	return (
		<BirdInfoCard className='bird-item'>
			<div className='bird-card'>
				<div className='bird-card__item'>
					<div className='bird-card__item--image'>
						<img src={props.image} alt={props.name} />
					</div>
					<div className='bird-card__item--content'>
						<h3 className='bird-card__item--name'>{props.name}</h3>
						<p className='bird-card__item--description'>{props.description}</p>
					</div>
				</div>
			</div>
		</BirdInfoCard>
	);
};

export default BirdInfoItem;
