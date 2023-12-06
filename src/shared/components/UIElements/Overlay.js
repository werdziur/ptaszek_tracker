import React from 'react';
import ReactDOM from 'react';
import { createPortal } from 'react-dom';

import '../UIElements/Overlay.scss';

const Overlay = props => {
	const backdrop = (
		<div className='overlay' onClick={props.onClick}>
			{props.children}
		</div>
	);

	return createPortal(backdrop, document.getElementById('overlay-hook'));
};

export default Overlay;
