
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = ({ summary }) => {
    const { icon, title, desc, color, } = summary
    return (
        <div class='stats stats-vertical mb-10  lg:stats-horizontal   mx-auto'>
            <div class="stat ">
                <div className={`mx-auto p-5 mb-5 shadow-lg flex justify-center items-center w-24 h-24 rounded-full ${color} border-white border-[15px]`}>
                    <FontAwesomeIcon icon={icon} className='text-4xl'></FontAwesomeIcon>
                </div>
                <div class="stat-value mx-auto text-4xl">{title}</div>
                <div class="stat-desc mx-auto text-2xl  text-black">{desc}</div>
            </div>
        </div>
    );
};

export default Summary;