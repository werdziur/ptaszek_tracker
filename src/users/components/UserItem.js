import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';

import './UserItem.scss';
import UsersList from './UsersList';

const UserItem = props => {
	return (
		<Card className='user-item'>
			<Link to={`/${props.id}/places`}>
				<div className='user-item__image'>
					<img className='user-item__image--img' src={props.image} alt={props.name} />
				</div>

				<div className='user-item__text'>
					<div className='user-item__name'>
						<h2 className='user-item__name--text'>{props.name}</h2>
					</div>

					<div className='user-item__birds'>
						<h2 className='user-item__birds--text'>
							{props.birdsCount} {props.birdsCount === 1 ? 'Bird' : 'Birds'}
						</h2>
					</div>
				</div>
			</Link>
		</Card>
	);
};

export default UserItem;
