import React from 'react';

import './UsersList.scss';
import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';

const UsersList = props => {
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
				<UserItem key={user.id} id={user.id} image={user.image} name={user.name} birdsCount={user.birds} />
			))}
		</div>
	);
};

export default UsersList;
