import React from 'react';
import './Slider.scss';

const Slider = props => {
	return <aside className='slider'> {props.children}</aside>;
};

export default Slider;
