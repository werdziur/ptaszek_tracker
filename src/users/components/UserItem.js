import React from 'react';

import './UserItem.css';
import UsersList from './UsersList';

const UserItem = props => {
	return (
		<li className='card'>
			<div className='user-item'>
				<div className='image'>
					<img className='user-item__image' src={props.image} alt={props.name} />
				</div>
				<div className='user-item__textbox'>
					<div className='user-item__textbox--main name'>
						<h2 className='user-item__text name'>{props.name}</h2>
					</div>

					<div className='user-item__textbox--main'>
						<h2 className='user-item__text birds'>
							{props.birdsCount} {props.birdsCount === 1 ? 'Bird' : 'Birds'}
						</h2>
					</div>
				</div>
			</div>
		</li>
	);
};

export default UserItem;
