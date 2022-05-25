import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Headers = () => {
    const [user] = useAuthState(auth)
    const pages = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/blogs'>Blog</Link></li>
        <li><Link to='/myProfile'>My Profile</Link></li>
        {user ?
            <div class="dropdown dropdown-end">
                <div className='flex'>
                    <li className='mt-3' onClick={() => signOut(auth)}>Log Out</li>
                    <div class="avatar placeholder mt-2 ml-3">
                        <div class="bg-slate-600 text-white rounded-full w-8 h-8">
                            <label tabIndex="0" class="text-sm font-bold">{user?.displayName?.split(' ')[0].slice(0, 1)}{user?.displayName?.split(' ')[1].slice(0, 1)}</label>
                        </div>
                    </div>
                </div>
                <ul tabIndex="0" class="dropdown-content menu p-2 shadow-lg   w-52">
                    <div class="avatar  mb-4 mt-5">
                        <div class="w-24 h-24 mt-2 rounded mx-auto">
                            <img src={user?.photoURL} alt={user?.displayName} />
                        </div>
                    </div>
                    <p className=' block text-center text-black  text-xs font-bold'>{user?.displayName}</p>
                    <p className=' text-center text-xs text-black   font-bold'>{user?.email}</p>
                </ul>
            </div>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className=' bg-black'>
            <div class="navbar  container mx-auto  px-12 text-white">
                <div class="navbar-start  ">
                    <div class="dropdown text-black">
                        <label tabindex="0" class="btn btn-link text-white lg:hidden">
                            <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
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