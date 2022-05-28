import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Feature = ({ feature }) => {
    return (
        <div class='stats stats-vertical  lg:stats-horizontal  mx-auto'>
            <div class="stat ">
                <div className={`mx-auto p-3 mb-5 shadow-lg flex bg-red-100 justify-center items-center  w-24 h-24 rounded-full border-white border-[15px]`}>
                    <FontAwesomeIcon icon={feature.icon} className='text-3xl'></FontAwesomeIcon>
                </div>
                <div class="stat-value mx-auto text-2xl text-red-400">{feature.title}</div>
                <p class="  text-black text-center">{feature.desc}</p>
            </div>
        </div>
    );
};

export default Feature;