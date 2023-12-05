import React, { useState } from 'react';

import logo from './PtaszekLogo.png';
import MainHeader from './MainHeader';
import Slider from './Slider';
import './MainNavigation.scss';
import NavLinks from './NavLinks';

const MainNavigation = props => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};

	return (
		<React.Fragment>
			{toggle ? (
				<Slider>
					<nav className='navigation-slider'>
						<NavLinks />
					</nav>
				</Slider>
			) : (
				<></>
			)}

			<MainHeader>
				<nav className='burger-button' onClick={handleClick}>
					<div className='burger-button__container'>
						<div className='burger-button__bars'></div>
					</div>
				</nav>

				<nav className='navigation'>
					<div className='navigation__logo'>
						<img
							className='navigation__logo--image'
							src={logo}
							alt='logo showing a bird and name of the app which is ptaszek tracker'
						/>
					</div>
					<div className='navigation__items header-nav'>
						<NavLinks />
					</div>
				</nav>
			</MainHeader>
		</React.Fragment>
	);
};

export default MainNavigation;
