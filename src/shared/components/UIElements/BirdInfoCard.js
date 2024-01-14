import React from 'react';

import './BirdInfoCard.scss';

const BirdInfoCard = props => {
	return (
		<div className={`card ${props.className}`} style={props.style}>
			{props.children}
		</div>
	);
};

export default BirdInfoCard;
