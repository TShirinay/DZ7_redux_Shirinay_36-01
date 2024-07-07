import React from 'react';
import './header.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className='header'>
            <ul className='ul_header'>
                <li className='li_header'>
                    <Link to={'/pageOne'}>
                        Harry Potter
                    </Link>
                </li>
                <li className='li_header'>
                    <Link to={'/pageTwo'}>
                        titans
                    </Link>
                </li>
                <li className='li_header'>
                    <Link to={'/pageThree'}>
                        characters
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;