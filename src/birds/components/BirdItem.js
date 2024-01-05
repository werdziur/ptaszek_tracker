import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';

import './BirdItem.scss';
import BirdsList from './BirdsList';

const BirdItem = props => {
	return (
		<Card className='bird-item'>
			{/* <Link to={`/${props.id}/places`}> */}
			<div className='bird-item__image'>
				<img className='bird-item__image--img' src={props.image} alt={props.name} />
			</div>

			<div className='bird-item__text'>
				<div className='bird-item__name'>
					<h2 className='bird-item__name--text'>{props.name}</h2>
				</div>
			</div>
			{/* </Link> */}
		</Card>
	);
};

export default BirdItem;
