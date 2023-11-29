import React from 'react';
import UsersList from './UsersList';

import './UsersList.css';

const UsersItem = props => {
	return (
		<li>
			<div>
				<div>
					<img src={props.image} alt={props.name} />
				</div>
				<div>
					<h2>{props.name}</h2>
				</div>
				<div>
					<h2>
						{props.birdsCount} {props.birdsCount === 1 ? 'Bird' : 'Birds'}
					</h2>
				</div>
			</div>
		</li>
	);
};

export default UsersItem;
