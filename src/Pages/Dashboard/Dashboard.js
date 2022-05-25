import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faAppleAlt, faBars, faCartArrowDown, faCartPlus, faEllipsis, faEllipsisVertical, faHeadSideCough, faListDots, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faComment, faCommentAlt, faCommenting } from '@fortawesome/free-regular-svg-icons';
const Dashboard = () => {

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ml-5 mt-5">
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-bold'>Dashboard</h2>
                    <label for="my-drawer-2" class="drawer-button lg:hidden"><FontAwesomeIcon icon={faListDots} className='text-2xl font-extrabold '></FontAwesomeIcon></label>
                </div>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side shadow-lg ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class=" menu p-4 overflow-y-auto w-48 bg-slate-200 text-base-content">
                    <li className='font-bold'><Link to='/dashboard'> <FontAwesomeIcon icon={faCartArrowDown} className="font-xl"></FontAwesomeIcon> My orders</Link> </li>
                    <li className='font-bold'><Link to='/dashboard/addPart'><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> Add a Parts</Link></li>
                    <li className=' font-bold'><Link to='/dashboard/addReview'><FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon> Add Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;