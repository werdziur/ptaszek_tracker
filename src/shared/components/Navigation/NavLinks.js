import React, { useLayoutEffect } from 'react';
import './NavLinks.scss';
import { NavLink } from 'react-router-dom';

const NavLinks = props => {
	return (
		<ul className='navigation-list'>
			<li className='navigation-list__item'>
				<NavLink to='/u1/birds'>MY LIST</NavLink>
			</li>
			<li className='navigation-list__item'>
				<NavLink to='/birdcatalog'>BIRD CATALOG</NavLink>
			</li>
			<li className='navigation-list__item'>
				<NavLink to='/contact'>CONTACT</NavLink>
			</li>
			{/* <li className='navigation-list__item'>
				<NavLink to='/users'>USERS</NavLink>
			</li> */}
			{/* <li className='navigation-list__item'>
				<NavLink to='/auth'>AUTHENTICATE</NavLink>
			</li> */}
		</ul>
	);
};
{
}

export default NavLinks;
