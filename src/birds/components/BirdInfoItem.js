import React from 'react';
import Card from '../../shared/components/UIElements/Card';

import './BirdInfoItem.scss';

const BirdInfoItem = props => {
	return (
		<Card className='user-item'>
			<div className='user-item__image'>
				<img className='user-item__image--img' src={props.image} alt={props.name} />
			</div>

			<div className='user-item__text'>
				<div className='user-item__name'>
					<h2 className='user-item__name--text'>{props.name}</h2>
				</div>

				<div className='user-item__birds'>{props.description}</div>
			</div>
		</Card>
	);
};

export default BirdInfoItem;
