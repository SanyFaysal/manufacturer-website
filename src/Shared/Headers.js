import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {

    const pages = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blog</Link></li>
        <li><Link to='/myProfile'>My Profile</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className='bg-black  '>
            <div class="navbar  container mx-auto  px-12 text-white">
                <div class="navbar-start ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {pages}
                        </ul>
                    </div>
                    <Link to='/'>Moto Bike </Link>
                </div>
                <div class="navbar-end hidden lg:flex container mx-auto ">
                    <ul class="menu menu-horizontal p-0">
                        {pages}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Headers;