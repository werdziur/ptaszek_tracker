import React from 'react';

import './BirdInfoCard.scss';

const BirdInfoCard = props => {
	return (
		<div className={`bird-component ${props.className}`} style={props.style}>
			{props.children}
		</div>
	);
};

export default BirdInfoCard;
