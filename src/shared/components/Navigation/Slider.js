import React from 'react';
import ReactDOM from 'react';
import { createPortal } from 'react-dom';

import './Slider.scss';

const Slider = props => {
	const element = <aside className='slider'> {props.children}</aside>;

	return createPortal(element, document.getElementById('slider-hook'));
};

export default Slider;
