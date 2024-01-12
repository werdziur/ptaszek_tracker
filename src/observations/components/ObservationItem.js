import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';

import './ObservationItem.scss';
import ObservationsList from './ObservationsList';

const ObservationItem = props => {
	return (
		<Card className='observation-item'>
			{/* <Link to={`/${props.id}/places`}> */}
			<div className='observation-item__image'>
				<img className='observation-item__image--img' src={props.image} alt={props.name} />
			</div>

			<div className='observation-item__text'>
				<div className='observation-item__name'>
					<h2 className='observation-item__name--text'>{props.name}</h2>
				</div>
			</div>
			<div className='observation-item__actions'>
				<button>VIEW ON MAP</button>
				<button>EDIT</button>
				<button>DELETE</button>
			</div>
			{/* </Link> */}
		</Card>
	);
};

export default ObservationItem;
