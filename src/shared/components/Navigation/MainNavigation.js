import React from 'react';
import logo from './PtaszekLogo.png';
import MainHeader from './MainHeader';
import './MainNavigation.scss';
import NavLinks from './NavLinks';

const MainNavigation = props => {
	return (
		<MainHeader>
			<div className='burger-button'>
				<div className='burger-button__container'>
					<div className='burger-button__bars'></div>
				</div>
			</div>

			<nav className='navigation'>
				<div className='navigation__logo'>
					<img
						className='navigation__logo--image'
						src={logo}
						alt='logo showing a bird and name of the app which is ptaszek tracker'
					/>
				</div>
				<div className='navigation__items'>
					<NavLinks />
				</div>
			</nav>
		</MainHeader>
	);
};

export default MainNavigation;
