import React from 'react';

import './MainHeader.scss';

const MainHeader = props => {
	return <header className='header'>{props.children}</header>;
};

export default MainHeader;
