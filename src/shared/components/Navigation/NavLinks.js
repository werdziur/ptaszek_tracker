import React, { useLayoutEffect } from 'react';
import './NavLinks.scss';
import { NavLink } from 'react-router-dom';

const NavLinks = props => {
	return (
		<ul className='navigation-list'>
			<li className='navigation-list__item'>
				<NavLink to='#mylist'>MY LIST</NavLink>
			</li>
			<li className='navigation-list__item'>
				<NavLink to='#allbirds'>BIRD CATALOG</NavLink>
			</li>
			<li className='navigation-list__item'>
				<NavLink to='#contact'>CONTACT</NavLink>
			</li>
		</ul>
	);
};
{
}

export default NavLinks;
