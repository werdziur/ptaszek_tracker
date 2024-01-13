import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';

import './ObservationItem.scss';
import ObservationsList from './ObservationsList';

const ObservationItem = props => {
	return (
		<Card className='observation-item'>
			<div className='observation-container'>
				<div className='observation-item__image'>
					<img className='observation-item__image--img' src={props.image} alt={props.name} />
				</div>

				<div className='observation-item__text'>
					<div className='observation-item__name'>
						<h2 className='observation-item__name--text'>{props.name}</h2>
						<h2 className='observation-item__name--date'>
							<span>Observation added on:</span> {props.date}
						</h2>
					</div>
				</div>
			</div>

			<div className='observation-item__actions'>
				<Link to={`/birds/${props.birdId}`}>
					<button>SEE MORE</button>
				</Link>
				<button>VIEW ON MAP</button>
				<button>EDIT</button>
				<button>DELETE</button>
			</div>
		</Card>
	);
};

export default ObservationItem;
