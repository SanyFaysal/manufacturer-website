
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = ({ summary }) => {
    const { icon, title, desc, color, } = summary
    return (
        <div class='stats stats-vertical mb-10  lg:stats-horizontal   mx-auto'>
            <div class="stat ">
                <div className={`mx-auto p-5 mb-5 shadow-lg flex justify-center items-center w-32 h-32 rounded-full ${color} border-white border-[15px]`}>
                    <FontAwesomeIcon icon={icon} className='text-5xl'></FontAwesomeIcon>
                </div>
                <div class="stat-value mx-auto text-4xl">{title}</div>
                <div class="stat-desc mx-auto text-xl font-bold text-black">{desc}</div>
            </div>
        </div>
    );
};

export default Summary;