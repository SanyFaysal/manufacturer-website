import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCartArrowDown, faListUl, faTools, faUser } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ml-5 mt-5 ">
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-bold'>Dashboard</h2>
                    <div className='flex justify-end'>
                        <label for="my-drawer-2" class="drawer-button lg:hidden mr-2"><FontAwesomeIcon icon={faListUl} className='text-2xl font-extrabold '></FontAwesomeIcon></label>
                    </div>
                </div>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side shadow-lg ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="border menu py-5 overflow-y-auto w-52 bg-slate-100 text-base-content">
                    <li className='font-bold '><Link to='/dashboard'> <FontAwesomeIcon icon={faCartArrowDown} className="text-xl"></FontAwesomeIcon> My orders</Link> </li>
                    <li className=' font-bold  border-y-2'><Link to='/dashboard/addReview'><FontAwesomeIcon icon={faAdd} className="text-xl"></FontAwesomeIcon> Add Review</Link></li>
                    <li className='font-bold border-b-2'><Link to='/dashboard/myProfile'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>My Profile</Link></li>
                    <li className='font-bold border-b-2'><Link to='/dashboard/addProduct'><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>Add Product</Link></li>
                    <li className='font-bold border-b-2'><Link to='/dashboard/manageOrders'><FontAwesomeIcon icon={faTools}></FontAwesomeIcon>Manage Orders</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;