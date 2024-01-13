import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
	//dummy content, later will will fetch from express

	const USERS = [
		{
			id: 'c1',
			name: 'Weronika',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
		{
			id: 'c2',
			name: 'Anna',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
		{
			id: 'c3',
			name: 'Karolina',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
		{
			id: 'c4',
			name: 'Paulina',
			image: 'https://cdn.pixabay.com/photo/2020/05/27/16/56/robin-5228041_960_720.jpg',
			birds: 14,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
