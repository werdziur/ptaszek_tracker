import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
	//dummy content, later will will fetch from express

	const USERS = [
		{
			id: 'w1',
			name: 'Weronika',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
		{
			id: 'w1',
			name: 'Weronika',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
		{
			id: 'w1',
			name: 'Weronika',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
		{
			id: 'w1',
			name: 'Weronika',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
		{
			id: 'w1',
			name: 'Weronika',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
		{
			id: 'w1',
			name: 'Weronika',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
