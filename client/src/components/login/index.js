import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return(
        <header className='nav-return'>
            <nav className='navbar container d-flex mx-0 justify-content-between'>
                <Link to='/'>
                    <a className='navbar link'><span className='weatherApp'>Weather App</span>
                    </a>
                </Link>

                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to='/savedLocations' className='link'>Saved Locations</Link>
                            <a href='/' className='link pl-2' onClick={logout}>Logout</a>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>
                                <a className='link'>Login</a>
                            </Link>
                            <Link to='/signup'>
                                <a className='pl-2 link'>Signup</a>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default header;